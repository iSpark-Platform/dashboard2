'use client'
import React from 'react';
import { Footer, HeaderThree } from '../../../layout';
import HeroBanner from './hero-banner';
import CategoryArea from './category-area';
import AboutArea from './about-area';
import CoursesArea from './courses-area';
import FaqArea from './faq-area';
import TestimonialArea from './testimonial-area';
import VideoArea from './video-area';
import { CounterItems } from '../home-online-academy/counter-area';
import BlogArea from '../home/blog-area';
import useParallax from '@/hooks/use-parallax';

const HomeLanguageAcademyMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                {/* header start */}
                <HeaderThree style_2={true}/>
                {/* header end */}

                {/* hero banner start */}
                <HeroBanner/>
                {/* hero banner end */}

                {/* category start */}
                <CategoryArea/>
                {/* category end */}

                {/* about area start */}
                <AboutArea/>
                {/* about area end */}

                {/* course area start */}
                <CoursesArea/>
                {/* course area end */}

                {/* faq area start */}
                <FaqArea/>
                {/* faq area end */}

                {/* testimonial area start */}
                <TestimonialArea/>
                {/* testimonial area end */}

                {/* video area start */}
                <VideoArea/>
                {/* video area end */}

                {/* counter area start */}
                <div className="counterup-area-12">
                    <div className="container">
                        <div className="row g-5">
                            <CounterItems count_style='12' />
                        </div>
                    </div>
                </div>
                {/* counter area end */}

                {/* blog area start */}
                <BlogArea/>
                {/* blog area end */}

                {/* footer start */}
                <Footer/>
                {/* footer end */}
            </div>
        </div>
    )
}

export default HomeLanguageAcademyMain;