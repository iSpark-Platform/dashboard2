import React from 'react';
import ModalVideo from 'react-modal-video';

const VideoModal = ({isVideoOpen,setIsVideoOpen,videoId = "m2m5Xx5T4No"}) => {
    return (
        <ModalVideo 
            channel='youtube' 
            autoplay isOpen={isVideoOpen} 
            videoId={videoId} 
            onClose={() => setIsVideoOpen(false)} 
        />
    )
}

export default VideoModal;