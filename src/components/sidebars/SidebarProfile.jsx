import React, {useEffect, useState} from 'react';
import moment from 'moment';

const SidebarProfile = ({token}) => {
  const [tokenInfo, setTokenInfo] = useState(null);

  useEffect(() => {
    setTokenInfo(token);
  }, [token]);

  if (!tokenInfo) return null;

  const styleText = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100px',
  };

  return (
    <div className="profile__sidebar">
      <div className="space-y-40">
        <div className="space-y-10">
          <h5>About me</h5>
          <div className="box space-y-20">
            <p>
              {tokenInfo.token_name} ({tokenInfo.symbol})
            </p>
            <p>
              {tokenInfo.token_description}
            </p>
            <div className="row">
              <div className="col-6">
                <span className="txt_sm color_text">Address</span>
                <div className="d-flex">
                  <h4 style={styleText}>{tokenInfo.token_address}</h4>
                  <h4>{tokenInfo.token_address.slice(-3)} </h4>
                </div>
                <p>
                  <i className="ri-file-copy-line"></i> &nbsp;&nbsp;
                  <a href={`https://ropsten.etherscan.io/address/${tokenInfo.token_address}`} target="_blank" rel="noreferrer"><i className="ri-share-box-line"></i></a>
                </p>
              </div>
              <div className="col-6">
                <span className="txt_sm color_text">Created Date</span>
                <h4 >{moment(tokenInfo.created).format('YYYY-MM-DD')}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h5>Follow me</h5>
          <div className="box">
            <ul className="social_profile space-y-10 overflow-hidden">
              <li>
                <a href={`${tokenInfo.facebook_url}`} rel="noreferrer" target="_blank">
                  <i className="ri-facebook-line" />
                  <span style={{...styleText, width: '200px'}} className="color_text">/{tokenInfo.facebook_url.slice(25)}</span>
                </a>
              </li>
              {/* <li>
                <a href="https://www.messenger.com/" rel="noreferrer" target="_blank">
                  <i className="ri-messenger-line" />
                  <span className="color_text"> messenger/</span>
                  @creabik
                </a>
              </li>
              <li>
                <a href="https://whatsapp.com" target="_blank" rel="noreferrer" >
                  <i className="ri-whatsapp-line" />
                  <span className="color_text"> whatsapp/</span>
                  @creabik
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" >
                  <i className="ri-youtube-line" />
                  <span className="color_text">youtube/</span>
                  @creabik
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center txt_sm mt-20 color_text">Since 2021</p>
    </div>
  );
};

export default SidebarProfile;
