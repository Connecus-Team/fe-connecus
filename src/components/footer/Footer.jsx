import React from 'react';
import {Link} from 'react-router-dom';
import Images from '../../assets/Image';

function Footer() {
  return (
    <div>
      <footer className="footer__1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 space-y-20">
              <div className="footer__logo">
                <Link to="/">
                  <img
                    src={Images.logo}
                    alt="logo"
                    style={{width: '120px'}}
                  />
                </Link>
              </div>
              <p className="footer__text">raroin is a shared liquidity NFT market smart contract</p>
              <div>
                <ul className="footer__social space-x-10 mb-40">
                  <li>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                      <i className="ri-facebook-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.messenger.com/" rel="noreferrer" target="_blank">
                      <i className="ri-messenger-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer">
                      <i className="ri-whatsapp-line" />
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                      <i className="ri-youtube-line" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-6">
              <h6 className="footer__title">Connecus</h6>
              <ul className="footer__list">
                <li>
                  <Link to="home-1"> Document </Link>
                </li>
                <li>
                  <Link to="home-2"> FAQ </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
