import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// single course 
function CourseSingle({course}) {
  return (
    <div className="edu-course course-style-5 course-style-16">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/course-details/${course.id}`}>
                  <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
              </Link>
              <div className="course-price">₹{course.course_price}</div>
          </div>
          <div className="content">
              <span className="pre-title">{course.category}</span>
              <h6 className="title">
                  <Link href={`/course-details/${course.id}`}>{course.title}</Link>
              </h6>
              <p className="text">{course.short_desc}</p>
              <ul className="course-meta">
                  <li><i className="icon-24 icon-course"></i>{course.lesson} Lessons</li>
                  <li><i className="icon-25 icon-course"></i>{course.student} Students</li>
              </ul>
          </div>
      </div>
  </div>
  )
}

const CoursesArea = () => {
  const course_items = course_data.filter(course => course.motivation);
  return (
    <div className="home-motivation-course edu-course-area gap-bottom-equal">
        <div className="container edublink-animated-shape">
            <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Popular Courses</span>
                <h2 className="title">Pick A Course To Get Started</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
              {course_items.map((course,i) => (
                <div key={course.id} className="col-xl-4 col-md-6" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                  <CourseSingle course={course} />
              </div>
              ))}
            </div>
        </div>
    </div>
  );
};

export default CoursesArea;