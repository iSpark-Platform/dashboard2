"use client"
import React from "react";
import { Footer, Header } from "@/layout";
import HeroBanner from "./hero-banner";
import { CounterItems } from "../home-online-academy/counter-area";
import AboutArea from "./about-area";
import CoursesArea from "./courses-area";
import BrandArea from "../home/brand-area";
import Testimonial from "./testimonial";
import FaqArea from "./faq-area";
import AdBanner from "./ad-banner";
import BlogArea from "../home/blog-area";
import useParallax from "@/hooks/use-parallax";

const HomeRemoteTrainingMain = () => {
  useParallax();
  return (
    <div className="sticky-header">
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <Header
          no_top_bar={true}
          header_style="7"
          disable_full_width={true}
          disable_category={true}
          cls="remote-training"
        />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner />
        {/* hero banner end */}

        {/* about counter up and courses area start*/}
        <div className="about-counterup gap-top-equal">
          {/* counter area start */}
          <div className="counterup-area-12">
            <div className="container">
              <div className="row g-5">
                <CounterItems count_style="12" />
              </div>
            </div>
          </div>
          {/* counter area end */}

          {/* about area start */}
          <AboutArea />
          {/* about area end */}

          {/* course area start */}
          <CoursesArea />
          {/* course area end */}
        </div>
        {/* about counter up and courses area end */}

        {/* brand area start */}
        <BrandArea cls="section-gap-equal remote-brand" />
        {/* brand area end */}

        {/* testimonial start */}
        <Testimonial />
        {/* testimonial end */}

        {/* faq area start */}
        <FaqArea />
        {/* faq area end */}

        {/* ad banner start */}
        <AdBanner />
        {/* ad banner end */}

        {/* blog area start */}
        <BlogArea style_3={true} />
        {/* blog area end */}

        {/* footer start */}
        <Footer />
        {/* footer end */}
      </div>
    </div>
  );
};

export default HomeRemoteTrainingMain;
