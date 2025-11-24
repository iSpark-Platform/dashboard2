import React from 'react';

const CtaAdBanner = () => {
  return (
    <div className="programming-wrapper edu-cta-banner-area cta-banner-10">
    <div className="container">
        <div className="edu-cta-banner">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="thumbnail" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <img src="/assets/images/cta/cta-programming-img.webp" alt="images"/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-title section-left">
                        <h2 className="title">Download Our <br/> Free <span className="color-secondary">Programming Ebook</span> <br/> From EduBlink</h2>
                        <div className="subs-button">
                            <a href="#"> <button className="edu-btn btn-medium" type="button">Download ebook now <i className="icon-4"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-01 scene">
                    <span data-depth="2"></span>
                </li>
                <li className="shape-02 scene">
                    <img data-depth="-2" src="/assets/images/banner/python-icon.png" alt="shape"/>
                </li>
                <li className="shape-03 scene">
                    <img data-depth="1.5" src="/assets/images/others/shape-31.png" alt="shape"/>
                </li>
                <li className="shape-04 scene">
                    <img data-depth="-1.5" src="/assets/images/banner/html-icon.png" alt="shape"/>
                </li>
                <li className="shape-05 scene">
                    <img data-depth="1.5" src="/assets/images/faq/shape-36.png" alt="shape"/>
                </li>
                <li className="shape-06 scene">
                    <img data-depth="-1.5" src="/assets/images/banner/code-icon.png" alt="shape"/>
                </li>
            </ul>
        </div>
    </div>
</div>
  );
};

export default CtaAdBanner;