import React from 'react';
import { faq_data } from '@/data/faq-data';

// faq_data is grouped by sections; flatten to a single list of items
const accordion_items = Array.isArray(faq_data)
    ? faq_data.reduce((acc, section) => acc.concat(section.items || []), [])
    : [];

const FaqArea = () => {
  return (
    <div className="edu-faq-area faq-style-1 faq-style-7">
    <div className="container">
        <div className="row g-5 row--45">
            <div className="col-lg-6 edu-order-md-2">
                <div className="edu-faq-gallery">
                    <div className="faq-thumbnail thumbnail-1" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                        <img src="/assets/images/others/faq-7.webp" alt="Faq Images"/>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-1" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                            <img src="/assets/images/cta/shape-09.png" alt="Shape Images"/>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 edu-order-md-1">
                <div className="edu-faq-content">
                    <div className="section-title section-left" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        <span className="pre-title">FAq’s</span>
                        <h2 className="title">Fraquently Asked <br/> Questions.</h2>
                        <span className="shape-line"><i className="icon-19"></i></span>
                    </div>
                    <div className="faq-accordion" id="faq-accordion" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        <div className="accordion">
                            {accordion_items.map((item, i) => {
                                const { desc, id, show, title } = item;
                                return (
                                    <div key={i} className="accordion-item">
                                        <h5 className="accordion-header">
                                            <button className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false'}>
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
        </div>
    </div>
    <ul className="shape-group">
        <li className="shape-bg" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
            <img src="/assets/images/bg/bg-image-36.svg" alt="Shape Images"/>
        </li>
    </ul>
</div>
  );
};

export default FaqArea;