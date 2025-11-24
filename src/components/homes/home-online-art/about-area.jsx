import React from 'react';

const AboutArea = () => {
  return (
    <div className="edu-about-area gap-bottom-equal about-style-4 online-art-about">
      <div className="container">
          <div className="about-heading-area">
              <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                  <span className="pre-title color-secondary">Our Story</span>
                  <h2 className="title">Exploring Color Theory: <span className="color-textSecondary">Mixing</span><br/> and <span className="color-textSecondary">Matching</span> Hues</h2>
                  <span className="shape-line"><i className="icon-19"></i></span>
              </div>
          </div>
          <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                  <div className="about-image-gallery-1 edublink-animated-shape">
                      <div className="main-img-3" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                          <img src="/assets/images/about/about-27.webp" alt="About Image"/>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape"/>
                          </li>
                          <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="-2" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                  <div className="about-image-gallery-2 edublink-animated-shape">
                      <div className="about-content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                          </p>

                          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="main-img-4" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                                  <img src="/assets/images/about/about-28.webp" alt="About Image"/>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="main-img-5" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                                  <img src="/assets/images/about/about-29.webp" alt="About Image"/>
                              </div>
                          </div>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="2" src="/assets/images/about/shape-25.png" alt="Shape"/>
                          </li>
                          <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <span data-depth="-2"></span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div className="shape-group">
          <li className="shape-5 shape-light" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
              <img src="/assets/images/about/shape-47.png" alt="Shape"/>
          </li>
          <li className="shape-5 shape-dark" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
              <img src="/assets/images/about/dark-shape-47.png" alt="Shape"/>
          </li>
          <li className="shape-6 shape-light" data-sal-delay="50" data-sal="slide-left" data-sal-duration="800">
              <img src="/assets/images/about/shape-48.png" alt="Shape"/>
          </li>
          <li className="shape-6 shape-dark" data-sal-delay="50" data-sal="slide-left" data-sal-duration="800">
              <img src="/assets/images/about/dark-shape-48.png" alt="Shape"/>
          </li>
      </div>
   </div>
  );
};

export default AboutArea;