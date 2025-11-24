import React from 'react';

const brand_images = [
    '/assets/images/brand/brand-01.png',
    '/assets/images/brand/brand-02.png',
    '/assets/images/brand/brand-03.png',
    '/assets/images/brand/brand-04.png',
    '/assets/images/brand/brand-05.png',
    '/assets/images/brand/brand-06.png'
]

const BrandArea = () => {
    return (
        <div className="edu-brand-area brand-area-2 bg-image">
            <div className="container edublink-animated-shape">
                <div className="brand-grid-wrap brand-style-2"> 
                    {brand_images.map((img, i) => ( 
                        <div key={i} className="brand-grid">
                            <img src={img} alt="Brand Logo" />
                        </div> 
                    ))} 
                </div>
                <ul className="shape-group">
                    <li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                        <img data-depth="-2" src="/assets/images/about/shape-37.png" alt="Shape" />
                    </li>
                </ul>
            </div>
            <ul className="shape-group">
                <li className="shape-2 scene shape-light" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-2" src="/assets/images/about/shape-41.png" alt="Shape" />
                </li>
                <li className="shape-2 scene shape-dark" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                    <img data-depth="-2" src="/assets/images/about/dark-shape-41.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default BrandArea;