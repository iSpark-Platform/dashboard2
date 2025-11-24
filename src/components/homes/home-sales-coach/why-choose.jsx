import React from 'react';

const WhyChoose = () => {
  return (
   <div className="process-area-1 edu-section-gap">
      <div className="container">
          <div className="row g-5 row--45">
              <div className="col-lg-6">
                  <div className="process-gallery edublink-animated-shape" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800">
                      <div className="gallery-thumbnail">
                          <div className="thumbnail thumbnail-1">
                              <img src="/assets/images/process/process-1.webp" alt="Why Choose"/>
                          </div>
                          <div className="thumbnail thumbnail-2 sal-animate" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800">
                              <img className="main-img-2" src="/assets/images/process/graph-1.webp" alt="About Image"/>
                          </div>
                      </div>
                      <ul className="shape-group">
                          <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <span data-depth="2"></span>
                          </li>
                          <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                              <img data-depth="-2" src="/assets/images/others/shape-73.png" alt="Shape Images"/>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="process-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                      <div className="section-title section-left">
                          <span className="pre-title color-primary">Few Step to success</span>
                          <h2 className="title">Follow <span className="color-secondary">3 Simple Step</span> to <br/> Get Our Course</h2>
                          <span className="shape-line"><i className="icon-19"></i></span>
                          <p>Lorem ipsum dolor sit amet consectetur. Quis egestas feugiat purus hendrerit massa. Lorem massa risus id tellus integer scelerisque turpis. Cursus in aliquam lorem et metus iaculis.</p>
                      </div>
                      <div className="course-list">
                          <div className="course-content">
                              <div className="course-number course-primary">
                                  <span>01</span>
                              </div>
                              <div className="course-title">
                                  <h4>Find <br/> a Course</h4>
                              </div>
                          </div>
                          <div className="course-content">
                              <div className="course-number course-secondary">
                                  <span>02</span>
                              </div>
                              <div className="course-title">
                                  <h4>Complete <br/> Your Course</h4>
                              </div>
                          </div>
                          <div className="course-content">
                              <div className="course-number course-extra">
                                  <span>03</span>
                              </div>
                              <div className="course-title">
                                  <h4>Explore <br/> Business Sale</h4>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default WhyChoose;