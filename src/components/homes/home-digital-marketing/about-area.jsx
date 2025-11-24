import React from 'react';

const AboutArea = () => {
  return (
    <div className="edu-about-area about-style-3 about-style-16">
    <div className="container">
        <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                <div className="about-content">
                    <div className="section-title section-left">
                        <span className="pre-title color-secondary">About Me</span>
                        <h2 className="title">Over 10 Years in <br/> <span className="color-secondary"> Distant learning</span> for Skill <br/> Development.</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                        <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim sit amet.</p>
                    </div>
                    <ul className="features-list">
                        <li>Expert Trainers</li>
                        <li>Online Remote Learning</li>
                        <li>Lifetime Access</li>
                    </ul>
                    <div className="about-btn sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                        <a href="#" className="edu-btn btn-curved">Learn more <i className="icon-4"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="about-image-gallery">
                    <img className="main-img-1" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800" src="/assets/images/about/about-30.webp" alt="About Image"/>
                    <div className="main-img-wrapper">
                        <div className="main-img-inner" data-sal-delay="100" data-sal="fade-in" data-sal-duration="800">
                            <img className="main-img-2" src="/assets/images/about/about-31.webp" alt="About Image"/>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                            <img data-depth="1.5" src="/assets/images/about/shape-13.png" alt="Shape"/>
                        </li>
                        <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                            <img className="rotateit" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutArea;