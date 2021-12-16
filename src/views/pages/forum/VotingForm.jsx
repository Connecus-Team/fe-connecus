import React, {useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroProfile from '../../../components/hero/HeroProfile';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
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

function VotingForm() {
  return (
    <div className="space-y-20">
      { data.votingCard.map((item, i) => (
        <div className="box is__big space-y-20" key={i}>
          <div
            className="d-flex justify-content-between
                      align-items-center">
            <div
              className="d-flex align-items-center
                          space-x-15">
              <div className="avatars space-x-10">
                <div className="media has_border">
                  <Link to="profile">
                    <img
                      src={`img/avatars/avatar_3.png`}
                      alt="Avatar"
                      className="avatar avatar-forum"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <Link to="profile">
                    <p
                      className="avatars_name
                                          color_brand">
                    @{item.id}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="number">
              <span>42</span>
            </div>
            <div className="space-y-20">
              <Link to="post-details">
                <h3 className="forum__title">
                  {item.title}
                </h3>
              </Link>
              <p className="forum__desc">
                {item.description}
              </p>
              <div>
                <img style={{width: '200px'}}src={item.img}/>
              </div>
              <div>
                <p>Voting Option</p>
                <ul>
                  {
                    item.options.map((item) => <li className="light_bg w-full mb-2">{item}</li>)
                  }
                </ul>
              </div>
              <div>
                <span>Date : {item.date} </span>
              </div>
              <div>
                <button className="btn btn-dark btn-sm mt-10">Vote</button>
              </div>
              <div className="tags">
                <span>#NFT Marketplace</span>
                <span>#crypto Artists</span>
                <span>#NFT Artists</span>
              </div>
              <div className="hr" />
              {/* <div
              className="d-flex
                              justify-content-between flex-wrap">
              <div className="reaction">
                <Link
                  to="#"
                  className="likes
                                      space-x-3">
                  <i className="ri-heart-3-fill" />
                  <span className="txt_sm">2.1k</span>
                </Link>
                <Link to="post-details" className="comments space-x-3">
                  <i className="ri-chat-1-line" />
                  <span className="txt_sm">257 Comments</span>
                </Link>
                <span className="views space-x-3">
                  <i className="ri-eye-line" />
                  <span>257 Views</span>
                </span>
                <span className="time space-x-3">
                  <i className="ri-time-line" />
                  <span>2 days ago</span>
                </span>
              </div>
              <div className="answer">
                <Link
                  to="post-details"
                  className="btn btn-dark
                                      btn-sm">
                  Answer
                </Link>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VotingForm;

