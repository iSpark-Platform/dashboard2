"use client"
import React from "react";
import { Footer, HeaderFive } from "@/layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import CoursesArea from "./courses-area";
import FaqArea from "./faq-area";
import TestimonialArea from "./testimonial-area";
import CounterUpArea from "./counter-up-area";
import BrandArea from "../home/brand-area";
import EventArea from "../home-university/event-area";
import AdBanner from "../home-remote-training/ad-banner";
import useParallax from "@/hooks/use-parallax";



const HomeBusinessCoachMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderFive />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* category area start */}
        <CategoryArea />
        {/* category area end */}

        {/* courses area start */}
        <CoursesArea />
        {/* courses area end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* testimonial area start */}
        <TestimonialArea />
        {/* testimonial area end */}

        {/* counter area start */}
        <CounterUpArea />
        {/* counter area end */}

        {/* brand area start */}
        <BrandArea />
        {/* brand area end */}

        {/* event area start */}
        <EventArea e_business={true} />
        {/* event area end */}

        {/* ad banner start */}
        <AdBanner />
        {/* ad banner end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}

      </div>
    </div>
  );
};

export default HomeBusinessCoachMain;
