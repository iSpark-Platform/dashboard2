import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner hero-style-20">
        <div className="container edublink-animated-shape">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Gym Course <br/> for <span className="color-secondary">High-Intensity</span> <br/>Interval Training</h1>
                        <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                            <Link href="/course-style-1" className="edu-btn">Find Course <i className="icon-4"></i></Link>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/banner/shape-04.png" alt="Shape"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <span data-depth="-1.5"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                        <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                            <img src="/assets/images/banner/gym-girl.webp" alt="Girl Image"/>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-3" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <span></span>
                            </li>
                            <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/banner/shape-05.png" alt="Shape"/>
                            </li>
                            <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-1.5" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                            </li>
                            <li className="shape-6" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img src="/assets/images/others/shape-23.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HeroBanner;