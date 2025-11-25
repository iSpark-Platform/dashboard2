"use client";
import React, { useState } from 'react';
import { FiAward, FiDownload, FiInfo, FiClock, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const CertificationsPage = () => {
  const [showTooltip, setShowTooltip] = useState(null);
  
  // Sample certification data
  const certifications = [
    {
      id: 1,
      title: "3D Printing & Digital Fabrication for Engineers",
      studentName: "John Doe",
      internshipName: "Web Development Internship",
      status: "available",
      issueDate: "June 15, 2023",
      previewImage: "images/courses/course-01/course-04.jpg"
    },
    {
      id: 2,
      title: "Cloud & Edge Computing for Connected Intelligence",
      studentName: "John Doe",
      internshipName: "Data Analytics Program",
      status: "inProgress",
      expectedDate: "July 20, 2023",
      previewImage: "images/courses/course-01/course-03.jpg"
    },
    {
      id: 3,
      title: "Applied AI & Machine Learning: From Models to Real-World Applications",
      studentName: "John Doe",
      internshipName: "Design Thinking Workshop",
      status: "notGenerated",
      requirements: "Complete all course modules and final project",
      previewImage: "images/courses/course-01/course-02.jpg"
    },
    {
      id: 4,
      title: "Smart Robotics & Industry 4.0 Automation Internship",
      studentName: "John Doe",
      internshipName: "React Native Internship",
      status: "available",
      issueDate: "May 10, 2023",
      previewImage: "images/courses/course-01/course-01.jpg"
    }
  ];
  
  // Handle download button click
  const handleDownload = (certId) => {
    console.log(`Downloading certificate ${certId}`);
    // In a real app, this would trigger a download
    alert('Certificate download started!');
  };
  
  // Get status styling based on certificate status
  const getStatusStyle = (status) => {
    switch(status) {
      case 'available':
        return {
          backgroundColor: '#EBF8FF',
          color: '#1640FF',
          icon: <FiCheckCircle />,
          text: 'Available'
        };
      case 'inProgress':
        return {
          backgroundColor: '#FFFBEB',
          color: '#D97706',
          icon: <FiClock />,
          text: 'In Progress'
        };
      case 'notGenerated':
        return {
          backgroundColor: '#F3F4F6',
          color: '#6B7280',
          icon: <FiAlertCircle />,
          text: 'Not Generated'
        };
      default:
        return {
          backgroundColor: '#F3F4F6',
          color: '#6B7280',
          icon: <FiAlertCircle />,
          text: 'Unknown'
        };
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>My Certifications</h1>
        <p style={styles.pageDescription}>View and download your earned certificates</p>
      </div>
      
      <div style={styles.certificationsGrid}>
        {certifications.map(cert => {
          const statusStyle = getStatusStyle(cert.status);
          const isAvailable = cert.status === 'available';
          
          return (
            <div 
              key={cert.id} 
              style={{
                ...styles.certCard,
                opacity: isAvailable ? 1 : 0.7,
                cursor: isAvailable ? 'pointer' : 'default'
              }}
            >
              {/* Golden gradient border */}
              <div style={styles.goldenBorder}></div>
              
              {/* Certificate preview */}
              <div style={styles.certPreview}>
                <img 
                  src={cert.previewImage} 
                  alt={`${cert.title} preview`}
                  style={styles.previewImage}
                />
                <div style={styles.previewOverlay}>
                  <FiAward style={styles.previewIcon} />
                </div>
              </div>
              
              {/* Certificate content */}
              <div style={styles.certContent}>
                <div style={styles.certHeader}>
                  <h2 style={styles.certTitle}>{cert.title}</h2>
                  <div 
                    style={styles.tooltipContainer}
                    onMouseEnter={() => setShowTooltip(cert.id)}
                    onMouseLeave={() => setShowTooltip(null)}
                  >
                    <FiInfo style={styles.infoIcon} />
                    {showTooltip === cert.id && (
                      <div style={styles.tooltip}>
                        {cert.status === 'available' && 'This certificate is ready for download'}
                        {cert.status === 'inProgress' && `Expected on ${cert.expectedDate}`}
                        {cert.status === 'notGenerated' && cert.requirements}
                      </div>
                    )}
                  </div>
                </div>
                
                <div style={styles.certDetails}>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Student:</span>
                    <span style={styles.detailValue}>{cert.studentName}</span>
                  </div>
                  <div style={styles.detailRow}>
                    <span style={styles.detailLabel}>Program:</span>
                    <span style={styles.detailValue}>{cert.internshipName}</span>
                  </div>
                  {cert.issueDate && (
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Issue Date:</span>
                      <span style={styles.detailValue}>{cert.issueDate}</span>
                    </div>
                  )}
                  {cert.expectedDate && (
                    <div style={styles.detailRow}>
                      <span style={styles.detailLabel}>Expected:</span>
                      <span style={styles.detailValue}>{cert.expectedDate}</span>
                    </div>
                  )}
                </div>
                
                <div style={styles.certFooter}>
                  <div style={{
                    ...styles.statusBadge,
                    backgroundColor: statusStyle.backgroundColor,
                    color: statusStyle.color
                  }}>
                    {statusStyle.icon}
                    <span>{statusStyle.text}</span>
                  </div>
                  
                  {isAvailable && (
                    <button 
                      style={styles.downloadButton}
                      onClick={() => handleDownload(cert.id)}
                    >
                      <FiDownload />
                      <span>Download</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  pageTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '42px',
    fontWeight: '700',
    color: '#1F2937',
    margin: '0 0 16px 0'
  },
  pageDescription: {
    fontSize: '18px',
    color: '#6B7280',
    maxWidth: '600px',
    margin: '0 auto'
  },
  certificationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '40px'
  },
  certCard: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  goldenBorder: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    height: '4px',
    background: 'linear-gradient(90deg, #D4AF37, #F9F295, #D4AF37)'
  },
  certPreview: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  previewOverlay: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  previewIcon: {
    fontSize: '48px',
    color: '#FFFFFF'
  },
  certContent: {
    padding: '30px'
  },
  certHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px'
  },
  certTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '24px',
    fontWeight: '700',
    color: '#1F2937',
    margin: '0',
    flex: '1',
    paddingRight: '10px'
  },
  tooltipContainer: {
    position: 'relative'
  },
  infoIcon: {
    fontSize: '18px',
    color: '#9CA3AF',
    cursor: 'help'
  },
  tooltip: {
    position: 'absolute',
    top: '25px',
    right: '0',
    backgroundColor: '#1F2937',
    color: '#FFFFFF',
    padding: '8px 12px',
    borderRadius: '6px',
    fontSize: '14px',
    width: '200px',
    zIndex: '10',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  },
  certDetails: {
    marginBottom: '24px'
  },
  detailRow: {
    display: 'flex',
    marginBottom: '12px'
  },
  detailLabel: {
    width: '100px',
    fontSize: '16px',
    color: '#6B7280',
    fontWeight: '500'
  },
  detailValue: {
    flex: '1',
    fontSize: '16px',
    color: '#1F2937'
  },
  certFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  statusBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500'
  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#1640FF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '10px 16px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease'
  }
};

export default CertificationsPage;