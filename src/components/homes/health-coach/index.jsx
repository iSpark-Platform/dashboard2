'use client'
import React from 'react';
import { Header } from '@/layout';
import HeroBanner from './hero-banner';
import FeatureArea from './feature-area';
import AboutArea from './about-area';
import CategoryArea from './category-area';
import CourseArea from './course-area';
import TestimonialArea from './testimonial-area';
import CounterArea from '../home-yoga-instructor/counter-area';
import EventArea from '../home-university/event-area';
import AdBanner from './ad-banner';
import FooterFive from '@/layout/footers/footer-5';
import useParallax from '@/hooks/use-parallax';

const HealthCoachMain = () => {
  useParallax();
  return (
    <div className='sticky-header'>
      <div id="main-wrapper" className="main-wrapper">
        {/* header start */}
        <Header no_top_bar={true} />
        {/* header end */}

        {/* hero banner start */}
        <HeroBanner/>
        {/* hero banner end */}

        {/* feature area start */}
        <FeatureArea/>
        {/* feature area end */}

        {/* about area start */}
        <AboutArea/>
        {/* about area end */}

        {/* category area start */}
        <CategoryArea/>
        {/* category area end */}

        {/* course area start */}
        <CourseArea/>
        {/* course area end */}

        {/* testimonial area start */}
        <TestimonialArea/>
        {/* testimonial area end */}

        {/* counter area start */}
        <CounterArea style_2={true}/>
        {/* counter area end */}

        {/* event area start */}
        <EventArea event_4={true}/>
        {/* event area end */}

        {/* ad banner start */}
        <AdBanner/>
        {/* ad banner end */}

        {/* footer start */}
        <FooterFive/>
        {/* footer end */}
      </div>
    </div>
  );
};

export default HealthCoachMain;