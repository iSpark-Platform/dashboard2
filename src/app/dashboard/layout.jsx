"use client";
import React, { useState } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="toggle-btn"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
      <style jsx>{`
        .toggle-btn {
          padding: 6px 12px;
          background: #e2e8f0;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }
        .toggle-btn:hover {
          background: #cbd5e1;
        }
      `}</style>
    </div>
  );
};

// Main Dashboard Layout
export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <ThemeProvider attribute="class">
      <div className="dashboard-layout">
        {/* Header */}
        <DashboardHeader
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        >
          <ThemeToggle /> {/* Insert theme toggle inside header */}
        </DashboardHeader>

        {/* Sidebar */}
        <DashboardSidebar isOpen={isSidebarOpen} />

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar} />
        )}

        {/* Main Content */}
        <main className={`main-content ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
          <div className="content-inner">{children}</div>
        </main>

        <style jsx>{`
          .dashboard-layout {
            min-height: 100vh;
            background-color: var(--bg-color);
            position: relative;
            transition: background-color 0.3s ease;
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

          @media (max-width: 768px) {
            .main-content.sidebar-open {
              margin-left: 0;
            }
          }

          .content-inner {
            padding: 24px;
            overflow-y: auto;
            scroll-behavior: smooth;
          }

          /* Dark/Light Theme Variables */
          :root {
            --bg-color: #f8fafc;
            --text-color: #1f2937;
          }
          .dark {
            --bg-color: #1f2937;
            --text-color: #f8fafc;
          }
        `}</style>
      </div>
    </ThemeProvider>
  );
}
