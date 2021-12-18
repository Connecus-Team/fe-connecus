import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import data from './data';
import FundingPostItem from './FundingPostItem';
import apis from '../../../apis/apis';
// import web3Selector from '../../../components/header/redux/Web3.Selector';

const LeftInfoFundingComponent = (item) => {
  const tokenInfo = JSON.parse(localStorage.getItem('token'));
  return (
    <div className="bid space-x-10">
      <div className="icon">
        <img src={`${process.env.REACT_APP_SERVER_API}api/files/${tokenInfo.link}`} alt="..." />
      </div>
      <div>
        <p className="color_text txt_xs">CURRENT FUNDING</p>
        <span className="txt_sm">4.77 / {item.funding_money} ETH</span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: `${(50 / parseInt(item.funding_money)) * 100}%`}}
            aria-valuenow={`${(50 / parseInt(item.funding_money)) * 100}%`}
            aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
      </div>
    </div>
  );
};

function FundingPostList({token}) {
  const [fundingPostList, setFundingPostList] = useState([]);
  useEffect(() => {
    const {address: tokenAddress} = queryString.parse(window.location.search);
    if (tokenAddress) {
      const fetchData = async () => {
        let params = {tokenAddress};
        const response = await apis.getFunding(params);
        console.log(response);
        const {data} = response;
        setFundingPostList(data);
      };
      fetchData();
    }
  }, []);
  return (
    <div className="space-y-20 post-item">
      {fundingPostList.length !== 0 &&
        fundingPostList.map((item, idx) => (
          <FundingPostItem
            item={item}
            token={token}
            leftInfoComponent={LeftInfoFundingComponent}
            key={idx} />
        ))}
    </div>
  );
}

export default FundingPostList;
