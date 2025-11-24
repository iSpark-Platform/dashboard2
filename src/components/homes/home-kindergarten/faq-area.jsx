import React from 'react';

const accordion_items = [
    {
        id: 'collapseOne', 
        show: true, 
        title: 'How can I contact a school directly?',
        style:'style-extra02',
        desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    },
    {
        id: 'collapseTwo', 
        show: false,
        title: 'How do I find a school where I want to study?',
        style:'style-extra05',
        desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    },
    {
        id: 'collapseThree', 
        show: false, 
        title: 'Where should I study abroad?',
        style:'style-primary',
        desc: 'Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore dolore magna aliquaenim ad minim eniam.'
    }
];

const FaqArea = () => {
    return (
        <div className="edu-faq-area faq-style-4">
            <div className="container">
                <div className="row g-5 row--45 align-items-end">
                    <div className="col-lg-6">
                        <div className="edu-faq-content">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title pre-textsecondary">Education For Everyone</span>
                                <h2 className="title">Ages We Meet Kids Where They Are</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>
                            <div className="faq-accordion" id="faq-accordion" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <div className="accordion">
                                    {accordion_items.map((item, i) => {
                                        const { desc, id, show, title,style } = item;
                                        return (
                                            <div key={i} className="accordion-item">
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${show ? '' : 'collapsed'} ${style}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false'}>
                                                        {title}
                                                    </button>
                                                </h5>
                                                <div id={id} className={`accordion-collapse collapse ${show ? 'show' : ''}`} data-bs-parent="#faq-accordion">
                                                    <div className="accordion-body">
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="faq-thumbnail">
                            <div className="thumbnail">
                                <img src="/assets/images/faq/faq-08.webp" alt="Faq Images"/>
                            </div>
                            <ul className="shape-group">
                                <li className="shape-1 scene">
                                    <img data-depth="1" src="/assets/images/about/shape-12.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-2 scene">
                                    <img data-depth="-1" src="/assets/images/about/shape-13.png" alt="Shape Images"/>
                                </li>
                                <li className="shape-3 scene">
                                    <img data-depth="1" src="/assets/images/faq/shape-15.png" alt="Shape Images"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea;