import React from 'react';

const BrandArea = ({b_num='11'}) => {
  return (
    <div className={`edu-brand-area brand-area-${b_num} gap-bottom-equal`}>
      <div className="container">
        <div className="brand-grid-wrap brand-style-2">
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-01.png" alt="Brand Logo" />
          </div>
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-02.png" alt="Brand Logo" />
          </div>
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-03.png" alt="Brand Logo" />
          </div>
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-04.png" alt="Brand Logo" />
          </div>
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-05.png" alt="Brand Logo" />
          </div>
          <div className="brand-grid">
            <img src="/assets/images/brand/brand-06.png" alt="Brand Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandArea;