"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit, FiUsers, FiCalendar, FiEye, FiGrid, FiList, FiUpload, FiCheckCircle, FiClock, FiUserCheck, FiFileText, FiBarChart, FiX, FiDownload } from 'react-icons/fi';

const ManageInternships = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const itemsPerPage = 9;
  
  useEffect(() => {
    const mockInternships = [
      {
        id: 1,
        title: 'Smart Robotics & Industry 4.0 Automation Internship',
        instructor: 'John Doe',
        category: 'Development',
        startDate: '2023-12-01',
        endDate: '2024-02-28',
        studentCount: 45,
        attendanceRate: 92,
        materialsUploaded: 12,
        status: 'Active',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/smart%20robotics.jpg'
      },
      {
        id: 2,
        title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
        instructor: 'Jane Smith',
        category: 'Data Science',
        startDate: '2023-11-15',
        endDate: '2024-01-15',
        studentCount: 32,
        attendanceRate: 88,
        materialsUploaded: 8,
        status: 'Active',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/ml.jpg'
      },
      {
        id: 3,
        title: 'IoT & IIoT for Smart Systems and Industry 4.0',
        instructor: 'Mike Johnson',
        category: 'Design',
        startDate: '2024-12-10',
        endDate: '2025-02-10',
        studentCount: 28,
        attendanceRate: 0,
        materialsUploaded: 3,
        status: 'Upcoming',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/iiot.jpg'
      },
      {
        id: 4,
        title: 'Cloud & Edge Computing for Connected Intelligence',
        instructor: 'Sarah Williams',
        category: 'Marketing',
        startDate: '2023-10-01',
        endDate: '2023-12-01',
        studentCount: 56,
        attendanceRate: 95,
        materialsUploaded: 15,
        status: 'Completed',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/cloud.jpg'
      },
      {
        id: 5,
        title: '3D Printing & Digital Fabrication for Engineers',
        instructor: 'David Brown',
        category: 'Development',
        startDate: '2023-11-20',
        endDate: '2024-01-20',
        studentCount: 38,
        attendanceRate: 90,
        materialsUploaded: 10,
        status: 'Active',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/3d.jpg'
      },
    ];
    
    setInternships(mockInternships);
    setFilteredInternships(mockInternships);
  }, []);
  
  useEffect(() => {
    let filtered = internships;
    
    if (searchTerm) {
      filtered = filtered.filter(internship =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(internship => internship.category === categoryFilter);
    }
    
    setFilteredInternships(filtered);
    setCurrentPage(1);
  }, [searchTerm, categoryFilter, internships]);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstItem, indexOfLastItem);
  
  const handleCreateInternship = () => {
    alert('Redirecting to create internship page...');
  };

  const handleViewDetails = (internship) => {
    setSelectedInternship(internship);
    setModalType('details');
    setShowModal(true);
  };

  const handleUploadMaterials = (internship) => {
    setSelectedInternship(internship);
    setModalType('upload');
    setShowModal(true);
  };

  const handleViewAttendance = (internship) => {
    setSelectedInternship(internship);
    setModalType('attendance');
    setShowModal(true);
  };

  const handleViewReport = (internship) => {
    setSelectedInternship(internship);
    setModalType('report');
    setShowModal(true);
  };

  const handleEdit = (internship) => {
    alert(`Editing: ${internship.title}`);
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Active':
        return { backgroundColor: '#e6fffa', color: '#047481' };
      case 'Upcoming':
        return { backgroundColor: '#fffbeb', color: '#b45309' };
      case 'Completed':
        return { backgroundColor: '#f0fdf4', color: '#166534' };
      default:
        return { backgroundColor: '#f8fafc', color: '#475569' };
    }
  };

  const getActionButtons = (internship) => {
    switch (internship.status) {
      case 'Active':
        return [
         
          { icon: FiEye, label: 'View Details', action: () => handleViewDetails(internship), color: '#6366f1' },
          { icon: FiEdit, label: 'Edit', action: () => handleEdit(internship), color: '#7c3aed' }
        ];
      case 'Upcoming':
        return [
          { icon: FiUpload, label: 'Prepare Materials', action: () => handleUploadMaterials(internship), color: '#1640FF' },
          { icon: FiUsers, label: 'View Enrolled', action: () => handleViewDetails(internship), color: '#059669' },
          { icon: FiEdit, label: 'Edit', action: () => handleEdit(internship), color: '#7c3aed' }
        ];
      case 'Completed':
        return [
          { icon: FiBarChart, label: 'View Report', action: () => handleViewReport(internship), color: '#059669' },
          { icon: FiFileText, label: 'Final Materials', action: () => handleUploadMaterials(internship), color: '#1640FF' },
          { icon: FiEye, label: 'View Details', action: () => handleViewDetails(internship), color: '#6366f1' }
        ];
      default:
        return [];
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Manage Internships</h1>
        <p style={styles.subtitle}>View, edit, and manage all internship programs</p>
      </div>
      
      <div style={styles.filtersContainer}>
        <div style={styles.searchContainer}>
          <FiSearch size={18} color="#718096" style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search internships..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.filterContainer}>
          <FiFilter size={18} color="#718096" style={styles.filterIcon} />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">All Categories</option>
            <option value="Development">Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        
        <div style={styles.viewToggle}>
          <button
            onClick={() => setViewMode('grid')}
            style={{
              ...styles.viewToggleButton,
              backgroundColor: viewMode === 'grid' ? '#1640FF' : '#fff',
              color: viewMode === 'grid' ? '#fff' : '#718096'
            }}
          >
            <FiGrid size={18} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            style={{
              ...styles.viewToggleButton,
              backgroundColor: viewMode === 'list' ? '#1640FF' : '#fff',
              color: viewMode === 'list' ? '#fff' : '#718096'
            }}
          >
            <FiList size={18} />
          </button>
        </div>
        
        <button style={styles.createButton} onClick={handleCreateInternship}>
          <FiPlus size={18} />
          <span>Create Internship</span>
        </button>
      </div>
      
      {viewMode === 'grid' ? (
        <div style={styles.internshipsGrid}>
          {currentInternships.map(internship => (
            <div key={internship.id} style={styles.internshipCard}>
              <div style={styles.cardImageContainer}>
                <img src={internship.thumbnail} alt={internship.title} style={styles.cardImage} />
                <div style={styles.cardStatusBadge}>
                  <span style={{...styles.statusBadge, ...getStatusBadgeStyle(internship.status)}}>{internship.status}</span>
                </div>
              </div>
              
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{internship.title}</h3>
                <p style={styles.cardInstructor}>{internship.instructor}</p>
                
                <div style={styles.cardStats}>
                  <div style={styles.statItem}>
                    <FiUsers size={14} color="#718096" />
                    <span style={styles.statText}>{internship.studentCount} Students</span>
                  </div>
                  {internship.status !== 'Upcoming' && (
                    <div style={styles.statItem}>
                      <FiUserCheck size={14} color="#059669" />
                      <span style={styles.statText}>{internship.attendanceRate}% Attendance</span>
                    </div>
                  )}
                  <div style={styles.statItem}>
                    <FiFileText size={14} color="#1640FF" />
                    <span style={styles.statText}>{internship.materialsUploaded} Materials</span>
                  </div>
                </div>
                
                <div style={styles.cardActions}>
                  {getActionButtons(internship).slice(0, 2).map((button, index) => (
                    <button
                      key={index}
                      onClick={button.action}
                      style={{...styles.cardActionButton, borderColor: button.color, color: button.color}}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = button.color;
                        e.currentTarget.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = button.color;
                      }}
                    >
                      <button.icon size={14} />
                      <span>{button.label}</span>
                    </button>
                  ))}
                </div>
                
                {getActionButtons(internship).length > 2 && (
                  <div style={styles.moreActions}>
                    {getActionButtons(internship).slice(2).map((button, index) => (
                      <button
                        key={index}
                        onClick={button.action}
                        style={styles.moreActionButton}
                      >
                        <button.icon size={14} color={button.color} />
                        <span style={{color: button.color}}>{button.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.internshipsList}>
          {currentInternships.map(internship => (
            <div key={internship.id} style={styles.listItem}>
              <div style={styles.listItemImageContainer}>
                <img src={internship.thumbnail} alt={internship.title} style={styles.listItemImage} />
              </div>
              
              <div style={styles.listItemContent}>
                <div style={styles.listItemHeader}>
                  <h3 style={styles.listItemTitle}>{internship.title}</h3>
                  <span style={{ ...styles.statusBadge, ...getStatusBadgeStyle(internship.status) }}>
                    {internship.status}
                  </span>
                </div>
                
                <p style={styles.listItemInstructor}>{internship.instructor}</p>
                
                <div style={styles.listItemStats}>
                  <div style={styles.statItem}>
                    <FiUsers size={14} color="#718096" />
                    <span style={styles.statText}>{internship.studentCount} Students</span>
                  </div>
                  {internship.status !== 'Upcoming' && (
                    <div style={styles.statItem}>
                      <FiUserCheck size={14} color="#059669" />
                      <span style={styles.statText}>{internship.attendanceRate}% Attendance</span>
                    </div>
                  )}
                  <div style={styles.statItem}>
                    <FiFileText size={14} color="#1640FF" />
                    <span style={styles.statText}>{internship.materialsUploaded} Materials</span>
                  </div>
                </div>
              </div>
              
              <div style={styles.listItemActions}>
                {getActionButtons(internship).map((button, index) => (
                  <button
                    key={index}
                    onClick={button.action}
                    style={{...styles.listItemActionButton, borderColor: button.color, color: button.color}}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = button.color;
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = button.color;
                    }}
                  >
                    <button.icon size={16} />
                    <span>{button.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {filteredInternships.length > itemsPerPage && (
        <div style={styles.pagination}>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              ...styles.paginationButton,
              opacity: currentPage === 1 ? 0.5 : 1,
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>
          
          {Array.from({ length: Math.ceil(filteredInternships.length / itemsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              style={{
                ...styles.paginationButton,
                backgroundColor: currentPage === index + 1 ? '#1640FF' : '#fff',
                color: currentPage === index + 1 ? '#fff' : '#4a5568'
              }}
            >
              {index + 1}
            </button>
          ))}
          
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(filteredInternships.length / itemsPerPage)}
            style={{
              ...styles.paginationButton,
              opacity: currentPage === Math.ceil(filteredInternships.length / itemsPerPage) ? 0.5 : 1,
              cursor: currentPage === Math.ceil(filteredInternships.length / itemsPerPage) ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && selectedInternship && (
        <div style={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>
                {modalType === 'details' && 'Internship Details'}
             
            
                {modalType === 'report' && 'Final Report'}
              </h2>
              <button style={styles.modalClose} onClick={() => setShowModal(false)}>
                <FiX size={20} />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <h3 style={styles.modalInternshipTitle}>{selectedInternship.title}</h3>
              
              {modalType === 'details' && (
                <div>
                  <p><strong>Instructor:</strong> {selectedInternship.instructor}</p>
                  <p><strong>Category:</strong> {selectedInternship.category}</p>
                  <p><strong>Duration:</strong> {new Date(selectedInternship.startDate).toLocaleDateString()} - {new Date(selectedInternship.endDate).toLocaleDateString()}</p>
                  <p><strong>Students Enrolled:</strong> {selectedInternship.studentCount}</p>
                  <p><strong>Materials Uploaded:</strong> {selectedInternship.materialsUploaded}</p>
                  {selectedInternship.status !== 'Upcoming' && (
                    <p><strong>Attendance Rate:</strong> {selectedInternship.attendanceRate}%</p>
                  )}
                </div>
              )}
              
              {modalType === 'upload' && (
                <div>
                  <p style={styles.modalText}>Upload course materials, assignments, and resources for students.</p>
                  <div style={styles.uploadArea}>
                    <FiUpload size={48} color="#718096" />
                    <p>Drag and drop files here or click to browse</p>
                    <button style={styles.uploadButton}>Select Files</button>
                  </div>
                  <div style={styles.uploadedList}>
                    <p><strong>Previously uploaded ({selectedInternship.materialsUploaded}):</strong></p>
                    <ul>
                      <li>Week 1 - Introduction.pdf</li>
                      <li>Week 2 - Assignment.docx</li>
                      <li>Week 3 - Video Tutorial.mp4</li>
                    </ul>
                  </div>
                </div>
              )}
              
              {modalType === 'attendance' && (
                <div>
                  <div style={styles.attendanceStats}>
                    <div style={styles.attendanceStat}>
                      <FiUserCheck size={32} color="#059669" />
                      <p style={styles.attendanceStatNumber}>{selectedInternship.attendanceRate}%</p>
                      <p style={styles.attendanceStatLabel}>Average Attendance</p>
                    </div>
                    <div style={styles.attendanceStat}>
                      <FiUsers size={32} color="#1640FF" />
                      <p style={styles.attendanceStatNumber}>{Math.round(selectedInternship.studentCount * selectedInternship.attendanceRate / 100)}</p>
                      <p style={styles.attendanceStatLabel}>Students Present</p>
                    </div>
                  </div>
                  <div style={styles.attendanceList}>
                    <p><strong>Recent Sessions:</strong></p>
                    <div style={styles.sessionItem}>
                      <span>Nov 20, 2024</span>
                      <span style={{color: '#059669'}}>94% Present</span>
                    </div>
                    <div style={styles.sessionItem}>
                      <span>Nov 18, 2024</span>
                      <span style={{color: '#059669'}}>91% Present</span>
                    </div>
                    <div style={styles.sessionItem}>
                      <span>Nov 15, 2024</span>
                      <span style={{color: '#059669'}}>90% Present</span>
                    </div>
                  </div>
                </div>
              )}
              
              {modalType === 'report' && (
                <div>
                  <div style={styles.reportStats}>
                    <div style={styles.reportStat}>
                      <FiCheckCircle size={24} color="#059669" />
                      <p style={styles.reportStatNumber}>{selectedInternship.studentCount}</p>
                      <p style={styles.reportStatLabel}>Completed</p>
                    </div>
                    <div style={styles.reportStat}>
                      <FiBarChart size={24} color="#1640FF" />
                      <p style={styles.reportStatNumber}>{selectedInternship.attendanceRate}%</p>
                      <p style={styles.reportStatLabel}>Success Rate</p>
                    </div>
                    <div style={styles.reportStat}>
                      <FiFileText size={24} color="#7c3aed" />
                      <p style={styles.reportStatNumber}>{selectedInternship.materialsUploaded}</p>
                      <p style={styles.reportStatLabel}>Materials</p>
                    </div>
                  </div>
                  <button style={styles.downloadButton}>
                    <FiDownload size={16} />
                    Download Full Report
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
  filtersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '24px',
    alignItems: 'center'
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    minWidth: '200px'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  searchInput: {
    width: '100%',
    padding: '10px 12px 10px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none'
  },
  filterContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  filterIcon: {
    position: 'absolute',
    left: '12px',
    pointerEvents: 'none'
  },
  filterSelect: {
    appearance: 'none',
    padding: '10px 12px 10px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23718096' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '36px'
  },
  viewToggle: {
    display: 'flex',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0'
  },
  viewToggleButton: {
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s'
  },
  createButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  internshipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '20px',
    marginBottom: '24px'
  },
  internshipCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s, box-shadow 0.2s'
  },
  cardImageContainer: {
    position: 'relative',
    height: '160px'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardStatusBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px'
  },
  statusBadge: {
    padding: '4px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  },
  cardContent: {
    padding: '16px'
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#1a202c',
    lineHeight: '1.4'
  },
  cardInstructor: {
    fontSize: '13px',
    color: '#718096',
    margin: '0 0 12px 0'
  },
  cardStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '12px',
    padding: '12px',
    backgroundColor: '#f8fafc',
    borderRadius: '8px'
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  statText: {
    fontSize: '13px',
    color: '#4a5568',
    fontWeight: '500'
  },
  cardActions: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    marginBottom: '8px'
  },
  cardActionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '8px',
    borderRadius: '6px',
    border: '1.5px solid',
    backgroundColor: '#fff',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  moreActions: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'space-between'
  },
  moreActionButton: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '6px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '11px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  internshipsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '24px'
  },
  listItem: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    padding: '16px',
    gap: '16px'
  },
  listItemImageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '8px',
    overflow: 'hidden',
    flexShrink: 0
  },
  listItemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  listItemContent: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  listItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '4px'
  },
  listItemTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0',
    color: '#1a202c',
    lineHeight: '1.4',
    flex: '1',
    marginRight: '12px'
  },
  listItemInstructor: {
    fontSize: '13px',
    color: '#718096',
    margin: '0 0 8px 0'
  },
  listItemStats: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  },
  listItemActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flexShrink: 0
  },
  listItemActionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1.5px solid',
    backgroundColor: '#fff',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
    marginTop: '24px'
  },
  paginationButton: {
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
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
    margin: 0,
    color: '#1a202c'
  },
  modalClose: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#718096',
    padding: '4px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalBody: {
    padding: '20px'
  },
  modalInternshipTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 16px 0',
    color: '#1a202c'
  },
  modalText: {
    fontSize: '14px',
    color: '#4a5568',
    margin: '0 0 16px 0'
  },
  uploadArea: {
    border: '2px dashed #cbd5e0',
    borderRadius: '8px',
    padding: '24px',
    textAlign: 'center',
    marginBottom: '20px'
  },
  uploadButton: {
    padding: '8px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    marginTop: '12px'
  },
  uploadedList: {
    marginTop: '20px'
  },
  attendanceStats: {
    display: 'flex',
    gap: '24px',
    marginBottom: '24px'
  },
  attendanceStat: {
    textAlign: 'center',
    flex: '1'
  },
  attendanceStatNumber: {
    fontSize: '24px',
    fontWeight: '700',
    margin: '8px 0',
    color: '#1a202c'
  },
  attendanceStatLabel: {
    fontSize: '14px',
    color: '#718096',
    margin: 0
  },
  attendanceList: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '16px'
  },
  sessionItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 0',
    borderBottom: '1px solid #f1f5f9'
  },
  reportStats: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px'
  },
  reportStat: {
    textAlign: 'center',
    flex: '1',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f8fafc'
  },
  reportStatNumber: {
    fontSize: '20px',
    fontWeight: '700',
    margin: '8px 0',
    color: '#1a202c'
  },
  reportStatLabel: {
    fontSize: '14px',
    color: '#718096',
    margin: 0
  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    margin: '0 auto'
  }
};

export default ManageInternships;