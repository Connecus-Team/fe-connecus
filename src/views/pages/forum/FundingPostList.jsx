import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import data from './data';
import PostItem from './PostItem';
import apis from '../../../apis/apis';
import web3Selector from '../../../components/header/redux/Web3.Selector';


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
  const web3 = useSelector(web3Selector.selectWeb3);
  const [fundingPostList, setFundingPostList] = useState([]);

  useEffect(() => {
    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }
    const fetchData = async () => {
      const accounts= await web3.eth.getAccounts();
      let walletAddress = accounts[0];

      let params = {walletAddress};
      const response = await apis.getFunding(params);
      const {data} = response;
      setFundingPostList(data);
    };
    fetchData();
  }, [web3]);
  return (
    <div className="space-y-20 post-item">
      {fundingPostList.length !== 0 && fundingPostList.map((item, idx) =>
        <PostItem
          item={item}
          leftInfoComponent={LeftInfoFundingComponent}
          key={idx}
        />,
      )}
    </div>
  );
}

export default FundingPostList;
