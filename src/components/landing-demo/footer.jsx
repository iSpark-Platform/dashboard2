import React from 'react';

const Footer = () => {
    return (
        <div className="pv-cta-area bg-image">
            <div className="container">
                <div className="cta-content">
                    <span className="subtitle" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Great Solutions for Smart People</span>
                    <h2 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Create Your Education Website <br /> Today with EduBlink</h2>
                    <div className="button-group" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                        <a href="https://1.envato.market/AoJezj" target="_blank" className="edu-btn">Download EduBlink <i className="icon-4"></i></a>
                        <a href="#demos" className="edu-btn btn-bg-white">Demo Preview <i className="icon-4"></i></a>
                    </div>
                </div>
            </div>

            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/counterup/shape-02.png" alt="shape" />
                </li>

                <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <img className="rotateit" src="/assets/images/about/shape-35.png" alt="shape" />
                </li>

                <li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-2" src="/assets/images/about/shape-07.png" alt="shape" />
                </li>

                <li className="shape-4 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="2.5" className="d-block"></span>
                </li>
            </ul>
        </div>
    )
}

export default Footer;