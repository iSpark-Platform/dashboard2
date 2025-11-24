import React from 'react';
import Link from 'next/link';
import FooterSocial from './component/footer-social';

const FooterFive = () => {
  return (
    <footer className="edu-footer footer-health-coach footer-style-7">
      <div className="footer-top">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="edu-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                    <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" />
                  </Link>
                </div>
                <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget explore-widget">
                <h4 className="widget-title">Link</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/about-1">About</Link></li>
                    <li><Link href="/course-style-1">Services</Link></li>
                    <li><Link href="/team-1">Courses</Link></li>
                    <li><Link href="/event-grid">Instructor</Link></li>
                    <li><Link href="/team-details">Events</Link></li>
                    <li><Link href="/purchase-guide">Become a Teacher</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget quick-link-widget">
                <h4 className="widget-title">Services</h4>
                <div className="inner">
                  <ul className="footer-link link-hover">
                    <li><Link href="/contact-us">Library</Link></li>
                    <li><Link href="/gallery-grid">Gallery</Link></li>
                    <li><Link href="/blog-standard">Partner</Link></li>
                    <li><Link href="/faq">Jobs</Link></li>
                    <li><Link href="/sign-in">Location</Link></li>
                    <li><Link href="/coming-soon">News & Article</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="edu-footer-widget">
                <h4 className="widget-title">Contacts</h4>
                <div className="inner">
                  <p className="description">Enter your email address to register to our newsletter subscription</p>
                  <div className="widget-information">
                    <ul className="information-list">
                      <li><span>Add:</span>70-80 Upper St Norwich NR2</li>
                      <li><span>Call:</span><a href="tel:+011235641231">+01 123 5641 231</a></li>
                      <li><span>Email:</span><a href="mailto:info@edublink.com" target="_blank">info@edublink.com</a></li>
                    </ul>
                  </div>
                  <ul className="social-share icon-transparent">
                    <FooterSocial />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group">
          <li className="shape-1 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
            <img data-depth="-2" src="/assets/images/others/health-shape-33.png" alt="shape" />
          </li>
          <li className="shape-2 scene" data-sal-delay="100" data-sal="fade" data-sal-duration="1000">
            <img data-depth="2" src="/assets/images/others/health-shape-35.png" alt="shape" />
          </li>
        </ul>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-center">
                <p><a href="https://1.envato.market/5bQ022" target="_blank">EduBlink</a> @ All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;