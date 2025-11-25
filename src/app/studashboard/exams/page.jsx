"use client";
import React, { useState } from 'react';
import { FiLock, FiInfo, FiCalendar, FiClock, FiBook, FiAward, FiCheckCircle } from 'react-icons/fi';

const ExamsResultsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
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
  Exam Portal
</h1>

          <p style={styles.pageSubtitle}>Track your exams and view results</p>
        </div>
        
      </div>

      {/* Lock Illustration Section */}
      <div style={styles.lockIllustration}>
        <div style={styles.lockIconContainer}>
          <FiLock style={styles.lockIcon} />
        </div>
        <h2 style={styles.lockMessage}>Your exam will be available soon.</h2>
        <div style={styles.infoBadge}>
          <FiInfo style={styles.infoIcon} />
          Admin will notify you
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button 
          style={activeTab === 'upcoming' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('upcoming')}
        >
          Upcoming Exams
        </button>
        <button 
          style={activeTab === 'results' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('results')}
        >
          Results
        </button>
        <button 
          style={activeTab === 'courses' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </button>
      </div>

      {/* Main Content Area */}
      <div style={styles.contentArea}>
        {/* Left Column: Cards */}
        <div style={styles.leftColumn}>
          {activeTab === 'upcoming' && (
            <>
              {/* Upcoming Exam Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Final Semester Exam</h3>
                  <FiInfo style={styles.tooltipIcon} title="Exam will be activated by your instructor" />
                </div>
                <p style={styles.cardDescription}>
IoT & IIoT for Smart Systems and Industry 4.0</p>
                <div style={styles.cardDetails}>
                  <div style={styles.detailItem}>
                    <FiClock style={styles.detailIcon} />
                    <span>Duration: 2 hours</span>
                  </div>
                  <div style={styles.detailItem}>
                    <FiBook style={styles.detailIcon} />
                    <span>Questions: 50</span>
                  </div>
                </div>
                <div style={styles.lockedStatus}>
                  <FiLock style={styles.statusIcon} />
                  <span>Locked</span>
                </div>
              </div>

              {/* Another Upcoming Exam Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Mid-term Assessment</h3>
                  <FiInfo style={styles.tooltipIcon} title="Exam will be activated by your instructor" />
                </div>
                <p style={styles.cardDescription}>Cloud & Edge Computing for Connected Intelligence
</p>
                <div style={styles.cardDetails}>
                  <div style={styles.detailItem}>
                    <FiClock style={styles.detailIcon} />
                    <span>Duration: 1.5 hours</span>
                  </div>
                  <div style={styles.detailItem}>
                    <FiBook style={styles.detailIcon} />
                    <span>Questions: 30</span>
                  </div>
                </div>
                <div style={styles.lockedStatus}>
                  <FiLock style={styles.statusIcon} />
                  <span>Locked</span>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'results' && (
            <>
              {/* Results Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Previous Results</h3>
                  <FiInfo style={styles.tooltipIcon} title="Results will be published after evaluation" />
                </div>
                <div style={styles.resultsPlaceholder}>
                  <div style={styles.gradePlaceholder}>
                    <span style={styles.gradeLabel}>Grade:</span>
                    <span style={styles.gradeValue}>A+</span>
                  </div>
                  <div style={styles.gradePlaceholder}>
                    <span style={styles.gradeLabel}>Status:</span>
                    <span style={styles.gradeValue}>Completed</span>
                  </div>
                </div>
                <div style={styles.completedStatus}>
                  <FiCheckCircle style={styles.statusIcon} />
                  <span>Completed</span>
                </div>
              </div>

              {/* Another Results Card */}
              <div style={styles.card}>
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>Quiz Results</h3>
                  <FiInfo style={styles.tooltipIcon} title="Results will be published after evaluation" />
                </div>
                <div style={styles.resultsPlaceholder}>
                  <div style={styles.gradePlaceholder}>
                    <span style={styles.gradeLabel}>Score:</span>
                    <span style={styles.gradeValue}>85%</span>
                  </div>
                  <div style={styles.gradePlaceholder}>
                    <span style={styles.gradeLabel}>Status:</span>
                    <span style={styles.gradeValue}>Completed</span>
                  </div>
                </div>
                <div style={styles.completedStatus}>
                  <FiCheckCircle style={styles.statusIcon} />
                  <span>Completed</span>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'courses' && (
            <>
              {/* Course Card 1 */}
              <div style={styles.courseCard}>
                <div style={styles.courseHeader}>
                  <h3 style={styles.courseTitle}>Smart Robotics & Industry 4.0 Automation Internship</h3>
                  <FiAward style={styles.courseIcon} />
                </div>
                <p style={styles.courseDescription}>Learn advanced robotics and automation technologies for Industry 4.0 applications</p>
                <div style={styles.courseProgress}>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: '65%'}}></div>
                  </div>
                  <span style={styles.progressText}>65% Complete</span>
                </div>
              </div>

              {/* Course Card 2 */}
              <div style={styles.courseCard}>
                <div style={styles.courseHeader}>
                  <h3 style={styles.courseTitle}>Applied AI & Machine Learning: From Models to Real-World Applications</h3>
                  <FiAward style={styles.courseIcon} />
                </div>
                <p style={styles.courseDescription}>Master AI and ML techniques and apply them to solve real-world problems</p>
                <div style={styles.courseProgress}>
                  <div style={styles.progressBar}>
                    <div style={{...styles.progressFill, width: '40%'}}></div>
                  </div>
                  <span style={styles.progressText}>40% Complete</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Column: Calendar and Schedule */}
        <div style={styles.rightColumn}>
          <div style={styles.scheduleCard}>
            <h3 style={styles.cardTitle}>Exam Schedule</h3>
            
         {/* Mini Calendar Widget */}
<div style={styles.calendarWidget}>
  <div style={styles.calendarHeader}>
    <FiCalendar style={styles.calendarIcon} />
    <span>
      {new Date().toLocaleString("en-US", { month: "long" })}{" "}
      {new Date().getFullYear()}
    </span>
  </div>

  {/* Calendar Grid */}
  <div style={styles.calendarGrid}>
    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
      <div key={i} style={styles.calendarDayHeader}>{day}</div>
    ))}

    {Array.from({ length: 30 }, (_, i) => {
      const today = new Date().getDate();
const isToday = today === i + 1;


      return (
        <div
          key={i}
          style={isToday ? styles.calendarDayActive : styles.calendarDay}
        >
          {i + 1}
          {isToday && <div style={styles.examDot}></div>}
        </div>
      );
    })}
  </div>
</div>

            {/* Upcoming Exams List */}
            <div style={styles.examList}>
              <h4 style={styles.listTitle}>Upcoming Exams</h4>
              <div style={styles.examItem}>
                <div style={styles.examDateContainer}>
                  <div style={styles.examDay}>25</div>
                  <div style={styles.examMonth}>JUN</div>
                </div>
                <div style={styles.examInfo}>
                  <span style={styles.examName}>Professional Diploma in Humanoid Robotics for Service Industries</span>
                  <span style={styles.examTime}>10:00 AM - 12:00 PM</span>
                </div>
              </div>
              <div style={styles.examItem}>
                <div style={styles.examDateContainer}>
                  <div style={styles.examDay}>25</div>
                  <div style={styles.examMonth}>JUN</div>
                </div>
                <div style={styles.examInfo}>
                  <span style={styles.examName}>Applied AI & Machine Learning: From Models to Real-World Applications</span>
                  <span style={styles.examTime}>2:00 PM - 4:00 PM</span>
                </div>
              </div>
              <div style={styles.examItem}>
                <div style={styles.examDateContainer}>
                  <div style={styles.examDay}>05</div>
                  <div style={styles.examMonth}>JUL</div>
                </div>
                <div style={styles.examInfo}>
                  <span style={styles.examName}>
IoT & IIoT for Smart Systems and Industry 4.0</span>
                  <span style={styles.examTime}>11:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Courses Widget */}
          <div style={styles.coursesWidget}>
            <h3 style={styles.widgetTitle}>Recommended Courses</h3>
            <div style={styles.courseList}>
              <div style={styles.courseItem}>
                <div style={styles.courseItemIcon}>
                  <FiBook />
                </div>
                <div style={styles.courseItemInfo}>
                  <span style={styles.courseItemName}>IoT & IIoT for Smart Systems</span>
                  <span style={styles.courseItemDuration}>6 weeks</span>
                </div>
              </div>
              <div style={styles.courseItem}>
                <div style={styles.courseItemIcon}>
                  <FiBook />
                </div>
                <div style={styles.courseItemInfo}>
                  <span style={styles.courseItemName}>Cloud & Edge Computing</span>
                  <span style={styles.courseItemDuration}>8 weeks</span>
                </div>
              </div>
              <div style={styles.courseItem}>
                <div style={styles.courseItemIcon}>
                  <FiBook />
                </div>
                <div style={styles.courseItemInfo}>
                  <span style={styles.courseItemName}>3D Printing & Digital Fabrication</span>
                  <span style={styles.courseItemDuration}>4 weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#F8F9FC',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    color: '#333'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    padding: '20px 30px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  pageTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '28px',
    fontWeight: '700',
    color: '#141414ff',
    margin: '0 0 5px 0'
  },
  pageSubtitle: {
    fontSize: '16px',
    color: '#6B7280',
    margin: 0
  },
  userProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: '#1640ff',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
    fontSize: '18px'
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  userName: {
    fontWeight: '600',
    fontSize: '16px',
    color: '#1F2937'
  },
  userRole: {
    fontSize: '14px',
    color: '#6B7280'
  },
  lockIllustration: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '40px 20px',
    marginBottom: '30px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  lockIconContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(22, 64, 255, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px'
  },
  lockIcon: {
    fontSize: '60px',
    color: '#1640ff'
  },
  lockMessage: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 16px 0'
  },
  infoBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(22, 64, 255, 0.1)',
    color: '#1640ff',
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '15px',
    fontWeight: '500'
  },
  infoIcon: {
    fontSize: '16px'
  },
  tabContainer: {
    display: 'flex',
    marginBottom: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '6px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  tab: {
    flex: 1,
    padding: '12px 20px',
    border: 'none',
    background: 'none',
    fontSize: '16px',
    fontWeight: '500',
    color: '#6B7280',
    cursor: 'pointer',
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  },
  activeTab: {
    flex: 1,
    padding: '12px 20px',
    border: 'none',
    backgroundColor: '#1640ff',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(22, 64, 255, 0.3)'
  },
  contentArea: {
    display: 'flex',
    gap: '30px',
    width: '100%'
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
  card: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    border: '1px solid #F3F4F6'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  cardTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0
  },
  tooltipIcon: {
    color: '#9CA3AF',
    fontSize: '18px',
    cursor: 'help'
  },
  cardDescription: {
    fontSize: '16px',
    color: '#6B7280',
    margin: '0 0 20px 0'
  },
  cardDetails: {
    display: 'flex',
    gap: '20px',
    marginBottom: '20px'
  },
  detailItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    color: '#6B7280'
  },
  detailIcon: {
    color: '#1640ff'
  },
  resultsPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '20px'
  },
  gradePlaceholder: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  gradeLabel: {
    fontSize: '16px',
    color: '#6B7280'
  },
  gradeValue: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1640ff'
  },
  lockedStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(239, 124, 0, 0.1)',
    color: '#EF7C00',
    padding: '8px 16px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '500',
    width: 'fit-content'
  },
  completedStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    color: '#22C55E',
    padding: '8px 16px',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '500',
    width: 'fit-content'
  },
  statusIcon: {
    fontSize: '16px'
  },
  scheduleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #F3F4F6'
  },
  calendarWidget: {
    marginBottom: '24px'
  },
  calendarHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: '16px'
  },
  calendarIcon: {
    color: '#1640ff'
  },
  calendarGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '4px'
  },
  calendarDayHeader: {
    textAlign: 'center',
    fontSize: '12px',
    fontWeight: '600',
    color: '#9CA3AF',
    padding: '8px 0'
  },
  calendarDay: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#6B7280',
    padding: '8px 0',
    borderRadius: '8px',
    transition: 'all 0.2s ease'
  },
  calendarDayActive: {
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#1640ff',
    padding: '8px 0',
    borderRadius: '8px',
    fontWeight: '600',
    position: 'relative'
  },
  examDot: {
    position: 'absolute',
    bottom: '2px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: '#EF7C00'
  },
  examList: {
    borderTop: '1px solid #F3F4F6',
    paddingTop: '20px'
  },
  listTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 16px 0'
  },
  examItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px 0',
    borderBottom: '1px solid #F9FAFB',
    transition: 'all 0.2s ease'
  },
  examDateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    backgroundColor: 'rgba(22, 64, 255, 0.1)',
    borderRadius: '10px'
  },
  examDay: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1640ff'
  },
  examMonth: {
    fontSize: '10px',
    fontWeight: '600',
    color: '#1640ff',
    textTransform: 'uppercase'
  },
  examInfo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  examName: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: '4px'
  },
  examTime: {
    fontSize: '13px',
    color: '#6B7280'
  },
  examDate: {
    fontSize: '13px',
    color: '#6B7280'
  },
  coursesWidget: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #F3F4F6'
  },
  widgetTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 16px 0'
  },
  courseList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  courseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    borderRadius: '10px',
    backgroundColor: '#F9FAFB',
    transition: 'all 0.2s ease'
  },
  courseItemIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '8px',
    backgroundColor: 'rgba(22, 64, 255, 0.1)',
    color: '#1640ff'
  },
  courseItemInfo: {
    display: 'flex',
    flexDirection: 'column'
  },
  courseItemName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: '2px'
  },
  courseItemDuration: {
    fontSize: '12px',
    color: '#6B7280'
  },
  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '1px solid #F3F4F6',
    transition: 'all 0.3s ease'
  },
  courseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  courseTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: 0,
    flex: 1,
    paddingRight: '12px'
  },
  courseIcon: {
    color: '#EF7C00',
    fontSize: '20px'
  },
  courseDescription: {
    fontSize: '14px',
    color: '#6B7280',
    margin: '0 0 20px 0',
    lineHeight: '1.5'
  },
  courseProgress: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  progressBar: {
    height: '8px',
    backgroundColor: '#F3F4F6',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1640ff',
    borderRadius: '4px'
  },
  progressText: {
    fontSize: '14px',
    color: '#6B7280',
    textAlign: 'right'
  }
};

export default ExamsResultsPage;