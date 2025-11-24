import Link from 'next/link';

const AdBanner = () => {
    return (
        <div className="edu-cta-banner-area home-one-cta-wrapper bg-image">
            <div className="container">
                <div className="edu-cta-banner">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <h2 className="title">Get Your Quality Skills <span className="color-secondary">Certificate</span> Through iSpark Learning Solutions </h2>
                                <Link href="/contact-us" className="edu-btn">
                                    Get started now <i className="icon-4"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group">
                        <li className="shape-01 scene">
                            <img data-depth="2.5" src="/assets/images/cta/shape-10.png" alt="shape" />
                        </li>
                        <li className="shape-02 scene">
                            <img data-depth="-2.5" src="/assets/images/cta/shape-09.png" alt="shape" />
                        </li>
                        <li className="shape-03 scene">
                            <img data-depth="-2" src="/assets/images/cta/shape-08.png" alt="shape" />
                        </li>
                        <li className="shape-04 scene">
                            <img data-depth="2" src="/assets/images/about/shape-13.png" alt="shape" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdBanner;