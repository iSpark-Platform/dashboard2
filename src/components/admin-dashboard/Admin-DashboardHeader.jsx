"use client";
import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX,
  FiSearch, 
  FiShoppingCart, 
  FiBell, 
  FiUser,
  FiChevronDown,
  FiSettings,
  FiLogOut,
  FiBook,
  FiHome,
  FiSun,
  FiMoon
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const DashboardHeader = ({ isSidebarOpen, toggleSidebar, toggleTheme, currentTheme }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCreateCourse = () => {
    router.push('/dashboard/courses');
  };

  const handleCart = () => {
    router.push('/cart');
  };

  const handleNotifications = () => {
    router.push('/admin-dashboard/notification');
  };

  const handleProfile = () => {
    router.push('/dashboard/profile');
    setShowUserMenu(false);
  };

  const handleSettings = () => {
    router.push('/dashboard/settings');
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      router.push('/login');
    }
    setShowUserMenu(false);
  };

  // Theme-based colors
  const isDark = currentTheme === 'dark';
  const bgColor = isDark ? '#111827' : '#ffffff';
  const textColor = isDark ? '#f8fafc' : '#111827';
  const borderColor = isDark ? '#374151' : '#e5e7eb';
  const searchBg = isDark ? '#1f2937' : '#f9fafb';
  const searchBorder = isDark ? '#374151' : '#e5e7eb';
  const iconColor = isDark ? '#9ca3af' : '#6b7280';
  const hoverBg = isDark ? '#1f2937' : '#f3f4f6';

  return (
    <>
      <header className="dashboard-header">
        <div className="header-content">
          {/* Left Section - Menu & Logo */}
          <div className="header-left">
            <button
              onClick={toggleSidebar}
              className="menu-button"
              aria-label="Toggle sidebar"
            >
              {isSidebarOpen ? (
                <FiX className="menu-icon" />
              ) : (
                <FiMenu className="menu-icon" />
              )}
            </button>
            
            <div className="logo" onClick={() => router.push('/dashboard')}>
              {isDark ? (
                <img src="/assets/images/logo/logo-white.png" alt="Logo" className="logo-img"/>
              ) : (
                <img src="/assets/images/logo/logo-dark.png" alt="Logo" className="logo-img"/>
              )}
            </div>
          </div>

          {/* Center Section - Search */}
           <div style={{ width: "100%" }} className="header-center">
         <form onSubmit={handleSearch} style={{ width: "100%", margin: 0 }}>
           <div style={{ position: "relative", width: "100%" }}>
             <FiSearch
               className="search-icon"
               style={{
                 position: "absolute",
                 left: 16,
                 top: "50%",
                 transform: "translateY(-50%)",
                 width: 18,
                 height: 18,
                 color: "#9ca3af",
                 pointerEvents: "none",
               }}
             />
       
             <input
               type="text"
               placeholder="Search for Tuts Videos, Tutors, Tests and more..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               style={{
                 width: "100%",
                 height: 44,
                 padding: "0 16px 0 46px",
                 border: "1px solid #e5e7eb",
                 borderRadius: 10,
                 fontSize: 14,
                 outline: "none",
                 backgroundColor: "#f9fafb",
                 transition: "all 0.2s ease",
                 boxSizing: "border-box",
               }}
             />
           </div>
         </form>
       </div>

          {/* Right Section - Actions */}
          <div className="header-right">
            <button 
              className="create-course-btn"
              onClick={handleCreateCourse}
            >
              <FiBook size={16} />
              <span>Create New Course</span>
            </button>
            
            <div className="action-icons">
              <button 
                className="icon-button"
                onClick={handleCart}
                title="Shopping Cart"
              >
                <FiShoppingCart size={20} />
              </button>
              
              <button 
                className="icon-button"
                onClick={handleNotifications}
                title="Notifications"
              >
                <FiBell size={20} />
                <span className="notification-badge">3</span>
              </button>

              {/* Theme Toggle */}
            

              <div className="user-menu-wrapper">
                <button 
                  className="user-button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <div className="user-avatar">
                    <FiUser size={18} />
                  </div>
                  <FiChevronDown className="chevron-icon" />
                </button>

                {showUserMenu && (
                  <>
                    <div className="menu-overlay" onClick={() => setShowUserMenu(false)}></div>
                    <div className="user-dropdown">
                      <div className="user-dropdown-header">
                        <div className="user-avatar-large">
                          <FiUser size={24} />
                        </div>
                        <div className="user-info">
                          <h4>Anbarasi S</h4>
                          <p>anbarasis@isparkleaning.com</p>
                        </div>
                      </div>
                      <div className="user-dropdown-body">
                        <button className="menu-item" onClick={handleProfile}>
                          <FiUser size={18} />
                          <span>My Profile</span>
                        </button>
                        <button className="menu-item" onClick={() => {
                          router.push('/dashboard');
                          setShowUserMenu(false);
                        }}>
                          <FiHome size={18} />
                          <span>Dashboard</span>
                        </button>
                        <button className="menu-item" onClick={handleSettings}>
                          <FiSettings size={18} />
                          <span>Settings</span>
                        </button>
                        <button className="menu-item logout" onClick={handleLogout}>
                          <FiLogOut size={18} />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Dashboard Header */
        .dashboard-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background-color: ${bgColor};
          border-bottom: 1px solid ${borderColor};
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          gap: 20px;
          max-width: 100%;
        }

        /* Left Section */
        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }

        .menu-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          color: ${textColor};
          transition: all 0.2s ease;
        }

        .menu-button:hover {
          background-color: ${hoverBg};
        }

        .menu-icon {
          width: 22px;
          height: 22px;
        }

        .logo {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 35px;
          width: auto;
          object-fit: contain;
        }

        /* Center Section - Search */
        .header-center {
          flex: 1;
          max-width: 600px;
          display: flex;
          align-items: center;
        }

        .search-form {
          width: 100%;
        }

        .search-container {
          position: relative;
          width: 100%;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          color: ${iconColor};
          pointer-events: none;
          z-index: 1;
        }

        .search-input {
          width: 100%;
          height: 44px;
          padding: 0 16px 0 46px;
          border: 1px solid ${searchBorder};
          border-radius: 10px;
          fontSize: 14px;
          outline: none;
          background-color: ${searchBg};
          color: ${textColor};
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .search-input::placeholder {
          color: ${iconColor};
        }

        .search-input:focus {
          border-color: ${isDark ? '#3b82f6' : '#1640ff'};
          background-color: ${isDark ? '#374151' : '#ffffff'};
          box-shadow: 0 0 0 3px ${isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(22, 64, 255, 0.1)'};
        }

        /* Right Section */
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .create-course-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 40px;
          padding: 0 16px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(135deg, ${isDark ? '#3b82f6' : '#1640ff'} 0%, ${isDark ? '#2563eb' : '#0d2db8'} 100%);
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .create-course-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(22, 64, 255, 0.3)'};
        }

        .action-icons {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          color: ${textColor};
          position: relative;
          transition: all 0.2s ease;
        }

        .icon-button:hover {
          background-color: ${hoverBg};
        }

        .notification-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 16px;
          height: 16px;
          background-color: #ef4444;
          color: white;
          font-size: 10px;
          font-weight: 600;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Theme Toggle Button */
        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          border-radius: 8px;
          cursor: pointer;
          color: ${isDark ? '#fbbf24' : textColor};
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          background-color: ${isDark ? '#1f2937' : '#fef3c7'};
          transform: rotate(20deg);
        }

        /* User Menu */
        .user-menu-wrapper {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          background: transparent;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          height: 42px;
        }

        .user-button:hover {
          background-color: transparent;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${isDark ? '#3b82f6' : '#1640ff'} 0%, ${isDark ? '#2563eb' : '#0d2db8'} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          transition: all 0.2s ease;
        }

        .user-button:hover .user-avatar {
          transform: scale(1.05);
          box-shadow: 0 4px 12px ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(22, 64, 255, 0.3)'};
        }

        .chevron-icon {
          width: 16px;
          height: 16px;
          color: ${textColor};
          transition: transform 0.2s ease;
        }

        .user-button:hover .chevron-icon {
          transform: rotate(180deg);
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          z-index: 999;
        }

        .user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: ${bgColor};
          border: 1px solid ${borderColor};
          border-radius: 12px;
          box-shadow: 0 10px 40px ${isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.15)'};
          min-width: 260px;
          z-index: 1000;
          animation: slideDown 0.2s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .user-dropdown-header {
          padding: 20px;
          border-bottom: 1px solid ${borderColor};
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-large {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${isDark ? '#3b82f6' : '#1640ff'} 0%, ${isDark ? '#2563eb' : '#0d2db8'} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          flex-shrink: 0;
        }

        .user-info h4 {
          margin: 0 0 4px 0;
          font-size: 16px;
          font-weight: 600;
          color: ${textColor};
        }

        .user-info p {
          margin: 0;
          font-size: 13px;
          color: ${iconColor};
        }

        .user-dropdown-body {
          padding: 8px 0;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 20px;
          border: none;
          background: none;
          text-align: left;
          color: ${textColor};
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .menu-item:hover {
          background-color: ${hoverBg};
        }

        .menu-item.logout {
          color: #ef4444;
          border-top: 1px solid ${borderColor};
          margin-top: 4px;
          padding-top: 12px;
        }

        .menu-item.logout:hover {
          background-color: ${isDark ? '#7f1d1d' : '#fee2e2'};
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .create-course-btn span {
            display: none;
          }

          .create-course-btn {
            width: 40px;
            padding: 0;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .header-content {
            gap: 12px;
            padding: 0 12px;
          }

          .header-center {
            max-width: none;
          }

          .search-input {
            font-size: 13px;
          }

          .logo-img {
            height: 30px;
          }

          .user-dropdown {
            right: -10px;
          }
        }

        @media (max-width: 480px) {
          .create-course-btn {
            display: none;
          }

          .search-input::placeholder {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardHeader;