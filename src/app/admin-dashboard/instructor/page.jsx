"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiPlus, FiUser, FiMail, FiPhone, FiBookOpen, FiEdit, FiTrash2, FiX, FiCheck, FiCalendar, FiAward } from 'react-icons/fi';

const InstructorsPage = () => {
  const [instructors, setInstructors] = useState([]);
  const [filteredInstructors, setFilteredInstructors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [showInstructorModal, setShowInstructorModal] = useState(false);
  const [showAddInstructorForm, setShowAddInstructorForm] = useState(false);
  const [newInstructor, setNewInstructor] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    skills: []
  });
  const [availableInternships, setAvailableInternships] = useState([]);
  
  // Simulate fetching data from API
  useEffect(() => {
    const mockInstructors = [
      {
        id: 1,
        name: 'Dr. Robert Chen',
        email: 'robert.chen@example.com',
        phone: '+1234567890',
        bio: 'Expert in robotics and automation with 15 years of industry experience. Former lead engineer at Boston Dynamics.',
        skills: ['Robotics', 'Automation', 'Industry 4.0', 'PLC Programming'],
        assignedInternships: ['Smart Robotics & Industry 4.0 Automation Internship'],
        avatar: 'https://picsum.photos/seed/robert/100/100.jpg',
        rating: 4.8,
        experience: '15 years'
      },
      {
        id: 2,
        name: 'Dr. Sarah Johnson',
        email: 'sarah.johnson@example.com',
        phone: '+1234567891',
        bio: 'AI researcher with focus on practical applications of machine learning in industry. Published author of 3 books on ML.',
        skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'Computer Vision'],
        assignedInternships: ['Applied AI & Machine Learning: From Models to Real-World Applications'],
        avatar: 'https://picsum.photos/seed/sarah/100/100.jpg',
        rating: 4.9,
        experience: '12 years'
      },
      {
        id: 3,
        name: 'Prof. Michael Davis',
        email: 'michael.davis@example.com',
        phone: '+1234567892',
        bio: 'Specialist in IoT systems and industrial connectivity. Previously worked on smart city projects.',
        skills: ['IoT', 'IIoT', 'Smart Systems', 'Edge Computing'],
        assignedInternships: ['IoT & IIoT for Smart Systems and Industry 4.0'],
        avatar: 'https://picsum.photos/seed/michael/100/100.jpg',
        rating: 4.7,
        experience: '10 years'
      },
      {
        id: 4,
        name: 'Dr. Emily Rodriguez',
        email: 'emily.rodriguez@example.com',
        phone: '+1234567893',
        bio: 'Cloud architect with expertise in edge computing solutions for connected intelligence systems.',
        skills: ['Cloud Computing', 'Edge Computing', 'AWS', 'Azure'],
        assignedInternships: ['Cloud & Edge Computing for Connected Intelligence'],
        avatar: 'https://picsum.photos/seed/emily/100/100.jpg',
        rating: 4.6,
        experience: '8 years'
      },
    
   
    ];
    
    const mockInternships = [
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
    
    setInstructors(mockInstructors);
    setFilteredInstructors(mockInstructors);
    setAvailableInternships(mockInternships);
  }, []);
  
  // Filter instructors based on search term
  useEffect(() => {
    let filtered = instructors;
    
    if (searchTerm) {
      filtered = filtered.filter(instructor =>
        instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        instructor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredInstructors(filtered);
  }, [searchTerm, instructors]);
  
  // Handle view instructor details
  const handleViewInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    setShowInstructorModal(true);
  };
  
  // Handle close modal
  const handleCloseModal = () => {
    setShowInstructorModal(false);
    setSelectedInstructor(null);
  };
  
  // Handle add instructor
  const handleAddInstructor = () => {
    // In a real app, this would be an API call
    const newId = instructors.length + 1;
    const instructorToAdd = {
      ...newInstructor,
      id: newId,
      assignedInternships: [],
      avatar: `https://picsum.photos/seed/${newId}/100/100.jpg`,
      rating: 0,
      experience: 'New'
    };
    
    setInstructors([...instructors, instructorToAdd]);
    setNewInstructor({ name: '', email: '', phone: '', bio: '', skills: [] });
    setShowAddInstructorForm(false);
  };
  
  // Handle assign/unassign internship
  const handleToggleInternship = (internship) => {
    if (!selectedInstructor) return;
    
    const updatedInstructor = {
      ...selectedInstructor,
      assignedInternships: selectedInstructor.assignedInternships.includes(internship)
        ? selectedInstructor.assignedInternships.filter(i => i !== internship)
        : [...selectedInstructor.assignedInternships, internship]
    };
    
    setSelectedInstructor(updatedInstructor);
    
    // Update instructors list
    setInstructors(instructors.map(i => 
      i.id === updatedInstructor.id ? updatedInstructor : i
    ));
  };
  
  // Handle delete instructor
  const handleDeleteInstructor = (instructorId) => {
    if (window.confirm('Are you sure you want to remove this instructor?')) {
      setInstructors(instructors.filter(i => i.id !== instructorId));
    }
  };
  
  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Instructors</h1>
        <p style={styles.subtitle}>Manage teaching staff and their assignments</p>
      </div>
      
      {/* Search and Add Button */}
      <div style={styles.filtersContainer}>
        <div style={styles.searchContainer}>
          <FiSearch size={18} color="#718096" style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by name, email, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <button
          onClick={() => setShowAddInstructorForm(true)}
          style={styles.addButton}
        >
          <FiPlus size={18} />
          <span>Add Instructor</span>
        </button>
      </div>
      
      {/* Instructors Grid */}
      <div style={styles.instructorsGrid}>
        {filteredInstructors.map(instructor => (
          <div key={instructor.id} style={styles.instructorCard}>
            <div style={styles.cardHeader}>
              <img src={instructor.avatar} alt={instructor.name} style={styles.avatar} />
              <div style={styles.ratingBadge}>
                <FiAward size={14} color="#fff" />
                <span>{instructor.rating}</span>
              </div>
              <div style={styles.cardActions}>
                <button
                  onClick={() => handleViewInstructor(instructor)}
                  style={styles.actionButton}
                  title="View Profile"
                >
                  <FiUser size={16} />
                </button>
                <button
                  style={styles.actionButton}
                  title="Edit Instructor"
                >
                  <FiEdit size={16} />
                </button>
                <button
                  onClick={() => handleDeleteInstructor(instructor.id)}
                  style={styles.actionButton}
                  title="Remove Instructor"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
            
            <div style={styles.cardContent}>
              <h3 style={styles.instructorName}>{instructor.name}</h3>
              <div style={styles.experienceBadge}>
                <FiCalendar size={12} color="#1640FF" />
                <span>{instructor.experience} experience</span>
              </div>
              <div style={styles.contactInfo}>
                <div style={styles.contactItem}>
                  <FiMail size={14} color="#718096" />
                  <span>{instructor.email}</span>
                </div>
                <div style={styles.contactItem}>
                  <FiPhone size={14} color="#718096" />
                  <span>{instructor.phone}</span>
                </div>
              </div>
              
              <div style={styles.skillsSection}>
                <h4 style={styles.sectionTitle}>Skills</h4>
                <div style={styles.skillsContainer}>
                  {instructor.skills.slice(0, 3).map(skill => (
                    <span key={skill} style={styles.skillTag}>{skill}</span>
                  ))}
                  {instructor.skills.length > 3 && (
                    <span style={styles.moreSkillsTag}>+{instructor.skills.length - 3} more</span>
                  )}
                </div>
              </div>
              
              <div style={styles.internshipSection}>
                <h4 style={styles.sectionTitle}>Assigned Internships</h4>
                <div style={styles.internshipTags}>
                  {instructor.assignedInternships.length > 0 ? (
                    instructor.assignedInternships.map(internship => (
                      <span key={internship} style={styles.internshipTag}>
                        <FiBookOpen size={12} />
                        {internship.length > 30 ? `${internship.substring(0, 30)}...` : internship}
                      </span>
                    ))
                  ) : (
                    <span style={styles.noAssignments}>No assignments yet</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Instructor Details Modal */}
      {showInstructorModal && selectedInstructor && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Instructor Profile</h2>
              <button style={styles.closeButton} onClick={handleCloseModal}>
                <FiX size={20} />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.instructorProfile}>
                <img src={selectedInstructor.avatar} alt={selectedInstructor.name} style={styles.profileAvatar} />
                <div style={styles.profileInfo}>
                  <h3 style={styles.profileName}>{selectedInstructor.name}</h3>
                  <div style={styles.profileMeta}>
                    <div style={styles.ratingDisplay}>
                      <FiAward size={16} color="#1640FF" />
                      <span>{selectedInstructor.rating} Rating</span>
                    </div>
                    <div style={styles.experienceDisplay}>
                      <FiCalendar size={16} color="#1640FF" />
                      <span>{selectedInstructor.experience} experience</span>
                    </div>
                  </div>
                  <div style={styles.contactDetails}>
                    <div style={styles.contactItem}>
                      <FiMail size={14} color="#718096" />
                      <span>{selectedInstructor.email}</span>
                    </div>
                    <div style={styles.contactItem}>
                      <FiPhone size={14} color="#718096" />
                      <span>{selectedInstructor.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={styles.detailsSection}>
                <h4 style={styles.sectionTitle}>Bio</h4>
                <p style={styles.bioText}>{selectedInstructor.bio}</p>
              </div>
              
              <div style={styles.detailsSection}>
                <h4 style={styles.sectionTitle}>Skills</h4>
                <div style={styles.skillsContainer}>
                  {selectedInstructor.skills.map(skill => (
                    <span key={skill} style={styles.skillTag}>{skill}</span>
                  ))}
                </div>
              </div>
              
              <div style={styles.detailsSection}>
                <h4 style={styles.sectionTitle}>Manage Internship Assignments</h4>
                <div style={styles.internshipList}>
                  {availableInternships.map(internship => (
                    <div key={internship} style={styles.internshipItem}>
                      <span>{internship}</span>
                      <button
                        onClick={() => handleToggleInternship(internship)}
                        style={{
                          ...styles.toggleButton,
                          backgroundColor: selectedInstructor.assignedInternships.includes(internship) ? '#1640FF' : '#e2e8f0',
                          color: selectedInstructor.assignedInternships.includes(internship) ? '#fff' : '#4a5568'
                        }}
                      >
                        {selectedInstructor.assignedInternships.includes(internship) ? (
                          <>
                            <FiCheck size={14} />
                            Assigned
                          </>
                        ) : (
                          'Assign'
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add Instructor Modal */}
      {showAddInstructorForm && (
        <div style={styles.modalOverlay} onClick={() => setShowAddInstructorForm(false)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Add New Instructor</h2>
              <button style={styles.closeButton} onClick={() => setShowAddInstructorForm(false)}>
                <FiX size={20} />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Name</label>
                <input
                  type="text"
                  value={newInstructor.name}
                  onChange={(e) => setNewInstructor({...newInstructor, name: e.target.value})}
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Email</label>
                <input
                  type="email"
                  value={newInstructor.email}
                  onChange={(e) => setNewInstructor({...newInstructor, email: e.target.value})}
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone</label>
                <input
                  type="tel"
                  value={newInstructor.phone}
                  onChange={(e) => setNewInstructor({...newInstructor, phone: e.target.value})}
                  style={styles.input}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Bio</label>
                <textarea
                  value={newInstructor.bio}
                  onChange={(e) => setNewInstructor({...newInstructor, bio: e.target.value})}
                  rows={4}
                  style={styles.textarea}
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Skills (comma separated)</label>
                <input
                  type="text"
                  value={newInstructor.skills.join(', ')}
                  onChange={(e) => setNewInstructor({...newInstructor, skills: e.target.value.split(',').map(skill => skill.trim())})}
                  style={styles.input}
                  placeholder="e.g., JavaScript, React, Node.js"
                />
              </div>
              
              <div style={styles.formActions}>
                <button
                  onClick={() => setShowAddInstructorForm(false)}
                  style={styles.cancelButton}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddInstructor}
                  style={styles.saveButton}
                >
                  Add Instructor
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
  filtersContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    flexWrap: 'wrap',
    gap: '16px'
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    minWidth: '250px',
    maxWidth: '400px'
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
  addButton: {
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
    cursor: 'pointer'
  },
  instructorsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '24px'
  },
  instructorCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  },
  cardHeader: {
    position: 'relative',
    height: '120px',
    backgroundColor: '#f7fafc',
    backgroundImage: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)'
  },
  avatar: {
    position: 'absolute',
    bottom: '-40px',
    left: '20px',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    border: '4px solid #fff',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  ratingBadge: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    backgroundColor: '#1640FF',
    color: '#fff',
    padding: '4px 8px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '600'
  },
  cardActions: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    display: 'flex',
    gap: '8px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#fff',
    color: '#4a5568',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.2s ease'
  },
  cardContent: {
    padding: '20px 20px 20px 20px'
  },
  instructorName: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 8px 50px 0',
    color: '#1a202c',
    marginTop:'30px'
  },
  experienceBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    marginBottom: '16px',
    fontSize: '12px',
    color: '#1640FF',
    fontWeight: '500'
  },
  contactInfo: {
    marginBottom: '16px'
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '8px',
    fontSize: '14px',
    color: '#4a5568'
  },
  skillsSection: {
    marginBottom: '16px'
  },
  sectionTitle: {
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#4a5568'
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillTag: {
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '#f0f4ff',
    color: '#1640FF',
    fontSize: '12px',
    fontWeight: '500'
  },
  moreSkillsTag: {
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '#f7fafc',
    color: '#718096',
    fontSize: '12px',
    fontWeight: '500'
  },
  internshipSection: {
    borderTop: '1px solid #e2e8f0',
    paddingTop: '16px'
  },
  internshipTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  internshipTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: '#f0f4ff',
    color: '#1640FF',
    fontSize: '12px',
    fontWeight: '500'
  },
  noAssignments: {
    fontSize: '14px',
    color: '#a0aec0',
    fontStyle: 'italic'
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
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '700px',
    maxHeight: '90vh',
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
  closeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#f7fafc',
    color: '#4a5568',
    cursor: 'pointer'
  },
   modalBody: {
    padding: "20px",
  },

  /* Avatar at TOP — centered */
  avatarContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "16px",
    width: "100%",
  },

  profileAvatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },

  /* Instructor profile section */
  instructorProfile: {
    display: "flex",
    flexDirection: "column", // FIXED — avatar above details
    alignItems: "center",
    gap: "12px",
    marginBottom: "24px",
    width: "100%",
    textAlign: "center",
  },

  profileInfo: {
    flex: 1,
    width: "100%",
  },

  profileName: {
    fontSize: "22px",
    fontWeight: "600",
    margin: "0 0 8px 0",
    color: "#1a202c",
  },

  profileMeta: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "12px",
  },

  ratingDisplay: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#1640FF",
    fontWeight: "500",
  },

  experienceDisplay: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#1640FF",
    fontWeight: "500",
  },

  /* Contact section */
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  detailsSection: {
    marginBottom: "24px",
  },

  bioText: {
    fontSize: "14px",
    color: "#4a5568",
    lineHeight: "1.5",
  },

  /* Internship list */
  internshipList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  internshipItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    borderRadius: "8px",
    backgroundColor: "#f7fafc",
  },

  toggleButton: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  /* Form styling */
  formGroup: {
    marginBottom: "16px",
  },

  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    marginBottom: "8px",
    color: "#4a5568",
  },

  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
  },

  formActions: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "12px",
    marginTop: "24px",
  },

  cancelButton: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "1px solid #e2e8f0",
    backgroundColor: "#fff",
    color: "#4a5568",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },

  saveButton: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#1640FF",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
  },
};

export default InstructorsPage;