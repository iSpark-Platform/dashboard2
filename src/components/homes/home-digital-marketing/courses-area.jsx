'use client'
import React from 'react';
import { course_data } from '@/data';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';

// course items 
const course_items = course_data.filter(course => course.digital_marketing);

// single course
function SingleCourse({item}) {
  return (
    <div className="edu-course course-style-5 course-style-19">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/course-details/${item.id}`}>
                  <img src={`/assets/images/course/course-07/${item.img}`} alt="Course Meta"/>
              </Link>
          </div>
          <div className="content">
              <div className="course-price">₹{item.course_price}</div>
              <span className="pre-title">{item.category}</span>
              <h6 className="title">
                  <Link href={`/course-details/${item.id}`} dangerouslySetInnerHTML={{__html:item.title}}></Link>
              </h6>
              <p>{item.short_desc}</p>
              <ul className="course-meta">
                  <li><i className="icon-24 icon-course"></i>
                  {item.lesson} Lessons</li>
                  <li><i className="icon-25 icon-course"></i>{item.student} Students</li>
              </ul>
          </div>
      </div>
  </div>
  )
}

// swiper setting
const slider_setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  speed: 1000,
  autoplay: {
      delay: 3000
  },
  breakpoints: {
      600: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
          slidesPerView: 4,
      },
      1400: {
          slidesPerView: 5,
      },
  },
  navigation: {
      nextEl: ".swiper-btn-nxt",
      prevEl: ".swiper-btn-prv",
  }
}

const CoursesArea = () => {
  return (
    <div className="digital-marketing-course edu-course-area gap-top-equal">
            <div className="container">
                <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                    <span className="pre-title color-secondary">Popular Courses</span>
                    <h2 className="title">Pick A Course To Get Started</h2>
                    <span className="shape-line"><i className="icon-19"></i></span>
                </div>
            </div>
            <Swiper {...slider_setting} modules={[Navigation,Autoplay]} className="digital-marketing-course-activation swiper">
              {course_items.map((item,i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                        <SingleCourse item={item} />
                    </SwiperSlide>
              ))}
                <div className="swiper-navigation">
                    <div className="swiper-btn-nxt cursor-pointer">
                        <i className="icon-west"></i>
                    </div>
                    <div className="swiper-btn-prv cursor-pointer">
                        <i className="icon-east"></i>
                    </div>
                </div>
            </Swiper>
        </div>
  );
};

export default CoursesArea;