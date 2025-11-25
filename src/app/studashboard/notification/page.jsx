"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiInfo, FiAlertCircle, FiCheck } from 'react-icons/fi';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <FiBell />,
      title: "New Course Available",
      description: "Advanced React Patterns has been added to your learning path.",
      timestamp: "5 mins ago",
      unread: true,
      important: false,
      category: "Update"
    },
    {
      id: 2,
      icon: <FiAlertCircle />,
      title: "Exam Reminder",
      description: "Your JavaScript Fundamentals exam is scheduled for tomorrow at 10:00 AM.",
      timestamp: "1 hour ago",
      unread: true,
      important: true,
      category: "Exam"
    },
    {
      id: 3,
      icon: <FiInfo />,
      title: "Class Assignment Due",
      description: "Complete the CSS Grid assignment by the end of this week.",
      timestamp: "3 hours ago",
      unread: true,
      important: false,
      category: "Class"
    },
    {
      id: 4,
      icon: <FiBell />,
      title: "Achievement Unlocked",
      description: "Congratulations! You've completed the HTML & CSS Basics course.",
      timestamp: "Yesterday",
      unread: false,
      important: false,
      category: "Update"
    },
    {
      id: 5,
      icon: <FiInfo />,
      title: "New Study Material",
      description: "New resources have been added to your Node.js course.",
      timestamp: "2 days ago",
      unread: false,
      important: false,
      category: "Class"
    },
    {
      id: 6,
      icon: <FiAlertCircle />,
      title: "Important Deadline",
      description: "Submit your final project for the React course by Friday.",
      timestamp: "3 days ago",
      unread: false,
      important: true,
      category: "Exam"
    }
  ]);
  
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const observerRef = useRef();
  const lastNotificationRef = useRef();
  
  const handleMarkAllAsRead = () => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => ({ ...notification, unread: false }))
    );
  };
  
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  
  const filteredNotifications = notifications.filter(notification => {
    if (filter === "Unread") return notification.unread;
    if (filter === "Important") return notification.important;
    return true;
  });
  
  // Simulate loading more notifications on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          // Simulate API call to load more notifications
          setTimeout(() => {
            const newNotifications = [
              {
                id: notifications.length + 1,
                icon: <FiInfo />,
                title: "New Webinar",
                description: "Join our webinar on Advanced TypeScript techniques next week.",
                timestamp: "4 days ago",
                unread: false,
                important: false,
                category: "Class"
              },
              {
                id: notifications.length + 2,
                icon: <FiBell />,
                title: "Course Update",
                description: "The React Native course has been updated with new content.",
                timestamp: "5 days ago",
                unread: false,
                important: false,
                category: "Update"
              }
            ];
            setNotifications(prev => [...prev, ...newNotifications]);
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 1.0 }
    );
    
    if (lastNotificationRef.current) {
      observer.observe(lastNotificationRef.current);
    }
    
    return () => {
      if (lastNotificationRef.current) {
        observer.unobserve(lastNotificationRef.current);
      }
    };
  }, [loading, notifications.length]);
  
  // Simulate new notification push
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: notifications.length + 1,
        icon: <FiInfo />,
        title: "New Notification",
        description: "This is a dynamically generated notification.",
        timestamp: "Just now",
        unread: true,
        important: Math.random() > 0.5,
        category: ["Exam", "Class", "Update"][Math.floor(Math.random() * 3)]
      };
      setNotifications(prev => [newNotification, ...prev]);
    }, 30000); // Add a new notification every 30 seconds
    
    return () => clearInterval(interval);
  }, [notifications.length]);
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <FiBell style={styles.headerIcon} />
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
  Notifications
</h1>

        </div>
      </div>
      
      <div style={styles.content}>
        <div style={styles.controls}>
          <button 
            style={styles.markAllButton} 
            onClick={handleMarkAllAsRead}
          >
            <FiCheck style={styles.buttonIcon} />
            Mark all as read
          </button>
          
          <div style={styles.filterChips}>
            {["All", "Unread", "Important"].map(chip => (
              <button
                key={chip}
                style={
                  filter === chip 
                    ? {...styles.filterChip, ...styles.activeFilterChip}
                    : styles.filterChip
                }
                onClick={() => handleFilterChange(chip)}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
        
        <div style={styles.notificationsList}>
          {filteredNotifications.map((notification, index) => (
            <div
              key={notification.id}
              style={
                notification.unread 
                  ? {...styles.notificationItem, ...styles.unreadNotification}
                  : styles.notificationItem
              }
              ref={index === filteredNotifications.length - 1 ? lastNotificationRef : null}
            >
              <div style={styles.notificationContent}>
                <div style={styles.notificationIconContainer}>
                  {notification.unread && <div style={styles.unreadDot}></div>}
                  <div 
                    style={
                      notification.important 
                        ? {...styles.iconWrapper, ...styles.importantIcon}
                        : styles.iconWrapper
                    }
                  >
                    {notification.icon}
                  </div>
                </div>
                
                <div style={styles.notificationText}>
                  <div style={styles.notificationHeader}>
                    <h3 style={styles.notificationTitle}>{notification.title}</h3>
                    <span style={styles.timestamp}>{notification.timestamp}</span>
                  </div>
                  <p style={styles.notificationDescription}>{notification.description}</p>
                  <span style={styles.categoryTag}>{notification.category}</span>
                </div>
              </div>
            </div>
          ))}
          
          {loading && (
            <div style={styles.loadingIndicator}>
              <div style={styles.spinner}></div>
              <p>Loading more notifications...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    margin: '0 auto'
  },
  header: {
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    padding: '16px 24px',
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  headerIcon: {
    fontSize: '24px',
    marginRight: '12px',
    color: '#4a5568'
  },
  headerTitle: {
    margin: 0,
    fontSize: '24px',
    fontWeight: '600',
    color: '#2d3748'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '24px',
    width: '100%'
  },
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  markAllButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  buttonIcon: {
    marginRight: '8px'
  },
  filterChips: {
    display: 'flex',
    gap: '8px'
  },
  filterChip: {
    padding: '8px 16px',
    borderRadius: '20px',
    backgroundColor: '#e2e8f0',
    color: '#4a5568',
    border: 'none',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  activeFilterChip: {
    backgroundColor: '#4299e1',
    color: 'white'
  },
  notificationsList: {
    width: '100%'
  },
  notificationItem: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    transition: 'all 0.2s',
    animation: 'fadeIn 0.3s ease-in-out',
    position: 'relative',
    borderLeft: '4px solid transparent'
  },
  unreadNotification: {
    backgroundColor: '#ebf8ff',
    borderLeft: '4px solid #4299e1'
  },
  notificationContent: {
    display: 'flex',
    alignItems: 'flex-start'
  },
  notificationIconContainer: {
    position: 'relative',
    marginRight: '16px'
  },
  unreadDot: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '10px',
    height: '10px',
    backgroundColor: '#4299e1',
    borderRadius: '50%'
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#edf2f7',
    color: '#4a5568',
    fontSize: '18px'
  },
  importantIcon: {
    backgroundColor: '#fff5ed',
    color: '#EF7C00'
  },
  notificationText: {
    flex: 1
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '4px'
  },
  notificationTitle: {
    margin: 0,
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.5',
    color: '#2d3748'
  },
  timestamp: {
    fontSize: '12px',
    color: '#718096',
    whiteSpace: 'nowrap',
    marginLeft: '8px'
  },
  notificationDescription: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#4a5568'
  },
  categoryTag: {
    display: 'inline-block',
    fontSize: '12px',
    fontWeight: '500',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '#edf2f7',
    color: '#4a5568'
  },
  loadingIndicator: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    color: '#718096'
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '3px solid #e2e8f0',
    borderTop: '3px solid #4299e1',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '12px'
  },
  // Adding animations as a style string
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(-10px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
};

// Add the keyframe animations to the document
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(styleElement);
}

export default NotificationsPage;