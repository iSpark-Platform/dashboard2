import React from 'react';

function CategoryItem({icon,title,subtitle,cls}) {
    return (
    <div className="features-box features-style-6">
        <div className={`icon ${cls}`}>
            <img className="svgInject" src={`/assets/images/svg-icons/${icon}`} alt="animated icon"/>
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
    <div className="features-area-6">
    <div className="container edublink-animated-shape">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title pre-textsecondary">features</span>
            <h2 className="title">Explore Yourself All Over The World</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
            <p>Consectetur adipiscing elit sed do eiusmod tempor.</p>
        </div>
        <div className="features-grid-wrap">
            <CategoryItem icon="online-class.svg" title="80+ Online Courses" subtitle="Lorem ipsum dolor sit amet cont adipiscing elit." cls="icon-course" />
            <CategoryItem icon="instructor.svg" title="Top Instructors" subtitle="Lorem ipsum dolor sit amet cont adipiscing elit." cls="icon-tag" />
            <CategoryItem icon="certificate.svg" title="Online Certificates" subtitle="Lorem ipsum dolor sit amet cont adipiscing elit." cls="certificate icon-certificate" />
            <CategoryItem icon="user.svg" title="6000k+ Members" subtitle="Lorem ipsum dolor sit amet cont adipiscing elit." cls="icon-member" />
        </div>
        <ul className="shape-group">
            <li className="shape-1 sal-animate" data-sal-delay="1000" data-sal="fade" data-sal-duration="1000">
                <img className="rotateit" src="/assets/images/about/shape-37.png" alt="Shape"/>
            </li>
            <li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                <img src="/assets/images/others/shape-41.png" alt="Shape"/>
            </li>
        </ul>
    </div>
</div>
  );
};

export default CategoryArea;