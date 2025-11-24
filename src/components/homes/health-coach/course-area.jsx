import React from 'react';
import { course_data } from '@/data';
import CourseItem from './course-item';
import Link from 'next/link';

const CourseArea = () => {
const health_courses = course_data.filter(c => c.health_coach)
  return (
    <>
     <div className="home-eight-course edu-course-area course-area-9 section-gap-equal">
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
                    {health_courses.map((item) => (
                    <div key={item.id} className="col-xl-4 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        <CourseItem item={item} />
                    </div>
                    ))}
                    
                </div>
            </div>
        </div> 
    </>
  );
};

export default CourseArea;