import React from 'react';

const WhyChoose = () => {
  return (
    <div className="why-choose-area-5 gap-top-equal">
    <div className="container">
        <div className="row g-5 row--45">
            <div className="col-lg-6">
                <div className="why-choose-gallery" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800">
                    <div className="gallery-thumbnail">
                        <div className="thumbnail thumbnail-1">
                            <img src="assets/images/others/why-choose-06.webp" alt="Why Choose"/>
                        </div>
                        <div className="video-lesson">
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title"> <span className="number">20+</span> <br/> Video Lessons</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                            <img data-depth="2" src="/assets/images/others/shape-66.png" alt="Shape Images"/>
                        </li>
                        <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                            <img data-depth="-2" src="/assets/images/cta/shape-48.png" alt="Shape Images"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="why-choose-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="section-title section-left">
                        <span className="pre-title pre-textsecondary">Why Choose</span>
                        <h2 className="title">Why Learn Digital Marketing?</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                        <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <ul className="features-list">
                        <li>Exclusive Program</li>
                        <li>Online Training</li>
                        <li>Individual Care</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default WhyChoose;