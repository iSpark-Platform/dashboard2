import { Certificate, Instructor, OnlineClass } from '@/svg';
import React from 'react';

const AboutArea = () => {
  return (
    <div className="edu-about-area about-style-3 remote-training-about">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="about-course">
              <div className="about-course-wrap">
                <div className="about-course-box about-course-style-2 edublink-svg-animate">
                  <div className="icon icon-online">
                    <OnlineClass/>
                  </div>
                  <div className="content">
                    <h5 className="title"><span>80+</span> Online Courses</h5>
                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                  </div>
                </div>
              </div>
              <div className="about-course-wrap">
                <div className="about-course-box about-course-style-2 edublink-svg-animate remote-course">
                  <div className="icon instructor">
                    <Instructor/>
                  </div>
                  <div className="content">
                    <h5 className="title"><span>Top</span> Instructors</h5>
                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                  </div>
                </div>
              </div>
              <div className="about-course-wrap">
                <div className="about-course-box about-course-style-2 edublink-svg-animate">
                  <div className="icon certificate">
                    <Certificate/>
                  </div>
                  <div className="content">
                    <h5 className="title"><span>Online</span> Certifications</h5>
                    <p>Lorem ipsum dolor consec elit adicing umod tempor enim.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
            <div className="about-content">
              <div className="section-title section-left">
                <span className="pre-title">About Us</span>
                <h2 className="title">An Affordable <span className="color-secondary">Remote <br /></span> Training Course</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna
                  aliquaenim minim veniam quis nostrud exercitation ullamco laboris.</p>
              </div>
              <ul className="features-list">
                <li>Expert Trainers</li>
                <li>Online Remote Learning</li>
                <li>Lifetime Access</li>
              </ul>
              <div className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                <a href="#" className="edu-btn">Learn more <i className="icon-4"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutArea;