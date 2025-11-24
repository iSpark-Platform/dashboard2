import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

const CoursesArea = () => {
  const course_items = course_data.filter(course => course.quran_learning);
  return (
   <div className="edu-course-area course-area-18">
        <div className="container">
            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title color-secondary">Popular Courses</span>
                <h2 className="title">Pick A Course To Get Started</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
              {course_items.map((course,i) => (
                <div key={i} className="col-md-6 col-lg-4">
                <div className="edu-course course-style-3 course-style-21" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                    <div className="inner">
                        <div className="thumbnail">
                            <Link href={`/course-details/${course.id}`}>
                                <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
                            </Link>
                        </div>
                        <div className="content">
                            <span className="course-level">
                              <img src="/assets/images/others/quran-icon.png" alt=""/>
                            </span>
                            <h5 className="title">
                                <Link href={`/course-details/${course.id}`}>{course.title}</Link>
                            </h5>
                            <div className="course-rating">
                                <div className="rating">
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                    <i className="icon-23"></i>
                                </div>
                                <span className="rating-count">({course.rating} /{course.rating_count} Rating)</span>
                            </div>
                            <div className="content-wrap">
                                <div className="course-price">
                                  ₹{Number(course.course_price).toFixed(2)}
                                </div>
                                <p>{course.short_desc}</p>
                                <div className="read-more-btn">
                                    <Link className="edu-btn btn-medium" href={`/course-details/${course.id}`}>Enrolled <i className="icon-4"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              ))}
            </div>
        </div>
    </div>
  );
};

export default CoursesArea;