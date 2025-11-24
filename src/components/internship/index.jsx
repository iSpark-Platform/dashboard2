'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import CourseArea from './course-1-area';
import useParallax from '@/hooks/use-parallax';
import Internship from './internship';

const InternshipMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Internships" subtitle="Internship Details" />
                <Internship/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default InternshipMain;