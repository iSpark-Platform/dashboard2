import React from 'react';
import Counter from '@/components/common/counter';

const counter_data = [
  {
      color: 'primary-color',
      delay: '50',
      count: 29.3,
      text: 'K',
      title: 'Student Enrolled',
      decimal: 1
  },
  {
      color: 'secondary-color',
      delay: '100',
      count: 32.4,
      text: 'K',
      title: 'Class Completed',
      decimal: 1
  },
  {
      color: 'extra02-color',
      delay: '150',
      count: 100,
      text: '%',
      title: 'Satisfaction Rate'
  },
  {
      color: 'extra05-color',
      delay: '200',
      count: 354,
      text: '+',
      title: 'Top Instructors'
  }
]

const CounterArea = () => {
  return (
    <div className="counterup-area-14">
    <div className="container">
        <div className="row g-5">
            {counter_data.map((c,i) => (
            <div key={i} className="col-lg-3 col-sm-6">
                <div className="edu-counterup counterup-style-14">
                    <h2 className={`counter-item count-number ${c.color}`}>
                      <span className="odometer">
                          <Counter number={parseFloat(c.count)} text={c.text} decimal={c.decimal} />
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