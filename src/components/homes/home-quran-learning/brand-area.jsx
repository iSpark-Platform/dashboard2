import React from 'react';

// progressbar 
function SingleProgress({id,width}) {
  return (
    <div className={`progressbar-${id}`}>
      <div className="progressbar" style={{ width: '100%', borderRadius: '5px' }}>
        <div className="proggress" style={{ height: '10px', borderRadius: '5px', width: `${width}%` }}>
          <div className="indicator" style={{ overflow: 'visible' }}></div>
        </div>
      </div>
      <div className="percentCount">{width}%</div>
    </div>
  )
}

const BrandArea = () => {
  return (
    <div className="edu-expart-area expert-area-1 section-gap-equal">
        <div className="container edublink-animated-shape">
            <div className="row g-5">
                <div className="col-lg-6 col-md-6">
                    <div className="expert-section-heading">
                        <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <span className="pre-title color-secondary">Our Expertise</span>
                            <h2 className="title"> <span className="text-gradient">Quran Learning</span> was Never Been So Easy!</h2>
                            <span className="shape-line"><i className="icon-19"></i></span>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Donec felis suscipit mi urna nulla at tincidunt feugiat vulputate.
                                Ante facilisis face pellentesque quis egestas metus.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="expert-progressbar" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                        <div className="single-progressbar">
                            <p className="progress-title">Basic Quran Learning with Tajweed</p>
                            <SingleProgress id="one" width={80} />
                        </div>
                        <div className="single-progressbar">
                            <p className="progress-title">Online Quran Class for Tajweed</p>
                            <SingleProgress id="two" width={90} />
                        </div>
                        <div className="single-progressbar">
                            <p className="progress-title">Learning Quran for Kids & Adults</p>
                            <SingleProgress id="three" width={70} />
                        </div>
                        <div className="single-progressbar last-ber">
                            <p className="progress-title">Memorize Quran Online</p>
                            <SingleProgress id="four" width={85} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BrandArea;