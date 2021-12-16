import React from 'react'
import { Link } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker.css'
import data from './data'

function FundingPostList() {
  return (
    <div className="space-y-20 post-item">
      {data.fundingCard.map(item => (
        // <div className="box is__big space-y-20" key={item.id}>
        //   <div
        //     className="d-flex justify-content-between
        //               align-items-center">
        //     <div
        //       className="d-flex align-items-center
        //                   space-x-15">
        //       <div className="avatars space-x-10">
        //         <div className="media has_border">
        //           <Link to="profile">
        //             <img
        //               src={`img/avatars/avatar_3.png`}
        //               alt="Avatar"
        //               className="avatar avatar-forum"
        //             />
        //           </Link>
        //         </div>
        //         <div className="text-center">
        //           <Link to="profile">
        //             <p
        //               className="avatars_name
        //                                   color_brand">
        //               @{item.id}
        //             </p>
        //           </Link>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        //   <div className="d-flex">
        //     <div className="space-y-20">
        //       <Link to="post-details">
        //         <h3>{item.title}</h3>
        //       </Link>
        //       <p>{item.description}</p>
        //       <figure className="media-wrapper">
        //         <img src={item.img} />
        //       </figure>
        //       <div>
        //         <strong>Total Funding</strong>: {item.totalFunding}
        //       </div>
        //       <div>
        //         <strong>Date</strong>: {item.date}{' '}
        //       </div>
        //       <div>
        //         <input
        //           type="number"
        //           className="form-control"
        //           name="funding-number"
        //           placeholder="Total funding $"
        //         />
        //         <button className="btn btn-dark btn-sm mt-10">Funding</button>
        //       </div>
        //       <div className="tags">
        //         <span>#NFT Marketplace</span>
        //         <span>#crypto Artists</span>
        //         <span>#NFT Artists</span>
        //       </div>
        //       <div className="hr" />
        //       {/* <div
        //       className="d-flex
        //                       justify-content-between flex-wrap">
        //       <div className="reaction">
        //         <Link
        //           to="#"
        //           className="likes
        //                               space-x-3">
        //           <i className="ri-heart-3-fill" />
        //           <span className="txt_sm">2.1k</span>
        //         </Link>
        //         <Link to="post-details" className="comments space-x-3">
        //           <i className="ri-chat-1-line" />
        //           <span className="txt_sm">257 Comments</span>
        //         </Link>
        //         <span className="views space-x-3">
        //           <i className="ri-eye-line" />
        //           <span>257 Views</span>
        //         </span>
        //         <span className="time space-x-3">
        //           <i className="ri-time-line" />
        //           <span>2 days ago</span>
        //         </span>
        //       </div>
        //       <div className="answer">
        //         <Link
        //           to="post-details"
        //           className="btn btn-dark
        //                               btn-sm">
        //           Answer
        //         </Link>
        //       </div>
        //     </div> */}
        //     </div>
        //   </div>
        // </div>
        <div className="card__item one" style={{ maxWidth: '100%' }}>
          <div className="card_body space-y-10">
            <div className="card_head">
              <img src={item.img} alt="" />
              <div className="details d-flex justify-content-between">
                <div className="bid space-x-10">
                  <div className="icon">
                    <img src="img/icons/ETH.svg" alt="..." />
                  </div>
                  <div>
                    <p className="color_text txt_xs">CURRENT FUNDING</p>
                    <span className="txt_sm">4.77 ETH</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '80%' }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="auction_end">
                  <p className="color_text txt_xs">AUCTION END</p>
                  <span className="counter txt_sm">56 : 34 : 00</span>
                </div>
              </div>
            </div>
            <h6 className="card_title">Colorful Abstract Painting</h6>
            <div className="hr"></div>
            <div
              className="card_footer justify-content-between flex-column
																flex-md-row">
              <div className="creators space-x-10">
                <div className="avatars space-x-3">
                  <div className="-space-x-20">
                    <a href="Profile.html">
                      <img
                        src="assets/img/avatars/avatar_3.png"
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </a>
                    <a href="Profile.html">
                      <img
                        src="assets/img/avatars/avatar_2.png"
                        alt="Avatar"
                        className="avatar avatar-sm"
                      />
                    </a>
                  </div>
                  <a href="Profile.html">
                    <p className="avatars_name txt_sm">@makinzi_jamy...</p>
                  </a>
                </div>
              </div>
              <a href="#" className="likes space-x-3">
                <i className="ri-heart-3-fill"></i>
                <span className="txt_sm">2.1k</span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FundingPostList
