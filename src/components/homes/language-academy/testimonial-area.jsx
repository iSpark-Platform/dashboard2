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
    <div className="testimonial-area-10 section-gap-equal edublink-animated-shape">
            <div className="container edublink-animated-shape">
                <div className="testimonial-heading-area">
                    <div className="section-title section-center" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <span className="pre-title pre-textsecondary">Testimonials</span>
                        <h2 className="title">What Our Students <br/> Have To Say</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>
                </div>

            <Slider {...slider_a} asNavFor={slider2} ref={(slider) => {setSlider1(slider); sliderRef.current = slider}}
                className="home-language-testimonial-activator swiper">
              {testimonial_data.map((item, i) => (
                <div key={i}>
                    <div className="testimonial-grid">
                        <div className="content">
                            <div className="rating-icon">
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                                <i className="icon-23"></i>
                            </div>
                            <p>{item.desc}</p>
                            <h5 className="title">{item.name}</h5>
                            <span className="subtitle">{item.designation}</span>
                        </div>
                    </div>
                </div>
              ))}
            </Slider>

              <Slider {...slider_b}  swipeToSlide={true} focusOnSelect={true} asNavFor={slider1} ref={(slider) => setSlider2(slider)} className="swiper testimonial-thumbs testimonial-thumb-wrap">
                {client_thumbs.map((img, i) => (
                  <div key={i} className='nav-thumb'>
                      <div className="clint-thumb">
                          <img src={img} alt="Testimonial" loading=""/>
                      </div>
                  </div>
                ))}
              </Slider>


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
                        <span></span>
                    </li>
                </ul>
            </div>
        </div>
  );
};

export default TestimonialArea;