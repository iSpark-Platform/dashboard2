import Link from 'next/link';
import React from 'react';

const AboutArea = () => {
  return (
    <div className="edu-about-area photography-about-style section-gap-equal">
    <div className="container edublink-animated-shape">
        <div className="section-title section-center">
            <h2 className="title">We are Creative and Passionate <br/> Photographers</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                <div className="about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  ex ea commodo consequat duis aute irure dolor in reprehenderit <br/> <br/> Excepteur sint ocaecat cupidatat non  proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspic iatis unde omnis iste natus.</p>
                </div>
            </div>
            <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                <div className="about-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit <br/> <br/> Excepteur sint ocaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspic iatis unde omnis iste natus.</p>
                </div>
            </div>
        </div>
        <div className="contact-us-btn" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1200">
            <Link href="/contact-us" className="edu-btn">Get Start Today <i className="icon-4"></i></Link>
        </div>
        <ul className="shape-group">
            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape"/>
            </li>
            <li className="shape-2" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img src="/assets/images/counterup/shape-02.png" alt="Shape"/>
            </li>
            <li className="shape-3 sal-animate" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                <img className="d-block-shape-light" data-depth="2" src="/assets/images/others/map-shape-3.png" alt="Shape"/>
                <img className="d-none-shape-dark" data-depth="2" src="/assets/images/others/dark-map-2-shape-3.png" alt="Shape"/>
            </li>
            <li className="shape-4" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img src="/assets/images/about/about-21.webp" alt="About Image"/>
            </li>
            <li className="shape-5" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img src="/assets/images/about/about-22.webp" alt="About Image"/>
            </li>
            <li className="shape-6" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img src="/assets/images/about/about-23.webp" alt="About Image"/>
            </li>
        </ul>
    </div>
    <ul className="shape-group">
        <li className="shape-7 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape"/>
        </li>
        <li className="shape-8" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <span></span>
        </li>
        <li className="shape-9 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <span data-depth="-2.5"></span>
        </li>
    </ul>
   </div>
  );
};

export default AboutArea;