"use client";
import React, { useState } from "react";
import { 
  FiHome, FiBookOpen, FiFolder, FiUsers, FiCheckSquare, FiVideo,
  FiCalendar, FiUser, FiBell, FiMessageSquare, FiCpu,
  FiSettings, FiClock, FiMessageCircle, FiHelpCircle
} from "react-icons/fi";
import Link from "next/link";

const DashboardSidebar = ({ isOpen }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");

const navItems = [
  { name: "Dashboard", icon: FiHome, path: "/admin-dashboard" },

  { name: "Internships", icon: FiBookOpen, path: "/admin-dashboard/internship" },

  { name: "Students", icon: FiUsers, path: "/admin-dashboard/students" },

  { name: "Instructor", icon: FiUser, path: "/admin-dashboard/instructor" },

  { name: "Payment Validation", icon: FiFolder, path: "/admin-dashboard/payment" },

  { name: "Study Materials", icon: FiCheckSquare, path: "/admin-dashboard/studymaterial" },

  { name: "Zoom Management", icon: FiVideo, path: "/admin-dashboard/zoom" },

  { name: "Profile", icon: FiUser, path: "/admin-dashboard/profile" },

  { name: "Notification", icon: FiBell, path: "/admin-dashboard/notification" },
];

  const bottomItems = [
    { name: "Settings", icon: FiSettings, path: "/admin-dashboard/settings" },
   
    { name: "Send Feedback", icon: FiMessageCircle, path: "/admin-dashboard/feedback" },
   
  ];

  return (
    <>
      <aside className={`dashboard-sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-content">
          {/* Main Navigation */}
          <nav className="main-nav">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.path} className="nav-link">
                  <div
                    className={`nav-item ${activeItem === item.name ? "active" : ""}`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <Icon className="nav-icon" />
                    <span className="nav-text">{item.name}</span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="bottom-section">
            {bottomItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.name} href={item.path} className="bottom-link">
                  <div
                    className={`bottom-item ${activeItem === item.name ? "active" : ""}`}
                    onClick={() => setActiveItem(item.name)}
                  >
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
          position: fixed;
          top: 60px;
          left: 0;
          display: flex;
          flex-direction: column;
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
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          background-color: #f3f4f6;
        }

        .nav-item.active {
          background-color: #e0ebff;
        }

        .nav-icon {
          margin-right: 14px;
          width: 20px;
          height: 20px;
          color: #6b7280;
        }

        .nav-item.active .nav-icon {
          color: #3b82f6;
        }

        .nav-text {
          font-size: 14px;
          color: #1f2937;
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
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
        }

        .bottom-item:hover {
          background-color: #f3f4f6;
        }

        .bottom-item.active {
          background-color: #e0ebff;
        }

        .bottom-icon {
          margin-right: 14px;
          width: 20px;
          height: 20px;
          color: #6b7280;
        }

        .bottom-item.active .bottom-icon {
          color: #3b82f6;
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
