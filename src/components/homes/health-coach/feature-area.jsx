import React from 'react';

// feature item 
function FeatureItem ({delay,icon,clr,title}) {
  return (
    <div className="col-lg-4" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
        <div className={`features-box color-${clr} edublink-svg-animate`}>
            <div className="icon">
                <img src={`/assets/images/svg-icons/h-8-shape-${icon}.svg`} alt="images svg"/>
            </div>
            <div className="content">
                <h5 className="title">{title}</h5>
                <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim veniam quis.</p>
            </div>
        </div>
    </div>
  )
}

const FeatureArea = () => {
  return (
      <div className="features-area-5 gap-bottom-equal">
        <div className="container">
            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title">Why Healthcoach</span>
                <h2 className="title">Why People Need Healthier Lifestyle?</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="row g-5">
              <FeatureItem delay='50' clr='primary-style' icon="34" title='Nutrition Strategies' />
              <FeatureItem delay='100' clr='secondary-style' icon="35" title='Workout Routines' />
              <FeatureItem delay='150' clr='extra06-style' icon="36" title='Individual Support' />
            </div>
        </div>
      </div>
  );
};

export default FeatureArea;