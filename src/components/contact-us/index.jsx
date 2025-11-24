'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import ContactMap from './contact-map';
import ContactUsArea from './contact-us-area';
import useParallax from '@/hooks/use-parallax';


const ContactUsMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Contact Us" subtitle="Contact Us" />
                <ContactUsArea/>
                <ContactMap/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default ContactUsMain;