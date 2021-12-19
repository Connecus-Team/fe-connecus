import React, {useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import data from './data';
import VotingPostItem from './VotingPostItem';
import VotingItem from './VotingItem';
import apis from '../../../apis/apis';
// import web3Selector from '../../../components/header/redux/Web3.Selector';

const LeftInfoVotingComponent = (item, totalVote) => (
  <div>
    <p className="color_text txt_xs">CURRENT VOTING</p>
    <span className="txt_sm">{totalVote}</span>
  </div>
);

const BodyComponent = (item) => {
  return (
    <>
      <div className="px-3">
        <ul>
          {item.options.length !== 0 &&
            item.options.map((option, idx) => <VotingItem item={option} />)}
        </ul>
        <button className="btn btn-primary btn-sm">Vote</button>
      </div>
      <div className="hr"></div>
    </>
  );
};

function VotingPostList({token}) {
  const [votingPostList, setVotingPostList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const {address: tokenAddress} = queryString.parse(window.location.search);
      let params = {tokenAddress};
      const response = await apis.getVoting(params);
      const {data} = response;
      setVotingPostList(data.reverse());
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-20">
      {votingPostList.length !== 0 &&
        votingPostList.map((item, idx) => (
          <VotingPostItem
            item={item}
            leftInfoComponent={LeftInfoVotingComponent}
            rightInfoTitle={'VOTING END'}
            key={idx}
            token={token}
            // bodyComponent: BodyComponent,
          />
        ))}
    </div>
  );
}

export default VotingPostList;
