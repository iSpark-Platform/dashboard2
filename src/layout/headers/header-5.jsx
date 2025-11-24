'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import MainMenu from './component/main-menu';
import useSticky from '@/hooks/use-sticky';
import useCartInfo from '@/hooks/use-cart-info';
import SearchPopup from '@/components/common/popup-modal/search-popup';
import OffCanvas from '@/components/common/sidebar/off-canvas';

const HeaderFive = ({cls='header-business',dark_logo=false}) => {
  const { sticky } = useSticky();
  const { quantity } = useCartInfo();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <header className={`edu-header header-style-7 no-topbar ${cls}`}>
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
            <div className="container-fluid">
                <div className="header-navbar">
                    <div className="header-brand">
                        <div className="logo">
                            {!dark_logo && <Link href="/">
                                <img className="logo-light" src="/assets/images/logo/business-logo-white.png" alt="Corporate Logo"/>
                                <img className="logo-dark" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo"/>
                            </Link>}
                            {dark_logo && <Link href="/">
                                <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo"/>
                                <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo"/>
                            </Link>}
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
                            <li className="icon cart-icon">
                                <Link href="/cart" className="cart-icon">
                                    <i className="icon-3"></i>
                                    <span className="count">{quantity}</span>
                                </Link>
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
    </header>

    {/* <!-- Start Search Popup  --> */}
    <SearchPopup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
     {/* <!-- End Search Popup  --> */}

     {/* sidebar start */}
     <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
     {/* sidebar end */}
    </>
  );
};

export default HeaderFive;