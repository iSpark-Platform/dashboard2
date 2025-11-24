'use client'
import { Footer, Header } from '@/layout';
import React from 'react';
import Link from 'next/link';
import BreadcrumbThree from '../breadcrumb/breadcrumb-3';
import useParallax from '@/hooks/use-parallax';

const ErrorArea = () => {
  useParallax();
  return (
    <>
      <Header no_top_bar={true} />
      <BreadcrumbThree title="Error-404" subtitle="Error-404" />

      <section className="section-gap-equal error-page-area">
        <div className="container">
          <div className="edu-error">
            <div className="thumbnail">
              <img src="/assets/images/others/404.png" alt="404 Error" />
              <ul className="shape-group">
                <li className="shape-1 scene">
                  <img data-depth="2" src="/assets/images/about/shape-25.png" alt="Shape" />
                </li>
                <li className="shape-2 scene">
                  <img data-depth="-2" src="/assets/images/about/shape-15.png" alt="Shape" />
                </li>
                <li className="shape-3 scene">
                  <img data-depth="2" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-4 scene">
                  <img data-depth="-2" src="/assets/images/counterup/shape-02.png" alt="Shape" />
                </li>
              </ul>
            </div>
            <div className="content">
              <h2 className="title">404 - Page Not Found</h2>
              <h4 className="subtitle">The page you are looking for does not exist.</h4>
              <Link href="/" className="edu-btn">
                <i className="icon-west"></i>Back to Homepage
              </Link>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1">
            <img src="/assets/images/others/map-shape-2.png" alt="Shape" />
          </li>
        </ul>
      </section>
      <Footer style_2={'footer-dark bg-image footer-style-2'} />
    </>
  );
};

export default ErrorArea;