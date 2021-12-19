import React from 'react';

function HeroQuestions() {
  return (
    <div>
      <div className="hero_questions bg_white">
        <div className="container">
          <div className="space-y-20">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <p className="text-center">
              Need helps? Contact us directly through channels
            </p>
            <p className="d-flex justify-content-center align-items-center gap-4" style={{fontSize: '40px'}}>
              <i className="ri-facebook-circle-fill"></i>
              <i className="ri-telegram-fill"></i>
              <i className="ri-twitter-fill"></i>
              <i className="ri-discord-fill"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroQuestions;
