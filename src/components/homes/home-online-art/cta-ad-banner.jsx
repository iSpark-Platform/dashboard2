import React from 'react';

const CtaAdBanner = () => {
  return (
    <div className="online-art-wrapper edu-cta-banner-area cta-banner-11">
    <div className="container">
        <div className="edu-cta-banner">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title section-left">
                        <h2 className="title">Learn <span className="color-secondary">Anytime</span> On Your <br/> Mobile Device Free </h2>
                        <div className="subs-button">
                            <a href="#"><button className="edu-btn btn-medium" type="button">Download ebook now <i className="icon-4"></i></button></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="thumbnail" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <img src="/assets/images/cta/online-art-girl.webp" alt="images"/>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-01 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="2" src="/assets/images/about/shape-37.png" alt="shape"/>
                </li>
                <li className="shape-02 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-2" src="/assets/images/cta/shape-44.png" alt="shape"/>
                </li>
                <li className="shape-03 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="1.5" src="/assets/images/others/shape-31.png" alt="shape"/>
                </li>
                <li className="shape-04 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-1.5" src="/assets/images/cta/shape-48.png" alt="shape"/>
                </li>
                <li className="shape-05 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="1.5" src="/assets/images/faq/shape-36.png" alt="shape"/>
                </li>
                <li className="shape-06 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <span data-depth="-2"></span>
                </li>
            </ul>
        </div>
    </div>
    <ul className="shape-group">
        <li className="shape-07">
            <img src="/assets/images/cta/shape-46.png" alt="shape"/>
        </li>
        <li className="shape-08">
            <img src="/assets/images/cta/shape-47.png" alt="shape"/>
        </li>
    </ul>
</div>
  );
};

export default CtaAdBanner;