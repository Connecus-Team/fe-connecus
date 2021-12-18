import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import useDocumentTitle from '../../../components/useDocumentTitle';
import Header from '../../../components/header/Header';
import web3Selector from '../../../components/header/redux/Web3.Selector';
import contractValue from '../../../constants/contract';
import Stepper from 'react-stepper-horizontal';

const CreateToken = () => {
  useDocumentTitle('Create Token');
  const [doneStake, setDoneStake] = useState(false);
  const [name, setName] = useState('');
  const [symBol, setSymBol] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  const [description, setDescription] = useState('');
  const [totalStake, setTotalStake] = useState(0);
  const [loadingEvent, setLoadingEvent] = useState(false);

  const web3 = useSelector(web3Selector.selectWeb3);
  const handleClickCreateToken = async () => {
    try {
      // console.log(moment(productDate).format('L'));
      // console.log(type, category, productName, productCode, productDate, productDesc);
      if (web3 === null) {
        alert('Chưa khởi tạo đối tượng Web3, Vui lòng liên kết ví với Website');
        return;
      }
      if (!name || !symBol || !totalSupply) {
        alert('Vui lòng kiểm tra lại thông tin');
        return;
      }

      setLoadingEvent(true);
      const accounts = await web3.eth.getAccounts();
      let contract = new web3.eth.Contract(
          contractValue.ABIContractBuilder,
          contractValue.addressContractBuilder,
      );
      await contract.methods.createToken(name, symBol, totalSupply).send({from: accounts[0]});
      setLoadingEvent(false);
    } catch (error) {
      alert('Truy cập có lỗi, Vui lòng thử lại sau. Hãy đọc qua phần hướng dẫn sử dụng !!!');
      console.log(error);
      setLoadingEvent(false);
    }
  };

  const handleStake = async () => {
    // TODO: Remove this when API runs
    setDoneStake(true);
    try {
      // console.log(moment(productDate).format('L'));
      // console.log(type, category, productName, productCode, productDate, productDesc);
      if (web3 === null) {
        alert('Chưa khởi tạo đối tượng Web3, Vui lòng liên kết ví với Website');
        return;
      }
      if (!totalStake) {
        alert('Vui lòng kiểm tra lại thông tin');
        return;
      }
      setLoadingEvent(true);
      const accounts = await web3.eth.getAccounts();
      const tokenContract = new web3.eth.Contract(
          contractValue.ABIToken,
          contractValue.addressToken,
      );
      tokenContract.methods
          .approve(contractValue.addressContractBuilder, web3.utils.toWei(totalStake, 'Ether'))
          .send({from: accounts[0]})
          .on('transactionHash', async (hash) => {
            let contractBuilder = new web3.eth.Contract(
                contractValue.ABIContractBuilder,
                contractValue.addressContractBuilder,
            );
            contractBuilder.methods.staking(totalStake).send({from: accounts[0]});
          });
      setLoadingEvent(false);
    } catch (error) {
      alert('Truy cập có lỗi, Vui lòng thử lại sau. Hãy đọc qua phần hướng dẫn sử dụng !!!');
      console.log(error);
      setLoadingEvent(false);
    }
  };
  return (
    <div>
      <Header />
      <div className="container">
        <h1 className="mt-30">Create My Token</h1>
        <div className="my-3 stepper">
          <Stepper
            steps={[{title: 'Stake CEUS'}, {title: 'Define Your Token'}]}
            activeStep={doneStake ? 1 : 0}
            circleTop={0}
          />
        </div>
        <div className="box in__upload mb-50">
          {doneStake ? (
            <div className="row">
              <h2 className="mb-30">Step 2. Define Your Token</h2>
              <div className="col-lg-6">
                <div className="left__part space-y-40 md:mb-20 upload_file">
                  <div className="space-y-20">
                    <img className="icon" src={`img/icons/upload.svg`} alt="upload" />
                    <h5>Drag and drop your file</h5>
                    <p className="color_text">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                  </div>
                  <div className="space-y-20">
                    <p className="color_text">or choose a file</p>
                    <Link to="#" className="btn btn-white">
                      Browse files
                    </Link>
                    <input type="file" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group space-y-10">
                  <div className="space-y-20">
                    <div className="space-y-10">
                      <span className="nameInput">Name</span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e. g. `raroin design art`"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="space-y-10">
                      <span className="nameInput">
                        Symbol
                        {/* <span className="color_text">(optional) </span> */}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e. g. `raroin design art`"
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
              <h2 className="mb-50">Step 1. Stake CEUS</h2>
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
            </div>
          )}
        </div>
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
