import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import data from './data';
import FundingPostItem from './FundingPostItem';
import apis from '../../../apis/apis';
// import web3Selector from '../../../components/header/redux/Web3.Selector';


const LeftInfoFundingComponent = (item) => (
  <div className="bid space-x-10">
    <div className="icon">
      <img src="img/icons/ETH.svg" alt="..." />
    </div>
    <div>
      <p className="color_text txt_xs">CURRENT FUNDING</p>
      <span className="txt_sm">4.77 / {item.funding_money} ETH</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: '80%'}}
          aria-valuenow={`${(5 / item.funding_money) * 100}%`}
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  </div>
);

function FundingPostList() {
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
      {fundingPostList.length !== 0 && fundingPostList.map((item, idx) =>
        <FundingPostItem
          item={item}
          leftInfoComponent={LeftInfoFundingComponent}
          key={idx}
        />,
      )}
    </div>
  );
}

export default FundingPostList;
