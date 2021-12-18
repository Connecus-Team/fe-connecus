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
  const [file, setFile] = useState();
  const [fileDataUrls, setFileDataUrls] = useState([]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [convertDate, setConvertDate] = useState(moment(date).format('YYYY-MM-DD HH:mm:ss'));

  const [token, setToken] = useState();
  const [isMyToken, setIsMyToken] = useState(false);

  // Aside: Live funding & voting
  const [liveFundingList, setLiveFundingList] = useState(data.fundingCard.slice(0, 2));
  const [liveVotingList, setLiveVotingList] = useState(data.votingCard.slice(0, 2));

  const initialState = () => {
    setTitle('');
    setDescription('');
    setDate(new Date());
    setOptions([{content: ''}]);
  };

  const onInputChange = (event) => {
    Promise.all(Array.from(event.target?.files || []).map(getDataURLFromFile)).then(
        (dataUrls) => setFileDataUrls(dataUrls),
        setFile(event.target?.files),
    );
  };

  const handleSetDate = (date) => {
    let convertDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
    const currentTime = new Date(moment().locale('ko').format('YYYY-MM-DD HH:mm:ss')).getTime();
    let convertDateTime = new Date(convertDate).getTime();
    if (convertDateTime <= currentTime) {
      alert('Please, Check selected time!!!');
      return;
    }

    setConvertDate(convertDate);
    setDate(date);
  };

  useEffect(() => {
    const comparisonToken = async () => {
      if (web3 && token) {
        const accounts = await web3.eth.getAccounts();
        const walletAddress = accounts[0]; // TODO Check
        const {wallet_address} = token;
        if (wallet_address === walletAddress) {
          setIsMyToken(true);
        }
      }
    };
    comparisonToken();
  }, [token, web3]);
  return (
    <div>
      <Header />
      <HeroProfile setToken={setToken} />
      <section className="section forum mt-20">
        <div className="container-md">
          <div className="row sm:space-y-30">
            <div className="col-lg-3">
              <SidebarProfile />
            </div>
            <div className="col-lg-6 mt-40">
              {isMyToken && (
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
                      onChange={(date) => handleSetDate(date)}
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
                          file={file}
                          date={convertDate}
                          initialState={initialState}
                        />
                      ) : formType === 'voting' ? (
                        <VotingForm
                          title={title}
                          description={description}
                          file={file}
                          date={convertDate}
                          initialState={initialState}
                        />
                      ) : (
                        <TaskForm
                          title={title}
                          description={description}
                          file={file}
                          date={convertDate}
                          initialState={initialState}
                        />
                      )}
                    </div>
                  </Tabs>
                </div>
              )}
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
                  <FundingPostList token={token} />
                ) : viewPostType === 'voting' ? (
                  <VotingPostList token={token} />
                ) : (
                  <TaskPostList token={token} />
                )}
                {/* </TabPanel> */}
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sidebar space-y-30 mb-30">
                <div className="space-y-10">
                  <div className="box space-y-30">
                    <div className="d-flex space-x-10">
                      <img src={`img/icons/live.svg`} alt="live" style={{width: 13}} />
                      <h5>Live Funding</h5>
                    </div>
                    {liveFundingList.map((val) => (
                      <div className="card__item two my-3" key={val.id}>
                        <div className="card_body space-y-10">
                          {/* =============== */}
                          <div className="card_head">
                            <Link to="item-details">
                              <img src={val.img} alt="item" />
                            </Link>
                            <div className="block_timer">
                              <div
                                className="d-flex justify-content-center
                                                align-items-center txt_sm _bold box_counter">
                                <Countdown date={new Date(val.date)} renderer={ConnecusCountDown} />
                              </div>
                            </div>
                            <div
                              className="details d-flex
                                                justify-content-between position-absolute bottom-0 start-0 w-100 text-white px-3 pt-2"
                              style={{height: '4rem', backgroundColor: '#00000090'}}>
                              <small>
                                <strong>Total Funding</strong>: 80/{val.totalFunding} ETH
                              </small>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  style={{width: '80%'}}
                                  aria-valuenow={80}
                                  aria-valuemin={0}
                                  aria-valuemax={val.totalFunding}
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
                          <p className="line-clamp-2 small mt-0">{val.description}</p>
                          <div className="hr" />
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
