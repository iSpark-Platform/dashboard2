"use client";
import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="dashboard-layout">
        {/* Header */}
        <DashboardHeader 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />

        {/* Sidebar - Pass isOpen prop directly */}
        <DashboardSidebar isOpen={isSidebarOpen} />

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="sidebar-overlay"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="content-inner">
            {children}
          </div>
        </main>
      </div>

      <style jsx>{`
        .dashboard-layout {
          min-height: 100vh;
          background-color: #f8fafc;
          position: relative;
        }

        /* Mobile Overlay */
        .sidebar-overlay {
          display: none;
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 850;
          cursor: pointer;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .sidebar-overlay {
            display: block;
          }
        }

        /* Main Content */
        .main-content {
          margin-top: 60px;
          min-height: calc(100vh - 60px);
          transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .main-content.sidebar-open {
          margin-left: 240px;
        }

        .main-content.sidebar-closed {
          margin-left: 0;
        }

        /* Mobile: no margin (sidebar overlays) */
        @media (max-width: 768px) {
          .main-content.sidebar-open {
            margin-left: 0;
          }
        }

        .content-inner {
          padding: 24px;
          overflow-y: auto;
        }

        /* Smooth scrolling */
        .content-inner {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}