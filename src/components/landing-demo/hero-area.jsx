

const HeroArea = () => {
    return (
        <div className="hero-banner presentation-hero-style pv-hero-banner bg-image" id="intro">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="banner-content">
                            <span className="subtitle" data-sal="slide-up" data-sal-duration="1000">Online Course & Education Template</span>
                            <h1 className="title" data-sal-delay="100" data-sal="slide-up" data-sal-duration="1000">EduBlink - Education React Template With Next.js</h1>
                            <div className="banner-btn" data-sal-delay="400" data-sal="slide-up" data-sal-duration="1000">
                                <a href="https://1.envato.market/AoJezj" target="_blank" className="edu-btn">Download EduBlink Now <i className="icon-4"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner-gallery">
                <div className="thumbnail thumbnail-1" data-sal-delay="500" data-sal="slide-down" data-sal-duration="1000">
                    <img src="/assets/images/preview/banner-thumb1.jpg" alt="demo" />
                </div>
                <div className="thumbnail thumbnail-2" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                    <img src="/assets/images/preview/banner-thumb2.jpg" alt="demo" />
                </div>
                <div className="thumbnail thumbnail-3" data-sal-delay="500" data-sal="slide-down" data-sal-duration="1000">
                    <img src="/assets/images/preview/banner-thumb3.jpg" alt="demo" />
                </div>
                <div className="thumbnail thumbnail-4" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                    <img src="/assets/images/preview/banner-thumb4.jpg" alt="demo" />
                </div>
                <div className="thumbnail thumbnail-5" data-sal-delay="500" data-sal="slide-up" data-sal-duration="1000">
                    <img src="/assets/images/preview/banner-thumb5.jpg" alt="demo" />
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-1 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-2 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="-2" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </li>
                <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <img data-depth="2" src="/assets/images/about/shape-25.png" alt="Shape" />
                </li>
                <li className="shape-4 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                    <span data-depth="-3" className="d-block"></span>
                </li>
            </ul>
        </div>
    )
}

export default HeroArea;