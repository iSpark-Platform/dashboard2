import React from 'react';
import SingleFaq from '@/components/faq/single-faq';

const FaqArea = () => {
  return (
    <div className="edu-faq-area faq-style-8 business-faq">
    <div className="container  edublink-animated-shape">
        <div className="section-title section-center" data-sal-delay="50" data-sal="slide-up" data-sal-duration="1000">
            <span className="pre-title">FAq’s</span>
            <h2 className="title">Frequently Asked <br/> Questions.</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5 row--45">
            <div className="col-lg-6">
                <div className="edu-faq-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="faq-accordion" id="faq-accordion">
                        <div className="accordion">
                        <SingleFaq show={true} id="1" title="How can I contact a school directly?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                        <SingleFaq id="2" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                        <SingleFaq id="3" title=" Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="edu-faq-content" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                    <div className="faq-accordion" id="faq-accordion2">
                        <div className="accordion">

                        <SingleFaq show={true} id="4" title="How can I contact a school directly?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                        <SingleFaq id="5" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                        <SingleFaq id="6" title=" Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul className="shape-group">
            <li className="shape-1" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                <img className="d-block-shape-light" data-depth="2" src="/assets/images/others/map-shape-3.png" alt="Shape"/>
                <img className="d-none-shape-dark" data-depth="2" src="/assets/images/others/dark-map-2-shape-3.png" alt="Shape"/>
            </li>
        </ul>
    </div>
</div>
  );
};

export default FaqArea;