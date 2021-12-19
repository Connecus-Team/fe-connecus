import React, {useRef, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';

function VotingItem({post, item, setSelectVote, setCountVoteByPost}) {
  const inputRef = useRef();
  const web3 = useSelector(web3Selector.selectWeb3);
  const [countVoteByOption, setCountVoteByOption] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (web3) {
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0]; // TODO Check
        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );
        const response = await contractBuilder.methods.getOption(post.id, item.id).call();
        setCountVoteByOption(response[1]);
        setCountVoteByPost(response[1]);
      }
    };
    fetchData();
  }, [web3]);
  return (
    <li className="d-flex align-items-center gap-2 mb-2">
      <input
        ref={inputRef}
        type="radio"
        name="voting"
        value={item.id}
        className="form-check-input mb-1"
        onChange={() => setSelectVote(item.id)}
      />
      <span
        className="bg-light flex-grow-1 px-3 py-2 rounded-pill"
        onClick={() => inputRef.current.click()}>
        {item.content}
      </span>
      <span className="bg-light flex-grow-3 px-3 py-2 rounded-pill">{countVoteByOption}</span>
    </li>
  );
}

export default VotingItem;
