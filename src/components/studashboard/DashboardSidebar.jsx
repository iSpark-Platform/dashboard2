"use client";
import React, { useState, useRef, useEffect } from 'react';
import { 
  FiHome, 
  FiRadio, 
  FiCompass, 
  FiGrid, 
  FiCheckSquare, 
  FiUser, 
  FiBell,
  FiSettings,
  FiHelpCircle,
  FiClock,
  FiMessageCircle,
  FiChevronDown
} from 'react-icons/fi';
import Link from "next/link";

const DashboardSidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState('Home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const [maxHeights, setMaxHeights] = useState({});

  const navItems = [
    { name: 'Home', icon: FiHome, path: '/dashboard' },
    { name: 'Teaching Resources', icon: FiRadio, path: '/dashboard/teacherresources' },
    { name: 'Explore', icon: FiCompass, path: '/dashboard/explore' },
    { name: 'Exams & Marks', icon: FiGrid, path: '/dashboard/exams' },
    { name: 'Assignments', icon: FiCheckSquare, path: '/dashboard/test' },
    { name: 'Attendance', icon: FiUser, path: '/dashboard/attendance' },
    { name: 'Profile', icon: FiUser, path: '/dashboard/profile' },
    { name: 'Notification', icon: FiBell, path: '/dashboard/notification' },
  ];

  const bottomItems = [
    { name: 'Settings', icon: FiSettings, path: '/dashboard/settings' },
    { name: 'Report History', icon: FiClock, path: '/dashboard/reports' },
    { name: 'Send Feedback', icon: FiMessageCircle, path: '/dashboard/feedback' },
    { name: 'Help', icon: FiHelpCircle, path: '/dashboard/help' }
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  useEffect(() => {
    const newHeights = {};
    Object.keys(dropdownRefs.current).forEach(key => {
      const el = dropdownRefs.current[key];
      if (el) {
        newHeights[key] = openDropdown === key ? `${el.scrollHeight}px` : '0px';
      }
    });
    setMaxHeights(newHeights);
  }, [openDropdown]);

  useEffect(() => {
    const handleResize = () => {
      const newHeights = {};
      Object.keys(dropdownRefs.current).forEach(key => {
        const el = dropdownRefs.current[key];
        if (el) {
          newHeights[key] = openDropdown === key ? `${el.scrollHeight}px` : '0px';
        }
      });
      setMaxHeights(newHeights);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [openDropdown]);

  return (
    <>
      <aside className={`dashboard-sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-content">

          {/* Main Navigation */}
          <nav className="main-nav">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.path} className="nav-link">
                  <div
                    className={`nav-item ${activeItem === item.name ? 'active' : ''}`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <div className="nav-item-content">
                      <Icon className="nav-icon" />
                      <span className="nav-text">{item.name}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="bottom-section">
            {bottomItems.map(item => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.path} className="bottom-link">
                  <div className="bottom-item" onClick={() => setActiveItem(item.name)}>
                    <Icon className="bottom-icon" />
                    <span className="bottom-text">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </aside>

      <style jsx>{`
        .dashboard-sidebar {
          width: 240px;
          height: calc(100vh - 60px);
          background-color: #fff;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 60px;
          overflow-y: auto;
          transition: transform 0.3s ease;
          z-index: 900;
        }

        .dashboard-sidebar.closed {
          transform: translateX(-100%);
        }
        .dashboard-sidebar.open {
          transform: translateX(0);
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 20px 0;
        }

        .main-nav {
          flex: 1;
        }

        .nav-link {
          text-decoration: none;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 8px;
        }

        .nav-item:hover {
          background-color: #f3f4f6;
        }

        .nav-item.active {
          background-color: #e0ebff;
        }

        .nav-item.active .nav-text {
          color: #1e40af;
          font-weight: 500;
        }

        .nav-item-content {
          display: flex;
          align-items: center;
        }

        .nav-icon {
          margin-right: 14px;
          color: #6b7280;
          width: 20px;
          height: 20px;
        }

        .nav-item.active .nav-icon {
          color: #3b82f6;
        }

        .nav-text {
          font-size: 14px;
          color: #1f2937;
          font-weight: 400;
        }

        .bottom-section {
          margin-top: auto;
          border-top: 1px solid #e5e7eb;
          padding-top: 16px;
        }

        .bottom-link {
          text-decoration: none;
        }

        .bottom-item {
          display: flex;
          align-items: center;
          padding: 10px 20px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        .bottom-item:hover {
          background-color: #f3f4f6;
        }

        .bottom-icon {
          margin-right: 14px;
          width: 20px;
          height: 20px;
          color: #6b7280;
        }

        .bottom-text {
          font-size: 14px;
          font-weight: 500;
          color: #1f2937;
        }

        /* Scrollbar */
        .dashboard-sidebar::-webkit-scrollbar {
          width: 6px;
        }
        .dashboard-sidebar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }

        @media (max-width: 768px) {
          .dashboard-sidebar {
            width: 260px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardSidebar;
