 "use client";
import React, { useState, useEffect } from 'react';
import { FiUsers, FiBookOpen, FiCalendar, FiActivity, FiPlus, FiDollarSign, FiEdit, FiBell, FiTrendingUp, FiClock, FiUserPlus, FiCheckCircle } from 'react-icons/fi';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalInstructors: 0,
    totalInternships: 0,
    activeInternships: 0,
    liveSessionsToday: 0
  });
  
  const [recentInternships, setRecentInternships] = useState([]);
  const [recentSignups, setRecentSignups] = useState([]);
  const [todayActivities, setTodayActivities] = useState([]);
  const [pendingPayments, setPendingPayments] = useState(0);
  const [platformUpdates, setPlatformUpdates] = useState([]);
  
  // Simulate fetching data from API
  useEffect(() => {
    // Mock data
    setStats({
      totalStudents: 1234,
      totalInstructors: 45,
      totalInternships: 78,
      activeInternships: 23,
      liveSessionsToday: 5
    });
    
    setRecentInternships([
      { id: 1, title: 'Smart Robotics & Industry 4.0 Automation Internship', instructor: 'John Doe', thumbnail: 'https://picsum.photos/seed/webdev/100/100.jpg' },
      { id: 2, title: 'Applied AI & Machine Learning: From Models to Real-World Applications', instructor: 'Jane Smith', thumbnail: 'https://picsum.photos/seed/datascience/100/100.jpg' },
      { id: 3, title: 'IoT & IIoT for Smart Systems and Industry 4.0', instructor: 'Mike Johnson', thumbnail: 'https://picsum.photos/seed/uidesign/100/100.jpg' }
    ]);
    
    setRecentSignups([
      { id: 1, name: 'Alice Brown', email: 'alice@example.com', date: '2023-11-15' },
      { id: 2, name: 'Bob Wilson', email: 'bob@example.com', date: '2023-11-14' },
      { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', date: '2023-11-13' }
    ]);
    
    setTodayActivities([
      { id: 1, type: 'live_class', title: 'React Advanced Concepts', time: '10:00 AM' },
      { id: 2, type: 'new_signup', title: '15 new students today', time: '9:00 AM' },
      { id: 3, type: 'pending_validation', title: '5 payments pending', time: '8:30 AM' }
    ]);
    
    setPendingPayments(5);
    
    setPlatformUpdates([
      { id: 1, title: 'System maintenance scheduled', date: '2023-11-20' },
      { id: 2, title: 'New features released', date: '2023-11-15' }
    ]);
  }, []);
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <p style={styles.subtitle}>Platform Overview</p>
      </div>
      
      {/* Stats Cards */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FiUsers size={24} color="#1640FF" />
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statValue}>{stats.totalStudents}</h3>
            <p style={styles.statLabel}>Total Students</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FiBookOpen size={24} color="#1640FF" />
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statValue}>{stats.totalInstructors}</h3>
            <p style={styles.statLabel}>Total Instructors</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FiCalendar size={24} color="#1640FF" />
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statValue}>{stats.totalInternships}</h3>
            <p style={styles.statLabel}>Total Internships</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FiActivity size={24} color="#1640FF" />
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statValue}>{stats.activeInternships}</h3>
            <p style={styles.statLabel}>Active Internships</p>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statIcon}>
            <FiClock size={24} color="#1640FF" />
          </div>
          <div style={styles.statContent}>
            <h3 style={styles.statValue}>{stats.liveSessionsToday}</h3>
            <p style={styles.statLabel}>Live Sessions Today</p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Column */}
        <div style={styles.leftColumn}>
          {/* Today's Activity */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Today's Activity</h2>
            <div style={styles.activityList}>
              {todayActivities.map(activity => (
                <div key={activity.id} style={styles.activityItem}>
                  <div style={styles.activityIcon}>
                    {activity.type === 'live_class' && <FiClock color="#1640FF" />}
                    {activity.type === 'new_signup' && <FiUserPlus color="#1640FF" />}
                    {activity.type === 'pending_validation' && <FiDollarSign color="#1640FF" />}
                  </div>
                  <div style={styles.activityContent}>
                    <p style={styles.activityTitle}>{activity.title}</p>
                    <p style={styles.activityTime}>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Quick Actions</h2>
            <div style={styles.quickActions}>
              <button style={styles.quickActionButton}>
                <FiPlus size={18} />
                <span>Create Internship</span>
              </button>
              <button style={styles.quickActionButton}>
                <FiDollarSign size={18} />
                <span>Validate Payments</span>
              </button>
              <button style={styles.quickActionButton}>
                <FiBookOpen size={18} />
                <span>Create Course</span>
              </button>
              <button style={styles.quickActionButton}>
                <FiBell size={18} />
                <span>Announcements</span>
              </button>
            </div>
          </div>
          
          {/* Recent Internships */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Recent Internships Created</h2>
            <div style={styles.internshipList}>
              {recentInternships.map(internship => (
                <div key={internship.id} style={styles.internshipItem}>
                  <img src={internship.thumbnail} alt={internship.title} style={styles.internshipThumbnail} />
                  <div style={styles.internshipContent}>
                    <h3 style={styles.internshipTitle}>{internship.title}</h3>
                    <p style={styles.internshipInstructor}>{internship.instructor}</p>
                  </div>
                  <button style={styles.editButton}>
                    <FiEdit size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div style={styles.rightColumn}>
          {/* Alert Card */}
          {pendingPayments > 0 && (
            <div style={styles.alertCard}>
              <div style={styles.alertIcon}>
                <FiDollarSign size={24} color="#EF7C00" />
              </div>
              <div style={styles.alertContent}>
                <h3 style={styles.alertTitle}>Pending Payment Validations</h3>
                <p style={styles.alertMessage}>{pendingPayments} payments require your attention</p>
                <button style={styles.alertButton}>Review Now</button>
              </div>
            </div>
          )}
          
          {/* Recent Student Signups */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Recent Student Signups</h2>
            <div style={styles.signupTable}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={styles.tableCell}>Name</th>
                    <th style={styles.tableCell}>Email</th>
                    <th style={styles.tableCell}>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentSignups.map(signup => (
                    <tr key={signup.id} style={styles.tableRow}>
                      <td style={styles.tableCell}>{signup.name}</td>
                      <td style={styles.tableCell}>{signup.email}</td>
                      <td style={styles.tableCell}>{signup.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Platform Updates */}
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Platform Updates</h2>
            <div style={styles.updateList}>
              {platformUpdates.map(update => (
                <div key={update.id} style={styles.updateItem}>
                  <div style={styles.updateIcon}>
                    <FiTrendingUp color="#1640FF" />
                  </div>
                  <div style={styles.updateContent}>
                    <h3 style={styles.updateTitle}>{update.title}</h3>
                    <p style={styles.updateDate}>{update.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    padding: '20px',
    color: '#333'
  },
  header: {
    marginBottom: '24px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#1a202c'
  },
  subtitle: {
    fontSize: '16px',
    color: '#718096',
    margin: '0'
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '24px'
  },
  statCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    minWidth: '200px'
  },
  statIcon: {
    marginRight: '16px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#f0f4ff'
  },
  statContent: {
    flex: '1'
  },
  statValue: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 4px 0',
    color: '#1a202c'
  },
  statLabel: {
    fontSize: '14px',
    color: '#718096',
    margin: '0'
  },
  mainContent: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px'
  },
  leftColumn: {
    flex: '2',
    minWidth: '300px'
  },
  rightColumn: {
    flex: '1',
    minWidth: '300px'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 16px 0',
    color: '#1a202c'
  },
  activityList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f7fafc'
  },
  activityIcon: {
    marginRight: '12px',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: '#fff'
  },
  activityContent: {
    flex: '1'
  },
  activityTitle: {
    fontSize: '14px',
    fontWeight: '500',
    margin: '0 0 4px 0',
    color: '#1a202c'
  },
  activityTime: {
    fontSize: '12px',
    color: '#718096',
    margin: '0'
  },
  quickActions: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '12px'
  },
  quickActionButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f7fafc',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: '#4a5568',
    fontWeight: '500',
    fontSize: '14px'
  },
  internshipList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  internshipItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f7fafc'
  },
  internshipThumbnail: {
    width: '60px',
    height: '60px',
    borderRadius: '8px',
    objectFit: 'cover',
    marginRight: '12px'
  },
  internshipContent: {
    flex: '1'
  },
  internshipTitle: {
    fontSize: '14px',
    fontWeight: '500',
    margin: '0 0 4px 0',
    color: '#1a202c'
  },
  internshipInstructor: {
    fontSize: '12px',
    color: '#718096',
    margin: '0'
  },
  editButton: {
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '1px solid #e2e8f0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  alertCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    borderLeft: '4px solid #EF7C00'
  },
  alertIcon: {
    marginRight: '16px',
    padding: '10px',
    borderRadius: '50%',
    backgroundColor: '#fff8f0'
  },
  alertContent: {
    flex: '1'
  },
  alertTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#1a202c'
  },
  alertMessage: {
    fontSize: '14px',
    color: '#718096',
    margin: '0 0 12px 0'
  },
  alertButton: {
    backgroundColor: '#EF7C00',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  signupTable: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    borderBottom: '1px solid #e2e8f0'
  },
  tableRow: {
    borderBottom: '1px solid #e2e8f0'
  },
  tableCell: {
    padding: '12px 8px',
    textAlign: 'left',
    fontSize: '14px'
  },
  updateList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  updateItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px',
    borderRadius: '8px',
    backgroundColor: '#f7fafc'
  },
  updateIcon: {
    marginRight: '12px',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: '#fff'
  },
  updateContent: {
    flex: '1'
  },
  updateTitle: {
    fontSize: '14px',
    fontWeight: '500',
    margin: '0 0 4px 0',
    color: '#1a202c'
  },
  updateDate: {
    fontSize: '12px',
    color: '#718096',
    margin: '0'
  }
};

export default AdminDashboard;