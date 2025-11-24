'use client';
import React,{useState} from 'react';
import Link from 'next/link';
import MainMenu from './component/main-menu';
import OffCanvas from '@/components/common/sidebar/off-canvas';
import useSticky from '@/hooks/use-sticky';

const HeaderSeven = ({cls}) => {
  const { sticky } = useSticky();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={`edu-header header-style-7 no-topbar ${cls}`}>
      <div id="edu-sticky-placeholder"></div>
      <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
        <div className="container-fluid">
          <div className="header-navbar">
            <div className="header-brand">
              <div className="logo">
                <Link href="/">
                  <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                  <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt="Corporate Logo" />
                </Link>
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
                <li className="header-btn">
                  <Link href="/contact-us" className="edu-btn btn-medium">Try Now <i className="icon-4"></i></Link>
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

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}

    </header>
  );
};

export default HeaderSeven;