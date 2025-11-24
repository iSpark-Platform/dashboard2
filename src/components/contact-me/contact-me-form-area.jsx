import React from 'react';
import ContactMeForm from '../forms/contact-me-form';

const ContactMeFormArea = () => {
    return (
        <section className="edu-section-gap contact-form-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form">
                            <div className="section-title section-center">
                                <h3 className="title">Just Drop Me a Line</h3>
                            </div>
                            <ContactMeForm />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene">
                    <img data-depth="-2" src="/assets/images/about/shape-15.png" alt="shape" />
                </li>
                <li className="shape-2 scene">
                    <img data-depth="2" src="/assets/images/cta/shape-04.png" alt="shape" />
                </li>
                <li className="shape-3 scene">
                    <span data-depth="1"></span>
                </li>
                <li className="shape-4 scene">
                    <img data-depth="-2" src="/assets/images/about/shape-13.png" alt="shape" />
                </li>
            </ul>
        </section>
    )
}

export default ContactMeFormArea;