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
    textCverflow: 'ellipsis',
    minWidth: '100px',
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
                {/* <h4 style={styleText}>{tokenInfo.token_address}</h4> */}
                <h4 >0x6E4e802A68a52fc87cc9e34fc4E0d9f571F4A52D</h4>
              </div>
              <div className="col-6">
                <span className="txt_sm color_text">Created Date</span>
                {/* <h4 >{moment(tokenInfo.created).format('YYYY-MM-DD HH:mm:ss')}</h4> */}
                <h4>2021-12-18 19:47:11</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-10">
          <h5>Follow me</h5>
          <div className="box">
            <ul className="social_profile space-y-10 overflow-hidden">
              <li>
                <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                  <i className="ri-facebook-line" />
                  <span className="color_text">facebook/</span>
                  @creabik
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
