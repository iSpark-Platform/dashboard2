import React from 'react';

// single item 
function TestimonialItem({desc,user,name,designation}) {
  return (
    <div className="testimonial-slide testimonial-style-2 testimonial-style-18">
      <div className="content">
          <div className="rating-icon">
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
              <i className="icon-23"></i>
          </div>
          <p>{desc}</p>
          <div className="author-info">
              <div className="thumb">
                  <img src={`/assets/images/testimonial/${user}`} alt="Testimonial"/>
              </div>
              <div className="info">
                  <h5 className="title">{name}</h5>
                  <span className="subtitle">{designation}</span>
              </div>
          </div>
      </div>
  </div>
  )
}

const TestimonialArea = () => {
  return (
    <div className="testimonial-area-18 gap-top-equal">
      <div className="container">
          <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
              <span className="pre-title">Testimonials</span>
              <h2 className="title">What Our Students Have To Say</h2>
              <span className="shape-line"><i className="icon-19"></i></span>
          </div>
          <div className="testimonial-wrapper">
              <div className="testimonial-wrap">
                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-01.png" name="Haley Bennet" designation="Designer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-02.png" name="Megan Foxx" designation="Content Creator" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-03.png" name="Richard Gere" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-16.jpg" name="Martina Smith" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-17.jpg" name="Richard Gere" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-18.jpg" name="Lora Grace" designation="Developer" />
              </div>

              <div className="testimonial-wrap">

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-03.png" name="Richard Gere" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-02.png" name="Megan Foxx" designation="Content Creator" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-01.png" name="Haley Bennet" designation="Designer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-17.jpg" name="Richard Gere" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-16.jpg" name="Martina Smith" designation="Developer" />

                <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-18.jpg" name="Lora Grace" designation="Developer" />

              </div>
              <div className="testimonial-wrap">

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-03.png" name="Richard Gere" designation="Developer" />

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-01.png" name="Haley Bennet" designation="Designer" />

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-17.jpg" name="Richard Gere" designation="Developer" />

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-02.png" name="Megan Foxx" designation="Content Creator" />

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-18.jpg" name="Lora Grace" designation="Developer" />

                  <TestimonialItem desc='Lorem ipsum dolor amet consectur elit adicing elit sed mod tempor incididunt enim minim veniam quis nosrud citation laboris' user="testimonial-16.jpg" name="Martina Smith" designation="Developer" />

              </div>
          </div>
      </div>
    </div>
  );
};

export default TestimonialArea;