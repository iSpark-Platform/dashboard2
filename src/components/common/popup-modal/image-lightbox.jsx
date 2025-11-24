import React from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';

const ImageLightBox = ({images, open, setOpen, photoIndex, setPhotoIndex}) => {
    if (!open || !images || images.length === 0) return null;
    
    return (
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
            imageLoadErrorMessage="Failed to load image"
            enableZoom={true}
            animationDuration={0}
            animationDisabled={true}
        />
    );
}

export default ImageLightBox;