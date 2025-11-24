import React from 'react';

// single category 
function SingleCategory({img,title}) {
  return (
    <div className="features-box features-style-7">
        <div className="content">
            <h5 className="title">{title}</h5>
            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor enim minim veniam quis.</p>
        </div>
        <div className="thumbanil">
            <img src={`/assets/images/features/${img}`} alt="images"/>
        </div>
    </div>
  )
}

const CategoryArea = () => {
  return (
     <div className="features-area-7 section-gap-equal">
          <div className="container">
              <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                  <span className="pre-title pre-textsecondary">features</span>
                  <h2 className="title">Emerging Technologies and Trends in <br/> Software Development</h2>
                  <span className="shape-line"><i className="icon-19"></i></span>
              </div>
              <div className="features-grid-wrap-2">
                <SingleCategory img="featrues-img-01.webp" title="Web Development" />
                <SingleCategory img="featrues-img-02.webp" title="Top Instructors" />
                <SingleCategory img="featrues-img-03.webp" title="Online Certificates" />
              </div>
          </div>
      </div>
  );
};

export default CategoryArea;