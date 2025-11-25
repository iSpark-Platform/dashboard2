"use client";

import { FiClock, FiBookOpen, FiCheckCircle, FiXCircle, FiCalendar, FiFilter, FiDownload, FiSearch, FiTrendingUp, FiUsers, FiBarChart2, FiAlertCircle, FiChevronRight, FiHome, FiUser, FiSettings, FiBell } from "react-icons/fi";
import { useState } from "react";

export default function TeacherAttendance() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const PRIMARY = "#1640ff";
  const ACCENT = "#EF7C00";
  const SUCCESS = "#059669";
  const DANGER = "#dc2626";
  const WARNING = "#d97706";
  const INFO = "#0ea5e9";

  const styles = {
    page: {
      padding: "0",
      fontFamily: "Inter, sans-serif",
      background: "#f5f7fb",
      minHeight: "100vh",
      display: "flex",
    },
   

  
    mainContent: {
      flex: 1,
      padding: "30px",
      overflowY: "auto",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "30px",
    },
    headerTitle: {
      fontSize: "32px",
      fontWeight: 700,
      color: "#222",
    },
    headerActions: {
      display: "flex",
      gap: "15px",
    },
    searchBox: {
      position: "relative",
    },
    searchInput: {
      padding: "10px 15px 10px 40px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      width: "250px",
      fontSize: "14px",
    },
    filterBtn: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 15px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      background: "#fff",
      cursor: "pointer",
      fontSize: "14px",
    },
    notificationBtn: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "45px",
      height: "45px",
      borderRadius: "10px",
      border: "1px solid #ddd",
      background: "#fff",
      cursor: "pointer",
    },
    notificationBadge: {
      position: "absolute",
      top: "8px",
      right: "8px",
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: DANGER,
    },
    topImage: {
      width: "100%",
      height: "220px",
      borderRadius: "14px",
      objectFit: "cover",
      marginBottom: "30px",
      boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
    },
    statsContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      marginBottom: "30px",
    },
    statCard: {
      background: "#fff",
      padding: "25px",
      borderRadius: "14px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    statIcon: {
      width: "60px",
      height: "60px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    statContent: {
      flex: 1,
    },
    statTitle: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "5px",
    },
    statValue: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#222",
    },
    statChange: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "12px",
      marginTop: "5px",
    },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "14px",
      boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
      marginBottom: "30px",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#222",
    },
    cardAction: {
      color: PRIMARY,
      fontSize: "14px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
    },
    table: {
      width: "1030px",
      borderCollapse: "collapse",
    },
    th: {
      textAlign: "left",
      padding: "12px",
      fontSize: "14px",
      fontWeight: 600,
      background: "#f0f2f7",
      color: "#555",
    },
    td: {
      padding: "14px 12px",
      fontSize: "14px",
      borderBottom: "1px solid #eee",
      verticalAlign: "top",
    },
    classTitle: {
      fontSize: "15px",
      fontWeight: 600,
      color: "#222",
    },
    subjectText: {
      fontSize: "12px",
      marginTop: "3px",
      color: "#666",
    },
    badgeCompleted: {
      padding: "6px 12px",
      fontSize: "12px",
      borderRadius: "50px",
      background: "rgba(16,185,129,0.15)",
      color: SUCCESS,
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
    },
    badgePending: {
      padding: "6px 12px",
      fontSize: "12px",
      borderRadius: "50px",
      background: "rgba(239,68,68,0.15)",
      color: DANGER,
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
    },
    badgeInProgress: {
      padding: "6px 12px",
      fontSize: "12px",
      borderRadius: "50px",
      background: "rgba(217,119,6,0.15)",
      color: WARNING,
      display: "inline-flex",
      alignItems: "center",
      gap: "5px",
    },
    actionBtnMark: {
      background: ACCENT,
      color: "#fff",
      padding: "8px 18px",
      borderRadius: "8px",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
      marginRight: "8px",
    },
    actionBtnView: {
      background: "#fff",
      color: PRIMARY,
      padding: "8px 18px",
      borderRadius: "8px",
      border: `2px solid ${PRIMARY}`,
      fontWeight: 600,
      cursor: "pointer",
    },
    upcomingClass: {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      borderRadius: "10px",
      background: "#f9fafb",
      marginBottom: "15px",
      borderLeft: `4px solid ${PRIMARY}`,
    },
    upcomingClassInfo: {
      flex: 1,
    },
    upcomingClassTitle: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#222",
      marginBottom: "5px",
    },
    upcomingClassMeta: {
      display: "flex",
      gap: "15px",
      fontSize: "13px",
      color: "#666",
    },
    upcomingClassAction: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      color: PRIMARY,
      cursor: "pointer",
      fontSize: "14px",
    },
    activityItem: {
      display: "flex",
      gap: "15px",
      padding: "15px 0",
      borderBottom: "1px solid #eee",
    },
    activityIcon: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    activityContent: {
      flex: 1,
    },
    activityTitle: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#222",
      marginBottom: "3px",
    },
    activityTime: {
      fontSize: "12px",
      color: "#666",
    },
    chartContainer: {
      height: "250px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f9fafb",
      borderRadius: "10px",
      color: "#666",
      fontSize: "14px",
    },
    footer: {
      textAlign: "center",
      padding: "20px",
      color: "#666",
      fontSize: "14px",
      borderTop: "1px solid #eee",
    },
  };

  // SAMPLE CLASS DATA
  const classes = [
    {
      id: 1,
      title: "Smart Robotics - Module 1",
      subject: "Smart Robotics & Industry 4.0 Automation",
      time: "10:00 AM",
      date: "Today",
      students: 24,
      status: "Pending",
      attendanceRate: 0,
    },
    {
      id: 2,
      title: "Applied AI - Neural Networks",
      subject: "Applied AI & Machine Learning",
      time: "11:15 AM",
      date: "Today",
      students: 22,
      status: "Completed",
      attendanceRate: 91,
    },
    {
      id: 3,
      title: "IoT Systems - Sensors",
      subject: "IoT & IIoT for Smart Systems",
      time: "1:30 PM",
      date: "Today",
      students: 26,
      status: "Pending",
      attendanceRate: 0,
    },
    {
      id: 4,
      title: "Cloud Computing - AWS",
      subject: "Cloud & Edge Computing",
      time: "2:45 PM",
      date: "Today",
      students: 21,
      status: "Completed",
      attendanceRate: 86,
    },
    {
      id: 5,
      title: "Smart Robotics - Module 2",
      subject: "Smart Robotics & Industry 4.0 Automation",
      time: "4:00 PM",
      date: "Tomorrow",
      students: 18,
      status: "Completed",
      attendanceRate: 94,
    },
  ];

  const upcomingClasses = [
    {
      id: 6,
      title: "Data Science Fundamentals",
      subject: "Data Science & Analytics",
      time: "9:00 AM",
      date: "Tomorrow",
      students: 30,
    },
    {
      id: 7,
      title: "Blockchain Technology",
      subject: "Distributed Systems",
      time: "11:00 AM",
      date: "Tomorrow",
      students: 25,
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Attendance marked for Applied AI - Neural Networks",
      time: "2 hours ago",
      icon: <FiCheckCircle size={18} />,
      color: SUCCESS,
    },
    {
      id: 2,
      title: "New student enrolled in Smart Robotics - Module 1",
      time: "5 hours ago",
      icon: <FiUser size={18} />,
      color: INFO,
    },
    {
      id: 3,
      title: "Cloud Computing - AWS class completed",
      time: "Yesterday",
      icon: <FiBookOpen size={18} />,
      color: PRIMARY,
    },
    {
      id: 4,
      title: "Attendance report generated for last week",
      time: "2 days ago",
      icon: <FiDownload size={18} />,
      color: WARNING,
    },
  ];

  const filteredClasses = classes.filter(cls => {
    const matchesSearch = cls.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cls.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || cls.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div style={styles.page}>
    
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>Attendance Management</h1>
          
          <div style={styles.headerActions}>
            <div style={styles.searchBox}>
              <FiSearch style={{ position: "absolute", left: "15px", top: "12px", color: "#999" }} size={16} />
              <input
                type="text"
                placeholder="Search classes..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button style={styles.filterBtn}>
              <FiFilter size={16} />
              <span>Filter</span>
            </button>
            
            <div style={styles.notificationBtn}>
              <FiBell size={18} />
              <div style={styles.notificationBadge}></div>
            </div>
          </div>
        </div>

       

        {/* Stats Cards */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, background: "rgba(22, 64, 255, 0.1)" }}>
              <FiBookOpen size={24} color={PRIMARY} />
            </div>
            <div style={styles.statContent}>
              <div style={styles.statTitle}>Total Classes</div>
              <div style={styles.statValue}>12</div>
              <div style={{ ...styles.statChange, color: SUCCESS }}>
                <FiTrendingUp size={14} />
                <span>2 more than last week</span>
              </div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, background: "rgba(16, 185, 129, 0.1)" }}>
              <FiCheckCircle size={24} color={SUCCESS} />
            </div>
            <div style={styles.statContent}>
              <div style={styles.statTitle}>Attendance Rate</div>
              <div style={styles.statValue}>89%</div>
              <div style={{ ...styles.statChange, color: SUCCESS }}>
                <FiTrendingUp size={14} />
                <span>3% increase</span>
              </div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, background: "rgba(239, 124, 0, 0.1)" }}>
              <FiUsers size={24} color={ACCENT} />
            </div>
            <div style={styles.statContent}>
              <div style={styles.statTitle}>Total Students</div>
              <div style={styles.statValue}>142</div>
              <div style={{ ...styles.statChange, color: SUCCESS }}>
                <FiTrendingUp size={14} />
                <span>8 new this month</span>
              </div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={{ ...styles.statIcon, background: "rgba(239, 68, 68, 0.1)" }}>
              <FiAlertCircle size={24} color={DANGER} />
            </div>
            <div style={styles.statContent}>
              <div style={styles.statTitle}>Pending Attendance</div>
              <div style={styles.statValue}>3</div>
              <div style={{ ...styles.statChange, color: DANGER }}>
                <span>Requires action</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "8fr 1fr", gap: "50px" }}>
          {/* Today's Classes */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <h2 style={styles.cardTitle}>Today's Classes</h2>
              <div style={styles.cardAction}>
                <span>View All</span>
                <FiChevronRight size={16} />
              </div>
            </div>
            
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Class</th>
                  <th style={styles.th}>Time</th>
                  <th style={styles.th}>Students</th>
                  <th style={styles.th}>Status</th>
                  <th style={{ ...styles.th, textAlign: "right" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredClasses.map((cls) => (
                  <tr key={cls.id} style={{ transition: "0.2s" }}>
                    <td style={styles.td}>
                      <div style={styles.classTitle}>{cls.title}</div>
                      <div style={styles.subjectText}>{cls.subject}</div>
                    </td>

                    <td style={styles.td}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#444" }}>
                        <FiClock size={16} />
                        {cls.time}
                      </div>
                    </td>

                    <td style={styles.td}>{cls.students}</td>

                    <td style={styles.td}>
                      {cls.status === "Completed" ? (
                        <span style={styles.badgeCompleted}>
                          <FiCheckCircle size={14} /> Completed
                        </span>
                      ) : cls.status === "Pending" ? (
                        <span style={styles.badgePending}>
                          <FiXCircle size={14} /> Pending
                        </span>
                      ) : (
                        <span style={styles.badgeInProgress}>
                          <FiClock size={14} /> In Progress
                        </span>
                      )}
                    </td>

                    <td style={{ ...styles.td, textAlign: "right" }}>
                      {cls.status === "Pending" ? (
                        <button style={styles.actionBtnMark}>Mark Attendance</button>
                      ) : (
                        <button style={styles.actionBtnView}>View Report</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Attendance Trends */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Attendance Trends</h2>
            <div style={styles.cardAction}>
              <span>Export Report</span>
              <FiDownload size={16} />
            </div>
          </div>
          
          <div style={styles.chartContainer}>
            <p>Chart visualization would go here</p>
            <p>Showing attendance trends over the past month</p>
          </div>
        </div>

      </div>
    </div>
  );
}