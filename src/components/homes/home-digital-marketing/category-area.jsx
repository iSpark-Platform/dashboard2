import React from 'react';

function CategoryItem({title}) {
  return (
    <>
      <img className="features-icon" src="/assets/images/others/shape-62.png" alt=""/>
      <div className="feature-text">{title}</div>
    </>
  )
}

const CategoryArea = () => {
  return (
    <div className="features-area-9">
    <div className="features-wrapper">
        <div className="feature-wrap">
            <div className="features-track">
               <CategoryItem title="Digital Marketing" />
               <CategoryItem title="Strategy" />
               <CategoryItem title="seo" />
               <CategoryItem title="Get Course Access" />
               <CategoryItem title="Branding" />
               <CategoryItem title="Marketing" />
               <CategoryItem title="Social Media" />
               <CategoryItem title="Digital Marketing" />
               <CategoryItem title="Strategy" />
               <CategoryItem title="seo" />
               <CategoryItem title="Get Course Access" />
               <CategoryItem title="Branding" />
               <CategoryItem title="Marketing" />
               <CategoryItem title="Social Media" />
            </div>
        </div>
    </div>
</div>
  );
};

export default CategoryArea;