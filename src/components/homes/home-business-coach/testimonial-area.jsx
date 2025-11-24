'use client'
import React from 'react';
import { Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  speed: 1000,
  autoplay: {
      delay: 3000
  },
  navigation: {
      nextEl: ".swiper-btn-nxt",
      prevEl: ".swiper-btn-prv",
  },
  breakpoints: {
    577: {
      slidesPerView: 2,
    }
  }
}

// testimonial data 
const testimonial_data = [
  {
    id:1,
    logo:'/assets/images/testimonial/logo-01.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
    user:'/assets/images/testimonial/testimonial-01.png',
    name:'Ray Sanchez',
    designation:'Student'
  },
  {
    id:2,
    logo:'/assets/images/testimonial/logo-02.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
    user:'/assets/images/testimonial/testimonial-02.png',
    name:'Thomas Lopez',
    designation:'Designer'
  },
  {
    id:3,
    logo:'/assets/images/testimonial/logo-03.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
    user:'/assets/images/testimonial/testimonial-03.png',
    name:'Amber Page',
    designation:'Developer'
  },
  {
    id:4,
    logo:'/assets/images/testimonial/logo-02.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed do umod tempor ux incididunt enim ad minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix.',
    user:'/assets/images/testimonial/testimonial-04.png',
    name:'Thomas Lopez',
    designation:'Designer'
  },
]

const TestimonialArea = () => {
  return (
    <div className="testimonial-area-4 business-testimonial">
            <div className="container edublink-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Testimonials</span>
                                <h2 className="title">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                            </div>
                        </div>
                        <div className="swiper-navigation">
                            <div className="swiper-btn-nxt cursor-pointer">
                                <i className="icon-west"></i>
                            </div>
                            <div className="swiper-btn-prv cursor-pointer">
                                <i className="icon-east"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <Swiper {...slider_setting} modules={[Navigation]} className="business-testimonial-activation swiper">
                          {testimonial_data.map((item,i) => (
                              <SwiperSlide key={i}>
                                  <div className="testimonial-slide">
                                      <div className="content">
                                          <div className="logo">
                                            <img src={item.logo} alt="Logo"/>
                                            </div>
                                          <p>{item.desc}</p>
                                          <div className="rating-icon">
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                              <i className="icon-23"></i>
                                          </div>
                                      </div>
                                      <div className="author-info">
                                          <div className="thumb">
                                              <img src={item.user} alt="Testimonial"/>
                                          </div>
                                          <div className="info">
                                              <h5 className="title">{item.name}</h5>
                                              <span className="subtitle">{item.designation}</span>
                                          </div>
                                      </div>
                                  </div>
                              </SwiperSlide>
                          ))}
                        </Swiper>
                    </div>
                </div>
                <ul className="shape-group">
                    <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="-1.5" src="/assets/images/others/shape-34.png" alt="Shape"/>
                    </li>
                    <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="1.5" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                    </li>
                </ul>
            </div>
            <ul className="shape-group">
                <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img src="/assets/images/others/shape-48.png" alt="Shape"/>
                </li>
            </ul>
        </div>
  );
};

export default TestimonialArea;