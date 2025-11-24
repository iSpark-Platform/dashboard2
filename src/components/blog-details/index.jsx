'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import AdBanner from '../homes/home/ad-banner';
import BlogDetailsArea from './blog-details-area';
import useParallax from '@/hooks/use-parallax';


const BlogDetailsMain = ({blog}) => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Blog Details" subtitle="Blog Details" />
                <BlogDetailsArea blog={blog}/>
                <AdBanner/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default BlogDetailsMain;