import React from 'react';

const BreadcrumbFour = ({title,date,time,city}) => {
    return (
        <div className="edu-breadcrumb-area breadcrumb-style-4">
            <div className="container">
                <div className="breadcrumb-inner">
                    <div className="page-title">
                        <span className="pre-title">DEVELOPER</span>
                        <h1 className="title">{title}</h1>
                    </div>
                    <ul className="course-meta">
                        <li><i className="icon-27"></i>{date}</li>
                        <li><i className="icon-33"></i>{time}</li>
                        <li><i className="icon-40"></i>{city}</li>
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

export default BreadcrumbFour;