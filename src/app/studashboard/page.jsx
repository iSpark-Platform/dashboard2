"use client";
import React, { useState } from 'react';
import { FiVideo, FiCalendar, FiFileText, FiPlayCircle, FiBookOpen, FiCheckCircle, FiAward, FiBell, FiChevronDown, FiUser, FiLogOut, FiHome, FiGrid, FiClock } from 'react-icons/fi';

const StudentDashboard = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  
  // Sample data
  const internship = {
    title: "Smart Robotics & Industry 4.0 Automation Internship",
    progress: 65,
    startDate: "Jan 15, 2023",
    endDate: "Jun 30, 2023",
    nextClass: "Today, 3:00 PM"
  };
  
  const courses = [
    {
      id: 1,
      title: "Applied AI & Machine Learning: From Models to Real-World Applications",
      provider: "TechEdu Institute",
      duration: "12 weeks",
      description: "Master AI and ML techniques with hands-on projects"
    },
    {
      id: 2,
      title: "IoT & IIoT for Smart Systems and Industry 4.0",
      provider: "IoT Academy",
      duration: "10 weeks",
      description: "Learn to build and deploy IoT solutions for industrial applications"
    },
    {
      id: 3,
      title: "Cloud & Edge Computing for Connected Intelligence",
      provider: "CloudTech University",
      duration: "8 weeks",
      description: "Explore cloud infrastructure and edge computing paradigms"
    },
    {
      id: 4,
      title: "3D Printing & Digital Fabrication for Engineers",
      provider: "MakerSpace Institute",
      duration: "6 weeks",
      description: "Hands-on training in additive manufacturing and digital design"
    },
    {
      id: 5,
      title: "Professional Diploma in Humanoid Robotics for Service Industries",
      provider: "Robotics Academy",
      duration: "16 weeks",
      description: "Design and program humanoid robots for service applications"
    },
    {
      id: 6,
      title: "Diploma in Artificial Intelligence Applications Across Industries",
      provider: "AI Institute",
      duration: "14 weeks",
      description: "Apply AI solutions to solve real-world industry challenges"
    }
  ];
  
  const liveClasses = [
    {
      id: 1,
      title: "Robotics Control Systems",
      date: "Today",
      time: "3:00 PM - 4:30 PM",
      instructor: "Dr. Sarah Johnson",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Advanced Machine Learning Algorithms",
      date: "Tomorrow",
      time: "5:00 PM - 6:30 PM",
      instructor: "Prof. Michael Chen",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Cloud Architecture Design",
      date: "Jun 28",
      time: "2:00 PM - 3:30 PM",
      instructor: "Dr. Emily Rodriguez",
      status: "upcoming"
    }
  ];
  
  const activities = [
    {
      id: 1,
      type: "lesson",
      title: "Introduction to Neural Networks",
      course: "Applied AI & Machine Learning",
      time: "2 hours ago",
      completed: true
    },
    {
      id: 2,
      type: "video",
      title: "Robotic Arm Control Mechanisms",
      course: "Smart Robotics Internship",
      time: "Yesterday",
      completed: true
    },
    {
      id: 3,
      type: "assignment",
      title: "IoT Security Implementation",
      course: "IoT & IIoT for Smart Systems",
      time: "2 days ago",
      completed: true
    }
  ];
  
  const stats = [
    {
      id: 1,
      title: "Internship Progress",
      value: "65%",
      icon: <FiClock />,
      color: "#1640FF"
    },
    {
      id: 2,
      title: "Live Classes Attended",
      value: "24",
      icon: <FiCalendar />,
      color: "#1640FF"
    },
    {
      id: 3,
      title: "Courses Completed",
      value: "3",
      icon: <FiCheckCircle />,
      color: "#1640FF"
    },
    {
      id: 4,
      title: "Certificates Earned",
      value: "2",
      icon: <FiAward />,
      color: "#EF7C00"
    }
  ];
  
  return (
    <div style={styles.dashboard}>
      {/* Header */}
   <header style={styles.welcomeHeader}>
  <h2
  style={{
    textAlign: "left",
    fontFamily: "'Playfair Display', serif",
    fontSize: "28px",
    fontWeight: "600",
    color: "#0e0e0eff",
    margin: "0 0 10px 0"
  }}
>
  Welcome back, John!
</h2>

  <p style={styles.welcomeSubtitle}>Here’s your learning overview for today.</p>
</header>

      {/* Main Content */}
      <main style={styles.mainContent}>
        {/* Internship Status Card */}
        <div style={styles.internshipCard}>
          <h2 style={styles.cardTitle}>{internship.title}</h2>
          
          <div style={styles.progressContainer}>
            <div style={styles.progressInfo}>
              <span style={styles.progressLabel}>Progress</span>
              <span style={styles.progressValue}>{internship.progress}%</span>
            </div>
            <div style={styles.progressBar}>
              <div style={{...styles.progressFill, width: `${internship.progress}%`}}></div>
            </div>
          </div>
          
          <div style={styles.internshipDetails}>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Duration:</span>
              <span style={styles.detailValue}>{internship.startDate} - {internship.endDate}</span>
            </div>
            <div style={styles.detailItem}>
              <span style={styles.detailLabel}>Next Class:</span>
              <span style={styles.detailValue}>{internship.nextClass}</span>
            </div>
          </div>
          
          <div style={styles.quickLinks}>
            <button style={styles.quickLinkButton}>
              <FiVideo size={18} />
              Recordings
            </button>
            <button style={styles.quickLinkButton}>
              <FiCalendar size={18} />
              Schedule
            </button>
            <button style={styles.quickLinkButton}>
              <FiFileText size={18} />
              Materials
            </button>
          </div>
        </div>
        
        {/* Stats Section */}
        <div style={styles.statsContainer}>
          {stats.map(stat => (
            <div key={stat.id} style={styles.statCard}>
              <div style={{...styles.statIcon, color: stat.color}}>
                {stat.icon}
              </div>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statTitle}>{stat.title}</div>
            </div>
          ))}
        </div>
        
        {/* Live Classes Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Live Classes</h2>
          <div style={styles.classesContainer}>
            {liveClasses.map(cls => (
              <div key={cls.id} style={styles.classCard}>
                <div style={styles.classHeader}>
                  <h3 style={styles.classTitle}>{cls.title}</h3>
                  <button style={styles.joinButton}>
                    <FiPlayCircle size={16} />
                    Join
                  </button>
                </div>
                <div style={styles.classDetails}>
                  <div style={styles.classDetail}>
                    <span style={styles.classLabel}>Date:</span>
                    <span style={styles.classValue}>{cls.date}</span>
                  </div>
                  <div style={styles.classDetail}>
                    <span style={styles.classLabel}>Time:</span>
                    <span style={styles.classValue}>{cls.time}</span>
                  </div>
                  <div style={styles.classDetail}>
                    <span style={styles.classLabel}>Instructor:</span>
                    <span style={styles.classValue}>{cls.instructor}</span>
                  </div>
                </div>
                <div style={styles.classTimeline}>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineDot}></div>
                  <div style={styles.timelineDot}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Available Courses Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Available Courses & Internships</h2>
          <div style={styles.coursesGrid}>
            {courses.map(course => (
              <div key={course.id} style={styles.courseCard}>
                <h3 style={styles.courseTitle}>{course.title}</h3>
                <p style={styles.courseProvider}>{course.provider}</p>
                <p style={styles.courseDescription}>{course.description}</p>
                <div style={styles.courseDuration}>
                  <FiCalendar size={14} color="#6B7280" />
                  <span>{course.duration}</span>
                </div>
                <div style={styles.courseActions}>
                  <button style={styles.knowMoreButton}>Know More</button>
                  <button style={styles.enrollButton}>Enroll</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Activity</h2>
          <div style={styles.activitiesContainer}>
            {activities.map(activity => (
              <div key={activity.id} style={styles.activityCard}>
                <div style={styles.activityIcon}>
                  {activity.type === 'lesson' && <FiBookOpen size={20} color="#1640FF" />}
                  {activity.type === 'video' && <FiVideo size={20} color="#1640FF" />}
                  {activity.type === 'assignment' && <FiFileText size={20} color="#1640FF" />}
                </div>
                <div style={styles.activityContent}>
                  <h4 style={styles.activityTitle}>{activity.title}</h4>
                  <p style={styles.activityCourse}>{activity.course}</p>
                  <p style={styles.activityTime}>{activity.time}</p>
                </div>
                <div style={styles.activityStatus}>
                  {activity.completed && <FiCheckCircle size={20} color="#10B981" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// Styles
const styles = {
  dashboard: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#F8F9FC',
    minHeight: '100vh',
    color: '#1F2937'
  },
welcomeHeader: {
  width: "100%",
  padding: "20px 0",
  marginBottom: "0",
  paddingBottom: "0",   
},

welcomeTitle: {
  fontSize: "24px",
  fontWeight: "600",
  color: "#1F2937",
  margin: 0,
},

welcomeSubtitle: {
  textAlign: "left",
  fontFamily: "'Inter', sans-serif",
  fontSize: "18px",
  fontWeight: "400",
  color: "#6B7280",
  marginTop: "6px",
  marginBottom: "30px"
},


  userAvatar: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative'
  },
  userMenu: {
    position: 'absolute',
    top: '48px',
    right: '0',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '8px 0',
    minWidth: '150px',
    zIndex: 10
  },
  userMenuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#4B5563',
    transition: 'background-color 0.2s'
  },
  mainContent: {
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  internshipCard: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  cardTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 24px 0'
  },
  progressContainer: {
    marginBottom: '24px'
  },
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  progressLabel: {
    fontSize: '14px',
    color: '#6B7280'
  },
  progressValue: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1640FF'
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1640FF',
    borderRadius: '4px',
    transition: 'width 1s ease-in-out'
  },
  internshipDetails: {
    display: 'flex',
    gap: '32px',
    marginBottom: '24px'
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  detailLabel: {
    fontSize: '14px',
    color: '#6B7280'
  },
  detailValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#1F2937'
  },
  quickLinks: {
    display: 'flex',
    gap: '16px'
  },
  quickLinkButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    border: '1px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '24px',
    marginBottom: '32px'
  },
  statCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  statIcon: {
    fontSize: '24px',
    marginBottom: '16px'
  },
  statValue: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: '8px'
  },
  statTitle: {
    fontSize: '14px',
    color: '#6B7280'
  },
  section: {
    marginBottom: '32px'
  },
  sectionTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 24px 0'
  },
  classesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px'
  },
  classCard: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    position: 'relative'
  },
  classHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  classTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0
  },
  joinButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  classDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '16px'
  },
  classDetail: {
    display: 'flex',
    gap: '8px'
  },
  classLabel: {
    fontSize: '14px',
    color: '#6B7280',
    minWidth: '60px'
  },
  classValue: {
    fontSize: '14px',
    color: '#1F2937'
  },
  classTimeline: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6'
  },
  timelineDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#E5E7EB'
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px'
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #EBF5FF',
    transition: 'all 0.2s'
  },
  courseTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1640FF',
    margin: '0 0 8px 0'
  },
  courseProvider: {
    fontSize: '14px',
    color: '#6B7280',
    margin: '0 0 12px 0'
  },
  courseDescription: {
    fontSize: '14px',
    color: '#4B5563',
    margin: '0 0 16px 0',
    lineHeight: '1.5'
  },
  courseDuration: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '16px'
  },
  courseActions: {
    display: 'flex',
    gap: '12px'
  },
  knowMoreButton: {
    padding: '8px 16px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  enrollButton: {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#EF7C00',
    color: '#ffffff',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  activitiesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '16px'
  },
  activityCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  activityIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#F3F4F6'
  },
  activityContent: {
    flex: 1
  },
  activityTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 4px 0'
  },
  activityCourse: {
    fontSize: '14px',
    color: '#6B7280',
    margin: '0 0 4px 0'
  },
  activityTime: {
    fontSize: '12px',
    color: '#9CA3AF',
    margin: 0
  },
  activityStatus: {
    display: 'flex',
    alignItems: 'center'
  }
};

export default StudentDashboard;