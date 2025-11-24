"use client"
import React from "react";
import { Footer, FooterFour, HeaderFour } from "@/layout";
import HeroArea from "./hero-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import TestimonialArea from "./testimonial-area";
import CounterArea from "../home-kitchen/counter-area";
import BrandArea from "../home/brand-area";
import GalleryArea from "./gallery-area";
import TeamArea from "./team-area";
import AdBanner from "../home/ad-banner";
import useParallax from "@/hooks/use-parallax";


const HomePhotographyMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}

        <div className="hero-banner hero-style-12 bg-image photography-banner">
          {/* hero area start */}
          <HeroArea />
          {/* hero area end */}
        </div>

          {/* about area start */}
          <AboutArea/>
          {/* about area end */}

          {/* course area start */}
          <CoursesArea/>
          {/* course area end */}

          {/* testimonial area start */}
          <TestimonialArea/>
          {/* testimonial area end */}

          {/* counter area start */}
          <CounterArea/>
          {/* counter area end */}

          {/* brand area start */}
          <BrandArea/>
          {/* brand area end */}

          {/* gallery area start */}
          <GalleryArea/>
          {/* gallery area end */}

          {/* team area start */}
          <TeamArea/>
          {/* team area end */}

          {/* ad banner start */}
          <AdBanner/>
          {/* ad banner end */}

          {/* footer start */}
          <FooterFour/>
          {/* footer end */}

      </div>
    </div>
  );
};

export default HomePhotographyMain;
