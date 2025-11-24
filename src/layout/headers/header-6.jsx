'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import MainMenu from './component/main-menu';
import useSticky from '@/hooks/use-sticky';
import SearchPopup from '@/components/common/popup-modal/search-popup';
import OffCanvas from '@/components/common/sidebar/off-canvas';

const HeaderSix = ({ cls = '', logo_white = false }) => {
  const { sticky } = useSticky();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`edu-header header-style-2 ${cls}`}>
      <div id="edu-sticky-placeholder"></div>
      <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
        <div className="container">
          <div className="header-navbar">
            <div className="header-brand">
              <div className="logo">
                {!logo_white &&
                  <Link href="/">
                    <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                    <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" />
                  </Link>
                }
                {logo_white &&
                  <Link href="/">
                    <img className="logo-light" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" />
                    <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                  </Link>
                }
              </div>
            </div>
            <div className="header-mainnav">
              <nav className="mainmenu-nav">
                {/* nav menus */}
                <MainMenu />
                {/* nav menus */}
              </nav>
            </div>
            <div className="header-right">
              <ul className="header-action">
                <li className="icon search-icon">
                  <a onClick={() => setIsSearchOpen(true)} className="search-trigger cursor-pointer">
                    <i className="icon-2"></i>
                  </a>
                </li>
                <li className="header-btn">
                  <Link href="/login" className="edu-btn btn-medium">Try Now <i className="icon-4"></i></Link>
                </li>
                <li className="mobile-menu-bar d-block d-xl-none">
                  <button onClick={() => setIsOpen(true)} className="hamberger-button">
                    <i className="icon-54"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Start Search Popup  --> */}
      <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      {/* <!-- End Search Popup  --> */}

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </header>
  );
};

export default HeaderSix;