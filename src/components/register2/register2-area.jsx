import React from 'react';
import Register2Form from '../forms/register2-form';

const Register2Area = () => {
  return (
        <section className="account-page-area section-gap-equal">
            <div className="container position-relative">
                <div className="row g-5 justify-content-center">
                    <div className="col-lg-5">
                        <div className="login-form-box registration-form">
                            <h3 className="title">Registration</h3>
                            <p>Already have an account? <a href="/login">Sign in</a></p>
                            <Register2Form/>
                        </div>
                    </div>
                </div>

                <ul className="shape-group">
                    <li className="shape-1 scene">
                        <img data-depth="2" src="/assets/images/about/shape-07.png" alt="Shape" />
                    </li>
                    <li className="shape-2 scene">
                        <img data-depth="-2" src="/assets/images/about/shape-13.png" alt="Shape" />
                    </li>
                    <li className="shape-3 scene">
                        <img data-depth="2" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Register2Area;