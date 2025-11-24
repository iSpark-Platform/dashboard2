import React from 'react';

const AboutArea = () => {
  return (
    <div className="gap-top-equal edu-about-area about-style-17">
      <div className="container edublink-animated-shape">
          <div className="row g-5 align-items-center">
              <div className="col-lg-4">
                  <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <span className="pre-title color-primary">Welcome to Edublink</span>
                      <h2 className="title"> Elevating Your <br/> Sales Skills with <br/> Sales Course</h2>
                  </div>
              </div>
              <div className="col-lg-8">
                  <div className="about-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <h3 className="title">Tincidunt diam ipsum neque tortor a sed tincidunt consecte, phasellus nec pulvinar feugiat purus rhoncus tortor.</h3>
                      <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                      <ul className="features-list">
                          <li>Expert Trainers</li>
                          <li>Online Remote Learning</li>
                          <li>Lifetime Access</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="about-image-gallery">
              <div className="main-img-1" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                  <img src="/assets/images/about/about-32.webp" alt="About Image"/>
              </div>
              <ul className="shape-group">
                  <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                      <img data-depth="2" src="/assets/images/about/shape-49.png" alt="Shape"/>
                  </li>
                  <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                      <img data-depth="-2" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                  </li>
                  <li className="shape-3 shape-light scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                      <img data-depth="2" src="/assets/images/about/shape-50.png" alt="Shape"/>
                  </li>
                  <li className="shape-3 shape-dark scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                      <img data-depth="2" src="/assets/images/about/dark-shape-50.png" alt="Shape"/>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  );
};

export default AboutArea;