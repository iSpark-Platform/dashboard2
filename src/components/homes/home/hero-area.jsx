import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';

const HeroArea = () => {
    return (
        <div className="hero-banner hero-style-1">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">WORLD'S FIRST <span className="color-secondary">AGENTIC AI PLATFORM</span> <br />FOR LEARNING & PLACEMENT</h1>
                            <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Acquire industry 5.0- relevant skills in 12 most sought-after technologies and get placed in industries specialising in Robotics, AI, IoT, EV, Renewable Energy, Cybersecurity, Quantum Computing, Cloud Computing, Edge Computing etc.</p>
                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <Link href="/course-style-3" className="edu-btn">
                                    Find courses <i className="icon-4"></i>
                                </Link>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000"
                                >
                                    <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                                <img src="/assets/images/banner/girl-1.png" alt="Girl Image" />
                            </div>
                            <div className="instructor-info" data-sal-delay="600" data-sal="slide-up" data-sal-duration="1000">
                                <div className="inner">
                                    <h5 className="title">Instructor</h5>
                                    <div className="media">
                                        <div className="thumb">
                                            <img src="/assets/images/banner/author-1.png" alt="Images" />
                                        </div>
                                        <div className="content">
                                            <span>200+</span> Instructors
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img data-depth="1.5" src="/assets/images/about/shape-15.png" alt="Shape" />
                                </li>
                                <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img data-depth="-1.5" src="/assets/images/about/shape-16.png" alt="Shape" />
                                </li>

                                <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                 <span data-depth="3" className="circle-shape d-block"></span>
                                </li>

                                <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img data-depth="-1" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                                <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img data-depth="1.5" src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                                <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                    <img data-depth="-2" src="/assets/images/about/shape-18.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-7">
                <img src="/assets/images/about/h-1-shape-01.png" alt="Shape" />
            </div>
        </div>
    )
}

export default HeroArea;