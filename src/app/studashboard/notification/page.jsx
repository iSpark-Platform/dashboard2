"use client";
// ADD THIS LINE to import the useState hook from React
import { useState } from "react"; 

import { FiMoreVertical, FiTrash2, FiStar, FiEdit3, FiTrendingUp, FiBookOpen, FiCheckCircle, FiRefreshCw, FiUser, FiFileText, FiMessageSquare, FiCalendar, FiInfo, FiBell, FiClock, FiFilter, FiChevronDown } from "react-icons/fi";

const TeacherNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "enrollment",
      icon: <FiUser />,
      title: "New Student Enrollment",
      description: "Sarah Miller enrolled in your 'Complete Python Bootcamp' course.",
      time: "5 minutes ago",
      read: false,
      action: "View Student Profile",
      urgency: "high"
    },
    {
      id: 2,
      type: "assignment",
      icon: <FiFileText />,
      title: "New Assignment Submission",
      description: "You have 5 new submissions for 'Module 3: Advanced Functions'.",
      time: "1 hour ago",
      read: false,
      action: "View Submissions",
      urgency: "medium"
    },
    {
      id: 3,
      type: "review",
      icon: <FiMessageSquare />,
      title: "New Course Review",
      description: "John Doe left a 5-star review for 'The Complete JavaScript Course'.",
      time: "2 hours ago",
      read: true,
      action: "View Review",
      urgency: "low"
    },
    {
      id: 4,
      type: "engagement",
      icon: <FiTrendingUp />,
      title: "AI-Driven Engagement Alert",
      description: "Student engagement in 'Beginning C++ Programming' has dropped by 15% this week.",
      time: "3 hours ago",
      read: false,
      action: "View Analytics",
      urgency: "high"
    },
    {
      id: 5,
      type: "live-class",
      icon: <FiCalendar />,
      title: "Upcoming Live Class",
      description: "Your live Q&A session for 'Python Bootcamp' starts in 1 hour.",
      time: "1 day ago",
      read: true,
      action: "Start Live Class",
      urgency: "high"
    },
    {
      id: 6,
      type: "announcement",
      icon: <FiInfo />,
      title: "Platform Update",
      description: "System maintenance is scheduled for this Sunday from 2:00 AM to 4:00 AM EST.",
      time: "2 days ago",
      read: true,
      action: "Read More",
      urgency: "medium"
    }
  ];

  // These lines will now work correctly
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("time");

  const styles = {
    page: {
      padding: "24px",
      background: "linear-gradient(to bottom right, #f8fafc, #e0e7ff)",
      minHeight: "100vh",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    },

    header: {
      marginBottom: "32px",
    },

    title: {
      fontSize: "30px",
      fontWeight: "700",
      color: "#1e293b",
      marginBottom: "8px",
      letterSpacing: "-0.025em",
    },

    subtitle: {
      fontSize: "18px",
      color: "#64748b",
      marginBottom: "24px",
      fontWeight: "400",
    },

    notificationFeatures: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      marginBottom: "32px",
    },

    featureCard: {
      background: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #f1f5f9",
      padding: "24px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },

    featureTitle: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "20px",
      fontWeight: "600",
    },

    featureDescription: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.6",
    },

    blueText: {
      color: "#1640ff",
    },

    orangeText: {
      color: "#f59e0b",
    },

    topBar: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "16px",
      alignItems: "center",
    },

    leftTitle: { 
      fontSize: "30px", 
      fontWeight: "600",
      color: "#1e293b"
    },

    rightActions: {
      display: "flex",
      gap: "12px",
    },

    actionButton: {
      padding: "10px 16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      transition: "all 0.2s ease",
    },

    primaryButton: {
      background: "#1640ff",
      color: "#fff",
      boxShadow: "0 4px 6px -1px rgba(79, 70, 229, 0.3), 0 2px 4px -1px rgba(79, 70, 229, 0.2)",
    },

    secondaryButton: {
      background: "#f1f5f9",
      color: "#475569",
    },

    filterBar: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
      padding: "16px 20px",
      background: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #f1f5f9",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
    },

    filterGroup: {
      display: "flex",
      gap: "12px",
      alignItems: "center",
    },

    filterButton: {
      padding: "8px 14px",
      borderRadius: "6px",
      border: "1px solid #e2e8f0",
      background: "#ffffff",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "all 0.2s ease",
    },

    activeFilter: {
      background: "#1640ff",
      color: "#fff",
      borderColor: "#1640ff",
      boxShadow: "0 2px 4px -1px rgba(79, 70, 229, 0.3)",
    },

    list: { 
      marginTop: "20px", 
      display: "flex", 
      flexDirection: "column", 
      gap: "16px" 
    },

    card: {
      background: "#ffffff",
      borderRadius: "12px",
      border: "1px solid #f1f5f9",
      padding: "20px",
      display: "flex",
      gap: "16px",
      position: "relative",
      alignItems: "flex-start",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },

    unreadCard: {
      borderLeft: "4px solid ##1640ff",
      background: "#f8faff",
    },

    notificationIconWrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      flexShrink: 0,
    },

    content: { 
      flex: 1, 
      display: "flex", 
      flexDirection: "column", 
      gap: "6px" 
    },

    title: {
      fontSize: "30px",
      fontWeight: "600",
      color: "#1e293b",
    },

    description: {
      fontSize: "14px",
      color: "#475569",
      lineHeight: "1.6",
    },

    time: {
      fontSize: "12px",
      color: "#94a3b8",
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },

    actionLink: {
      fontSize: "14px",
      color: "#1640ff",
      fontWeight: "500",
      cursor: "pointer",
      marginTop: "8px",
      alignSelf: "flex-start",
      transition: "color 0.2s ease",
    },

    urgencyBadge: {
      padding: "4px 10px",
      fontSize: "11px",
      fontWeight: "700",
      borderRadius: "6px",
      marginLeft: "auto",
      textTransform: "uppercase",
    },

    highUrgency: {
      background: "#fee2e2",
      color: "#dc2626",
    },

    mediumUrgency: {
      background: "#fef3c7",
      color: "#d97706",
    },

    lowUrgency: {
      background: "#f1f5f9",
      color: "#475569",
    },
  };

  const getIconStyle = (type) => {
    switch (type) {
      case "enrollment":
        return { background: "#dbeafe", color: "#1d4ed8" };
      case "assignment":
        return { background: "#fef3c7", color: "#d97706" };
      case "review":
        return { background: "#d1fae5", color: "#059669" };
      case "engagement":
        return { background: "#fee2e2", color: "#dc2626" };
      case "live-class":
        return { background: "#e9d5ff", color: "#7c3aed" };
      case "announcement":
        return { background: "#e2e8f0", color: "#475569" };
      default:
        return { background: "#e2e8f0", color: "#475569" };
    }
  };

  const getUrgencyStyle = (urgency) => {
    switch (urgency) {
      case "high":
        return styles.highUrgency;
      case "medium":
        return styles.mediumUrgency;
      case "low":
        return styles.lowUrgency;
      default:
        return styles.lowUrgency;
    }
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    return notification.type === filter;
  });

  const sortedNotifications = [...filteredNotifications].sort((a, b) => {
    if (sortBy === "time") {
      // In a real app, you would parse the time string and compare actual timestamps
      return a.id - b.id;
    } else if (sortBy === "urgency") {
      const urgencyOrder = { high: 0, medium: 1, low: 2 };
      return urgencyOrder[a.urgency] - urgencyOrder[b.urgency];
    }
    return 0;
  });

  return (
    <div style={styles.page}>
     

      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.leftTitle}>Notifications</div>
        <div style={styles.rightActions}>
          <button style={{...styles.actionButton, ...styles.secondaryButton}}>
            Mark All as Read
          </button>
          <button style={{...styles.actionButton, ...styles.primaryButton}}>
            <FiRefreshCw size={14} /> Refresh
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={styles.filterBar}>
        <div style={styles.filterGroup}>
          <FiFilter size={16} color="#64748b" />
          <button 
            style={{...styles.filterButton, ...(filter === "all" ? styles.activeFilter : {})}}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
            style={{...styles.filterButton, ...(filter === "unread" ? styles.activeFilter : {})}}
            onClick={() => setFilter("unread")}
          >
            Unread
          </button>
          <button 
            style={{...styles.filterButton, ...(filter === "enrollment" ? styles.activeFilter : {})}}
            onClick={() => setFilter("enrollment")}
          >
            Enrollments
          </button>
          <button 
            style={{...styles.filterButton, ...(filter === "assignment" ? styles.activeFilter : {})}}
            onClick={() => setFilter("assignment")}
          >
            Assignments
          </button>
          <button 
            style={{...styles.filterButton, ...(filter === "engagement" ? styles.activeFilter : {})}}
            onClick={() => setFilter("engagement")}
          >
            Engagement
          </button>
        </div>
        
       
      </div>

      <div style={{ 
        fontSize: "18px", 
        color: "#475569", 
        marginBottom: "16px",
        padding: "8px 12px",
        background: "#f1f5f9",
        borderRadius: "8px",
        display: "inline-block"
      }}>
        {notifications.filter(n => !n.read).length} Unread
      </div>

      {/* Notifications List */}
      <div style={styles.list}>
        {sortedNotifications.map((notification) => (
          <div key={notification.id} style={{ 
            ...styles.card, 
            ...(notification.read ? {} : styles.unreadCard),
            ":hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
            }
          }}>
            <div style={{ ...styles.notificationIconWrapper, ...getIconStyle(notification.type) }}>
              {notification.icon}
            </div>

            <div style={styles.content}>
              <div style={styles.title}>{notification.title}</div>
              <div style={styles.description}>{notification.description}</div>
              <div style={styles.time}>
                <FiClock size={12} />
                {notification.time}
              </div>
              <div style={styles.actionLink}>{notification.action} →</div>
            </div>
            
            <div style={{...styles.urgencyBadge, ...getUrgencyStyle(notification.urgency)}}>
              {notification.urgency.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherNotifications;