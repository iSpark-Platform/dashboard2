'use client'
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';

// testimonial data
const testimonial_data = [
  {
    id:1,
    user:'/assets/images/testimonial/testimonial-09.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem accusantium quis nosrud.',
    name:'Ray Sanchez',
    designation:'Student'
  },
  {
    id:2,
    user:'/assets/images/testimonial/testimonial-10.png',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem accusantium quis nosrud.',
    name:'Thomas Lopez',
    designation:'Designer'
  },
  {
    id:3,
    user:'/assets/images/testimonial/testimonial-11.jpg',
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem accusantium quis nosrud.',
    name:'Amber Page',
    designation:'Developer'
  },
]

const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  grabCursor: true,
  speed: 1000,
  autoplay: {
      delay: 3000
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
  }
}

const Testimonial = () => {
  return (
    <div className="testimonial-area-11 gap-top-equal">
    <div className="container edublink-animated-shape">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title">Testimonials</span>
                    <h2 className="title">What Our Students <br/> Have To Say</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
            </div>
        </div>
        <Swiper {...slider_setting} modules={[Pagination,Autoplay]} className="home-remote-testimonial-activator swiper">
          {testimonial_data.map((item,i) => (
                <SwiperSlide key={i}>
                    <div className="testimonial-slide">
                        <div className="content">
                            <div className="author-info">
                                <div className="thumb">
                                    <img src={item.user} alt='thumb'/>
                                </div>
                            </div>
                            <p>{item.desc}</p>
                            <div className="info">
                                <h5 className="title">{item.name}</h5>
                                <span className="subtitle">{item.designation}</span>
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
        </Swiper>
        <div className="swiper-pagination"></div>
        <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="-1.5" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <span data-depth="2.5"></span>
            </li>
            <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <span data-depth=".8"></span>
            </li>
            <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img className="rotateit" src="/assets/images/about/shape-37.png" alt="Shape"/>
            </li>
            <li className="shape-5">
                <img src="/assets/images/others/shape-44.png" alt="Shape"/>
            </li>
        </ul>
    </div>
</div>
  );
};

export default Testimonial;