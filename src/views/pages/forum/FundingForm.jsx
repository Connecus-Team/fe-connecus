import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import apis from '../../../apis/apis';
import contractValue from '../../../constants/contract';
import web3Selector from '../../../components/header/redux/Web3.Selector';

const FundingForm = ({title, description, date, file}) => {
  // funding
  const [totalFunding, setTotalFunding] = useState(0);
  const [interest, setInterest] = useState('');

  const web3 = useSelector(web3Selector.selectWeb3);

  const handlePost = async () => {
    try {
      // if (!title || !description || !date) {
      //   alert('Please Check Enter Data');
      //   return;
      // }

      console.log(file[0]);
      return;
      if (web3 === null) {
        alert('Can\'t connect to wallet');
        return;
      }
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0]; // TODO Check
      const {address: tokenAddress} = queryString.parse(window.location.search);
      let params = {
        title,
        description,
        date,
        file,
        totalFunding,
        interest,
        walletAddress,
        tokenAddress,
      };

      const {size, type} = files[0];
      if (size / 1000000 < 100) {
        if (type === 'image/png' || type === 'image/jpg' ) {
          let data = new FormData();
          data.append('file', files[0]);
          data.append('params', JSON.stringify(params));
          chatComponentService.upFile(data)
              .catch((e) => {
                console.log(' e --', e);
              });
        } else {
          alert(t('mainPage.chatingComponent.errorMessage.fileUpdateError'));
        }
      }

      const response = await apis.postFunding(params);
      const {data} = response;

      return;
      // TODO Check server successful

      const tokenContract = new web3.eth.Contract(contractValue.ABIToken, contractValue.addressToken);
      tokenContract.methods.approve(contractValue.addressContractBuilder, web3.utils.toWei(totalStake, 'Ether')).send({from: accounts[0]}).on('transactionHash', async (hash) => {
        let contractBuilder = new web3.eth.Contract(contractValue.ABIContractBuilder, contractValue.addressContractBuilder);
        await contractBuilder.methods.stakingAndFunding(data, totalFunding, date).send({from: accounts[0]});
        contractBuilder.events.NewFunding({}, (err, event) => {
          if (err) {
            alert('New Funding Error');
            console.log(err);
            // TODO delete funding in database
            return;
          }
          // console.log( 'eror', err, event);
        }).on('connected', function(subscriptionId) {
          console.log('subscriptionId', subscriptionId);
        }).on('data', async function(event) {
          alert('Create Funding Successful \r\b Press ok to confirm');
          console.log('data', event);
        }).on('changed', function(event) {
          console.log('change');
        }).on('error', function(error, receipt) {
          alert('Event Error');
          // TODO delete funding in database
          return;
        });
      });
    } catch (error) {
      console.log(error);
      alert(' Post a funding error');
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
