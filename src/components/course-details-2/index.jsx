'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import CourseBreadcrumb from '../breadcrumb/breadcrumb-5';
import CourseDetailsTwo from './course-details-two';
import useParallax from '@/hooks/use-parallax';

const CourseDetailsTwoMain = ({course}) => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <CourseBreadcrumb course={course} subtitle="Course Details" />
                <CourseDetailsTwo course={course} />
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default CourseDetailsTwoMain;