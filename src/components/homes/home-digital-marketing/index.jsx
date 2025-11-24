"use client";
import React from "react";
import { Footer, FooterSix, HeaderThree } from "../../../layout";
import HeroBanner from "./hero-banner";
import CategoryArea from "./category-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import WhyChoose from "./why-choose";
import FaqArea from "./faq-area";
import TestimonialArea from "./testimonial-area";
import CtaAdBanner from "./cta-ad-banner";
import BlogArea from "../home/blog-area";
import BrandArea from "./brand-area";
import useParallax from "@/hooks/use-parallax";



const HomeDigitalMarketingMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <HeaderThree style_2={true} />
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

        {/* why choose start */}
        <WhyChoose />
        {/* why choose end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* testimonial area start */}
        <TestimonialArea />
        {/* testimonial area end */}

        {/* cta ad banner start */}
        <CtaAdBanner />
        {/* cta ad banner end */}

        {/* blog area start */}
        <BlogArea cls="digital-marketing-blog" style_4={true} />
        {/* blog area end */}

        {/* brand area start */}
        <BrandArea/>
        {/* brand area end */}

        {/* footer start */}
        <Footer cls="footer-for-digital-marketing footer-style-1" />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeDigitalMarketingMain;
