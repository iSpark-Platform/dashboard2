"use client";
import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiCalendar, FiChevronLeft, FiChevronRight, FiTrendingUp, FiClock, FiBook, FiAlertCircle } from 'react-icons/fi';

const AttendancePage = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceData, setAttendanceData] = useState([]);
  
  // Generate realistic attendance data for the past 3 months
  useEffect(() => {
    const generateAttendanceData = () => {
      const data = [];
      const today = new Date();
      
      // Generate data for the past 90 days
      for (let i = 90; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        // Skip weekends (no classes)
        if (date.getDay() === 0 || date.getDay() === 6) continue;
        
        // Randomly determine attendance status with some patterns
        let status = 'present';
        let reason = '';
        
        // Simulate some absences (about 10% of days)
        if (Math.random() < 0.1) {
          status = 'absent';
          reason = ['Medical Leave', 'Personal Emergency', 'Family Issue'][Math.floor(Math.random() * 3)];
        }
        
        // Simulate some late arrivals (about 5% of days)
        let isLate = false;
        if (status === 'present' && Math.random() < 0.05) {
          isLate = true;
        }
        
        // Generate class details
       const subjects = [
  "Smart Robotics & Industry 4.0 Automation Internship",
  "Applied AI & Machine Learning: From Models to Real-World Applications",
  "IoT & IIoT for Smart Systems and Industry 4.0",
  "Cloud & Edge Computing for Connected Intelligence",
  "3D Printing & Digital Fabrication for Engineers"
];

        
        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        const startTime = ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'][Math.floor(Math.random() * 4)];
        const duration = [60, 90, 120][Math.floor(Math.random() * 3)];
        
        data.push({
          date: date.toISOString().split('T')[0],
          status,
          reason,
          isLate,
          subject,
          startTime,
          duration,
          instructor: ['Dr. Smith', 'Prof. Johnson', 'Ms. Williams', 'Mr. Brown'][Math.floor(Math.random() * 4)]
        });
      }
      
      return data;
    };
    
    setAttendanceData(generateAttendanceData());
  }, []);
  
  // Calculate attendance statistics
  const totalClasses = attendanceData.length;
  const presentDays = attendanceData.filter(d => d.status === 'present').length;
  const absentDays = attendanceData.filter(d => d.status === 'absent').length;
  const lateDays = attendanceData.filter(d => d.isLate).length;
  const attendancePercentage = totalClasses > 0 ? Math.round((presentDays / totalClasses) * 100) : 0;
  
  // Get attendance for current month
  const getCurrentMonthData = () => {
    return attendanceData.filter(d => {
      const date = new Date(d.date);
      return date.getMonth() === currentMonth.getMonth() && 
             date.getFullYear() === currentMonth.getFullYear();
    });
  };
  
  // Get attendance trend (last 7 days)
  const getAttendanceTrend = () => {
    const last7Days = attendanceData.slice(-7);
    const presentLast7 = last7Days.filter(d => d.status === 'present').length;
    return Math.round((presentLast7 / last7Days.length) * 100);
  };
  
  // Get month name
  const getMonthName = (date) => {
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
  };
  
  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  // Get days in month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };
  
  // Get first day of month (0-6, where 0 is Sunday)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };
  
  // Get attendance status for a specific date
  const getAttendanceStatus = (date) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    return attendanceData.find(d => d.date === dateStr);
  };
  
  // Render monthly view
  const renderMonthlyView = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} style={styles.monthDayEmpty}></div>);
    }
    
    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const attendance = getAttendanceStatus(i);
      const isToday = new Date().getDate() === i && 
                     new Date().getMonth() === currentMonth.getMonth() && 
                     new Date().getFullYear() === currentMonth.getFullYear();
      
      days.push(
        <div 
          key={i} 
          style={{
            ...styles.monthDay,
            ...(isToday && styles.monthDayToday),
            ...(attendance && attendance.status === 'present' && styles.monthDayPresent),
            ...(attendance && attendance.status === 'absent' && styles.monthDayAbsent),
            ...(attendance && attendance.isLate && styles.monthDayLate)
          }}
          onClick={() => attendance && setSelectedDate(attendance)}
        >
          <div style={styles.monthDayNumber}>{i}</div>
          {attendance && (
            <div style={{
              ...styles.monthDayIndicator,
              backgroundColor: attendance.status === 'present' ? '#1EC787' : '#FF5E5E'
            }}></div>
          )}
        </div>
      );
    }
    
    return (
      <div style={styles.monthlyContainer}>
        <div style={styles.monthHeader}>
          <button onClick={previousMonth} style={styles.monthNavButton}>
            <FiChevronLeft />
          </button>
          <div style={styles.monthTitle}>{getMonthName(currentMonth)}</div>
          <button onClick={nextMonth} style={styles.monthNavButton}>
            <FiChevronRight />
          </button>
        </div>
        <div style={styles.weekDayNames}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} style={styles.weekDayName}>{day}</div>
          ))}
        </div>
        <div style={styles.monthDays}>{days}</div>
      </div>
    );
  };
  
  // Render weekly view
  const renderWeeklyView = () => {
    const today = new Date();
    const weekDays = [];
    
    // Get the current week (starting from Monday)
    const monday = new Date(today);
    const day = today.getDay();
    const diff = today.getDate() - day + (day === 0 ? -6 : 1);
    monday.setDate(diff);
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      
      const dateStr = date.toISOString().split('T')[0];
      const attendance = attendanceData.find(d => d.date === dateStr);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      
      weekDays.push({
        day: dayName,
        date: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' }),
        attendance
      });
    }
    
    return (
      <div style={styles.weeklyContainer}>
        <div style={styles.weeklyHeader}>This Week's Attendance</div>
        <div style={styles.weeklyDays}>
          {weekDays.map((day, index) => (
            <div key={index} style={styles.weekDay}>
              <div style={styles.weekDayName}>{day.day}</div>
              <div style={styles.weekDayDate}>{day.date}</div>
              <div style={styles.weekDayMonth}>{day.month}</div>
              <div style={styles.weekDayStatus}>
                {day.attendance ? (
                  day.attendance.status === 'present' ? (
                    <div style={styles.presentDot}></div>
                  ) : (
                    <div style={styles.absentDot}></div>
                  )
                ) : (
                  <div style={styles.noClassDot}></div>
                )}
              </div>
              {day.attendance && day.attendance.isLate && (
                <div style={styles.lateIndicator}>Late</div>
              )}
            </div>
          ))}
        </div>
        <div style={styles.timeline}></div>
      </div>
    );
  };
  
  // Render daily view
  const renderDailyView = () => {
    const recentAttendance = attendanceData.slice(-10).reverse();
    
    return (
      <div style={styles.dailyContainer}>
        <div style={styles.dailyHeader}>Recent Attendance</div>
        <div style={styles.attendanceList}>
          {recentAttendance.map((item, index) => (
            <div key={index} style={styles.attendanceItem}>
              <div style={styles.attendanceDate}>
                <div style={styles.attendanceDay}>{new Date(item.date).getDate()}</div>
                <div style={styles.attendanceMonth}>{new Date(item.date).toLocaleDateString('en-US', { month: 'short' })}</div>
              </div>
              <div style={styles.attendanceDetails}>
                <div style={styles.attendanceSubject}>{item.subject}</div>
                <div style={styles.attendanceInfo}>
                  <FiClock style={styles.infoIcon} />
                  <span>{item.startTime} ({item.duration} min)</span>
                </div>
                <div style={styles.attendanceInfo}>
                  <FiBook style={styles.infoIcon} />
                  <span>{item.instructor}</span>
                </div>
                {item.reason && (
                  <div style={styles.absenceReason}>
                    <FiAlertCircle style={styles.infoIcon} />
                    <span>{item.reason}</span>
                  </div>
                )}
              </div>
              <div style={styles.attendanceStatus}>
                {item.status === 'present' ? (
                  <div style={styles.presentBadge}>
                    <FiCheckCircle style={styles.presentIcon} />
                    <span>Present</span>
                  </div>
                ) : (
                  <div style={styles.absentBadge}>
                    <FiXCircle style={styles.absentIcon} />
                    <span>Absent</span>
                  </div>
                )}
                {item.isLate && (
                  <div style={styles.lateBadge}>Late</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div style={styles.container}>
      {/* Header with Statistics */}
      <div style={styles.header}>
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
  Attendance Tracking
</h1>

        <div style={styles.attendanceSummary}>
          <div style={styles.attendanceChart}>
            <div style={{
              ...styles.donutChart,
              background: `conic-gradient(#1EC787 0% ${attendancePercentage * 3.6}%, #e2e8f0 ${attendancePercentage * 3.6}% 100%)`
            }}>
              <div style={styles.donutHole}>
                <div style={styles.attendancePercentage}>{attendancePercentage}%</div>
                <div style={styles.attendanceLabel}>Overall</div>
              </div>
            </div>
          </div>
          <div style={styles.attendanceStats}>
            <div style={styles.statItem}>
              <div style={{...styles.statNumber, color: '#1EC787'}}>{presentDays}</div>
              <div style={styles.statLabel}>Present</div>
            </div>
            <div style={styles.statItem}>
              <div style={{...styles.statNumber, color: '#FF5E5E'}}>{absentDays}</div>
              <div style={styles.statLabel}>Absent</div>
            </div>
            <div style={styles.statItem}>
              <div style={{...styles.statNumber, color: '#F59E0B'}}>{lateDays}</div>
              <div style={styles.statLabel}>Late</div>
            </div>
            <div style={styles.statItem}>
              <div style={{...styles.statNumber, color: '#1640FF'}}>{getAttendanceTrend()}%</div>
              <div style={styles.statLabel}>This Week</div>
              <FiTrendingUp style={styles.trendIcon} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div style={styles.tabsContainer}>
        <button 
          style={activeTab === 'daily' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('daily')}
        >
          Daily View
        </button>
        <button 
          style={activeTab === 'weekly' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('weekly')}
        >
          Weekly View
        </button>
        <button 
          style={activeTab === 'monthly' ? {...styles.tab, ...styles.activeTab} : styles.tab}
          onClick={() => setActiveTab('monthly')}
        >
          Monthly View
        </button>
      </div>
      
      {/* Content based on active tab */}
      <div style={styles.content}>
        {activeTab === 'daily' && renderDailyView()}
        {activeTab === 'weekly' && renderWeeklyView()}
        {activeTab === 'monthly' && renderMonthlyView()}
      </div>
      
      {/* Selected Date Detail Modal */}
      {selectedDate && (
        <div style={styles.modalOverlay} onClick={() => setSelectedDate(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Attendance Details</h3>
              <button style={styles.closeButton} onClick={() => setSelectedDate(null)}>×</button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.modalDate}>
                <FiCalendar style={styles.modalIcon} />
                {new Date(selectedDate.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Class Information</h4>
                <div style={styles.modalInfo}>
                  <span style={styles.modalLabel}>Subject:</span>
                  <span>{selectedDate.subject}</span>
                </div>
                <div style={styles.modalInfo}>
                  <span style={styles.modalLabel}>Instructor:</span>
                  <span>{selectedDate.instructor}</span>
                </div>
                <div style={styles.modalInfo}>
                  <span style={styles.modalLabel}>Time:</span>
                  <span>{selectedDate.startTime} ({selectedDate.duration} minutes)</span>
                </div>
              </div>
              <div style={styles.modalSection}>
                <h4 style={styles.modalSectionTitle}>Attendance Status</h4>
                <div style={styles.modalStatus}>
                  {selectedDate.status === 'present' ? (
                    <div style={styles.presentBadge}>
                      <FiCheckCircle style={styles.presentIcon} />
                      <span>Present</span>
                    </div>
                  ) : (
                    <div style={styles.absentBadge}>
                      <FiXCircle style={styles.absentIcon} />
                      <span>Absent</span>
                    </div>
                  )}
                  {selectedDate.isLate && (
                    <div style={styles.lateBadge}>Late Arrival</div>
                  )}
                </div>
                {selectedDate.reason && (
                  <div style={styles.modalInfo}>
                    <span style={styles.modalLabel}>Reason:</span>
                    <span>{selectedDate.reason}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: " 'Inter', sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '30px',
    marginBottom: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  },
  pageTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a202c',
    margin: '0 0 30px 0'
  },
  attendanceSummary: {
    display: 'flex',
    alignItems: 'center',
    gap: '40px'
  },
  attendanceChart: {
    position: 'relative'
  },
  donutChart: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    position: 'relative',
    boxShadow: '0 4px 15px rgba(30, 199, 135, 0.2)'
  },
  donutHole: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  attendancePercentage: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a202c'
  },
  attendanceLabel: {
    fontSize: '14px',
    color: '#718096',
    marginTop: '4px'
  },
  attendanceStats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  statNumber: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a202c'
  },
  statLabel: {
    fontSize: '14px',
    color: '#718096',
    marginTop: '4px'
  },
  trendIcon: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    color: '#1EC787',
    fontSize: '16px'
  },
  tabsContainer: {
    display: 'flex',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '6px',
    marginBottom: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
  },
  tab: {
    flex: 1,
    padding: '14px 24px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: 'transparent',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '500',
    color: '#718096',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  activeTab: {
    backgroundColor: '#1640FF',
    color: '#ffffff',
    boxShadow: '0 4px 10px rgba(22, 64, 255, 0.3)'
  },
  content: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '30px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    minHeight: '500px'
  },
  monthlyContainer: {
    padding: '10px 0'
  },
  monthHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px'
  },
  monthNavButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#f7fafc',
    color: '#4a5568',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  monthTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c'
  },
  weekDayNames: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
    marginBottom: '10px'
  },
  weekDayName: {
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '14px',
    fontWeight: '600',
    color: '#718096'
  },
  monthDays: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px'
  },
  monthDay: {
    aspectRatio: '1',
    borderRadius: '12px',
    backgroundColor: '#f7fafc',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  monthDayEmpty: {
    aspectRatio: '1'
  },
  monthDayToday: {
    backgroundColor: '#e6f0ff',
    border: '2px solid #1640FF'
  },
  monthDayPresent: {
    backgroundColor: '#e6fff2'
  },
  monthDayAbsent: {
    backgroundColor: '#fff0f0'
  },
  monthDayLate: {
    border: '2px solid #F59E0B'
  },
  monthDayNumber: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a202c'
  },
  monthDayIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    bottom: '8px'
  },
  weeklyContainer: {
    padding: '10px 0'
  },
  weeklyHeader: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '20px'
  },
  weeklyDays: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  weekDay: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '12px',
    backgroundColor: '#f7fafc',
    position: 'relative'
  },
  weekDayDate: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a202c'
  },
  weekDayMonth: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '12px',
    color: '#718096',
    marginBottom: '10px'
  },
  weekDayStatus: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '5px'
  },
  presentDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#1EC787'
  },
  absentDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#FF5E5E'
  },
  noClassDot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0'
  },
  lateIndicator: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#F59E0B',
    color: '#ffffff',
    fontSize: '10px',
    padding: '2px 6px',
    borderRadius: '10px'
  },
  timeline: {
    height: '4px',
    backgroundColor: '#e2e8f0',
    borderRadius: '2px',
    position: 'relative'
  },
  dailyContainer: {
    padding: '10px 0'
  },
  dailyHeader: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: '20px'
  },
  attendanceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  attendanceItem: {
    display: 'flex',
    padding: '15px',
    borderRadius: '12px',
    backgroundColor: '#f7fafc',
    gap: '15px'
  },
  attendanceDate: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '60px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#ffffff'
  },
  attendanceDay: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a202c'
  },
  attendanceMonth: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '12px',
    color: '#718096'
  },
  attendanceDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  attendanceSubject: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a202c'
  },
  attendanceInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#718096'
  },
  infoIcon: {
    fontSize: '14px'
  },
  absenceReason: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
    color: '#FF5E5E'
  },
  attendanceStatus: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px'
  },
  presentBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '6px 12px',
    borderRadius: '20px',
    backgroundColor: '#e6fff2',
    color: '#1EC787',
    fontSize: '14px',
    fontWeight: '500'
  },
  presentIcon: {
    fontSize: '16px'
  },
  absentBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '6px 12px',
    borderRadius: '20px',
    backgroundColor: '#fff0f0',
    color: '#FF5E5E',
    fontSize: '14px',
    fontWeight: '500'
  },
  absentIcon: {
    fontSize: '16px'
  },
  lateBadge: {
    padding: '4px 8px',
    borderRadius: '10px',
    backgroundColor: '#fff7ed',
    color: '#F59E0B',
    fontSize: '12px',
    fontWeight: '500'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '80vh',
    overflow: 'auto'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e2e8f0'
  },
  modalTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a202c',
    margin: 0
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '24px',
    color: '#718096',
    cursor: 'pointer'
  },
  modalContent: {
    padding: '20px'
  },
  modalDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '20px',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '500',
    color: '#1a202c'
  },
  modalIcon: {
    color: '#1640FF'
  },
  modalSection: {
    marginBottom: '20px'
  },
  modalSectionTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 10px 0'
  },
  modalInfo: {
    display: 'flex',
    marginBottom: '8px',
    fontSize: '14px'
  },
  modalLabel: {
    minWidth: '100px',
    fontWeight: '500',
    color: '#718096'
  },
  modalStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  }
};

export default AttendancePage;