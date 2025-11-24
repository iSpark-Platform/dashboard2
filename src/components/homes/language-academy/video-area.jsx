'use client'
import React from 'react';
import useModal from '@/hooks/use-modal';
import VideoModal from '@/components/common/popup-modal/video-modal';

function VideoThumb({img,video_id,cls=''}) {
  const { isVideoOpen, setIsVideoOpen } = useModal();
  return (
    <>
     <div className="video-gallery">
        <div className={`thumbnail ${cls}`}>
          <img src={`/assets/images/others/video-${img}.webp`} alt="Thumb" />
          <a onClick={() => setIsVideoOpen(true)} className="video-play-btn video-popup-activation cursor-pointer">
            <i className="icon-18"></i>
          </a>
        </div>
      </div>
      {/* video modal start */}
      <VideoModal isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={video_id} />
      {/* video modal end */}
    </>
  )
}

const VideoArea = () => {
  return (
    <>
      <div className="video-area-5 gap-bottom-equal">
        <div className="container">
          <div className="row g-5 justify-content-center">
            <div className="col-lg-6">
              <VideoThumb img="5" video_id='m2m5Xx5T4No' />
            </div>
            <div className="col-lg-6">
            <VideoThumb img="6" cls='thumbnail-2' video_id='iC_c6wQZHxo' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoArea;