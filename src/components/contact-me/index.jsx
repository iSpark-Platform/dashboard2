'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import ContactMeArea from './contact-me-area';
import ContactMeFormArea from './contact-me-form-area';
import useParallax from '@/hooks/use-parallax';

const ContactMeMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Contact Me" subtitle="Contact Me" />
                <ContactMeArea/>
                <ContactMeFormArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default ContactMeMain;