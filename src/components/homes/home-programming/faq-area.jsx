import React from 'react';
import SingleFaq from '@/components/faq/single-faq';

const FaqArea = () => {
  return (
    <div className="edu-faq-area faq-style-9 section-gap-equal">
        <div className="container">
            <div className="row g-5 row--45">
                <div className="col-lg-6">
                    <div className="section-title section-left" data-sal-delay="150" data-sal="slide-right" data-sal-duration="800">
                        <span className="pre-title">FAq’s</span>
                        <h2 className="title">Learn Your Best Education <br/> Culture with Edublink</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt labore dolore magna.</p>
                    </div>
                    <div className="d-flex align-items-start" data-sal-delay="200" data-sal="slide-right" data-sal-duration="800">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">General Questions</button>
                            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Community</button>
                            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Support</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="edu-faq-content">
                        <div className="tab-content" id="v-pills-tabContent" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <div className="faq-accordion" id="faq-accordion">
                                    <div className="accordion">
                                    <SingleFaq show={true} id="1" title="How can I contact a school directly?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                    <SingleFaq id="2" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                    <SingleFaq id="3" title=" Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                    <SingleFaq id="4" title="Where can I find information on private companies?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />

                                    <SingleFaq id="5" title="How do I find a study abroad program?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <div className="faq-accordion" id="faq-accordion2">
                                    <div className="accordion">
                                    <SingleFaq id="6" title="Am I eligible for admission?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                                    <SingleFaq id="7" title="What kind of support does EduBlink provide?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />
                                    <SingleFaq id="8" title="How long is my personal free trial?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                                    <SingleFaq id="9" title="How do I find a school where I want to study?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                                    <SingleFaq id="10" title="Where should I study abroad?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion2' />

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <div className="faq-accordion" id="faq-accordion3">
                                    <div className="accordion">
                                    <SingleFaq id="11" title="Where can I find information on private companies?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion3' />

                                    <SingleFaq id="12" title="How do I find a study abroad program?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion3' />

                                    <SingleFaq id="13" title="Am I eligible for admission?" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco qui laboris nis aliquip commodo consequat." parent='accordion3' />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="shape-group">
                            <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="1.5" src="/assets/images/others/shape-55.png" alt="Shape Images"/>
                            </li>
                            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                <img data-depth="-1.5" src="/assets/images/others/shape-56.png" alt="Shape Images"/>
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