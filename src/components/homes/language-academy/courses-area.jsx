import React from 'react';
import { course_data } from '@/data';
import Link from 'next/link';

// course item 
function CourseItem({item,index}) {
    return (
        <div className="edu-course course-style-5 course-style-10">
        <div className="inner">
            <div className="thumbnail">
                <Link href={`/course-details/${item.id}`}>
                    <img src={`/assets/images/course/course-07/${item.img}`} alt="Course Meta"/>
                </Link>
                <div className="course-price">Form: ₹{item.course_price}</div>
                <div className="flag-wrap">
                    <Link className="flag-content" href={`/course-details/${item.id}`}>
                        <img src={`/assets/images/others/flag-${index+1}.jpg`} alt="flag images"/>
                    </Link>
                </div>
            </div>
            <div className="content">
                <h6 className="title">
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                </h6>
                <p className="text">{item.lesson} Programs</p>
            </div>
        </div>
    </div>
    )
}

const CoursesArea = () => {
  const course_items = course_data.filter(course => course.language_academy);
  return (
    <div className="home-nine-course edu-course-area course-area-10 section-gap-equal">
    <div className="container edublink-animated-shape">
        <div className="section-title section-center sal-animate" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title">Popular Courses</span>
            <h2 className="title">Pick A Course To Get Started</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">
            {course_items.map((item,i) => (
            <div key={i} className="col-xl-4 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                <CourseItem item={item} index={i}/>
            </div>
            ))}
            
        </div>
        <div className="course-view-all" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
            <Link href="/course-style-1" className="edu-btn">Browse more courses <i className="icon-4"></i></Link>
        </div>
        <ul className="shape-group">
            <li className="shape-3">
                <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-4">
                <span></span>
            </li>
        </ul>
    </div>
    <ul className="shape-group">
        <li className="shape-1">
            <img className="d-block-shape-light" data-depth="2" src="/assets/images/others/map-shape-3.png" alt="Shape"/>
            <img className="d-none-shape-dark" data-depth="2" src="/assets/images/others/3-Home-1.png" alt="Shape"/>
        </li>
        <li className="shape-2">
            <img className="d-block-shape-light" data-depth="2" src="/assets/images/others/map-shape-3.png" alt="Shape"/>
            <img className="d-none-shape-dark" data-depth="2" src="/assets/images/others/dark-map-shape-3.png" alt="Shape"/>
        </li>
    </ul>
</div>
  );
};

export default CoursesArea;