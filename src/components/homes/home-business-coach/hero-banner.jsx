import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner hero-style-13">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="banner-content">
                      <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Expand Your <br/> Business Possibilities <br/>with Edublink</h1>
                      <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                      <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                          <Link href="/course-style-1" className="edu-btn">Find courses <i className="icon-4"></i></Link>
                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="banner-thumbnail">
                      <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                          <img src="/assets/images/banner/business-banner-men.webp" alt="flag-boy Image"/>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <span></span>
                          </li>
                          <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <span></span>
                          </li>
                          <li className="shape-3" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img src="/assets/images/cta/shape-42.png" alt="Shape"/>
                          </li>
                          <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/cta/shape-40.png" alt="Shape"/>
                          </li>
                          <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/cta/shape-40.png" alt="Shape"/>
                          </li>
                          <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/cta/shape-38.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <ul className="shape-group">
          <li className="shape-7">
              <img src="/assets/images/others/shape-45.png" alt="Shape"/>
          </li>
          <li className="shape-8 shape-light">
              <img src="/assets/images/bg/light-business-bg-img.svg" alt="Shape"/>
          </li>
          <li className="shape-8 shape-dark">
              <img src="/assets/images/bg/dark-business-bg-img.svg" alt="Shape"/>
          </li>
          <li className="shape-11">
              <img src="/assets/images/others/shape-46.png" alt="Shape"/>
          </li>
      </ul>
  </div>
  );
};

export default HeroBanner;