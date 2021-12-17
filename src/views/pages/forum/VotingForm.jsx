import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import {Link} from 'react-router-dom';

const VotingForm = ({title, description, date, file}) => {
  const web3 = useSelector(web3Selector.selectWeb3);
  const [options, setOptions] = useState([{content: ''}]);

  const handleClickAddOption = () => {
    setOptions([...options, {content: ''}]);
  };

  const handleRemoveOption = (index) => {
    if (index === 0) {
      alert('Least option is 1');
      return;
    }
    setOptions(options.filter((_, i) => i !== index));
  };

  const handlePost = async () => {
    // if (!title || !description || !date) {
    //   alert('Please Check Enter Data');
    //   return;
    // }

    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }

    let params = {
      title,
      description,
      date,
      file,
      options,
    };


    const response = await apis.postVoting(params);
    const {data} = response;
    await contract.methods.CreateVote(data, title, options.length).send({from: accounts[0]});
    contract.events.NewVote({}, (err, event) => {
      if (err) {
        alert('New Vote Error');
        console.log(err);
        // TODO delete vote in database
        return;
      }
      // console.log( 'eror', err, event);
    }).on('connected', function(subscriptionId) {
      console.log('subscriptionId', subscriptionId);
    }).on('data', async function(event) {
      alert('Create Voting Successful \r\b Press ok to confirm');
      console.log('data', event);
    }).on('changed', function(event) {
      console.log('change');
    }).on('error', function(error, receipt) {
      alert('Event Error');
      // TODO delete vote in database
      return;
    });
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
