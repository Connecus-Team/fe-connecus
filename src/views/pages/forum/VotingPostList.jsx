import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import VotingPostItem from './VotingPostItem';
import VotingItem from './VotingItem';
import apis from '../../../apis/apis';
import web3Selector from '../../../components/header/redux/Web3.Selector';

const LeftInfoVotingComponent = (item) => (
  <div>
    <p className="color_text txt_xs">CURRENT VOTING</p>
    <span className="txt_sm">{item.currentVotingAmount}</span>
  </div>
);

const BodyComponent = (item) => {
  console.log(item);
  return (
    <>
      <div className="px-3">
        <ul>{item.options.length !== 0 && item.options.map((option, idx) => <VotingItem item={option}/>)}</ul>
        <button className="btn btn-primary btn-sm">Vote</button>
      </div>
      <div className="hr"></div>
    </>
  );
};

function VotingPostList() {
  const web3 = useSelector(web3Selector.selectWeb3);
  const [votingPostList, setVotingPostList] = useState([]);

  useEffect(() => {
    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }
    const fetchData = async () => {
      const accounts= await web3.eth.getAccounts();
      let walletAddress = accounts[0];

      let params = {walletAddress};
      const response = await apis.getVoting(params);
      const {data} = response;
      setVotingPostList(data);
    };
    fetchData();
  }, [web3]);

  return (
    <div className="space-y-20">
      {votingPostList.length !== 0 && votingPostList.map((item, idx) =>
        <VotingPostItem
          item={item}
          leftInfoComponent={LeftInfoVotingComponent}
          rightInfoTitle={'VOTING END'}
          key={idx}
          // bodyComponent: BodyComponent,
        />,
      )}
    </div>
  );
}

export default VotingPostList;
