import React, {useRef, useState} from 'react';
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

function Forum() {
  useDocumentTitle(' Forum');
  const web3 = useSelector(web3Selector.selectWeb3);

  const imageUploadRef = useRef();
  const [formType, setFormType] = useState('funding');
  const [viewPostType, setViewPostType] = useState('funding');
  const [fileDataUrls, setFileDataUrls] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  // funding
  const [totalFunding, setTotalFunding] = useState(0);
  const [interest, setInterest] = useState('');

  // voting
  const [options, setOptions] = useState([{content: ''}]);

  // task
  const [tasks, setTasks] = useState([{content: '', amount: '0'}]);
  const [totalToken, setTotalToken] = useState(0);

  const handlePost = async () => {
    // if (!title || !description || !date) {
    //   alert('Please Check Enter Data');
    //   return;
    // }
    if (web3 === null) {
      alert('Can\'t connect to wallet');
      return;
    }

    const accounts = await web3.eth.getAccounts();
    let contract = new web3.eth.Contract(
        contractValue.ABIContractBuilder,
        contractValue.addressContractBuilder,
    );
    // await contract.methods.PersonVote(1, 1).send({from: accounts[0]});

    return null;
    let convertDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
    const currentTime = new Date(moment().locale('ko').format('YYYY-MM-DD HH:mm:ss')).getTime();
    let convertDateTime = new Date(convertDate).getTime();

    // if (convertDateTime <= currentTime) {
    //   alert('Please, Check selected time!!!');
    // }

    let params = {
      title,
      description,
      date: convertDate,
      fileDataUrls,
    };
    if (formType === 'funding') {
      params = {...params, totalFunding, interest};
      const response = await apis.postFunding(params);
      console.log(response);
    } else if (formType === 'voting') {
      // VOTE
      params = {...params, options};
      const response = await apis.postVoting(params);
      const {data} = response;
      await contract.methods.CreateVote(data, title, options.length).send({from: accounts[0]});

      contract.events
          .NewVote({}, (err, event) => {
            if (err) {
              alert('New Vote Error');
              console.log(err);
              // TODO delete vote in database
              return;
            }
          // console.log( 'eror', err, event);
          })
          .on('connected', function(subscriptionId) {
            console.log('subscriptionId', subscriptionId);
          })
          .on('data', async function(event) {
            alert('Create Voting Successful \r\b Press ok to confirm');
            console.log('data', event);
          })
          .on('changed', function(event) {
            console.log('change');
          })
          .on('error', function(error, receipt) {
            alert('Event Error');

            // TODO delete vote in database
            return;
          });
    } else if (formType === 'task') {
      params = {...params, tasks};
      const response = await apis.postTask(params);
      console.log(response);
    } else {
      alert('Error form post');
    }
    setTitle('');
    setDescription('');
    setDate(new Date());
    setOptions([{content: ''}]);
    setTasks([{content: '', amount: '0'}]);
  };

  const initialState = () => {
    setTitle('');
    setDescription('');
    setDate(new Date());
    setOptions([{content: ''}]);
  };

  const onInputChange = (event) => {
    Promise.all(Array.from(event.target?.files || []).map(getDataURLFromFile)).then((dataUrls) =>
      setFileDataUrls(dataUrls),
    );
  };

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
              <div className="box is__big space-y-20 mb-20 create-post">
                <h3>Create your post</h3>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="reply-name"
                    placeholder="Title"
                    value={title}
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="reply-message"
                    rows={4}
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    defaultValue={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-50">
                  <p className="mb-2">Choose your image or video</p>
                  <div className="row profile-img">
                    <div className="d-flex gap-3">
                      <div
                        className="box image_upload d-flex justify-content-center w-full align-items-center"
                        onClick={() => imageUploadRef.current.click()}>
                        <img className="icon" src="img/icons/upload-plus.svg" alt="" />
                        <input
                          id="imageUpload"
                          type="file"
                          name="profile_photo"
                          placeholder="Photo"
                          required
                          multiple
                          accept="image/png,image/jpg,image/jpeg"
                          hidden
                          ref={imageUploadRef}
                          onChange={(event) => onInputChange(event)}
                        />
                      </div>
                      {fileDataUrls.map((dataUrl) => (
                        <div
                          className="box image_upload d-flex justify-content-center align-items-center"
                          style={{
                            backgroundImage: `url('${dataUrl}')`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                          }}></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mb-50" style={{cursor: 'pointer'}}>
                  <DatePicker
                    onChange={(date) => setDate(date)}
                    selected={date}
                    id="time"
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                  />
                </div>
                <Tabs className="form__content">
                  <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                    <Tab>
                      <span
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                        onClick={() => setFormType('funding')}
                        role="tab">
                        Funding
                      </span>
                    </Tab>
                    <Tab>
                      <span
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                        onClick={() => setFormType('voting')}
                        role="tab">
                        Voting
                      </span>
                    </Tab>
                    <Tab>
                      <button
                        className="btn btn-white btn-sm"
                        data-toggle="tab"
                        onClick={() => setFormType('task')}
                        role="tab">
                        Task
                      </button>
                    </Tab>
                  </TabList>
                  <div className="tab-content">
                    {formType === 'funding' ? (
                      <FundingForm
                        title={title}
                        description={description}
                        file={fileDataUrls}
                        date={date}
                        initialState={initialState}
                      />
                    ) : formType === 'voting' ? (
                      <VotingForm
                        title={title}
                        description={description}
                        file={fileDataUrls}
                        date={date}
                        initialState={initialState}
                      />
                    ) : (
                      <TaskForm
                        title={title}
                        description={description}
                        file={fileDataUrls}
                        date={date}
                        initialState={initialState}
                      />
                    )}
                  </div>
                </Tabs>
              </div>
              <Tabs className="forum__content">
                <TabList className="d-flex space-x-10 mb-30 nav-tabs">
                  <Tab className="nav-item">
                    <button
                      className="btn btn-white btn-sm"
                      onClick={() => setViewPostType('funding')}>
                      Funding
                    </button>
                  </Tab>
                  <Tab className="nav-item">
                    <button
                      className="btn btn-white btn-sm"
                      onClick={() => setViewPostType('voting')}>
                      Voting
                    </button>
                  </Tab>
                  <Tab className="nav-item">
                    <button
                      className="btn btn-white btn-sm"
                      onClick={() => setViewPostType('task')}>
                      Task
                    </button>
                  </Tab>
                </TabList>
              </Tabs>
              <div className="tab-content">
                {/* <TabPanel> */}
                {viewPostType === 'funding' ? (
                  <FundingPostList />
                ) : viewPostType === 'voting' ? (
                  <VotingPostList />
                ) : (
                  <TaskPostList />
                )}
                {/* </TabPanel> */}
              </div>
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
                    <img src={`img/icons/live.svg`} alt="live" style={{width: 13}} />

                    <h5>Live auctions</h5>
                  </div>
                  <div className="box space-y-30">
                    {CardItems.map((val, i) => (
                      <div className="card__item two" key={i}>
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <Link to="item-details">
                              <img src={`img/items/item_${val.img}.png`} alt="item" />
                            </Link>
                            <div className="block_timer">
                              <div
                                className="d-flex justify-content-center
                                                align-items-center txt_sm _bold box_counter">
                                <Countdown date={Date.now() + 60000000} renderer={renderer} />
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
