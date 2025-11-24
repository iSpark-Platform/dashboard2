import Link from 'next/link';
import React from 'react';

const WhyChoose = () => {
  return (
    <div className="benefits-area-1">
        <div className="benefits-wrapper">
            <div className="benefits-wrap-one">
            </div>
            <div className="benefits-wrap-two">
                <div className="process-gallery edublink-animated-shape">
                    <div className="gallery-thumbnail">
                        <div className="thumbnail thumbnail-1">
                            <img src="/assets/images/others/benefit-img-01.webp" alt="Why Choose"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container edublink-animated-shape benefits-content-box">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="process-content">
                            <div className="section-title section-left" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">
                                <span className="pre-title color-secondary"> GYM Benefits</span>
                                <h2 className="title">Experience The <span className="color-secondary">Ultimate <br/> Gym</span> to Workout</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                            </div>
                            <div className="features-wrapper" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">
                                <ul className="features-list">
                                    <li>24 Hours Access</li>
                                    <li>Personal Trainer</li>
                                    <li>Flexible Classes</li>
                                </ul>
                                <ul className="features-list">
                                    <li>Unlimited Classes</li>
                                    <li>Online Classes</li>
                                </ul>
                            </div>
                            <div className="features-btn" data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">
                                <Link href="/course-style-1" className="edu-btn">Learn More <i className="icon-4"></i></Link>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="2" src="/assets/images/counterup/shape-02.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <img data-depth="-2" src="/assets/images/cta/shape-14.png" alt="Shape Images"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default WhyChoose;