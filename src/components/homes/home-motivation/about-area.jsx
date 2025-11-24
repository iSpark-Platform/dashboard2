import React from 'react';
import useModal from '@/hooks/use-modal';
import VideoModal from '@/components/common/popup-modal/video-modal';

const AboutArea = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
    <div className="gap-bottom-equal edu-about-area about-style-1 about-style-10">
        <div className="container edublink-animated-shape">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800">
                    <div className="about-image-gallery">
                        <img className="main-img-1" src="/assets/images/about/about-24.webp" alt="About Image"/>
                        <div className="video-box" data-sal-delay="150" data-sal="slide-down" data-sal-duration="800">
                            <div className="inner">
                                <div className="thumb">
                                    <img src="/assets/images/about/about-25.webp" alt="About Image"/>
                                    <a onClick={() => setIsVideoOpen(true)} className="popup-icon video-popup-activation cursor-pointer">
                                        <img src="/assets/images/svg-icons/play-btn.svg" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="1" src="/assets/images/about/shape-44.png" alt="Shape"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="-1" src="/assets/images/about/shape-45.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6" data-sal-delay="150" data-sal="slide-left" data-sal-duration="800">
                    <div className="about-content">
                        <div className="section-title section-left">
                            <span className="pre-title">About Me</span>
                            <h2 className="title">Providing Best <span className="color-primary"> Motivational</span> Courses For You</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                        <ul className="features-list">
                            <li>Education award achived</li>
                            <li>Available online courses</li>
                            <li>Lifetime Access</li>
                        </ul>
                        <div className="signature">
                            <img src="/assets/images/about/about-11.png" alt="signature img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

     {/* video modal start */}
     <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId="m2m5Xx5T4No" />
     {/* video modal end */}
    </>
  );
};

export default AboutArea;