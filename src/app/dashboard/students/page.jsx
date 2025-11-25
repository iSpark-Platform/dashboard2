"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, 
  faSearch,
  faFilter,
  faSort,
  faCheckCircle,
  faClock,
  faEnvelope,
  faUser,
  faDownload,
  faPlus,
  faEye,
  faTimes,
  faChevronDown,
  faChevronUp,
  faCheck,
  faUserPlus,
  faGraduationCap,
  faChartLine,
  faEllipsisV,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const StudentsSection = () => {
  // State for students data
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      avatar: "https://picsum.photos/seed/emily/200/200.jpg",
      internship: "Professional Diploma in Humanoid Robotics",
      progress: 75,
      lastActive: "2 hours ago",
      status: "active"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "https://picsum.photos/seed/michael/200/200.jpg",
      internship: "Diploma in Artificial Intelligence Applications",
      progress: 60,
      lastActive: "1 day ago",
      status: "active"
    },
    {
      id: 3,
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      avatar: "https://picsum.photos/seed/sarah/200/200.jpg",
      internship: "Industry-Ready Diploma in Cloud & Edge Technologies",
      progress: 90,
      lastActive: "3 hours ago",
      status: "active"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com",
      avatar: "https://picsum.photos/seed/david/200/200.jpg",
      internship: "Career-Ready Diploma in Cybersecurity & Digital Forensics",
      progress: 100,
      lastActive: "5 days ago",
      status: "completed"
    },
    {
      id: 5,
      name: "Jessica Martinez",
      email: "jessica.martinez@example.com",
      avatar: "https://picsum.photos/seed/jessica/200/200.jpg",
      internship: "Year-long STEM Readiness for UG Students",
      progress: 45,
      lastActive: "2 weeks ago",
      status: "inactive"
    },
    {
      id: 6,
      name: "Alex Thompson",
      email: "alex.thompson@example.com",
      avatar: "https://picsum.photos/seed/alex/200/200.jpg",
      internship: "Professional Diploma in Humanoid Robotics",
      progress: 30,
      lastActive: "1 week ago",
      status: "inactive"
    },
    {
      id: 7,
      name: "Priya Patel",
      email: "priya.patel@example.com",
      avatar: "https://picsum.photos/seed/priya/200/200.jpg",
      internship: "Diploma in Artificial Intelligence Applications",
      progress: 85,
      lastActive: "4 hours ago",
      status: "active"
    },
    {
      id: 8,
      name: "James Wilson",
      email: "james.wilson@example.com",
      avatar: "https://picsum.photos/seed/james/200/200.jpg",
      internship: "Industry-Ready Diploma in Cloud & Edge Technologies",
      progress: 100,
      lastActive: "3 days ago",
      status: "completed"
    }
  ]);
  
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("table"); // table or grid
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);
  
  // State for stats
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    recent: 0
  });
  
  // Calculate stats whenever students data changes
  useEffect(() => {
    const total = students.length;
    const active = students.filter(s => s.status === 'active').length;
    const completed = students.filter(s => s.status === 'completed').length;
    const recent = students.filter(s => {
      // Count as recent if last active within last 7 days
      const lastActiveDate = new Date();
      lastActiveDate.setDate(lastActiveDate.getDate() - 7);
      // This is a simplified check - in a real app, you'd parse the actual date
      return s.lastActive.includes("hour") || s.lastActive.includes("day") && parseInt(s.lastActive) < 7;
    }).length;
    
    setStats({ total, active, completed, recent });
  }, [students]);
  
  // Filter students based on search and filter
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.internship.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterBy === "all" || student.status === filterBy;
    
    return matchesSearch && matchesFilter;
  });
  
  // Sort students
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "recent":
        // This is a simplified sort - in a real app, you'd parse the actual date
        return a.lastActive.localeCompare(b.lastActive);
      case "progress":
        return b.progress - a.progress;
      default:
        return 0;
    }
  });
  
  // Handle student selection
  const handleSelectStudent = (studentId) => {
    if (selectedStudents.includes(studentId)) {
      setSelectedStudents(selectedStudents.filter(id => id !== studentId));
    } else {
      setSelectedStudents([...selectedStudents, studentId]);
    }
  };
  
  // Handle select all
  const handleSelectAll = () => {
    if (selectedStudents.length === sortedStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(sortedStudents.map(student => student.id));
    }
  };
  
  // Handle bulk actions
  const handleBulkAction = (action) => {
    console.log(`Bulk action: ${action} for students: ${selectedStudents.join(', ')}`);
    // Implementation would depend on the action
    if (action === 'message') {
      alert(`Message dialog would open for ${selectedStudents.length} students`);
    } else if (action === 'export') {
      alert(`Exporting data for ${selectedStudents.length} students`);
    } else if (action === 'complete') {
      alert(`Marking ${selectedStudents.length} students as completed`);
    }
  };
  
  // Handle individual actions
  const handleStudentAction = (action, studentId) => {
    const student = students.find(s => s.id === studentId);
    console.log(`Action: ${action} for student: ${student.name}`);
    // Implementation would depend on the action
    if (action === 'view') {
      alert(`Viewing profile for ${student.name}`);
    } else if (action === 'message') {
      alert(`Message dialog would open for ${student.name}`);
    }
  };
  
  // Handle invite students
  const handleInviteStudents = () => {
    alert('Invite students dialog would open here');
  };
  
  return (
    <div className="students-section">
      {/* Section Header */}
      <div className="section-header">
        <div className="header-left">
          <h1>Students</h1>
          <p>Manage all enrolled students across your internships</p>
        </div>
        <div className="header-right">
          <div className="search-container">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search students..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter-container">
            <button 
              className="filter-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FontAwesomeIcon icon={faFilter} />
              <span>Filter</span>
              <FontAwesomeIcon icon={showFilters ? faChevronUp : faChevronDown} />
            </button>
            {showFilters && (
              <div className="filter-dropdown">
                <div 
                  className={`filter-option ${filterBy === "all" ? "active" : ""}`}
                  onClick={() => setFilterBy("all")}
                >
                  All Students
                </div>
                <div 
                  className={`filter-option ${filterBy === "active" ? "active" : ""}`}
                  onClick={() => setFilterBy("active")}
                >
                  Active
                </div>
                <div 
                  className={`filter-option ${filterBy === "completed" ? "active" : ""}`}
                  onClick={() => setFilterBy("completed")}
                >
                  Completed
                </div>
                <div 
                  className={`filter-option ${filterBy === "inactive" ? "active" : ""}`}
                  onClick={() => setFilterBy("inactive")}
                >
                  Inactive
                </div>
              </div>
            )}
          </div>
          <div className="sort-container">
            <button 
              className="sort-btn"
              onClick={() => setShowSortOptions(!showSortOptions)}
            >
              <FontAwesomeIcon icon={faSort} />
              <span>Sort</span>
              <FontAwesomeIcon icon={showSortOptions ? faChevronUp : faChevronDown} />
            </button>
            {showSortOptions && (
              <div className="sort-dropdown">
                <div 
                  className={`sort-option ${sortBy === "name" ? "active" : ""}`}
                  onClick={() => setSortBy("name")}
                >
                  Name (A-Z)
                </div>
                <div 
                  className={`sort-option ${sortBy === "recent" ? "active" : ""}`}
                  onClick={() => setSortBy("recent")}
                >
                  Recently Active
                </div>
                <div 
                  className={`sort-option ${sortBy === "progress" ? "active" : ""}`}
                  onClick={() => setSortBy("progress")}
                >
                  Most Progress
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Student Overview Stats */}
      <div className="stats-container">
        <div className="stat-card stat-blue">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.total}</div>
            <div className="stat-label">Total Students</div>
          </div>
          <div className="stat-indicator">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
        </div>
        <div className="stat-card stat-green">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.active}</div>
            <div className="stat-label">Active Students</div>
          </div>
          <div className="stat-indicator">
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
        <div className="stat-card stat-yellow">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faGraduationCap} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.completed}</div>
            <div className="stat-label">Completed</div>
          </div>
          <div className="stat-indicator">
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className="stat-card stat-purple">
          <div className="stat-icon">
            <FontAwesomeIcon icon={faUserPlus} />
          </div>
          <div className="stat-content">
            <div className="stat-number">{stats.recent}</div>
            <div className="stat-label">Recently Joined</div>
          </div>
          <div className="stat-indicator">
            <FontAwesomeIcon icon={faClock} />
          </div>
        </div>
      </div>
      
      {/* Bulk Actions */}
      {selectedStudents.length > 0 && (
        <div className="bulk-actions">
          <div className="bulk-actions-left">
            <span>{selectedStudents.length} selected</span>
          </div>
          <div className="bulk-actions-right">
            <button 
              className="bulk-action-btn"
              onClick={() => handleBulkAction('message')}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              Send Message
            </button>
            <button 
              className="bulk-action-btn"
              onClick={() => handleBulkAction('export')}
            >
              <FontAwesomeIcon icon={faDownload} />
              Export List
            </button>
            <button 
              className="bulk-action-btn"
              onClick={() => handleBulkAction('complete')}
            >
              <FontAwesomeIcon icon={faCheck} />
              Mark as Completed
            </button>
          </div>
        </div>
      )}
      
      {/* View Toggle */}
      <div className="view-toggle">
        <button 
          className={`view-option ${viewMode === "table" ? "active" : ""}`}
          onClick={() => setViewMode("table")}
        >
          <FontAwesomeIcon icon={faBars} />
          Table View
        </button>
        <button 
          className={`view-option ${viewMode === "grid" ? "active" : ""}`}
          onClick={() => setViewMode("grid")}
        >
          <FontAwesomeIcon icon={faEllipsisV} />
          Grid View
        </button>
      </div>
      
      {/* Students Display */}
      {sortedStudents.length > 0 ? (
        <>
          {viewMode === "table" ? (
            <div className="students-table-container">
              <table className="students-table">
                <thead>
                  <tr>
                    <th className="checkbox-cell">
                      <input 
                        type="checkbox" 
                        checked={selectedStudents.length === sortedStudents.length && sortedStudents.length > 0}
                        onChange={handleSelectAll}
                      />
                    </th>
                    <th>Student</th>
                    <th>Internship Enrolled</th>
                    <th>Progress</th>
                    <th>Last Active</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map(student => (
                    <tr key={student.id} className="student-row">
                      <td className="checkbox-cell">
                        <input 
                          type="checkbox" 
                          checked={selectedStudents.includes(student.id)}
                          onChange={() => handleSelectStudent(student.id)}
                        />
                      </td>
                      <td className="student-cell">
                        <div className="student-info">
                          <img src={student.avatar} alt={student.name} className="student-avatar" />
                          <div>
                            <div className="student-name">{student.name}</div>
                            <div className="student-email">{student.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="internship-cell">
                        <div className="internship-badge">
                          {student.internship.length > 30 
                            ? `${student.internship.substring(0, 30)}...` 
                            : student.internship}
                        </div>
                      </td>
                      <td className="progress-cell">
                        <div className="progress-container">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${student.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-text">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="last-active-cell">{student.lastActive}</td>
                      <td className="status-cell">
                        <span className={`status-badge status-${student.status}`}>
                          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                        </span>
                      </td>
                      <td className="actions-cell">
                        <button 
                          className="action-btn"
                          onClick={() => handleStudentAction('view', student.id)}
                        >
                          <FontAwesomeIcon icon={faEye} />
                        </button>
                        <button 
                          className="action-btn"
                          onClick={() => handleStudentAction('message', student.id)}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="students-grid">
              {sortedStudents.map(student => (
                <div key={student.id} className="student-card">
                  <div className="card-header">
                    <input 
                      type="checkbox" 
                      className="card-checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => handleSelectStudent(student.id)}
                    />
                    <img src={student.avatar} alt={student.name} className="card-avatar" />
                    <span className={`status-badge status-${student.status}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </div>
                  <div className="card-content">
                    <h3 className="card-name">{student.name}</h3>
                    <p className="card-email">{student.email}</p>
                    <div className="card-internship">
                      {student.internship.length > 40 
                        ? `${student.internship.substring(0, 40)}...` 
                        : student.internship}
                    </div>
                    <div className="card-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{student.progress}%</span>
                    </div>
                    <div className="card-meta">
                      <span className="last-active">{student.lastActive}</span>
                    </div>
                    <div className="card-actions">
                      <button 
                        className="card-action-btn"
                        onClick={() => handleStudentAction('view', student.id)}
                      >
                        <FontAwesomeIcon icon={faEye} />
                        View Profile
                      </button>
                      <button 
                        className="card-action-btn"
                        onClick={() => handleStudentAction('message', student.id)}
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                        Message
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-state-content">
            <div className="empty-state-icon">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h3>No Students Yet</h3>
            <p>Start by inviting students to your internships</p>
            <button 
              className="invite-btn"
              onClick={handleInviteStudents}
            >
              <FontAwesomeIcon icon={faPlus} />
              Invite Students
            </button>
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
        
        .students-section {
          padding: 24px;
          background-color: #f8f9fe;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          margin-bottom: 24px;
        }
        
        /* Section Header */
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        
        .header-left h1 {
          font-size: 32px;
          font-weight: 700;
          color: #1a1d29;
          margin-bottom: 4px;
          position: relative;
        }
        
    
        
        .header-left p {
          font-size: 16px;
          color: #6b7280;
          margin-top: 16px;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .search-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-icon {
          position: absolute;
          left: 14px;
          color: #6b7280;
        }
        
        .search-container input {
          padding: 12px 16px 12px 40px;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          width: 280px;
          font-size: 14px;
          transition: all 0.3s;
          background-color: white;
        }
        
        .search-container input:focus {
          outline: none;
          border-color: #4f46e5;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .filter-container, .sort-container {
          position: relative;
        }
        
        .filter-btn, .sort-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          background-color: white;
          color: #1a1d29;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .filter-btn:hover, .sort-btn:hover {
          background-color: #f3f4f6;
          border-color: #d1d5db;
        }
        
        .filter-dropdown, .sort-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          background-color: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          overflow: hidden;
          z-index: 10;
          min-width: 160px;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .filter-option, .sort-option {
          padding: 12px 16px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .filter-option:hover, .sort-option:hover {
          background-color: #f9fafb;
        }
        
        .filter-option.active, .sort-option.active {
          background-color: #f3f4f6;
          color: #4f46e5;
          font-weight: 500;
        }
        
        /* Stats Container */
        .stats-container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 24px;
        }
        
        .stat-card {
          padding: 24px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
          z-index: 0;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        
        .stat-blue {
          background: linear-gradient(135deg, #4f46e5, #6366f1);
          color: white;
        }
        
        .stat-green {
          background: linear-gradient(135deg, #10b981, #34d399);
          color: white;
        }
        
        .stat-yellow {
          background: linear-gradient(135deg, #f59e0b, #fbbf24);
          color: white;
        }
        
        .stat-purple {
          background: linear-gradient(135deg, #8b5cf6, #a78bfa);
          color: white;
        }
        
        .stat-icon {
          font-size: 24px;
          opacity: 0.9;
        }
        
        .stat-content {
          z-index: 1;
        }
        
        .stat-number {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 14px;
          opacity: 0.9;
        }
        
        .stat-indicator {
          font-size: 18px;
          opacity: 0.7;
          z-index: 1;
        }
        
        /* Bulk Actions */
        .bulk-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background-color: white;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }
        
        .bulk-actions-left span {
          font-size: 14px;
          font-weight: 500;
          color: #1a1d29;
        }
        
        .bulk-actions-right {
          display: flex;
          gap: 12px;
        }
        
        .bulk-action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          background-color: white;
          color: #1a1d29;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .bulk-action-btn:hover {
          background-color: #4f46e5;
          color: white;
          border-color: #4f46e5;
        }
        
        /* View Toggle */
        .view-toggle {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          background-color: white;
          padding: 4px;
          border-radius: 20px;
          width: fit-content;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        
        .view-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 16px;
          background-color: transparent;
          color: #6b7280;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        
        .view-option.active {
          background-color: #4f46e5;
          color: white;
        }
        
        /* Table View */
        .students-table-container {
          background-color: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
        }
        
        .students-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .students-table th {
          padding: 16px 20px;
          text-align: left;
          font-weight: 600;
          color: #1a1d29;
          background-color: #f9fafb;
          font-size: 14px;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .students-table td {
          padding: 16px 20px;
          border-bottom: 1px solid #f3f4f6;
          font-size: 14px;
        }
        
        .students-table tr:last-child td {
          border-bottom: none;
        }
        
        .student-row:hover {
          background-color: #f9fafb;
        }
        
        .checkbox-cell {
          width: 40px;
        }
        
        .checkbox-cell input {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        
        .student-cell {
          width: 250px;
        }
        
        .student-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .student-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #e5e7eb;
        }
        
        .student-name {
          font-weight: 600;
          color: #1a1d29;
        }
        
        .student-email {
          color: #6b7280;
          font-size: 12px;
        }
        
        .internship-cell {
          width: 300px;
        }
        
        .internship-badge {
          display: inline-block;
          padding: 6px 12px;
          background-color: #f3f4f6;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
          color: #1a1d29;
        }
        
        .progress-cell {
          width: 150px;
        }
        
        .progress-container {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .progress-bar {
          flex: 1;
          height: 6px;
          background-color: #e5e7eb;
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #4f46e5, #8b5cf6);
          border-radius: 3px;
        }
        
        .progress-text {
          font-size: 12px;
          font-weight: 500;
          color: #1a1d29;
          min-width: 35px;
        }
        
        .last-active-cell {
          width: 120px;
          color: #6b7280;
        }
        
        .status-cell {
          width: 100px;
        }
        
        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .status-active {
          background-color: #d1fae5;
          color: #065f46;
        }
        
        .status-completed {
          background-color: #dbeafe;
          color: #1e40af;
        }
        
        .status-inactive {
          background-color: #f3f4f6;
          color: #6b7280;
        }
        
        .actions-cell {
          width: 100px;
        }
        
        .action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #f3f4f6;
          color: #6b7280;
          border: none;
          cursor: pointer;
          margin-right: 8px;
          transition: all 0.3s;
        }
        
        .action-btn:hover {
          background-color: #4f46e5;
          color: white;
        }
        
        /* Grid View */
        .students-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        
        .student-card {
          background-color: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          transition: all 0.3s ease;
        }
        
        .student-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
        }
        
        .card-header {
          position: relative;
          height: 120px;
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .card-checkbox {
          position: absolute;
          top: 12px;
          left: 12px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
        
        .card-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
        }
        
        .card-header .status-badge {
          position: absolute;
          top: 12px;
          right: 12px;
        }
        
        .card-content {
          padding: 20px;
        }
        
        .card-name {
          font-size: 18px;
          font-weight: 600;
          color: #1a1d29;
          margin-bottom: 4px;
        }
        
        .card-email {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 12px;
        }
        
        .card-internship {
          font-size: 14px;
          color: #1a1d29;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        
        .card-progress {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        
        .card-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .last-active {
          font-size: 12px;
          color: #6b7280;
        }
        
        .card-actions {
          display: flex;
          gap: 10px;
        }
        
        .card-action-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: 12px;
          background-color: #f3f4f6;
          color: #1a1d29;
          border: none;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .card-action-btn:hover {
          background-color: #4f46e5;
          color: white;
        }
        
        /* Empty State */
        .empty-state {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background-color: white;
          border-radius: 20px;
        }
        
        .empty-state-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 400px;
          text-align: center;
        }
        
        .empty-state-icon {
          font-size: 64px;
          color: #d1d5db;
          margin-bottom: 20px;
        }
        
        .empty-state h3 {
          font-size: 24px;
          font-weight: 600;
          color: #1a1d29;
          margin-bottom: 8px;
        }
        
        .empty-state p {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 24px;
        }
        
        .invite-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 24px;
          background-color: #4f46e5;
          color: white;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .invite-btn:hover {
          background-color: #4338ca;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .students-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          
          .header-right {
            width: 100%;
            flex-wrap: wrap;
          }
          
          .search-container input {
            width: 100%;
          }
          
          .stats-container {
            grid-template-columns: 1fr;
          }
          
          .students-table {
            display: block;
            overflow-x: auto;
          }
          
          .students-grid {
            grid-template-columns: 1fr;
          }
          
          .bulk-actions {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          
          .bulk-actions-right {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentsSection;