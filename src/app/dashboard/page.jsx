"use client";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBriefcase, 
  faUsers, 
  faVideo, 
  faClipboardCheck,
  faPlus,faBars,
  faUpload,
  faTasks,
  faArrowRight,
  faUser,
  faCog,
  faChartLine,
  faBell,
  faSearch,
  faSignOutAlt,
  faGraduationCap,
  faBook,
  faCalendarAlt,
  faChartBar,
  faComments,
  faTachometerAlt,
  faTimes,
  faSave,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

// LiveClassSection Component
const LiveClassSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveStatus, setLiveStatus] = useState("Checking...");

  // Dummy live class schedule
  const liveClass = {
    title: "Smart Robotics & Industry 4.0 Automation Internship – Live Class",
    startTime: "14:00", // 2 PM
    endTime: "15:00",   // 3 PM
    instructor: "Dr. Aravind Kumar",
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const current = now.getHours() + now.getMinutes() / 60;
      const start = parseInt(liveClass.startTime.split(":")[0]) + parseInt(liveClass.startTime.split(":")[1]) / 60;
      const end = parseInt(liveClass.endTime.split(":")[0]) + parseInt(liveClass.endTime.split(":")[1]) / 60;

      if (current >= start && current <= end) {
        setLiveStatus("Live Now");
      } else if (current < start) {
        setLiveStatus("Upcoming");
      } else {
        setLiveStatus("Completed");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "14px",
        marginTop: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.07)",
        position: "relative",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "700",
          marginBottom: "12px",
        }}
      >
        Live Class
      </h2>

      {/* LIVE STATUS BADGE */}
      <span
        style={{
          position: "absolute",
          top: "22px",
          right: "22px",
          background:
            liveStatus === "Live Now"
              ? "#ef4444"
              : liveStatus === "Upcoming"
              ? "#f59e0b"
              : "#10b981",
          color: "white",
          fontSize: "12px",
          padding: "6px 12px",
          borderRadius: "8px",
          fontWeight: "600",
        }}
      >
        {liveStatus}
      </span>

      {/* CLASS CARD */}
      <div
        style={{
          padding: "18px",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          background: "#f9fafb",
        }}
      >
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "6px" }}>
          {liveClass.title}
        </h3>

        <p style={{ marginTop: "6px", color: "#555", fontSize: "14px" }}>
          <strong>Instructor:</strong> {liveClass.instructor}
        </p>

        <p style={{ marginTop: "4px", color: "#555", fontSize: "14px" }}>
          <strong>Time:</strong> {liveClass.startTime} – {liveClass.endTime}
        </p>

        <p
          style={{
            marginTop: "4px",
            fontSize: "13px",
            fontWeight: "500",
            color: "#374151",
          }}
        >
          Current Time:{" "}
          {currentTime.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </p>

        {/* Join Button */}
        <button
          style={{
            marginTop: "16px",
            padding: "10px 16px",
            fontSize: "14px",
            fontWeight: "600",
            background:
              liveStatus === "Live Now" ? "#1640ff" : "#9ca3af",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: liveStatus === "Live Now" ? "pointer" : "not-allowed",
            transition: "0.3s",
          }}
          disabled={liveStatus !== "Live Now"}
        >
          {liveStatus === "Live Now" ? "Join Live Class" : "Not Available"}
        </button>
      </div>
    </div>
  );
};

// Main InstructorDashboard Component
const InstructorDashboard = () => {
  // State for real-time date/time
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // State for dashboard metrics
  const [metrics, setMetrics] = useState({
    totalCourses: 5,
    totalStudents: 248,
    upcomingClasses: 2,
    pendingAssignments: 7
  });
  
  // State for courses
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Professional Diploma in Humanoid Robotics for Service Industries",
      status: "ongoing",
      students: 42,
      image: "http://localhost:3000/assets/images/course/course-04/course-01.jpg",
      description: "Advanced robotics program focusing on humanoid applications in service sectors",
      duration: "6 months",
      progress: 65
    },
    {
      id: 2,
      title: "Diploma in Artificial Intelligence Applications Across Industries",
      status: "ongoing",
      students: 38,
      image: "http://localhost:3000/assets/images/course/course-04/course-02.jpg",
      description: "Comprehensive AI program covering real-world applications across various sectors",
      duration: "8 months",
      progress: 45
    },
    {
      id: 3,
      title: "Industry-Ready Diploma in Cloud & Edge Technologies",
      status: "upcoming",
      students: 28,
      image: "http://localhost:3000/assets/images/course/course-04/course-03.jpg",
      description: "Master cloud computing and edge technologies for modern infrastructure",
      duration: "5 months",
      progress: 0
    },
    {
      id: 4,
      title: "Career-Ready Diploma in Cybersecurity & Digital Forensics",
      status: "upcoming",
      students: 32,
      image: "	http://localhost:3000/assets/images/course/course-04/course-04.jpg",
      description: "Comprehensive cybersecurity program with digital forensics specialization",
      duration: "7 months",
      progress: 0
    },
    {
      id: 5,
      title: "Year-long STEM Readiness for UG Students",
      status: "completed",
      students: 36,
      image: "http://localhost:3000/assets/images/course/course-04/course-05.jpg",
      description: "Foundational STEM program preparing undergraduate students for advanced studies",
      duration: "12 months",
      progress: 100
    }
  ]);
  
  // State for instructor name
  const [instructorName] = useState("Dr. Johnson");
  
  // State for active tab
  const [activeTab, setActiveTab] = useState("overview");
  
  // State for notifications
  const [notifications, setNotifications] = useState(3);
  
  // State for search
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // State for modals
  const [showCreateCourseModal, setShowCreateCourseModal] = useState(false);
  const [showUploadMaterialModal, setShowUploadMaterialModal] = useState(false);
  const [showCreateAssignmentModal, setShowCreateAssignmentModal] = useState(false);
  
  // State for new course form
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    duration: "",
    status: "upcoming"
  });
  
  // State for new assignment form
  const [newAssignment, setNewAssignment] = useState({
    title: "",
    description: "",
    dueDate: "",
    courseId: ""
  });
  
  // Update current date/time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format date for display
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  // Handle action button clicks
  const handleActionClick = (action) => {
    console.log(`Action clicked: ${action}`);
    switch(action) {
      case 'Create Course':
        console.log('Opening Create Course Modal');
        setShowCreateCourseModal(true);
        break;
      case 'Upload Material':
        console.log('Opening Upload Material Modal');
        setShowUploadMaterialModal(true);
        break;
      case 'Create Assignment':
        console.log('Opening Create Assignment Modal');
        setShowCreateAssignmentModal(true);
        break;
      default:
        console.log(`Unknown action: ${action}`);
    }
  };
  
  // Handle manage button clicks
  const handleManageClick = (courseId) => {
    const course = courses.find(item => item.id === courseId);
    console.log(`Managing course: ${course.title}`);
    alert(`Managing: ${course.title}`);
  };
  
  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  
  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Filter courses based on search term
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  // Handle create course
  const handleCreateCourse = () => {
    const id = courses.length + 1;
    const course = {
      id,
      title: newCourse.title,
      description: newCourse.description,
      duration: newCourse.duration,
      status: newCourse.status,
      students: 0,
      image: `https://picsum.photos/seed/course${id}/400/200.jpg`,
      progress: 0
    };
    
    setCourses([...courses, course]);
    setMetrics({
      ...metrics,
      totalCourses: metrics.totalCourses + 1
    });
    
    setShowCreateCourseModal(false);
    setNewCourse({
      title: "",
      description: "",
      duration: "",
      status: "upcoming"
    });
  };
  
  // Handle upload material
  const handleUploadMaterial = () => {
    console.log("Uploading material...");
    setShowUploadMaterialModal(false);
    alert("Material uploaded successfully!");
  };
  
  // Handle create assignment
  const handleCreateAssignment = () => {
    console.log("Creating assignment...");
    setShowCreateAssignmentModal(false);
    setNewAssignment({
      title: "",
      description: "",
      dueDate: "",
      courseId: ""
    });
    alert("Assignment created successfully!");
  };
  
  return (
    <div className="instructor-dashboard">
      {/* Main Content */}
      <div className="main-content">
        {/* Header Section */}
        <div className="header">
          <div className="header-left">
            <div className="welcome-message">
              <h1>Welcome back, {instructorName}</h1>
              <p>Today's Summary - {formatDate(currentDate)}</p>
            </div>
          </div>
          <div className="header-right">
          </div>
        </div>
        
        <div className="content-container">
          {/* Overview Tab Content */}
          {activeTab === "overview" && (
            <>
              {/* Quick Overview Cards */}
              <div className="overview-cards">
                <div className="card card-blue">
                  <FontAwesomeIcon icon={faBook} className="card-icon" />
                  <div className="card-number">{metrics.totalCourses}</div>
                  <div className="card-label">Total Courses Created</div>
                </div>
                
                <div className="card card-yellow">
                  <FontAwesomeIcon icon={faUsers} className="card-icon" />
                  <div className="card-number">{metrics.totalStudents}</div>
                  <div className="card-label">Total Students Enrolled</div>
                </div>
                
                <div className="card card-green">
                  <FontAwesomeIcon icon={faVideo} className="card-icon" />
                  <div className="card-number">{metrics.upcomingClasses}</div>
                  <div className="card-label">Upcoming Live Classes Today</div>
                </div>
                
                <div className="card card-purple">
                  <FontAwesomeIcon icon={faClipboardCheck} className="card-icon" />
                  <div className="card-number">{metrics.pendingAssignments}</div>
                  <div className="card-label">Pending Assignments</div>
                </div>
              </div>
              
              {/* Live Class Section */}
              <LiveClassSection />
              
              {/* Quick Action Buttons */}
              <div className="quick-actions">
                <button 
                  className="action-btn action-btn-create"
                  onClick={() => handleActionClick('Create Course')}
                >
                  <FontAwesomeIcon icon={faPlus} className="action-icon" />
                  <span>Create Course</span>
                </button>
                <button 
                  className="action-btn action-btn-upload"
                  onClick={() => handleActionClick('Upload Material')}
                >
                  <FontAwesomeIcon icon={faUpload} className="action-icon" />
                  <span>Upload Material</span>
                </button>
                <button 
                  className="action-btn action-btn-assignment"
                  onClick={() => handleActionClick('Create Assignment')}
                >
                  <FontAwesomeIcon icon={faTasks} className="action-icon" />
                  <span>Create Assignment</span>
                </button>
              </div>
              
              {/* Recent Courses Preview */}
              <div className="recent-courses">
                <h2 className="section-title">Recent Courses</h2>
                <div className="courses-grid">
                  {filteredCourses.slice(0, 3).map(course => (
                    <div key={course.id} className="course-card">
                      <div className="course-header">
                        <img src={course.image} alt={course.title} />
                        <div className="course-progress">
                          <div className="progress-bar">
                            <div 
                              className="progress-fill" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <span className="progress-text">{course.progress}% Complete</span>
                        </div>
                      </div>
                      <div className="course-content">
                        <h3 className="course-title">{course.title}</h3>
                        <div className="course-meta">
                          <span className={`status-badge status-${course.status}`}>
                            {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                          </span>
                          <div className="students-count">
                            <FontAwesomeIcon icon={faUser} />
                            <span>{course.students} Students</span>
                          </div>
                        </div>
                        <button 
                          className="manage-btn"
                          onClick={() => handleManageClick(course.id)}
                        >
                          Manage
                          <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          
          {/* Courses Tab Content */}
          {activeTab === "courses" && (
            <div className="courses-section">
              <div className="section-header">
                <h2 className="section-title">Courses</h2>
                <button 
                  className="create-btn"
                  onClick={() => handleActionClick('Create Course')}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  Create New Course
                </button>
              </div>
              <div className="courses-grid">
                {filteredCourses.map(course => (
                  <div key={course.id} className="course-card">
                    <div className="course-header">
                      <img src={course.image} alt={course.title} />
                      <div className="course-progress">
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="progress-text">{course.progress}% Complete</span>
                      </div>
                    </div>
                    <div className="course-content">
                      <h3 className="course-title">{course.title}</h3>
                      <p className="course-description">{course.description}</p>
                      <div className="course-meta">
                        <span className={`status-badge status-${course.status}`}>
                          {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                        </span>
                        <div className="course-info">
                          <div className="students-count">
                            <FontAwesomeIcon icon={faUser} />
                            <span>{course.students} Students</span>
                          </div>
                          <div className="course-duration">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            <span>{course.duration}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        className="manage-btn"
                        onClick={() => handleManageClick(course.id)}
                      >
                        Manage
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Students Tab Content */}
          {activeTab === "students" && (
            <div className="students-section">
              <h2 className="section-title">Students Overview</h2>
              <div className="students-table-container">
                <table className="students-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Enrolled Course</th>
                      <th>Progress</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Smith</td>
                      <td>john.smith@example.com</td>
                      <td>Humanoid Robotics</td>
                      <td>75%</td>
                      <td><span className="status-badge status-ongoing">Active</span></td>
                    </tr>
                    <tr>
                      <td>Emily Johnson</td>
                      <td>emily.j@example.com</td>
                      <td>AI Applications</td>
                      <td>60%</td>
                      <td><span className="status-badge status-ongoing">Active</span></td>
                    </tr>
                    <tr>
                      <td>Michael Chen</td>
                      <td>m.chen@example.com</td>
                      <td>Cloud & Edge Technologies</td>
                      <td>90%</td>
                      <td><span className="status-badge status-ongoing">Active</span></td>
                    </tr>
                    <tr>
                      <td>Sarah Williams</td>
                      <td>sarah.w@example.com</td>
                      <td>Cybersecurity & Forensics</td>
                      <td>45%</td>
                      <td><span className="status-badge status-upcoming">Pending</span></td>
                    </tr>
                    <tr>
                      <td>David Brown</td>
                      <td>david.b@example.com</td>
                      <td>STEM Readiness</td>
                      <td>100%</td>
                      <td><span className="status-badge status-completed">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {/* Schedule Tab Content */}
          {activeTab === "schedule" && (
            <div className="schedule-section">
              <h2 className="section-title">Teaching Schedule</h2>
              <div className="schedule-container">
                <div className="calendar-view">
                  <div className="calendar-header">
                    <h3>June 2024</h3>
                    <div className="calendar-nav">
                      <button className="calendar-btn">Previous</button>
                      <button className="calendar-btn">Today</button>
                      <button className="calendar-btn">Next</button>
                    </div>
                  </div>
                  <div className="calendar-grid">
                    <div className="calendar-day">
                      <div className="day-header">Mon</div>
                      <div className="day-content">
                        <div className="day-number">24</div>
                        <div className="event event-blue">10:00 AM - AI Class</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="day-header">Tue</div>
                      <div className="day-content">
                        <div className="day-number">25</div>
                        <div className="event event-green">2:00 PM - Robotics Lab</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="day-header">Wed</div>
                      <div className="day-content">
                        <div className="day-number">26</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="day-header">Thu</div>
                      <div className="day-content">
                        <div className="day-number">27</div>
                        <div className="event event-purple">11:00 AM - Cloud Computing</div>
                      </div>
                    </div>
                    <div className="calendar-day">
                      <div className="day-header">Fri</div>
                      <div className="day-content">
                        <div className="day-number">28</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="upcoming-classes">
                  <h3>Upcoming Classes</h3>
                  <div className="class-list">
                    <div className="class-item">
                      <div className="class-time">10:00 AM - 11:30 AM</div>
                      <div className="class-details">
                        <h4>AI Applications Across Industries</h4>
                        <p>Module 3: Neural Networks and Deep Learning</p>
                      </div>
                    </div>
                    <div className="class-item">
                      <div className="class-time">2:00 PM - 4:00 PM</div>
                      <div className="class-details">
                        <h4>Humanoid Robotics Lab Session</h4>
                        <p>Practical: Programming Humanoid Robots</p>
                      </div>
                    </div>
                    <div className="class-item">
                      <div className="class-time">11:00 AM - 12:30 PM</div>
                      <div className="class-details">
                        <h4>Cloud & Edge Technologies</h4>
                        <p>Module 2: Edge Computing Frameworks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Analytics Tab Content */}
          {activeTab === "analytics" && (
            <div className="analytics-section">
              <h2 className="section-title">Course Analytics</h2>
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Student Enrollment Trends</h3>
                  <div className="chart-container">
                    <div className="chart-placeholder">
                      <FontAwesomeIcon icon={faChartBar} className="chart-icon" />
                      <p>Enrollment chart would be displayed here</p>
                    </div>
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Course Completion Rates</h3>
                  <div className="chart-container">
                    <div className="chart-placeholder">
                      <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                      <p>Completion rate chart would be displayed here</p>
                    </div>
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Student Performance</h3>
                  <div className="chart-container">
                    <div className="chart-placeholder">
                      <FontAwesomeIcon icon={faChartBar} className="chart-icon" />
                      <p>Performance chart would be displayed here</p>
                    </div>
                  </div>
                </div>
                <div className="analytics-card">
                  <h3>Engagement Metrics</h3>
                  <div className="chart-container">
                    <div className="chart-placeholder">
                      <FontAwesomeIcon icon={faChartLine} className="chart-icon" />
                      <p>Engagement chart would be displayed here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Messages Tab Content */}
          {activeTab === "messages" && (
            <div className="messages-section">
              <h2 className="section-title">Messages</h2>
              <div className="messages-container">
                <div className="message-list">
                  <div className="message-item unread">
                    <div className="message-avatar">JS</div>
                    <div className="message-content">
                      <div className="message-header">
                        <h4>John Smith</h4>
                        <span className="message-time">2 hours ago</span>
                      </div>
                      <p>Hi Professor, I have a question about robotics assignment...</p>
                    </div>
                  </div>
                  <div className="message-item unread">
                    <div className="message-avatar">EJ</div>
                    <div className="message-content">
                      <div className="message-header">
                        <h4>Emily Johnson</h4>
                        <span className="message-time">5 hours ago</span>
                      </div>
                      <p>Thank you for feedback on my AI project. I've made changes...</p>
                    </div>
                  </div>
                  <div className="message-item">
                    <div className="message-avatar">MC</div>
                    <div className="message-content">
                      <div className="message-header">
                        <h4>Michael Chen</h4>
                        <span className="message-time">Yesterday</span>
                      </div>
                      <p>Could you please clarify requirements for cloud computing project?</p>
                    </div>
                  </div>
                </div>
                <div className="message-detail">
                  <div className="message-detail-header">
                    <h3>John Smith</h3>
                    <span className="message-time">2 hours ago</span>
                  </div>
                  <div className="message-detail-content">
                    <p>Hi Professor,</p>
                    <p>I have a question about robotics assignment. I'm having trouble with the programming part of humanoid robot simulation. Could you please provide some guidance on how to approach the movement algorithms?</p>
                    <p>Thank you,<br/>John</p>
                  </div>
                  <div className="message-reply">
                    <textarea placeholder="Type your reply..."></textarea>
                    <button className="send-btn">Send</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Settings Tab Content */}
          {activeTab === "settings" && (
            <div className="settings-section">
              <h2 className="section-title">Settings</h2>
              <div className="settings-container">
                <div className="settings-card">
                  <h3>Profile Information</h3>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" defaultValue={instructorName} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" defaultValue="dr.johnson@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" rows="4" defaultValue="Expert in robotics, AI, and emerging technologies with 10+ years of experience in both academia and industry." />
                  </div>
                  <button className="save-btn">Save Changes</button>
                </div>
                
                <div className="settings-card">
                  <h3>Notification Preferences</h3>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      Email notifications for new student enrollments
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" defaultChecked />
                      Email notifications for assignment submissions
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" />
                      Weekly progress reports
                    </label>
                  </div>
                  <button className="save-btn">Update Preferences</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Create Course Modal */}
      {showCreateCourseModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Create New Course</h2>
              <button className="close-btn" onClick={() => setShowCreateCourseModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label htmlFor="course-title">Course Title</label>
                <input 
                  type="text" 
                  id="course-title" 
                  value={newCourse.title}
                  onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                  placeholder="Enter course title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="course-description">Course Description</label>
                <textarea 
                  id="course-description" 
                  rows="4" 
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                  placeholder="Enter course description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="course-duration">Course Duration</label>
                <input 
                  type="text" 
                  id="course-duration" 
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
                  placeholder="e.g., 6 months"
                />
              </div>
              <div className="form-group">
                <label htmlFor="course-status">Course Status</label>
                <select 
                  id="course-status" 
                  value={newCourse.status}
                  onChange={(e) => setNewCourse({...newCourse, status: e.target.value})}
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowCreateCourseModal(false)}>
                  Cancel
                </button>
                <button className="submit-btn" onClick={handleCreateCourse}>
                  <FontAwesomeIcon icon={faCheck} />
                  Create Course
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Upload Material Modal */}
      {showUploadMaterialModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Upload Course Material</h2>
              <button className="close-btn" onClick={() => setShowUploadMaterialModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label htmlFor="material-course">Select Course</label>
                <select id="material-course">
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="material-title">Material Title</label>
                <input 
                  type="text" 
                  id="material-title" 
                  placeholder="Enter material title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="material-description">Description</label>
                <textarea 
                  id="material-description" 
                  rows="4" 
                  placeholder="Enter material description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="material-file">Upload File</label>
                <div className="file-upload">
                  <input type="file" id="material-file" />
                  <div className="file-upload-label">
                    <FontAwesomeIcon icon={faUpload} />
                    <span>Choose file or drag and drop</span>
                  </div>
                </div>
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowUploadMaterialModal(false)}>
                  Cancel
                </button>
                <button className="submit-btn" onClick={handleUploadMaterial}>
                  <FontAwesomeIcon icon={faCheck} />
                  Upload Material
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Create Assignment Modal */}
      {showCreateAssignmentModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Create Assignment</h2>
              <button className="close-btn" onClick={() => setShowCreateAssignmentModal(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-content">
              <div className="form-group">
                <label htmlFor="assignment-course">Select Course</label>
                <select 
                  id="assignment-course"
                  value={newAssignment.courseId}
                  onChange={(e) => setNewAssignment({...newAssignment, courseId: e.target.value})}
                >
                  <option value="">Select a course</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="assignment-title">Assignment Title</label>
                <input 
                  type="text" 
                  id="assignment-title" 
                  value={newAssignment.title}
                  onChange={(e) => setNewAssignment({...newAssignment, title: e.target.value})}
                  placeholder="Enter assignment title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignment-description">Assignment Description</label>
                <textarea 
                  id="assignment-description" 
                  rows="4" 
                  value={newAssignment.description}
                  onChange={(e) => setNewAssignment({...newAssignment, description: e.target.value})}
                  placeholder="Enter assignment description"
                />
              </div>
              <div className="form-group">
                <label htmlFor="assignment-due">Due Date</label>
                <input 
                  type="date" 
                  id="assignment-due" 
                  value={newAssignment.dueDate}
                  onChange={(e) => setNewAssignment({...newAssignment, dueDate: e.target.value})}
                />
              </div>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setShowCreateAssignmentModal(false)}>
                  Cancel
                </button>
                <button className="submit-btn" onClick={handleCreateAssignment}>
                  <FontAwesomeIcon icon={faCheck} />
                  Create Assignment
                </button>
              </div>
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
        
        .instructor-dashboard {
          display: flex;
          min-height: 100vh;
          background-color: #f5f7fa;
          color: #333;
        }
        
        /* Main Content Styles */
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
        }
        
        /* Header Section */
        .header {
          background: linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%);
          padding: 24px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-bottom: 1px solid #eaeaea;
        }
        
        .header-left {
          display: flex;
          align-items: center;
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        
        .welcome-message h1 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #333;
        }
        
        .welcome-message p {
          color: #666;
          font-size: 16px;
        }
        
        .search-container {
          position: relative;
          display: flex;
          align-items: center;
        }
        
        .search-icon {
          position: absolute;
          left: 14px;
          color: #666;
        }
        
        .search-container input {
          padding: 12px 16px 12px 40px;
          border: 1px solid #ddd;
          border-radius: 30px;
          width: 280px;
          font-size: 14px;
          transition: all 0.3s;
          background-color: #f8f9fa;
        }
        
        .search-container input:focus {
          outline: none;
          border-color: #1640ff;
          background-color: white;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }
        
        .notification-container {
          position: relative;
          cursor: pointer;
        }
        
        .notification-icon {
          font-size: 20px;
          color: #666;
        }
        
        .notification-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #EF7C00;
          color: white;
          font-size: 12px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .profile-avatar {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          background-color: #1640ff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .profile-avatar:hover {
          transform: scale(1.05);
        }
        
        /* Content Container */
        .content-container {
          padding: 30px;
          flex: 1;
          overflow-y: auto;
        }
        
        /* Quick Overview Cards */
        .overview-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }
        
        .card {
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          background-color: white;
        }
        
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .card-icon {
          font-size: 24px;
          margin-bottom: 16px;
          opacity: 0.8;
        }
        
        .card-number {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        
        .card-label {
          font-size: 16px;
          color: #555;
        }
        
        .card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
        }
        
        .card-blue {
          background-color: #e6f0ff;
        }
        
        .card-blue::before {
          background-color: #1640ff;
        }
        
        .card-blue .card-icon {
          color: #1640ff;
        }
        
        .card-yellow {
          background-color: #fff4e6;
        }
        
        .card-yellow::before {
          background-color: #EF7C00;
        }
        
        .card-yellow .card-icon {
          color: #EF7C00;
        }
        
        .card-green {
          background-color: #e6f9f0;
        }
        
        .card-green::before {
          background-color: #00b894;
        }
        
        .card-green .card-icon {
          color: #00b894;
        }
        
        .card-purple {
          background-color: #f3e6ff;
        }
        
        .card-purple::before {
          background-color: #9b59b6;
        }
        
        .card-purple .card-icon {
          color: #9b59b6;
        }
        
        /* Quick Action Buttons */
        .quick-actions {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        
        .action-btn {
          flex: 1;
          min-width: 200px;
          padding: 18px 28px;
          border-radius: 14px;
          background-color: #1640ff;
          color: white;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(22, 64, 255, 0.25);
          position: relative;
          overflow: hidden;
        }
        
        .action-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .action-btn:hover::before {
          left: 100%;
        }
        
        .action-btn:hover {
          background-color: #0e30cc;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(22, 64, 255, 0.35);
        }
        
        .action-btn:active {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(22, 64, 255, 0.3);
        }
        
        .action-icon {
          font-size: 18px;
          flex-shrink: 0;
        }
        
        .action-btn span {
          white-space: nowrap;
        }
        
        .action-btn-create {
          background: linear-gradient(135deg, #1640ff 0%, #0e30cc 100%);
        }
        
        .action-btn-upload {
          background: linear-gradient(135deg, #00b894 0%, #00896a 100%);
        }
        
        .action-btn-upload:hover {
          background: linear-gradient(135deg, #00896a 0%, #006b52 100%);
        }
        
        .action-btn-assignment {
          background: linear-gradient(135deg, #EF7C00 0%, #d46b00 100%);
        }
        
        .action-btn-assignment:hover {
          background: linear-gradient(135deg, #d46b00 0%, #b85c00 100%);
        }
        
        /* Section Styles */
        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #333;
        }
        
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .create-btn {
          padding: 10px 20px;
          border-radius: 8px;
          background-color: #1640ff;
          color: white;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background-color 0.3s;
        }
        
        .create-btn:hover {
          background-color: #0e30cc;
        }
        
        /* Courses Grid */
        .courses-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        
        .course-card {
          background-color: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }
        
        .course-header {
          position: relative;
        }
        
        .course-header img {
          width: 100%;
          height: 160px;
          object-fit: cover;
        }
        
        .course-progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          padding: 15px;
        }
        
        .progress-bar {
          height: 6px;
          background-color: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
          margin-bottom: 8px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background-color: #00b894;
          border-radius: 3px;
        }
        
        .progress-text {
          color: white;
          font-size: 12px;
          font-weight: 600;
        }
        
        .course-content {
          padding: 20px;
        }
        
        .course-title {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
          line-height: 1.4;
        }
        
        .course-description {
          font-size: 14px;
          color: #666;
          margin-bottom: 16px;
          line-height: 1.4;
        }
        
        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .course-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .status-badge {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }
        
        .status-ongoing {
          background-color: #e6f9f0;
          color: #00b894;
        }
        
        .status-upcoming {
          background-color: #fff4e6;
          color: #EF7C00;
        }
        
        .status-completed {
          background-color: #f0f0f0;
          color: #777;
        }
        
        .students-count, .course-duration {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          font-size: 14px;
        }
        
        .manage-btn {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          background-color: #1640ff;
          color: white;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: background-color 0.3s;
        }
        
        .manage-btn:hover {
          background-color: #0e30cc;
        }
        
        /* Recent Courses Section */
        .recent-courses {
          margin-top: 30px;
        }
        
        /* Students Section */
        .students-section {
          margin-bottom: 30px;
        }
        
        .students-table-container {
          background-color: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .students-table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .students-table th {
          background-color: #f8f9fa;
          padding: 16px;
          text-align: left;
          font-weight: 600;
          color: #333;
          border-bottom: 1px solid #eaeaea;
        }
        
        .students-table td {
          padding: 16px;
          border-bottom: 1px solid #eaeaea;
        }
        
        .students-table tr:last-child td {
          border-bottom: none;
        }
        
        .students-table tr:hover {
          background-color: #f8f9fa;
        }
        
        /* Schedule Section */
        .schedule-section {
          margin-bottom: 30px;
        }
        
        .schedule-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 24px;
        }
        
        .calendar-view {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .calendar-nav {
          display: flex;
          gap: 10px;
        }
        
        .calendar-btn {
          padding: 8px 16px;
          border: 1px solid #ddd;
          background-color: white;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .calendar-btn:hover {
          background-color: #f8f9fa;
        }
        
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
        }
        
        .calendar-day {
          border: 1px solid #eaeaea;
          border-radius: 8px;
          padding: 10px;
          min-height: 120px;
        }
        
        .day-header {
          font-weight: 600;
          margin-bottom: 10px;
          color: #666;
        }
        
        .day-number {
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .event {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          margin-bottom: 4px;
        }
        
        .event-blue {
          background-color: #e6f0ff;
          color: #1640ff;
        }
        
        .event-green {
          background-color: #e6f9f0;
          color: #00b894;
        }
        
        .event-purple {
          background-color: #f3e6ff;
          color: #9b59b6;
        }
        
        .upcoming-classes {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .class-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .class-item {
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 16px;
        }
        
        .class-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        
        .class-time {
          font-weight: 600;
          color: #1640ff;
          margin-bottom: 8px;
        }
        
        .class-details h4 {
          font-size: 16px;
          margin-bottom: 4px;
        }
        
        .class-details p {
          font-size: 14px;
          color: #666;
        }
        
        /* Analytics Section */
        .analytics-section {
          margin-bottom: 30px;
        }
        
        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .analytics-card {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .analytics-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #333;
        }
        
        .chart-container {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .chart-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          color: #999;
        }
        
        .chart-icon {
          font-size: 32px;
        }
        
        /* Messages Section */
        .messages-section {
          margin-bottom: 30px;
        }
        
        .messages-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        
        .message-list {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          max-height: 600px;
          overflow-y: auto;
        }
        
        .message-item {
          display: flex;
          gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid #eaeaea;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .message-item:hover {
          background-color: #f8f9fa;
        }
        
        .message-item.unread {
          font-weight: 600;
        }
        
        .message-item:last-child {
          border-bottom: none;
        }
        
        .message-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #1640ff;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        .message-content {
          flex: 1;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }
        
        .message-header h4 {
          font-size: 16px;
        }
        
        .message-time {
          font-size: 14px;
          color: #999;
        }
        
        .message-detail {
          background-color: white;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          display: flex;
          flex-direction: column;
          height: 600px;
        }
        
        .message-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eaeaea;
        }
        
        .message-detail-content {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 20px;
        }
        
        .message-detail-content p {
          margin-bottom: 16px;
          line-height: 1.6;
        }
        
        .message-reply {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .message-reply textarea {
          flex: 1;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          resize: none;
          font-family: inherit;
        }
        
        .message-reply textarea:focus {
          outline: none;
          border-color: #1640ff;
        }
        
        .send-btn {
          padding: 10px 20px;
          border-radius: 8px;
          background-color: #1640ff;
          color: white;
          border: none;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          align-self: flex-end;
        }
        
        .send-btn:hover {
          background-color: #0e30cc;
        }
        
        /* Settings Section */
        .settings-section {
          margin-bottom: 30px;
        }
        
        .settings-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .settings-card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .settings-card h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #333;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }
        
        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          transition: border-color 0.3s;
          font-family: inherit;
        }
        
        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #1640ff;
          box-shadow: 0 0 0 3px rgba(22, 64, 255, 0.1);
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-weight: normal;
        }
        
        .checkbox-label input[type="checkbox"] {
          width: auto;
        }
        
        .save-btn {
          padding: 12px 24px;
          background-color: #1640ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .save-btn:hover {
          background-color: #0e30cc;
        }
        
        /* Modal Styles - FIXED */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .modal {
          background-color: white;
          border-radius: 16px;
          width: 90%;
          max-width: 550px;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideIn 0.3s ease-out;
          position: relative;
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          border-bottom: 1px solid #eaeaea;
          background-color: #f8f9fa;
          border-radius: 16px 16px 0 0;
        }
        
        .modal-header h2 {
          font-size: 22px;
          font-weight: 700;
          color: #333;
        }
        
        .close-btn {
          background: white;
          border: 1px solid #ddd;
          color: #666;
          font-size: 20px;
          cursor: pointer;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
        }
        
        .close-btn:hover {
          background-color: #fee;
          border-color: #fcc;
          color: #c00;
        }
        
        .modal-content {
          padding: 24px;
          background-color: white;
        }
        
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid #eaeaea;
        }
        
        .cancel-btn {
          padding: 12px 24px;
          background-color: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 8px;
          color: #666;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        
        .cancel-btn:hover {
          background-color: #e9ecef;
          border-color: #ccc;
        }
        
        .submit-btn {
          padding: 12px 24px;
          background-color: #1640ff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .submit-btn:hover {
          background-color: #0e30cc;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(22, 64, 255, 0.3);
        }
        
        .file-upload {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          border: 2px dashed #ddd;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          background-color: #f8f9fa;
        }
        
        .file-upload:hover {
          border-color: #1640ff;
          background-color: #f0f4ff;
        }
        
        .file-upload input[type="file"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        
        .file-upload-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          color: #666;
          font-size: 14px;
          pointer-events: none;
        }
        
        .file-upload-label svg {
          font-size: 32px;
          color: #1640ff;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .overview-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .courses-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .analytics-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 992px) {
          .header {
            padding: 20px;
          }
          
          .search-container input {
            width: 200px;
          }
          
          .schedule-container {
            grid-template-columns: 1fr;
          }
          
          .messages-container {
            grid-template-columns: 1fr;
          }
          
          .settings-container {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
          }
          
          .header-right {
            width: 100%;
            justify-content: space-between;
          }
          
          .search-container input {
            width: 180px;
          }
          
          .overview-cards {
            grid-template-columns: 1fr;
          }
          
          .quick-actions {
            flex-direction: column;
            gap: 12px;
          }
          
          .action-btn {
            width: 100%;
            min-width: unset;
          }
          
          .courses-grid {
            grid-template-columns: 1fr;
          }
          
          .calendar-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .modal {
            width: 95%;
            max-height: 90vh;
          }
        }
      `}</style>
    </div>
  );
};

export default InstructorDashboard;