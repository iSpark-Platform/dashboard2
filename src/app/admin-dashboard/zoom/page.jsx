 "use client";
import React, { useState } from 'react';
import { FiVideo, FiLink2, FiCalendar, FiSearch, FiFilter, FiEdit, FiX, FiSave, FiUpload, FiClock, FiPlay, FiAlertCircle, FiPlus } from 'react-icons/fi';

const ZoomManagementPage = () => {
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: 'Smart Robotics & Industry 4.0 Automation Internship',
      instructor: 'Dr. Robert Chen',
      startDate: '2023-12-01',
      endDate: '2023-12-15',
      zoomLink: 'https://zoom.us/j/123456789',
      status: 'active',
      recordings: [
        { id: 1, title: 'Intro to Robotics', date: '2023-12-01', link: '#' }
      ]
    },
    {
      id: 2,
      title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
      instructor: 'Dr. Sarah Johnson',
      startDate: '2023-12-10',
      endDate: '2023-12-20',
      zoomLink: '',
      status: 'upcoming',
      recordings: []
    },
    {
      id: 3,
      title: 'IoT & IIoT for Smart Systems and Industry 4.0',
      instructor: 'Prof. Michael Davis',
      startDate: '2023-10-01',
      endDate: '2023-10-15',
      zoomLink: 'https://zoom.us/j/987654321',
      status: 'completed',
      recordings: [
        { id: 2, title: 'IoT Fundamentals', date: '2023-10-01', link: '#' },
        { id: 3, title: 'Smart Systems Architecture', date: '2023-10-08', link: '#' }
      ]
    }
  ]);

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [formData, setFormData] = useState({ zoomLink: '', recordingLink: '' });

  const handleUpdateClick = (internship) => {
    setSelectedInternship(internship);
    setFormData({ zoomLink: internship.zoomLink || '', recordingLink: '' });
    setShowUpdateModal(true);
  };

  const handleSave = () => {
    setInternships(internships.map(i => 
      i.id === selectedInternship.id 
        ? { ...i, zoomLink: formData.zoomLink, recordings: formData.recordingLink ? [...i.recordings, { id: Date.now(), title: `New Recording ${i.recordings.length + 1}`, date: new Date().toISOString().split('T')[0], link: formData.recordingLink }] : i.recordings }
        : i
    ));
    setShowUpdateModal(false);
    setSelectedInternship(null);
  };

  const filteredInternships = internships.filter(i => {
    const matchesSearch = i.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || i.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const upcomingClasses = internships.filter(i => i.status === 'active' || i.status === 'upcoming');
  const allRecordings = internships.flatMap(i => i.recordings);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Zoom Management</h1>
        <p style={styles.subtitle}>Manage virtual classroom links and recordings</p>
      </div>

      <div style={styles.controls}>
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
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={styles.filterSelect}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="upcoming">Upcoming</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Warning for Missing Links */}
      {internships.some(i => !i.zoomLink) && (
        <div style={styles.warningCard}>
          <FiAlertCircle size={24} color="#EF7C00" />
          <div>
            <h4 style={styles.warningTitle}>Action Required</h4>
            <p style={styles.warningText}>Some internships are missing Zoom links. Update them to ensure classes run smoothly.</p>
          </div>
        </div>
      )}

      <div style={styles.mainGrid}>
        {/* Internship List */}
        <div style={styles.internshipList}>
          <h3 style={styles.sectionTitle}>Internship Zoom Links</h3>
          <div style={styles.cardsContainer}>
            {filteredInternships.map(internship => (
              <div key={internship.id} style={styles.internshipCard}>
                <div style={styles.cardHeader}>
                  <h4 style={styles.cardTitle}>{internship.title}</h4>
                  <span style={{...styles.statusBadge, backgroundColor: internship.status === 'active' ? '#10B981' : internship.status === 'upcoming' ? '#1640FF' : '#6B7280'}}>
                    {internship.status}
                  </span>
                </div>
                <p style={styles.instructorName}><strong>Instructor:</strong> {internship.instructor}</p>
                <div style={styles.dateRange}>
                  <FiCalendar size={14} color="#718096" />
                  <span>{new Date(internship.startDate).toLocaleDateString()} - {new Date(internship.endDate).toLocaleDateString()}</span>
                </div>
                <div style={styles.linkStatus}>
                  <FiLink2 size={14} color={internship.zoomLink ? "#10B981" : "#EF7C00"} />
                  <span style={{color: internship.zoomLink ? "#10B981" : "#EF7C00"}}>
                    {internship.zoomLink ? 'Link Added' : 'Missing Link'}
                  </span>
                </div>
                <button style={styles.updateButton} onClick={() => handleUpdateClick(internship)}>
                  <FiEdit size={14} /> Update Zoom Link
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Classes Schedule */}
        <div style={styles.scheduleSection}>
          <h3 style={styles.sectionTitle}>Upcoming Live Classes</h3>
          <div style={styles.scheduleContainer}>
            {upcomingClasses.map(cls => (
              <div key={cls.id} style={styles.scheduleItem}>
                <div style={styles.scheduleTime}>
                  <FiClock size={16} color="#1640FF" />
                  <span>{new Date(cls.startDate).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                </div>
                <div style={styles.scheduleDetails}>
                  <p style={styles.scheduleTitle}>{cls.title}</p>
                  <p style={styles.scheduleInstructor}>{cls.instructor}</p>
                </div>
                <button style={styles.joinButton}>
                  <FiVideo size={14} /> Join
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recordings Library */}
      <div style={styles.recordingsSection}>
        <h3 style={styles.sectionTitle}>Class Recordings Library</h3>
        <div style={styles.recordingsGrid}>
          {allRecordings.map(rec => (
            <div key={rec.id} style={styles.recordingCard}>
              <div style={styles.recordingThumbnail}>
                <FiPlay size={32} color="#fff" />
              </div>
              <div style={styles.recordingInfo}>
                <h4 style={styles.recordingTitle}>{rec.title}</h4>
                <p style={styles.recordingDate}>{rec.date}</p>
                <a href={rec.link} target="_blank" rel="noopener noreferrer" style={styles.recordingLink}>Watch</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Update Modal */}
      {showUpdateModal && selectedInternship && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Update Zoom Details</h3>
              <button onClick={() => setShowUpdateModal(false)} style={styles.closeButton}><FiX size={20} /></button>
            </div>
            <div style={styles.modalBody}>
              <h4 style={styles.modalSubtitle}>{selectedInternship.title}</h4>
              <div style={styles.formGroup}>
                <label style={styles.label}>Zoom Link</label>
                <input
                  type="url"
                  value={formData.zoomLink}
                  onChange={(e) => setFormData({ ...formData, zoomLink: e.target.value })}
                  style={styles.input}
                  placeholder="https://zoom.us/j/..."
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Upload New Recording (Optional)</label>
                <input
                  type="url"
                  value={formData.recordingLink}
                  onChange={(e) => setFormData({ ...formData, recordingLink: e.target.value })}
                  style={styles.input}
                  placeholder="Link to recording file"
                />
              </div>
            </div>
            <div style={styles.modalActions}>
              <button onClick={() => setShowUpdateModal(false)} style={styles.cancelButton}>Cancel</button>
              <button onClick={handleSave} style={styles.saveButton}><FiSave size={16} style={{marginRight: '8px'}}/> Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', padding: '24px', color: '#1a202c' },
  header: { marginBottom: '32px' },
  title: { fontSize: '32px', fontWeight: '700', margin: '0 0 8px', color: '#1a202c' },
  subtitle: { fontSize: '16px', color: '#718096', margin: 0 },
  controls: { display: 'flex', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' },
  searchContainer: { position: 'relative', flex: 1, minWidth: '300px' },
  searchIcon: { position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' },
  searchInput: { width: '100%', padding: '12px 12px 12px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none' },
  filterContainer: { display: 'flex', alignItems: 'center' },
  filterIcon: { marginRight: '8px' },
  filterSelect: { padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none' },
  warningCard: { display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: '#fff', border: '1px solid #FED7AA', borderRadius: '8px', padding: '16px', marginBottom: '24px' },
  warningTitle: { fontSize: '16px', fontWeight: '600', margin: '0 0 4px', color: '#1a202c' },
  warningText: { fontSize: '14px', margin: 0, color: '#4a5568' },
  mainGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '32px' },
  sectionTitle: { fontSize: '20px', fontWeight: '600', margin: '0 0 16px', color: '#1a202c' },
  cardsContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' },
  internshipCard: { backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '12px' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardTitle: { fontSize: '16px', fontWeight: '600', margin: 0, color: '#1a202c', flex: 1, marginRight: '8px' },
  statusBadge: { padding: '4px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: '500', color: '#fff' },
  instructorName: { fontSize: '14px', margin: 0, color: '#4a5568' },
  dateRange: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#718096' },
  linkStatus: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' },
  updateButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#1640FF', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', marginTop: 'auto' },
  scheduleSection: { backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  scheduleContainer: { display: 'flex', flexDirection: 'column', gap: '12px' },
  scheduleItem: { display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: '8px', backgroundColor: '#f8fafc' },
  scheduleTime: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#1640FF', minWidth: '120px' },
  scheduleDetails: { flex: 1 },
  scheduleTitle: { fontSize: '14px', fontWeight: '600', margin: '0 0 4px', color: '#1a202c' },
  scheduleInstructor: { fontSize: '13px', margin: 0, color: '#718096' },
  joinButton: { display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', backgroundColor: '#10B981', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer' },
  recordingsSection: { backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  recordingsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' },
  recordingCard: { backgroundColor: '#f8fafc', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' },
  recordingThumbnail: { height: '100px', backgroundColor: '#1640FF', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  recordingInfo: { padding: '12px' },
  recordingTitle: { fontSize: '14px', fontWeight: '600', margin: '0 0 4px', color: '#1a202c' },
  recordingDate: { fontSize: '12px', color: '#718096', margin: '0 0 8px' },
  recordingLink: { fontSize: '13px', color: '#1640FF', textDecoration: 'none', fontWeight: '500' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#fff', borderRadius: '12px', width: '90%', maxWidth: '500px', maxHeight: '80vh', overflow: 'auto', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #e2e8f0' },
  modalTitle: { fontSize: '20px', fontWeight: '600', margin: 0, color: '#1a202c' },
  closeButton: { background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#718096' },
  modalBody: { padding: '20px' },
  modalSubtitle: { fontSize: '16px', fontWeight: '600', margin: '0 0 20px', color: '#1a202c' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#4a5568' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none' },
  modalActions: { display: 'flex', justifyContent: 'flex-end', gap: '12px', padding: '20px', borderTop: '1px solid #e2e8f0' },
  cancelButton: { padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#fff', color: '#4a5568', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  saveButton: { display: 'flex', alignItems: 'center', padding: '10px 16px', borderRadius: '8px', border: 'none', backgroundColor: '#1640FF', color: '#fff', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
};
export default ZoomManagementPage;