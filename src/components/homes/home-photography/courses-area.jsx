import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// course items 
const course_items = course_data.filter(course => course.photography);

// course item 
function CourseSingle({course,index}) {
  return (
    <div className="edu-course course-style-5 course-style-11 course-style-13">
        <div className="inner">
            <div className="thumbnail">
                <Link href={`/course-details/${course.id}`}>
                  <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
                </Link>
                <div className="course-price">₹{course.course_price}</div>
                <ul className="course-meta">
                    <li><i className="icon-25 icon-course"></i>{course.student} Students</li>
                </ul>
            </div>
            <div className="content">
                <p className="text pre-textsecondary">{course.category}</p>
                <h6 className="title">
                  <Link href={`/course-details/${course.id}`}>{course.title}</Link>
                </h6>
            </div>
        </div>
    </div>
  )
}

const CoursesArea = () => {
  return (
    <div className="home-photography-course edu-course-area">
            <div className="container edublink-animated-shape">
                <ul>
                    <li>
                        <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <span className="pre-title">Popular Courses</span>
                            <h2 className="title">Find The Course That’s Right for You.</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                        </div>
                    </li>
                    <li>
                        <div className="course-view-all" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                            <Link href="/course-style-1" className="edu-btn">View All courses <i className="icon-4"></i></Link>
                        </div>
                    </li>
                </ul>
                <div className="row g-5">
                  {course_items.map((course,index) => (
                    <div key={course.id} className="col-xl-3 col-md-6" data-sal-delay={`${index+1}00`} data-sal="slide-up" data-sal-duration="800">
                        <CourseSingle course={course} index={index} />
                    </div>
                  ))}
                </div>
            </div>
        </div>
  );
};

export default CoursesArea;