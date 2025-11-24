"use client";
import React, { useState } from "react";

// data
const category_data = [
  { icon: "featrues-img-04.webp", title: "Online Courses" },
  { icon: "featrues-img-05.webp", title: "Anywhere Teaching" },
  { icon: "featrues-img-06.webp", title: "One To One Course" },
];

const CategoryArea = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleMouseOver = (value) => {
    setActiveIndex(value);
  };

  const handleMouseOut = (value) => {
    setActiveIndex(value);
  };
  return (
    <div className="features-area-8 section-gap-equal">
      <div className="container">
        <div
          className="section-title section-center"
          data-sal-delay="150"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          <span className="pre-title pre-textsecondary">features</span>
          <h2 className="title">
            Digital Art and Design: Creating Art <br /> with Technology
          </h2>
          <span className="shape-line">
            <i className="icon-19"></i>
          </span>
        </div>
        <div className="features-grid-wrap-2">
          {category_data.map((c, i) => (
            <div
              key={i}
              className={`features-box features-style-8 feature-card ${activeIndex === i ?"active":""}`}
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={() => handleMouseOut(i)}
            >
              <div className="thumbanil">
                <img src={`/assets/images/features/${c.icon}`} alt="images" />
              </div>
              <div className="content">
                <h5 className="title">{c.title}</h5>
                <p>
                  Lorem ipsum dolor consec tur elit adicing sed umod tempor enim
                  minim veniam quis.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryArea;
