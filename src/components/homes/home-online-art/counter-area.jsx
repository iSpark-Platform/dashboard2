import Counter from '@/components/common/counter';
import React from 'react';

const counter_data = [
  {
    color: 'primary-color',
    count: 19,
    text: 'K',
    title: 'Student',
  },
  {
    color: 'secondary-color',
    count: 12,
    text: 'K',
    title: 'Classes'
  },
  {
    color: 'extra02-color',
    count: 99,
    text: '%',
    title: 'Successful'
  },
  {
    color: 'extra05-color',
    count: 300,
    text: '%',
    title: 'Instructors'
  }
]

const CounterArea = () => {
  return (
    <div className="counterup-area-15">
      <div className="container">
        <div className="row g-5">
          {counter_data.map((c, i) => (
            <div key={i} className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="edu-counterup counterup-style-15">
                <h2 className={`counter-item count-number ${c.color}`}>
                  <span className="odometer">
                    <Counter number={parseFloat(c.count)} text={c.text}/>
                  </span>
                </h2>
                <h6 className="title">{c.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;