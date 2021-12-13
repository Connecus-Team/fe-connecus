import React from 'react';
import {Link} from 'react-router-dom';

const Hero1 = () => {
  return (
    <div className="hero__1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero__left space-y-20">
              <h1 className="hero__title">
                Discover digital art and collect NFTs
              </h1>
              <p className="hero__text txt">
                raroin is a shared liquidity NFT market smart contract which is
                used by multiple websites to provide the users the best possible
                experience.
              </p>
              <div
                className="space-x-20 d-flex flex-column flex-md-row
							sm:space-y-20">
                <Link className="btn btn-primary" to="marketplace">
                  View Community
                </Link>
                <Link className="btn btn-white" to="upload-type">
                  Create Token
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid w-full"
              id="img_js"
              src="img/logos/logo.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
