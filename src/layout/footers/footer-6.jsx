import React from 'react';
import FooterSocial from './component/footer-social';
import Link from 'next/link';

const FooterSix = () => {
  return (
    <footer className="edu-footer footer-lighten bg-image footer-style-1 footer-for-online-art">
      <div className="footer-top">
          <div className="container">
              <div className="row g-5">
                  <div className="col-lg-3 col-md-6">
                      <div className="edu-footer-widget">
                          <div className="logo">
                              <Link href="/">
                                  <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo"/>
                                  <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo"/>
                              </Link>
                          </div>
                          <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.</p>
                      </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                      <div className="edu-footer-widget explore-widget">
                          <h4 className="widget-title">Online Platform</h4>
                          <div className="inner">
                              <ul className="footer-link link-hover">
                                  <li><Link href="/about-1">About</Link></li>
                                  <li><Link href="/course-style-1">Courses</Link></li>
                                  <li><Link href="/team-1">Instructor</Link></li>
                                  <li><Link href="/event-grid">Events</Link></li>
                                  <li><Link href="/team-details">Instructor Profile</Link></li>
                                  <li><Link href="/purchase-guide">Purchase Guide</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-2 col-sm-6">
                      <div className="edu-footer-widget quick-link-widget">
                          <h4 className="widget-title">Links</h4>
                          <div className="inner">
                              <ul className="footer-link link-hover">
                                  <li><Link href="/contact-us">Contact Us</Link></li>
                                  <li><Link href="/gallery-grid">Gallery</Link></li>
                                  <li><Link href="/blog-standard">News & Articles</Link></li>
                                  <li><Link href="/faq">FAQ</Link></li>
                                  <li><Link href="/sign-in">Sign In/Registration</Link></li>
                                  <li><Link href="/coming-soon">Coming Soon</Link></li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
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
      </div>
      <div className="copyright-area">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="inner text-center">
                          <p>Copyright {new Date().getFullYear()} <a href="https://1.envato.market/5bQ022" target="_blank">EduBlink</a> Designed By <a href="https://1.envato.market/YgGJbj" target="_blank">DevsBlink</a>. All Rights Reserved</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
   </footer>
  );
};

export default FooterSix;