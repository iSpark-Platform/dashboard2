import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// course items 
const course_items = course_data.filter(course => course.programming)

// single course 
function SingleCourse({item}) {
  return (
    <div className="edu-course course-style-5 course-style-17">
        <div className="inner">
            <div className="thumbnail">
                <Link href={`/course-details/${item.id}`}>
                    <img src={`/assets/images/course/course-07/${item.img}`} alt="Course Meta"/>
                </Link>
            </div>
            <div className="content">
                <span className="pre-title">{item.category}</span>
                <h6 className="title">
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                </h6>
                <div className="course-rating">
                    <div className="rating">
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                        <i className="icon-23"></i>
                    </div>
                    <span className="rating-count">(5.0 /7 Rating)</span>
                </div>
                <div className="course-price">₹{Number(item.course_price).toFixed(2)}</div>
                <ul className="course-meta">
                    <li><i className="icon-24 icon-course"></i>{item.lesson} Lessons</li>
                    <li><i className="icon-25 icon-course"></i>{item.student} Students</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

const CoursesArea = () => {
  return (
    <div className="home-programming-course edu-course-area section-gap-equal">
        <div className="container edublink-animated-shape">
            <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Popular Courses</span>
                <h2 className="title">Pick A Course To Get Started</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
               {course_items.map((item,i) => (
                <div key={i} className="col-xl-4 col-md-6" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                    <SingleCourse item={item} />
                </div>
               ))}

            </div>
            <div className="course-view-all sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                <Link href="/course-style-1" className="edu-btn">Browse more courses <i className="icon-4"></i></Link>
            </div>
        </div>
    </div>
  );
};

export default CoursesArea;