import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Countdown from 'react-countdown';
import ConnecusCountDown from './ConnecusCountDown';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';
import moment from 'moment';

export const defaultItem = {
  id: 1,
  title: 'Colorful Painting',
  description: `Thank you you all for making this community
    Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Rarible (with crypto payment)! What do you`,
  img: 'https://miro.medium.com/max/1024/1*kdYwtZPiNcz8djsFLfWTNQ.jpeg',
  totalFunding: '1000',
  date: '10/01/2022 12:00:00',
};
const defaultComponent = () => null;

// Will use it later
function TaskPostItem({
  item = defaultItem,
  rightInfoTitle = 'FUNDING END',
  leftInfoComponent = defaultComponent,
  bodyComponent = defaultComponent,
  token,
}) {
  const web3 = useSelector(web3Selector.selectWeb3);

  useEffect(() => {
    if (web3) {
      const fetchData = async () => {
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0];
        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );
        const votingTime = await contractBuilder.methods.getTimeTaskEnd(item.id).call();
        console.log(votingTime);
        const currentTime = new Date().getTime();
        if (votingTime - currentTime < 0) {
          setIsExpire(true);
        };
      };
      fetchData();
    }
  }, [item]);

  const handleFundingWithPost = async () => {
    if (userFunding <= 0) {
      alert('Please, check input');
      return;

      if (window.confirm(`Are you sure you want to funding with ${userFunding}`)) {
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0]; // TODO Check
        const tokenContract = new web3.eth.Contract(
            contractValue.ABIToken,
            contractValue.addressToken,
        );
        tokenContract.methods
            .approve(contractValue.addressContractBuilder, web3.utils.toWei(userFunding, 'Ether'))
            .send({from: walletAddress})
            .on('transactionHash', async (hash) => {
              let contractBuilder = new web3.eth.Contract(
                  contractValue.ABIContractBuilder,
                  contractValue.addressContractBuilder,
              );
              await contractBuilder.methods
                  .bidFunding(walletAddress, userFunding)
                  .send({from: walletAddress});
              alert('Bid Fnding Successful');
            });
      } else {
        return;
      }
    }
  };
  console.log(item);
  return (
    <div className="card__item one post-item" key={item.id} style={{maxWidth: '100%'}}>
      <div className="card_body space-y-10">
        <div className="card_head">
          {/* <img src={item.img} alt="" /> */}
          <img src={`${process.env.REACT_APP_SERVER_API}api/files/${item.link}`} alt="" />
          <div className="details d-flex justify-content-between">
            {/* {leftInfoComponent(item)} */}
            <div className="auction_end text-right">
              <p className="color_text txt_xs">TASK TIME</p>
              <span className="counter txt_sm">
                <Countdown date={moment(item.time).format('YYYY-MM-DD HH:mm:ss')} renderer={ConnecusCountDown} />
              </span>
            </div>
          </div>
        </div>
        <h4 className="card_title mt-3">{item.title}</h4>
        <p className="mt-1">{item.description}</p>
        <div className="hr"></div>
        {bodyComponent(item)}
        <div
          className="card_footer justify-content-between flex-column flex-md-row">
          <div className="creators space-x-10">
            <div className="avatars space-x-3">
              <div className="-space-x-20">
                <a href="Profile.html">
                  <img src={`${process.env.REACT_APP_SERVER_API}api/files/${token.link}`} alt="Avatar" className="avatar avatar-sm" />
                </a>
              </div>
              <a href="Profile.html">
                <p className="avatars_name txt_sm">@makinzi_jamy...</p>
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

export default TaskPostItem;
