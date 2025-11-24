import React from 'react';

const InnerPagesDemo = () => {
    return (
        <div className="pv-inner-page-area bg-image">
            <div className="container">
                <div className="section-title section-center splash-title">
                    <span className="number">45+</span>
                    <span className="shape-line"><i className="icon-19"></i></span>
                    <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Pre-build Inner Pages</h2>
                    <p data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Start with a page template, your site can be built in less than you can expect!!.</p>
                </div>
            </div>
            <div className="pv-gallery-wrapper">
                <div className="background-marque margque-inner-page"></div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="1.2" src="/assets/images/counterup/shape-03.png" alt="shape" />
                </li>

                <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-2" src="/assets/images/counterup/shape-02.png" alt="shape" />
                </li>

                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="3" className="d-block"></span>
                </li>
            </ul>
        </div>
    )
}

export default InnerPagesDemo;