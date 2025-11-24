'use client'
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

// testimonial data 
const testimonial_data = [
  {
    id:1,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem. accusantium doloreq laudantum',
    name:'Haley Bennet',
    designation:'Designer',
  },
  {
    id:2,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem. accusantium doloreq laudantum',
    name:'Thomas Han',
    designation:'Student',
  },
  {
    id:3,
    desc:'Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris nisiste aliquip comodo perspiatix unde omnis iste natus error sit voluptatem. accusantium doloreq laudantum',
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

  return (
    <div className="testimonial-area-17 section-gap-equal digital-marketing-testimonial edublink-animated-shape">
    <div className="container edublink-animated-shape">
        <div className="testimonial-heading-area">
            <div className="section-title section-center" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Testimonials</span>
                <h2 className="title">What Our Students Have To Say</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
        </div>

        <Slider {...slider_a} asNavFor={slider2} ref={(slider) => {setSlider1(slider); sliderRef.current = slider}} className="digital-marketing-activator swiper">
          {testimonial_data.map((item) => (
              <div key={item.id} className="swiper-slide">
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


        <Slider {...slider_b}  swipeToSlide={true} focusOnSelect={true} asNavFor={slider1} ref={(slider) => setSlider2(slider)} className="swiper digital-marketing-testimonial-thumbs photo-testimonial-thumb-wrap">
          {client_thumbs.map((img,i) => (
                <div key={i} className="nav-thumb">
                    <div className="clint-thumb">
                        <img src={img} alt="Testimonial"/>
                    </div>
                </div>
          ))}
        </Slider>


        <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="2" src="/assets/images/others/shape-68.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                <img data-depth="-2" src="/assets/images/others/shape-67.png" alt="Shape"/>
            </li>
            <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="2" src="/assets/images/others/shape-68.png" alt="Shape"/>
            </li>
            <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="-2" src="/assets/images/others/shape-69.png" alt="Shape"/>
            </li>
        </ul>
    </div>
   </div>
  );
};

export default TestimonialArea;