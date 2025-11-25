"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiEye, FiEdit, FiMail, FiX, FiChevronLeft, FiChevronRight, FiDownload, FiSend, FiCheckCircle } from 'react-icons/fi';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [internshipFilter, setInternshipFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [notification, setNotification] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [emailData, setEmailData] = useState({ subject: '', message: '' });
  
  // Internship programs
  const internshipPrograms = [
    'Smart Robotics & Industry 4.0 Automation Internship',
    'Applied AI & Machine Learning: From Models to Real-World Applications',
    'IoT & IIoT for Smart Systems and Industry 4.0',
    'Cloud & Edge Computing for Connected Intelligence',
    '3D Printing & Digital Fabrication for Engineers',
    'Professional Diploma in Humanoid Robotics for Service Industries',
    'Diploma in Artificial Intelligence Applications Across Industries',
    'Industry-Ready Diploma in Cloud & Edge Technologies',
    'Career-Ready Diploma in Cybersecurity & Digital Forensics',
    'Year-long STEM Readiness for UG Students'
  ];
  
  // Simulate fetching data from API
  useEffect(() => {
    const mockStudents = [
      {
        id: 1,
        name: 'Alice Brown',
        email: 'alice@example.com',
        phone: '+1234567890',
        internship: 'Smart Robotics & Industry 4.0 Automation Internship',
        status: 'Active',
        joinDate: '2023-10-15',
        attendance: 85,
        assignmentsCompleted: 12,
        totalAssignments: 15,
       
      },
      {
        id: 2,
        name: 'Bob Wilson',
        email: 'bob@example.com',
        phone: '+1234567891',
        internship: 'Applied AI & Machine Learning: From Models to Real-World Applications',
        status: 'Active',
        joinDate: '2023-10-20',
        attendance: 92,
        assignmentsCompleted: 8,
        totalAssignments: 10,
      
      },
      {
        id: 3,
        name: 'Charlie Davis',
        email: 'charlie@example.com',
        phone: '+1234567892',
        internship: 'Professional Diploma in Humanoid Robotics for Service Industries',
        status: 'Pending',
        joinDate: '2023-11-01',
        attendance: 0,
        assignmentsCompleted: 0,
        totalAssignments: 12,
       
      },
      {
        id: 4,
        name: 'Diana Miller',
        email: 'diana@example.com',
        phone: '+1234567893',
        internship: 'Diploma in Artificial Intelligence Applications Across Industries',
        status: 'Active',
        joinDate: '2023-09-15',
        attendance: 88,
        assignmentsCompleted: 10,
        totalAssignments: 12,
      
      },
      {
        id: 5,
        name: 'Ethan Taylor',
        email: 'ethan@example.com',
        phone: '+1234567894',
        internship: 'Industry-Ready Diploma in Cloud & Edge Technologies',
        status: 'Completed',
        joinDate: '2023-08-10',
        attendance: 95,
        assignmentsCompleted: 15,
        totalAssignments: 15,
      
      },
      {
        id: 6,
        name: 'Fiona Anderson',
        email: 'fiona@example.com',
        phone: '+1234567895',
        internship: 'IoT & IIoT for Smart Systems and Industry 4.0',
        status: 'Active',
        joinDate: '2023-10-05',
        attendance: 78,
        assignmentsCompleted: 7,
        totalAssignments: 10,
      
      },
      {
        id: 7,
        name: 'George Thomas',
        email: 'george@example.com',
        phone: '+1234567896',
        internship: 'Career-Ready Diploma in Cybersecurity & Digital Forensics',
        status: 'Active',
        joinDate: '2023-09-20',
        attendance: 90,
        assignmentsCompleted: 9,
        totalAssignments: 12,
      
      },
      {
        id: 8,
        name: 'Hannah Jackson',
        email: 'hannah@example.com',
        phone: '+1234567897',
        internship: 'Year-long STEM Readiness for UG Students',
        status: 'Active',
        joinDate: '2023-09-01',
        attendance: 82,
        assignmentsCompleted: 11,
        totalAssignments: 14,
       
      },
      {
        id: 9,
        name: 'Ian White',
        email: 'ian@example.com',
        phone: '+1234567898',
        internship: 'Cloud & Edge Computing for Connected Intelligence',
        status: 'Pending',
        joinDate: '2023-11-05',
        attendance: 0,
        assignmentsCompleted: 0,
        totalAssignments: 10,
       
      },
      {
        id: 10,
        name: 'Julia Harris',
        email: 'julia@example.com',
        phone: '+1234567899',
        internship: '3D Printing & Digital Fabrication for Engineers',
        status: 'Active',
        joinDate: '2023-10-12',
        attendance: 87,
        assignmentsCompleted: 6,
        totalAssignments: 8,
        avatar: 'https://picsum.photos/seed/julia/100/100'
      },
      {
        id: 11,
        name: 'Kevin Martin',
        email: 'kevin@example.com',
        phone: '+1234567900',
        internship: 'Smart Robotics & Industry 4.0 Automation Internship',
        status: 'Completed',
        joinDate: '2023-07-15',
        attendance: 93,
        assignmentsCompleted: 18,
        totalAssignments: 18,
        avatar: 'https://picsum.photos/seed/kevin/100/100'
      },
      {
        id: 12,
        name: 'Laura Thompson',
        email: 'laura@example.com',
        phone: '+1234567901',
        internship: 'Applied AI & Machine Learning: From Models to Real-World Applications',
        status: 'Active',
        joinDate: '2023-09-25',
        attendance: 91,
        assignmentsCompleted: 14,
        totalAssignments: 16,
        avatar: 'https://picsum.photos/seed/laura/100/100'
      }
    ];
    
    setStudents(mockStudents);
    setFilteredStudents(mockStudents);
  }, []);
  
  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };
  
  // Filter students
  useEffect(() => {
    let filtered = students;
    
    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (internshipFilter !== 'all') {
      filtered = filtered.filter(student => student.internship === internshipFilter);
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(student => student.status === statusFilter);
    }
    
    setFilteredStudents(filtered);
    setCurrentPage(1);
  }, [students, searchTerm, internshipFilter, statusFilter]);
  
  // Pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // View student details
  const viewStudentDetails = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };
  
  // Edit student
  const handleEditStudent = (student) => {
    setSelectedStudent(student);
    setEditFormData({ ...student });
    setShowEditModal(true);
  };
  
  const handleSaveEdit = () => {
    setStudents(students.map(s => 
      s.id === editFormData.id ? editFormData : s
    ));
    setShowEditModal(false);
    showNotification('Student updated successfully!');
  };
  
  // Email student
  const handleEmailStudent = (student) => {
    setSelectedStudent(student);
    setEmailData({ subject: '', message: '' });
    setShowEmailModal(true);
  };
  
  const handleSendEmail = () => {
    // Simulate sending email
    console.log('Sending email to:', selectedStudent.email);
    console.log('Subject:', emailData.subject);
    console.log('Message:', emailData.message);
    setShowEmailModal(false);
    showNotification(`Email sent to ${selectedStudent.name}!`);
  };
  
  // Download report
  const handleDownloadReport = (student) => {
    // Simulate downloading report
    const reportData = {
      name: student.name,
      email: student.email,
      internship: student.internship,
      status: student.status,
      attendance: student.attendance,
      assignmentsCompleted: student.assignmentsCompleted,
      totalAssignments: student.totalAssignments
    };
    
    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${student.name.replace(/\s+/g, '_')}_report.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification(`Report downloaded for ${student.name}!`);
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return '#10B981';
      case 'Pending': return '#F59E0B';
      case 'Completed': return '#1640FF';
      default: return '#6B7280';
    }
  };
  
  // Get attendance color
  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return '#10B981';
    if (percentage >= 75) return '#F59E0B';
    return '#EF4444';
  };
  
  return (
    <div style={styles.container}>
      {/* Notification */}
      {notification && (
        <div style={{
          ...styles.notification,
          backgroundColor: notification.type === 'success' ? '#10B981' : '#EF4444'
        }}>
          <FiCheckCircle style={styles.notificationIcon} />
          <span>{notification.message}</span>
        </div>
      )}
      
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Students</h1>
          <p style={styles.subtitle}>Manage and view all student information</p>
        </div>
      </div>
      
      {/* Controls */}
      <div style={styles.controls}>
        <div style={styles.searchContainer}>
          <FiSearch style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.filterContainer}>
          <button
            style={styles.filterButton}
            onClick={() => setShowFilterOptions(!showFilterOptions)}
          >
            <FiFilter />
            <span>Filters</span>
          </button>
          
          {showFilterOptions && (
            <div style={styles.filterDropdown}>
              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Internship Program</label>
                <select
                  value={internshipFilter}
                  onChange={(e) => setInternshipFilter(e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="all">All Programs</option>
                  {internshipPrograms.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="all">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              
              <button
                style={styles.clearButton}
                onClick={() => {
                  setInternshipFilter('all');
                  setStatusFilter('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Table */}
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Student</th>
              <th style={styles.th}>Internship</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Attendance</th>
              <th style={styles.th}>Progress</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(student => (
              <tr key={student.id} style={styles.tr}>
                <td style={styles.td}>
                  <div style={styles.studentInfo}>
                  
                    <div>
                      <div style={styles.studentName}>{student.name}</div>
                      <div style={styles.studentEmail}>{student.email}</div>
                    </div>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.internshipText}>{student.internship}</div>
                </td>
                <td style={styles.td}>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: getStatusColor(student.status)
                  }}>
                    {student.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.metricContainer}>
                    <div style={styles.progressBar}>
                      <div style={{
                        ...styles.progressFill,
                        width: `${student.attendance}%`,
                        backgroundColor: getAttendanceColor(student.attendance)
                      }} />
                    </div>
                    <span style={styles.metricText}>{student.attendance}%</span>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.metricContainer}>
                    <div style={styles.progressBar}>
                      <div style={{
                        ...styles.progressFill,
                        width: `${(student.assignmentsCompleted / student.totalAssignments) * 100}%`,
                        backgroundColor: '#1640FF'
                      }} />
                    </div>
                    <span style={styles.metricText}>
                      {student.assignmentsCompleted}/{student.totalAssignments}
                    </span>
                  </div>
                </td>
                <td style={styles.td}>
                  <div style={styles.actions}>
                    <button
                      style={styles.iconButton}
                      onClick={() => viewStudentDetails(student)}
                      title="View Details"
                    >
                      <FiEye />
                    </button>
                    <button
                      style={styles.iconButton}
                      onClick={() => handleEditStudent(student)}
                      title="Edit Student"
                    >
                      <FiEdit />
                    </button>
                    <button
                      style={styles.iconButton}
                      onClick={() => handleEmailStudent(student)}
                      title="Send Email"
                    >
                      <FiMail />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div style={styles.pagination}>
          <button
            style={{
              ...styles.pageButton,
              opacity: currentPage === 1 ? 0.5 : 1,
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FiChevronLeft />
          </button>
          
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = i + 1;
            } else if (currentPage <= 3) {
              pageNum = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageNum = totalPages - 4 + i;
            } else {
              pageNum = currentPage - 2 + i;
            }
            
            return (
              <button
                key={pageNum}
                style={{
                  ...styles.pageButton,
                  ...(currentPage === pageNum && styles.activePageButton)
                }}
                onClick={() => paginate(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            style={{
              ...styles.pageButton,
              opacity: currentPage === totalPages ? 0.5 : 1,
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
            }}
            onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
      
      {/* View Student Modal */}
      {showStudentModal && selectedStudent && (
        <div style={styles.modalOverlay} onClick={() => setShowStudentModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Student Details</h2>
              <button style={styles.closeButton} onClick={() => setShowStudentModal(false)}>
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.profileSection}>
                <img src={selectedStudent.avatar} alt={selectedStudent.name} style={styles.profileAvatar} />
                <div>
                  <h3 style={styles.profileName}>{selectedStudent.name}</h3>
                  <p style={styles.profileDetail}>{selectedStudent.email}</p>
                  <p style={styles.profileDetail}>{selectedStudent.phone}</p>
                </div>
              </div>
              
              <div style={styles.detailsGrid}>
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Internship Program</span>
                  <span style={styles.detailValue}>{selectedStudent.internship}</span>
                </div>
                
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Status</span>
                  <span style={{
                    ...styles.badge,
                    backgroundColor: getStatusColor(selectedStudent.status)
                  }}>
                    {selectedStudent.status}
                  </span>
                </div>
                
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Join Date</span>
                  <span style={styles.detailValue}>{formatDate(selectedStudent.joinDate)}</span>
                </div>
                
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Attendance</span>
                  <div style={styles.metricContainer}>
                    <div style={styles.progressBar}>
                      <div style={{
                        ...styles.progressFill,
                        width: `${selectedStudent.attendance}%`,
                        backgroundColor: getAttendanceColor(selectedStudent.attendance)
                      }} />
                    </div>
                    <span style={styles.metricText}>{selectedStudent.attendance}%</span>
                  </div>
                </div>
                
                <div style={styles.detailItem}>
                  <span style={styles.detailLabel}>Assignments</span>
                  <div style={styles.metricContainer}>
                    <div style={styles.progressBar}>
                      <div style={{
                        ...styles.progressFill,
                        width: `${(selectedStudent.assignmentsCompleted / selectedStudent.totalAssignments) * 100}%`,
                        backgroundColor: '#1640FF'
                      }} />
                    </div>
                    <span style={styles.metricText}>
                      {selectedStudent.assignmentsCompleted}/{selectedStudent.totalAssignments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.modalFooter}>
              <button
                style={styles.primaryButton}
                onClick={() => handleDownloadReport(selectedStudent)}
              >
                <FiDownload />
                <span>Download Report</span>
              </button>
              <button
                style={styles.secondaryButton}
                onClick={() => {
                  setShowStudentModal(false);
                  handleEmailStudent(selectedStudent);
                }}
              >
                <FiMail />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Edit Student Modal */}
      {showEditModal && editFormData && (
        <div style={styles.modalOverlay} onClick={() => setShowEditModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Edit Student</h2>
              <button style={styles.closeButton} onClick={() => setShowEditModal(false)}>
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Name</label>
                <input
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  style={styles.formInput}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email</label>
                <input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) => setEditFormData({ ...editFormData, email: e.target.value })}
                  style={styles.formInput}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone</label>
                <input
                  type="tel"
                  value={editFormData.phone}
                  onChange={(e) => setEditFormData({ ...editFormData, phone: e.target.value })}
                  style={styles.formInput}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Internship Program</label>
                <select
                  value={editFormData.internship}
                  onChange={(e) => setEditFormData({ ...editFormData, internship: e.target.value })}
                  style={styles.formInput}
                >
                  {internshipPrograms.map(program => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Status</label>
                <select
                  value={editFormData.status}
                  onChange={(e) => setEditFormData({ ...editFormData, status: e.target.value })}
                  style={styles.formInput}
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            
            <div style={styles.modalFooter}>
              <button style={styles.secondaryButton} onClick={() => setShowEditModal(false)}>
                Cancel
              </button>
              <button style={styles.primaryButton} onClick={handleSaveEdit}>
                <FiCheckCircle />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Email Modal */}
      {showEmailModal && selectedStudent && (
        <div style={styles.modalOverlay} onClick={() => setShowEmailModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Send Email to {selectedStudent.name}</h2>
              <button style={styles.closeButton} onClick={() => setShowEmailModal(false)}>
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>To</label>
                <input
                  type="email"
                  value={selectedStudent.email}
                  readOnly
                  style={{ ...styles.formInput, backgroundColor: '#f8fafc' }}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                  style={styles.formInput}
                  placeholder="Enter email subject"
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Message</label>
                <textarea
                  value={emailData.message}
                  onChange={(e) => setEmailData({ ...emailData, message: e.target.value })}
                  style={{ ...styles.formInput, minHeight: '150px', resize: 'vertical' }}
                  placeholder="Enter your message"
                />
              </div>
            </div>
            
            <div style={styles.modalFooter}>
              <button style={styles.secondaryButton} onClick={() => setShowEmailModal(false)}>
                Cancel
              </button>
              <button
                style={styles.primaryButton}
                onClick={handleSendEmail}
                disabled={!emailData.subject || !emailData.message}
              >
                <FiSend />
                <span>Send Email</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    padding: '24px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '16px 20px',
    borderRadius: '8px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    zIndex: 1000,
    animation: 'slideIn 0.3s ease-out'
  },
  notificationIcon: {
    fontSize: '20px'
  },
  header: {
    marginBottom: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1a202c',
    margin: '0 0 8px 0'
  },
  subtitle: {
    fontSize: '16px',
    color: '#64748b',
    margin: 0
  },
  controls: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
    flexWrap: 'wrap'
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    minWidth: '300px'
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94a3b8',
    fontSize: '18px'
  },
  searchInput: {
    width: '100%',
    padding: '12px 16px 12px 48px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '15px',
    backgroundColor: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s'
  },
  filterContainer: {
    position: 'relative'
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#475569',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  filterDropdown: {
    position: 'absolute',
    top: 'calc(100% + 8px)',
    right: '0',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    padding: '20px',
    minWidth: '300px',
    zIndex: 10
  },
  filterGroup: {
    marginBottom: '16px'
  },
  filterLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569',
    marginBottom: '8px'
  },
  filterSelect: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    backgroundColor: '#fff',
    outline: 'none'
  },
  clearButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#64748b',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '8px'
  },
  tableWrapper: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  th: {
    padding: '16px',
    textAlign: 'left',
    fontSize: '13px',
    fontWeight: '600',
    color: '#64748b',
    backgroundColor: '#f8fafc',
    borderBottom: '1px solid #e2e8f0',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  tr: {
    borderBottom: '1px solid #f1f5f9',
    transition: 'background-color 0.15s'
  },
  td: {
    padding: '16px',
    fontSize: '14px',
    color: '#334155'
  },
  studentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },

  studentName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '2px'
  },
  studentEmail: {
    fontSize: '13px',
    color: '#64748b'
  },
  internshipText: {
    maxWidth: '250px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '13px',
    color: '#475569'
  },
  badge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '12px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '600'
  },
  metricContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  progressBar: {
    width: '100px',
    height: '6px',
    backgroundColor: '#e2e8f0',
    borderRadius: '3px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    borderRadius: '3px',
    transition: 'width 0.3s ease'
  },
  metricText: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#475569',
    minWidth: '45px'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  iconButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f8fafc',
    color: '#64748b',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    marginTop: '24px'
  },
  pageButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '36px',
    height: '36px',
    padding: '0 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#475569',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  activePageButton: {
    backgroundColor: '#1640FF',
    color: '#fff',
    borderColor: '#1640FF'
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    padding: '20px'
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '100%',
    maxWidth: '600px',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px',
    borderBottom: '1px solid #e2e8f0'
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1e293b',
    margin: 0
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f8fafc',
    color: '#64748b',
    fontSize: '20px',
    cursor: 'pointer'
  },
  modalBody: {
    padding: '24px'
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '32px',
    paddingBottom: '24px',
    borderBottom: '1px solid #e2e8f0'
  },
  profileAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  profileName: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0'
  },
  profileDetail: {
    fontSize: '14px',
    color: '#64748b',
    margin: '4px 0'
  },
  detailsGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  detailItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px'
  },
  detailLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748b',
    minWidth: '140px'
  },
  detailValue: {
    fontSize: '14px',
    color: '#1e293b',
    fontWeight: '500',
    textAlign: 'right'
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '20px 24px',
    borderTop: '1px solid #e2e8f0'
  },
  primaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  secondaryButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 20px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#475569',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569',
    marginBottom: '8px'
  },
  formInput: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    backgroundColor: '#fff',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s'
  }
};

export default StudentsPage;