'use client'
import React from 'react';
import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';

// testimonial data 
const testimonial_data = [
  {
    id:1,
    user:'/assets/images/testimonial/testimonial-09.png',
    desc:'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
    name:'Ray Sanchez',
    designation:'Student',
  },
  {
    id:2,
    user:'/assets/images/testimonial/testimonial-10.png',
    desc:'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
    name:'Sara Lopez',
    designation:'Designer',
  },
  {
    id:3,
    user:'/assets/images/testimonial/testimonial-11.jpg',
    desc:'Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.',
    name:'Amber Page',
    designation:'Developer',
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  pagination: false,
  grabCursor: true,
  speed: 1000,
  autoplay: {
      delay: 3000
  },
  navigation: {
      nextEl: ".swiper-btn-nxt",
      prevEl: ".swiper-btn-prv",
  },
}
const TestimonialArea = () => {
  return (
    <>
      <div className="testimonial-area-9 section-gap-equal">
            <div className="container edublink-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-3">
                        <div className="testimonial-heading-area">
                            <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Testimonials</span>
                                <h2 className="title">What Our Students Have To Say</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 bg-thumbnail edublink-animated-shape">
                        <img className="health-bg-thumbnail" src="/assets/images/bg/bg-image-34.webp" alt="images"/>
                        <ul className="shape-group">
                            <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/others/shape-38.png" alt="Shape"/>
                            </li>
                            <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-1.5" src="/assets/images/others/shape-37.png" alt="Shape"/>
                            </li>
                            <li className="shape-5" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                      <Swiper {...slider_setting} modules={[Navigation,Autoplay]} className="home-health-testimonial-activator swiper">
                      {testimonial_data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="testimonial-grid">
                                <div className="thumbnail">
                                    <img src={item.user} alt='testimonial-thumb'/>

                                </div>
                                <div className="content">
                                    <p>{item.desc}</p>
                                    <div className="rating-icon">
                                        <i className="icon-23"></i>
                                        <i className="icon-23"></i>
                                        <i className="icon-23"></i>
                                        <i className="icon-23"></i>
                                        <i className="icon-23"></i>
                                    </div>
                                    <h5 className="title">{item.name}</h5>
                                    <span className="subtitle">{item.designation}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                      ))}
                        <div className="swiper-navigation">
                            <div className="swiper-slide-controls swiper-btn-prv cursor-pointer">
                                <img src="/assets/images/svg-icons/icon-left.svg" alt="images left"/>
                            </div>
                            <div className="swiper-slide-controls swiper-btn-nxt cursor-pointer">
                                <img src="/assets/images/svg-icons/icon-right.svg" alt="images right"/>
                            </div>
                        </div>
                      </Swiper>
                    </div>
                </div>
                <ul className="shape-group">
                    <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="-2" src="/assets/images/others/shape-35.png" alt="Shape"/>
                    </li>
                    <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img src="/assets/images/others/shape-36.png" alt="Shape"/>
                    </li>
                </ul>
            </div>
        </div>
    </>
  );
};

export default TestimonialArea;