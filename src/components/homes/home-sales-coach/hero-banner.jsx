import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner hero-style-18">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <span className="pre-title color-primary" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">Welcome to Edublink</span>
              <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">A Comprehensive <br /> Sales <span className="color-secondary">Coaching</span> <br />Program</h1>
              <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Magna et elit sed quis tristique consectetur urna augue vel Quam bibendum tincidunt viverra porttitor eget tristique est egestas etiam.</p>
              <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                <Link href="/course-style-1" className="edu-btn">Get Started Now <i className="icon-4"></i></Link>
              </div>
              <ul className="shape-group">
                <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                  <span></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <div className="thumbnail" data-sal-delay="500" data-sal="slide-left" data-sal-duration="1000">
                <img src="/assets/images/banner/sales-coach-banner-img.webp" alt="Girl Image" />
              </div>
              <div className="instructor-info" data-sal-delay="600" data-sal="slide-up" data-sal-duration="1000">
                <div className="inner">
                  <div className="title-wrap">
                    <h5 className="title">Selling Amounts</h5>
                    <a href="#" className="dot">
                      <span></span>
                      <span></span>
                      <span></span>
                    </a>
                  </div>
                  <div className="media">
                    <img src="/assets/images/banner/rectangle-1.png" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="sales-info" data-sal-delay="600" data-sal="slide-up" data-sal-duration="1000">
                <div className="inner">
                  <div className="title-wrap">
                    <h4 className="counter-item count-number primary-color">
                      <span>$</span><span className="odometer" data-odometer-final="">53,452.36</span>
                    </h4>
                    <div className="chart-wrap">
                      <img src="/assets/images/banner/banner-chart.png" alt="Image" />
                    </div>
                  </div>
                  <p className="text">Monthly Sale</p>
                  <div className="media">
                    <div className="single-progressbar">
                      <div className="progressbar-five">
                        <div className="progressbar" style={{ width: '100%', borderRadius: '5px' }}>
                          <div className="proggress" style={{ height: '10px', borderRadius: '5px', width: '70%' }}>
                            <div className="indicator" style={{ overflow: 'visible' }}></div>
                          </div>
                        </div>
                        <div className="percentCount">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="shape-group">
                <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                  <img data-depth="1.5" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </li>
                <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                  <img data-depth="-1.5" src="/assets/images/banner/art-shape-1.png" alt="Shape" />
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