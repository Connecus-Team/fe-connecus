import React, {useEffect} from 'react';
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
      <span className="txt_sm">4.77 / {item.totalFunding} ETH</span>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: '80%'}}
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  </div>
);

function FundingPostList() {
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
      const response = await apis.getFunding(params);
      console.log(response);
    };
    fetchData();
  }, [web3]);
  return (
    <div className="space-y-20 post-item">
      {data.fundingCard.map((item) =>
        PostItem({
          item,
          leftInfoComponent: LeftInfoFundingComponent,
        }),
      )}
    </div>
  );
}

export default FundingPostList;
