import React, {useRef, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';


function TaskItem({item, index, ísExpire, post}) {
  const inputRef = useRef();
  const web3 = useSelector(web3Selector.selectWeb3);
  const [countVoteByOption, setCountVoteByOption] = useState(0);
  const handleVerify = async () =>{
    if (web3) {
      alert('Can\'t connect to web3');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    const myAccount = accounts[0]; // TODO Check
    let contractBuilder = new web3.eth.Contract(
        contractValue.ABIContractBuilder,
        contractValue.addressContractBuilder,
    );

    const tokenAddress = JSON.parse(localStorage.getItem('token'));
    const response = await contractBuilder.methods.rewardTask(tokenAddress.token_address, post.id, 10).call();
    alert('Verify Successful');
  };
  return (
    <li className="w-100 mb-4">
      <h5 className="mb-2 ml-3">
        <span className="mr-1">
          Task {index + 1}. {item.content}
        </span>{' '}
        (<strong>{item.amount}ETH</strong>)
      </h5>
      <div className="w-100 d-flex align-items-center">
        <div className="d-flex align-items-center gap-3 flex-grow-1">
          <input
            type="text"
            className="form-control-sm w-100"
            name="reply-name"
            placeholder="Your discord ID as thanhhoa214#1239"
            value={item.content}
            onChange={(e) => {}}
          />
          <button disabled={ísExpire} className="btn btn-dark flex-shrink-0" onClick={() => handleVerify()}>
            Verify
          </button>
        </div>
      </div>
    </li>
  );
}

export default TaskItem;
