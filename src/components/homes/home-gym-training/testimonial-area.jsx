'use client'
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// testimonial data 
const testimonial_data = [
  {
    id: 1,
    desc: 'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user: '/assets/images/testimonial/testimonial-13.jpg',
    name: 'Sara Lopez',
    designation: 'Content Creator'
  },
  {
    id: 2,
    desc: 'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user: '/assets/images/testimonial/testimonial-14.jpg',
    name: 'Robert Tapp',
    designation: 'Designer'
  },
  {
    id: 3,
    desc: 'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user: '/assets/images/testimonial/testimonial-15.jpg',
    name: 'Amber Page',
    designation: 'Developer'
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: false,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-btn-nxt",
    prevEl: ".swiper-btn-prv",
  },
  speed: 1500,
  autoplay: {
    delay: 3500
  }
}

const TestimonialArea = () => {
  return (
    <div className="testimonial-area-19">
      <div className="container edublink-animated-shape">
        <div className="row g-lg-5">
          <div className="col-lg-5 edu-order-md-2">
            <div className="testimonial-bg-area">
              <img src="/assets/images/bg/bg-image-55.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-7 edu-order-md-1">
            <Swiper {...slider_setting} modules={[Navigation, Autoplay]} className="gym-testimonial-activator swiper ">
              {testimonial_data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="testimonial-slide testimonial-style-2">
                    <div className="content">
                      <span className="pre-title color-secondary">Testimonials</span>
                      <h3 className="title">What Our Students Say</h3>
                      <span className="shape-line"><i className="icon-19"></i></span>
                      <p>{item.desc}</p>
                      <div className="author-info">
                        <div className="thumb">
                          <img src={item.user} alt="Testimonial" />
                        </div>
                        <div className="info">
                          <h5 className="title">{item.name}</h5>
                          <span className="subtitle">{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="swiper-navigation">
                <div className="swiper-btn-nxt cursor-pointer">
                  <i className="icon-west"></i>
                </div>
                <div className="swiper-btn-prv cursor-pointer" >
                  <i className="icon-east"></i>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img data-depth="1.5" src="/assets/images/others/shape-77.png" alt="Shape" />
          </li>
          <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img data-depth="-1.5" src="/assets/images/others/shape-78.png" alt="Shape" />
          </li>
          <li className="shape-3" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <span></span>
          </li>
          <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img data-depth="1.5" src="/assets/images/others/shape-77.png" alt="Shape" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialArea;