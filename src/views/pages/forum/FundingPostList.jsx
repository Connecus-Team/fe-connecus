import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import queryString from 'query-string';
import data from './data';
import FundingPostItem from './FundingPostItem';
import apis from '../../../apis/apis';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';


const LeftInfoFundingComponent = (item) => {
  const tokenInfo = JSON.parse(localStorage.getItem('token'));
  const web3 = useSelector(web3Selector.selectWeb3);
  const [currentFunding, setCurrentFunding] = useState(0);

  if (!web3) {
    // alert('Can\'t connect to wallet');
    return;
  }
  const fetchDataFromSC = async () => {
    const accounts = await web3.eth.getAccounts();
    const myAccount = accounts[0]; // TODO Check

    let contractBuilder = new web3.eth.Contract(
        contractValue.ABIContractBuilder,
        contractValue.addressContractBuilder,
    );

    const currentTotalFunding = await contractBuilder.methods
        .getTotalFundPerson(item.id)
        .call();
    setCurrentFunding(currentTotalFunding);
  };

  fetchDataFromSC();

  return (
    <div className="bid space-x-10">
      <div className="icon">
        <img src={`${process.env.REACT_APP_SERVER_API}api/files/${tokenInfo.link}`} alt="..." />
      </div>
      <div>
        <p className="color_text txt_xs">CURRENT FUNDING</p>
        <span className="txt_sm">{currentFunding} / {item.funding_money} {tokenInfo.symbol} </span>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{width: `${(currentFunding / parseInt(item.funding_money)) * 100}%`}}
            aria-valuenow={`${(currentFunding / parseInt(item.funding_money)) * 100}%`}
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
        const {data} = response;
        setFundingPostList(data.reverse());
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
