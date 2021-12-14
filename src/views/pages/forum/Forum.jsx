import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import HeroProfile from '../../../components/hero/HeroProfile';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import Countdown from 'react-countdown';
import useDocumentTitle from '../../../components/useDocumentTitle';
import SidebarProfile from '../../../components/sidebars/SidebarProfile';

const CardItems = [
  {
    img: '1',

    title: 'Colorful Abstract Painting',
    avatar_img1: '10',
    avatar_img2: '11',
    avatar_name: 'darian_barry',
    price: '0.001',
  },
  {
    img: '2',

    title: 'Synthwave Modern Painting',
    avatar_img1: '12',
    avatar_img2: '13',
    avatar_name: 'makinzi_beck',
    price: '0.047',
  },
  {
    img: '3',

    title: 'The girl with the firefly',
    avatar_img1: '14',
    avatar_img2: '15',
    avatar_name: 'jaxon_duffy',
    price: '0.074',
  },
];

// Random component
const Completionist = () => <span>auction ending soon now!</span>;
// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown

    return (
      <span>
        {hours} : {minutes} : {seconds}
      </span>
    );
  }
};

const FundingContainer = () => {
  return (
    <form>
      <div className="form-row">
        <div className="col-sm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="reply-name"
              placeholder="Title"
            />
          </div>
        </div>
        <div className="col-sm">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="reply-email"
              placeholder="Total money $"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <textarea
          name="reply-message"
          rows={8}
          className="form-control"
          placeholder="Description"
          defaultValue={''}
        />
      </div>
      <div id="boxUpload">
        <Link to="#" className="btn btn-sm btn-dark">
          Upload
        </Link>
        <input
          id="imageUpload"
          type="file"
          name="profile_photo"
          placeholder="Photo"
          required
          capture
        />
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to="#"
          className="btn btn-primary sweep_letter sweep_top">
          <div className="inside_item">
            <span data-hover="Reply"> Reply </span>
          </div>
        </Link>
      </div>
    </form>
  );
};

const VoteContainer = () => {
  return (
    <form>
      <div className="form-row">
        <div className="col-sm">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="reply-name"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="reply-name"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <p>Option</p>
            <div>
              <input
                type="text"
                className="form-control mb-20"
                name="reply-name"
                placeholder="Option 1"
              />
              <input
                type="text"
                className="form-control mb-20"
                name="reply-name"
                placeholder="Option 1"
              />
              <input
                type="text"
                className="form-control mb-20"
                name="reply-name"
                placeholder="Option 1"
              />
            </div>
            <div className="w-full">
              <button className="btn btn-primary w-full">+ Add option</button>
            </div>
          </div>
        </div>
      </div>
      <div id="boxUpload">
        <Link to="#" className="btn btn-sm btn-dark">
          Upload
        </Link>
        <input
          id="imageUpload"
          type="file"
          name="profile_photo"
          placeholder="Photo"
          required
          capture
        />
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to="#"
          className="btn btn-primary sweep_letter sweep_top">
          <div className="inside_item">
            <span data-hover="Reply"> Reply </span>
          </div>
        </Link>
      </div>
    </form>
  );
};

const TaskContainer = () => {
  return (<div>task Container</div>);
};

function Forum() {
  useDocumentTitle(' Forum');

  const [formType, setFormType] = useState('funding');

  return (
    <div>
      <Header />
      <HeroProfile />
      <section className="section forum mt-20">
        <div className="container-md">
          <div className="row sm:space-y-30">
            <div className="col-lg-3">
              <SidebarProfile />
            </div>
            <div className="col-lg-6 mt-40">
              <div className="box is__big space-y-20 mb-20">
                <div className="w-full d-flex justify-content-between">
                  <select className="form-control" value={formType} onChange={(e) => setFormType(e.target.value)}>
                    <option value="funding">Funding</option>
                    <option value="voting">Voting</option>
                    <option value="task">Task</option>
                  </select>
                </div>
                {
                  formType === 'funding' ? <FundingContainer /> : formType === 'voting' ? <VoteContainer /> : <TaskContainer />
                }
                <button className="btn btn-primary ">Submit</button>
              </div>
              <Tabs className="forum__content">
                <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                  <Tab className="nav-item">
                    <Link
                      className="btn btn-white btn-sm"
                      data-toggle="tab"
                      to="#tabs-1"
                      role="tab">
                      Funding
                    </Link>
                  </Tab>
                  <Tab className="nav-item">
                    <Link
                      className="btn btn-white btn-sm"
                      data-toggle="tab"
                      to="#tabs-1"
                      role="tab">
                      Voting
                    </Link>
                  </Tab>
                  <Tab className="nav-item">
                    <Link
                      className="btn btn-white btn-sm"
                      data-toggle="tab"
                      to="#tabs-1"
                      role="tab">
                      Task
                    </Link>
                  </Tab>
                </TabList>
                <div className="tab-content">
                  <TabPanel>
                    <div className="space-y-20">
                      {[...Array(5)].map((e, i) => (
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
                                      @ayoub
                                    </p>
                                  </Link>
                                </div>
                              </div>
                              <div className="category">
                                <p className="color_black">
                                  <span className="color_text">in:</span>
                                  General
                                </p>
                              </div>
                            </div>
                            <div>
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <Link
                                    className="d-none d-sm-inline"
                                    to="profile">
                                    <img
                                      src={`img/avatars/avatar_1.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link
                                    className="d-none d-sm-inline"
                                    to="profile">
                                    <img
                                      src={`img/avatars/avatar_2.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link
                                    className="d-none d-sm-inline"
                                    to="profil">
                                    <img
                                      src={`img/avatars/avatar_4.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_5.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_6.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <span className="total__avatars">+20</span>
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
                                Thank you you all for making this community
                                </h3>
                              </Link>
                              <p className="forum__desc">
                                Hey guys! New exploration about NFT Marketplace
                                Web Design, this time I'm inspired by one of my
                                favorite NFT website called Rarible (with crypto
                                payment)! What do you
                              </p>
                              <div className="tags">
                                <span>#NFT Marketplace</span>
                                <span>#crypto Artists</span>
                                <span>#NFT Artists</span>
                              </div>
                              <div className="hr" />
                              <div
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
                                  <Link
                                    to="post-details"
                                    className="comments space-x-3">
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
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                </div>
              </Tabs>
            </div>
            <div className="col-lg-3">
              <div className="sidebar space-y-30">
                <div className="space-y-10">
                  <h5>Categories</h5>
                  <div className="box space-y-10 is__big">
                    <div className="d-flex justify-content-between">
                      <span className="color-black">General</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">NFT Update</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">Marketplace</span>
                      <span className="light_bg">346</span>
                    </div>
                    <div className="hr" />
                    <div className="d-flex justify-content-between">
                      <span className="color-black">Platform Update</span>
                      <span className="light_bg">346</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <h5>Popular Tags</h5>
                  <div className="box popular-tags is__big">
                    <div className="tags_items">
                      <span className="light_bg mr-10">#bitcoinpr</span>
                      <span className="light_bg">#cryptopressrelease</span>
                      <span className="light_bg">#nftcommunity</span>
                      <span className="light_bg">#nftcollector</span>
                      <span className="light_bg">#nftartist </span>
                      <span className="light_bg">#opensea</span>
                      <span className="light_bg">#nftartbtc</span>
                      <span className="light_bg">#nftartbtc</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-10">
                  <div className="d-flex space-x-10">
                    <img
                      src={`img/icons/live.svg`}
                      alt="live"
                      style={{width: 13}}
                    />

                    <h5>Live auctions</h5>
                  </div>
                  <div className="box space-y-30">
                    {CardItems.map((val, i) => (
                      <div className="card__item two" key={i}>
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <Link to="item-details">
                              <img
                                src={`img/items/item_${val.img}.png`}
                                alt="item"
                              />
                            </Link>
                            <div className="block_timer">
                              <div
                                className="d-flex justify-content-center
                                                align-items-center txt_sm _bold box_counter">
                                <Countdown
                                  date={Date.now() + 60000000}
                                  renderer={renderer}
                                />
                              </div>
                            </div>
                            <div
                              className="details d-flex
                                                justify-content-between">
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: '80%'}}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                          {/* =============== */}
                          <h6 className="card_title">
                            <Link className="color_black" to="item-details">
                              {val.title}
                            </Link>
                          </h6>
                          <div className="hr" />
                          <div
                            className="card_footer
                                            justify-content-between">
                            <div className="creators">
                              <div className="avatars space-x-3">
                                <div className="-space-x-20">
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_${val.avatar_img1}.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                  <Link to="profil">
                                    <img
                                      src={`img/avatars/avatar_${val.avatar_img2}.png`}
                                      alt="Avatar"
                                      className="avatar avatar-sm"
                                    />
                                  </Link>
                                </div>
                                <Link to="profil">
                                  <p
                                    className="avatars_name
                                                            txt_sm
                                                            color_black">
                                    @{val.avatar_name}
                                  </p>
                                </Link>
                              </div>
                            </div>
                            <Link to="#" className="space-x-3">
                              <p className="color_green txt_sm">
                                {val.price}
                                ETH
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Forum;
