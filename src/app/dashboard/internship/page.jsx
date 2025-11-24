"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus,
  faSearch,
  faFilter,
  faSort,
  faLayerGroup,
  faUsers,
  faClock,
  faPlayCircle,
  faArrowRight,
  faEdit,
  faTrash,
  faRobot,
  faBrain,
  faNetworkWired,
  faCloud,
  faCube,
  faChevronDown,
  faTimes,
  faVideo,
  faChartLine,
  faCalendarAlt,
  faGraduationCap,
  faCheckCircle,
  faHourglassHalf,
  faCircle,
  faSave,
  faXmark,
  faBars,
  faHome,
  faBook,
  faUserGraduate,
  faChartBar,
  faComments,
  faCog,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const MyInternships = () => {
  // State for internships data
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Smart Robotics & Industry 4.0 ",
      category: "Robotics",
      categoryIcon: faRobot,
      studentsEnrolled: 42,
      status: "ongoing",
      statusIcon: faPlayCircle,
      color: "#1640FF",
      gradient: "linear-gradient(135deg, #1640FF 0%, #3366FF 100%)",
      icon: faRobot,
      description: "Advanced robotics program focusing on Industry 4.0 automation",
      nextClass: "Today, 2:00 PM",
      progress: 65
    },
    {
      id: 2,
      title: "Applied AI & Machine Learning",
      category: "AI",
      categoryIcon: faBrain,
      studentsEnrolled: 38,
      status: "ongoing",
      statusIcon: faPlayCircle,
      color: "#EF7C00",
      gradient: "linear-gradient(135deg, #EF7C00 0%, #FF9500 100%)",
      icon: faBrain,
      description: "Comprehensive AI and machine learning program with real-world applications",
      nextClass: "Tomorrow, 10:00 AM",
      progress: 45
    },
    {
      id: 3,
      title: "IoT & IIoT for Smart Systems",
      category: "IoT",
      categoryIcon: faNetworkWired,
      studentsEnrolled: 28,
      status: "upcoming",
      statusIcon: faHourglassHalf,
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
      icon: faNetworkWired,
      description: "Internet of Things and Industrial IoT for smart systems development",
      nextClass: "Starts June 15",
      progress: 0
    },
    {
      id: 4,
      title: "Cloud & Edge Computing",
      category: "Cloud",
      categoryIcon: faCloud,
      studentsEnrolled: 32,
      status: "upcoming",
      statusIcon: faHourglassHalf,
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4 0%, #38BDF8 100%)",
      icon: faCloud,
      description: "Master cloud computing and edge technologies for modern infrastructure",
      nextClass: "Starts June 20",
      progress: 0
    },
    {
      id: 5,
      title: "3D Printing & Digital Fabrication",
      category: "Fabrication",
      categoryIcon: faCube,
      studentsEnrolled: 24,
      status: "completed",
      statusIcon: faCheckCircle,
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
      icon: faCube,
      description: "Advanced 3D printing and digital fabrication techniques",
      nextClass: "Completed",
      progress: 100
    }
  ]);
  
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [showFilters, setShowFilters] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // State for create internship modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: "",
    category: "",
    description: "",
    startDate: "",
    duration: ""
  });
  
  // State for stats
  const [stats, setStats] = useState({
    total: 0,
    ongoing: 0,
    upcoming: 0,
    completed: 0
  });
  
  // State for sidebar
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("internships");
  
  // Calculate stats whenever internships data changes
  useEffect(() => {
    const total = internships.length;
    const ongoing = internships.filter(i => i.status === 'ongoing').length;
    const upcoming = internships.filter(i => i.status === 'upcoming').length;
    const completed = internships.filter(i => i.status === 'completed').length;
    
    setStats({ total, ongoing, upcoming, completed });
  }, [internships]);
  
  // Filter internships based on search and filters
  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         internship.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === "all" || internship.category === filterCategory;
    const matchesStatus = filterStatus === "all" || internship.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Sort internships
  const sortedInternships = [...filteredInternships].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.title.localeCompare(b.title);
      case "students":
        return b.studentsEnrolled - a.studentsEnrolled;
      case "progress":
        return b.progress - a.progress;
      case "recent":
        // In a real app, you'd sort by creation date
        return b.id - a.id;
      default:
        return 0;
    }
  });
  
  // Handle create internship
  const handleCreateInternship = () => {
    setShowCreateModal(true);
  };
  
  // Handle save new internship
  const handleSaveInternship = () => {
    if (newInternship.title && newInternship.category) {
      const categoryIcon = getCategoryIcon(newInternship.category);
      const color = getCategoryColor(newInternship.category);
      const gradient = getCategoryGradient(newInternship.category);
      
      const id = internships.length + 1;
      const internship = {
        id,
        title: newInternship.title,
        category: newInternship.category,
        categoryIcon,
        studentsEnrolled: 0,
        status: "upcoming",
        statusIcon: faHourglassHalf,
        color,
        gradient,
        icon: categoryIcon,
        description: newInternship.description,
        nextClass: `Starts ${newInternship.startDate}`,
        progress: 0
      };
      
      setInternships([...internships, internship]);
      setNewInternship({
        title: "",
        category: "",
        description: "",
        startDate: "",
        duration: ""
      });
      setShowCreateModal(false);
    } else {
      alert("Please fill in all required fields");
    }
  };
  
  // Handle start class
  const handleStartClass = () => {
    const ongoingInternships = internships.filter(i => i.status === 'ongoing');
    if (ongoingInternships.length > 0) {
      alert(`Starting class for: ${ongoingInternships[0].title}`);
    } else {
      alert("No ongoing internships to start class for");
    }
  };
  
  // Get category icon
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Robotics": return faRobot;
      case "AI": return faBrain;
      case "IoT": return faNetworkWired;
      case "Cloud": return faCloud;
      case "Fabrication": return faCube;
      default: return faLayerGroup;
    }
  };
  
  // Get category color
  const getCategoryColor = (category) => {
    switch (category) {
      case "Robotics": return "#1640FF";
      case "AI": return "#EF7C00";
      case "IoT": return "#8B5CF6";
      case "Cloud": return "#06B6D4";
      case "Fabrication": return "#10B981";
      default: return "#6B7280";
    }
  };
  
  // Get category gradient
  const getCategoryGradient = (category) => {
    switch (category) {
      case "Robotics": return "linear-gradient(135deg, #1640FF 0%, #3366FF 100%)";
      case "AI": return "linear-gradient(135deg, #EF7C00 0%, #FF9500 100%)";
      case "IoT": return "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)";
      case "Cloud": return "linear-gradient(135deg, #06B6D4 0%, #38BDF8 100%)";
      case "Fabrication": return "linear-gradient(135deg, #10B981 0%, #34D399 100%)";
      default: return "linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%)";
    }
  };
  
  // Handle manage internship
  const handleManageInternship = (internshipId) => {
    const internship = internships.find(i => i.id === internshipId);
    alert(`Managing internship: ${internship.title}`);
  };
  
  // Handle edit internship
  const handleEditInternship = (internshipId) => {
    const internship = internships.find(i => i.id === internshipId);
    alert(`Editing internship: ${internship.title}`);
  };
  
  // Handle delete internship
  const handleDeleteInternship = (internshipId) => {
    const internship = internships.find(i => i.id === internshipId);
    if (window.confirm(`Are you sure you want to delete "${internship.title}"?`)) {
      setInternships(internships.filter(i => i.id !== internshipId));
    }
  };
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  return (
    <div className="app-container">
     
      
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <h1 className="header-title">My Internships</h1>
            <p className="header-subtitle">Organize, upload and manage all your learning resources</p>
          </div>
          
          {/* Search Bar */}
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search internships..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Filters Row */}
          <div className="filters-row">
            <div className="filter-dropdown">
              <select
                className="filter-select"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="Robotics">Robotics</option>
                <option value="AI">AI</option>
                <option value="IoT">IoT</option>
                <option value="Cloud">Cloud</option>
                <option value="Fabrication">Fabrication</option>
              </select>
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            </div>
            
            <div className="filter-dropdown">
              <select
                className="filter-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            </div>
            
            <div className="filter-dropdown">
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="recent">Recent</option>
                <option value="name">Name</option>
                <option value="students">Students</option>
                <option value="progress">Progress</option>
              </select>
              <FontAwesomeIcon icon={faSort} className="filter-icon" />
            </div>
            
            
            
            <button
              className="upload-btn"
              onClick={handleCreateInternship}
            >
              <FontAwesomeIcon icon={faPlus} />
              Create Internship
            </button>
          </div>
        </div>
        
        <div className="content-container">
          {/* Main Content */}
          <div className="main-section">
            {/* Ongoing Internships Section */}
            <div className="section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faPlayCircle} className="section-icon" />
                Ongoing Internships
              </h2>
              <div className="materials-grid">
                {sortedInternships.filter(internship => internship.status === 'ongoing').map(internship => (
                  <div
                    key={internship.id}
                    className="material-card"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderLeftColor: internship.color
                    }}
                  >
                    <div className="card-header">
                      <div className="icon-container" style={{
                        backgroundColor: getCategoryBgColor(internship.category)
                      }}>
                        <FontAwesomeIcon icon={internship.icon} style={{
                          color: internship.color
                        }} />
                      </div>
                      <span className="category-tag" style={{
                        backgroundColor: getCategoryBgColor(internship.category),
                        color: internship.color
                      }}>
                        {internship.category}
                      </span>
                    </div>
                    
                    <h3 className="card-title">{internship.title}</h3>
                    <p className="card-description">{internship.description}</p>
                    
                    <div className="card-meta">
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faUsers} />
                        {internship.studentsEnrolled} Students
                      </span>
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {internship.nextClass}
                      </span>
                    </div>
                    
                    <div className="progress-section">
                      <div className="progress-header">
                        <span>Progress</span>
                        <span>{internship.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${internship.progress}%`,
                            backgroundColor: internship.color
                          }}
                        ></div>
                      </div>
                      <button
              className="start-class-btn"
              onClick={handleStartClass}
            >
              <FontAwesomeIcon icon={faVideo} />
              Start Class
            </button>
                    </div>
                    
                    <div className={`card-actions ${hoveredCard === internship.id ? 'visible' : ''}`}>
                      <button
                        className="action-btn"
                        onClick={() => handleStartClass(internship.id)}
                      >
                        <FontAwesomeIcon icon={faVideo} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleManageInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faChartLine} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleEditInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleDeleteInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Upcoming Internships Section */}
            <div className="section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faClock} className="section-icon" />
                Upcoming Internships
              </h2>
              <div className="materials-grid">
                {sortedInternships.filter(internship => internship.status === 'upcoming').map(internship => (
                  <div
                    key={internship.id}
                    className="material-card"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderLeftColor: internship.color
                    }}
                  >
                    <div className="card-header">
                      <div className="icon-container" style={{
                        backgroundColor: getCategoryBgColor(internship.category)
                      }}>
                        <FontAwesomeIcon icon={internship.icon} style={{
                          color: internship.color
                        }} />
                      </div>
                      <span className="category-tag" style={{
                        backgroundColor: getCategoryBgColor(internship.category),
                        color: internship.color
                      }}>
                        {internship.category}
                      </span>
                    </div>
                    
                    <h3 className="card-title">{internship.title}</h3>
                    <p className="card-description">{internship.description}</p>
                    
                    <div className="card-meta">
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faUsers} />
                        {internship.studentsEnrolled} Students
                      </span>
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {internship.nextClass}
                      </span>
                    </div>
                    
                    <div className="status-badge upcoming">
                      <FontAwesomeIcon icon={faHourglassHalf} />
                      Upcoming
                    </div>
                    
                    <div className={`card-actions ${hoveredCard === internship.id ? 'visible' : ''}`}>
                      <button
                        className="action-btn"
                        onClick={() => handleManageInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faChartLine} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleEditInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleDeleteInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Completed Internships Section */}
            <div className="section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faCheckCircle} className="section-icon" />
                Completed Internships
              </h2>
              <div className="materials-grid">
                {sortedInternships.filter(internship => internship.status === 'completed').map(internship => (
                  <div
                    key={internship.id}
                    className="material-card"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      borderLeftColor: internship.color
                    }}
                  >
                    <div className="card-header">
                      <div className="icon-container" style={{
                        backgroundColor: getCategoryBgColor(internship.category)
                      }}>
                        <FontAwesomeIcon icon={internship.icon} style={{
                          color: internship.color
                        }} />
                      </div>
                      <span className="category-tag" style={{
                        backgroundColor: getCategoryBgColor(internship.category),
                        color: internship.color
                      }}>
                        {internship.category}
                      </span>
                    </div>
                    
                    <h3 className="card-title">{internship.title}</h3>
                    <p className="card-description">{internship.description}</p>
                    
                    <div className="card-meta">
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faUsers} />
                        {internship.studentsEnrolled} Students
                      </span>
                      <span className="meta-item">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        {internship.nextClass}
                      </span>
                    </div>
                    
                    <div className="status-badge completed">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Completed
                    </div>
                    
                    <div className={`card-actions ${hoveredCard === internship.id ? 'visible' : ''}`}>
                      <button
                        className="action-btn"
                        onClick={() => handleManageInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faChartLine} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleEditInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleDeleteInternship(internship.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Summary Panel */}
          <div className="summary-panel">
            <div className="summary-card">
              <h3 className="summary-title">Statistics</h3>
              
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faLayerGroup} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-label">Total Internships</p>
                    <p className="stat-value">{stats.total}</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-label">Ongoing</p>
                    <p className="stat-value">{stats.ongoing}</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-label">Upcoming</p>
                    <p className="stat-value">{stats.upcoming}</p>
                  </div>
                </div>
                
                <div className="stat-item">
                  <div className="stat-icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>
                  <div className="stat-content">
                    <p className="stat-label">Completed</p>
                    <p className="stat-value">{stats.completed}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="summary-card">
              <h3 className="summary-title">Recent Activity</h3>
              <div className="activity-list">
                <div className="activity-item">
                  <div className="activity-icon">
                    <FontAwesomeIcon icon={faRobot} />
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">Robotics Internship</p>
                    <p className="activity-time">2 hours ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <FontAwesomeIcon icon={faBrain} />
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">AI Course Started</p>
                    <p className="activity-time">5 hours ago</p>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">
                    <FontAwesomeIcon icon={faUsers} />
                  </div>
                  <div className="activity-content">
                    <p className="activity-title">New Students Enrolled</p>
                    <p className="activity-time">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Create Internship Modal */}
      {showCreateModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3 className="modal-title">Create New Internship</h3>
              <button
                className="close-btn"
                onClick={() => setShowCreateModal(false)}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="form-group">
                <label className="form-label">Internship Title</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Smart Robotics & Industry 4.0 Automation"
                  value={newInternship.title}
                  onChange={(e) => setNewInternship({...newInternship, title: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-input"
                  value={newInternship.category}
                  onChange={(e) => setNewInternship({...newInternship, category: e.target.value})}
                >
                  <option value="">Select a category</option>
                  <option value="Robotics">Robotics</option>
                  <option value="AI">AI</option>
                  <option value="IoT">IoT</option>
                  <option value="Cloud">Cloud</option>
                  <option value="Fabrication">Fabrication</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-input"
                  placeholder="Brief description of internship program"
                  rows="4"
                  value={newInternship.description}
                  onChange={(e) => setNewInternship({...newInternship, description: e.target.value})}
                ></textarea>
              </div>
              
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-input"
                  value={newInternship.startDate}
                  onChange={(e) => setNewInternship({...newInternship, startDate: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. 3 months, 6 weeks"
                  value={newInternship.duration}
                  onChange={(e) => setNewInternship({...newInternship, duration: e.target.value})}
                />
              </div>
            </div>
            
            <div className="modal-footer">
              <button
                className="cancel-btn"
                onClick={() => setShowCreateModal(false)}
              >
                Cancel
              </button>
              <button
                className="save-btn"
                onClick={handleSaveInternship}
              >
                <FontAwesomeIcon icon={faSave} />
                Create Internship
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', 'Poppins', sans-serif;
        }
        
        .app-container {
          display: flex;
          min-height: 100vh;
          background-color: #F5F7FA;
        }
        
        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background-color: #1640FF;
          color: white;
          display: flex;
          flex-direction: column;
          transition: width 0.3s ease;
          box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
          z-index: 100;
        }
        
        .sidebar.collapsed {
          width: 70px;
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .logo-icon {
          font-size: 24px;
          color: white;
        }
        
        .logo-text {
          font-size: 20px;
          font-weight: 700;
          color: white;
        }
        
        .toggle-btn {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.3s;
        }
        
        .toggle-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        
        .sidebar-nav {
          flex: 1;
          padding: 20px 0;
        }
        
        .nav-list {
          list-style: none;
        }
        
        .nav-item {
          margin-bottom: 5px;
        }
        
        .nav-item button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          border-left: 3px solid transparent;
        }
        
        .nav-item button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        .nav-item.active button {
          background-color: rgba(255, 255, 255, 0.15);
          color: white;
          border-left: 3px solid white;
        }
        
        .sidebar-footer {
          padding: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .logout-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 8px;
        }
        
        .logout-btn:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
        }
        
        /* Main Content Styles */
        .main-content {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
        }
        
        /* Header Styles */
        .header {
          margin-bottom: 32px;
        }
        
        .header-content {
          margin-bottom: 24px;
        }
        
        .header-title {
          font-size: 30px;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 8px;
        }
        
        .header-subtitle {
          color: #6B7280;
          font-size: 16px;
        }
        
        .search-bar {
          position: relative;
          max-width: 448px;
          margin-bottom: 24px;
        }
        
        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          font-size: 14px;
          background-color: white;
          transition: all 0.2s;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #1640FF;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }
        
        /* Filters Row - All elements in same row */
        .filters-row {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .filter-dropdown {
          position: relative;
        }
        
        .filter-select {
          appearance: none;
          background-color: white;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          padding: 12px 16px 12px 40px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          min-width: 160px;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #1640FF;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }
        
        .filter-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF;
          pointer-events: none;
        }
        
        .start-class-btn {
          background-color:  #1640ff;;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 12px 20px;
          font-size: 14px;
          margin-top:12px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        
        .start-class-btn:hover {
          background-color: #D66A00;
        }
        
        .upload-btn {
          background-color: #1640FF;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
          margin-left: auto;
        }
        
        .upload-btn:hover {
          background-color: #1E40AF;
        }
        
        /* Content Container */
        .content-container {
          display: flex;
          gap: 32px;
        }
        
        .main-section {
          flex: 1;
        }
        
        .section {
          margin-bottom: 32px;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .section-icon {
          color: #1640FF;
        }
        
        /* Materials Grid */
        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .material-card {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          transition: all 0.2s;
          transform: scale(1);
          border-left: 4px solid;
          position: relative;
        }
        
        .material-card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transform: scale(1.02);
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .icon-container {
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .category-tag {
          font-size: 12px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 20px;
        }
        
        .card-title {
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 4px;
          font-size: 16px;
        }
        
        .card-description {
          color: #6B7280;
          font-size: 14px;
          margin-bottom: 12px;
          line-height: 1.5;
        }
        
        .card-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #6B7280;
          margin-bottom: 12px;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .progress-section {
          margin-bottom: 12px;
        }
        
        .progress-header {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          margin-bottom: 4px;
        }
        
        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #E5E7EB;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }
        
        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 20px;
          margin-bottom: 12px;
        }
        
        .status-badge.upcoming {
          background-color: #FFF4ED;
          color: #EF7C00;
        }
        
        .status-badge.completed {
          background-color: #ECFDF5;
          color: #10B981;
        }
        
        .card-actions {
          display: flex;
          justify-content: space-between;
          opacity: 0;
          transition: opacity 0.2s;
        }
        
        .card-actions.visible {
          opacity: 1;
        }
        
        .action-btn {
          padding: 8px;
          border-radius: 8px;
          border: none;
          background-color: transparent;
          cursor: pointer;
          color: #6B7280;
          transition: all 0.2s;
        }
        
        .action-btn:hover {
          background-color: #F3F4F6;
        }
        
        /* Summary Panel */
        .summary-panel {
          width: 320px;
        }
        
        .summary-card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }
        
        .summary-title {
          font-size: 18px;
          font-weight: 600;
          color: #1F2937;
          margin-bottom: 16px;
        }
        
        .stats-grid {
          display: grid;
          gap: 16px;
        }
        
        .stat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 12px;
          background-color: #F9FAFB;
        }
        
        .stat-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #EBF4FF;
          color: #1640FF;
        }
        
        .stat-content {
          flex: 1;
        }
        
        .stat-label {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 4px;
        }
        
        .stat-value {
          font-size: 20px;
          font-weight: 600;
          color: #1F2937;
        }
        
        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px;
          border-radius: 8px;
          transition: background-color 0.2s;
        }
        
        .activity-item:hover {
          background-color: #F9FAFB;
        }
        
        .activity-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #EBF4FF;
          color: #1640FF;
        }
        
        .activity-content {
          flex: 1;
        }
        
        .activity-title {
          font-size: 14px;
          font-weight: 500;
          color: #1F2937;
          margin-bottom: 2px;
        }
        
        .activity-time {
          font-size: 12px;
          color: #6B7280;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        
        .modal-container {
          background-color: white;
          border-radius: 16px;
          width: 90%;
          max-width: 500px;
          max-height: 90vh;
          overflow-y: auto;
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #E5E7EB;
        }
        
        .modal-title {
          font-size: 20px;
          font-weight: 600;
          color: #1F2937;
        }
        
        .close-btn {
          background: none;
          border: none;
          font-size: 20px;
          color: #6B7280;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          transition: background-color 0.2s;
        }
        
        .close-btn:hover {
          background-color: #F3F4F6;
        }
        
        .modal-content {
          padding: 24px;
        }
        
        .form-group {
          margin-bottom: 16px;
        }
        
        .form-label {
          display: block;
          margin-bottom: 8px;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
        }
        
        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #D1D5DB;
          border-radius: 12px;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #1640FF;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }
        
        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 24px;
          border-top: 1px solid #E5E7EB;
        }
        
        .cancel-btn {
          padding: 10px 16px;
          border-radius: 10px;
          background-color: #F3F4F6;
          color: #374151;
          border: none;
          cursor: pointer;
          font-weight: 500;
        }
        
        .save-btn {
          padding: 10px 16px;
          border-radius: 10px;
          background-color: #1640FF;
          color: white;
          border: none;
          cursor: pointer;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .materials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: -260px;
            height: 100vh;
            z-index: 1000;
          }
          
          .sidebar.active {
            left: 0;
          }
          
          .main-content {
            margin-left: 0;
          }
          
          .filters-row {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-select {
            min-width: 100%;
          }
          
          .upload-btn {
            margin-left: 0;
            margin-top: 12px;
          }
          
          .materials-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-container {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to get category background color
function getCategoryBgColor(category) {
  switch (category) {
    case 'Robotics': return '#EBF4FF';
    case 'AI': return '#FFF4ED';
    case 'IoT': return '#F3E8FF';
    case 'Cloud': return '#ECFEFF';
    case 'Fabrication': return '#ECFDF5';
    default: return '#F9FAFB';
  }
}

export default MyInternships;