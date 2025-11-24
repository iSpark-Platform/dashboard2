import React from 'react';

const AboutArea = () => {
  return (
    <div className="edu-section-gap edu-about-area about-style-4 programming-about">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-8">
                    <div className="about-image-gallery">
                        <div className="main-img-1" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                            <img src="/assets/images/about/about-26.webp" alt="About Image"/>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="-2" src="/assets/images/about/shape-46.png" alt="Shape"/>
                            </li>
                            <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="1.5" src="/assets/images/faq/shape-05.png" alt="Shape"/>
                            </li>
                            <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <span data-depth="-2.5"></span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="about-content" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="section-title section-left">
                            <span className="pre-title">About Us</span>
                            <h2 className="title">Leading the <br/> Way in Software <br/> Development</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>A good programmer is someone who always looks both ways.</p>
                        </div>
                        <ul className="features-list">
                            <li>Education award achived</li>
                            <li>Available online courses</li>
                        </ul>
                        <a href="#" className="edu-btn">Learn More <i className="icon-4"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutArea;