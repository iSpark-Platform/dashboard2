import Counter from '@/components/common/counter';
import React from 'react';

const counter_data = [
  { icon: 'icon-77', count: 29.3, text: 'K', title: 'Student Enrolled', decimal: 1 },
  { icon: 'icon-78', count: 32.4, text: 'K', title: 'Class Completed', decimal: 1 },
  { icon: 'icon-79', count: 100, text: '%', title: 'Satisfaction Rate' },
  { icon: 'icon-80', count: 354, text: '+', title: 'Top Instructors' }
]

const CounterUpArea = () => {
  return (
    <div className="counterup-area-6">
    <div className="container">
        <div className="row g-5">
         {counter_data.map((count, i) => (
            <div key={i} className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="edu-counterup counterup-style-6">
                    <h2 className="counter-item count-number">
                    <span className="odometer">
                        <Counter number={parseFloat(count.count)} text={count.text} decimal={count.decimal} />
                    </span>
                    </h2>
                    <h6 className="title">{count.title}</h6>
                </div>
            </div>
        ))}
        </div>
    </div>
</div>
  );
};

export default CounterUpArea;