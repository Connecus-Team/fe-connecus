import React, {useRef, useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroProfile from '../../../components/hero/HeroProfile';
import {Tab, Tabs, TabList} from 'react-tabs';
import Countdown from 'react-countdown';
import useDocumentTitle from '../../../components/useDocumentTitle';
import SidebarProfile from '../../../components/sidebars/SidebarProfile';
import {getDataURLFromFile} from '../../../utils/getDataUrlFromFile';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import contractValue from '../../../constants/contract';
import apis from '../../../apis/apis';
import data from './data';
import FundingPostList from './FundingPostList';
import VotingPostList from './VotingPostList';
import TaskPostList from './TaskPostList';
import TaskForm from './TaskForm';
import VotingForm from './VotingForm';
import FundingForm from './FundingForm';
import ConnecusCountDown from './ConnecusCountDown';
import queryString from 'query-string';


function ForumRight() {
  const [fundingPostList, setFundingPostList] = useState([]);
  const web3 = useSelector(web3Selector.selectWeb3);
  useEffect(() => {
    const fetchData = async () => {
      const {address: tokenAddress} = queryString.parse(window.location.search);
      let params = {tokenAddress};
      const response = await apis.getFunding(params);
      const {data} = response;
      if (data.length > 5) {
        setFundingPostList(data.slice(0, 4));
      } else {
        setFundingPostList(data);
      }
    };
    fetchData();
  }, []);

  return fundingPostList.length !== 0 && (
    <div className="sidebar space-y-30 mb-30">
      <div className="space-y-10">
        <h5>Funding List</h5>
        <div className="box space-y-30">
          {/* <div className="d-flex space-x-10">
            <img src={`img/icons/live.svg`} alt="live" style={{width: 13}} />
            <h5>Live Funding</h5>
          </div> */}
          {fundingPostList.map((val) => (
            <FundingPostItemRight val={val} web3={web3}/>
          ))}
        </div>
      </div>
    </div>
  );
}

const FundingPostItemRight = ({val, web3}) => {
  const [currentFunding, setCurrentFunding] = useState(0);
  useEffect(() => {
    const fetDataFromScAsync = async () => {
      if (!web3) {
      // alert('Can\'t connect to wallet');
        return;
      }

      const accounts = await web3.eth.getAccounts();
      const myAccount = accounts[0]; // TODO Check

      let contractBuilder = new web3.eth.Contract(
          contractValue.ABIContractBuilder,
          contractValue.addressContractBuilder,
      );

      const currentTotalFunding = await contractBuilder.methods
          .getTotalFundPerson(val.id)
          .call();
      setCurrentFunding(currentTotalFunding);
    };
    fetDataFromScAsync();
  }, []);
  return (
    <div className="card__item two my-3" key={val.id}>
      <div className="card_body space-y-10">
        {/* =============== */}
        <h6 className="card_title">
          <Link className="color_black" to="#">
            {val.title}
          </Link>
        </h6>
        <p className="line-clamp-2 small mt-0">{val.description}</p>
        <div className="card_head">
          <Link to="#">
            <img src={`${process.env.REACT_APP_SERVER_API}api/files/${val.link}`} alt="item" />
          </Link>
          <div className="block_timer">
            <div
              className="d-flex justify-content-center
                                                align-items-center txt_sm _bold box_counter">
              <Countdown date={new Date(val.time)} renderer={ConnecusCountDown} />
            </div>
          </div>
          <div
            className="details d-flex
                                                justify-content-between position-absolute bottom-0 start-0 w-100 text-white px-3 pt-2"
            style={{height: '4rem', backgroundColor: '#00000090'}}>
            <small>
              <strong>Total Funding</strong>: {currentFunding}/{val.funding_money} ETH
            </small>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{width: `${(currentFunding / parseInt(val.funding_money)) * 100}%`}}
                aria-valuenow={`${(currentFunding / parseInt(val.funding_money)) * 100}%`}
                aria-valuemin={0}
                aria-valuemax={val.funding_money}
              />
            </div>
          </div>
        </div>
        <div className="hr" />
      </div>
    </div>
  );
};

export default ForumRight;

