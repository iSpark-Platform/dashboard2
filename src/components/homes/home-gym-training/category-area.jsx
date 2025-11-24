import React from 'react';

// category box 
function CategoryBox({icon,title}) {
  return (
    <div className="features-box features-style-11">
      <div className="icon icon-course">
          <img src={`/assets/images/features/${icon}`} alt="animated icon"/>
      </div>
      <div className="content">
          <h5 className="title">{title}</h5>
          <p>Lorem ipsum dolor consec tur elit adicing sed</p>
      </div>
  </div>
  )
}

const CategoryArea = () => {
  return (
    <div className="features-area-11 section-gap-equal">
        <div className="container">
            <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                <span className="pre-title pre-textsecondary">Why Healthcoach</span>
                <h2 className="title">Transform Your Body, Transform Your Life</h2>
                <span className="shape-line"><i className="icon-19"></i></span>
            </div>
            <div className="features-grid-wrap" data-sal-delay="150" data-sal="slide-up" data-sal-duration="1000">
              <CategoryBox icon="features-icon-01.png" title="Exercise" />
              <CategoryBox icon="features-icon-02.png" title="Nutration" />
              <CategoryBox icon="features-icon-03.png" title="Guides" />
              <CategoryBox icon="features-icon-04.png" title="Online Class" />
            </div>
        </div>
    </div>
  );
};

export default CategoryArea;