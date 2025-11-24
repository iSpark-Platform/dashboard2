'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, EffectFade, Navigation } from "swiper/modules";

const slider_content_data = [
  {
    pre_title: 'Welcome to edublink',
    title: <>Reclaim Your Body, <br /> Your Confidence & <br /> Your Life.</>,
    desc: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.'
  },
  {
    pre_title: 'Welcome to edublink',
    title: <>Working With, <br /> Expart & chaged <br /> Your Life</>,
    desc: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.'
  },
  {
    pre_title: 'Welcome to edublink',
    title: <>We Can Help <br /> Your Reignite That <br /> Speak</>,
    desc: 'Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.'
  },
]

const slider_images = [
  {
    img: '/assets/images/bg/bg-image-29.webp',
  },
  {
    img: '/assets/images/bg/bg-image-30.webp',
  },
  {
    img: '/assets/images/bg/bg-image-31.webp',
  },
]

const HeroBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="hero-banner hero-style-9">
        <div className="slider">
          <div className="container">
            <Swiper 
              spaceBetween={0}
              speed={1000}
              autoplay={{
                delay: 5000
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              navigation={{
                nextEl: ".slide-next",
                prevEl: ".slide-prev",
              }} 
              className="swiper health-slider-content">
              {slider_content_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="inner">
                    <span className="pre-title color-primary">Welcome to edublink</span>
                    <h1 className="title">{item.title}</h1>
                    <p>Excepteur sint occaecat cupidatat non proident sunt <br /> in culpa qui officia deserunt mollit.</p>
                    <div className="banner-btn">
                      <a href="#" className="edu-btn">Find courses <i className="icon-4"></i></a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-content --> */}
            <Swiper 
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={1}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]} 
              className="swiper health-slider-main">
              {slider_images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="slide-image" style={{ backgroundImage: `url(${item.img})` }}>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <!-- end slider-main --> */}
            <ul className="shape-group">
              <li className="shape-1">
                <span></span>
              </li>
              <li className="shape-2">
                <img className="rotateit" src="assets/images/about/shape-25.png" alt="Shape" />
              </li>
            </ul>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <img data-depth="2" src="assets/images/others/health-shape-33.png" alt="Shape" />
          </li>
          <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <img data-depth="2" src="assets/images/others/health-shape-34.png" alt="Shape" />
          </li>
          <li className="shape-5">
            <img src="assets/images/counterup/shape-02.png" alt="image" />
          </li>
          <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <img data-depth="-2" src="assets/images/about/shape-13.png" alt="" />
          </li>
        </ul>
        <div className="hero-slider-bg-controls">
          <div className="swiper-slide-controls slide-prev">
            <i className="icon-west"></i>
          </div>
          <div className="swiper-slide-controls slide-next">
            <i className="icon-east"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;