import React from 'react';
import SingleFaq from '@/components/faq/single-faq';

const FaqArea = () => {
  return (
    <div className="edu-faq-area faq-style-12 section-gap-equal">
        <div className="container">
            <div className="row g-5 row--45">
                <div className="col-lg-6">
                    <div className="edu-faq-content">
                        <div className="section-title section-left" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                            <span className="pre-title color-secondary">FAq’s</span>
                            <h2 className="title">Over 10 Years in Distant Skill Development</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt labore dolore magna.</p>
                        </div>
                        <div className="faq-accordion" id="faq-accordion" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                            <div className="accordion">
                            <SingleFaq show={true} id="1" title="How can I contact a school directly?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                            <SingleFaq id="2" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                            <SingleFaq id="3" title=" Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="edu-faq-gallery">
                        <div className="faq-thumbnail thumbnail-1" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                            <img src="/assets/images/faq/faq-10.webp" alt="Faq Images"/>
                        </div>
                        <div className="faq-thumbnail thumbnail-2" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
                            <img src="/assets/images/faq/faq-11.webp" alt="Faq Images"/>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="1.5" src="/assets/images/faq/shape-18.png" alt="Shape Images"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="-1.5" src="/assets/images/faq/shape-17.png" alt="Shape Images"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FaqArea;