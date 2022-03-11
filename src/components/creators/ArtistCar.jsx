import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Popup from 'reactjs-popup';
import apis from '../../apis/apis';
import moment from 'moment';

import 'reactjs-popup/dist/index.css';

const CardItems = [
  {
    avatar_img1: '1',
    avatar_name1: 'mickel_fenn',
    avatar_img2: '2',
    avatar_name2: 'danil_pannini',
    likes: '1.2',
    img: 'https://image-us.24h.com.vn/upload/3-2021/images/2021-07-06/Xon-xao-Son-Tung-M-TP-va-loat-youtuber-dinh-dam-bi-cuom-mat-thuong-hieu-photo-1-16094117624341764656274-1625582209-452-width620height827.jpg',
    title: 'Son Tung MTP',
    price: '2.45',
    stock: '4',
  },
  {
    avatar_img1: '3',
    avatar_name1: 'mazanov_sky',
    avatar_img2: '4',
    avatar_name2: 'mucky_fennouni',
    likes: '13.2',
    img: 'https://nghesiviet.vn/storage/files/7/viruss/viruss-2.jpg',
    title: 'Varus Streamer',
    price: '2.55',
    stock: '12',
  },
  {
    avatar_img1: '5',
    avatar_name1: 'jimmy_dom',
    avatar_img2: '6',
    avatar_name2: 'kristian_sefroui',
    likes: '1.2',
    img: 'https://znews-stc.zdn.vn/static/topic/person/chi%20pu.jpg',
    title: 'Chi Pu Single',
    price: '2.45',
    stock: '6',
  },
  {
    avatar_img1: '1',
    avatar_name1: 'Alvin_nov',
    avatar_img2: '7',
    avatar_name2: 'mucky_holiman',
    likes: '4.1',
    img: 'https://cly.1cdn.vn/2021/04/23/z2450384911701_67dfa2c9526fe9085216815136915eeb.jpg',
    title: 'Do Mixi Steamer',
    price: '0.55',
    stock: '34',
  },
  {
    avatar_img1: '8',
    avatar_name1: 'stivan_rominok',
    avatar_img2: '9',
    avatar_name2: 'danil_pan',
    likes: '6.4',
    img: 'https://genk.mediacdn.vn/2019/2/2/330590584953771075472064065939655294451712o-crop-15320739851522024128013-15491167532911339465819.jpg',
    title: 'Spider Eyes Modern Art',
    price: '1.45',
    stock: '7',
  },
  {
    avatar_img1: '10',
    avatar_name1: 'mazanov_sky',
    avatar_img2: '11',
    avatar_name2: 'mucky_art',
    likes: '13.2',
    img: 'https://cdn-img.thethao247.vn/upload/chihieu/2018/11/24/misthy-1.jpg',
    title: 'Synthwave Painting',
    price: '0.055',
    stock: '2',
  },
  {
    avatar_img1: '12',
    avatar_name1: 'jimmy_dom',
    avatar_img2: '5',
    avatar_name2: 'kristian_fel',
    likes: '1.6',
    img: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2018/06/27/e/8/8/5/1530074198530_600.jpg',
    title: 'Contemporary Abstract',
    price: '0.95',
    stock: '34',
  },
  {
    avatar_img1: '13',
    avatar_name1: 'Alvin_nov',
    avatar_img2: '14',
    avatar_name2: 'mucky_art',
    likes: '11.5',
    img: 'https://image.thanhnien.vn/1080/uploaded/haoph/2021_03_06/img_0467_lsvb.jpg',
    title: 'Valkyrie Abstract Art',
    price: '3.55',
    stock: '9',
  },
];

const Cards1 = () => {
  const ref = useRef();
  const closeTooltip = () => ref.current.close();

  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchToken = async () => {
      const response = await apis.getAllToken();
      const {data} = response;
      setTokenList(data);
    };
    fetchToken();
  }, []);
  return (
    <div className="mt-30">
      <div className="container">
        <div className="section__head">
          <div
            className="d-flex
				space-x-20
				justify-content-between
				align-items-center">
            <h2 className="section__title text-center">Influencers</h2>
            <Link to="/marketplace" className="btn btn-sm btn-dark"> View all </Link>

          </div>
        </div>
        <div className="row">
          {tokenList.length !== 0 && tokenList.map((val, i) => (
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
              <div className="card__item four">
                <div className="card_body space-y-10">
                  {/* =============== */}
                  <div className="creators space-x-10">
                    <div className="avatars space-x-3">
                      <Link to="profile">
                        <img
                          src={`${process.env.REACT_APP_SERVER_API}api/files/${val.link}`}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </Link>
                      <Link to="profile">
                        <p className="avatars_name txt_xs">
                          @{val.symbol}
                        </p>
                      </Link>
                    </div>
                    {/* <div className="avatars space-x-3">
                      <Link to="profile">
                        <img
                          src={`img/avatars/avatar_${val.avatar_img2}.png`}
                          alt="Avatar"
                          className="avatar avatar-sm"
                        />
                      </Link>
                      <Link to="profile">
                        <p className="avatars_name txt_xs">
                          @{val.avatar_name2}
                        </p>
                      </Link>
                    </div> */}
                  </div>
                  <div className="card_head">
                    <img src={`${process.env.REACT_APP_SERVER_API}api/files/${val.link}`} alt="nftimage" />
                    <div className="likes space-x-3">
                      <i className="ri-heart-3-fill" />
                      <span className="txt_sm">{val.likes}k</span>
                    </div>
                  </div>
                  {/* =============== */}
                  <h6 className="card_title">
                    <Link className="color_black" to={`/token-view?address=${val.token_address}`}>
                      {val.token_description}
                    </Link>
                  </h6>
                  <div className="card_footer d-block space-y-10">
                    <div className="card_footer justify-content-between">
                      <div className="creators">
                        <p className="txt_sm">{val.token_name}</p>
                      </div>
                      <div className="txt_sm">
                          Price: {' '}
                        <span className="color_green txt_sm">
                          {/* {val.price} */}
                          1
                            CEUS
                        </span>
                      </div>
                    </div>
                    <div className="hr" />
                    <div
                      className="d-flex
								align-items-center
								space-x-10
								justify-content-between">
                      {/* <div
                        className="d-flex align-items-center
									space-x-5">
                        <i className="ri-history-line" />
                        <Popup
                          className="custom"
                          ref={ref}
                          trigger={
                            <button className="popup_btn">
                              <p
                                className="color_text txt_sm view_history"
                                style={{width: 'auto'}}>
                                View Info.
                              </p>
                            </button>
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
                                <button
                                  type="button"
                                  className="button close"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  onClick={closeTooltip}>
                                  <span aria-hidden="true">×</span>
                                </button>
                                <div className="space-y-20">
                                  <h4> History </h4>
                                  <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                      <div className="media">
                                        <div className="badge">
                                          <img
                                            src={`img/icons/Badge.svg`}
                                            alt="Badge"
                                          />
                                        </div>
                                        <Link to="profile">
                                          <img
                                            src={`img/avatars/avatar_1.png`}
                                            alt="Avatar"
                                            className="avatar avatar-md"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <p className="color_black">
                                          Bid accepted
                                          <span className="color_brand">
                                            1 ETH
                                          </span>
                                          by
                                          <Link
                                            className="color_black txt
						_bold"
                                            to="profile">
                                            ayoub
                                          </Link>
                                        </p>
                                        <span className="date color_text">
                                          28/06/2021, 12:08
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="creator_item creator_card space-x-10">
                                    <div className="avatars space-x-10">
                                      <div className="media">
                                        <div className="badge">
                                          <img
                                            src={`img/icons/Badge.svg`}
                                            alt="Badge"
                                          />
                                        </div>
                                        <Link to="profile">
                                          <img
                                            src={`img/avatars/avatar_2.png`}
                                            alt="Avatar"
                                            className="avatar avatar-md"
                                          />
                                        </Link>
                                      </div>
                                      <div>
                                        <p className="color_black">
                                          Bid accepted
                                          <span className="color_brand">
                                            3 ETH
                                          </span>
                                          by
                                          <Link
                                            className="color_black txt
						_bold"
                                            to="profile">
                                            monir
                                          </Link>
                                        </p>
                                        <span className="date color_text">
                                          22/05/2021, 12:08
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popup>
                      </div> */}

                      <Popup
                        className="custom"
                        ref={ref}
                        trigger={
                          <button className="btn btn-sm btn-primary">
                            Information
                          </button>
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
                              <button
                                type="button"
                                className="button close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={closeTooltip}>
                                <span aria-hidden="true">×</span>
                              </button>
                              <div className=" space-y-20">
                                <h3>Information</h3>
                                {/* <p>
                                  You must bid at least
                                  <span className="color_black">15 ETH</span>
                                </p>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="00.00 ETH"
                                />
                                <p>
                                  Enter quantity.
                                  <span className="color_green">
                                    5 available
                                  </span>
                                </p>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={1}
                                /> */}
                                <div className="hr" />
                                <div className="d-flex justify-content-between">
                                  <p> Name:</p>
                                  <p className="text-right color_black txt _bold">
                                    {val.token_name}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p> Symbol:</p>
                                  <p className="text-right color_black txt _bold">
                                    {val.symbol}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p> Total bid amount:</p>
                                  <p className="text-right color_black txt _bold">
                                    {val.total_supply}
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <p> Created Date:</p>
                                  <p className="text-right color_black txt _bold">
                                    {moment(val.created).format('YYYY-MM-DD HH:mm:ss')}
                                  </p>
                                </div>
                                <div className=" justify-content-between">
                                  <p> Description:</p>
                                  <p className="text-left color_black txt _bold">
                                    {val.token_description}
                                  </p>
                                </div>
                                <button className="btn btn-primary w-full" onClick={closeTooltip}>Close</button>
                                {/* <Popup
                                  className="custom"
                                  ref={ref}
                                  trigger={
                                    <button className="btn btn-primary w-full" >
                                      Place a bid
                                    </button>
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
                                        <button
                                          type="button"
                                          className="button close"
                                          data-dismiss="modal"
                                          aria-label="Close"
                                          onClick={closeTooltip}>
                                          <span aria-hidden="true">×</span>
                                        </button>
                                        <div className="space-y-20">
                                          <h3 className="text-center">
                                            Your Bidding Successfuly Added
                                          </h3>
                                          <p className="text-center">
                                            your bid
                                            <span
                                              className="color_text txt
      _bold">
                                              (16ETH)
                                            </span>
                                            has been listing to our database
                                          </p>
                                          <Link
                                            to="#"
                                            className="btn btn-dark w-full">
                                            Watch the listings
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popup>*/}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards1;
