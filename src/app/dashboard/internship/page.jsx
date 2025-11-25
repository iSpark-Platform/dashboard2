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
  faSignOutAlt,
  faEllipsisV,
  faStar,
  faFire,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

const MyInternships = () => {
  // State for internships data
  const [internships, setInternships] = useState([
    {
      id: 1,
      title: "Smart Robotics & Industry 4.0",
      category: "Robotics",
      categoryIcon: faRobot,
      studentsEnrolled: 42,
      status: "ongoing",
      statusIcon: faPlayCircle,
      color: "#1640FF",
      gradient: "linear-gradient(135deg, #ffffffff 0%rgba(255, 255, 255, 1)a2 100%)",
      icon: faRobot,
      description: "Advanced robotics program focusing on Industry 4.0 automation and smart manufacturing",
      nextClass: "Today, 2:00 PM",
      progress: 65,
      rating: 4.8,
      duration: "12 weeks"
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
      gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      icon: faBrain,
      description: "Comprehensive AI and machine learning program with real-world applications",
      nextClass: "Tomorrow, 10:00 AM",
      progress: 45,
      rating: 4.9,
      duration: "16 weeks"
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
      gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      icon: faNetworkWired,
      description: "Internet of Things and Industrial IoT for smart systems development",
      nextClass: "Starts June 15",
      progress: 0,
      rating: 4.7,
      duration: "10 weeks"
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
      gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      icon: faCloud,
      description: "Master cloud computing and edge technologies for modern infrastructure",
      nextClass: "Starts June 20",
      progress: 0,
      rating: 4.6,
      duration: "14 weeks"
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
      gradient: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
      icon: faCube,
      description: "Advanced 3D printing and digital fabrication techniques",
      nextClass: "Completed",
      progress: 100,
      rating: 4.9,
      duration: "8 weeks"
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
        progress: 0,
        rating: 0,
        duration: newInternship.duration
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
  const handleStartClass = (internshipId) => {
    const internship = internships.find(i => i.id === internshipId);
    alert(`Starting class for: ${internship.title}`);
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
      case "Robotics": return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "AI": return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
      case "IoT": return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
      case "Cloud": return "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)";
      case "Fabrication": return "linear-gradient(135deg, #fa709a 0%, #fee140 100%)";
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
  
  return (
    <div className="app-container">
      {/* Main Content */}
      <div className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            
              <h1 style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            color: "#111827"
          }}>
            Internships
          </h1>
            <p className="hero-subtitle">Manage and organize your internship programs with ease</p>
          </div>
          
          <div className="hero-stats">
            <div className="hero-stat-card">
              <div className="hero-stat-icon total">
                <FontAwesomeIcon icon={faLayerGroup} />
              </div>
              <div className="hero-stat-content">
                <p className="hero-stat-value">{stats.total}</p>
                <p className="hero-stat-label">Total Programs</p>
              </div>
            </div>
            
            <div className="hero-stat-card">
              <div className="hero-stat-icon ongoing">
                <FontAwesomeIcon icon={faPlayCircle} />
              </div>
              <div className="hero-stat-content">
                <p className="hero-stat-value">{stats.ongoing}</p>
                <p className="hero-stat-label">Ongoing</p>
              </div>
            </div>
            
            <div className="hero-stat-card">
              <div className="hero-stat-icon upcoming">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="hero-stat-content">
                <p className="hero-stat-value">{stats.upcoming}</p>
                <p className="hero-stat-label">Upcoming</p>
              </div>
            </div>
            
            <div className="hero-stat-card">
              <div className="hero-stat-icon completed">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div className="hero-stat-content">
                <p className="hero-stat-value">{stats.completed}</p>
                <p className="hero-stat-label">Completed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filter & Search Section */}
        <div className="filter-section">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search internships by name or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filters-container">
            <div className="filter-group">
              <label className="filter-label">
                <FontAwesomeIcon icon={faFilter} />
                Category
              </label>
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
            </div>
            
            <div className="filter-group">
              <label className="filter-label">
                <FontAwesomeIcon icon={faFilter} />
                Status
              </label>
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
            </div>
            
            <div className="filter-group">
              <label className="filter-label">
                <FontAwesomeIcon icon={faSort} />
                Sort By
              </label>
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
            </div>
            
            <button className="create-btn" onClick={handleCreateInternship}>
              <FontAwesomeIcon icon={faPlus} />
              <span>Create New</span>
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="content-wrapper">
          {/* Ongoing Section */}
          {sortedInternships.filter(i => i.status === 'ongoing').length > 0 && (
            <div className="internships-section">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <FontAwesomeIcon icon={faPlayCircle} className="section-icon ongoing" />
                  <h2 className="section-title">Ongoing Internships</h2>
                  <span className="section-count">
                    {sortedInternships.filter(i => i.status === 'ongoing').length}
                  </span>
                </div>
              </div>
              
              <div className="internships-grid">
                {sortedInternships.filter(i => i.status === 'ongoing').map(internship => (
                  <div
                    key={internship.id}
                    className="internship-card"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="card-gradient" style={{ background: internship.gradient }}></div>
                    
                    <div className="card-content">
                      <div className="card-top">
                        <div className="card-icon-wrapper">
                          <div className="card-icon" style={{ background: getCategoryBgColor(internship.category) }}>
                            <FontAwesomeIcon icon={internship.icon} style={{ color: internship.color }} />
                          </div>
                        </div>
                        
                        <div className="card-badges">
                          <span className="status-badge ongoing">
                            <FontAwesomeIcon icon={faCircle} />
                            Live
                          </span>
                          <span className="category-badge" style={{ 
                            backgroundColor: getCategoryBgColor(internship.category),
                            color: internship.color
                          }}>
                            {internship.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="card-title">{internship.title}</h3>
                      <p className="card-description">{internship.description}</p>
                      
                      <div className="card-meta-grid">
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faUsers} className="meta-icon" />
                          <span>{internship.studentsEnrolled} Students</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faClock} className="meta-icon" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faStar} className="meta-icon" />
                          <span>{internship.rating} Rating</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                          <span>{internship.nextClass}</span>
                        </div>
                      </div>
                      
                      <div className="progress-wrapper">
                        <div className="progress-info">
                          <span className="progress-label">Course Progress</span>
                          <span className="progress-value">{internship.progress}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill"
                            style={{ 
                              width: `${internship.progress}%`,
                              background: internship.gradient
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="card-actions">
                        <button 
                          className="primary-action-btn"
                          onClick={() => handleStartClass(internship.id)}
                        >
                          <FontAwesomeIcon icon={faVideo} />
                          <span>Start Class</span>
                        </button>
                        
                        <div className="secondary-actions">
                          <button 
                            className="icon-btn"
                            onClick={() => handleManageInternship(internship.id)}
                            title="View Analytics"
                          >
                            <FontAwesomeIcon icon={faChartLine} />
                          </button>
                          <button 
                            className="icon-btn"
                            onClick={() => handleEditInternship(internship.id)}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="icon-btn danger"
                            onClick={() => handleDeleteInternship(internship.id)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Upcoming Section */}
          {sortedInternships.filter(i => i.status === 'upcoming').length > 0 && (
            <div className="internships-section">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <FontAwesomeIcon icon={faClock} className="section-icon upcoming" />
                  <h2 className="section-title">Upcoming Internships</h2>
                  <span className="section-count">
                    {sortedInternships.filter(i => i.status === 'upcoming').length}
                  </span>
                </div>
              </div>
              
              <div className="internships-grid">
                {sortedInternships.filter(i => i.status === 'upcoming').map(internship => (
                  <div
                    key={internship.id}
                    className="internship-card"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="card-gradient" style={{ background: internship.gradient }}></div>
                    
                    <div className="card-content">
                      <div className="card-top">
                        <div className="card-icon-wrapper">
                          <div className="card-icon" style={{ background: getCategoryBgColor(internship.category) }}>
                            <FontAwesomeIcon icon={internship.icon} style={{ color: internship.color }} />
                          </div>
                        </div>
                        
                        <div className="card-badges">
                          <span className="status-badge upcoming">
                            <FontAwesomeIcon icon={faHourglassHalf} />
                            Upcoming
                          </span>
                          <span className="category-badge" style={{ 
                            backgroundColor: getCategoryBgColor(internship.category),
                            color: internship.color
                          }}>
                            {internship.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="card-title">{internship.title}</h3>
                      <p className="card-description">{internship.description}</p>
                      
                      <div className="card-meta-grid">
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faUsers} className="meta-icon" />
                          <span>{internship.studentsEnrolled} Enrolled</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faClock} className="meta-icon" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                          <span>{internship.nextClass}</span>
                        </div>
                      </div>
                      
                      <div className="card-actions">
                        <button 
                          className="primary-action-btn outlined"
                          onClick={() => handleManageInternship(internship.id)}
                        >
                          <FontAwesomeIcon icon={faChartLine} />
                          <span>Manage</span>
                        </button>
                        
                        <div className="secondary-actions">
                          <button 
                            className="icon-btn"
                            onClick={() => handleEditInternship(internship.id)}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="icon-btn danger"
                            onClick={() => handleDeleteInternship(internship.id)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Completed Section */}
          {sortedInternships.filter(i => i.status === 'completed').length > 0 && (
            <div className="internships-section">
              <div className="section-header">
                <div className="section-title-wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} className="section-icon completed" />
                  <h2 className="section-title">Completed Internships</h2>
                  <span className="section-count">
                    {sortedInternships.filter(i => i.status === 'completed').length}
                  </span>
                </div>
              </div>
              
              <div className="internships-grid">
                {sortedInternships.filter(i => i.status === 'completed').map(internship => (
                  <div
                    key={internship.id}
                    className="internship-card completed"
                    onMouseEnter={() => setHoveredCard(internship.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="card-gradient completed" style={{ background: internship.gradient }}></div>
                    
                    <div className="card-content">
                      <div className="card-top">
                        <div className="card-icon-wrapper">
                          <div className="card-icon" style={{ background: getCategoryBgColor(internship.category) }}>
                            <FontAwesomeIcon icon={internship.icon} style={{ color: internship.color }} />
                          </div>
                        </div>
                        
                        <div className="card-badges">
                          <span className="status-badge completed">
                            <FontAwesomeIcon icon={faTrophy} />
                            Completed
                          </span>
                          <span className="category-badge" style={{ 
                            backgroundColor: getCategoryBgColor(internship.category),
                            color: internship.color
                          }}>
                            {internship.category}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="card-title">{internship.title}</h3>
                      <p className="card-description">{internship.description}</p>
                      
                      <div className="card-meta-grid">
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faUsers} className="meta-icon" />
                          <span>{internship.studentsEnrolled} Completed</span>
                        </div>
                        <div className="meta-item">
                          <FontAwesomeIcon icon={faStar} className="meta-icon" />
                          <span>{internship.rating} Rating</span>
                        </div>
                      </div>
                      
                      <div className="completion-badge">
                        <FontAwesomeIcon icon={faCheckCircle} />
                        <span>100% Completed</span>
                      </div>
                      
                      <div className="card-actions">
                        <button 
                          className="primary-action-btn outlined"
                          onClick={() => handleManageInternship(internship.id)}
                        >
                          <FontAwesomeIcon icon={faChartLine} />
                          <span>View Results</span>
                        </button>
                        
                        <div className="secondary-actions">
                          <button 
                            className="icon-btn"
                            onClick={() => handleEditInternship(internship.id)}
                            title="Edit"
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button 
                            className="icon-btn danger"
                            onClick={() => handleDeleteInternship(internship.id)}
                            title="Delete"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Create Internship Modal */}
      {showCreateModal && (
        <div className="modal-overlay" onClick={() => setShowCreateModal(false)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h3 className="modal-title">Create New Internship</h3>
                <p className="modal-subtitle">Set up a new internship program</p>
              </div>
              <button className="modal-close-btn" onClick={() => setShowCreateModal(false)}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            
            <div className="modal-content">
              <div className="form-group">
                <label className="form-label">
                  Internship Title
                  <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Smart Robotics & Industry 4.0 Automation"
                  value={newInternship.title}
                  onChange={(e) => setNewInternship({...newInternship, title: e.target.value})}
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    Category
                    <span className="required">*</span>
                  </label>
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
                  <label className="form-label">Duration</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. 12 weeks"
                    value={newInternship.duration}
                    onChange={(e) => setNewInternship({...newInternship, duration: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  placeholder="Brief description of the internship program"
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
            </div>
            
            <div className="modal-footer">
              <button className="modal-cancel-btn" onClick={() => setShowCreateModal(false)}>
                Cancel
              </button>
              <button className="modal-save-btn" onClick={handleSaveInternship}>
                <FontAwesomeIcon icon={faSave} />
                <span>Create Internship</span>
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
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .app-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 24px;
        }
        
        /* Hero Section */
        .hero-section {
          margin-bottom: 48px;
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .hero-content {
          margin-bottom: 32px;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .hero-title {
          font-size: 30px;
          font-weight: 800;
          color: #1F2937;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #474747ff 0%, #464646ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 20px;
          color: #6B7280;
          font-weight: 400;
        }
        
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        
        .hero-stat-card {
          background: white;
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        
        .hero-stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .hero-stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
        }
        
        .hero-stat-icon.total {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        
        .hero-stat-icon.ongoing {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        
        .hero-stat-icon.upcoming {
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        }
        
        .hero-stat-icon.completed {
          background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        .hero-stat-content {
          flex: 1;
        }
        
        .hero-stat-value {
          font-size: 32px;
          font-weight: 700;
          color: #1F2937;
          line-height: 1;
          margin-bottom: 4px;
        }
        
        .hero-stat-label {
          font-size: 14px;
          color: #6B7280;
          font-weight: 500;
        }
        
        /* Filter Section */
        .filter-section {
          background: white;
          border-radius: 24px;
          padding: 32px;
          margin-bottom: 40px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }
        
        .search-container {
          position: relative;
          margin-bottom: 24px;
        }
        
        .search-icon {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF;
          font-size: 18px;
        }
        
        .search-input {
          width: 100%;
          padding: 18px 24px 18px 56px;
          border: 2px solid #E5E7EB;
          border-radius: 16px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #F9FAFB;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }
        
        .filters-container {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          align-items: flex-end;
        }
        
        .filter-group {
          flex: 1;
          min-width: 180px;
        }
        
        .filter-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        
        .filter-select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          background: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }
        
        .create-btn {
          padding: 14px 28px;
          background: linear-gradient(135deg,  #1640ff 0%,  #1640ff 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .create-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        .create-btn:active {
          transform: translateY(0);
        }
        
        /* Content */
        .content-wrapper {
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }
        
        .internships-section {
          margin-bottom: 48px;
        }
        
        .section-header {
          margin-bottom: 24px;
        }
        
        .section-title-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .section-icon {
          font-size: 28px;
          padding: 12px;
          border-radius: 12px;
        }
        
        .section-icon.ongoing {
          color: #f5576c;
          background: rgba(245, 87, 108, 0.1);
        }
        
        .section-icon.upcoming {
          color: #00f2fe;
          background: rgba(0, 242, 254, 0.1);
        }
        
        .section-icon.completed {
          color: #38f9d7;
          background: rgba(56, 249, 215, 0.1);
        }
        
        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: #1F2937;
        }
        
        .section-count {
          padding: 4px 12px;
          background: #F3F4F6;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #6B7280;
        }
        
        /* Internships Grid */
        .internships-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 28px;
        }
        
        .internship-card {
          background: white;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          border: 2px solid transparent;
        }
        
        .internship-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(102, 126, 234, 0.3);
        }
        
        .internship-card.completed {
          opacity: 0.95;
        }
        
        .card-gradient {
          height: 120px;
          position: relative;
          overflow: hidden;
        }
        
        .card-gradient.completed {
          opacity: 0.7;
        }
        
        .card-content {
          padding: 28px;
        }
        
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
          margin-top: -80px;
          position: relative;
          z-index: 1;
        }
        
        .card-icon-wrapper {
          padding: 4px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .card-icon {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }
        
        .card-badges {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }
        
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .status-badge.ongoing {
          background: rgba(245, 87, 108, 0.15);
          color: #f5576c;
          border: 1px solid rgba(245, 87, 108, 0.3);
        }
        
        .status-badge.upcoming {
          background: rgba(0, 242, 254, 0.15);
          color: #00a8b5;
          border: 1px solid rgba(0, 242, 254, 0.3);
        }
        
        .status-badge.completed {
          background: rgba(56, 249, 215, 0.15);
          color: #00b894;
          border: 1px solid rgba(56, 249, 215, 0.3);
        }
        
        .category-badge {
          padding: 4px 12px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 600;
        }
        
        .card-title {
          font-size: 22px;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 12px;
          line-height: 1.3;
        }
        
        .card-description {
          font-size: 15px;
          color: #6B7280;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .card-meta-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
          padding: 16px;
          background: #F9FAFB;
          border-radius: 12px;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #374151;
          font-weight: 500;
        }
        
        .meta-icon {
          color: #9CA3AF;
          font-size: 16px;
        }
        
        .progress-wrapper {
          margin-bottom: 20px;
        }
        
        .progress-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        
        .progress-label {
          font-size: 13px;
          color: #6B7280;
          font-weight: 600;
        }
        
        .progress-value {
          font-size: 14px;
          color: #1F2937;
          font-weight: 700;
        }
        
        .progress-bar {
          height: 10px;
          background: #E5E7EB;
          border-radius: 50px;
          overflow: hidden;
          position: relative;
        }
        
        .progress-fill {
          height: 100%;
          border-radius: 50px;
          transition: width 0.6s ease;
          position: relative;
          overflow: hidden;
        }
        
        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .completion-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: linear-gradient(135deg,  #1640ff 0%,  #1640ff 100%);
          color: white;
          border-radius: 12px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .card-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .primary-action-btn {
          flex: 1;
          padding: 14px 20px;
          background: linear-gradient(135deg,  #1640ff 0%,  #1640ff 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .primary-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        .primary-action-btn.outlined {
          background: white;
          color:  #1640ff;
          border: 2px solid  #1640ff;
          box-shadow: none;
        }
        
        .primary-action-btn.outlined:hover {
          background:  #1640ff;
          color: white;
        }
        
        .secondary-actions {
          display: flex;
          gap: 8px;
        }
        
        .icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 2px solid #E5E7EB;
          background: white;
          color: #6B7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .icon-btn:hover {
          border-color:  #1640ff;
          color:  #1640ff;
          background: #F3F4F6;
        }
        
        .icon-btn.danger:hover {
          border-color: #EF4444;
          color: #EF4444;
          background: #FEE2E2;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-container {
          background: white;
          border-radius: 24px;
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .modal-header {
          padding: 32px;
          border-bottom: 1px solid #E5E7EB;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        
        .modal-title {
          font-size: 26px;
          font-weight: 700;
          color: #1F2937;
          margin-bottom: 4px;
        }
        
        .modal-subtitle {
          font-size: 15px;
          color: #6B7280;
        }
        
        .modal-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: #F3F4F6;
          color: #6B7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: all 0.2s ease;
        }
        
        .modal-close-btn:hover {
          background: #E5E7EB;
          color: #1F2937;
        }
        
        .modal-content {
          padding: 32px;
        }
        
        .form-group {
          margin-bottom: 24px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-label {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 10px;
        }
        
        .required {
          color: #EF4444;
          margin-left: 4px;
        }
        
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 2px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        
        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .modal-footer {
          padding: 24px 32px;
          border-top: 1px solid #E5E7EB;
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }
        
        .modal-cancel-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: 2px solid #E5E7EB;
          background: white;
          color: #6B7280;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .modal-cancel-btn:hover {
          border-color: #D1D5DB;
          background: #F9FAFB;
        }
        
        .modal-save-btn {
          padding: 12px 24px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg,  #1640ff 0%,  #1640ff 100%);
          color: white;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }
        
        .modal-save-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .internships-grid {
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .main-content {
            padding: 24px 16px;
          }
          
          .hero-title {
            font-size: 36px;
          }
          
          .hero-subtitle {
            font-size: 16px;
          }
          
          .hero-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .filter-section {
            padding: 20px;
          }
          
          .filters-container {
            flex-direction: column;
          }
          
          .filter-group {
            width: 100%;
          }
          
          .create-btn {
            width: 100%;
            justify-content: center;
          }
          
          .internships-grid {
            grid-template-columns: 1fr;
          }
          
          .card-meta-grid {
            grid-template-columns: 1fr;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .modal-container {
            width: 95%;
          }
          
          .modal-header,
          .modal-content,
          .modal-footer {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

// Helper function to get category background color
function getCategoryBgColor(category) {
  switch (category) {
    case 'Robotics': return 'rgba(102, 126, 234, 0.1)';
    case 'AI': return 'rgba(240, 147, 251, 0.1)';
    case 'IoT': return 'rgba(79, 172, 254, 0.1)';
    case 'Cloud': return 'rgba(67, 233, 123, 0.1)';
    case 'Fabrication': return 'rgba(250, 112, 154, 0.1)';
    default: return '#F9FAFB';
  }
}

export default MyInternships;