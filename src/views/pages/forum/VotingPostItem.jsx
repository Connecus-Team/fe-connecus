import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Countdown from 'react-countdown';
import ConnecusCountDown from './ConnecusCountDown';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';
import VotingItem from './VotingItem';
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


let _totalCount = 0;
// Will use it later
function VotingPostItem({
  item = defaultItem,
  rightInfoTitle = 'FUNDING END',
  leftInfoComponent = defaultComponent,
  bodyComponent = defaultComponent,
  token,
}) {
  const web3 = useSelector(web3Selector.selectWeb3);

  const [selectVote, setSelectVote] = useState(0);
  const [doneVote, setDoneVote] = useState(0);
  const [isExpire, setIsExpire] = useState(false);
  const [totalVote, setTotalVote] = useState(0);


  useEffect(() => {
    if (web3) {
      const fetchData = async () => {
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0];
        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );
        const _doneVote = await contractBuilder.methods.getCheckVote(item.id).call();
        setDoneVote(_doneVote);

        const votingTime = await contractBuilder.methods.getTimeEndVote(item.id).call();
        const currentTime = new Date().getTime();
        if (votingTime - currentTime < 0) {
          setIsExpire(true);
        };
      };
      fetchData();
    }
  }, [item]);

  const handleVotePost = async () => {
    try {
      if (selectVote <= 0) {
        alert('Please, check input');
        return;
      }

      if (window.confirm(`Are you sure you want to vote`)) {
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0];
        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );
        await contractBuilder.methods.PersonVote(item.id, selectVote).send({from: myAccount});
        // TODO save to database
        alert('Vote Successful');
        window.location.reload();
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      alert('Voting error');
      return;
    }
  };
  const setCountVoteByPost = (countVote) => {
    _totalCount = _totalCount + parseInt(countVote);
    setTotalVote(_totalCount);
  };

  return (
    <div className="card__item one post-item" post-id={item.id} key={item.id} style={{maxWidth: '100%'}}>
      <div className="card_body space-y-10">
        <div className="card_head">
          {/* <img src={item.img} alt="" /> */}
          <img src={`${process.env.REACT_APP_SERVER_API}api/files/${item.link}`} alt="" />
          <div className="details d-flex justify-content-between">
            {leftInfoComponent(item, totalVote)}
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
        <div className="px-3">
          <ul>
            {item.options.length !== 0 &&
              item.options.map((option, idx) => (
                <VotingItem item={option} setSelectVote={setSelectVote} post={item} setCountVoteByPost={setCountVoteByPost} />
              ))}
          </ul>
          <button className="btn btn-primary btn-sm" disabled={isExpire} onClick={() => handleVotePost()}>
            Vote
          </button>
        </div>
        <div className="hr"></div>
        {/* {bodyComponent(item)} */}
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
                <p className="avatars_name txt_sm">@{token.symbol}</p>
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

export default VotingPostItem;
