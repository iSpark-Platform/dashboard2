'use client'
import Link from 'next/link';
import React from 'react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react';

// slider data 
const slider_data = [
  {
    id:1,
    bg_img:'/assets/images/bg/bg-image-39.webp',
    title:<>Best Photography <br/> Coaching</>,
    subtitle:<>Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</>
  },
  {
    id:2,
    bg_img:'/assets/images/bg/bg-image-41.webp',
    title:<>Develop Your Photography <br/> Skills in Online</>,
    subtitle:<>Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</>
  },
  {
    id:3,
    bg_img:'/assets/images/bg/bg-image-42.webp',
    title:<>Online Photography School <br/> For Creative People</>,
    subtitle:<>Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</>
  },
]

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: false,
  grabCursor: true,
  draggable: true,
  effect: "fade",
  speed: 1000,
  autoplay: {
      delay: 8000
  },
  navigation: {
      nextEl: ".slide-next",
      prevEl: ".slide-prev",
  },
  lazy: {      
      loadPrevNext: true,
      loadPrevNextAmount: 1,
  },
  pagination: {
      el: ".swiper-pagination",
      type: "fraction",
  }
}

const HeroArea = () => {
  return (
    <Swiper {...slider_setting} modules={[Navigation,Pagination,EffectFade]} className="swiper photography-activator">
        {slider_data.map((item) => (
            <SwiperSlide key={item.id}>
                <img data-transform-origin='center center' src={item.bg_img} alt="image"/>
                <div className="thumbnail-bg-content">
                    <div className="container edublink-animated-shape">
                        <div className="row">
                            <div className="col-7">
                                <div className="banner-content">
                                    <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Best Photography <br/> Coaching</h1>
                                    <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</p>
                                    <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                        <Link href="/course-style-1" className="edu-btn">Find courses <i className="icon-4"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}

  
        <div className="swiper-slide-controls slide-prev">
            <i className="icon-west"></i>
        </div>
        <div className="swiper-slide-controls slide-next">
            <i className="icon-east"></i>
        </div>

        <div className="pagination-box-wrapper">
            <div className="pagination-box-wrap">
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </Swiper>
  );
};

export default HeroArea;