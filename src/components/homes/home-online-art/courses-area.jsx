import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// course items 
const course_items = course_data.filter(course => course.online_art)

// single course 
function SingleCourse({course}) {
  return (
    <div className="edu-course course-style-5 course-style-18">
      <div className="inner">
          <div className="thumbnail">
              <Link href={`/course-details/${course.id}`}>
                  <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
              </Link>
          </div>
          <div className="content">
              <span className="pre-title">{course.category}</span>
              <h6 className="title">
                  <Link href={`/course-details/${course.id}`}>{course.title}</Link>
              </h6>
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
              <div className="course-price">  ₹{Number(course.course_price).toFixed(2)}</div>
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
  return (
    <div className="home-online-art-course edu-course-area section-gap-equal">
    <div className="container edublink-animated-shape">
        <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title color-secondary">Popular Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">

          {course_items.map((course,i) => (
            <div key={course.id} className="col-xl-4 col-md-6" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
              <SingleCourse course={course} />
            </div>
          ))}

        </div>
        <div className="course-view-all sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
            <Link href="/course-style-1" className="edu-btn">Browse more courses <i className="icon-4"></i></Link>
        </div>
        <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img data-depth="1.5" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img data-depth="-1.5" src="/assets/images/others/shape-61.png" alt="Shape"/>
            </li>
            <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img data-depth="2" src="/assets/images/others/shape-60.png" alt="Shape"/>
            </li>
            <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img data-depth="-2" src="/assets/images/others/shape-59.png" alt="Shape"/>
            </li>
        </ul>
    </div>
    <ul className="shape-group">
        <li className="shape-5" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img data-depth="1.5" src="/assets/images/others/shape-57.png" alt="Shape"/>
        </li>
        <li className="shape-6" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img src="/assets/images/others/shape-58.png" alt="Shape"/>
        </li>
    </ul>
</div>
  );
};

export default CoursesArea;