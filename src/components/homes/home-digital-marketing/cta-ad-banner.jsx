import Link from 'next/link';
import React from 'react';

const CtaAdBanner = () => {
  return (
    <div className="ditigtal-marketing-wrapper edu-cta-banner-area cta-banner-7">
        <div className="container">
            <div className="edu-cta-banner">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <h2 className="title"><span className="color-textExtra5 ">Ready</span> To Start <img src="/assets/images/others/shape-62.png" alt=""/> <br/>
                                Your <span className="color-secondary">Free Trial</span> Today</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-group" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <Link href="/contact-us" className="edu-btn btn-curved">Get started now <i className="icon-4"></i></Link>
                            <Link href="/contact-us" className="edu-btn btn-border-curved">Contact For Free <i className="icon-4"></i></Link>
                        </div>
                    </div>
                </div>
                <ul className="shape-group">
                    <li className="shape-01 scene">
                        <img data-depth="2" src="/assets/images/others/shape-64.png" alt="shape"/>
                    </li>
                    <li className="shape-02 scene">
                        <img data-depth="-2" src="/assets/images/others/shape-65.png" alt="shape"/>
                    </li>
                    <li className="shape-03 scene">
                        <img data-depth="2" src="/assets/images/others/shape-63.png" alt="shape"/>
                    </li>
                    <li className="shape-04 scene">
                        <img data-depth="-2" src="/assets/images/others/shape-66.png" alt="shape"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default CtaAdBanner;