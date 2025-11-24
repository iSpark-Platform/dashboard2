'use client'
import React from 'react';
import Link from 'next/link';
import useModal from '@/hooks/use-modal';
import VideoModal from '@/components/common/popup-modal/video-modal';

const HeroBanner = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
    <div className="hero-banner hero-style-12 motivation-banner">
        <div className="container edublink-animated">
            <div className="row align-items-center">
                <div className="col-lg-6 edu-order-md-2">
                    <div className="banner-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">
                        <span className="pre-title color-primary">I am Fedrik Jon</span>
                        <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Take Motivation <br/> & Boost Your Energy <br/> with EduBlink</h1>
                        <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Excepteur sint occaecat cupidatat non proident sunt <br/> in culpa qui officia deserunt mollit.</p>
                        <ul className="banner-btn-video" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                            <li className="banner-btn">
                                <Link href="/course-style-1" className="edu-btn">Find courses <i className="icon-4"></i></Link>
                            </li>
                            <li className="video-btn">
                                <a onClick={() => setIsVideoOpen(true)} className="popup-icon video-popup-activation cursor-pointer">
                                    <i className="icon-18"></i>
                                    <span>Watch Video</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="shape-group">
                            <li className="shape-4 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/about/shape-15.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 edu-order-md-1">
                    <div className="banner-thumbnail">
                        <div className="thumbnail" data-sal-delay="150" data-sal="slide-left" data-sal-duration="1000">
                            <img src="/assets/images/banner/motivation-speaker.webp" alt="Pi-chart Image"/>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <span></span>
                </li>
                <li className="shape-2 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape"/>
                </li>
                <li className="shape-3 scene sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="2.5"></span>
                </li>
            </ul>
        </div>
        <ul className="shape-group">
            <li className="shape-5 scene sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="1" src="/assets/images/counterup/shape-02.png" alt="Shape"/>
            </li>
            <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img data-depth="-1" src="/assets/images/others/shape-38.png" alt="Shape"/>
            </li>
        </ul>
     </div>

     {/* video modal start */}
     <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="m2m5Xx5T4No" />
     {/* video modal end */}
    </>
  );
};

export default HeroBanner;