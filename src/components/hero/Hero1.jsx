import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import {gsap} from 'gsap';
import Images from '../../assets/Image';

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
    <div rel={boxRef} className="hero__1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero__left space-y-20">
              <h1 className="hero__title">
                Your Community <span className="d-inline-block">Your Partners</span>
              </h1>
              <p className="hero__text txt">
                <strong className="color_brand">Connecus</strong> is a platform to help you promote, evolve your own community easier like never before.
              </p>
              <div
                className="d-flex align-items-center space-x-20">
                <Link className="btn btn-dark" to="token">
                  Create Token
                </Link>
                <Link className="btn btn-primary" to="community">
                  Own Community Token
                </Link>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <img
              className="img-fluid w-full p-5"
              src={Images.community1}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
