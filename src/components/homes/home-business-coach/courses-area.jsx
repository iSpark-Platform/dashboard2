'use client'
import React from 'react';
import { course_data } from '@/data';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// course items 
const course_items = course_data.filter(course => course.business_coach);

// slider setting 
const slider_setting = {
  slidesPerView: 1,
  watchOverflow:true,
  autoplay:false,
  speed:1000,
  breakpoints: {
      1600: {
          slidesPerView: 4,
      },
      992: {
      slidesPerView: 3,
      },
      768: {
          slidesPerView: 2,
      },
  },
  navigation: {
      nextEl: ".swiper-btn-nxt",
      prevEl: ".swiper-btn-prv",
  }
}

// single course 
function SingleCourse({item}) {
  return (
    <div className="edu-course course-style-15">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/course-details/${item.id}`}>
                  <img src={`/assets/images/course/course-07/${item.img}`} alt="Course Meta"/>
              </Link>
          </div>
          <div className="course-price">₹{item.course_price}</div>
          <ul className="course-meta">
              <li><i className="icon-24 icon-course"></i>{item.lesson} Lessons</li>
              <li><i className="icon-25 icon-course"></i>{item.student} Students</li>
          </ul>
          <div className="content">
              <h6 className="title">
                  <Link href={`/course-details/${item.id}`}>{item.title}</Link>
              </h6>
          </div>
      </div>
  </div>
  )
}

const CoursesArea = () => {
  return (
      <div className="business-course edu-course-area course-area-12 gap-tb-text bg-image">
          <div className="container edublink-animated-shape">
              <ul>
                  <li>
                      <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                          <span className="pre-title">Popular Courses</span>
                          <h2 className="title">Pick A Course To Get Started</h2>
                          <span className="shape-line"><i className="icon-19"></i></span>
                      </div>
                  </li>
                  <li>
                      <div className="slider-nav-wrapper" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                          <div className="swiper-navigation">
                              <div className="swiper-btn-nxt cursor-pointer">
                                  <i className="icon-west"></i>
                              </div>
                              <div className="swiper-btn-prv cursor-pointer">
                                  <i className="icon-east"></i>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
              <Swiper {...slider_setting} modules={[Navigation]} className="swiper business-course-activation">
                {course_items.map((item) => (
                  <SwiperSlide key={item.id}>
                      <SingleCourse item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
          <ul className="shape-group">
              <li className="shape-1">
                  <img src="/assets/images/bg/bg-image-43.webp" alt="Shape"/>
              </li>
          </ul>
      </div>
  );
};

export default CoursesArea;