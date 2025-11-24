"use client"
import React from "react";
import { Footer, HeaderSix } from "@/layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import CounterUpArea from "./counter-up-area";
import WhyChoose from "./why-choose";
import TeamArea from "./team-area";
import BrandArea from "../home-digital-marketing/brand-area";
import TestimonialArea from "./testimonial-area";
import PricingArea from "./pricing-area";
import AdBanner from "./ad-banner";
import useParallax from "@/hooks/use-parallax";


const HomeGymTrainingMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderSix cls="gym-tranning-header" logo_white={true} />
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

        {/* course area start */}
        <CoursesArea />
        {/* course area end */}

        {/* counter area start */}
        <CounterUpArea />
        {/* counter area end */}

        {/* why choose start */}
        <WhyChoose />
        {/* why choose end */}

        {/* team area start */}
        <TeamArea />
        {/* team area end */}

        {/* brand start */}
        <BrandArea b_num='13' />
        {/* brand end */}

        {/* testimonial area start */}
        <TestimonialArea />
        {/* testimonial area end */}

        {/* pricing area start */}
        <PricingArea />
        {/* pricing area end */}

        {/* cta ad banner start */}
        <AdBanner />
        {/* cta ad banner end */}

        {/* footer start */}
        <Footer style_2={'footer-dark bg-image footer-style-2'} />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeGymTrainingMain;
