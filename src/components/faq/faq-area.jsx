import React from 'react';
import SingleFaq from './single-faq';
import { faq_data } from '../../data/faq-data';

function NavTab({ active = false, id, title }) {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link ${active ? 'active' : ''}`}
                data-bs-toggle="tab"
                data-bs-target={`#${id}`}
                type="button"
                role="tab"
                aria-selected={active}
            >
                {title}
            </button>
        </li>
    );
}

const FaqArea = () => {
    return (
        <section className="edu-section-gap faq-page-area">
            <div className="container">
                <div className="row">

                    {/* LEFT SIDE CATEGORY TABS */}
                    <div className="col-lg-4">
                        <div className="faq-page-nav">
                            <h3 className="title">FAQs by Category</h3>
                            <p>Find answers to the most common questions asked by students and institutions.</p>

                            <ul className="nav nav-tabs" role="tablist">
                                {faq_data.map((cat, index) => (
                                    <NavTab
                                        key={cat.id}
                                        id={cat.id}
                                        title={cat.title}
                                        active={index === 0}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* RIGHT SIDE QUESTIONS */}
                    <div className="col-lg-8">
                        <div className="tab-content faq-page-tab-content">

                            {faq_data.map((cat, index) => (
                                <div
                                    key={cat.id}
                                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                                    id={cat.id}
                                    role="tabpanel"
                                >
                                    <div className="faq-accordion">
                                        <div className="accordion" id={`accordion-${cat.id}`}>

                                            {cat.items.map(item => (
                                                <SingleFaq
                                                    key={item.id}
                                                    id={item.id}
                                                    show={item.show}
                                                    title={item.title}
                                                    desc={item.desc}
                                                    parent={`accordion-${cat.id}`}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FaqArea;
