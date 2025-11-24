import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
     <div className="hero-banner hero-style-17 digital-marketing-banner">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="banner-content">
                        <h1 className="title title-1" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Digital Marketing:</h1>
                        <h1 className="title title-2" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000"> The Future Courses</h1>
                        <div className="instructor-info" data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                            <div className="inner">
                                <div className="media">
                                    <div className="thumb">
                                        <img src="/assets/images/banner/author-2.png" alt="Images"/>
                                    </div>
                                    <div className="content">
                                        <span>200+</span> <br/> Instactors
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-btn" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000">
                            <Link href="/course-style-1" className="edu-btn btn-curved">Get Started Now <i className="icon-4"></i></Link>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/others/shape-42.png" alt="Shape"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-2.5" src="/assets/images/others/shape-65.png" alt="Shape"/>
                            </li>
                            <li className="shape-3" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/others/shape-70.png" alt="Shape"/>
                            </li>
                            <li className="shape-4 shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/others/shape-71.png" alt="Shape"/>
                            </li>
                            <li className="shape-4 shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/others/dark-shape-71.png" alt="Shape"/>
                            </li>
                            <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/others/shape-72.png" alt="Shape"/>
                            </li>
                            <li className="shape-6" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/others/shape-67.png" alt="Shape"/>
                            </li>
                            <li className="shape-7 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-2.5" src="/assets/images/others/shape-16.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="shape-8">
            <img src="/assets/images/banner/digital-marketing-shape-01.png" alt="Shape"/>
        </div>
        <div className="shape-9">
            <span></span>
        </div>
        <div className="shape-10">
            <span></span>
        </div>
    </div>
  );
};

export default HeroBanner;