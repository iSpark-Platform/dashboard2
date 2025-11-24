"use client"
import React from "react";
import { Footer, HeaderFive } from "@/layout";
import HeroBanner from "./hero-banner";
import CounterArea from "./counter-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import TestimonialArea from "./testimonial-area";
import AdBanner from "./ad-banner";
import BrandArea from "../home-modern-schooling/brand-area";
import BlogArea from "../home-modern-schooling/blog-area";
import useParallax from "@/hooks/use-parallax";



const HomeMotivationMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderFive cls="header-motivation" dark_logo={true} />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner/>
        {/* hero banner end */}

        {/* counter area start */}
        <CounterArea/>
        {/* counter area end */}

        {/* about area start */}
        <AboutArea/>
        {/* about area ens */}

        {/* course area start */}
        <CoursesArea/>
        {/* course area end */}

        {/* testimonial area start */}
        <TestimonialArea/>
        {/* testimonial area end */}

        {/* ad banner start */}
        <AdBanner/>
        {/* ad banner end */}

        {/* brand area start */}
        <BrandArea cls="brand-motivition" />
        {/* brand area end */}

        {/* blog start */}
        <BlogArea/>
        {/* blog end */}

        {/* footer start */}
        <Footer/>
        {/* footer end */}

      </div>
    </div>
  );
};

export default HomeMotivationMain;
