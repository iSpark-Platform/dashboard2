import Link from 'next/link';
import React from 'react';

const AdBanner = () => {
    return (
        <div className="modern-schooling-cta-wrapper edu-cta-banner-area-6 bg-image">
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="thumbnail">
                                <img src="/assets/images/cta/cta-girl-bg.webp" alt="girl image" />
                            </div>
                            <ul className="shape-group">
                                <li className="shape-01 scene">
                                    <img data-depth="2.5" src="/assets/images/cta/shape-43.png" alt="shape" />
                                </li>
                                <li className="shape-02">
                                    <img src="/assets/images/cta/shape-42.png" alt="shape" />
                                </li>
                                <li className="shape-03 scene">
                                    <img data-depth="-2" src="/assets/images/cta/shape-40.png" alt="shape" />
                                </li>
                                <li className="shape-04 scene">
                                    <img data-depth="2" src="/assets/images/cta/shape-38.png" alt="shape" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Get Your Quality <br /> Skills Certificate Through <br /> EduBlink </h2>
                                <Link href="/contact-us" className="edu-btn btn-secondary">
                                    Get started now <i className="icon-4"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-05 scene">
                            <img data-depth="1.5" src="/assets/images/cta/shape-39.png" alt="shape" />
                        </li>
                        <li className="shape-06">
                            <img src="/assets/images/cta/cta-round.svg" alt="shape" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;