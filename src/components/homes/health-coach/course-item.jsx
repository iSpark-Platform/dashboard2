import Link from 'next/link';
import React from 'react';

const CourseItem = ({item}) => {
  return (
     <div className="edu-course course-style-5 course-style-12">
        <div className="inner">
            <div className="thumbnail">
                <Link href={`/course-details/${item.id}`}>
                    <img src={`/assets/images/course/course-02/${item.img}`} alt="Course Meta"/>
                </Link>
                <div className="course-price">
                    ₹{Number(item.course_price).toFixed(2)}
                </div>
                <div className="read-more-btn">
                    <Link className="btn-icon-round" href={`/course-details/${item.id}`}>
                        <i className="icon-4"></i>
                    </Link>
                </div>
            </div>
            <div className="instructor">
                <img src={`/assets/images/course/instructor/${item.instructor_img}`} alt="images"/>
                <h6 className="instructor-name">{item.instructor}</h6>
            </div>
            <div className="content">
                <h6 className="title">
                    <Link href={`/course-details/${item.id}`}>{item.title}</Link>
                </h6>
                <p className="text">{item.short_desc}</p>
            </div>
        </div>
     </div>
  );
};

export default CourseItem;