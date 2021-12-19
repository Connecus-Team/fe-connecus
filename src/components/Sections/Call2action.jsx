import React from 'react';
import {Link} from 'react-router-dom';
import Images from '../../assets/Image';
function Call2action() {
  return (
    <div>
      <div className="call2action">
        <div className="container">
          <div
            className="row justify-content-between align-items-center
                        sm:space-y-20">
            <div className="col-md-6">
              <div className="space-y-20">
                <h1 className="text-white">Turn your fans <span className="d-inline-block">into your partners now</span></h1>
                <p className="color_light section__text">
                  Let’s create your own strong community now
                </p>
                <Link
                  to="token"
                  className="btn btn-primary">
                  Let’s start
                  <i className="ri-arrow-right-s-line"></i>
                </Link>
              </div>
            </div>
            <div className="d-none d-md-block col-md-6">
              <img
                className="img-fluid img__logo"
                alt="rr"
                src={Images.community}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call2action;
