import Link from 'next/link';
import React from 'react';

const AdBanner = () => {
  return (
    <div className="remote-training-wrapper edu-cta-banner-area cta-banner-8">
      <div className="container">
          <div className="edu-cta-banner">
              <div className="row justify-content-center">
                  <div className="col-lg-9">
                      <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                          <h2 className="title">Register To Get Quality Kitchen Courses Through EduBlink</h2>
                          <div className="subs-button">
                              <Link href="/course-style-1" className="edu-btn btn-medium">Get started now <i className="icon-4"></i></Link>
                          </div>
                      </div>
                  </div>
              </div>
              <ul className="shape-group">
                  <li className="shape-01 scene">
                      <img data-depth="2.5" src="/assets/images/cta/shape-38.png" alt="shape"/>
                  </li>
                  <li className="shape-02 scene">
                      <img data-depth="-2.5" src="/assets/images/cta/shape-42.png" alt="shape"/>
                  </li>
              </ul>
          </div>
      </div>
   </div>
  );
};

export default AdBanner;