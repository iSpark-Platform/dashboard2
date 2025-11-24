'use client'
import ImageLightBox from '@/components/common/popup-modal/image-lightbox';
import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const gallery_images = [
  '/assets/images/gallery/gallery-19.webp',
  '/assets/images/gallery/gallery-12.webp',
  '/assets/images/gallery/gallery-13.webp',
  '/assets/images/gallery/gallery-14.webp',
  '/assets/images/gallery/gallery-15.webp',
  '/assets/images/gallery/gallery-16.webp',
  '/assets/images/gallery/gallery-17.webp',
  '/assets/images/gallery/gallery-18.webp',
]

const GalleryArea = () => {
     // photoIndex
     const [photoIndex, setPhotoIndex] = useState(null);
     // image open state
     const [open, setOpen] = useState(false);
     // handleImagePopup
     const handleImagePopup = (index) => {
         setPhotoIndex(index)
         setOpen(true)
     }
  return (
    <>
    <div className="edu-gallery-area photography-gallery">
    <div className="container-fluid">
        <div id="masonry-gallery" className="gallery-grid-wrap">
            <div id="animated-thumbnials">

            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2,992:3,1200:4 }} >
              <Masonry gutter="30px">
                  {gallery_images.map((img, i) => (
                      <div key={i} onClick={() => handleImagePopup(i)} className="edu-popup-image edu-gallery-grid p-gallery-grid-wrap masonry-item p-0" style={{ cursor: 'pointer' }}>
                        <div className="thumbnail">
                          <img src={img} alt="Gallery Image"/>
                        </div>
                        <div className="zoom-icon">
                            <i className="icon-69"></i>
                        </div>
                      </div>
                  ))}
              </Masonry>
          </ResponsiveMasonry>

            </div>
        </div>
       </div>
    </div>

     {/* image light box start */}
     <ImageLightBox images={gallery_images} open={open} setOpen={setOpen}
          photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
      {/* image light box end */}
    </>
  );
};

export default GalleryArea;