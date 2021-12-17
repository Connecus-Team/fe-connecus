import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import PostItem from './PostItem';
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
  return (
    <>
      <div className="px-3">
        <ul>{item.options.map(VotingItem)}</ul>
        <button className="btn btn-primary btn-sm">Vote</button>
      </div>
      <div className="hr"></div>
    </>
  );
};

function VotingPostList() {
  const web3 = useSelector(web3Selector.selectWeb3);

  useEffect(() => {
    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }
    const fetchData = async () => {
      const accounts= await web3.eth.getAccounts();
      let walletAdress = accounts[0];

      let params = {walletAdress};
      const response = await apis.getVoting(params);
      console.log(response);
    };
    fetchData();
  }, [web3]);

  return (
    <div className="space-y-20">
      {data.votingCard.map((item) =>
        PostItem({
          item,
          rightInfoTitle: 'VOTING END',
          leftInfoComponent: LeftInfoVotingComponent,
          bodyComponent: BodyComponent,
        }),
      )}
    </div>
  );
}

export default VotingPostList;
