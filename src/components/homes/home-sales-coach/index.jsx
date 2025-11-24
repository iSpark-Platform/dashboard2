"use client"
import React from "react";
import { Footer, HeaderSix } from "@/layout";
import HeroBanner from "./hero-banner";
import BrandArea from "./brand-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import WhyChoose from "./why-choose";
import CtaAdBanner from "./cta-ad-banner";
import TestimonialArea from "./testimonial-area";
import BlogArea from "./blog-area";
import useParallax from "@/hooks/use-parallax";


const HomeSalesCoachMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderSix cls="sales-coach-header" />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* brand area start */}
        <BrandArea />
        {/* brand area end */}

        {/* about area start */}
        <AboutArea />
        {/* about area end */}

        {/* course area start */}
        <CoursesArea />
        {/* course area end */}

        {/* why choose start */}
        <WhyChoose />
        {/* why choose end */}

        {/* ad banner start */}
        <CtaAdBanner />
        {/* ad banner end */}

        {/* testimonial start */}
        <TestimonialArea />
        {/* testimonial end */}

        {/* blog area start */}
        <BlogArea />
        {/* blog area end */}

        {/* footer start */}
        <Footer cls="footer-for-sales-coach footer-style-1" logo_white={true} />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeSalesCoachMain;
