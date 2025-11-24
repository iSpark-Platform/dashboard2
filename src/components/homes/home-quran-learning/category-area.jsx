import React from "react";

// single
function CategoryBox({ clr, icon, title }) {
  return (
    <div className={`features-box ${clr}`}>
      <div className="icon">
        <img
          className="svgInject"
          src={`/assets/images/svg-icons/${icon}`}
          alt="animated icon"
        />
      </div>
      <div className="content">
        <h5 className="title">{title}</h5>
        <p>Lorem ipsum dolor consectur elit adicing sed umod tempor.</p>
      </div>
    </div>
  );
}

const CategoryArea = () => {
  return (
    <div className="features-area-10 gap-top-equal">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title color-secondary">Learn & Peace</span>
          <h2 className="title"> Learning Quran with Extra Care</h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>
        <div className="row g-5">
          <div
            className="col-lg-4"
            data-sal-delay="50"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <CategoryBox
              clr="color-primary-style"
              icon="feature-icon-01.svg"
              title="Free Trial Classes"
            />
          </div>
          <div
            className="col-lg-4"
            data-sal-delay="100"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <CategoryBox
              clr="color-secondary-style"
              icon="feature-icon-02.svg"
              title="Male & Female Tutor"
            />
          </div>
          <div
            className="col-lg-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
          >
            <CategoryBox
              clr="color-extra08-style"
              icon="feature-icon-03.svg"
              title="Affordable Pricing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
