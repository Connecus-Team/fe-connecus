import React, {useRef, useState} from 'react';
import queryString from 'query-string';
import {useSelector} from 'react-redux';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import {Link} from 'react-router-dom';
import apis from '../../../apis/apis';
import contractValue from '../../../constants/contract';

const VotingForm = ({title, description, date, file, setLoadingCreatePost}) => {
  const web3 = useSelector(web3Selector.selectWeb3);
  const [options, setOptions] = useState([{content: ''}]);

  const handleClickAddOption = () => {
    setOptions([...options, {content: ''}]);
  };

  const handleInputVote = (idx, value) => {
    const _options = Object.assign([], options);
    _options[idx] = {content: value};
    setOptions(_options);
  };

  const handleRemoveOption = (index) => {
    if (index === 0) {
      alert('Least option is 1');
      return;
    }
    setOptions(options.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    if (!title || !description || !date || !file) {
      alert('Please Check Enter Data');
      return;
    }

    try {
      if (web3 === null) {
        alert('Can\'t connect to wallet');
        return;
      }
      setLoadingCreatePost(true);
      const accounts = await web3.eth.getAccounts();
      const walletAddress = accounts[0]; // TODO Check
      const {address: tokenAddress} = queryString.parse(window.location.search);
      const params = {
        title,
        description,
        date,
        options,
        walletAddress,
        tokenAddress,
      };

      const {size, type} = file[0];
      let response = null;
      if (size / 1000000 < 100) {
        if (type === 'image/png' || type === 'image/jpg' || 'image/jpeg') {
          try {
            const data = new FormData();
            data.append('file', file[0]);
            data.append('params', JSON.stringify(params));
            response = await apis.postVoting(data);
          } catch (error) {
            console.log(error);
            alert('Post a task server error');
            return;
          }
        } else {
          setLoadingCreatePost(false);
          alert('Check image type');
          return null;
        }
      }

      const {data} = response; // id of post
      // TODO Check server successful
      const contract = new web3.eth.Contract(
          contractValue.ABIContractBuilder,
          contractValue.addressContractBuilder,
      );
      await contract.methods.CreateVote(data, options.length, new Date(date).getTime()).send({from: walletAddress});
      setLoadingCreatePost(false);
      alert('Create Voting Successful \r\n Press ok to confirm');
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert('Create Voting error');
      return null;
    }


    // contract.events.NewVote({}, (err, event) => {
    //   if (err) {
    //     alert('New Vote Error');
    //     console.log(err);
    //     // TODO delete vote in database
    //     return;
    //   }
    //   // console.log( 'eror', err, event);
    // })
    //     // TODO
    //     .on('connected', function(subscriptionId) {
    //       console.log('subscriptionId', subscriptionId);
    //     })
    //     .on('data', async function(event) {
    //       alert('Create Voting Successful \r\n Press ok to confirm');
    //       console.log('data', event);
    //     })
    //     .on('changed', function(event) {
    //       console.log('change');
    //     })
    //     .on('error', function(error, receipt) {
    //       alert('Event Error');
    //       // TODO delete vote in database
    //       return;
    //     });
  };

  return (
    <div className="form-row create-post-voting">
      <div className="col-sm">
        <div className="form-group">
          <p className="mb-2">Option</p>
          <ul>
            {options.length !== 0 &&
              options.map((item, idx) => {
                return (
                  <li className="mb-2 d-flex gap-3 items-center" key={idx}>
                    <input
                      type="text"
                      className="form-control w-100"
                      name="reply-name"
                      placeholder={`Option ${idx + 1}`}
                      value={item.content}
                      onChange={(e) => handleInputVote(idx, e.target.value)}
                    />
                    <button
                      className="btn close-icon-wrapper"
                      onClick={() => handleRemoveOption(idx)}>
                      <i className="ri-close-fill"></i>
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
        <button className="btn btn-add w-100" onClick={() => handleClickAddOption()}>
          <i className="ri-add-circle-fill mr-2"></i>
          Add an option
        </button>
        <button className="btn btn-primary mt-20" onClick={() => handlePost()}>
          Post a voting
        </button>
      </div>
    </div>
  );
};

export default VotingForm;
