import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper,SwiperSlide } from 'swiper/react';

// testimonial data 
const testimonial_data = [
  {
    id:1,
    desc:'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user:'/assets/images/testimonial/testimonial-13.jpg',
    name:'Sara Lopez',
    designation:'Content Creator'
  },
  {
    id:2,
    desc:'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user:'/assets/images/testimonial/testimonial-14.jpg',
    name:'Robert Tapp',
    designation:'Designer'
  },
  {
    id:3,
    desc:'Lorem ipsum dolor amet consectur elit adicing idunt enim minim veniam quis nosrud citation comodo perspiatix omnis.',
    user:'/assets/images/testimonial/testimonial-15.jpg',
    name:'Amber Page',
    designation:'Developer'
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  centeredSlides: true,
  loop: false,
  loopedSlides: 3,
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
    <div className="testimonial-area-12 gap-top-equal">
    <div className="container edublink-animated-shape">
        <div className="row g-5">
            <div className="col-lg-6" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800">
                <div className="testimonial-heading-area">
                    <div className="section-title section-left">
                        <span className="pre-title">Testimonials</span>
                        <h2 className="title">What Our Students <br/> Have To Say</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>
                    <Swiper {...slider_setting} modules={[Navigation,Autoplay]} className="home-motivation-testimonial-activator swiper">
                      {testimonial_data.map((item) => (
                          <SwiperSlide key={item.id}>
                              <div className="testimonial-grid">
                                  <div className="content">
                                      <p>{item.desc}</p>
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
                              </div>
                          </SwiperSlide>
                      ))}
                        <div className="swiper-navigation">
                            <div className="swiper-slide-controls swiper-btn-prv">
                                <img src="/assets/images/svg-icons/icon-left.svg" alt="images left"/>
                            </div>
                            <div className="swiper-slide-controls swiper-btn-nxt">
                                <img src="/assets/images/svg-icons/icon-right.svg" alt="images right"/>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
            <div className="col-lg-6 edublink-animated-shape" data-sal-delay="150" data-sal="slide-left" data-sal-duration="800">
                <div className="bg-thumbnail">
                    <img className="motivation-bg-thumbnail" src="/assets/images/testimonial/testimonial-bg.webp" alt="images"/>
                </div>
                <ul className="shape-group">
                    <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="1.5" src="/assets/images/about/shape-13.png" alt="Shape"/>
                    </li>
                    <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="-1.5" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                    </li>
                    <li className="shape-5" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img className="d-block-shape-light" data-depth="2" src="/assets/images/others/shape-50.png" alt="Shape"/>
                        <img className="d-none-shape-dark" data-depth="2" src="/assets/images/others/shape-51.png" alt="Shape"/>
                    </li>
                </ul>
            </div>
        </div>
        <ul className="shape-group">
            <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <span></span>
            </li>
            <li className="shape-6" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img src="/assets/images/others/shape-49.png" alt="Shape"/>
            </li>
        </ul>
    </div>
</div>
  );
};

export default TestimonialArea;