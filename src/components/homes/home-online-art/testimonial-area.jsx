import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// testimonial data 
const testimonial_data = [
  {
    id:1,
    logo:'/assets/images/testimonial/logo-01.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem.',
    user:'/assets/images/testimonial/testimonial-01.png',
    name:'Ray Sanchez',
    designation:'Student'
  },
  {
    id:2,
    logo:'/assets/images/testimonial/logo-02.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem.',
    user:'/assets/images/testimonial/testimonial-02.png',
    name:'Thomas Lopez',
    designation:'Designer'
  },
  {
    id:3,
    logo:'/assets/images/testimonial/logo-03.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem.',
    user:'/assets/images/testimonial/testimonial-03.png',
    name:'Amber Page',
    designation:'Developer'
  },
  {
    id:4,
    logo:'/assets/images/testimonial/logo-02.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem.',
    user:'/assets/images/testimonial/testimonial-04.png',
    name:'Thomas Lopez',
    designation:'Designer'
  },
]

// slider setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  speed: 1000,
  autoplay: {
      delay: 3000
  },
  breakpoints: {
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
  },
  navigation: {
      nextEl: ".swiper-btn-nxt",
      prevEl: ".swiper-btn-prv",
  }
}

const TestimonialArea = () => {
  return (
    <div className="testimonial-area-14 section-gap-equal">
    <div className="container edublink-animated-shape">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title color-secondary">Testimonials</span>
                    <h2 className="title">What Our Students <br/> Have To Say</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
            </div>
        </div>
        <Swiper {...slider_setting} modules={[Navigation,Autoplay]} className="online-art-testimonial-activation swiper">
            <div className="swiper-wrapper">
              {testimonial_data.map((item,i) => (
                <SwiperSlide key={i} className="swiper-slide">
                    <div className="testimonial-slide testimonial-style-2">
                        <div className="content">
                            <div className="logo">
                              <img src={item.logo} alt="Logo"/>
                            </div>
                            <p>{item.desc}</p>
                            <div className="author-info">
                                <div className="thumb">
                                    <img src={item.user} alt="Testimonial"/>
                                </div>
                                <div className="info">
                                    <h5 className="title">{item.name}</h5>
                                    <span className="subtitle">{item.designation}</span>
                                </div>
                                <div className="rating-icon">
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
              ))}
            </div>
        </Swiper>
        <div className="swiper-navigation">
            <div className="swiper-btn-prv cursor-pointer">
                <img src="/assets/images/svg-icons/icon-left.svg" alt="images left"/>
            </div>
            <div className="swiper-btn-nxt cursor-pointer">
                <img src="/assets/images/svg-icons/icon-right.svg" alt="images right"/>
            </div>
        </div>
        <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                <img data-depth="1" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                <img data-depth="-1" src="/assets/images/cta/shape-45.png" alt="Shape"/>
            </li>
            <li className="shape-3" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
                <span></span>
            </li>
        </ul>
    </div>
</div>
  );
};

export default TestimonialArea;