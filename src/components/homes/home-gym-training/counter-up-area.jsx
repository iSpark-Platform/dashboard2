import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar';


// progress bar
function Progressbar({value,title}) {
  return (
    <div className="edu-counterup counterup-style-16">
      <div className="radial-progress-single d-flex align-items-center justify-content-center">
        <div style={{ width: 170, height: 170 }}>
          <CircularProgressbar value={value} text={`${value}%`} strokeWidth={6} />
        </div>
      </div>
      <h5>{title}</h5>
  </div>
  )
}


const CounterUpArea = () => {
  return (
    <div className="counterup-area-16">
      <div className="container">
          <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                 <Progressbar value={80} title="Fitness" />
              </div>
              <div className="col-lg-3 col-md-6">
                <Progressbar value={70} title="Nutrition" />
              </div>
              <div className="col-lg-3 col-md-6">
               <Progressbar value={90} title="Running" />
              </div>
              <div className="col-lg-3 col-md-6">
               <Progressbar value={65} title="Cardio" />
              </div>
          </div>
      </div>
  </div>
  );
};

export default CounterUpArea;