import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner hero-style-16 art-banner">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-6">
                  <div className="banner-content">
                      <span className="pre-title color-secondary" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">I am Fedrik Jon</span>
                      <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Develop Your Own <br/> Artistic Style</h1>
                      <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</p>
                      <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                          <Link href="/course-style-1" className="edu-btn">Find Course <i className="icon-4"></i></Link>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/banner/art-protrait-03.png" alt="Shape"/>
                          </li>
                          <li className="shape-1 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/banner/dark-art-protrait-03.png" alt="Shape"/>
                          </li>
                          <li className="shape-2 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/banner/art-protrait-02.png" alt="Shape"/>
                          </li>
                          <li className="shape-2 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/banner/dark-art-protrait-02.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="banner-thumbnail">
                      <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                          <img src="/assets/images/banner/art-girl.webp" alt="Pi-chart Image"/>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-3 scene shape-light" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1" src="/assets/images/banner/art-protrait-01.png" alt="Shape"/>
                          </li>
                          <li className="shape-3 scene shape-dark" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1" src="/assets/images/banner/dark-art-protrait-01.png" alt="Shape"/>
                          </li>
                          <li className="shape-4" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1" src="/assets/images/banner/art-protrait-04.png" alt="Shape"/>
                          </li>
                          <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="1.5" src="/assets/images/banner/art-shape-1.png" alt="Shape"/>
                          </li>
                          <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                              <img data-depth="-1.5" src="/assets/images/banner/art-shape-2.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className="shape-7">
          <img src="/assets/images/banner/art-protrait-05.png" alt="Shape"/>
      </div>
   </div>
  );
};

export default HeroBanner;