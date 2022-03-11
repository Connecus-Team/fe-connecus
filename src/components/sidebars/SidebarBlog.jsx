import React from 'react';
import {Link} from 'react-router-dom';
const SidebarBlog = () => {
  return (
    <div>
      <aside className="blog_sidebar">
        <div className="widget">
          <h3 className="widget-title text-dark">Let’s connect </h3>
          <div className="widget-wrap">
            <div className="social-widget">
              <Link to="#">
                <div className="social_link facebook">
                  <i className="ri-facebook-box-line" />
                </div>
              </Link>
              <Link to="#">
                <div className="social_link dribbble">
                  <i className="ri-dribbble-line" />
                </div>
              </Link>
              <Link to="#">
                <div className="social_link youtube">
                  <i className="ri-youtube-line" />
                </div>
              </Link>
              <Link to="#">
                <div className="social_link twitter">
                  <i className="ri-twitter-line" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ============== widget */}
        <div className="widget">
          <h3 className="widget-title">Stay updated</h3>
          <small className="mb-20">
            Don’t miss our newest business blog posts. Sign up for the newsletter!
          </small>
          <div className="widget-wrap">
            <input
              type="email"
              className="form-control mt-10 mb-20"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            <Link to="#" className="btn w-100 btn-secondary sweep_letter sweep_top">
              <div className="inside_item">
                <span data-hover="Join with us!"> Join with us! </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="widget">
          <h3 className="widget-title text-dark">Leave a reply</h3>
          <div className="widget-wrap">
            <form>
              <div className="form-row">
                <div className="col-sm">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="reply-name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="col-sm">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="reply-email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="reply-message"
                  rows={8}
                  className="form-control"
                  placeholder="Your Reply"
                  defaultValue={''}
                />
              </div>
              <div className="d-flex justify-content-end">
                <Link to="#" className="btn btn-primary sweep_letter sweep_top">
                  <div className="inside_item">
                    <span data-hover="Reply"> Reply </span>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
        {/* ============== widget */}
        {/* <div className="widget">
          <h3 className="widget-title">Categories</h3>
          <div className="widget-wrap">
            <ul>
              <li className="cat-item">
               About us
              </li>
              <li className="cat-item">
               Business
              </li>
              <li className="cat-item">
               General
              </li>
              <li className="cat-item">
               Knowledge Base
              </li>
            </ul>
          </div>
        </div> */}
        {/* ============== widget */}
        {/* <div className="widget">
          <h3 className="widget-title">Tags</h3>
          <div className="widget-wrap">
            <div className="tag_cloud">
              <Link rel="nofollow" to="#">
                NFT
              </Link>
              <Link rel="nofollow" to="#">
                Raroin
              </Link>
              <Link rel="nofollow" to="#">
                btc
              </Link>
              <Link rel="nofollow" to="#">
                crypto
              </Link>
              <Link rel="nofollow" to="#">
                bankrupt
              </Link>
              <Link rel="nofollow" to="#">
                advantages
              </Link>
              <Link rel="nofollow" to="#">
                mint
              </Link>
              <Link rel="nofollow" to="#">
                creabik
              </Link>
              <Link rel="nofollow" to="#">
                design
              </Link>
              <Link rel="nofollow" to="#">
                design
              </Link>
              <Link rel="nofollow" to="#">
                envato
              </Link>
              <Link rel="nofollow" to="#">
                analytics
              </Link>
              <Link rel="nofollow" to="#">
                ceo
              </Link>
              <Link rel="nofollow" to="#">
                great
              </Link>
              <Link rel="nofollow" to="#">
                post
              </Link>
              <Link rel="nofollow" to="#">
                vlogs
              </Link>
              <Link rel="nofollow" to="#">
                daily work
              </Link>
            </div>
          </div>
        </div> */}
      </aside>
    </div>
  );
};

export default SidebarBlog;
