"use client";
import React, { useState, useEffect } from 'react';
import { 
  FiClock, FiFile, FiAlertCircle, FiCalendar, FiPlay, FiCheck, 
  FiFilter, FiChevronDown, FiX, FiPaperclip, FiMessageCircle,
  FiVideo, FiBook, FiTrendingUp, FiUser, FiExternalLink, FiDownload
} from 'react-icons/fi';

const AssignmentsCoursesPage = () => {
  // CSS Variables for colors
  const colorVariables = {
    '--color-primary': '#1640FF',
    '--color-accent': '#EF7C00',
    '--color-success': '#10B981',
    '--color-danger': '#EF4444',
    '--color-warning': '#F59E0B',
    '--bg': '#F8F9FC',
    '--muted': '#6B7280',
    '--card-bg': '#FFFFFF',
    '--border': '#E5E7EB'
  };

  // State management
  const [activeTab, setActiveTab] = useState('pending');
  const [sortOption, setSortOption] = useState('latest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [liveClassStatus, setLiveClassStatus] = useState('upcoming');
  const [timeUntilClass, setTimeUntilClass] = useState(1800); // 30 minutes in seconds
  
  // Sample data
  const studentName = "Alex Johnson";
  
  const stats = {
    total: 12,
    pending: 3,
    completed: 8
  };
  
  const assignments = [
    {
      id: 1,
      title: "Robotics Control Systems Analysis",
      course: "Smart Robotics & Industry 4.0 Automation",
      description: "Analyze and implement control algorithms for robotic arms using ROS.",
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
      priority: "high",
      progress: 65,
      submitted: false,
      attachments: 3,
      estimatedTime: "3 hours",
      status: "pending"
    },
    {
      id: 2,
      title: "Machine Learning Model Optimization",
      course: "Applied AI & Machine Learning",
      description: "Optimize a pre-trained neural network for better performance on edge devices.",
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
      priority: "medium",
      progress: 30,
      submitted: false,
      attachments: 2,
      estimatedTime: "4 hours",
      status: "pending"
    },
    {
      id: 3,
      title: "IoT Security Protocol Implementation",
      course: "IoT & IIoT for Smart Systems",
      description: "Implement and test security protocols for IoT devices in a simulated environment.",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      priority: "low",
      progress: 0,
      submitted: false,
      attachments: 1,
      estimatedTime: "2 hours",
      status: "pending"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Design",
      course: "Cloud & Edge Computing",
      description: "Design a scalable cloud infrastructure for a real-world application.",
      dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
      priority: "medium",
      progress: 0,
      submitted: false,
      attachments: 0,
      estimatedTime: "5 hours",
      status: "upcoming"
    },
    {
      id: 5,
      title: "3D Printing Project",
      course: "3D Printing & Digital Fabrication",
      description: "Design and print a functional mechanical part using CAD software.",
      submittedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      grade: "A-",
      feedback: "Excellent design and execution. Consider optimizing support structures for complex geometries.",
      status: "completed"
    },
    {
      id: 6,
      title: "Humanoid Robotics Programming",
      course: "Professional Diploma in Humanoid Robotics",
      missedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      impact: "Grade reduction by 10%",
      status: "missed"
    }
  ];
  
  const liveClass = {
    id: 1,
    title: "Advanced Neural Networks",
    instructor: "Dr. Sarah Johnson",
    startTime: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes from now
    endTime: new Date(Date.now() + 120 * 60 * 1000), // 2 hours from now
    attendeesCount: 24,
    chatUnread: 3
  };
  
  const courses = [
    {
      id: 1,
      title: "Smart Robotics & Industry 4.0 Automation Internship",
      summary: "Hands-on experience with industrial robotics systems",
      duration: "12 weeks",
      level: "Advanced"
    },
    {
      id: 2,
      title: "Applied AI & Machine Learning",
      summary: "From models to real-world applications",
      duration: "10 weeks",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "IoT & IIoT for Smart Systems",
      summary: "Building connected systems for Industry 4.0",
      duration: "8 weeks",
      level: "Intermediate"
    },
    {
      id: 4,
      title: "Cloud & Edge Computing",
      summary: "Distributed systems for connected intelligence",
      duration: "6 weeks",
      level: "Advanced"
    }
  ];
  
  // Filter assignments based on active tab
  const filteredAssignments = assignments.filter(assignment => {
    if (activeTab === 'pending') return assignment.status === 'pending';
    if (activeTab === 'upcoming') return assignment.status === 'upcoming';
    if (activeTab === 'completed') return assignment.status === 'completed';
    if (activeTab === 'missed') return assignment.status === 'missed';
    return true;
  });
  
  // Sort assignments
  const sortedAssignments = [...filteredAssignments].sort((a, b) => {
    if (sortOption === 'latest') {
      return new Date(b.dueDate || b.submittedDate || b.missedDate) - 
             new Date(a.dueDate || a.submittedDate || a.missedDate);
    }
    if (sortOption === 'oldest') {
      return new Date(a.dueDate || a.submittedDate || a.missedDate) - 
             new Date(b.dueDate || b.submittedDate || b.missedDate);
    }
    if (sortOption === 'important') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });
  
  // Calculate days left for assignment
  const getDaysLeft = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };
  
  // Format date for display
  const formatDate = (date) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  // Format time for display
  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: '2-digit' };
    return new Date(date).toLocaleTimeString('en-US', options);
  };
  
  // Format countdown for live class
  const formatCountdown = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m ${secs}s`;
  };
  
  // Simulate real-time updates for live class
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeUntilClass(prev => {
        if (prev <= 0) {
          setLiveClassStatus('live');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };
  
  // Styles
  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      backgroundColor: '#F8F9FC',
      minHeight: '100vh',
      padding: '20px 24px',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#4B5563'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    welcome: {
      flex: 1
    },
    welcomeTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '28px',
      fontWeight: '700',
      color: '#1F2937',
      margin: '0 0 8px 0'
    },
    welcomeSubtitle: {
      fontSize: '16px',
      color: '#6B7280',
      margin: 0
    },
    stats: {
      display: 'flex',
      gap: '12px'
    },
    statPill: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12px 16px',
      borderRadius: '12px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      minWidth: '80px'
    },
    statValue: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1640FF',
      margin: '0 0 4px 0'
    },
    statLabel: {
      fontSize: '12px',
      color: '#6B7280',
      margin: 0
    },
    content: {
      display: 'flex',
      gap: '24px',
      flexDirection: 'row'
    },
    leftColumn: {
      flex: 2,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    rightColumn: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px',
      borderBottom: '1px solid #E5E7EB',
      overflowX: 'auto'
    },
    tab: {
      padding: '12px 16px',
      borderRadius: '8px 8px 0 0',
      border: 'none',
      background: 'none',
      fontSize: '14px',
      fontWeight: '500',
      color: '#6B7280',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      transition: 'all 0.2s ease'
    },
    activeTab: {
      backgroundColor: '#1640FF',
      color: '#FFFFFF'
    },
    tabCount: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      fontSize: '12px',
      fontWeight: '600'
    },
    controls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    sortDropdown: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      backgroundColor: '#FFFFFF',
      fontSize: '14px',
      color: '#4B5563',
      cursor: 'pointer'
    },
    filterButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      borderRadius: '8px',
      border: '1px solid #E5E7EB',
      backgroundColor: '#FFFFFF',
      fontSize: '14px',
      color: '#4B5563',
      cursor: 'pointer'
    },
    assignmentCard: {
      position: 'relative',
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderLeft: `6px solid transparent`,
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    },
    assignmentCardHover: {
      transform: 'translateY(-6px)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
    },
    urgentBadge: {
      position: 'absolute',
      top: '16px',
      right: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px 8px',
      borderRadius: '12px',
      backgroundColor: '#EF4444',
      color: '#FFFFFF',
      fontSize: '12px',
      fontWeight: '600',
      animation: 'pulse 2s infinite'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '12px'
    },
    cardTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '18px',
      fontWeight: '600',
      color: '#1F2937',
      margin: '0 0 4px 0',
      flex: 1
    },
    cardCourse: {
      fontSize: '14px',
      color: '#6B7280',
      margin: '0 0 12px 0'
    },
    cardDescription: {
      fontSize: '14px',
      color: '#4B5563',
      margin: '0 0 16px 0',
      lineHeight: '1.5'
    },
    cardMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px',
      fontSize: '14px',
      color: '#6B7280'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    progressBar: {
      flex: 1,
      height: '6px',
      backgroundColor: '#E5E7EB',
      borderRadius: '3px',
      marginRight: '16px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#1640FF',
      borderRadius: '3px',
      transition: 'width 0.5s ease'
    },
    cardActions: {
      display: 'flex',
      gap: '8px'
    },
    button: {
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    primaryButton: {
      backgroundColor: '#1640FF',
      color: '#FFFFFF'
    },
    accentButton: {
      backgroundColor: '#EF7C00',
      color: '#FFFFFF'
    },
    outlineButton: {
      backgroundColor: 'transparent',
      color: '#1640FF',
      border: '1px solid #1640FF'
    },
    liveClassCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '20px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
    },
    liveClassHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '16px'
    },
    liveClassTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '18px',
      fontWeight: '600',
      color: '#1F2937',
      margin: 0
    },
    liveStatus: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px'
    },
    liveDot: {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: '#10B981',
      animation: 'pulse 2s infinite'
    },
    liveText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#10B981'
    },
    upcomingText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#6B7280'
    },
    liveClassDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px'
    },
    liveClassMeta: {
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      fontSize: '14px',
      color: '#6B7280'
    },
    countdown: {
      display: 'flex',
      justifyContent: 'center',
      padding: '12px',
      backgroundColor: '#F3F4F6',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      color: '#1F2937',
      marginBottom: '16px'
    },
    quickLinks: {
      display: 'flex',
      gap: '8px',
      marginBottom: '16px'
    },
    quickLink: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '6px',
      padding: '12px',
      borderRadius: '8px',
      backgroundColor: '#F3F4F6',
      fontSize: '12px',
      color: '#4B5563',
      textDecoration: 'none',
      transition: 'all 0.2s ease'
    },
    quickLinkIcon: {
      fontSize: '18px',
      color: '#1640FF'
    },
    coursesGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '16px'
    },
    courseCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s ease'
    },
    courseTitle: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '16px',
      fontWeight: '600',
      color: '#1640FF',
      margin: '0 0 8px 0'
    },
    courseSummary: {
      fontSize: '14px',
      color: '#4B5563',
      margin: '0 0 12px 0',
      lineHeight: '1.4'
    },
    courseTags: {
      display: 'flex',
      gap: '8px',
      marginBottom: '12px'
    },
    courseTag: {
      padding: '4px 8px',
      borderRadius: '4px',
      backgroundColor: '#F3F4F6',
      fontSize: '12px',
      color: '#6B7280'
    },
    courseActions: {
      display: 'flex',
      gap: '8px'
    },
    modal: {
      position: 'fixed',
      top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    maxWidth: '800px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  modalTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#F3F4F6',
    border: 'none',
    cursor: 'pointer'
  },
  modalBody: {
    marginBottom: '24px'
  },
  modalSection: {
    marginBottom: '20px'
  },
  modalSectionTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 12px 0'
  },
  attachmentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  attachmentItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: '#F3F4F6'
  },
  feedbackBox: {
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#F0FDF4',
    border: '1px solid #D1FAE5'
  },
  feedbackText: {
    fontSize: '14px',
    color: '#065F46',
    margin: 0
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px'
  },
  completedCard: {
    borderLeftColor: '#10B981'
  },
  missedCard: {
    borderLeftColor: '#EF4444',
    backgroundColor: '#FEF2F2'
  },
  gradeBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '12px',
    backgroundColor: '#10B981',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  missedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '12px',
    backgroundColor: '#EF4444',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  timelineCard: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px'
  },
  timelineDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '60px'
  },
  timelineDay: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1F2937'
  },
  timelineMonth: {
    fontSize: '12px',
    color: '#6B7280'
  },
  timelineContent: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '16px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
  },
  responsive: {
    '@media (max-width: 768px)': {
      content: {
        flexDirection: 'column'
      },
      leftColumn: {
        width: '100%'
      },
      rightColumn: {
        width: '100%'
      },
      stats: {
        width: '100%',
        justifyContent: 'space-between'
      }
    }
  }
  };
  
  // Assignment Modal Component
  const AssignmentModal = ({ assignment, onClose }) => {
    if (!assignment) return null;
    
    return (
      <div style={styles.modal}>
        <div style={styles.modalContent}>
          <div style={styles.modalHeader}>
            <h2 style={styles.modalTitle}>{assignment.title}</h2>
            <button style={styles.closeButton} onClick={onClose}>
              <FiX />
            </button>
          </div>
          
          <div style={styles.modalBody}>
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Course</h3>
              <p>{assignment.course}</p>
            </div>
            
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Description</h3>
              <p>{assignment.description}</p>
            </div>
            
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Due Date</h3>
              <p>{formatDate(assignment.dueDate)} at {formatTime(assignment.dueDate)}</p>
            </div>
            
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Priority</h3>
              <p style={{ color: getPriorityColor(assignment.priority), fontWeight: '600' }}>
                {assignment.priority.charAt(0).toUpperCase() + assignment.priority.slice(1)}
              </p>
            </div>
            
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Estimated Time</h3>
              <p>{assignment.estimatedTime}</p>
            </div>
            
            <div style={styles.modalSection}>
              <h3 style={styles.modalSectionTitle}>Attachments</h3>
              <div style={styles.attachmentsList}>
                {assignment.attachments > 0 ? (
                  Array.from({ length: assignment.attachments }, (_, i) => (
                    <div key={i} style={styles.attachmentItem}>
                      <FiFile />
                      <span>Assignment Resource {i + 1}.pdf</span>
                      <FiDownload style={{ marginLeft: 'auto', cursor: 'pointer' }} />
                    </div>
                  ))
                ) : (
                  <p>No attachments</p>
                )}
              </div>
            </div>
            
            {assignment.status === 'completed' && (
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Grade & Feedback</h3>
                <div style={styles.gradeBadge}>
                  <FiCheck />
                  Grade: {assignment.grade}
                </div>
                <div style={styles.feedbackBox}>
                  <p style={styles.feedbackText}>{assignment.feedback}</p>
                </div>
              </div>
            )}
            
            {assignment.status === 'missed' && (
              <div style={styles.modalSection}>
                <h3 style={styles.modalSectionTitle}>Missed Information</h3>
                <div style={styles.missedBadge}>
                  <FiAlertCircle />
                  Missed on {formatDate(assignment.missedDate)}
                </div>
                <p>Impact: {assignment.impact}</p>
              </div>
            )}
          </div>
          
          <div style={styles.modalFooter}>
            <button style={{...styles.button, ...styles.outlineButton}} onClick={onClose}>
              Close
            </button>
            {assignment.status === 'pending' && (
              <button style={{...styles.button, ...styles.primaryButton}}>
                Submit Assignment
              </button>
            )}
            {assignment.status === 'missed' && (
              <button style={{...styles.button, ...styles.primaryButton}}>
                Contact Instructor
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.welcome}>
        <h1
  style={{
    textAlign: "center",
    marginBottom: "50px",
    fontFamily: "'Playfair Display', serif",
    fontSize: "42px",
    fontWeight: "700",
    color: "#1F2937",
    margin: "0 0 16px 0"
  }}
>
  Assignment Management
</h1>

        
        </div>
        
        <div style={styles.stats}>
          <div style={styles.statPill}>
            <div style={styles.statValue}>{stats.total}</div>
            <div style={styles.statLabel}>Total</div>
          </div>
          <div style={styles.statPill}>
            <div style={styles.statValue}>{stats.pending}</div>
            <div style={styles.statLabel}>Pending</div>
          </div>
          <div style={styles.statPill}>
            <div style={styles.statValue}>{stats.completed}</div>
            <div style={styles.statLabel}>Completed</div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={styles.content}>
        {/* Left Column - Assignments */}
        <div style={styles.leftColumn}>
          {/* Tabs */}
          <div style={styles.tabs}>
            <button 
              style={{...styles.tab, ...(activeTab === 'pending' ? styles.activeTab : {})}}
              onClick={() => setActiveTab('pending')}
            >
              Pending
              <span style={styles.tabCount}>
                {assignments.filter(a => a.status === 'pending').length}
              </span>
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'upcoming' ? styles.activeTab : {})}}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
              <span style={styles.tabCount}>
                {assignments.filter(a => a.status === 'upcoming').length}
              </span>
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'completed' ? styles.activeTab : {})}}
              onClick={() => setActiveTab('completed')}
            >
              Completed
              <span style={styles.tabCount}>
                {assignments.filter(a => a.status === 'completed').length}
              </span>
            </button>
            <button 
              style={{...styles.tab, ...(activeTab === 'missed' ? styles.activeTab : {})}}
              onClick={() => setActiveTab('missed')}
            >
              Missed
              <span style={styles.tabCount}>
                {assignments.filter(a => a.status === 'missed').length}
              </span>
            </button>
          </div>
          
          {/* Controls */}
          <div style={styles.controls}>
            <div style={styles.sortDropdown}>
              Sort by: {sortOption === 'latest' ? 'Latest' : sortOption === 'oldest' ? 'Oldest' : 'Most Important'}
              <FiChevronDown />
            </div>
            
            <button style={styles.filterButton}>
              <FiFilter />
              Filters
            </button>
          </div>
          
          {/* Assignment Cards */}
          {activeTab === 'upcoming' ? (
            // Timeline view for upcoming assignments
            <div>
              {sortedAssignments.map(assignment => (
                <div key={assignment.id} style={styles.timelineCard}>
                  <div style={styles.timelineDate}>
                    <div style={styles.timelineDay}>
                      {new Date(assignment.dueDate).getDate()}
                    </div>
                    <div style={styles.timelineMonth}>
                      {new Date(assignment.dueDate).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>
                  <div style={styles.timelineContent}>
                    <h3 style={styles.cardTitle}>{assignment.title}</h3>
                    <p style={styles.cardCourse}>{assignment.course}</p>
                    <div style={styles.cardMeta}>
                      <div style={styles.metaItem}>
                        <FiClock />
                        {assignment.estimatedTime}
                      </div>
                      <div style={styles.metaItem}>
                        <FiAlertCircle style={{ color: getPriorityColor(assignment.priority) }} />
                        {assignment.priority} priority
                      </div>
                    </div>
                    <button 
                      style={{...styles.button, ...styles.outlineButton, marginTop: '12px'}}
                      onClick={() => setSelectedAssignment(assignment)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Card view for other tabs
            <div>
              {sortedAssignments.map(assignment => (
                <div 
                  key={assignment.id} 
                  style={{
                    ...styles.assignmentCard,
                    ...(assignment.status === 'completed' ? styles.completedCard : {}),
                    ...(assignment.status === 'missed' ? styles.missedCard : {}),
                    borderLeftColor: getPriorityColor(assignment.priority)
                  }}
                  onClick={() => setSelectedAssignment(assignment)}
                >
                  {/* Urgent Badge */}
                  {assignment.status === 'pending' && getDaysLeft(assignment.dueDate) <= 3 && (
                    <div style={styles.urgentBadge}>
                      <FiAlertCircle />
                      {getDaysLeft(assignment.dueDate) === 0 ? 'Due today' : `${getDaysLeft(assignment.dueDate)} days left`}
                    </div>
                  )}
                  
                  {/* Completed Badge */}
                  {assignment.status === 'completed' && (
                    <div style={styles.gradeBadge}>
                      <FiCheck />
                      Grade: {assignment.grade}
                    </div>
                  )}
                  
                  {/* Missed Badge */}
                  {assignment.status === 'missed' && (
                    <div style={styles.missedBadge}>
                      <FiAlertCircle />
                      Missed
                    </div>
                  )}
                  
                  <div style={styles.cardHeader}>
                    <h3 style={styles.cardTitle}>{assignment.title}</h3>
                  </div>
                  
                  <p style={styles.cardCourse}>{assignment.course}</p>
                  <p style={styles.cardDescription}>{assignment.description}</p>
                  
                  <div style={styles.cardMeta}>
                    <div style={styles.metaItem}>
                      <FiCalendar />
                      {assignment.status === 'completed' 
                        ? `Submitted: ${formatDate(assignment.submittedDate)}`
                        : assignment.status === 'missed'
                        ? `Missed: ${formatDate(assignment.missedDate)}`
                        : `Due: ${formatDate(assignment.dueDate)}`
                      }
                    </div>
                    <div style={styles.metaItem}>
                      <FiClock />
                      {assignment.estimatedTime}
                    </div>
                    <div style={styles.metaItem}>
                      <FiPaperclip />
                      {assignment.attachments} attachments
                    </div>
                  </div>
                  
                  {assignment.status === 'pending' && (
                    <div style={styles.cardFooter}>
                      <div style={styles.progressBar}>
                        <div style={{...styles.progressFill, width: `${assignment.progress}%`}}></div>
                      </div>
                      <div style={styles.cardActions}>
                        <button style={{...styles.button, ...styles.outlineButton}}>
                          Continue
                        </button>
                        <button style={{...styles.button, ...styles.primaryButton}}>
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {assignment.status === 'completed' && (
                    <div style={styles.cardFooter}>
                      <div style={styles.cardActions}>
                        <button style={{...styles.button, ...styles.outlineButton}}>
                          View Submission
                        </button>
                        <button style={{...styles.button, ...styles.outlineButton}}>
                          Download
                        </button>
                      </div>
                    </div>
                  )}
                  
                  {assignment.status === 'missed' && (
                    <div style={styles.cardFooter}>
                      <div style={styles.cardActions}>
                        <button style={{...styles.button, ...styles.primaryButton}}>
                          Contact Instructor
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Right Column - Live Class & Courses */}
        <div style={styles.rightColumn}>
          {/* Live Class Card */}
          <div style={styles.liveClassCard}>
            <div style={styles.liveClassHeader}>
              <h3 style={styles.liveClassTitle}>{liveClass.title}</h3>
              <div style={styles.liveStatus}>
                {liveClassStatus === 'live' ? (
                  <>
                    <div style={styles.liveDot}></div>
                    <span style={styles.liveText}>Live Now</span>
                  </>
                ) : (
                  <span style={styles.upcomingText}>Starting Soon</span>
                )}
              </div>
            </div>
            
            <div style={styles.liveClassDetails}>
              <div style={styles.liveClassMeta}>
                <FiUser />
                {liveClass.instructor}
              </div>
              <div style={styles.liveClassMeta}>
                <FiCalendar />
                {formatDate(liveClass.startTime)} at {formatTime(liveClass.startTime)}
              </div>
              <div style={styles.liveClassMeta}>
                <FiTrendingUp />
                {liveClass.attendeesCount} attendees
              </div>
              {liveClass.chatUnread > 0 && (
                <div style={styles.liveClassMeta}>
                  <FiMessageCircle style={{ color: '#1640FF' }} />
                  <span style={{ color: '#1640FF' }}>{liveClass.chatUnread} unread messages</span>
                </div>
              )}
            </div>
            
            {liveClassStatus === 'upcoming' && (
              <div style={styles.countdown}>
                Starts in {formatCountdown(timeUntilClass)}
              </div>
            )}
            
            <button 
              style={{
                ...styles.button,
                ...(liveClassStatus === 'live' ? styles.primaryButton : styles.accentButton),
                width: '100%',
                marginBottom: '16px'
              }}
            >
              {liveClassStatus === 'live' ? (
                <>
                  <FiPlay />
                  Join Live Class
                </>
              ) : (
                <>
                  <FiCalendar />
                  Set Reminder
                </>
              )}
            </button>
            
            {/* Quick Links */}
            <div style={styles.quickLinks}>
              <a href="#" style={styles.quickLink}>
                <FiVideo style={styles.quickLinkIcon} />
                Recordings
              </a>
              <a href="#" style={styles.quickLink}>
                <FiBook style={styles.quickLinkIcon} />
                Materials
              </a>
              <a href="#" style={styles.quickLink}>
                <FiCalendar style={styles.quickLinkIcon} />
                Schedule
              </a>
            </div>
          </div>
          
          {/* Available Courses */}
          <div>
            <h3 style={styles.modalSectionTitle}>Available Courses</h3>
            <div style={styles.coursesGrid}>
              {courses.map(course => (
                <div key={course.id} style={styles.courseCard}>
                  <h4 style={styles.courseTitle}>{course.title}</h4>
                  <p style={styles.courseSummary}>{course.summary}</p>
                  <div style={styles.courseTags}>
                    <span style={styles.courseTag}>{course.duration}</span>
                    <span style={styles.courseTag}>{course.level}</span>
                  </div>
                  <div style={styles.courseActions}>
                    <button style={{...styles.button, ...styles.outlineButton, flex: 1}}>
                      Know More
                    </button>
                    <button style={{...styles.button, ...styles.accentButton, flex: 1}}>
                      Enroll
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Assignment Modal */}
      <AssignmentModal 
        assignment={selectedAssignment} 
        onClose={() => setSelectedAssignment(null)} 
      />
      
      <style jsx>{`
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="flex-direction: row"] {
            flex-direction: column !important;
          }
          
          div[style*="flex: 2"] {
            width: 100% !important;
          }
          
          div[style*="flex: 1"] {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AssignmentsCoursesPage;