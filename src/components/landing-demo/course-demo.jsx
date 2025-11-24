import React from 'react';

const CourseDemo = () => {
    return (
        <div className="pv-courses-demo">
            <div className="container">
                <div className="section-title section-center splash-title">
                    <span className="number">7+</span>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Responsive Course Layouts</h2>
                    <p className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Multiple choices for getting learners impressed with course grids & layouts</p>
                </div>
            </div>

            <div className="pv-gallery-wrapper">
                <div className="background-marque margque-courses"></div>
            </div>

            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="1.8" src="/assets/images/about/shape-36.png" alt="Shape" />
                </li>
                <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-1.4" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </li>
                <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img src="/assets/images/about/shape-15.png" alt="Shape" />
                </li>
                <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="-1" className="d-block"></span>
                </li>
            </ul>
        </div>
    )
}

export default CourseDemo;