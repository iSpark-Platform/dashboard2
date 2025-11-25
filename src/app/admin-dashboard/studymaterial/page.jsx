 "use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiUpload, FiFileText, FiBook, FiVideo, FiImage, FiDownload, FiEye, FiTrash2, FiX, FiFolder } from 'react-icons/fi';

const StudyMaterialsPage = () => {
  const [materials, setMaterials] = useState([]);
  const [filteredMaterials, setFilteredMaterials] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [internshipFilter, setInternshipFilter] = useState('all');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadFiles, setUploadFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState('');
  const [selectedInternship, setSelectedInternship] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  
  // Simulate fetching data from API
  useEffect(() => {
    const mockMaterials = [
      { id: 1, name: 'Introduction to React.js', type: 'PDF', internship: 'Web Development Basics', uploadDate: '2023-11-10', size: '2.4 MB', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
      { id: 2, name: 'Data Science Fundamentals Slides', type: 'PPT', internship: 'Data Science Fundamentals', uploadDate: '2023-11-08', size: '5.1 MB', url: 'https://picsum.photos/seed/ppt1/800/600.jpg' },
      { id: 3, name: 'UI Design Principles Video', type: 'Video', internship: 'UI/UX Design Principles', uploadDate: '2023-11-05', size: '120.5 MB', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: 4, name: 'Digital Marketing Checklist', type: 'Notes', internship: 'Digital Marketing Strategies', uploadDate: '2023-11-01', size: '0.5 MB', url: 'https://picsum.photos/seed/notes1/800/600.jpg' },
      { id: 5, name: 'Mobile App Wireframes', type: 'Image', internship: 'Mobile App Development', uploadDate: '2023-10-28', size: '8.3 MB', url: 'https://picsum.photos/seed/wireframe1/800/600.jpg' },
      { id: 6, name: 'Machine Learning Algorithms', type: 'PDF', internship: 'Machine Learning Basics', uploadDate: '2023-10-25', size: '4.7 MB', url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
    ];
    setMaterials(mockMaterials);
    setFilteredMaterials(mockMaterials);
  }, []);

  // Filter materials based on search term and filters
  useEffect(() => {
    let filtered = materials;
    if (searchTerm) {
      filtered = filtered.filter(material =>
        material.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        material.internship.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (typeFilter !== 'all') {
      filtered = filtered.filter(material => material.type === typeFilter);
    }
    if (internshipFilter !== 'all') {
      filtered = filtered.filter(material => material.internship === internshipFilter);
    }
    setFilteredMaterials(filtered);
  }, [searchTerm, typeFilter, internshipFilter, materials]);

  // Get unique internships for filter
  const internships = [...new Set(materials.map(material => material.internship))];

  // Get file icon based on type
  const getFileIcon = (type) => {
    switch (type) {
      case 'PDF': return <FiFileText color="#EF7C00" />;
      case 'PPT': return <FiBook color="#1640FF" />;
      case 'Video': return <FiVideo color="#10b981" />;
      case 'Image': return <FiImage color="#8b5cf6" />;
      default: return <FiFolder color="#718096" />;
    }
  };

  // Handle view material
  const handleViewMaterial = (material) => {
    setSelectedFile(material);
    setShowPreviewModal(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowPreviewModal(false);
    setShowUploadModal(false);
    setSelectedFile(null);
    setUploadFiles([]);
    setFileDescription('');
    setSelectedInternship('');
  };

  // Handle file selection for upload
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    setUploadFiles(files);
  };

  // Handle file upload
  const handleUpload = () => {
    if (uploadFiles.length === 0 || !selectedInternship) {
      alert('Please select files and an internship.');
      return;
    }
    setIsUploading(true);
    setTimeout(() => {
      const newMaterials = uploadFiles.map(file => ({
        id: materials.length + Math.random(),
        name: file.name,
        type: file.name.split('.').pop().toUpperCase() === 'PDF' ? 'PDF' : file.name.split('.').pop().toUpperCase() === 'PPTX' ? 'PPT' : 'File',
        internship: selectedInternship,
        uploadDate: new Date().toISOString().split('T')[0],
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        url: URL.createObjectURL(file)
      }));
      setMaterials([...materials, ...newMaterials]);
      setIsUploading(false);
      handleCloseModal();
    }, 1500);
  };

  // Handle delete material
  const handleDeleteMaterial = (id) => {
    if (window.confirm('Are you sure you want to delete this material?')) {
      setMaterials(materials.filter(material => material.id !== id));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Study Materials</h1>
        <p style={styles.subtitle}>Manage and upload educational resources</p>
      </div>

      {/* Search and Filters */}
      <div style={styles.filtersContainer}>
        <div style={styles.searchContainer}>
          <FiSearch size={18} color="#718096" style={styles.searchIcon} />
          <input type="text" placeholder="Search materials..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={styles.searchInput} />
        </div>
        <div style={styles.filterContainer}>
          <FiFilter size={18} color="#718096" style={styles.filterIcon} />
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} style={styles.filterSelect}>
            <option value="all">All Types</option>
            <option value="PDF">PDFs</option>
            <option value="PPT">PPTs</option>
            <option value="Video">Videos</option>
            <option value="Image">Images</option>
            <option value="Notes">Notes</option>
          </select>
        </div>
        <div style={styles.filterContainer}>
          <FiFilter size={18} color="#718096" style={styles.filterIcon} />
          <select value={internshipFilter} onChange={(e) => setInternshipFilter(e.target.value)} style={styles.filterSelect}>
            <option value="all">All Internships</option>
            {internships.map(internship => <option key={internship} value={internship}>{internship}</option>)}
          </select>
        </div>
        <button onClick={() => setShowUploadModal(true)} style={styles.uploadButton}><FiUpload size={18} /> Upload Material</button>
      </div>

      {/* Materials Grid */}
      <div style={styles.materialsGrid}>
        {filteredMaterials.map(material => (
          <div key={material.id} style={styles.materialCard}>
            <div style={styles.cardIcon}>{getFileIcon(material.type)}</div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{material.name}</h3>
              <p style={styles.cardMeta}>{material.internship} • {material.uploadDate}</p>
              <p style={styles.cardSize}>{material.size}</p>
            </div>
            <div style={styles.cardActions}>
              <button onClick={() => handleViewMaterial(material)} style={styles.actionButton} title="View"><FiEye size={16} /></button>
              <a href={material.url} target="_blank" rel="noopener noreferrer" download style={styles.actionButtonLink} title="Download"><FiDownload size={16} /></a>
              <button onClick={() => handleDeleteMaterial(material.id)} style={styles.actionButton} title="Delete"><FiTrash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Upload New Material</h2>
              <button style={styles.closeButton} onClick={handleCloseModal}><FiX size={20} /></button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.uploadArea}>
                <input type="file" multiple onChange={handleFileSelect} style={styles.fileInput} id="file-upload" />
                <label htmlFor="file-upload" style={styles.uploadLabel}>
                  <FiUpload size={32} color="#1640FF" />
                  <p style={styles.uploadText}>Click to upload or drag and drop</p>
                  <p style={styles.uploadSubtext}>PDF, PPT, Video, Image (Max. 100MB)</p>
                </label>
                {uploadFiles.length > 0 && (
                  <div style={styles.fileList}>
                    {uploadFiles.map((file, index) => <p key={index} style={styles.fileName}>{file.name}</p>)}
                  </div>
                )}
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Assign to Internship</label>
                <select value={selectedInternship} onChange={(e) => setSelectedInternship(e.target.value)} style={styles.select}>
                  <option value="">Select an internship</option>
                  {internships.map(internship => <option key={internship} value={internship}>{internship}</option>)}
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Description (Optional)</label>
                <textarea value={fileDescription} onChange={(e) => setFileDescription(e.target.value)} rows={3} style={styles.textarea} />
              </div>
              <div style={styles.modalActions}>
                <button onClick={handleCloseModal} style={styles.cancelButton}>Cancel</button>
                <button onClick={handleUpload} disabled={isUploading} style={styles.saveButton}>{isUploading ? 'Uploading...' : 'Upload'}</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {showPreviewModal && selectedFile && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>{selectedFile.name}</h2>
              <button style={styles.closeButton} onClick={handleCloseModal}><FiX size={20} /></button>
            </div>
            <div style={styles.modalBody}>
              <div style={styles.previewContainer}>
                {selectedFile.type === 'Image' ? <img src={selectedFile.url} alt={selectedFile.name} style={styles.previewImage} /> :
                 selectedFile.type === 'Video' ? <video controls style={styles.previewVideo}><source src={selectedFile.url} type="video/mp4" />Your browser does not support the video tag.</video> :
                 <div style={styles.previewPlaceholder}>
                    {getFileIcon(selectedFile.type)}
                    <p>Preview not available for this file type.</p>
                    <a href={selectedFile.url} target="_blank" rel="noopener noreferrer" style={styles.previewLink}>Open in new tab</a>
                 </div>
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#f5f7fa', minHeight: '100vh', padding: '20px', color: '#333' },
  header: { marginBottom: '24px' },
  title: { fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0', color: '#1a202c' },
  subtitle: { fontSize: '16px', color: '#718096', margin: '0' },
  filtersContainer: { display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', alignItems: 'center' },
  searchContainer: { position: 'relative', flex: '1', minWidth: '250px' },
  searchIcon: { position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' },
  searchInput: { width: '100%', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none' },
  filterContainer: { position: 'relative', display: 'flex', alignItems: 'center' },
  filterIcon: { position: 'absolute', left: '12px', pointerEvents: 'none' },
  filterSelect: { appearance: 'none', padding: '10px 12px 10px 40px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#fff', cursor: 'pointer', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23718096' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px' },
  uploadButton: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', borderRadius: '8px', border: 'none', backgroundColor: '#1640FF', color: '#fff', fontSize: '14px', fontWeight: '500', cursor: 'pointer', whiteSpace: 'nowrap' },
  materialsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' },
  materialCard: { display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', gap: '16px', transition: 'transform 0.2s, box-shadow 0.2s' },
  cardIcon: { fontSize: '32px', padding: '10px', borderRadius: '8px', backgroundColor: '#f7fafc' },
  cardContent: { flex: '1' },
  cardTitle: { fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#1a202c' },
  cardMeta: { fontSize: '12px', color: '#718096', margin: '0 0 4px 0' },
  cardSize: { fontSize: '12px', color: '#a0aec0', margin: 0 },
  cardActions: { display: 'flex', gap: '8px' },
  actionButton: { padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: '#f7fafc', color: '#4a5568', cursor: 'pointer', transition: 'background-color 0.2s' },
  actionButtonLink: { padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: '#f7fafc', color: '#4a5568', cursor: 'pointer', transition: 'background-color 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 },
  modalContent: { backgroundColor: '#fff', borderRadius: '12px', width: '90%', maxWidth: '600px', maxHeight: '90vh', overflow: 'auto', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' },
  modalHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #e2e8f0' },
  modalTitle: { fontSize: '20px', fontWeight: '600', margin: 0, color: '#1a202c' },
  closeButton: { padding: '8px', borderRadius: '6px', border: 'none', backgroundColor: '#f7fafc', color: '#4a5568', cursor: 'pointer' },
  modalBody: { padding: '20px' },
  uploadArea: { border: '2px dashed #cbd5e0', borderRadius: '8px', padding: '40px', textAlign: 'center', marginBottom: '20px', transition: 'border-color 0.2s', cursor: 'pointer' },
  fileInput: { display: 'none' },
  uploadLabel: { cursor: 'pointer' },
  uploadText: { fontSize: '16px', fontWeight: '500', color: '#4a5568', margin: '8px 0 4px 0' },
  uploadSubtext: { fontSize: '14px', color: '#a0aec0', margin: 0 },
  fileList: { marginTop: '16px' },
  fileName: { fontSize: '14px', color: '#4a5568', backgroundColor: '#f7fafc', padding: '8px', borderRadius: '4px', wordBreak: 'break-all' },
  formGroup: { marginBottom: '16px' },
  label: { display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#4a5568' },
  select: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', backgroundColor: '#fff' },
  textarea: { width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', resize: 'vertical' },
  modalActions: { display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' },
  cancelButton: { padding: '10px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: '#fff', color: '#4a5568', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  saveButton: { padding: '10px 16px', borderRadius: '8px', border: 'none', backgroundColor: '#1640FF', color: '#fff', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  previewContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' },
  previewImage: { maxWidth: '100%', maxHeight: '500px', borderRadius: '8px', objectFit: 'contain' },
  previewVideo: { maxWidth: '100%', maxHeight: '500px', borderRadius: '8px' },
  previewPlaceholder: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px', color: '#718096' },
  previewLink: { padding: '8px 16px', borderRadius: '6px', backgroundColor: '#1640FF', color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: '500' },
};

export default StudyMaterialsPage;