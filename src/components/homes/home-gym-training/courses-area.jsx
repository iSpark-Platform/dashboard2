import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

const course_items = course_data.filter(course => course.gym_training);

// single course 
function SingleCourse({course}) {
  return (
    <div className="edu-course course-style-5 course-style-22">
        <div className="inner">
            <div className="thumbnail">
                <Link href={`/course-details/${course.id}`}>
                    <img src={`/assets/images/course/course-07/${course.img}`} alt="Course Meta"/>
                </Link>
                <div className="course-price">₹{course.course_price}</div>
            </div>
            <div className="content">
                <ul className="course-meta">
                    <li><i className="icon-24 icon-course"></i>{course.lesson} Lessons</li>
                    <li><i className="icon-25 icon-course"></i>{course.student} Students</li>
                </ul>
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
                    <span className="rating-count">
                      ({course.rating} /{course.rating_count} Rating)
                    </span>
                </div>
                <div className="read-more-btn">
                    <Link className="edu-btn btn-medium" href={`/course-details/${course.id}`}>Enrolled <i className="icon-4"></i></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

const CoursesArea = () => {
  return (
    <div className="home-gym-course edu-course-area section-gap-equal">
    <div className="container edublink-animated-shape">
        <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title color-secondary">Popular Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">
        
            {course_items.map((course,i) => (
            <div key={i} className="col-xl-4 col-md-6" data-sal-delay={`${i+1}00`} data-sal="slide-up" data-sal-duration="800">
                <SingleCourse course={course} />
             </div>
            ))}

        </div>
        <div className="course-view-all" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
            <Link href="/course-style-1" className="edu-btn">
              Browse more courses <i className="icon-4"></i>
            </Link>
        </div>
    </div>
</div>
  );
};

export default CoursesArea;