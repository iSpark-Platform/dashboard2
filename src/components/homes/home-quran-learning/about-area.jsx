import React from 'react';

const AboutArea = () => {
  return (
    <div className="section-gap-equal edu-about-area about-style-1 quran-learning-about">
      <div className="container edublink-animated-shape">
          <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                  <div className="about-image-gallery">
                      <img className="main-img-1" src="assets/images/about/about-33.webp" alt="About Image" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800"/>
                      <div className="main-img-2" data-sal-delay="250" data-sal="slide-right" data-sal-duration="800">
                          <img src="assets/images/about/about-34.webp" alt="About Image"/>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="1" src="assets/images/about/shape-51.png" alt="Shape"/>
                          </li>
                          <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="-1" src="assets/images/about/shape-52.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="about-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <div className="section-title section-left">
                          <span className="pre-title color-secondary">About Us</span>
                          <h2 className="title">Learn Online <br/> Quran Classes for Kids <br/> & Adults</h2>
                          <span className="shape-line"><i className="icon-19"></i></span>
                          <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
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