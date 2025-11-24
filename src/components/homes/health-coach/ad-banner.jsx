import React from 'react';

const AdBanner = () => {
  return ( 
    <div className="health-coach-wrapper edu-cta-banner-area cta-banner-7">
    <div className="container">
        <div className="edu-cta-banner">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <h2 className="title">Register To Get Quality Kitchen <span className="color-primary">Courses</span> Through EduBlink</h2>
                    </div>
                    <div className="input-group footer-subscription-form" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
                        <input type="email" className="form-control" placeholder="Your email"/>
                        <a href="#"> <button className="edu-btn btn-medium" type="button">Subscribe <i className="icon-4"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
  );
};

export default AdBanner;