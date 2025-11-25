"use client";
import React, { useState, useEffect } from 'react';
import { FiBell, FiSend, FiClock, FiEdit2, FiTrash2, FiFilter, FiPlus, FiX, FiCheck, FiAlertCircle, FiInfo, FiTrendingUp, FiCalendar, FiUsers, FiTarget, FiActivity, FiMessageSquare, FiEye, FiCheckCircle } from 'react-icons/fi';

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
      const internshipNames = ['Smart Robotics & Industry 4.0', 'Applied AI & Machine Learning', 'IoT & IIoT Systems', 'Cloud & Edge Computing'];
      
      const messages = [
        'New assignment has been posted. Please review and submit before the deadline.',
        'Important update regarding upcoming live class schedule changes.',
        'Your course completion certificate is now available for download.',
        'Reminder: Live class starting in 30 minutes. Join now to avoid missing out.',
        'New learning materials have been added to your course dashboard.',
        'System maintenance scheduled for this weekend. Services may be temporarily unavailable.',
        'Congratulations! You have completed 75% of the course curriculum.',
        'New peer review assignment available. Collaborate with your classmates.',
        'Important announcement regarding final project submission guidelines.',
        'Weekly progress report is now available in your dashboard.'
      ];
      
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
        const message = messages[Math.floor(Math.random() * messages.length)];
        
        data.push({
          id: `notif_${i + 1}`,
          message,
          category,
          link: Math.random() > 0.5 ? `https://example.com/resource/${i + 1}` : '',
          audience,
          internshipName,
          date: date.toISOString(),
          status,
          views: Math.floor(Math.random() * 500),
          clicks: Math.floor(Math.random() * 100)
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
  
  const totalDelivered = notifications.filter(n => n.status === 'delivered').length;
  const totalViews = notifications.reduce((sum, n) => sum + n.views, 0);
  const avgEngagement = notifications.length > 0 ? Math.round(totalViews / notifications.length) : 0;
  
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
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }
    
    const newNotification = {
      id: `notif_${Date.now()}`,
      message: formData.message,
      category: formData.category,
      link: formData.link,
      audience: formData.audience,
      internshipName: formData.audience === 'specific_internship' ? formData.specificInternship : '',
      date: new Date().toISOString(),
      status: 'pending',
      views: 0,
      clicks: 0
    };
    
    setNotifications(prev => [newNotification, ...prev]);
    setShowCreateModal(false);
    resetForm();
  };
  
  // Handle updating an existing notification
  const handleUpdateNotification = () => {
    if (!formData.message.trim()) {
      alert('Please enter a message');
      return;
    }
    
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
    if (window.confirm('Are you sure you want to delete this notification?')) {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }
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
  
  // Get category config
  const getCategoryConfig = (category) => {
    switch (category) {
      case 'alert':
        return {
          color: '#EF7C00',
          bg: '#FFF4ED'
        };
      case 'update':
        return {
          color: '#1640FF',
          bg: '#F0F4FF'
        };
      default:
        return {
          color: '#6B7280',
          bg: '#F9FAFB'
        };
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
  
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.pageTitle}>Notifications</h1>
          <p style={styles.pageSubtitle}>Manage and send notifications to users</p>
        </div>
        <button style={styles.createButton} onClick={openCreateModal}>
          <FiPlus style={styles.buttonIcon} />
          Create Notification
        </button>
      </div>
      
      {/* Stats Cards */}
      <div style={styles.statsGrid}>
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{...styles.statIcon, backgroundColor: '#F0F4FF'}}>
              <FiSend style={{color: '#1640FF'}} />
            </div>
            <div style={styles.statInfo}>
              <div style={styles.statValue}>{notificationsSentToday}</div>
              <div style={styles.statLabel}>Sent Today</div>
            </div>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{...styles.statIcon, backgroundColor: '#E6F7F0'}}>
              <FiCheckCircle style={{color: '#10B981'}} />
            </div>
            <div style={styles.statInfo}>
              <div style={styles.statValue}>{totalDelivered}</div>
              <div style={styles.statLabel}>Delivered</div>
            </div>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{...styles.statIcon, backgroundColor: '#FFF4ED'}}>
              <FiEye style={{color: '#EF7C00'}} />
            </div>
            <div style={styles.statInfo}>
              <div style={styles.statValue}>{totalViews}</div>
              <div style={styles.statLabel}>Total Views</div>
            </div>
          </div>
        </div>
        
        <div style={styles.statCard}>
          <div style={styles.statHeader}>
            <div style={{...styles.statIcon, backgroundColor: '#F0F4FF'}}>
              <FiActivity style={{color: '#1640FF'}} />
            </div>
            <div style={styles.statInfo}>
              <div style={styles.statValue}>{avgEngagement}</div>
              <div style={styles.statLabel}>Avg Engagement</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters Section */}
      <div style={styles.filtersSection}>
        <div style={styles.filtersRow}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Category</label>
            <select 
              style={styles.filterSelect} 
              value={filters.type} 
              onChange={(e) => setFilters({...filters, type: e.target.value})}
            >
              <option value="all">All Categories</option>
              <option value="info">Info</option>
              <option value="alert">Alert</option>
              <option value="update">Update</option>
            </select>
          </div>
          
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Date Range</label>
            <select 
              style={styles.filterSelect} 
              value={filters.date} 
              onChange={(e) => setFilters({...filters, date: e.target.value})}
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
          </div>
          
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Audience</label>
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
          
          <div style={styles.resultsCount}>
            {filteredNotifications.length} Results
          </div>
        </div>
      </div>
      
      {/* Notifications List */}
      <div style={styles.notificationsList}>
        {filteredNotifications.length === 0 ? (
          <div style={styles.emptyState}>
            <FiBell style={styles.emptyIcon} />
            <h3 style={styles.emptyTitle}>No notifications found</h3>
            <p style={styles.emptyText}>Try adjusting your filters or create a new notification</p>
            <button style={styles.emptyButton} onClick={openCreateModal}>
              <FiPlus />
              Create Notification
            </button>
          </div>
        ) : (
          filteredNotifications.map((notification) => {
            const config = getCategoryConfig(notification.category);
            return (
              <div key={notification.id} style={styles.notificationCard}>
                <div style={styles.cardHeader}>
                  <div style={styles.cardMeta}>
                    <span 
                      style={{
                        ...styles.categoryBadge,
                        backgroundColor: config.bg,
                        color: config.color
                      }}
                    >
                      {getCategoryIcon(notification.category)}
                      <span>{notification.category.toUpperCase()}</span>
                    </span>
                    
                    <span style={styles.metaText}>
                      <FiCalendar style={styles.metaIcon} />
                      {new Date(notification.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                    
                    <span style={styles.metaText}>
                      <FiUsers style={styles.metaIcon} />
                      {getAudienceLabel(notification.audience, notification.internshipName)}
                    </span>
                  </div>
                  
                  <div style={styles.cardActions}>
                    <button 
                      style={styles.iconButton}
                      onClick={() => openPreviewModal(notification)}
                      title="Preview"
                    >
                      <FiEye />
                    </button>
                    <button 
                      style={styles.iconButton}
                      onClick={() => openEditModal(notification)}
                      title="Edit"
                    >
                      <FiEdit2 />
                    </button>
                    <button 
                      style={{...styles.iconButton, color: '#EF4444'}}
                      onClick={() => handleDeleteNotification(notification.id)}
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                
                <div style={styles.cardBody}>
                  <p style={styles.cardMessage}>{notification.message}</p>
                  {notification.link && (
                    <a 
                      href={notification.link} 
                      style={styles.cardLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Link →
                    </a>
                  )}
                </div>
                
                <div style={styles.cardFooter}>
                  <div style={styles.statsRow}>
                    <span style={styles.statItem}>
                      <FiEye style={styles.statItemIcon} />
                      {notification.views} views
                    </span>
                    <span style={styles.statItem}>
                      <FiTarget style={styles.statItemIcon} />
                      {notification.clicks} clicks
                    </span>
                  </div>
                  
                  <span 
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: notification.status === 'delivered' ? '#E6F7F0' : '#FFF4ED',
                      color: notification.status === 'delivered' ? '#10B981' : '#EF7C00'
                    }}
                  >
                    <span 
                      style={{
                        ...styles.statusDot,
                        backgroundColor: notification.status === 'delivered' ? '#10B981' : '#EF7C00'
                      }}
                    ></span>
                    {notification.status === 'delivered' ? 'Delivered' : 'Pending'}
                  </span>
                </div>
              </div>
            );
          })
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
            
            <div style={styles.modalBody}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Message <span style={styles.required}>*</span>
                </label>
                <textarea 
                  style={styles.textarea}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter notification message..."
                  rows={4}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>
                  Category <span style={styles.required}>*</span>
                </label>
                <div style={styles.radioGroup}>
                  {['info', 'alert', 'update'].map(cat => (
                    <label key={cat} style={styles.radioLabel}>
                      <input 
                        type="radio" 
                        name="category" 
                        value={cat}
                        checked={formData.category === cat}
                        onChange={handleInputChange}
                        style={styles.radioInput}
                      />
                      <span style={styles.radioText}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </span>
                    </label>
                  ))}
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
              
              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.formLabel}>
                    Audience <span style={styles.required}>*</span>
                  </label>
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
                    <label style={styles.formLabel}>
                      Internship Name <span style={styles.required}>*</span>
                    </label>
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
              </div>
            </div>
            
            <div style={styles.modalFooter}>
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
                <FiCheck />
                {editingNotification ? 'Update' : 'Create'}
              </button>
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
            
            <div style={styles.modalBody}>
              <div style={styles.previewCard}>
                <div style={styles.previewHeader}>
                  <span 
                    style={{
                      ...styles.categoryBadge,
                      backgroundColor: getCategoryConfig(selectedNotification.category).bg,
                      color: getCategoryConfig(selectedNotification.category).color
                    }}
                  >
                    {getCategoryIcon(selectedNotification.category)}
                    <span>{selectedNotification.category.toUpperCase()}</span>
                  </span>
                  
                  <span style={styles.previewDate}>
                    {new Date(selectedNotification.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                
                <div style={styles.previewBody}>
                  <p style={styles.previewMessage}>{selectedNotification.message}</p>
                  {selectedNotification.link && (
                    <a 
                      href={selectedNotification.link} 
                      style={styles.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resource →
                    </a>
                  )}
                </div>
                
                <div style={styles.previewFooter}>
                  <span style={styles.previewAudience}>
                    <FiUsers />
                    {getAudienceLabel(selectedNotification.audience, selectedNotification.internshipName)}
                  </span>
                  
                  <span 
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: selectedNotification.status === 'delivered' ? '#E6F7F0' : '#FFF4ED',
                      color: selectedNotification.status === 'delivered' ? '#10B981' : '#EF7C00'
                    }}
                  >
                    <span 
                      style={{
                        ...styles.statusDot,
                        backgroundColor: selectedNotification.status === 'delivered' ? '#10B981' : '#EF7C00'
                      }}
                    ></span>
                    {selectedNotification.status === 'delivered' ? 'Delivered' : 'Pending'}
                  </span>
                </div>
              </div>
              
              <div style={styles.metricsGrid}>
                <div style={styles.metricCard}>
                  <FiEye style={styles.metricIcon} />
                  <div style={styles.metricValue}>{selectedNotification.views}</div>
                  <div style={styles.metricLabel}>Views</div>
                </div>
                <div style={styles.metricCard}>
                  <FiTarget style={styles.metricIcon} />
                  <div style={styles.metricValue}>{selectedNotification.clicks}</div>
                  <div style={styles.metricLabel}>Clicks</div>
                </div>
                <div style={styles.metricCard}>
                  <FiActivity style={styles.metricIcon} />
                  <div style={styles.metricValue}>
                    {selectedNotification.views > 0 
                      ? Math.round((selectedNotification.clicks / selectedNotification.views) * 100)
                      : 0}%
                  </div>
                  <div style={styles.metricLabel}>Click Rate</div>
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
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    backgroundColor: '#F8F9FA',
    minHeight: '100vh',
    padding: '32px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  
  // Header
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
    flexWrap: 'wrap',
    gap: '20px'
  },
  headerContent: {
    flex: 1
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1F2937',
    margin: '0 0 8px 0'
  },
  pageSubtitle: {
    fontSize: '16px',
    color: '#6B7280',
    margin: 0
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  buttonIcon: {
    fontSize: '18px'
  },
  
  // Stats Grid
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
    marginBottom: '32px'
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E5E7EB'
  },
  statHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  statIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px'
  },
  statInfo: {
    flex: 1
  },
  statValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1F2937',
    lineHeight: '1',
    marginBottom: '4px'
  },
  statLabel: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500'
  },
  
  // Filters
  filtersSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    border: '1px solid #E5E7EB'
  },
  filtersRow: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-end',
    flexWrap: 'wrap'
  },
  filterGroup: {
    flex: 1,
    minWidth: '180px'
  },
  filterLabel: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151'
  },
  filterSelect: {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    backgroundColor: 'white',
    cursor: 'pointer'
  },
  resultsCount: {
    padding: '10px 16px',
    backgroundColor: '#F3F4F6',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#6B7280',
    whiteSpace: 'nowrap'
  },
  
  // Notifications List
  notificationsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  
  // Empty State
  emptyState: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '64px 32px',
    textAlign: 'center',
    border: '1px solid #E5E7EB'
  },
  emptyIcon: {
    fontSize: '48px',
    color: '#D1D5DB',
    marginBottom: '16px'
  },
  emptyTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 8px 0'
  },
  emptyText: {
    fontSize: '14px',
    color: '#6B7280',
    marginBottom: '24px'
  },
  emptyButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  
  // Notification Card
  notificationCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid #E5E7EB',
    transition: 'box-shadow 0.2s'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
    gap: '16px',
    flexWrap: 'wrap'
  },
  cardMeta: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    alignItems: 'center'
  },
  categoryBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  metaText: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#6B7280'
  },
  metaIcon: {
    fontSize: '14px'
  },
  cardActions: {
    display: 'flex',
    gap: '8px'
  },
  iconButton: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    color: '#6B7280',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'all 0.2s'
  },
  cardBody: {
    marginBottom: '16px'
  },
  cardMessage: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '0 0 12px 0'
  },
  cardLink: {
    display: 'inline-block',
    color: '#1640FF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6',
    flexWrap: 'wrap',
    gap: '12px'
  },
  statsRow: {
    display: 'flex',
    gap: '16px'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#6B7280'
  },
  statItemIcon: {
    fontSize: '14px'
  },
  statusBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 12px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600'
  },
  statusDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%'
  },
  
  // Modal
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
    zIndex: 9999,
    padding: '20px'
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    borderBottom: '1px solid #E5E7EB'
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1F2937',
    margin: 0
  },
  closeButton: {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFB',
    border: 'none',
    borderRadius: '8px',
    color: '#6B7280',
    cursor: 'pointer',
    fontSize: '20px'
  },
  modalBody: {
    padding: '24px'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '20px 24px',
    borderTop: '1px solid #E5E7EB'
  },
  
  // Form
  formGroup: {
    marginBottom: '20px'
  },
  formRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px'
  },
  formLabel: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151'
  },
  required: {
    color: '#EF4444'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    resize: 'vertical',
    fontFamily: 'inherit'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151'
  },
  select: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    color: '#374151',
    backgroundColor: 'white',
    cursor: 'pointer'
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
  radioInput: {
    width: '16px',
    height: '16px',
    cursor: 'pointer'
  },
  radioText: {
    fontSize: '14px',
    color: '#374151'
  },
  cancelButton: {
    padding: '10px 20px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#374151',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer'
  },
  
  // Preview
  previewCard: {
    border: '1px solid #E5E7EB',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px'
  },
  previewHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  previewDate: {
    fontSize: '14px',
    color: '#6B7280'
  },
  previewBody: {
    marginBottom: '16px'
  },
  previewMessage: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#374151',
    marginBottom: '12px'
  },
  previewLink: {
    display: 'inline-block',
    color: '#1640FF',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600'
  },
  previewFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6'
  },
  previewAudience: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#6B7280'
  },
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  },
  metricCard: {
    textAlign: 'center',
    padding: '16px',
    backgroundColor: '#F9FAFB',
    borderRadius: '10px'
  },
  metricIcon: {
    fontSize: '24px',
    color: '#1640FF',
    marginBottom: '8px'
  },
  metricValue: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: '4px'
  },
  metricLabel: {
    fontSize: '12px',
    color: '#6B7280',
    fontWeight: '500'
  }
};

export default NotificationsPage;