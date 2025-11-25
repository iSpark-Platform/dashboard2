"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiEye, FiEdit, FiUser, FiMail, FiPhone, FiCalendar, FiX, FiCheck, FiChevronLeft, FiChevronRight, FiDownload, FiMail as FiEmailIcon } from 'react-icons/fi';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [internshipFilter, setInternshipFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showStudentModal, setShowStudentModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  
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
    // Mock data with the specified internship programs
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
        avatar: 'https://picsum.photos/seed/alice/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/bob/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/charlie/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/diana/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/ethan/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/fiona/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/george/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/hannah/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/ian/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/julia/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/kevin/100/100.jpg'
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
        avatar: 'https://picsum.photos/seed/laura/100/100.jpg'
      }
    ];
    
    setStudents(mockStudents);
    setFilteredStudents(mockStudents);
  }, []);
  
  // Filter students based on search term and filters
  useEffect(() => {
    let filtered = students;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by internship
    if (internshipFilter !== 'all') {
      filtered = filtered.filter(student => student.internship === internshipFilter);
    }
    
    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(student => student.status === statusFilter);
    }
    
    setFilteredStudents(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [students, searchTerm, internshipFilter, statusFilter]);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredStudents.slice(indexOfFirstItem, indexOfLastItem);
  
  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Handle view student details
  const viewStudentDetails = (student) => {
    setSelectedStudent(student);
    setShowStudentModal(true);
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return '#10B981';
      case 'Pending':
        return '#F59E0B';
      case 'Completed':
        return '#1640FF';
      default:
        return '#6B7280';
    }
  };
  
  // Get attendance color
  const getAttendanceColor = (percentage) => {
    if (percentage >= 90) return '#10B981';
    if (percentage >= 75) return '#F59E0B';
    return '#EF7C00';
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Students</h1>
        <p style={styles.subtitle}>Manage and view all student information</p>
      </div>
      
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
            <FiFilter style={styles.filterIcon} />
            Filters
          </button>
          
          {showFilterOptions && (
            <div style={styles.filterOptions}>
              <div style={styles.filterGroup}>
                <label style={styles.filterLabel}>Internship</label>
                <select
                  value={internshipFilter}
                  onChange={(e) => setInternshipFilter(e.target.value)}
                  style={styles.filterSelect}
                >
                  <option value="all">All Internships</option>
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
            </div>
          )}
        </div>
      </div>
      
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.tableHeaderCell}>Student</th>
              <th style={styles.tableHeaderCell}>Internship</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={styles.tableHeaderCell}>Attendance</th>
              <th style={styles.tableHeaderCell}>Progress</th>
              <th style={styles.tableHeaderCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map(student => (
              <tr key={student.id} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <div style={styles.studentInfo}>
                    <img src={student.avatar} alt={student.name} style={styles.avatar} />
                    <div>
                      <div style={styles.studentName}>{student.name}</div>
                      <div style={styles.studentEmail}>{student.email}</div>
                    </div>
                  </div>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.internshipName}>{student.internship}</div>
                </td>
                <td style={styles.tableCell}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: getStatusColor(student.status)
                    }}
                  >
                    {student.status}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.attendanceContainer}>
                    <div style={styles.attendanceBar}>
                      <div
                        style={{
                          ...styles.attendanceFill,
                          width: `${student.attendance}%`,
                          backgroundColor: getAttendanceColor(student.attendance)
                        }}
                      ></div>
                    </div>
                    <span style={styles.attendanceText}>{student.attendance}%</span>
                  </div>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.progressContainer}>
                    <div style={styles.progressBar}>
                      <div
                        style={{
                          ...styles.progressFill,
                          width: `${(student.assignmentsCompleted / student.totalAssignments) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span style={styles.progressText}>
                      {student.assignmentsCompleted}/{student.totalAssignments}
                    </span>
                  </div>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.actions}>
                    <button
                      style={styles.actionButton}
                      onClick={() => viewStudentDetails(student)}
                    >
                      <FiEye />
                    </button>
                    <button style={styles.actionButton}>
                      <FiEdit />
                    </button>
                    <button style={styles.actionButton}>
                      <FiEmailIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div style={styles.pagination}>
        <button
          style={styles.paginationButton}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiChevronLeft />
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            style={{
              ...styles.paginationButton,
              ...(currentPage === page && styles.activePaginationButton)
            }}
            onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}
        
        <button
          style={styles.paginationButton}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FiChevronRight />
        </button>
      </div>
      
      {/* Student Details Modal */}
      {showStudentModal && selectedStudent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Student Details</h2>
              <button
                style={styles.closeButton}
                onClick={() => setShowStudentModal(false)}
              >
                <FiX />
              </button>
            </div>
            
            <div style={styles.modalContent}>
              <div style={styles.studentDetails}>
                <div style={styles.studentProfile}>
                  <img
                    src={selectedStudent.avatar}
                    alt={selectedStudent.name}
                    style={styles.profileAvatar}
                  />
                  <div style={styles.profileInfo}>
                    <h3 style={styles.profileName}>{selectedStudent.name}</h3>
                    <p style={styles.profileEmail}>{selectedStudent.email}</p>
                    <p style={styles.profilePhone}>{selectedStudent.phone}</p>
                  </div>
                </div>
                
                <div style={styles.detailsSection}>
                  <h4 style={styles.sectionTitle}>Internship Information</h4>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Program:</span>
                    <span style={styles.detailValue}>{selectedStudent.internship}</span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Status:</span>
                    <span
                      style={{
                        ...styles.statusBadge,
                        backgroundColor: getStatusColor(selectedStudent.status)
                      }}
                    >
                      {selectedStudent.status}
                    </span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Join Date:</span>
                    <span style={styles.detailValue}>{formatDate(selectedStudent.joinDate)}</span>
                  </div>
                </div>
                
                <div style={styles.detailsSection}>
                  <h4 style={styles.sectionTitle}>Performance</h4>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Attendance:</span>
                    <div style={styles.attendanceContainer}>
                      <div style={styles.attendanceBar}>
                        <div
                          style={{
                            ...styles.attendanceFill,
                            width: `${selectedStudent.attendance}%`,
                            backgroundColor: getAttendanceColor(selectedStudent.attendance)
                          }}
                        ></div>
                      </div>
                      <span style={styles.attendanceText}>{selectedStudent.attendance}%</span>
                    </div>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Assignments:</span>
                    <div style={styles.progressContainer}>
                      <div style={styles.progressBar}>
                        <div
                          style={{
                            ...styles.progressFill,
                            width: `${(selectedStudent.assignmentsCompleted / selectedStudent.totalAssignments) * 100}%`
                          }}
                        ></div>
                      </div>
                      <span style={styles.progressText}>
                        {selectedStudent.assignmentsCompleted}/{selectedStudent.totalAssignments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.modalActions}>
              <button style={styles.modalButton}>
                <FiDownload style={styles.buttonIcon} />
                Download Report
              </button>
              <button style={styles.modalButton}>
                <FiMail style={styles.buttonIcon} />
                Send Email
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
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    backgroundColor: '#f8fafc',
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
  controls: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    minWidth: '300px'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#718096'
  },
  searchInput: {
    width: '100%',
    padding: '12px 12px 12px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  filterContainer: {
    position: 'relative'
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  filterIcon: {
    fontSize: '16px'
  },
  filterOptions: {
    position: 'absolute',
    top: '100%',
    right: '0',
    marginTop: '8px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    minWidth: '250px',
    zIndex: '10'
  },
  filterGroup: {
    marginBottom: '16px'
  },
  filterLabel: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#4a5568'
  },
  filterSelect: {
    width: '100%',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none'
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    backgroundColor: '#f8fafc'
  },
  tableHeaderCell: {
    padding: '16px',
    textAlign: 'left',
    fontSize: '14px',
    fontWeight: '600',
    color: '#4a5568',
    borderBottom: '1px solid #e2e8f0'
  },
  tableRow: {
    borderBottom: '1px solid #e2e8f0',
    transition: 'background-color 0.2s'
  },
  tableCell: {
    padding: '16px',
    fontSize: '14px',
    color: '#4a5568'
  },
  studentInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  avatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  studentName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1a202c'
  },
  studentEmail: {
    fontSize: '12px',
    color: '#718096'
  },
  internshipName: {
    maxWidth: '200px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  statusBadge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '500'
  },
  attendanceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  attendanceBar: {
    width: '80px',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  attendanceFill: {
    height: '100%',
    borderRadius: '4px'
  },
  attendanceText: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#4a5568'
  },
  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  progressBar: {
    width: '80px',
    height: '8px',
    backgroundColor: '#e2e8f0',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1640FF',
    borderRadius: '4px'
  },
  progressText: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#4a5568'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f8fafc',
    color: '#4a5568',
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
  paginationButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  activePaginationButton: {
    backgroundColor: '#1640FF',
    color: '#fff',
    borderColor: '#1640FF'
  },
  modalOverlay: {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '100'
  },
  modal: {
    backgroundColor: '#fff',
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
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0'
  },
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f8fafc',
    color: '#4a5568',
    cursor: 'pointer'
  },
  modalContent: {
    padding: '20px'
  },
  studentDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  studentProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  profileAvatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  profileInfo: {
    flex: '1'
  },
  profileName: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 4px 0'
  },
  profileEmail: {
    fontSize: '14px',
    color: '#4a5568',
    margin: '0 0 4px 0'
  },
  profilePhone: {
    fontSize: '14px',
    color: '#4a5568',
    margin: '0'
  },
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a202c',
    margin: '0 0 8px 0'
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  detailLabel: {
    fontSize: '14px',
    color: '#718096'
  },
  detailValue: {
    fontSize: '14px',
    color: '#1a202c',
    fontWeight: '500'
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '20px',
    borderTop: '1px solid #e2e8f0'
  },
  modalButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  },
  buttonIcon: {
    fontSize: '16px'
  }
};

export default StudentsPage;