import React from 'react';

function CategoryItem({clr,icon,title,subtitle,icon_cls=''}) {
  return (
    <div className={`categorie-grid categorie-style-6 ${clr}`}>
      <div className={`icon ${icon_cls}`}>
          {icon}
      </div>
      <div className="content">
          <h5 className="title">{title}</h5>
          <p>{subtitle}</p>
      </div>
  </div>
  )
}
const CategoryArea = () => {
  return (
    <div className="edu-categorie-area categorie-area-6">
    <div className="container">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title">Services</span>
            <h2 className="title">Your Creative and Passionate <br/> Business Coach </h2>
            <span className="shape-line"><i className="icon-19"></i></span>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud <br/> exercitat laboris nis aliquip exa commodo.</p>
        </div>
        <div className="row g-5">
            <div className="col-lg-4 col-md-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
              <CategoryItem icon={<i className="icon-9"></i>} title="Business Strategy" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-primary edublink-svg-animate" />
            </div>

            <div className="col-lg-4 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <CategoryItem icon={<i className="icon-16"></i>} title="Project Management" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-secondary" icon_cls='computer-science' />
            </div>

            <div className="col-lg-4 col-md-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <CategoryItem icon={<img src="/assets/images/svg-icons/user.svg" alt="Image Svg"/>} title="Human Resource" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-extra02" />
            </div>

            <div className="col-lg-4 col-md-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
            <CategoryItem icon={<i className="icon-14"></i>} title="Sales Management" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-tertiary" />
            </div>

            <div className="col-lg-4 col-md-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
            <CategoryItem icon={<img src="/assets/images/svg-icons/instructor.svg" alt="Image Svg"/>} title="Communications" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-extra06" />
            </div>

            <div className="col-lg-4 col-md-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <CategoryItem icon={<i className="icon-15"></i>} title="Consulting" subtitle="Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod." clr="color-extra07" icon_cls='physical-activity' />
            </div>

        </div>
        <div className="service-btn">
            <a href="#" className="edu-btn">Get Start Today <i className="icon-4"></i></a>
        </div>
    </div>
    <ul className="shape-group">
        <li className="shape-1" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <img src="/assets/images/others/shape-47.png" alt="Shape"/>
        </li>
        <li className="shape-2" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <img className="rotateit" src="/assets/images/others/shape-38.png" alt="Shape"/>
        </li>
        <li className="shape-3 scene" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
            <span data-depth="2.5"></span>
        </li>
    </ul>
</div>
  );
};

export default CategoryArea;