import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// single course 
function SingleCourse({course}) {
  return (
    <div className="edu-course course-style-4 course-style-20">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/course-details/${course.id}`}>
                  <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
              </Link>
          </div>
          <div className="content">
              <div className="course-price">₹{Number(course.course_price).toFixed(2)}</div>
              <h6 className="title">
                  <Link href={`/course-details/${course.id}`}>{course.title}</Link>
              </h6>
              <ul className="course-meta">
                  <li><i className="icon-24"></i>{course.lesson} Lessons</li>
                  <li><i className="icon-25"></i>{course.student} Students</li>
              </ul>
          </div>
      </div>
  </div>
  )
}


const CoursesArea = () => {
  const course_items = course_data.filter(course => course.sales_coach);
  return (
    <div className="sales-coach-course edu-course-area course-area-4 bg-image">
        <div className="container edublink-animated-shape">
            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Popular Courses</span>
                <h2 className="title">Pick A Course To Get Started</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
              {course_items.map((course,i) => (
              <div key={i} className="col-xl-6" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                  <SingleCourse course={course} />
              </div>
              ))}
            </div>
            <div className="course-view-all" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
                <Link href="/course-style-1" className="edu-btn">Browse more courses <i className="icon-4"></i></Link>
            </div>
        </div>
    </div>
  );
};

export default CoursesArea;