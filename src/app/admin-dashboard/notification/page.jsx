"use client";
import React, { useState, useEffect } from 'react';
import { FiBell, FiSend, FiClock, FiEdit2, FiTrash2, FiFilter, FiPlus, FiX, FiCheck, FiAlertCircle, FiInfo, FiTrendingUp, FiCalendar, FiUsers } from 'react-icons/fi';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [editingNotification, setEditingNotification] = useState(null);
  const [filters, setFilters] = useState({
    type: 'all',
    date: 'all',
    audience: 'all'
  });
  
  // Form state for creating/editing notifications
  const [formData, setFormData] = useState({
    message: '',
    category: 'info',
    link: '',
    audience: 'all_students',
    specificInternship: ''
  });
  
  // Generate mock notifications data
  useEffect(() => {
    const generateNotifications = () => {
      const categories = ['info', 'alert', 'update'];
      const audiences = ['all_students', 'all_instructors', 'specific_internship'];
      const internshipNames = ['Web Development', 'Data Science', 'UI/UX Design', 'Mobile Development'];
      
      const data = [];
      
      for (let i = 0; i < 15; i++) {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        
        const category = categories[Math.floor(Math.random() * categories.length)];
        const audience = audiences[Math.floor(Math.random() * audiences.length)];
        const internshipName = audience === 'specific_internship' 
          ? internshipNames[Math.floor(Math.random() * internshipNames.length)]
          : '';
        
        const status = Math.random() > 0.2 ? 'delivered' : 'pending';
        
        data.push({
          id: `notif_${i + 1}`,
          message: `This is a notification message with ID ${i + 1}. It contains important information about upcoming events and deadlines.`,
          category,
          link: Math.random() > 0.5 ? `https://example.com/resource/${i + 1}` : '',
          audience,
          internshipName,
          date: date.toISOString(),
          status
        });
      }
      
      return data.sort((a, b) => new Date(b.date) - new Date(a.date));
    };
    
    setNotifications(generateNotifications());
  }, []);
  
  // Calculate statistics
  const notificationsSentToday = notifications.filter(n => {
    const today = new Date();
    const notifDate = new Date(n.date);
    return notifDate.toDateString() === today.toDateString();
  }).length;
  
  // Filter notifications based on current filters
  const filteredNotifications = notifications.filter(notif => {
    if (filters.type !== 'all' && notif.category !== filters.type) return false;
    if (filters.audience !== 'all' && notif.audience !== filters.audience) return false;
    
    if (filters.date !== 'all') {
      const notifDate = new Date(notif.date);
      const today = new Date();
      
      if (filters.date === 'today') {
        return notifDate.toDateString() === today.toDateString();
      } else if (filters.date === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(today.getDate() - 7);
        return notifDate >= weekAgo;
      } else if (filters.date === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(today.getMonth() - 1);
        return notifDate >= monthAgo;
      }
    }
    
    return true;
  });
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle creating a new notification
  const handleCreateNotification = () => {
    const newNotification = {
      id: `notif_${Date.now()}`,
      message: formData.message,
      category: formData.category,
      link: formData.link,
      audience: formData.audience,
      internshipName: formData.audience === 'specific_internship' ? formData.specificInternship : '',
      date: new Date().toISOString(),
      status: 'pending'
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setShowCreateModal(false);
    resetForm();
  };
  
  // Handle updating an existing notification
  const handleUpdateNotification = () => {
    setNotifications(prev => prev.map(notif => 
      notif.id === editingNotification.id 
        ? {
            ...notif,
            message: formData.message,
            category: formData.category,
            link: formData.link,
            audience: formData.audience,
            internshipName: formData.audience === 'specific_internship' ? formData.specificInternship : ''
          }
        : notif
    ));
    
    setEditingNotification(null);
    setShowCreateModal(false);
    resetForm();
  };
  
  // Handle deleting a notification
  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };
  
  // Reset form data
  const resetForm = () => {
    setFormData({
      message: '',
      category: 'info',
      link: '',
      audience: 'all_students',
      specificInternship: ''
    });
  };
  
  // Open create notification modal
  const openCreateModal = () => {
    resetForm();
    setEditingNotification(null);
    setShowCreateModal(true);
  };
  
  // Open edit notification modal
  const openEditModal = (notification) => {
    setFormData({
      message: notification.message,
      category: notification.category,
      link: notification.link,
      audience: notification.audience,
      specificInternship: notification.internshipName
    });
    setEditingNotification(notification);
    setShowCreateModal(true);
  };
  
  // Open preview modal
  const openPreviewModal = (notification) => {
    setSelectedNotification(notification);
    setShowPreviewModal(true);
  };
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'alert':
        return <FiAlertCircle />;
      case 'update':
        return <FiTrendingUp />;
      default:
        return <FiInfo />;
    }
  };
  
  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case 'alert':
        return '#FF5E5E';
      case 'update':
        return '#F59E0B';
      default:
        return '#1640FF';
    }
  };
  
  // Get audience label
  const getAudienceLabel = (audience, internshipName) => {
    switch (audience) {
      case 'all_students':
        return 'All Students';
      case 'all_instructors':
        return 'All Instructors';
      case 'specific_internship':
        return internshipName || 'Specific Internship';
      default:
        return audience;
    }
  };
  
  // Get status indicator
  const getStatusIndicator = (status) => {
    return (
      <div style={{
        ...styles.statusIndicator,
        backgroundColor: status === 'delivered' ? '#1EC787' : '#F59E0B'
      }}></div>
    );
  };
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.pageTitle}>Notifications</h1>
            <p style={styles.pageSubtitle}>Manage alerts for users</p>
          </div>
          <button style={styles.createButton} onClick={openCreateModal}>
            <FiPlus />
            Create Notification
          </button>
        </div>
        
        {/* Analytics Card */}
        <div style={styles.analyticsCard}>
          <div style={styles.analyticsContent}>
            <div style={styles.analyticsIcon}>
              <FiSend />
            </div>
            <div>
              <div style={styles.analyticsNumber}>{notificationsSentToday}</div>
              <div style={styles.analyticsLabel}>Notifications Sent Today</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div style={styles.filtersContainer}>
        <div style={styles.filterGroup}>
          <FiFilter style={styles.filterIcon} />
          <select 
            style={styles.filterSelect} 
            value={filters.type} 
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="all">All Types</option>
            <option value="info">Info</option>
            <option value="alert">Alert</option>
            <option value="update">Update</option>
          </select>
          
          <select 
            style={styles.filterSelect} 
            value={filters.date} 
            onChange={(e) => setFilters({...filters, date: e.target.value})}
          >
            <option value="all">All Dates</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          
          <select 
            style={styles.filterSelect} 
            value={filters.audience} 
            onChange={(e) => setFilters({...filters, audience: e.target.value})}
          >
            <option value="all">All Audiences</option>
            <option value="all_students">All Students</option>
            <option value="all_instructors">All Instructors</option>
            <option value="specific_internship">Specific Internship</option>
          </select>
        </div>
      </div>
      
      {/* Notifications List */}
      <div style={styles.notificationsList}>
        {filteredNotifications.length === 0 ? (
          <div style={styles.emptyState}>
            <FiBell style={styles.emptyStateIcon} />
            <h3>No notifications found</h3>
            <p>Try adjusting your filters or create a new notification</p>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <div key={notification.id} style={styles.notificationCard}>
              <div style={styles.notificationHeader}>
                <div style={styles.notificationMeta}>
                  <div style={{
                    ...styles.categoryLabel,
                    color: getCategoryColor(notification.category)
                  }}>
                    {getCategoryIcon(notification.category)}
                    {notification.category.charAt(0).toUpperCase() + notification.category.slice(1)}
                  </div>
                  <div style={styles.notificationDate}>
                    <FiClock />
                    {new Date(notification.date).toLocaleDateString()}
                  </div>
                  <div style={styles.notificationAudience}>
                    <FiUsers />
                    {getAudienceLabel(notification.audience, notification.internshipName)}
                  </div>
                </div>
                <div style={styles.notificationActions}>
                  <button 
                    style={styles.actionButton}
                    onClick={() => openPreviewModal(notification)}
                  >
                    View
                  </button>
                  <button 
                    style={styles.actionButton}
                    onClick={() => openEditModal(notification)}
                  >
                    <FiEdit2 />
                  </button>
                  <button 
                    style={styles.actionButton}
                    onClick={() => handleDeleteNotification(notification.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
              <div style={styles.notificationContent}>
                <p>{notification.message.substring(0, 150)}{notification.message.length > 150 ? '...' : ''}</p>
                {notification.link && (
                  <a href={notification.link} style={styles.notificationLink} target="_blank" rel="noopener noreferrer">
                    View Link
                  </a>
                )}
              </div>
              <div style={styles.notificationFooter}>
                {getStatusIndicator(notification.status)}
                <span style={styles.statusText}>
                  {notification.status === 'delivered' ? 'Delivered' : 'Pending'}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div style={styles.modalOverlay} onClick={() => setShowCreateModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {editingNotification ? 'Edit Notification' : 'Create New Notification'}
              </h2>
              <button 
                style={styles.closeButton} 
                onClick={() => setShowCreateModal(false)}
              >
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalContent}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message</label>
                <textarea 
                  style={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your notification message here..."
                  rows={4}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Category</label>
                <div style={styles.radioGroup}>
                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="info"
                      checked={formData.category === 'info'}
                      onChange={handleInputChange}
                    />
                    <span style={styles.radioText}>Info</span>
                  </label>
                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="alert"
                      checked={formData.category === 'alert'}
                      onChange={handleInputChange}
                    />
                    <span style={styles.radioText}>Alert</span>
                  </label>
                  <label style={styles.radioLabel}>
                    <input 
                      type="radio" 
                      name="category" 
                      value="update"
                      checked={formData.category === 'update'}
                      onChange={handleInputChange}
                    />
                    <span style={styles.radioText}>Update</span>
                  </label>
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Link (Optional)</label>
                <input 
                  type="text"
                  style={styles.input}
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="https://example.com/resource"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Audience</label>
                <select 
                  style={styles.select}
                  name="audience"
                  value={formData.audience}
                  onChange={handleInputChange}
                >
                  <option value="all_students">All Students</option>
                  <option value="all_instructors">All Instructors</option>
                  <option value="specific_internship">Specific Internship</option>
                </select>
              </div>
              
              {formData.audience === 'specific_internship' && (
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>Internship Name</label>
                  <input 
                    type="text"
                    style={styles.input}
                    name="specificInternship"
                    value={formData.specificInternship}
                    onChange={handleInputChange}
                    placeholder="Enter internship name"
                  />
                </div>
              )}
              
              <div style={styles.formActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={editingNotification ? handleUpdateNotification : handleCreateNotification}
                >
                  {editingNotification ? 'Update' : 'Create'} Notification
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Preview Modal */}
      {showPreviewModal && selectedNotification && (
        <div style={styles.modalOverlay} onClick={() => setShowPreviewModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Notification Preview</h2>
              <button 
                style={styles.closeButton} 
                onClick={() => setShowPreviewModal(false)}
              >
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalContent}>
              <div style={styles.previewCard}>
                <div style={styles.previewHeader}>
                  <div style={{
                    ...styles.categoryLabel,
                    color: getCategoryColor(selectedNotification.category)
                  }}>
                    {getCategoryIcon(selectedNotification.category)}
                    {selectedNotification.category.charAt(0).toUpperCase() + selectedNotification.category.slice(1)}
                  </div>
                  <div style={styles.previewDate}>
                    <FiCalendar />
                    {new Date(selectedNotification.date).toLocaleDateString()}
                  </div>
                </div>
                
                <div style={styles.previewContent}>
                  <p>{selectedNotification.message}</p>
                  {selectedNotification.link && (
                    <a href={selectedNotification.link} style={styles.previewLink} target="_blank" rel="noopener noreferrer">
                      View Link
                    </a>
                  )}
                </div>
                
                <div style={styles.previewFooter}>
                  <div style={styles.previewAudience}>
                    <FiUsers />
                    {getAudienceLabel(selectedNotification.audience, selectedNotification.internshipName)}
                  </div>
                  <div style={styles.previewStatus}>
                    {getStatusIndicator(selectedNotification.status)}
                    <span style={styles.statusText}>
                      {selectedNotification.status === 'delivered' ? 'Delivered' : 'Pending'}
                    </span>
                  </div>
                </div>
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
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    marginBottom: '24px'
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  pageTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a202c',
    margin: '0 0 8px 0'
  },
  pageSubtitle: {
    fontSize: '16px',
    color: '#718096',
    margin: 0
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  analyticsCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  analyticsContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  analyticsIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    backgroundColor: '#1640FF',
    color: 'white',
    borderRadius: '8px',
    fontSize: '20px'
  },
  analyticsNumber: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a202c'
  },
  analyticsLabel: {
    fontSize: '14px',
    color: '#718096'
  },
  filtersContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '16px 20px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  filterGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flexWrap: 'wrap'
  },
  filterIcon: {
    color: '#718096',
    fontSize: '18px'
  },
  filterSelect: {
    padding: '8px 12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    backgroundColor: 'white',
    fontSize: '14px',
    color: '#4a5568',
    cursor: 'pointer'
  },
  notificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 20px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  emptyStateIcon: {
    fontSize: '48px',
    color: '#cbd5e0',
    marginBottom: '16px'
  },
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    transition: 'all 0.2s ease',
    borderLeft: '4px solid transparent'
  },
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  notificationMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  },
  categoryLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    fontWeight: '500'
  },
  notificationDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#718096'
  },
  notificationAudience: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#718096'
  },
  notificationActions: {
    display: 'flex',
    gap: '8px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    backgroundColor: '#f7fafc',
    border: 'none',
    borderRadius: '6px',
    color: '#4a5568',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  notificationContent: {
    marginBottom: '12px'
  },
  notificationLink: {
    display: 'inline-block',
    marginTop: '8px',
    color: '#1640FF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  },
  notificationFooter: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  statusIndicator: {
    width: '8px',
    height: '8px',
    borderRadius: '50%'
  },
  statusText: {
    fontSize: '12px',
    color: '#718096'
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
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
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
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
    margin: 0
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',
    color: '#718096',
    cursor: 'pointer',
    fontSize: '20px'
  },
  modalContent: {
    padding: '20px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#4a5568'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#4a5568',
    resize: 'vertical',
    fontFamily: 'inherit'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#4a5568'
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#4a5568',
    backgroundColor: 'white'
  },
  radioGroup: {
    display: 'flex',
    gap: '16px'
  },
  radioLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer'
  },
  radioText: {
    fontSize: '14px',
    color: '#4a5568'
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px'
  },
  cancelButton: {
    padding: '10px 16px',
    backgroundColor: 'transparent',
    border: '1px solid #e2e8f0',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#4a5568',
    cursor: 'pointer'
  },
  submitButton: {
    padding: '10px 16px',
    backgroundColor: '#1640FF',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: '500',
    color: 'white',
    cursor: 'pointer'
  },
  previewCard: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px'
  },
  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  previewDate: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#718096'
  },
  previewContent: {
    marginBottom: '12px'
  },
  previewLink: {
    display: 'inline-block',
    marginTop: '8px',
    color: '#1640FF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  },
  previewFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  previewAudience: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#718096'
  },
  previewStatus: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  }
};

export default NotificationsPage;