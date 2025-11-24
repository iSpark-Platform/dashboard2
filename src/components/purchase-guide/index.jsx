'use client'
import React from 'react';
import { Footer, Header } from '../../layout';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import PurchaseArea from './purchase-area';
import useParallax from '@/hooks/use-parallax';

const PurchaseGuideMain = () => {
    useParallax();
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header no_top_bar={true} />
                <BreadcrumbThree title="Purchase Guide" subtitle="Purchase Guide" />
                <PurchaseArea/>
                <Footer style_2={'footer-dark bg-image footer-style-2'} />
            </div>
        </div>
    )
}

export default PurchaseGuideMain;