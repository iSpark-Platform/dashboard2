import React from 'react';
import Link from 'next/link';
import { Instructor, OnlineClass } from '@/svg';

const HeroBanner = () => {
  return (
    <div className="hero-banner hero-style-15 programming-banner">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="banner-content">
                      <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Build Your <br/> <span className="color-secondary">Programming</span> Skill <br/> with Edublink</h1>
                      <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                      <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                          <Link href="/course-style-1" className="edu-btn">Find courses <i className="icon-4"></i></Link>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <span></span>
                          </li>
                          <li className="shape-2 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/about/shape-15.png" alt="Shape"/>
                          </li>
                      </ul>
                      <ul className="programming-feature-area">
                          <li className="feature-course">
                              <div className="icon icon-course edublink-svg-animate">
                                  <OnlineClass/>
                              </div>
                              <div className="content">
                                  <h5 className="title">3,020 <br/> Online Courses</h5>
                              </div>
                          </li>
                          <li className="feature-instructior">
                              <div className="icon icon-instructor edublink-svg-animate">
                                  <Instructor/>
                              </div>
                              <div className="content">
                                  <h5 className="title">Top <br/> Instructors</h5>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="banner-thumbnail">
                      <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                          <img src="/assets/images/banner/programming-banner.webp" alt="Pi-chart Image"/>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/banner/html-icon.png" alt="Shape"/>
                          </li>
                          <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/banner/code-icon.png" alt="Shape"/>
                          </li>
                          <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/banner/shape-03.png" alt="Shape"/>
                          </li>
                          <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/about/shape-13.png" alt="Shape"/>
                          </li>
                          <li className="shape-7 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <span data-depth="2.5"></span>
                          </li>
                          <li className="shape-8 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/banner/python-icon.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className="shape-9">
          <img src="/assets/images/about/h-1-shape-01.png" alt="Shape"/>
      </div>
   </div>
  );
};

export default HeroBanner;