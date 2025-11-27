import React, { useState } from 'react';
import { 
  FiMenu, 
  FiX,
  FiSearch, 
  FiShoppingCart, 
  FiBell, 
  FiMail, 
  FiUser,
  FiChevronDown,
  FiSettings,
  FiLogOut,
  FiBook,
  FiHome
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const DashboardHeader = ({ isSidebarOpen, toggleSidebar }) => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCreateCourse = () => {
    console.log('Creating new course...');
    router.push('/dashboard/courses');
  };

const handleCart = () => {
  console.log('Opening cart...');
  router.push('/cart');
};

  const handleNotifications = () => {
    console.log('Opening notifications...');
    router.push('/dashboard/notification');
  };

  const handleMessages = () => {
    console.log('Opening messages...');
    router.push('/dashboard/message');
  };

  const handleProfile = () => {
    console.log('Opening profile...');
    router.push('/dashboard/profile');
    setShowUserMenu(false);
  };

  const handleSettings = () => {
    console.log('Opening settings...');
    router.push('/dashboard/settings');
    setShowUserMenu(false);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    if (confirm('Are you sure you want to logout?')) {
      // Add your logout logic here
      router.push('/login');
    }
    setShowUserMenu(false);
  };

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
              <img src="/assets/images/logo/logo-dark.png" alt="Logo" className="logo-img"/>
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
                <FiShoppingCart className="icon" />
              </button>
              
              <button 
                className="icon-button"
                onClick={handleNotifications}
                title="Notifications"
              >
                <FiBell className="icon" />
              </button>
              
              <button 
                className="icon-button"
                onClick={handleMessages}
                title="Messages"
              >
                <FiMail className="icon" />
              </button>
              
              <div className="user-menu-wrapper">
                <button 
                  className="user-button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <div className="user-avatar">
                    <FiUser className="icon" />
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
        .dashboard-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          z-index: 1000;
        }

        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          max-width: 100%;
        }

        /* Left Section */
        .header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background: #1640ff;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #ffffff;
           font-weight:bold;
        }

        .menu-button:hover {
          background-color: #1640ff;
          transform: scale(1.05);
        }

        .menu-icon {
          width: 30px;
          height: 30px;
          font-weight:bold;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .logo-img {
          height: 40px;
          width: auto;
        }

        /* Center Section */
        .header-center {
          flex: 1;
          max-width: 600px;
          margin: 0 40px;
          display: none;
        }

        @media (min-width: 768px) {
          .header-center {
            display: block;
          }
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
  color: #9ca3af;
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 44px;
  padding: 0 16px 0 46px;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  outline: none;
  background-color: #f9fafb;
  transition: all 0.2s ease;
}

.search-input:focus {
  background-color: #ffffff;
  border-color: #1640ff;
  box-shadow: 0 0 0 3px rgba(91, 79, 239, 0.1);
}

.search-input::placeholder {
  color: #9ca3af;
}



        /* Right Section */
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .create-course-btn {
          display: none;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          background-color: #1640ff;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .create-course-btn:hover {
          background-color: #1640ff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(91, 79, 239, 0.3);
        }

        @media (min-width: 1024px) {
          .create-course-btn {
            display: flex;
          }
        }

        .action-icons {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-button {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: #f9fafb;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #66686bff;
        }

        .icon-button:hover {
          background-color: #f3f4f6;
          color: #1f2937;
          transform: scale(1.05);
        }

        .icon {
          width: 30px;
          height: 30px;
        }

        .user-menu-wrapper {
          position: relative;
        }

        .user-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px 6px 6px;
          background: #f9fafb;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          height: 42px;
        }

        .user-button:hover {
          background-color: #f3f4f6;
        }

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1640ff 0%, #1640ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .chevron-icon {
          width: 16px;
          height: 16px;
          color: #6b7280;
          display: none;
        }

        @media (min-width: 768px) {
          .chevron-icon {
            display: block;
          }
        }

   

        .user-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          min-width: 280px;
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
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px;
          border-bottom: 1px solid #f3f4f6;
        }

        .user-avatar-large {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(135deg, #1640ff 0%, #1640ff 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .user-info h4 {
          font-size: 15px;
          font-weight: 600;
          color: #1f2937;
          margin: 0 0 4px 0;
        }

        .user-info p {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
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
          color: #1f2937;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .menu-item:hover {
          background-color: #f9fafb;
        }

        .menu-item.logout {
          color: #ef4444;
          border-top: 1px solid #f3f4f6;
          margin-top: 8px;
        }

        .menu-item.logout:hover {
          background-color: #fef2f2;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .header-content {
            padding: 0 16px;
          }

          .dashboard-header {
            height: 60px;
          }

          .header-left {
            gap: 12px;
          }

          .menu-button {
            width: 38px;
            height: 38px;
          }

          .logo-img {
            height: 32px;
          }

          .action-icons {
            gap: 4px;
          }

          .icon-button,
          .user-button {
            width: 38px;
            height: 38px;
          }

          .user-dropdown {
            right: -10px;
            min-width: 260px;
          }
        }

        @media (max-width: 480px) {
          .header-content {
            padding: 0 12px;
          }

          .header-left {
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default DashboardHeader;