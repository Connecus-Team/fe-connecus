import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Link} from 'react-router-dom';
import apis from '../../apis/apis';

export default function TopArtist() {
  const [tokenList, setTokenList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apis.getAllToken();
      const {data} = response;
      setTokenList(data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 700,
    slidesToShow: tokenList.length,
    slidesToScroll: 1,
    autoplay: false,
    margin: 20,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: tokenList.length,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: tokenList.length - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: tokenList.length - 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: tokenList.length - 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section__artists mt-30">
      <div className="container">
        <div className="space-y-30">
          <div className="section_head">
            <h2 className="section__title mt-10">Top Influencers</h2>
          </div>
          <div className="section_body swiper_artists">
            <Slider {...settings}>
              {tokenList.length !== 0 &&
                tokenList.map((val, i) => (
                  <div className="item" key={i}>
                    <div className="creator_item creator_card rounded_border space-x-10">
                      <div className="avatars space-x-10">
                        <div className="media">
                          {/* <div className="badge">
                          <img src={val.link} alt="icons" />
                        </div> */}
                          <Link to={`/token-view?address=${val.token_address}`}>
                            <img
                              src={`${process.env.REACT_APP_SERVER_API}api/files/${val.link}`}
                              alt="Avatar"
                              className="avatar avatar-md"
                            />
                          </Link>
                        </div>
                        <div>
                          <Link to={`/token-view?address=${val.token_address}`}>
                            <p className="avatars_name color_black">@{val.token_name}...</p>
                          </Link>
                          <span className="price color_green">1 CEUS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
