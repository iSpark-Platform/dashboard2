"use client";
import React from "react";
import { FooterSix, Header } from "../../../layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import FaqArea from "./faq-area";
import CounterArea from "./counter-area";
import TestimonialArea from "./testimonial-area";
import CtaAdBanner from "./cta-ad-banner";
import useParallax from "@/hooks/use-parallax";


const HomeOnlineArtMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <Header no_top_bar={true} />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* category area start */}
        <CategoryArea />
        {/* category area end */}

        {/* about area start */}
        <AboutArea />
        {/* about area end */}

        {/* courses area start */}
        <CoursesArea />
        {/* courses area end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* counter area start */}
        <CounterArea/>
        {/* counter area end */}

        {/* testimonial area start */}
        <TestimonialArea/>
        {/* testimonial area end */}

        {/* cta ad banner start */}
        <CtaAdBanner/>
        {/* cta ad banner end */}

        {/* footer start */}
        <FooterSix/>
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeOnlineArtMain;
