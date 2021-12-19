import React, {useState, useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getDataURLFromFile} from '../../../utils/getDataUrlFromFile';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Header from '../../../components/header/Header';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';
import Stepper from 'react-stepper-horizontal';
import Image from '../../../assets/Image';
import apis from '../../../apis/apis';
import BlockUi from 'react-block-ui';
import {Loader, Types} from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';

const CreateToken = (props) => {
  useDocumentTitle('Create Token');
  const [name, setName] = useState('');
  const [symBol, setSymBol] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  const [description, setDescription] = useState('');
  const [totalStake, setTotalStake] = useState(0);
  const [facebookUrl, setFacebookUrl] = useState('');

  const [doneStake, setDoneStake] = useState(false);
  const [loadingEvent, setLoadingEvent] = useState(false);
  const [staking, setStaking] = useState(false);

  const [file, setFile] = useState();
  const [fileDataUrls, setFileDataUrls] = useState([]);

  const web3 = useSelector(web3Selector.selectWeb3);
  const imageUploadRef = useRef();

  const handleClickCreateToken = async () => {
    try {
      if (web3 === null) {
        alert('Can\'t connect to web3');
        return;
      }
      if (!name || !symBol || !totalSupply) {
        alert('Please, Check enter input');
        return;
      }

      setLoadingEvent(true);
      const accounts = await web3.eth.getAccounts();
      const myAccount = accounts[0];
      let contract = new web3.eth.Contract(
          contractValue.ABIContractBuilder,
          contractValue.addressContractBuilder,
      );

      // TODO: get token address
      const returnMethod = await contract.methods
          .createToken(name, symBol, totalSupply)
          .send({from: myAccount});
      let tokenAddress = null;
      if (!returnMethod) {
        alert('Create Token Error');
        return;
      } else {
        let {tokenAddress: address} = returnMethod.events.TokenCreated.returnValues;
        tokenAddress = address;
      }

      // TODO check create successful
      const params = {
        name,
        symBol,
        totalSupply,
        description,
        tokenAddress,
        walletAddress: myAccount,
        facebookUrl,
      };

      // TODO Check
      const {size, type} = file[0];
      let response = null;
      if (size / 1000000 < 100) {
        if (type === 'image/png' || type === 'image/jpg') {
          try {
            let data = new FormData();
            data.append('file', file[0]);
            data.append('params', JSON.stringify(params));
            response = await apis.postToken(data);
          } catch (error) {
            console.log(error);
            alert('Post a task server error');
            return;
          }
        } else {
          alert('Check image type');
          return;
        }
      }
      alert('Create token Success');
      setLoadingEvent(false);
      props.history.push('/community');
      // TODO: redirect page
    } catch (error) {
      alert('Call smartcontract error');
      console.log(error);
      setLoadingEvent(false);
    }
  };

  const onInputChange = (event) => {
    Promise.all(Array.from(event.target?.files || []).map(getDataURLFromFile)).then(
        (dataUrls) => setFileDataUrls(dataUrls),
        setFile(event.target?.files),
    );
  };

  const handleStake = async () => {
    try {
      if (web3 === null) {
        alert('Can\'t connect to web3');
        return;
      }
      if (!totalStake) {
        alert('Please, Check enter input');
        return;
      }
      setLoadingEvent(true);
      const accounts = await web3.eth.getAccounts();
      const myAccount = accounts[0];
      const tokenContract = new web3.eth.Contract(
          contractValue.ABIToken,
          contractValue.addressToken,
      );

      await tokenContract.methods
          .approve(contractValue.addressContractBuilder, web3.utils.toWei(totalStake, 'Ether'))
          .send({from: myAccount})
          .on('transactionHash', async (hash) => {});

      try {
        let contractBuilder = new web3.eth.Contract(
            contractValue.ABIContractBuilder,
            contractValue.addressContractBuilder,
        );
        setStaking(true);
        await contractBuilder.methods.staking(totalStake).send({from: myAccount});
        setDoneStake(true);
        setStaking(false);
        setLoadingEvent(false);
        alert('Stake Successfuly');
      } catch (error) {
        setLoadingEvent(false);
        setStaking(false);
        alert('Staking Error');
      }
    } catch (error) {
      alert('Crete token error !!!');
      console.log(error);
      setLoadingEvent(false);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="mt-30">Create My Token</h2>
        <div className="my-3 stepper">
          <Stepper
            steps={[{title: 'Stake CEUS'}, {title: 'Define Your Token'}]}
            activeStep={doneStake ? 1 : 0}
            circleTop={0}
          />
        </div>
        <BlockUi
          tag="div"
          blocking={loadingEvent}
          loader={<Loader active type="ball-spin-fade-loader" color="#5691fd" />}
          className="box in__upload mb-50">
          {doneStake ? (
            <div className="row">
              <h2 className="mb-30">Step 2. Define Your Token</h2>
              <div className="col-sm-4 col-lg-3 offset-0">
                <div className="nameInput mb-2">Your Token Image</div>
                <div
                  className="left__part md:mb-20 upload_file cursor-pointer"
                  onClick={() => imageUploadRef.current.click()}
                  style={{
                    backgroundImage: `url('${fileDataUrls[0]}')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                  }}>
                  {fileDataUrls[0] ? null : (
                    <>
                      <i className="ri-upload-cloud-2-fill" style={{fontSize: '70px'}}></i>
                      <p className="my-0 small">PNG, JPEG, JPG or GIF. Maximum at 100MB.</p>
                    </>
                  )}
                  <Link to="#" className="btn btn-dark mt-4">
                    Browse files
                  </Link>
                </div>
                <input
                  type="file"
                  required
                  accept="image/png,image/jpg,image/jpeg"
                  hidden
                  ref={imageUploadRef}
                  onChange={(event) => onInputChange(event)}
                />
              </div>
              <div className="col-sm-7 col-lg-8 offset-1">
                <div className="form-group space-y-10">
                  <div className="space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Name</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your display name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="space-y-10">
                      <span>
                        Symbol
                        {/* <span className="color_text">(optional) </span> */}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your token name (STM, VNV, ...)"
                        onChange={(e) => setSymBol(e.target.value)}
                        value={symBol}
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="variationInput">Total Supply</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e. g. `raroin design art`"
                        onChange={(e) => setTotalSupply(e.target.value)}
                        value={totalSupply}
                      />
                      {/* <select
                        className="form-select custom-select"
                        aria-label="Default select example">
                        <option> 00.00 ETH</option>
                        <option>01.00 ETH</option>
                        <option>02.00 ETH</option>
                        <option>10.00 ETH</option>
                        <option>20.00 ETH</option>
                      </select> */}
                    </div>
                    <div className="space-y-10">
                      <span className="variationInput">Description</span>
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
                    <div className="space-y-10">
                      <span className="nameInput">Your facebook URL</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="https://facebook.com/your-page"
                        pattern="^https://facebook.com/"
                        onChange={(e) => setFacebookUrl(e.target.value)}
                        value={facebookUrl}
                      />
                    </div>

                    <button
                      className="btn btn-grad  h-100 flex-shrink-0"
                      onClick={() => handleClickCreateToken()}>
                      Create Token
                    </button>
                    {/* <div className="space-y-10">
                      <span className="variationInput">Choose collection</span>
                      <div className="d-flex flex-column flex-md-row">
                        <div className="choose_collection bg_black  ">
                          <img
                            src={`img/icons/raroin_icon.svg`}
                            alt="raroin_icon"
                          />

                          <span className="color_white ml-10">
                            Raroin Collection
                          </span>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* <p className="color_black">
                  <span className="color_text text-bold"> Service fee : </span>
                  2.5%
                </p>
                <p className="color_black">
                  <span className="color_text text-bold">You will receive :</span>
                  22.425 ETH $41,637.78
                </p>
                <p></p> */}
              </div>
            </div>
          ) : (
            <div className="row">
              <h2 className="mb-30">Step 1. Stake CEUS</h2>
              <p>Deposit amount</p>
              <div style={{maxWidth: '25rem'}} className="d-flex align-items-center gap-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Total"
                  value={totalStake}
                  min="0"
                  onChange={(e) => setTotalStake(e.target.value)}
                />
                <button
                  className="btn btn-primary square h-100 flex-shrink-0"
                  onClick={() => handleStake()}>
                  Deposit
                </button>
              </div>
              {staking && <div className="mt-50 text-center w-full">Staking...</div>}
            </div>
          )}
        </BlockUi>
      </div>
      {/* <div className="fixed_row bottom-0 left-0 right-0">
        <div className="container">
          <div className="row content justify-content-between mb-20_reset">
            <div className="col-md-auto col-12 mb-20">
              <div className="space-x-10">
                <Link
                  to="/upload-type"
                  className="btn btn-white
                  others_btn">
                  Cancel
                </Link>
                <Link to="#" className="btn btn-dark others_btn">
                  Preview
                </Link>
              </div>
            </div>
            <div className="col-md-auto col-12 mb-20">
              <Link
                to="item-details"
                className="btn btn-grad
                btn_create">
                Create item
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default CreateToken;
