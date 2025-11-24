"use client";
import React from "react";
import { Footer, Header } from "../../../layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import CtaArea from "../home/cta-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import FaqArea from "./faq-area";
import BrandArea from "./brand-area";
import TestimonialArea from "./testimonial-area";
import CtaAdBanner from "./cta-ad-banner";
import BlogArea from "./blog-area";
import useParallax from "@/hooks/use-parallax";

const HomeProgrammingMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <Header
          no_top_bar={true}
          disable_category={true}
          header_style="7"
          disable_full_width={true}
        />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* category area start */}
        <CategoryArea />
        {/* category area end */}

        {/* cta area start */}
        <CtaArea />
        {/* cta area end */}

        {/* about area start */}
        <AboutArea/>
        {/* about area end */}

        {/* courses area start */}
        <CoursesArea/>
        {/* courses area end */}

        {/* faq area start */}
        <FaqArea/>
        {/* faq area end */}

        {/* brand area start */}
        <BrandArea/>
        {/* brand area end */}

        {/* testimonial area start */}
        <TestimonialArea/>
        {/* testimonial area end */}

        {/* cta ad banner start */}
        <CtaAdBanner/>
        {/* cta ad banner end */}

        {/* blog area start */}
        <BlogArea/>
        {/* blog area end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeProgrammingMain;
