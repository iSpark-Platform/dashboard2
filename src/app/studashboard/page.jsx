"use client";

import React, { useState } from "react";

const TeacherDashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredActivity, setHoveredActivity] = useState(null);
  const [hoveredTask, setHoveredTask] = useState(null);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [hoveredStudent, setHoveredStudent] = useState(null);
  const [hoveredResource, setHoveredResource] = useState(null);
  const [hoveredAnnouncement, setHoveredAnnouncement] = useState(null);

  const today = new Date().toLocaleDateString("en-US", { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const containerStyle = {
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
    color: "#1e293b",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "16px",
    borderBottom: "1px solid #e2e8f0",
    marginBottom: "8px",
  };

  const welcomeStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const dateStyle = {
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  };

  const quickCardsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
    gap: "20px",
    marginBottom: "8px",
  };

  const cardStyle = (id) => ({
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    boxShadow: hoveredCard === id ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
    border: "1px solid #f1f5f9",
    position: "relative",
    overflow: "hidden",
    transform: hoveredCard === id ? "translateY(-4px)" : "translateY(0)",
    cursor: "pointer",
  });

  const cardAccentStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
  };

  const cardTitleStyle = {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "8px",
    fontWeight: "500",
  };

  const cardValueStyle = {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0,
  };

  const sectionStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    border: "1px solid #f1f5f9",
  };

  const sectionTitleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 20px 0",
    paddingBottom: "12px",
    borderBottom: "1px solid #e2e8f0",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "8px",
  };

  const thStyle = {
    textAlign: "left",
    padding: "12px 16px",
    backgroundColor: "#f8fafc",
    fontWeight: "600",
    color: "#475569",
    borderBottom: "2px solid #e2e8f0",
    fontSize: "14px",
  };

  const tdStyle = {
    padding: "16px",
    borderBottom: "1px solid #f1f5f9",
    color: "#334155",
    fontSize: "14px",
  };

  const actionButtonStyle = (id) => ({
    backgroundColor: hoveredButton === id ? "#0e2fcc" : "#1640ff",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    marginRight: "8px",
    transition: "all 0.2s ease",
    boxShadow: hoveredButton === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    transform: hoveredButton === id ? "translateY(-2px)" : "translateY(0)",
  });

  const quickActionButton = (id) => ({
    backgroundColor: hoveredButton === id ? "#0e2fcc" : "#1640ff",
    color: "#fff",
    padding: "12px 20px",
    borderRadius: "10px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    marginRight: "12px",
    marginBottom: "12px",
    transition: "all 0.2s ease",
    boxShadow: hoveredButton === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transform: hoveredButton === id ? "translateY(-2px)" : "translateY(0)",
  });

  const activityItemStyle = (id) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hoveredActivity === id ? "#f1f5f9" : "#f8fafc",
    fontSize: "14px",
    marginBottom: "12px",
    borderLeft: "3px solid #1640ff",
    transition: "all 0.2s ease",
    transform: hoveredActivity === id ? "translateX(4px)" : "translateX(0)",
    cursor: "pointer",
  });

  // Enhanced Pending Tasks Styles
  const taskItemStyle = (id, priority) => ({
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hoveredTask === id ? "#f1f5f9" : "#fff",
    fontSize: "14px",
    marginBottom: "12px",
    border: `1px solid ${hoveredTask === id ? "#e2e8f0" : "#f1f5f9"}`,
    borderLeft: `4px solid ${
      priority === "high" ? "#ef4444" : 
      priority === "medium" ? "#EF7C00" : 
      "#10b981"
    }`,
    transition: "all 0.2s ease",
    transform: hoveredTask === id ? "translateX(4px)" : "translateX(0)",
    cursor: "pointer",
    boxShadow: hoveredTask === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none",
  });

  const taskContentStyle = {
    flex: 1,
  };

  const taskTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 4px 0",
  };

  const taskMetaStyle = {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
  };

  const taskDueDateStyle = {
    fontSize: "13px",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "500",
    marginLeft: "8px",
  };

  const taskPriorityStyle = {
    fontSize: "12px",
    padding: "2px 6px",
    borderRadius: "4px",
    fontWeight: "600",
    textTransform: "uppercase",
    marginLeft: "8px",
  };

  // Enhanced Upcoming Events Styles
  const eventItemStyle = (id) => ({
    display: "flex",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hoveredEvent === id ? "#f1f5f9" : "#fff",
    fontSize: "14px",
    marginBottom: "12px",
    border: `1px solid ${hoveredEvent === id ? "#e2e8f0" : "#f1f5f9"}`,
    transition: "all 0.2s ease",
    transform: hoveredEvent === id ? "translateX(4px)" : "translateX(0)",
    cursor: "pointer",
    boxShadow: hoveredEvent === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none",
  });

  const eventDateStyle = {
    minWidth: "70px",
    height: "70px",
    backgroundColor: "#1640ff",
    color: "#ffffffff",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px",
    flexShrink: 0,
  };

  const eventDayStyle = {
    fontSize: "24px",
    fontWeight: "700",
    margin: 0,
    lineHeight: 1,
  };

  const eventMonthStyle = {
    fontSize: "12px",
    fontWeight: "500",
    margin: 0,
    textTransform: "uppercase",
  };

  const eventContentStyle = {
    flex: 1,
  };

  const eventTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 4px 0",
  };

  const eventTypeStyle = {
    display: "inline-block",
    fontSize: "12px",
    padding: "2px 8px",
    borderRadius: "4px",
    fontWeight: "600",
    textTransform: "uppercase",
  };

  // Student Performance Card Styles
  const studentCardStyle = (id) => ({
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hoveredStudent === id ? "#f1f5f9" : "#fff",
    fontSize: "14px",
    marginBottom: "12px",
    border: `1px solid ${hoveredStudent === id ? "#e2e8f0" : "#f1f5f9"}`,
    transition: "all 0.2s ease",
    transform: hoveredStudent === id ? "translateX(4px)" : "translateX(0)",
    cursor: "pointer",
    boxShadow: hoveredStudent === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none",
  });

  const studentAvatarStyle = {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    backgroundColor: "#e2e8f0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "16px",
    flexShrink: 0,
    fontSize: "18px",
    fontWeight: "600",
    color: "#64748b",
  };

  const studentInfoStyle = {
    flex: 1,
  };

  const studentNameStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 4px 0",
  };

  const studentDetailsStyle = {
    fontSize: "14px",
    color: "#64748b",
    margin: 0,
  };

  const performanceBadgeStyle = {
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "600",
    marginLeft: "8px",
  };

  // Resource Card Styles
  const resourceCardStyle = (id) => ({
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    boxShadow: hoveredResource === id ? "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
    border: "1px solid #f1f5f9",
    position: "relative",
    overflow: "hidden",
    transform: hoveredResource === id ? "translateY(-4px)" : "translateY(0)",
    cursor: "pointer",
    minWidth: "220px",
    maxWidth: "280px",
  });

  const resourceImageStyle = {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "12px",
  };

  const resourceTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 8px 0",
  };

  const resourceMetaStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    color: "#64748b",
  };

  // Announcement Styles
  const announcementItemStyle = (id) => ({
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: hoveredAnnouncement === id ? "#f1f5f9" : "#fff",
    fontSize: "14px",
    marginBottom: "12px",
    border: `1px solid ${hoveredAnnouncement === id ? "#e2e8f0" : "#f1f5f9"}`,
    borderLeft: "4px solid #EF7C00",
    transition: "all 0.2s ease",
    transform: hoveredAnnouncement === id ? "translateX(4px)" : "translateX(0)",
    cursor: "pointer",
    boxShadow: hoveredAnnouncement === id ? "0 4px 6px -1px rgba(0, 0, 0, 0.05)" : "none",
  });

  const announcementTitleStyle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 8px 0",
  };

  const announcementContentStyle = {
    fontSize: "14px",
    color: "#475569",
    margin: "0 0 8px 0",
    lineHeight: 1.5,
  };

  const announcementMetaStyle = {
    fontSize: "12px",
    color: "#64748b",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const chartPlaceholderStyle = {
    height: "250px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: "16px",
    border: "1px dashed #cbd5e1",
    position: "relative",
    overflow: "hidden",
  };

  // Create icon components using SVG
  const DashboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );

  const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );

  const BookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );

  const ClipboardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="2" width="6" height="4" rx="1" ry="1"></rect>
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const UploadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  );

  const VideoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"></polygon>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
  );

  const BellIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  );

  const DateIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );

  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1640ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  const TrendingUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const AwardIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
    </svg>
  );

  const MegaphoneIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h18m-9-9v18"></path>
      <path d="M5.71 5.71 12 12l6.29-6.29"></path>
      <path d="M18.37 18.37 12 12l-6.37 6.37"></path>
    </svg>
  );

  // Sample data with more comprehensive content
  const tasks = [
    { id: 1, title: "Smart Robotics & Industry 4.0 Automation Internship", class: "Mathematics - Grade 5", due: "Today, 5:00 PM", priority: "high" },
    { id: 2, title: " Applied AI & Machine Learning: From Models to Real-World Applications ", class: "Science - Grade 5", due: "Tomorrow", priority: "medium" },
    { id: 3, title: "IoT & IIoT for Smart Systems and Industry 4.0", class: "History - Grade 5", due: "Dec 15, 2023", priority: "low" },
    { id: 4, title: "Cloud & Edge Computing for Connected Intelligence", class: "Physics - Grade 5", due: "Dec 18, 2023", priority: "medium" },
  ];

  const events = [
    { id: 1, title: "Smart Robotics & Industry 4.0 Automation Internship", date: "25", month: "Nov", type: "exam" },
    { id: 2, title: "Applied AI & Machine Learning: From Models to Real-World Applications", date: "27", month: "Nov", type: "exam" },
    { id: 3, title: "IoT & IIoT for Smart Systems and Industry 4.0", date: "30", month: "Nov", type: "exam" },
    { id: 4, title: "Cloud & Edge Computing for Connected Intelligence", date: "5", month: "Dec", type: "exam" },
  ];

  const topStudents = [
    { id: 1, name: "Emma Johnson", class: "5A", grade: "A+", attendance: "98%" },
    { id: 2, name: "Michael Chen", class: "5B", grade: "A", attendance: "96%" },
    { id: 3, name: "Sophia Williams", class: "5A", grade: "A", attendance: "95%" },
  ];

  const recentResources = [
    { id: 1, title: "Interactive Math Worksheets", type: "Worksheet", downloads: 245, rating: 4.8 },
    { id: 2, title: "Science Lab Safety Video", type: "Video", downloads: 189, rating: 4.9 },
    { id: 3, title: "History Timeline Project", type: "Project", downloads: 156, rating: 4.7 },
    { id: 4, title: "Physics Formula Sheet", type: "Reference", downloads: 203, rating: 4.6 },
  ];

  const announcements = [
    { id: 1, title: "Winter Break Schedule", content: "School will be closed from Dec 20 to Jan 5. Please ensure all assignments are submitted before the break.", date: "2 days ago", priority: "high" },
    { id: 2, title: "New Library Resources", content: "The school library has added 50 new educational resources available for both teachers and students.", date: "5 days ago", priority: "medium" },
  ];

  return (
    <div style={containerStyle}>
      {/* Welcome Header */}
      <div style={headerStyle}>
        <h1 style={welcomeStyle}>
          <UserIcon />
          Welcome, Ms. Anbarasi
        </h1>
        <span style={dateStyle}>
          <DateIcon />
          {today}
        </span>
      </div>

      {/* Quick Overview Cards */}
      <div style={quickCardsStyle}>
        <div 
          style={cardStyle(1)} 
          onMouseEnter={() => setHoveredCard(1)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#1640ff" }}></div>
          <span style={cardTitleStyle}>Total Students</span>
          <p style={cardValueStyle}>120</p>
        </div>
        <div 
          style={cardStyle(2)} 
          onMouseEnter={() => setHoveredCard(2)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#EF7C00" }}></div>
          <span style={cardTitleStyle}>Today's Classes</span>
          <p style={cardValueStyle}>5</p>
        </div>
        <div 
          style={cardStyle(3)} 
          onMouseEnter={() => setHoveredCard(3)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#1640ff" }}></div>
          <span style={cardTitleStyle}>Assignments to Review</span>
          <p style={cardValueStyle}>8</p>
        </div>
        <div 
          style={cardStyle(4)} 
          onMouseEnter={() => setHoveredCard(4)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#EF7C00" }}></div>
          <span style={cardTitleStyle}>Upcoming Exams</span>
          <p style={cardValueStyle}>3</p>
        </div>
        <div 
          style={cardStyle(5)} 
          onMouseEnter={() => setHoveredCard(5)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#10b981" }}></div>
          <span style={cardTitleStyle}>Attendance Rate</span>
          <p style={cardValueStyle}>94%</p>
        </div>
        <div 
          style={cardStyle(6)} 
          onMouseEnter={() => setHoveredCard(6)} 
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{ ...cardAccentStyle, backgroundColor: "#8b5cf6" }}></div>
          <span style={cardTitleStyle}>Pending Messages</span>
          <p style={cardValueStyle}>12</p>
        </div>
      </div>

      {/* Today's Class Schedule */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <CalendarIcon />
          Today's Classes
        </h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Courses/Internships</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Room</th>
              <th style={thStyle}>Students</th>
              <th style={thStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Smart Robotics & Industry 4.0 Automation Internship</td>
              <td style={tdStyle}>09:00 AM - 10:00 AM</td>
              <td style={tdStyle}>Room 201</td>
              <td style={tdStyle}>32</td>
              <td style={tdStyle}>
                <button 
                  style={actionButtonStyle(1)}
                  onMouseEnter={() => setHoveredButton(1)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Start Class
                </button>
                <button 
                  style={actionButtonStyle(2)}
                  onMouseEnter={() => setHoveredButton(2)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Resources
                </button>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>IoT & IIoT for Smart Systems and Industry 4.0</td>
              <td style={tdStyle}>10:15 AM - 11:15 AM</td>
              <td style={tdStyle}>Lab 3</td>
              <td style={tdStyle}>28</td>
              <td style={tdStyle}>
                <button 
                  style={actionButtonStyle(3)}
                  onMouseEnter={() => setHoveredButton(3)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Start Class
                </button>
                <button 
                  style={actionButtonStyle(4)}
                  onMouseEnter={() => setHoveredButton(4)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Resources
                </button>
              </td>
            </tr>
            <tr>
              <td style={tdStyle}>Cloud & Edge Computing for Connected Intelligence</td>
              <td style={tdStyle}>12:00 PM - 1:00 PM</td>
              <td style={tdStyle}>Lab 1</td>
              <td style={tdStyle}>30</td>
              <td style={tdStyle}>
                <button 
                  style={actionButtonStyle(5)}
                  onMouseEnter={() => setHoveredButton(5)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Start Class
                </button>
                <button 
                  style={actionButtonStyle(6)}
                  onMouseEnter={() => setHoveredButton(6)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Resources
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Enhanced Pending Tasks */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <ClipboardIcon />
          Pending Tasks
        </h2>
        {tasks.map((task) => (
          <div 
            key={task.id}
            style={taskItemStyle(task.id, task.priority)}
            onMouseEnter={() => setHoveredTask(task.id)}
            onMouseLeave={() => setHoveredTask(null)}
          >
            <div style={taskContentStyle}>
              <h3 style={taskTitleStyle}>{task.title}</h3>
              <p style={taskMetaStyle}>{task.class}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span 
                style={{
                  ...taskDueDateStyle,
                  backgroundColor: 
                    task.due === "Today, 5:00 PM" ? "#fee2e2" : 
                    task.due === "Tomorrow" ? "#fed7aa" : 
                    "#dcfce7",
                  color: 
                    task.due === "Today, 5:00 PM" ? "#dc2626" : 
                    task.due === "Tomorrow" ? "#ea580c" : 
                    "#16a34a",
                }}
              >
                {task.due}
              </span>
              <span 
                style={{
                  ...taskPriorityStyle,
                  backgroundColor: 
                    task.priority === "high" ? "#fee2e2" : 
                    task.priority === "medium" ? "#fed7aa" : 
                    "#dcfce7",
                  color: 
                    task.priority === "high" ? "#dc2626" : 
                    task.priority === "medium" ? "#ea580c" : 
                    "#16a34a",
                }}
              >
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Class Performance Analytics */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <TrendingUpIcon />
          Class Performance Analytics
        </h2>
        <div style={chartPlaceholderStyle}>
          <div style={{ textAlign: "center" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "16px" }}>
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
            <p>Interactive performance charts showing class trends, subject-wise scores, and improvement metrics</p>
          </div>
        </div>
      </div>

      {/* Enhanced Upcoming Events */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <CalendarIcon />
          Upcoming Events
        </h2>
        {events.map((event) => (
          <div 
            key={event.id}
            style={eventItemStyle(event.id)}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            <div style={eventDateStyle}>
              <p style={eventDayStyle}>{event.date}</p>
              <p style={eventMonthStyle}>{event.month}</p>
            </div>
            <div style={eventContentStyle}>
              <h3 style={eventTitleStyle}>{event.title}</h3>
              <span 
                style={{
                  ...eventTypeStyle,
                  backgroundColor: 
                    event.type === "exam" ? "#dbeafe" : 
                    event.type === "meeting" ? "#dcfce7" : 
                    "#fef3c7",
                  color: 
                    event.type === "exam" ? "#1e40af" : 
                    event.type === "meeting" ? "#166534" : 
                    "#92400e",
                }}
              >
                {event.type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* School Announcements */}
      <div style={sectionStyle}>
        <h2 style={sectionTitleStyle}>
          <MegaphoneIcon />
          School Announcements
        </h2>
        {announcements.map((announcement) => (
          <div 
            key={announcement.id}
            style={announcementItemStyle(announcement.id)}
            onMouseEnter={() => setHoveredAnnouncement(announcement.id)}
            onMouseLeave={() => setHoveredAnnouncement(null)}
          >
            <div>
              <h3 style={announcementTitleStyle}>{announcement.title}</h3>
              <p style={announcementContentStyle}>{announcement.content}</p>
              <div style={announcementMetaStyle}>
                <span>{announcement.date}</span>
                <span 
                  style={{
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontSize: "11px",
                    fontWeight: "600",
                    backgroundColor: announcement.priority === "high" ? "#fee2e2" : "#fed7aa",
                    color: announcement.priority === "high" ? "#dc2626" : "#ea580c",
                  }}
                >
                  {announcement.priority}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;