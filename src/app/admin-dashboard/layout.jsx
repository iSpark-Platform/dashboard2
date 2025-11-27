"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DashboardSidebar from "@/components/admin-dashboard/Admin-DashboardSidebar";
import DashboardHeader from "@/components/admin-dashboard/Admin-DashboardHeader";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setMounted(true); // To prevent hydration mismatch
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) return null; // Avoid SSR theme issues

  return (
    <>
      <div className="dashboard-layout">
        {/* Header */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          toggleTheme={toggleTheme} // pass to header for button
          currentTheme={theme}
        />

        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} />

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar} />
        )}

        {/* Main Content */}
        <main
          className={`main-content ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <div className="content-inner">{children}</div>
        </main>
      </div>

      <style jsx>{`
        .dashboard-layout {
          min-height: 100vh;
          background-color: ${theme === "dark" ? "#1f2937" : "#f8fafc"};
          transition: background-color 0.3s ease;
          position: relative;
        }

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

        @media (max-width: 768px) {
          .main-content.sidebar-open {
            margin-left: 0;
          }
        }

        .content-inner {
          padding: 24px;
          overflow-y: auto;
          scroll-behavior: smooth;
          color: ${theme === "dark" ? "#f8fafc" : "#111827"};
        }
      `}</style>
    </>
  );
}
