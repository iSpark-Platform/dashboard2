import Link from 'next/link';
import React from 'react';

const CourseBreadcrumb = ({ course, subtitle }) => {
    const { title, instructor, language, rating_count } = course || {};
    return (
        <div className="edu-breadcrumb-area breadcrumb-style-3">
            <div className="container">
                <div className="breadcrumb-inner">
                    <ul className="edu-breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item">
                            <Link href="/internship">
                                Internships
                            </Link>
                        </li>
                        <li className="separator"><i className="icon-angle-right"></i></li>
                        <li className="breadcrumb-item active" aria-current="page">{subtitle}</li>
                    </ul>
                    <div className="page-title">
                        <h1 className="title">{title}</h1>
                    </div>
                    <ul className="course-meta">
                        <li><i className="icon-58"></i>by {instructor}</li>
                        <li><i className="icon-59"></i>{language}</li>
                        <li className="course-rating">
                        <div className="rating">
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                            <i className="icon-23"></i>
                        </div>
                        <span className="rating-count">({rating_count} Rating)</span>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1">
                    <span></span>
                </li>
                <li className="shape-2 scene">
                    <img data-depth="2" src="/assets/images/about/shape-13.png" alt="shape" />
                </li>
                <li className="shape-3 scene">
                    <img data-depth="-2" src="/assets/images/about/shape-15.png" alt="shape" />
                </li>
                <li className="shape-4">
                    <span></span>
                </li>
                <li className="shape-5 scene">
                    <img data-depth="2" src="/assets/images/about/shape-07.png" alt="shape" />
                </li>
            </ul>
        </div>
    )
}

export default CourseBreadcrumb;