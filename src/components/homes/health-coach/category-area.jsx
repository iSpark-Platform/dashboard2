import React from 'react';

// category item 
function CategoryItem ({delay,clr,icon,title,icon_img}) {
  return (
    <div className="col-lg-4 col-md-6" data-sal-delay={delay} data-sal="slide-up" data-sal-duration="800">
        <div className={`categorie-grid categorie-style-5 color-${clr} edublink-svg-animate`}>
            <div className="icon">
                {!icon_img && <i className={`icon-${icon}`}></i>}
                {icon_img && <img src={`/assets/images/svg-icons/icon-${icon_img}.svg`} alt="Image Svg"/>}
            </div>
            <div className="content">
                <h5 className="title">{title}</h5>
                <p>Lorem ipsum dolor amet ex consecturs adipiscing elit sed eiusmod.</p>
            </div>
        </div>
    </div>
  )
}

const CategoryArea = () => {
  return (
    <div className="edu-categorie-area categorie-area-5 edu-section-gap">
    <div className="container">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title">Health Guide</span>
            <h2 className="title">The Ultimate Guide to Upgrading <br/> Your Coaching </h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
        <div className="row g-5">
          <CategoryItem delay='50' clr='primary' icon='83' title='Daily Excersize' />
          <CategoryItem delay='100' clr='secondary' icon='81' title='Personal Program' />
          <CategoryItem delay='150' clr='extra08' icon='78' title='Natural Process' />
          <CategoryItem delay='50' clr='tertiary' icon_img="04" title='Improving Health' />
          <CategoryItem delay='100' clr='extra02' icon_img="05" title='Immune System' />
          <CategoryItem delay='150' clr='extra07' icon="39" title='Physical Activity' />
        </div>
    </div>
</div>
  );
};

export default CategoryArea;