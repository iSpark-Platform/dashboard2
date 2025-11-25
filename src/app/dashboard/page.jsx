"use client";
import React, { useState, useEffect } from 'react';
import {
  FiUsers,
  FiBookOpen,
  FiVideo,
  FiCheckCircle,
  FiBell,
  FiFileText,
  FiUpload,
  FiClipboard,
  FiUserCheck,
  FiVolumeX,
  FiEye,
  FiTrash2,
  FiPlus,
  FiCalendar,
  FiClock,
  FiTrendingUp,
  FiDownload,
  FiVolume2,
  FiChevronRight
} from 'react-icons/fi';

const InstructorDashboard = () => {
  const PRIMARY = "#1640FF";
  const ACCENT = "#EF7C00";
  const BACKGROUND = "#F8F9FF";
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [instructorName] = useState("Dr. Aravind Kumar");
  const [notifications] = useState(5);
  
  // Update date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  // Stats data
  const stats = [
    { icon: FiUsers, label: "Total Students", value: "1,248", color: PRIMARY },
    { icon: FiBookOpen, label: "Active Internships", value: "8", color: ACCENT },
    { icon: FiVideo, label: "Total Live Classes", value: "156", color: "#10b981" },
    { icon: FiCheckCircle, label: "Assignments Created", value: "42", color: "#8b5cf6" }
  ];
  
  // Current internships
  const internships = [
    {
      id: 1,
      name: "Smart Robotics & Industry 4.0 Automation",
      status: "Live Now",
      students: 145,
      todayClass: "14:00 - 15:30"
    },
    {
      id: 2,
      name: "Applied AI & Machine Learning",
      status: "Upcoming",
      students: 198,
      todayClass: "16:00 - 17:30"
    },
    {
      id: 3,
      name: "IoT & IIoT for Smart Systems",
      status: "Completed",
      students: 167,
      todayClass: "10:00 - 11:30"
    },
    {
      id: 4,
      name: "Cloud & Edge Computing",
      status: "Upcoming",
      students: 134,
      todayClass: "Tomorrow 10:00"
    },
    {
      id: 5,
      name: "3D Printing & Digital Fabrication",
      status: "No Class",
      students: 89,
      todayClass: "Friday 14:00"
    }
  ];
  
  // Today's live class
  const liveClass = {
    title: "Smart Robotics & Industry 4.0 Automation - Advanced Motion Control",
    time: "14:00 - 15:30",
    status: "Live Now",
    students: 145,
    topic: "Module 5: Implementing PID Controllers in Robot Kinematics"
  };
  
  // Recent materials
  const materials = [
    {
      id: 1,
      name: "Neural Networks Fundamentals - Lecture Slides",
      type: "PPT",
      uploadDate: "Nov 24, 2025",
      internship: "Applied AI",
      downloads: 142
    },
    {
      id: 2,
      name: "IoT Security Best Practices Guide",
      type: "PDF",
      uploadDate: "Nov 23, 2025",
      internship: "IoT & IIoT",
      downloads: 98
    },
    {
      id: 3,
      name: "Robot Kinematics Tutorial Video",
      type: "Video",
      uploadDate: "Nov 22, 2025",
      internship: "Smart Robotics",
      downloads: 167
    },
    {
      id: 4,
      name: "Cloud Architecture Design Patterns",
      type: "PDF",
      uploadDate: "Nov 21, 2025",
      internship: "Cloud Computing",
      downloads: 124
    }
  ];
  
  // Quick actions
  const quickActions = [
    { icon: FiUpload, label: "Upload Material", color: PRIMARY },
    { icon: FiClipboard, label: "Create Assignment", color: ACCENT },
    { icon: FiUserCheck, label: "See Attendance", color: "#10b981" },
    { icon: FiVolume2, label: "Post Announcement", color: "#f59e0b" },
    { icon: FiUsers, label: "View Students", color: "#8b5cf6" },
    { icon: FiPlus, label: "Add New Internship", color: "#ec4899" }
  ];
  
  // Announcements
  const announcements = [
    {
      id: 1,
      title: "Assignment Submission Deadline Extended",
      time: "2 hours ago",
      internship: "Applied AI & ML",
      type: "important"
    },
    {
      id: 2,
      title: "New Study Material Available for Module 5",
      time: "5 hours ago",
      internship: "Smart Robotics",
      type: "info"
    },
    {
      id: 3,
      title: "Guest Lecture Scheduled for Next Week",
      time: "1 day ago",
      internship: "Cloud Computing",
      type: "event"
    },
    {
      id: 4,
      title: "Student Feedback Survey Released",
      time: "2 days ago",
      internship: "All Internships",
      type: "info"
    }
  ];

  return (
    <div style={styles.dashboard}>
      {/* 1️⃣ TOP HEADER */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div>
            <h1 style={styles.welcomeText}>Welcome Back, {instructorName}</h1>
            <p style={styles.dateText}>{formatDate(currentDate)}</p>
          </div>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.notificationBell}>
            <FiBell size={20} color="#666" />
            {notifications > 0 && (
              <span style={styles.notificationBadge}>{notifications}</span>
            )}
          </div>
          <div style={styles.profileAvatar}>
            {instructorName.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>

      <div style={styles.content}>
        {/* 2️⃣ KEY STATS CARDS */}
        <div style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statCard}>
              <div style={{...styles.statIconBox, backgroundColor: `${stat.color}15`}}>
                <stat.icon size={28} color={stat.color} />
              </div>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 3️⃣ CURRENT INTERNSHIPS */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Current Internships</h2>
          <div style={styles.internshipsScroll}>
            {internships.map((internship) => (
              <div key={internship.id} style={styles.internshipCard}>
                <div style={{
                  ...styles.internshipHeader,
                  background: `linear-gradient(135deg, ${PRIMARY} 0%, #0e30cc 100%)`
                }}>
                  <span style={styles.internshipStatus}>{internship.status}</span>
                </div>
                <div style={styles.internshipBody}>
                  <h3 style={styles.internshipName}>{internship.name}</h3>
                  <div style={styles.internshipMeta}>
                    <div style={styles.metaItem}>
                      <FiClock size={14} color="#666" />
                      <span>{internship.todayClass}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <FiUsers size={14} color="#666" />
                      <span>{internship.students} Students</span>
                    </div>
                  </div>
                  <button style={styles.manageBtn}>
                    Manage
                    <FiChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4️⃣ TODAY'S LIVE CLASS */}
        <div style={styles.liveClassBlock}>
          <div style={styles.liveClassHeader}>
            <div style={styles.liveIndicator}>
              <span style={styles.livePulse}></span>
              <FiVideo size={20} color="white" />
              <span style={styles.liveText}>LIVE NOW</span>
            </div>
            <span style={styles.liveTime}>{liveClass.time}</span>
          </div>
          <h2 style={styles.liveClassTitle}>{liveClass.title}</h2>
          <p style={styles.liveClassTopic}>{liveClass.topic}</p>
          <div style={styles.liveClassFooter}>
            <div style={styles.liveClassStudents}>
              <FiUsers size={18} color="white" />
              <span>{liveClass.students} Students Enrolled</span>
            </div>
            <button style={styles.startLiveBtn}>
              <FiVideo size={18} />
              Start Live Class
            </button>
          </div>
        </div>

        <div style={styles.twoColumnLayout}>
          {/* LEFT COLUMN */}
          <div style={styles.leftColumn}>
            {/* 5️⃣ RECENTLY UPLOADED MATERIALS */}
            <div style={styles.section}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>Recently Uploaded Study Materials</h2>
                <button style={styles.viewAllBtn}>View All</button>
              </div>
              <div style={styles.materialsTable}>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Material Name</th>
                      <th style={styles.th}>Type</th>
                      <th style={styles.th}>Date</th>
                      <th style={styles.th}>Internship</th>
                      <th style={styles.th}>Downloads</th>
                      <th style={styles.th}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((material) => (
                      <tr key={material.id} style={styles.tr}>
                        <td style={styles.td}>
                          <div style={styles.materialName}>
                            {material.type === 'Video' ? <FiVideo size={16} color={PRIMARY} /> :
                             <FiFileText size={16} color={PRIMARY} />}
                            <span>{material.name}</span>
                          </div>
                        </td>
                        <td style={styles.td}>
                          <span style={{
                            ...styles.typeBadge,
                            backgroundColor: material.type === 'PDF' ? '#fef3c7' : 
                                           material.type === 'PPT' ? '#dbeafe' : '#fce7f3',
                            color: material.type === 'PDF' ? '#92400e' : 
                                   material.type === 'PPT' ? '#1e40af' : '#831843'
                          }}>
                            {material.type}
                          </span>
                        </td>
                        <td style={styles.td}>{material.uploadDate}</td>
                        <td style={styles.td}>{material.internship}</td>
                        <td style={styles.td}>
                          <div style={styles.downloadCount}>
                            <FiDownload size={14} color="#666" />
                            {material.downloads}
                          </div>
                        </td>
                        <td style={styles.td}>
                          <div style={styles.actionButtons}>
                            <button style={styles.iconBtn}>
                              <FiEye size={14} />
                            </button>
                            <button style={{...styles.iconBtn, backgroundColor: '#fee2e2'}}>
                              <FiTrash2 size={14} color="#dc2626" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6️⃣ QUICK ACTIONS */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Quick Actions</h2>
              <div style={styles.quickActionsGrid}>
                {quickActions.map((action, index) => (
                  <button key={index} style={styles.quickActionBtn}>
                    <div style={{...styles.quickActionIcon, backgroundColor: `${action.color}15`}}>
                      <action.icon size={24} color={action.color} />
                    </div>
                    <span style={styles.quickActionLabel}>{action.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={styles.rightColumn}>
            {/* 7️⃣ ANNOUNCEMENTS */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Announcements & Notifications</h2>
              <div style={styles.announcementsList}>
                {announcements.map((announcement) => (
                  <div key={announcement.id} style={styles.announcementCard}>
                    <div style={styles.announcementIcon}>
                      <FiVolume2 size={18} color={ACCENT} />
                    </div>
                    <div style={styles.announcementContent}>
                      <h4 style={styles.announcementTitle}>{announcement.title}</h4>
                      <div style={styles.announcementMeta}>
                        <span style={styles.announcementTime}>{announcement.time}</span>
                        <span style={styles.announcementTag}>{announcement.internship}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8️⃣ PERFORMANCE INSIGHTS */}
            <div style={styles.section}>
              <h2 style={styles.sectionTitle}>Performance Insights</h2>
              <div style={styles.insightsCard}>
                <div style={styles.insightItem}>
                  <div style={styles.insightLabel}>
                    <FiTrendingUp size={16} color={PRIMARY} />
                    <span>Average Attendance</span>
                  </div>
                  <div style={styles.insightValue}>87%</div>
                  <div style={styles.insightBar}>
                    <div style={{...styles.insightBarFill, width: '87%', backgroundColor: PRIMARY}}></div>
                  </div>
                </div>
                
                <div style={styles.insightItem}>
                  <div style={styles.insightLabel}>
                    <FiDownload size={16} color="#10b981" />
                    <span>Material Downloads</span>
                  </div>
                  <div style={styles.insightValue}>1,248</div>
                  <div style={styles.insightBar}>
                    <div style={{...styles.insightBarFill, width: '92%', backgroundColor: '#10b981'}}></div>
                  </div>
                </div>
                
                <div style={styles.insightItem}>
                  <div style={styles.insightLabel}>
                    <FiCheckCircle size={16} color="#8b5cf6" />
                    <span>Assignment Completion</span>
                  </div>
                  <div style={styles.insightValue}>76%</div>
                  <div style={styles.insightBar}>
                    <div style={{...styles.insightBarFill, width: '76%', backgroundColor: '#8b5cf6'}}></div>
                  </div>
                </div>

                <div style={styles.chartPlaceholder}>
                  <FiTrendingUp size={32} color="#cbd5e1" />
                  <p style={styles.chartPlaceholderText}>Detailed analytics chart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboard: {
    minHeight: '100vh',
    backgroundColor: '#F8F9FF',
    fontFamily: '"Inter", "Segoe UI", "Roboto", sans-serif',
  },

  // HEADER STYLES
  header: {
    background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
    padding: '24px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  },

  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },

  welcomeText: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0,
    marginBottom: '4px',
  },

  dateText: {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
  },

  headerRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },

  notificationBell: {
    position: 'relative',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '12px',
    transition: 'background-color 0.2s',
  },

  notificationBadge: {
    position: 'absolute',
    top: '6px',
    right: '6px',
    backgroundColor: '#EF7C00',
    color: 'white',
    fontSize: '11px',
    fontWeight: '700',
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #1640ff 0%, #0e30cc 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(22, 64, 255, 0.25)',
  },

  // CONTENT STYLES
  content: {
    padding: '32px 40px',
    maxWidth: '1600px',
    margin: '0 auto',
  },

  // STATS CARDS
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    marginBottom: '32px',
  },

  statCard: {
    backgroundColor: 'white',
    padding: '28px',
    borderRadius: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },

  statIconBox: {
    width: '56px',
    height: '56px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
  },

  statValue: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: '8px',
  },

  statLabel: {
    fontSize: '14px',
    color: '#64748b',
    fontWeight: '500',
  },

  // SECTION STYLES
  section: {
    marginBottom: '32px',
  },

  sectionTitle: {
    fontSize: '22px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '20px',
  },

  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },

  viewAllBtn: {
    padding: '8px 16px',
    backgroundColor: 'transparent',
    border: `1px solid #e5e7eb`,
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1640ff',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },

  // INTERNSHIPS SCROLL
  internshipsScroll: {
    display: 'flex',
    gap: '20px',
    overflowX: 'auto',
    paddingBottom: '12px',
  },

  internshipCard: {
    minWidth: '340px',
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    transition: 'all 0.3s',
  },

  internshipHeader: {
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  internshipStatus: {
    color: 'white',
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  internshipBody: {
    padding: '20px',
  },

  internshipName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '16px',
    lineHeight: '1.4',
  },

  internshipMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '16px',
  },

  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#64748b',
  },

  manageBtn: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#f1f5f9',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1640ff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: 'all 0.2s',
  },

  // LIVE CLASS BLOCK
  liveClassBlock: {
    background: 'linear-gradient(135deg, #1640ff 0%, #0e30cc 100%)',
    padding: '32px',
    borderRadius: '20px',
    marginBottom: '32px',
    boxShadow: '0 8px 24px rgba(22, 64, 255, 0.25)',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },

  liveClassHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
  },

  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#ef4444',
    padding: '8px 16px',
    borderRadius: '24px',
    position: 'relative',
  },

  livePulse: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
    animation: 'pulse 2s infinite',
  },

  liveText: {
    color: 'white',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },

  liveTime: {
    color: 'white',
    fontSize: '14px',
    fontWeight: '600',
  },

  liveClassTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    marginBottom: '8px',
  },

  liveClassTopic: {
    fontSize: '15px',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: '24px',
  },

  liveClassFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  liveClassStudents: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
  },

  startLiveBtn: {
    padding: '12px 28px',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '700',
    color: '#1640ff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s',
  },

  // TWO COLUMN LAYOUT
  twoColumnLayout: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '32px',
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  // MATERIALS TABLE
  materialsTable: {
    backgroundColor: 'white',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },

  th: {
    padding: '16px',
    textAlign: 'left',
    fontSize: '13px',
    fontWeight: '700',
    color: '#64748b',
    backgroundColor: '#f8fafc',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },

  tr: {
    borderBottom: '1px solid #f1f5f9',
    transition: 'background-color 0.2s',
  },

  td: {
    padding: '16px',
    fontSize: '14px',
    color: '#334155',
  },

  materialName: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: '500',
  },

  typeBadge: {
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
  },

  downloadCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    color: '#64748b',
  },

  actionButtons: {
    display: 'flex',
    gap: '8px',
  },

  iconBtn: {
    padding: '6px',
    backgroundColor: '#f1f5f9',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
  },

  // QUICK ACTIONS
  quickActionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
  },

  quickActionBtn: {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '16px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    transition: 'all 0.3s',
  },

  quickActionIcon: {
    width: '56px',
    height: '56px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  quickActionLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155',
    textAlign: 'center',
  },

  // ANNOUNCEMENTS
  announcementsList: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },

  announcementCard: {
    display: 'flex',
    gap: '14px',
    padding: '16px',
    borderLeft: '4px solid #EF7C00',
    borderRadius: '8px',
    marginBottom: '8px',
    transition: 'background-color 0.2s',
    cursor: 'pointer',
  },

  announcementIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#fff4e6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  announcementContent: {
    flex: 1,
  },

  announcementTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '6px',
  },

  announcementMeta: {
    display: 'flex',
    gap: '12px',
    fontSize: '12px',
  },

  announcementTime: {
    color: '#94a3b8',
  },

  announcementTag: {
    color: '#EF7C00',
    fontWeight: '600',
  },

  // PERFORMANCE INSIGHTS
  insightsCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  },

  insightItem: {
    marginBottom: '24px',
  },

  insightLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    marginBottom: '8px',
  },

  insightValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '8px',
  },

  insightBar: {
    width: '100%',
    height: '8px',
    backgroundColor: '#f1f5f9',
    borderRadius: '4px',
    overflow: 'hidden',
  },

  insightBarFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease',
  },

  chartPlaceholder: {
    marginTop: '24px',
    padding: '40px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  },

  chartPlaceholderText: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0,
  },
};

export default InstructorDashboard;