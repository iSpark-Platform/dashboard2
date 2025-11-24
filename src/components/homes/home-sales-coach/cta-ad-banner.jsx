import Link from 'next/link';
import React from 'react';

const CtaAdBanner = () => {
  return (
    <div className="cta-area-13 gap-bottom-equal">
        <div className="container sales-coach-wrapper">
            <div className="row justify-content-center">
                <div className="col-xl-6">
                    <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <h2 className="title"><span className="color-textExtra6">Explore</span> Your <span className="color-secondary"> Sales</span> with Our Best Courses</h2>
                        <Link href="/contact-us" className="edu-btn">Get started now <i className="icon-4"></i></Link>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-01 shape-light scene">
                    <img data-depth="2.5" src="/assets/images/cta/shape-13.png" alt="shape"/>
                </li>
                <li className="shape-01 shape-dark scene">
                    <img data-depth="2.5" src="/assets/images/cta/dark-shape-13.png" alt="shape"/>
                </li>
                <li className="shape-02 scene">
                    <img data-depth="-2.5" src="/assets/images/cta/shape-15.png" alt="shape"/>
                </li>
                <li className="shape-03 scene">
                    <img data-depth="-2" src="/assets/images/cta/shape-08.png" alt="shape"/>
                </li>
                <li className="shape-04 scene">
                    <img data-depth="2" src="/assets/images/cta/shape-14.png" alt="shape"/>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default CtaAdBanner;