import React from 'react';
import CounterBox from '../../homes/home/counter-box';

const CounterArea = () => {
    return (
        <div className="counterup-area-7 section-gap-equal">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="counterup-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">Fun Facts</span>
                                <h2 className="title">The Large <span className="color-secondary">Number</span> of Counting</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna aliquaenim ad minim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="counterup-box-wrap">
                            <CounterBox />
                            <ul className="shape-group">
                                <li className="shape-1 scene">
                                    <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" />
                                </li>
                                <li className="shape-2">
                                    <img className="rotateit" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                                </li>
                                <li className="shape-3 scene">
                                    <img data-depth="1.6" src="/assets/images/counterup/shape-04.png" alt="Shape" />
                                </li>
                                <li className="shape-4 scene">
                                    <img data-depth="-1.6" src="/assets/images/counterup/shape-05.png" alt="Shape" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterArea;