import React from 'react';
import VideoModal from '@/components/common/popup-modal/video-modal';
import useModal from '@/hooks/use-modal';

const HeroBanner = () => {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
    <div className="hero-banner hero-style-19 quran-learning-banner">
        <div className="container edublink-animated-shape">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <span className="pre-title color-secondary" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">Learn Quran For Peace</span>
                        <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">Discover The Wonder of The <span className="color-primary">Quran.</span></h1>
                        <p data-sal-delay="200" data-sal="slide-up" data-sal-duration="1000">Magna et elit sed quis tristique consectetur urna augue vel Quam bibendum tincidunt viverra porttitor eget tristique est egestas etiam.</p>
                        <div className="banner-search sal-animate" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                            <div className="input-group" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                                <input type="text" className="form-control" placeholder="What do you want learn?"/>
                                <button className="search-btn" type="button"><i className="icon-2"></i></button>
                            </div>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-2 scene sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="1.5" src="/assets/images/banner/art-shape-1.png" alt="Shape"/>
                            </li>
                            <li className="shape-3 scene sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-1.5" src="/assets/images/banner/moon-shape.png" alt="Shape"/>
                            </li>
                            <li className="shape-4 scene sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="2" src="/assets/images/banner/qa-shape.png" alt="Shape"/>
                            </li>
                            <li className="shape-5 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="-2" src="/assets/images/banner/q-vaction-shape.png" alt="Shape"/>
                            </li>
                            <li className="shape-6 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                                <img data-depth="2.5" src="/assets/images/banner/arrow-shape.png" alt="Shape"/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-thumbnail">
                        <div className="thumbnail">
                            <img src="/assets/images/banner/quran-banner-img-01.webp" alt="Pi-chart Image"/>
                        </div>
                        <div className="video-box" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="inner">
                                <div className="title-box">
                                    <span className="video-title">Join Our Community of <br/> Quran Learners</span>
                                    <ul className="dot-box">
                                        <li className="dot"></li>
                                        <li className="dot"></li>
                                        <li className="dot"></li>
                                    </ul>
                                </div>
                                <div className="thumb">
                                    <img src="/assets/images/banner/quran-banner-vedio-img.webp" alt="About Image"/>
                                    <a onClick={() => setIsVideoOpen(true)} className="popup-icon video-popup-activation cursor-pointer">
                                        <i className="icon-18"></i>
                                    </a>
                                </div>
                                <div className="participant-box">
                                    <ul className="participant-title">
                                        <li><span>participants</span></li>
                                        <li><span>2k</span></li>
                                    </ul>
                                    <img src="/assets/images/banner/participant-img.png" alt="Aarticipant Image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img src="/assets/images/banner/lamp-shape.png" alt="shape"/>
                </li>
            </ul>
        </div>
        <ul className="social-wrapper">
            <li className="social-wrap"><a href="#">Facebook</a></li>
            <li className="social-wrap"><a href="#">Twitter</a></li>
            <li className="social-wrap"><a href="#">Instagram</a></li>
        </ul>
    </div>

    {/* video modal start */}
    <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={'m2m5Xx5T4No'} />
    {/* video modal end */}
    </>
  );
};

export default HeroBanner;