import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import Web3 from 'web3';
import {useDispatch} from 'react-redux';

import MobileMenu from './Menu/MobileMenu';
import MegaMenu from './Menu/MegaMenu';
import web3Action from '../../components/header/redux/Web3.Action';

const HomesMenu = [
  {
    icon: 'home-smile-2',
    title: ' Home page 1',
    link: '/home-1',
  },
  {
    icon: 'home-2',
    title: ' Home page 2',
    link: '/home-2',
  },
  {
    icon: 'home-5',
    title: ' Home page 3',
    link: '/home-3',
  },
];
const PagesMenu = [
  // {
  //   title: 'Marketplace',
  //   link: '/marketplace',
  // },
  {
    title: 'Collections',
    link: '/collections',
  },
  // {
  //   title: ' Profile',
  //   link: '/profile',
  // },
  // {
  //   title: ' Creators',
  //   link: '/creators',
  // },
  {
    title: ' Token',
    link: '/token',
  },
  {
    title: ' Community',
    link: '/community',
  },
  {
    title: ' Document',
    link: '/article',
  },
  {
    title: ' FAQ',
    link: '/faq',
  }
];

const Header = () => {
  const [isActive, setActive] = useState(false);
  const [currentAccount, setCurrentAcount] = useState(null);

  const dispatch = useDispatch();

  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleConnectWallet = async () => {
    try {
      let web3Provider;
      // Check Install Metamask
      if (window.ethereum) {
        web3Provider = window.ethereum;
        try {
          await window.ethereum.enable();
        } catch (error) {
          alert('hello')
          console.error('User denied account access');
        }
      }// Legacy dapp browsers...
      else if (window.web3) {
        web3Provider = window.web3.currentProvider;
      } else {
        if (window.confirm('Bạn chưa cài Metamask. Bạn có muốn cài đặt ngay không?')) {
          window.open('https://metamask.io/', '_blank');
        } else {
          return;
        }
      }
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/81b9f5ec89d7444db4009cdbb00b8dba'));
      // const web3 = new Web3(new Web3.providers.HttpProvider('https://data-seed-prebsc-1-s1.binance.org:8545'));
      // console.log(web3);
      let web3 = new Web3(web3Provider);
      const chainId = await web3.eth.getChainId();
      if (chainId != 97) {
        alert('Vui lòng liên kết với mạng Binace');
        return;
      }

      const accounts = await web3.eth.requestAccounts();
      localStorage.setItem('connect-wallet', true);
      dispatch(web3Action.setWeb3(web3));
      setCurrentAcount(accounts[0]);

    } catch (error) {
      alert('error')
      console.log(error);
    }
  }

  return (
    <div>

      <header className="header__1">
        <div className="container">
          <div className="wrapper js-header-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img
                  className="header__logo"
                  id="logo_js"
                  src="img/logos/logo.png"
                  alt="logo"
                />
              </Link>
            </div>
            {/* ==================  */}
            <div className="header__menu">
              <ul className="d-flex space-x-20">
                <li className="has_popup">
                  <Link className="color_black is_new" to="/">
                    Home
                    {/* <i className="ri-more-2-fill" /> */}
                  </Link>
                  {/* <ul className="menu__popup space-y-20">
                    {HomesMenu.map((val, i) => (
                      <li key={i}>
                        <Link to={val.link}>
                          <i className={`ri-${val.icon}-line`} />
                          {val.title}
                        </Link>
                      </li>
                    ))}
                  </ul> */}
                </li>
                {PagesMenu.map((val, i) => (
                  <li key={i}>
                    <Link className="color_black" to={val.link}>
                      {val.title}
                    </Link>
                  </li>
                ))}

                <li className="has_popup2">
                  <Link className="color_black is_new hovered" to="/">
                    Pages <i className="ri-more-2-fill" />
                  </Link>
                  <ul className="menu__popup2 space-y-20">
                    <MegaMenu />
                  </ul>
                </li>
              </ul>
            </div>
            {/* ================= */}
            <div className="header__search">
              <input type="text" placeholder="Search" />
              <Link to="no-results" className="header__result">
                <i className="ri-search-line" />
              </Link>
            </div>
            <div className="header__btns">
              <Link className="btn btn-grad btn-sm" to="#" onClick = {() => handleConnectWallet()}>
                <i className="ri-wallet-3-line" />
                {currentAccount ? <span className="header__wallet-adr">{currentAccount}</span> : "Connect wallet"}
              </Link>
            </div>
            <div className="header__burger js-header-burger" onClick={toggleClass}/>
            <div className={` header__mobile js-header-mobile  ${isActive ? 'visible': null} `}>
            <MobileMenu />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
