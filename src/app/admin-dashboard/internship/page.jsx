"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit, FiUsers, FiCalendar, FiEye, FiGrid, FiList } from 'react-icons/fi';
import { useRouter } from "next/navigation";

const ManageInternships = () => {
  const [internships, setInternships] = useState([]);
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  // Simulate fetching data from API
  useEffect(() => {
    // Mock data
    const mockInternships = [
      {
        id: 1,
        title: 'Smart Robotics & Industry 4.0 Automation Internship',
        instructor: 'John Doe',
        category: 'Development',
        startDate: '2023-12-01',
        endDate: '2024-02-28',
        studentCount: 45,
        status: 'Active',
        thumbnail: '	http://localhost:3000/assets/images/course/course-04/smart%20robotics.jpg'
      },
      {
        id: 2,
        title: 'Applied AI & Machine Learning: From Models to Real-World Applications',
        instructor: 'Jane Smith',
        category: 'Data Science',
        startDate: '2023-11-15',
        endDate: '2024-01-15',
        studentCount: 32,
        status: 'Active',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/ml.jpg'
      },
      {
        id: 3,
        title: 'IoT & IIoT for Smart Systems and Industry 4.0',
        instructor: 'Mike Johnson',
        category: 'Design',
        startDate: '2023-12-10',
        endDate: '2024-02-10',
        studentCount: 28,
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
        status: 'Completed',
        thumbnail: '	http://localhost:3000/assets/images/course/course-04/cloud.jpg'
      },
      {
        id: 5,
        title: '3D Printing & Digital Fabrication for Engineers',
        instructor: 'David Brown',
        category: 'Development',
        startDate: '2023-11-20',
        endDate: '2024-01-20',
        studentCount: 38,
        status: 'Active',
        thumbnail: 'http://localhost:3000/assets/images/course/course-04/3d.jpg'
      },
     
    ];
    
    setInternships(mockInternships);
    setFilteredInternships(mockInternships);
  }, []);
  
  // Filter internships based on search term and category
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
  
  // Get current internships for pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstItem, indexOfLastItem);
  
const router = useRouter();

const handleCreateInternship = () => {
  router.push('/admin-dashboard/create-internship');
};


  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  // Get status badge style
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
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Manage Internships</h1>
        <p style={styles.subtitle}>View, edit, and manage all internship programs</p>
      </div>
      
      {/* Search and Filters */}
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
      
      {/* Internships Grid/List */}
      {viewMode === 'grid' ? (
        <div style={styles.internshipsGrid}>
          {currentInternships.map(internship => (
            <div key={internship.id} style={styles.internshipCard}>
              <div style={styles.cardImageContainer}>
                <img src={internship.thumbnail} alt={internship.title} style={styles.cardImage} />
                <div style={styles.cardStatusBadge}>
                  <span style={getStatusBadgeStyle(internship.status)}>{internship.status}</span>
                </div>
              </div>
              
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{internship.title}</h3>
                <p style={styles.cardInstructor}>{internship.instructor}</p>
                
                <div style={styles.cardDetails}>
                  <div style={styles.cardDetail}>
                    <FiCalendar size={14} color="#718096" />
                    <span style={styles.cardDetailText}>
                      {new Date(internship.startDate).toLocaleDateString()} - {new Date(internship.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div style={styles.cardDetail}>
                    <FiUsers size={14} color="#718096" />
                    <span style={styles.cardDetailText}>{internship.studentCount} Students</span>
                  </div>
                </div>
                
                <div style={styles.cardActions}>
                  <button style={styles.cardActionButton}>
                    <FiEye size={14} />
                    <span>View Details</span>
                  </button>
                  <button style={styles.cardActionButton}>
                    <FiEdit size={14} />
                    <span>Edit</span>
                  </button>
                </div>
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
                
                <div style={styles.listItemDetails}>
                  <div style={styles.listItemDetail}>
                    <FiCalendar size={14} color="#718096" />
                    <span style={styles.listItemDetailText}>
                      {new Date(internship.startDate).toLocaleDateString()} - {new Date(internship.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div style={styles.listItemDetail}>
                    <FiUsers size={14} color="#718096" />
                    <span style={styles.listItemDetailText}>{internship.studentCount} Students</span>
                  </div>
                </div>
              </div>
              
              <div style={styles.listItemActions}>
                <button style={styles.listItemActionButton}>
                  <FiEye size={16} />
                  <span>View Details</span>
                </button>
                <button style={styles.listItemActionButton}>
                  <FiEdit size={16} />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Pagination */}
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
    outline: 'none',
    transition: 'border-color 0.2s'
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
    backgroundColor: '#fff',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    transition: 'background-color 0.2s'
  },
  internshipsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '24px'
  },
  internshipCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
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
  cardContent: {
    padding: '16px'
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 8px 0',
    color: '#1a202c'
  },
  cardInstructor: {
    fontSize: '14px',
    color: '#718096',
    margin: '0 0 12px 0'
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginBottom: '16px'
  },
  cardDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  cardDetailText: {
    fontSize: '14px',
    color: '#4a5568'
  },
  cardActions: {
    display: 'flex',
    gap: '8px'
  },
  cardActionButton: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '12px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s'
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
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    padding: '16px'
  },
  listItemImageContainer: {
    width: '120px',
    height: '120px',
    borderRadius: '8px',
    overflow: 'hidden',
    marginRight: '16px',
    flexShrink: 0
  },
  listItemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  listItemContent: {
    flex: '1'
  },
  listItemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px'
  },
  listItemTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0',
    color: '#1a202c'
  },
  statusBadge: {
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500'
  },
  listItemInstructor: {
    fontSize: '14px',
    color: '#718096',
    margin: '0 0 12px 0'
  },
  listItemDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  listItemDetail: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  },
  listItemDetailText: {
    fontSize: '14px',
    color: '#4a5568'
  },
  listItemActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    marginLeft: '16px'
  },
  listItemActionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '8px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s',
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
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s, color 0.2s'
  }
};

export default ManageInternships;