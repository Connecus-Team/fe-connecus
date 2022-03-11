import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import queryString from 'query-string';
import apis from '../../apis/apis';
import Popup from 'reactjs-popup';

// TODO fix setToken by Redux
const HeroProfile = ({setToken}) => {
  const ref = useRef();
  const [isActive, setActive] = useState(false);
  const toggleFollow = () => {
    setActive(!isActive);
  };
  const [isShare, setShare] = useState(false);

  const toggleShare = () => {
    setShare(!isShare);
  };
  const [isMore, setMore] = useState(false);

  const toggleMore = () => {
    setMore(!isMore);
  };

  const [tokenInfo, setTokenInfo] = useState('');
  useEffect(() => {
    const fetchTokenInfo = async () => {
      // TODO check address
      const {address: tokenAddress} = queryString.parse(window.location.search);
      let params = {tokenAddress};
      const response = await apis.getTokenInfo(params);

      // TODO check
      const {data} = response;
      setTokenInfo(data);
      if (setToken !== undefined) {
        // TODO store redux
        setToken(data);
        localStorage.setItem('token', JSON.stringify(data));
      }
    };
    fetchTokenInfo();
  }, []);
  if (!tokenInfo) return null;

  const styleText = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '150px',
  };

  return (
    <div className="mb-100">
      <div className="hero__profile">
        <div className="cover">
          <img src={`${process.env.REACT_APP_SERVER_API}api/files/${tokenInfo.link}`} alt="ImgPreview" />
        </div>
        <div className="infos">
          <div className="container">
            <div className="row flex-wrap align-items-center justify-content-between sm:space-y-50">
              <div className="col-md-auto mr-20">
                <div className="avatars d-flex space-x-20 align-items-center">
                  <div className="avatar_wrap">
                    <img
                      className="avatar avatar-lg"
                      src={`${process.env.REACT_APP_SERVER_API}api/files/${tokenInfo.link}`}
                      alt="avatar"
                    />
                  </div>
                  <h5>@{tokenInfo.token_name}</h5>
                </div>
              </div>
              <div className="col-md-auto">
                <div className="d-sm-flex flex-wrap align-items-center space-x-20 mb-20_reset d-sm-block">
                  <div className="mb-20">
                    <div className="copy">
                      <span className="color_text" style={styleText} > {tokenInfo.token_address} </span>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap align-items-center space-x-20">
                    <div className="mb-20">
                      <div
                        className={`btn btn-dark btn-sm ${
                          isActive ? 'btn-prim' : null
                        } `}
                        onClick={toggleFollow}>
                        Follow{isActive ? 'ing' : null}
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="share">
                        <div className="icon" onClick={toggleShare}>
                          <i className="ri-share-line"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isShare ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                              <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                                <i className="ri-facebook-line"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.messenger.com/" rel="noreferrer" target="_blank">
                                <i className="ri-messenger-line"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                                <i className="ri-whatsapp-line"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                                <i className="ri-youtube-line"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="mb-20">
                      <div className="more">
                        <div className="icon" onClick={toggleMore}>
                          <i className="ri-more-fill"></i>
                        </div>
                        <div
                          className={`dropdown__popup ${
                            isMore ? 'visible' : null
                          } `}>
                          <ul className="space-y-10">
                            <li>
                              <Popup
                                className="custom"
                                ref={ref}
                                trigger={
                                  <Link
                                    to="#"
                                    className="content space-x-10 d-flex">
                                    <i className="ri-flag-line" />
                                    <span> Report </span>
                                  </Link>
                                }
                                position="bottom center">
                                <div>
                                  <div
                                    className="popup"
                                    id="popup_bid"
                                    tabIndex={-1}
                                    role="dialog"
                                    aria-hidden="true">
                                    <div>
                                      <div className="space-y-20">
                                        <h3>
                                          Thank you, we've received your report
                                        </h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popup>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroProfile;
