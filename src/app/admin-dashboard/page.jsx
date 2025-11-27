"use client";
import React, { useState, useEffect } from 'react';
import { FiUsers, FiBookOpen, FiCalendar, FiActivity, FiPlus, FiDollarSign, FiEdit, FiBell, FiTrendingUp, FiClock, FiUserPlus, FiCheckCircle, FiX, FiCheck, FiTrash2 } from 'react-icons/fi';

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
  const [showValidatePaymentsModal, setShowValidatePaymentsModal] = useState(false);

  // Modal states
  const [showCreateInternshipModal, setShowCreateInternshipModal] = useState(false);
  const [showApproveInstructorsModal, setShowApproveInstructorsModal] = useState(false);
  const [showApproveStudentsModal, setShowApproveStudentsModal] = useState(false);
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);
  const [showAnnouncementsModal, setShowAnnouncementsModal] = useState(false);
  const [showEditInternshipModal, setShowEditInternshipModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  
  // Form states
  const [newInternship, setNewInternship] = useState({
    title: '',
    instructor: '',
    description: '',
    duration: ''
  });
  
  const [newCourse, setNewCourse] = useState({
    title: '',
    instructor: '',
    description: '',
    duration: ''
  });
  
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
    targetAudience: 'all'
  });
  
  const [paymentsToValidate, setPaymentsToValidate] = useState([
    { id: 1, studentName: 'John Doe', amount: '$499', course: 'Smart Robotics', status: 'pending' },
    { id: 2, studentName: 'Jane Smith', amount: '$599', course: 'Applied AI', status: 'pending' },
    { id: 3, studentName: 'Mike Johnson', amount: '$449', course: 'IoT Systems', status: 'pending' },
    { id: 4, studentName: 'Sarah Williams', amount: '$699', course: 'Cloud Computing', status: 'pending' },
    { id: 5, studentName: 'David Brown', amount: '$549', course: '3D Printing', status: 'pending' }
  ]);
  
  const [pendingInstructors, setPendingInstructors] = useState([
    { id: 1, name: 'Dr. Rajesh Kumar', email: 'rajesh.kumar@example.com', specialization: 'Artificial Intelligence', experience: '8 years', status: 'pending' },
    { id: 2, name: 'Prof. Priya Sharma', email: 'priya.sharma@example.com', specialization: 'Robotics Engineering', experience: '10 years', status: 'pending' },
    { id: 3, name: 'Dr. Amit Patel', email: 'amit.patel@example.com', specialization: 'Cloud Computing', experience: '6 years', status: 'pending' },
    { id: 4, name: 'Prof. Sneha Reddy', email: 'sneha.reddy@example.com', specialization: 'IoT & Embedded Systems', experience: '7 years', status: 'pending' }
  ]);
  
  const [pendingStudents, setPendingStudents] = useState([
    { id: 1, name: 'Arjun Verma', email: 'arjun.verma@student.com', course: 'Smart Robotics Internship', appliedDate: '2024-11-20', status: 'pending' },
    { id: 2, name: 'Kavya Nair', email: 'kavya.nair@student.com', course: 'Applied AI & ML', appliedDate: '2024-11-19', status: 'pending' },
    { id: 3, name: 'Rohan Gupta', email: 'rohan.gupta@student.com', course: 'IoT Systems', appliedDate: '2024-11-18', status: 'pending' },
    { id: 4, name: 'Ananya Singh', email: 'ananya.singh@student.com', course: 'Cloud Computing', appliedDate: '2024-11-17', status: 'pending' },
    { id: 5, name: 'Vikram Malhotra', email: 'vikram.m@student.com', course: '3D Printing', appliedDate: '2024-11-16', status: 'pending' }
  ]);
  
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
      { id: 1, title: 'Smart Robotics & Industry 4.0 Automation Internship', instructor: 'John Doe', thumbnail: 'http://localhost:3000/assets/images/course/course-04/course-01.jpg' },
      { id: 2, title: 'Applied AI & Machine Learning: From Models to Real-World Applications', instructor: 'Jane Smith', thumbnail: 'http://localhost:3000/assets/images/course/course-04/course-02.jpg' },
      { id: 3, title: 'IoT & IIoT for Smart Systems and Industry 4.0', instructor: 'Mike Johnson', thumbnail: 'http://localhost:3000/assets/images/course/course-04/course-03.jpg' }
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
  
  // Handler functions
  const handleCreateInternship = () => {
    if (newInternship.title && newInternship.instructor) {
      const internship = {
        id: recentInternships.length + 1,
        title: newInternship.title,
        instructor: newInternship.instructor,
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/course-01.jpg'
      };
      
      setRecentInternships([internship, ...recentInternships]);
      setStats({...stats, totalInternships: stats.totalInternships + 1});
      setShowCreateInternshipModal(false);
      setNewInternship({ title: '', instructor: '', description: '', duration: '' });
      alert('Internship created successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  };
  
  const handleCreateCourse = () => {
    if (newCourse.title && newCourse.instructor) {
      setShowCreateCourseModal(false);
      setNewCourse({ title: '', instructor: '', description: '', duration: '' });
      alert('Course created successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  };
  
  const handlePostAnnouncement = () => {
    if (newAnnouncement.title && newAnnouncement.message) {
      setShowAnnouncementsModal(false);
      setNewAnnouncement({ title: '', message: '', targetAudience: 'all' });
      alert('Announcement posted successfully!');
    } else {
      alert('Please fill in all required fields');
    }
  };
  
  const handleValidatePayment = (paymentId) => {
    setPaymentsToValidate(paymentsToValidate.map(payment => 
      payment.id === paymentId ? {...payment, status: 'approved'} : payment
    ));
    setPendingPayments(pendingPayments - 1);
  };
  
  const handleRejectPayment = (paymentId) => {
    setPaymentsToValidate(paymentsToValidate.map(payment => 
      payment.id === paymentId ? {...payment, status: 'rejected'} : payment
    ));
    setPendingPayments(pendingPayments - 1);
  };
  
  const handleApproveInstructor = (instructorId) => {
    setPendingInstructors(pendingInstructors.map(instructor => 
      instructor.id === instructorId ? {...instructor, status: 'approved'} : instructor
    ));
    setStats({...stats, totalInstructors: stats.totalInstructors + 1});
    alert('Instructor approved successfully!');
  };
  
  const handleRejectInstructor = (instructorId) => {
    setPendingInstructors(pendingInstructors.map(instructor => 
      instructor.id === instructorId ? {...instructor, status: 'rejected'} : instructor
    ));
    alert('Instructor application rejected');
  };
  
  const handleApproveStudent = (studentId) => {
    setPendingStudents(pendingStudents.map(student => 
      student.id === studentId ? {...student, status: 'approved'} : student
    ));
    setStats({...stats, totalStudents: stats.totalStudents + 1});
    alert('Student approved successfully!');
  };
  
  const handleRejectStudent = (studentId) => {
    setPendingStudents(pendingStudents.map(student => 
      student.id === studentId ? {...student, status: 'rejected'} : student
    ));
    alert('Student application rejected');
  };
  
  const handleEditInternship = (internship) => {
    setSelectedInternship(internship);
    setShowEditInternshipModal(true);
  };
  
  const handleUpdateInternship = () => {
    setRecentInternships(recentInternships.map(internship => 
      internship.id === selectedInternship.id ? selectedInternship : internship
    ));
    setShowEditInternshipModal(false);
    setSelectedInternship(null);
    alert('Internship updated successfully!');
  };
  
  const handleDeleteInternship = (internshipId) => {
    if (window.confirm('Are you sure you want to delete this internship?')) {
      setRecentInternships(recentInternships.filter(i => i.id !== internshipId));
      setStats({...stats, totalInternships: stats.totalInternships - 1});
      alert('Internship deleted successfully!');
    }
  };
  
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
              <button 
                style={styles.quickActionButton}
                onClick={() => setShowCreateInternshipModal(true)}
              >
                <FiPlus size={18} />
                <span>Create Internship</span>
              </button>
              <button 
                style={styles.quickActionButton}
                onClick={() => setShowApproveInstructorsModal(true)}
              >
                <FiUserPlus size={18} />
                <span>Approve Instructors</span>
              </button>
              <button 
                style={styles.quickActionButton}
                onClick={() => setShowApproveStudentsModal(true)}
              >
                <FiUsers size={18} />
                <span>Approve Students</span>
              </button>
           
              <button 
                style={styles.quickActionButton}
                onClick={() => setShowAnnouncementsModal(true)}
              >
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
                  <button 
                    style={styles.editButton}
                    onClick={() => handleEditInternship(internship)}
                  >
                    <FiEdit size={16} />
                  </button>
                  <button 
                    style={{...styles.editButton, marginLeft: '8px', backgroundColor: '#fee2e2'}}
                    onClick={() => handleDeleteInternship(internship.id)}
                  >
                    <FiTrash2 size={16} color="#dc2626" />
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
                <button 
                  style={styles.alertButton}
                  onClick={() => setShowValidatePaymentsModal(true)}
                >
                  Review Now
                </button>
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
      
      {/* MODALS */}
      
      {/* Create Internship Modal */}
      {showCreateInternshipModal && (
        <div style={styles.modalOverlay} onClick={() => setShowCreateInternshipModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Create New Internship</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowCreateInternshipModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Internship Title *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newInternship.title}
                  onChange={(e) => setNewInternship({...newInternship, title: e.target.value})}
                  placeholder="Enter internship title"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Instructor *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newInternship.instructor}
                  onChange={(e) => setNewInternship({...newInternship, instructor: e.target.value})}
                  placeholder="Enter instructor name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Description</label>
                <textarea 
                  style={styles.formTextarea}
                  value={newInternship.description}
                  onChange={(e) => setNewInternship({...newInternship, description: e.target.value})}
                  placeholder="Enter internship description"
                  rows="4"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Duration</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newInternship.duration}
                  onChange={(e) => setNewInternship({...newInternship, duration: e.target.value})}
                  placeholder="e.g., 6 months"
                />
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowCreateInternshipModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={handleCreateInternship}
                >
                  <FiCheck size={16} />
                  Create Internship
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Approve Instructors Modal */}
      {showApproveInstructorsModal && (
        <div style={styles.modalOverlay} onClick={() => setShowApproveInstructorsModal(false)}>
          <div style={{...styles.modal, maxWidth: '800px'}} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Approve Instructor Applications</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowApproveInstructorsModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.paymentsList}>
                {pendingInstructors.filter(i => i.status === 'pending').length === 0 ? (
                  <p style={styles.noPayments}>No pending instructor applications</p>
                ) : (
                  pendingInstructors.map(instructor => (
                    instructor.status === 'pending' && (
                      <div key={instructor.id} style={styles.approvalItem}>
                        <div style={styles.approvalInfo}>
                          <h4 style={styles.approvalName}>{instructor.name}</h4>
                          <p style={styles.approvalEmail}>{instructor.email}</p>
                          <p style={styles.approvalDetails}>
                            <strong>Specialization:</strong> {instructor.specialization} | <strong>Experience:</strong> {instructor.experience}
                          </p>
                        </div>
                        <div style={styles.paymentActions}>
                          <button 
                            style={styles.approveButton}
                            onClick={() => handleApproveInstructor(instructor.id)}
                          >
                            <FiCheck size={16} />
                            Approve
                          </button>
                          <button 
                            style={styles.rejectButton}
                            onClick={() => handleRejectInstructor(instructor.id)}
                          >
                            <FiX size={16} />
                            Reject
                          </button>
                        </div>
                      </div>
                    )
                  ))
                )}
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowApproveInstructorsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Approve Students Modal */}
      {showApproveStudentsModal && (
        <div style={styles.modalOverlay} onClick={() => setShowApproveStudentsModal(false)}>
          <div style={{...styles.modal, maxWidth: '800px'}} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Approve Student Applications</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowApproveStudentsModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.paymentsList}>
                {pendingStudents.filter(s => s.status === 'pending').length === 0 ? (
                  <p style={styles.noPayments}>No pending student applications</p>
                ) : (
                  pendingStudents.map(student => (
                    student.status === 'pending' && (
                      <div key={student.id} style={styles.approvalItem}>
                        <div style={styles.approvalInfo}>
                          <h4 style={styles.approvalName}>{student.name}</h4>
                          <p style={styles.approvalEmail}>{student.email}</p>
                          <p style={styles.approvalDetails}>
                            <strong>Applied For:</strong> {student.course} | <strong>Date:</strong> {student.appliedDate}
                          </p>
                        </div>
                        <div style={styles.paymentActions}>
                          <button 
                            style={styles.approveButton}
                            onClick={() => handleApproveStudent(student.id)}
                          >
                            <FiCheck size={16} />
                            Approve
                          </button>
                          <button 
                            style={styles.rejectButton}
                            onClick={() => handleRejectStudent(student.id)}
                          >
                            <FiX size={16} />
                            Reject
                          </button>
                        </div>
                      </div>
                    )
                  ))
                )}
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowApproveStudentsModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Create Course Modal */}
      {showCreateCourseModal && (
        <div style={styles.modalOverlay} onClick={() => setShowCreateCourseModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Create New Course</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowCreateCourseModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Course Title *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="Enter course title"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Instructor *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newCourse.instructor}
                  onChange={(e) => setNewCourse({...newCourse, instructor: e.target.value})}
                  placeholder="Enter instructor name"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Description</label>
                <textarea 
                  style={styles.formTextarea}
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  placeholder="Enter course description"
                  rows="4"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Duration</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                  placeholder="e.g., 8 weeks"
                />
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowCreateCourseModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={handleCreateCourse}
                >
                  <FiCheck size={16} />
                  Create Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Announcements Modal */}
      {showAnnouncementsModal && (
        <div style={styles.modalOverlay} onClick={() => setShowAnnouncementsModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Post Announcement</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowAnnouncementsModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Announcement Title *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                  placeholder="Enter announcement title"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message *</label>
                <textarea 
                  style={styles.formTextarea}
                  value={newAnnouncement.message}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, message: e.target.value})}
                  placeholder="Enter announcement message"
                  rows="5"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Target Audience</label>
                <select 
                  style={styles.formInput}
                  value={newAnnouncement.targetAudience}
                  onChange={(e) => setNewAnnouncement({...newAnnouncement, targetAudience: e.target.value})}
                >
                  <option value="all">All Users</option>
                  <option value="students">Students Only</option>
                  <option value="instructors">Instructors Only</option>
                </select>
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowAnnouncementsModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={handlePostAnnouncement}
                >
                  <FiBell size={16} />
                  Post Announcement
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Internship Modal */}
      {showEditInternshipModal && selectedInternship && (
        <div style={styles.modalOverlay} onClick={() => setShowEditInternshipModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Edit Internship</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowEditInternshipModal(false)}
              >
                <FiX size={20} />
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Internship Title *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={selectedInternship.title}
                  onChange={(e) => setSelectedInternship({...selectedInternship, title: e.target.value})}
                  placeholder="Enter internship title"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Instructor *</label>
                <input 
                  type="text"
                  style={styles.formInput}
                  value={selectedInternship.instructor}
                  onChange={(e) => setSelectedInternship({...selectedInternship, instructor: e.target.value})}
                  placeholder="Enter instructor name"
                />
              </div>
              <div style={styles.modalActions}>
                <button 
                  style={styles.cancelButton}
                  onClick={() => setShowEditInternshipModal(false)}
                >
                  Cancel
                </button>
                <button 
                  style={styles.submitButton}
                  onClick={handleUpdateInternship}
                >
                  <FiCheck size={16} />
                  Update Internship
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
    minWidth: '200px',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer'
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
    backgroundColor: '#f7fafc',
    transition: 'background-color 0.2s'
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
    backgroundColor: '#f7fafc',
    transition: 'background-color 0.2s'
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
    justifyContent: 'center',
    transition: 'all 0.2s'
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
    cursor: 'pointer',
    transition: 'background-color 0.2s'
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
    borderBottom: '1px solid #e2e8f0',
    transition: 'background-color 0.2s'
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
    backgroundColor: '#f7fafc',
    transition: 'background-color 0.2s'
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
  },
  
  // Modal Styles
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.2s ease-in-out'
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '550px',
    maxHeight: '85vh',
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    animation: 'slideIn 0.3s ease-out',
    display: 'flex',
    flexDirection: 'column'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#f8f9fa'
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1a202c',
    margin: 0
  },
  closeButton: {
    background: 'white',
    border: '1px solid #e5e7eb',
    color: '#718096',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  },
  modalContent: {
    padding: '24px',
    overflowY: 'auto',
    flex: 1
  },
  formGroup: {
    marginBottom: '20px'
  },
  formLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px'
  },
  formInput: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'border-color 0.2s',
    outline: 'none'
  },
  formTextarea: {
    width: '100%',
    padding: '12px',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'border-color 0.2s',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit'
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px',
    paddingTop: '20px',
    borderTop: '1px solid #e5e7eb'
  },
  cancelButton: {
    padding: '10px 20px',
    backgroundColor: '#f3f4f6',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    color: '#6b7280',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  
  // Payments validation styles
  paymentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxHeight: '400px',
    overflowY: 'auto'
  },
  paymentItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #e5e7eb'
  },
  paymentInfo: {
    flex: 1
  },
  paymentStudent: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 4px 0'
  },
  paymentDetails: {
    fontSize: '13px',
    color: '#718096',
    margin: 0
  },
  paymentActions: {
    display: 'flex',
    gap: '8px'
  },
  approveButton: {
    padding: '8px 16px',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'background-color 0.2s'
  },
  rejectButton: {
    padding: '8px 16px',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    transition: 'background-color 0.2s'
  },
  noPayments: {
    textAlign: 'center',
    color: '#718096',
    padding: '40px 20px',
    fontSize: '14px'
  },
  
  // Approval item styles
  approvalItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '18px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #e5e7eb'
  },
  approvalInfo: {
    flex: 1
  },
  approvalName: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1a202c',
    margin: '0 0 6px 0'
  },
  approvalEmail: {
    fontSize: '14px',
    color: '#6b7280',
    margin: '0 0 8px 0'
  },
  approvalDetails: {
    fontSize: '13px',
    color: '#4b5563',
    margin: 0,
    lineHeight: '1.5'
  }
};

export default AdminDashboard;