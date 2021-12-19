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
import data from './data';
import FundingPostList from './FundingPostList';
import VotingPostList from './VotingPostList';
import TaskPostList from './TaskPostList';
import TaskForm from './TaskForm';
import VotingForm from './VotingForm';
import FundingForm from './FundingForm';
import ConnecusCountDown from './ConnecusCountDown';
import ForumRight from './ForumRight';
import BlockUi from 'react-block-ui';
import {Loader, Types} from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';


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

function Forum() {
  useDocumentTitle('Forum');
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

  const [loadingCreatePost, setLoadingCreatePost] = useState(false);

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
        const myAddress = accounts[0]; // TODO Check
        const {wallet_address} = token;
        if (wallet_address === myAddress) {
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
              <SidebarProfile token={token} />
            </div>
            <div className="col-lg-6 mt-40">
              {isMyToken && (
                <BlockUi
                  tag="div"
                  blocking={loadingCreatePost}
                  loader={<Loader active type="ball-spin-fade-loader" color="#5691fd" />}
                  className="box in__upload mb-50">
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
                      <p className="mb-2">Choose your image or video (jpg, png)</p>
                      <div className="row profile-img">
                        <div className="d-flex gap-3">
                          <div
                            className="box image_upload d-flex justify-content-center w-full align-items-center"
                            onClick={() => imageUploadRef.current.click()}
                            style={{
                              backgroundImage: `url('${fileDataUrls[0]}')`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                            }}
                          >
                            <i className={(fileDataUrls[0] ? 'ri-edit-2-line bg_brand_light':'ri-add-circle-line' )}></i>
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
                          {/* {fileDataUrls.map((dataUrl) => (
                          <div
                            className="box image_upload d-flex justify-content-center align-items-center"
                            style={{
                              backgroundImage: `url('${dataUrl}')`,
                              backgroundPosition: 'center',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                            }}></div>
                        ))} */}
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
                          setLoadingCreatePost={setLoadingCreatePost}
                        />
                      ) : formType === 'voting' ? (
                        <VotingForm
                          title={title}
                          description={description}
                          file={file}
                          date={convertDate}
                          initialState={initialState}
                          setLoadingCreatePost={setLoadingCreatePost}
                        />
                      ) : (
                        <TaskForm
                          title={title}
                          description={description}
                          file={file}
                          date={convertDate}
                          initialState={initialState}
                          setLoadingCreatePost={setLoadingCreatePost}
                        />
                      )}
                      </div>
                    </Tabs>
                  </div>
                </BlockUi>
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
              <ForumRight />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Forum;
