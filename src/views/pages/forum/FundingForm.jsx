import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import apis from '../../../apis/apis';
import contractValue from '../../../constants/contract';
import web3Selector from '../../../components/header/redux/Web3.Selector';

const FundingForm = ({title, description, date, file, setLoadingCreatePost}) => {
  // funding
  const [totalFunding, setTotalFunding] = useState(0);
  const [interest, setInterest] = useState('');

  const web3 = useSelector(web3Selector.selectWeb3);

  const handlePost = async () => {
    try {
      if (!title || !description || !date || !file) {
        alert('Please Check Enter Data');
        return;
      }

      if (web3 === null) {
        alert('Can\'t connect to wallet');
        return;
      }

      setLoadingCreatePost(true);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0]; // TODO Check
      const {address: tokenAddress} = queryString.parse(window.location.search);
      let params = {
        title,
        description,
        date,
        totalFunding,
        interest,
        walletAddress,
        tokenAddress,
      };

      // TODO Check
      const {size, type} = file[0];
      let response = null;
      if (size / 1000000 < 100) {
        if (type === 'image/png' || type === 'image/jpg' || 'image/jpeg') {
          try {
            let data = new FormData();
            data.append('file', file[0]);
            data.append('params', JSON.stringify(params));
            response = await apis.postFunding(data);
          } catch (error) {
            console.log(error);
            alert('Post a task server error');
            return;
          }
        } else {
          setLoadingCreatePost(false);
          alert('Check image type');
          return;
        }
      }

      const {data} = response;
      const tokenContract = new web3.eth.Contract(
          contractValue.ABIToken,
          contractValue.addressToken,
      );
      await tokenContract.methods
          .approve(contractValue.addressContractBuilder, web3.utils.toWei(totalFunding, 'Ether'))
          .send({from: accounts[0]})
          .on('transactionHash', async (hash) => { // TODO check
          });

      let contractBuilder = new web3.eth.Contract(
          contractValue.ABIContractBuilder,
          contractValue.addressContractBuilder,
      );
      await contractBuilder.methods
          .stakingAndFunding(data, parseInt(totalFunding), new Date(date).getTime())
          .send({from: accounts[0]});

      setLoadingCreatePost(false);
      alert('Create Funding Successful \r\b Press ok to confirm');
      window.location.reload();

      // TODO check
      /*
      contractBuilder.events
          .NewFunding({}, (err, event) => {
            if (err) {
              alert('New Funding Error');
              console.log(err);
              // TODO delete funding in database
              return;
            }
            // console.log( 'eror', err, event);
          })
          .on('connected', function(subscriptionId) {
            console.log('subscriptionId', subscriptionId);
          })
          .on('data', async function(event) {
            alert('Create Funding Successful \r\b Press ok to confirm');
            window.location.reload();
            console.log('data', event);
          })
          .on('changed', function(event) {
            console.log('change');
          })
          .on('error', function(error, receipt) {
            alert('Event Error');
            // TODO delete funding in database
            return;
          });
          */
    } catch (error) {
      console.log(error);
      alert('Create funding post failure');
      return;
    }
  };
  return (
    <div className="create-post-funding">
      <div className="col-sm">
        <div className="form-group">
          <p className="mb-2">Interest</p>
          <div className="mb-20">
            <textarea
              name="reply-message"
              rows={4}
              className="form-control"
              placeholder="Interest"
              value={interest}
              defaultValue={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>
          <p className="mb-2">Total Funding</p>
          <div>
            <input
              type="number"
              className="form-control"
              name="funding-number"
              placeholder="Total funding $"
              onChange={(e) => setTotalFunding(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary" onClick={() => handlePost()}>
        Post a funding
      </button>
    </div>
  );
};

export default FundingForm;
