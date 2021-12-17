import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import apis from '../../../apis/apis';
import web3Selector from '../../../components/header/redux/Web3.Selector';

const FundingForm = ({title, description, date, file}) => {
  // funding
  const [totalFunding, setTotalFunding] = useState(0);
  const [interest, setInterest] = useState('');

  const web3 = useSelector(web3Selector.selectWeb3);

  const handlePost = async () => {
    // if (!title || !description || !date) {
    //   alert('Please Check Enter Data');
    //   return;
    // }

    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    let contract = new web3.eth.Contract(
        contractValue.ABIContractBuilder,
        contractValue.addressContractBuilder,
    );

    let params = {
      title,
      description,
      date,
      file,
      totalFunding,
      interest,
    };

    const response = await apis.postFunding(params);
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
