"use client"
import React from "react";
import { Footer, HeaderSeven } from "@/layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import FaqArea from "./faq-area";
import TeamArea from "./team-area";
import BrandArea from "./brand-area";
import BlogArea from "./blog-area";
import useParallax from "@/hooks/use-parallax";


const HomeQuranLearningMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderSeven />
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

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* team area start */}
        <TeamArea />
        {/* team area end */}

        {/* brand start */}
        <BrandArea />
        {/* brand end */}

        {/* blog area start */}
        <BlogArea />
        {/* blog area end */}

        {/* footer start */}
        <Footer cls="footer-for-quran-learning footer-style-1" />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeQuranLearningMain;
