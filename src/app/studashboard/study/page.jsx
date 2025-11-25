"use client";
import React, { useState } from 'react';
import { FiFileText, FiVideo, FiBook, FiSearch, FiDownload, FiPlay, FiChevronRight, FiFilter } from 'react-icons/fi';

const StudyMaterialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample data for study materials
  const recentlyAddedMaterials = [
    {
      id: 1,
      title: 'Introduction to React Hooks',
      description: 'Comprehensive guide to using React Hooks in modern applications',
      type: 'pdf',
      date: '2023-06-15',
      size: '2.4 MB',
      downloads: 145,
      views: 520
    },
    {
      id: 2,
      title: 'Advanced CSS Techniques',
      description: 'Master modern CSS layouts and animations with practical examples',
      type: 'video',
      date: '2023-06-14',
      size: '156 MB',
      duration: '45 min',
      downloads: 89,
      views: 310
    },
    {
      id: 3,
      title: 'JavaScript Design Patterns',
      description: 'Essential design patterns every JavaScript developer should know',
      type: 'ppt',
      date: '2023-06-13',
      size: '5.8 MB',
      downloads: 112,
      views: 405
    },
    {
      id: 4,
      title: 'Node.js Best Practices',
      description: 'Industry-standard practices for building scalable Node.js applications',
      type: 'notes',
      date: '2023-06-12',
      size: '1.2 MB',
      downloads: 203,
      views: 680
    }
  ];
  
  const mostViewedMaterials = [
    {
      id: 5,
      title: 'Complete Guide to MongoDB',
      description: 'From basics to advanced MongoDB concepts and aggregation pipelines',
      type: 'video',
      date: '2023-05-28',
      size: '245 MB',
      duration: '1h 15min',
      downloads: 342,
      views: 1250
    },
    {
      id: 6,
      title: 'Python for Data Science',
      description: 'Introduction to Python libraries for data analysis and visualization',
      type: 'pdf',
      date: '2023-05-20',
      size: '8.7 MB',
      downloads: 456,
      views: 1890
    },
    {
      id: 7,
      title: 'UI/UX Design Principles',
      description: 'Fundamental principles of creating intuitive and beautiful interfaces',
      type: 'ppt',
      date: '2023-05-15',
      size: '12.3 MB',
      downloads: 278,
      views: 950
    },
    {
      id: 8,
      title: 'Machine Learning Algorithms',
      description: 'Detailed explanation of common ML algorithms with code examples',
      type: 'notes',
      date: '2023-05-10',
      size: '3.5 MB',
      downloads: 523,
      views: 1680
    }
  ];
  
  // Filter materials based on search term and active category
  const filterMaterials = (materials) => {
    return materials.filter(material => {
      const matchesSearch = material.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           material.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === 'all' || material.type === activeCategory;
      return matchesSearch && matchesCategory;
    });
  };
  
  // Get file icon based on type
  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf':
        return <FiFileText style={{color: '#FF5E5E'}} />;
      case 'video':
        return <FiVideo style={{color: '#4C6EF5'}} />;
      case 'ppt':
        return <FiFileText style={{color: '#FF922B'}} />;
      case 'notes':
        return <FiBook style={{color: '#51CF66'}} />;
      default:
        return <FiFileText />;
    }
  };
  
  // Get action button based on file type
  const getActionButton = (type) => {
    switch(type) {
      case 'video':
        return (
          <button style={styles.actionButton}>
            <FiPlay /> Play
          </button>
        );
      default:
        return (
          <button style={styles.actionButton}>
            <FiDownload /> Download
          </button>
        );
    }
  };
  
  // Get file type ribbon color
  const getRibbonColor = (type) => {
    switch(type) {
      case 'pdf':
        return '#FF5E5E';
      case 'video':
        return '#4C6EF5';
      case 'ppt':
        return '#FF922B';
      case 'notes':
        return '#51CF66';
      default:
        return '#ADB5BD';
    }
  };
  
  return (
    <div style={styles.container}>
      {/* Breadcrumb Navigation */}
     <div
  style={{
    textAlign: "center",
    marginBottom: "50px",
    fontFamily: "'Playfair Display', serif",
    fontSize: "42px",
    fontWeight: "700",
    color: "#1F2937",
    margin: "0 0 16px 0"
  }}
>
  Study Materials
</div>
 
      {/* Search Bar */}
      <div style={styles.searchContainer}>
        <div style={styles.searchBar}>
          <FiSearch style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search for materials..." 
            style={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button style={styles.filterButton}>
          <FiFilter /> Filters
        </button>
      </div>
      
      {/* Category Chips */}
      <div style={styles.categoryContainer}>
        <div 
          style={activeCategory === 'all' ? {...styles.categoryChip, ...styles.activeCategoryChip} : styles.categoryChip}
          onClick={() => setActiveCategory('all')}
        >
          All Materials
        </div>
        <div 
          style={activeCategory === 'pdf' ? {...styles.categoryChip, ...styles.activeCategoryChip} : styles.categoryChip}
          onClick={() => setActiveCategory('pdf')}
        >
          <FiFileText /> PDFs
        </div>
        <div 
          style={activeCategory === 'ppt' ? {...styles.categoryChip, ...styles.activeCategoryChip} : styles.categoryChip}
          onClick={() => setActiveCategory('ppt')}
        >
          <FiFileText /> PPTs
        </div>
        <div 
          style={activeCategory === 'notes' ? {...styles.categoryChip, ...styles.activeCategoryChip} : styles.categoryChip}
          onClick={() => setActiveCategory('notes')}
        >
          <FiBook /> Notes
        </div>
        <div 
          style={activeCategory === 'video' ? {...styles.categoryChip, ...styles.activeCategoryChip} : styles.categoryChip}
          onClick={() => setActiveCategory('video')}
        >
          <FiVideo /> Videos
        </div>
      </div>
      
      {/* Recently Added Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Recently Added</h2>
        <div style={styles.materialsGrid}>
          {filterMaterials(recentlyAddedMaterials).map(material => (
            <div key={material.id} style={styles.materialCard}>
              <div style={{...styles.ribbon, backgroundColor: getRibbonColor(material.type)}}></div>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <div style={styles.fileIcon}>
                    {getFileIcon(material.type)}
                  </div>
                  <div style={styles.fileMeta}>
                    <span style={styles.fileDate}>{material.date}</span>
                    <span style={styles.fileSize}>{material.size}</span>
                  </div>
                </div>
                <h3 style={styles.cardTitle}>{material.title}</h3>
                <p style={styles.cardDescription}>{material.description}</p>
                {material.duration && (
                  <div style={styles.durationInfo}>
                    <FiVideo style={styles.durationIcon} />
                    <span>{material.duration}</span>
                  </div>
                )}
                <div style={styles.cardFooter}>
                  <div style={styles.fileStats}>
                    <span>{material.downloads} downloads</span>
                    <span>{material.views} views</span>
                  </div>
                  {getActionButton(material.type)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Most Viewed Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Most Viewed</h2>
        <div style={styles.materialsGrid}>
          {filterMaterials(mostViewedMaterials).map(material => (
            <div key={material.id} style={styles.materialCard}>
              <div style={{...styles.ribbon, backgroundColor: getRibbonColor(material.type)}}></div>
              <div style={styles.cardContent}>
                <div style={styles.cardHeader}>
                  <div style={styles.fileIcon}>
                    {getFileIcon(material.type)}
                  </div>
                  <div style={styles.fileMeta}>
                    <span style={styles.fileDate}>{material.date}</span>
                    <span style={styles.fileSize}>{material.size}</span>
                  </div>
                </div>
                <h3 style={styles.cardTitle}>{material.title}</h3>
                <p style={styles.cardDescription}>{material.description}</p>
                {material.duration && (
                  <div style={styles.durationInfo}>
                    <FiVideo style={styles.durationIcon} />
                    <span>{material.duration}</span>
                  </div>
                )}
                <div style={styles.cardFooter}>
                  <div style={styles.fileStats}>
                    <span>{material.downloads} downloads</span>
                    <span>{material.views} views</span>
                  </div>
                  {getActionButton(material.type)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#F4F5F9',
    minHeight: '100vh',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    fontSize: '14px',
    color: '#6C757D'
  },
  breadcrumbItem: {
    color: '#6C757D',
    cursor: 'pointer'
  },
  breadcrumbItemActive: {
    color: '#1640FF',
    fontWeight: '500'
  },
  breadcrumbSeparator: {
    margin: '0 8px',
    fontSize: '12px'
  },
  searchContainer: {
    display: 'flex',
    gap: '15px',
    marginBottom: '25px'
  },
  searchBar: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    padding: '12px 20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  },
  searchIcon: {
    marginRight: '12px',
    color: '#6C757D',
    fontSize: '20px'
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif"
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 20px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#1640FF',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)'
  },
  categoryContainer: {
    display: 'flex',
    gap: '12px',
    marginBottom: '30px',
    overflowX: 'auto',
    paddingBottom: '5px'
  },
  categoryChip: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FFFFFF',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#6C757D',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
  },
  activeCategoryChip: {
    backgroundColor: '#1640FF',
    color: '#FFFFFF'
  },
  section: {
    marginBottom: '40px'
  },
  sectionTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#212529',
    marginBottom: '20px'
  },
  materialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px'
  },
  materialCard: {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  },
  ribbon: {
    position: 'absolute',
    top: '0',
    right: '0',
    width: '40px',
    height: '40px',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%)'
  },
  cardContent: {
    padding: '20px'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px'
  },
  fileIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '10px',
    backgroundColor: '#F8F9FA'
  },
  fileMeta: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '4px'
  },
  fileDate: {
    fontSize: '12px',
    color: '#6C757D'
  },
  fileSize: {
    fontSize: '12px',
    color: '#6C757D'
  },
  cardTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#212529',
    margin: '0 0 8px 0',
    lineHeight: '1.3'
  },
  cardDescription: {
    fontSize: '14px',
    color: '#6C757D',
    margin: '0 0 16px 0',
    lineHeight: '1.5'
  },
  durationInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '16px',
    fontSize: '14px',
    color: '#6C757D'
  },
  durationIcon: {
    fontSize: '16px'
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fileStats: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    fontSize: '12px',
    color: '#6C757D'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#F0F6FF',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#1640FF',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }
};

export default StudyMaterialsPage;