import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Countdown from 'react-countdown';
import ConnecusCountDown from './ConnecusCountDown';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';

export const defaultItem = {
  id: 1,
  title: 'Colorful Painting',
  description: `Thank you you all for making this community
    Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Rarible (with crypto payment)! What do you`,
  img: 'https://miro.medium.com/max/1024/1*kdYwtZPiNcz8djsFLfWTNQ.jpeg',
  totalFunding: '1000',
  date: '10/01/2022 12:00:00',
};
const defaultComponent = async () => null;

// Will use it later
function FundingPostItem({
  item = defaultItem,
  rightInfoTitle = 'FUNDING END',
  leftInfoComponent = defaultComponent,
  bodyComponent = defaultComponent,
  token,
}) {
  const [userFunding, setUserFunding] = useState(0);
  const web3 = useSelector(web3Selector.selectWeb3);
  const [isExpire, setIsExpire] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const {time} = item;
    const fundingTime = new Date(time).getTime();
    if (fundingTime - currentTime < 0) {
      setIsExpire(true);
    };
  }, []);

  const handleFundingWithPost = async () => {
    try {
      if (!web3) {
        alert('Can\'t connect to wallet');
        return;
      }

      if (userFunding <= 0) {
        alert('Please, check input');
        return;
      }

      if (window.confirm(`Are you sure you want to funding with ${userFunding} ${token.symbol}`)) {
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0]; // TODO Check
        const tokenContract = new web3.eth.Contract(
            contractValue.ABIToken,
            contractValue.addressToken,
        );
        await tokenContract.methods
            .approve(contractValue.addressContractBuilder, web3.utils.toWei(userFunding, 'Ether'))
            .send({from: myAccount})
            .on('transactionHash', async (hash) => {});

        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );

        await contractBuilder.methods
            .bidFunding(item.id, userFunding)
            .send({from: myAccount});

        alert('Funding successful !!!');
        window.location.reload();
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      alert('Funding failed');
      return;
    }
  };
  return (
    <div className="card__item one post-item" key={item.id} style={{maxWidth: '100%'}}>
      <div className="card_body space-y-10">
        <div className="card_head">
          {/* <img src={item.img} alt="" /> */}
          <img src={`${process.env.REACT_APP_SERVER_API}api/files/${item.link}`} alt="" />
          <div className="details d-flex justify-content-between">
            {leftInfoComponent(item)}
            <div className="auction_end text-right">
              <p className="color_text txt_xs" style={isExpire ? {color: 'red'}: {}}>{rightInfoTitle}</p>
              <p className="color_text txt_xs">{item.time}</p>
              <span className="counter txt_sm">
                <Countdown date={item.date} renderer={ConnecusCountDown} />
              </span>
            </div>
          </div>
        </div>
        <h4 className="card_title mt-3">{item.title}</h4>
        <p className="mt-1">{item.description}</p>
        <div className="hr"></div>
        {/* {bodyComponent(item)} */}
        <div>
          <input
            type="number"
            className="form-control mb-2"
            name="funding-number"
            placeholder="Total funding $"
            value={userFunding}
            onChange={(e) => setUserFunding(e.target.value)}
          />
          <button className="btn btn-primary" disabled={isExpire} onClick={() => handleFundingWithPost()}>
            Funding
          </button>
        </div>
        <div
          className="card_footer justify-content-between flex-column
                                                              flex-md-row">
          <div className="creators space-x-10">
            <div className="avatars space-x-3">
              <div className="-space-x-20">
                <a href="Profile.html">
                  <img src={`${process.env.REACT_APP_SERVER_API}api/files/${token.link}`} alt="Token Avatar" className="avatar avatar-sm" />
                </a>
              </div>
              <a href="Profile.html">
                <p className="avatars_name txt_sm">@{token.token_name}</p>
              </a>
            </div>
          </div>
          <a href="#" className="likes space-x-3">
            <i className="ri-heart-3-fill"></i>
            <span className="txt_sm">2.1k</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FundingPostItem;
