import React from 'react';

const AdBanner = () => {
    return (
        <div className="edu-cta-banner-area cta-banner-3 bg-image">
            <div className="container edublink-animated-shape">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Quickly Get Updates About Your Class Event and News!</h2>
                                <div className="newsletter-form">
                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Get started now"/>
                                        <button className="edu-btn btn-curved" type="button">Subscribe <i className="icon-4"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="shape-group">
                    <li className="shape-1 scene">
                        <img data-depth="-1" src="/assets/images/banner/kid-1.webp" alt="shape"/>
                    </li>

                    <li className="shape-2 scene">
                        <img data-depth="1" src="/assets/images/banner/kid-2.webp" alt="shape"/>
                    </li>
                    
                    <li className="shape-3">
                        <img src="/assets/images/banner/icon-1.png" alt="shape"/>
                    </li>
                    <li className="shape-4">
                        <img src="/assets/images/banner/icon-2.png" alt="shape"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdBanner;