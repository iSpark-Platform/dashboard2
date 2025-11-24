'use client'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

// testimonial data 
const testimonial_data = [
  {
    id:1,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste.',
    name:'Haley Bennet',
    designation:'Designer',
  },
  {
    id:2,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste.',
    name:'Thomas Han',
    designation:'Student',
  },
  {
    id:3,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste.',
    name:'Amber Page',
    designation:'Developer',
  },
]

const client_thumbs = [
  '/assets/images/testimonial/testimonial-11.jpg',
  '/assets/images/testimonial/testimonial-09.png',
  '/assets/images/testimonial/testimonial-10.png',
  '/assets/images/testimonial/testimonial-12.jpg'
]

// slider a
const slider_a = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 300000,
};
// slider b
const slider_b = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  centerMode:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 300000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TestimonialArea = () => {
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const sliderRef = useRef(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <div className="testimonial-area-10 gap-top-equal photography-testimonial">
            <div className="container edublink-animated-shape">
                <div className="testimonial-heading-area">
                    <div className="section-title section-center" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <span className="pre-title">Testimonials</span>
                        <h2 className="title">What Our Students Have To Say</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>
                </div>
                <Slider {...slider_a} asNavFor={slider2} ref={(slider) => {setSlider1(slider); sliderRef.current = slider}} className="photography-testimonial-activator swiper">
                  {testimonial_data.map((item) => (
                      <div key={item.id} className="swiper-slide">
                          <div className="testimonial-grid">
                              <div className="content">
                                  <div className="quote-icon">
                                      <img src="/assets/images/svg-icons/quote.svg" alt="quote svg"/>
                                  </div>
                                  <p>Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor idunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste.</p>
                                  <h5 className="title">{item.name}</h5>
                                  <span className="subtitle">{item.designation}</span>
                              </div>
                          </div>
                      </div>
                  ))}
                </Slider>

                <Slider {...slider_b}  swipeToSlide={true} focusOnSelect={true} asNavFor={slider1} ref={(slider) => setSlider2(slider)} className="photography-testimonial-thumbs photo-testimonial-thumb-wrap">
                  {client_thumbs.map((img,i) => (
                        <div key={i} className="nav-thumb">
                            <div className="clint-thumb">
                                <img src={img} alt="Testimonial"/>
                            </div>
                        </div>
                  ))}
                </Slider>
                <div onClick={sliderPrev} className="swiper-slide-controls slide-prev">
                    <i className="icon-west"></i>
                </div>
                <div onClick={sliderNext} className="swiper-slide-controls slide-next">
                    <i className="icon-east"></i>
                </div>

                <ul className="shape-group">
                    <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img data-depth="-1.5" src="assets/images/about/shape-13.png" alt="Shape"/>
                    </li>
                    <li className="shape-2 sal-animate" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                        <img src="assets/images/others/Photo-shape-6.png" alt="Shape"/>
                    </li>
                    <li className="shape-3 sal-animate" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                        <img className="d-block-shape-light" src="assets/images/others/map-shape-3.png" alt="Shape"/>
                        <img className="d-none-shape-dark" src="assets/images/others/dark-map-2-shape-3.png" alt="Shape"/>
                    </li>
                    <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                        <img className="rotateit" src="assets/images/about/shape-37.png" alt="Shape"/>
                    </li>
                    <li className="shape-5">
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
  );
};

export default TestimonialArea;