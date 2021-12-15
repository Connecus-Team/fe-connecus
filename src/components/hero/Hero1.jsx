import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';

const Hero1 = () => {
  const boxRef = useRef();
  useEffect(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.7,
    });
  });

  return (
    <div rel={boxRef} className="hero__1 box">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero__left space-y-20">
              <h1 className="hero__title">
                Your Community <span className="d-inline-block">Your Partners</span>
              </h1>
              <p className="hero__text txt">
                raroin is a shared liquidity NFT market smart contract which is
                used by multiple websites to provide the users the best possible
                experience.
              </p>
              <div
                className="space-x-20 d-flex flex-column flex-md-row sm:space-y-20">
                <Link className="btn btn-primary" to="marketplace">
                  Reach out your idol
                </Link>
                <Link className="btn btn-dark" to="upload-type">
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid w-full p-5"
              id="img_js"
              src="img/bg/home1/community1.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
