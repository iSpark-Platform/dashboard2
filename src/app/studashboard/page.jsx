"use client";
import React, { useState, useEffect } from 'react';
import { FiVideo, FiCalendar,FiFileText, FiPlayCircle, FiBookOpen, FiCheckCircle, FiAward, FiBell, FiChevronDown, FiUser, FiLogOut, FiHome, FiGrid, FiClock, FiDownload, FiSend, FiMessageSquare, FiUsers, FiX, FiMenu, FiSearch, FiTrendingUp, FiTarget, FiBook, FiEdit, FiStar, FiActivity, FiBarChart2, FiUpload, FiEye, FiThumbsUp, FiMessageCircle, FiShare2, FiFilter, FiRefreshCw, FiZap, FiCode, FiDatabase, FiCpu, FiMonitor, FiLayers } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const ELearningPlatform = () => {
  // Load Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [showClassroom, setShowClassroom] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClass, setSelectedClass] = useState(null);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const router = useRouter();
  // Assignments Data
  const assignments = [
    {
      id: 1,
      title: "Build a PLC-based Automation System",
      course: "Smart Robotics & Industry 4.0",
      dueDate: "Dec 15, 2025",
      status: "pending",
      points: 100,
      submitted: false,
      description: "Design and implement a PLC-based control system for industrial automation"
    },
    {
      id: 2,
      title: "Neural Network Classification Project",
      course: "Applied AI & Machine Learning",
      dueDate: "Dec 18, 2025",
      status: "pending",
      points: 150,
      submitted: false,
      description: "Build a CNN model for image classification with 90%+ accuracy"
    },
    {
      id: 3,
      title: "IoT Sensor Network Design",
      course: "Smart Robotics & Industry 4.0",
      dueDate: "Dec 10, 2025",
      status: "submitted",
      points: 100,
      submitted: true,
      grade: 95,
      description: "Design a complete IoT sensor network for smart manufacturing"
    },
    {
      id: 4,
      title: "Robot Kinematics Analysis",
      course: "Smart Robotics & Industry 4.0",
      dueDate: "Nov 28, 2025",
      status: "graded",
      points: 80,
      submitted: true,
      grade: 88,
      feedback: "Excellent work on forward kinematics! Consider optimizing inverse kinematics calculations.",
      description: "Analyze and simulate robot arm kinematics"
    }
  ];

  // Grades Data
  const grades = [
    {
      id: 1,
      course: "Smart Robotics & Industry 4.0",
      assignments: 24,
      completed: 20,
      avgGrade: 92,
      lastGrade: 95,
      trend: "up"
    },
    {
      id: 2,
      course: "Applied AI & Machine Learning",
      assignments: 18,
      completed: 15,
      avgGrade: 88,
      lastGrade: 85,
      trend: "down"
    }
  ];

  // Achievements & Certificates
  const achievements = [
    {
      id: 1,
      title: "Python Programming Expert",
      icon: "🏆",
      date: "Nov 20, 2025",
      description: "Completed advanced Python course with distinction"
    },
    {
      id: 2,
      title: "5-Day Learning Streak",
      icon: "🔥",
      date: "Nov 25, 2025",
      description: "Maintained consistent daily learning for 5 consecutive days"
    },
    {
      id: 3,
      title: "First Project Submitted",
      icon: "🎯",
      date: "Nov 15, 2025",
      description: "Successfully submitted your first major project"
    },
    {
      id: 4,
      title: "Top Performer",
      icon: "⭐",
      date: "Nov 10, 2025",
      description: "Ranked in top 10% of your cohort"
    }
  ];

  // Study Materials
  const studyMaterials = [
    {
      id: 1,
      title: "Week 4: Advanced Control Systems",
      course: "Smart Robotics & Industry 4.0",
      type: "slides",
      size: "12.5 MB",
      date: "Nov 20, 2025",
      downloads: 156
    },
    {
      id: 2,
      title: "Neural Networks Implementation Guide",
      course: "Applied AI & Machine Learning",
      type: "pdf",
      size: "8.3 MB",
      date: "Nov 22, 2025",
      downloads: 243
    },
    {
      id: 3,
      title: "PLC Programming Code Examples",
      course: "Smart Robotics & Industry 4.0",
      type: "code",
      size: "2.1 MB",
      date: "Nov 18, 2025",
      downloads: 189
    },
    {
      id: 4,
      title: "Computer Vision Tutorial Videos",
      course: "Applied AI & Machine Learning",
      type: "video",
      size: "456 MB",
      date: "Nov 25, 2025",
      downloads: 312
    }
  ];

  // Announcements
  const announcements = [
    {
      id: 1,
      title: "Holiday Schedule Update",
      message: "Classes will be rescheduled during the holiday season. Check your calendar for updates.",
      date: "2 hours ago",
      priority: "high",
      author: "Admin"
    },
    {
      id: 2,
      title: "New Learning Resources Available",
      message: "Advanced robotics tutorials and AI research papers have been added to your course materials.",
      date: "1 day ago",
      priority: "medium",
      author: "Dr. Sarah Johnson"
    },
    {
      id: 3,
      title: "Upcoming Guest Lecture",
      message: "Join us for a special session with industry expert on Industry 4.0 trends this Friday.",
      date: "2 days ago",
      priority: "high",
      author: "Course Coordinator"
    }
  ];

  // Discussion Forum Posts
  const forumPosts = [
    {
      id: 1,
      title: "Best practices for PLC programming?",
      author: "Mike Chen",
      course: "Smart Robotics & Industry 4.0",
      replies: 12,
      likes: 24,
      time: "3 hours ago",
      excerpt: "I'm working on my automation project and wondering about industry best practices..."
    },
    {
      id: 2,
      title: "TensorFlow vs PyTorch for beginners?",
      author: "Sarah Williams",
      course: "Applied AI & Machine Learning",
      replies: 18,
      likes: 45,
      time: "5 hours ago",
      excerpt: "Which framework would you recommend for someone just starting with deep learning?"
    },
    {
      id: 3,
      title: "Robot simulation software recommendations",
      author: "Alex Kumar",
      course: "Smart Robotics & Industry 4.0",
      replies: 8,
      likes: 15,
      time: "1 day ago",
      excerpt: "Looking for good simulation tools for testing robot kinematics before hardware implementation..."
    }
  ];

  // Learning Paths
  const learningPath = [
    {
      id: 1,
      module: "Fundamentals of Robotics",
      status: "completed",
      progress: 100,
      lessons: 12,
      completedLessons: 12
    },
    {
      id: 2,
      module: "Industrial Automation Systems",
      status: "completed",
      progress: 100,
      lessons: 15,
      completedLessons: 15
    },
    {
      id: 3,
      module: "PLC Programming & Control",
      status: "in-progress",
      progress: 65,
      lessons: 18,
      completedLessons: 12
    },
    {
      id: 4,
      module: "Robot Operating System (ROS)",
      status: "locked",
      progress: 0,
      lessons: 20,
      completedLessons: 0
    },
    {
      id: 5,
      module: "Computer Vision for Robotics",
      status: "locked",
      progress: 0,
      lessons: 16,
      completedLessons: 0
    },
    {
      id: 6,
      module: "Industry 4.0 Integration",
      status: "locked",
      progress: 0,
      lessons: 14,
      completedLessons: 0
    }
  ];

  // Performance Analytics
  const performanceData = {
    weeklyActivity: [
      { day: "Mon", hours: 3.5 },
      { day: "Tue", hours: 4.2 },
      { day: "Wed", hours: 2.8 },
      { day: "Thu", hours: 5.1 },
      { day: "Fri", hours: 3.9 },
      { day: "Sat", hours: 4.5 },
      { day: "Sun", hours: 2.3 }
    ],
    totalHours: 26.3,
    completionRate: 85,
    averageScore: 91,
    rank: "Top 5%"
  };
  
  // Internships Data
  const internships = [
    {
      id: 1,
      title: "Smart Robotics & Industry 4.0 Automation Internship",
      duration: "6 months",
      level: "Intermediate",
      enrolled: 234,
      description: "Master robotics, automation, and Industry 4.0 technologies with hands-on projects and real-world applications.",
      modules: [
        "Introduction to Smart Robotics",
        "Industrial Automation Systems",
        "PLC Programming & Control",
        "Robot Operating System (ROS)",
        "Computer Vision for Robotics",
        "Industry 4.0 Integration"
      ],
      skills: ["Robotics", "Automation", "PLC", "Industry 4.0", "IoT"],
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      color: "#1640FF"
    },
    {
      id: 2,
      title: "Applied AI & Machine Learning: From Models to Real-World Applications",
      duration: "5 months",
      level: "Advanced",
      enrolled: 456,
      description: "Deep dive into AI and ML with practical implementations across various industries and real-world use cases.",
      modules: [
        "Python for AI/ML",
        "Neural Networks & Deep Learning",
        "Computer Vision Applications",
        "Natural Language Processing",
        "ML Model Deployment",
        "AI Ethics & Best Practices"
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "ML Algorithms", "Deep Learning"],
      instructor: "Prof. Michael Chen",
      rating: 4.9,
      color: "#1640FF"
    },
    {
      id: 3,
      title: "IoT & IIoT for Smart Systems and Industry 4.0",
      duration: "4 months",
      level: "Intermediate",
      enrolled: 312,
      description: "Build connected systems using IoT and Industrial IoT technologies for smart manufacturing and automation.",
      modules: [
        "IoT Fundamentals",
        "Sensor Networks & Protocols",
        "Industrial IoT Architecture",
        "Edge Computing & Analytics",
        "IoT Security",
        "Smart Factory Implementation"
      ],
      skills: ["IoT", "IIoT", "Sensors", "MQTT", "Edge Computing"],
      instructor: "Dr. Emily Rodriguez",
      rating: 4.7,
      color: "#1640FF"
    },
    {
      id: 4,
      title: "Cloud & Edge Computing for Connected Intelligence",
      duration: "4 months",
      level: "Advanced",
      enrolled: 289,
      description: "Master cloud infrastructure and edge computing paradigms for building scalable intelligent systems.",
      modules: [
        "Cloud Computing Fundamentals",
        "AWS/Azure/GCP Platform Services",
        "Edge Computing Architecture",
        "Containerization & Kubernetes",
        "Serverless Computing",
        "Cloud Security & Optimization"
      ],
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Edge Computing"],
      instructor: "Prof. David Kumar",
      rating: 4.8,
      color: "#1640FF"
    },
    {
      id: 5,
      title: "3D Printing & Digital Fabrication for Engineers",
      duration: "3 months",
      level: "Beginner",
      enrolled: 198,
      description: "Learn additive manufacturing, 3D modeling, and digital fabrication techniques for modern engineering.",
      modules: [
        "CAD Design for 3D Printing",
        "Additive Manufacturing Technologies",
        "Material Science & Selection",
        "3D Printer Operation & Maintenance",
        "Post-Processing Techniques",
        "Design Optimization"
      ],
      skills: ["CAD", "3D Printing", "Fusion 360", "Additive Manufacturing"],
      instructor: "Dr. Lisa Anderson",
      rating: 4.6,
      color: "#1640FF"
    }
  ];

  // Courses Data
  const courses = [
    {
      id: 6,
      title: "Professional Diploma in Humanoid Robotics for Service Industries",
      duration: "8 months",
      level: "Advanced",
      enrolled: 167,
      description: "Design and program humanoid robots for healthcare, hospitality, and customer service applications.",
      modules: [
        "Humanoid Robot Design",
        "Human-Robot Interaction",
        "Motion Planning & Control",
        "AI for Social Robotics",
        "Service Robot Applications",
        "Safety & Ethics"
      ],
      skills: ["Humanoid Robotics", "HRI", "ROS", "AI", "Service Design"],
      instructor: "Prof. James Wilson",
      rating: 4.9,
      color: "#EF7C00"
    },
    {
      id: 7,
      title: "Diploma in Artificial Intelligence Applications Across Industries",
      duration: "7 months",
      level: "Advanced",
      enrolled: 523,
      description: "Apply AI solutions to solve real-world challenges in healthcare, finance, retail, and manufacturing.",
      modules: [
        "AI Fundamentals",
        "Industry-Specific AI Applications",
        "AI Project Management",
        "Data Strategy & Governance",
        "AI Model Deployment at Scale",
        "ROI & Business Impact"
      ],
      skills: ["AI Strategy", "ML Ops", "Business Analytics", "Project Management"],
      instructor: "Dr. Priya Sharma",
      rating: 4.8,
      color: "#EF7C00"
    },
    {
      id: 8,
      title: "Industry-Ready Diploma in Cloud & Edge Technologies",
      duration: "6 months",
      level: "Intermediate",
      enrolled: 401,
      description: "Become industry-ready with comprehensive cloud and edge computing skills for enterprise applications.",
      modules: [
        "Multi-Cloud Architecture",
        "Edge AI & Analytics",
        "DevOps & CI/CD",
        "Cloud Native Development",
        "Hybrid Cloud Solutions",
        "Enterprise Integration"
      ],
      skills: ["Cloud Architecture", "DevOps", "Edge AI", "Microservices"],
      instructor: "Prof. Robert Taylor",
      rating: 4.7,
      color: "#EF7C00"
    },
    {
      id: 9,
      title: "Career-Ready Diploma in Cybersecurity & Digital Forensics",
      duration: "8 months",
      level: "Advanced",
      enrolled: 334,
      description: "Master cybersecurity principles, ethical hacking, and digital forensics for career advancement.",
      modules: [
        "Network Security Fundamentals",
        "Ethical Hacking & Penetration Testing",
        "Digital Forensics & Incident Response",
        "Security Operations Center (SOC)",
        "Cloud Security",
        "Compliance & Risk Management"
      ],
      skills: ["Cybersecurity", "Ethical Hacking", "Forensics", "SOC", "Compliance"],
      instructor: "Dr. Mark Stevens",
      rating: 4.9,
      color: "#EF7C00"
    },
    {
      id: 10,
      title: "Year-long STEM Readiness for UG Students",
      duration: "12 months",
      level: "Beginner",
      enrolled: 678,
      description: "Comprehensive foundation in STEM subjects preparing undergraduate students for advanced studies.",
      modules: [
        "Mathematics for Engineering",
        "Physics Fundamentals",
        "Programming Basics (Python & C++)",
        "Electronics & Circuits",
        "Problem-Solving & Critical Thinking",
        "Research Methodology"
      ],
      skills: ["Mathematics", "Physics", "Programming", "Problem Solving"],
      instructor: "Prof. Anna Martinez",
      rating: 4.6,
      color: "#EF7C00"
    }
  ];

  // Live Classes Data
  const liveClasses = [
    {
      id: 1,
      title: "Robotics Control Systems",
      course: "Smart Robotics & Industry 4.0 Automation Internship",
      date: "Today",
      time: "3:00 PM - 4:30 PM",
      instructor: "Dr. Sarah Johnson",
      status: "live",
      participants: 156,
      agenda: [
        "Review of PID Controllers",
        "Advanced Motion Planning",
        "Sensor Integration",
        "Live Demo: Robot Arm Control",
        "Q&A Session"
      ]
    },
    {
      id: 2,
      title: "Deep Learning for Computer Vision",
      course: "Applied AI & Machine Learning",
      date: "Today",
      time: "5:00 PM - 6:30 PM",
      instructor: "Prof. Michael Chen",
      status: "upcoming",
      participants: 243,
      agenda: [
        "CNN Architecture Review",
        "Object Detection Algorithms",
        "Image Segmentation Techniques",
        "Hands-on: Building a Vision Model",
        "Project Discussion"
      ]
    },
    {
      id: 3,
      title: "IoT Security Best Practices",
      course: "IoT & IIoT for Smart Systems",
      date: "Tomorrow",
      time: "2:00 PM - 3:30 PM",
      instructor: "Dr. Emily Rodriguez",
      status: "upcoming",
      participants: 187,
      agenda: [
        "IoT Threat Landscape",
        "Encryption & Authentication",
        "Secure Device Management",
        "Case Studies",
        "Security Implementation Lab"
      ]
    }
  ];

  // Student's enrolled program
  const currentInternship = {
    title: "Smart Robotics & Industry 4.0 Automation Internship",
    progress: 65,
    startDate: "Jan 15, 2025",
    endDate: "Jun 30, 2025",
    nextClass: "Today, 3:00 PM",
    completedModules: 4,
    totalModules: 6,
    assignments: {
      completed: 12,
      pending: 3,
      total: 15
    }
  };

  const handleEnroll = (program) => {
    setSelectedCourse(program);
    setShowEnrollForm(true);
  };

  const handleJoinClass = (classInfo) => {
    setSelectedClass(classInfo);
    setShowClassroom(true);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatMessages([...chatMessages, {
        user: "John Doe",
        message: chatMessage,
        time: new Date().toLocaleTimeString()
      }]);
      setChatMessage('');
    }
  };

  const closeEnrollForm = () => {
    setShowEnrollForm(false);
    setSelectedCourse(null);
  };

  const closeClassroom = () => {
    setShowClassroom(false);
    setSelectedClass(null);
  };

  // Enrollment Form Component
  const EnrollmentForm = () => (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Enroll in Program</h2>
          <button onClick={closeEnrollForm} style={styles.closeButton}>
            <FiX size={24} />
          </button>
        </div>
        
        <div style={styles.formContent}>
          <div style={styles.programSummary}>
            <h3 style={{...styles.programTitle, color: selectedCourse?.color}}>{selectedCourse?.title}</h3>
            <div style={styles.programMeta}>
              <span><FiClock size={16} /> {selectedCourse?.duration}</span>
              <span><FiUsers size={16} /> {selectedCourse?.enrolled} enrolled</span>
              <span><FiAward size={16} /> {selectedCourse?.level}</span>
            </div>
          </div>

          <form style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input type="text" style={styles.input} placeholder="Enter your full name" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" style={styles.input} placeholder="your.email@example.com" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number</label>
              <input type="tel" style={styles.input} placeholder="+91 XXXXX XXXXX" />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Current Education Level</label>
              <select style={styles.input}>
                <option>Select your level</option>
                <option>Undergraduate</option>
                <option>Graduate</option>
                <option>Postgraduate</option>
                <option>Professional</option>
              </select>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>Why do you want to enroll?</label>
              <textarea style={{...styles.input, minHeight: '100px'}} placeholder="Tell us about your goals and motivation..."></textarea>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.checkboxLabel}>
                <input type="checkbox" style={styles.checkbox} />
                I agree to the terms and conditions
              </label>
            </div>
            
            <div style={styles.formActions}>
              <button type="button" onClick={closeEnrollForm} style={styles.cancelButton}>Cancel</button>
              <button type="submit" style={styles.submitButton}>Complete Enrollment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  // Virtual Classroom Component
  const VirtualClassroom = () => (
    <div style={styles.classroomOverlay}>
      <div style={styles.classroomContainer}>
        {/* Classroom Header */}
        <div style={styles.classroomHeader}>
          <div>
            <h2 style={styles.classroomTitle}>{selectedClass?.title}</h2>
            <p style={styles.classroomSubtitle}>Instructor: {selectedClass?.instructor}</p>
          </div>
          <div style={styles.classroomActions}>
            <button style={styles.classroomButton}>
              <FiVideo size={20} />
            </button>
            <button style={styles.classroomButton}>
              <FiBell size={20} />
            </button>
            <button onClick={closeClassroom} style={styles.closeClassroomButton}>
              <FiX size={24} />
            </button>
          </div>
        </div>

        {/* Main Classroom Area */}
        <div style={styles.classroomMain}>
          {/* Video Area */}
          <div style={styles.videoArea}>
            <div style={styles.mainVideo}>
              <div style={styles.videoPlaceholder}>
                <FiPlayCircle size={64} color="#fff" />
                <p style={styles.videoPlaceholderText}>Live Session in Progress</p>
                <div style={styles.liveIndicator}>
                  <span style={styles.liveDot}></span>
                  LIVE
                </div>
              </div>
            </div>
            
            {/* Class Agenda */}
            <div style={styles.agendaPanel}>
              <h3 style={styles.agendaTitle}>Today's Agenda</h3>
              <ul style={styles.agendaList}>
                {selectedClass?.agenda.map((item, index) => (
                  <li key={index} style={styles.agendaItem}>
                    <FiCheckCircle size={16} color="#10B981" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chat & Resources Sidebar */}
          <div style={styles.classroomSidebar}>
            {/* Participants */}
            <div style={styles.sidebarSection}>
              <div style={styles.sidebarHeader}>
                <h4 style={styles.sidebarTitle}>Participants</h4>
                <span style={styles.participantCount}>
                  <FiUsers size={16} /> {selectedClass?.participants}
                </span>
              </div>
            </div>

            {/* Chat */}
            <div style={styles.chatSection}>
              <h4 style={styles.sidebarTitle}>Live Chat</h4>
              <div style={styles.chatMessages}>
                {chatMessages.map((msg, index) => (
                  <div key={index} style={styles.chatMessage}>
                    <span style={styles.chatUser}>{msg.user}</span>
                    <p style={styles.chatText}>{msg.message}</p>
                    <span style={styles.chatTime}>{msg.time}</span>
                  </div>
                ))}
                {chatMessages.length === 0 && (
                  <p style={styles.noChatMessages}>No messages yet. Start the conversation!</p>
                )}
              </div>
              <div style={styles.chatInput}>
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  style={styles.chatInputField}
                />
                <button onClick={handleSendMessage} style={styles.sendButton}>
                  <FiSend size={20} />
                </button>
              </div>
            </div>

            {/* Resources */}
            <div style={styles.resourcesSection}>
              <h4 style={styles.sidebarTitle}>Class Resources</h4>
              <div style={styles.resourcesList}>
                <button style={styles.resourceButton}>
                  <FiFileText size={16} />
                  Lecture Slides.pdf
                  <FiDownload size={16} />
                </button>
                <button style={styles.resourceButton}>
                  <FiFileText size={16} />
                  Code Examples.zip
                  <FiDownload size={16} />
                </button>
                <button style={styles.resourceButton}>
                  <FiFileText size={16} />
                  Assignment Brief.pdf
                  <FiDownload size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <div>
      {/* Welcome Header */}
      <header style={styles.welcomeHeader}>
        <h2 style={styles.welcomeTitle}>Welcome back, John!</h2>
        <p style={styles.welcomeSubtitle}>Here's your learning overview for today.</p>
      </header>

      {/* Current Internship Card */}
      <div style={styles.internshipCard}>
        <h2 style={styles.cardTitle}>{currentInternship.title}</h2>
        
        <div style={styles.progressContainer}>
          <div style={styles.progressInfo}>
            <span style={styles.progressLabel}>Overall Progress</span>
            <span style={styles.progressValue}>{currentInternship.progress}%</span>
          </div>
          <div style={styles.progressBar}>
            <div style={{...styles.progressFill, width: `${currentInternship.progress}%`}}></div>
          </div>
          <div style={styles.moduleProgress}>
            <span style={styles.moduleText}>
              Completed {currentInternship.completedModules} of {currentInternship.totalModules} modules
            </span>
          </div>
        </div>
        
        <div style={styles.internshipDetails}>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Duration</span>
            <span style={styles.detailValue}>{currentInternship.startDate} - {currentInternship.endDate}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Next Class</span>
            <span style={styles.detailValue}>{currentInternship.nextClass}</span>
          </div>
          <div style={styles.detailItem}>
            <span style={styles.detailLabel}>Assignments</span>
            <span style={styles.detailValue}>
              {currentInternship.assignments.completed}/{currentInternship.assignments.total} completed
            </span>
          </div>
        </div>
        
        <div style={styles.quickLinks}>
          <button style={styles.quickLinkButton} onClick={() => setCurrentPage('materials')}>
            <FiFileText size={18} />
            Course Materials
          </button>
          <button style={styles.quickLinkButton} onClick={() => setCurrentPage('schedule')}>
            <FiCalendar size={18} />
            Class Schedule
          </button>
          <button style={styles.quickLinkButton} onClick={() => setCurrentPage('recordings')}>
            <FiVideo size={18} />
            Recordings
          </button>
        </div>
      </div>

      {/* Live Classes Section */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Live Classes</h2>
        <div style={styles.classesContainer}>
          {liveClasses.map(cls => (
            <div key={cls.id} style={styles.classCard}>
              <div style={styles.classHeader}>
                <div>
                  <h3 style={styles.classTitle}>{cls.title}</h3>
                  <p style={styles.classCourse}>{cls.course}</p>
                </div>
                {cls.status === 'live' && (
                  <div style={styles.liveIndicator}>
                    <span style={styles.liveDot}></span>
                    LIVE
                  </div>
                )}
              </div>
              <div style={styles.classDetails}>
                <div style={styles.classDetail}>
                  <span style={styles.classLabel}>Date:</span>
                  <span style={styles.classValue}>{cls.date}</span>
                </div>
                <div style={styles.classDetail}>
                  <span style={styles.classLabel}>Time:</span>
                  <span style={styles.classValue}>{cls.time}</span>
                </div>
                <div style={styles.classDetail}>
                  <span style={styles.classLabel}>Instructor:</span>
                  <span style={styles.classValue}>{cls.instructor}</span>
                </div>
                <div style={styles.classDetail}>
                  <span style={styles.classLabel}>Participants:</span>
                  <span style={styles.classValue}>{cls.participants} joined</span>
                </div>
              </div>
             <button
  onClick={() => router.push('/coming-soon')}
  style={{
    ...styles.joinButton,
    backgroundColor: cls.status === 'live' ? '#10B981' : '#1640FF'
  }}
>
  <FiPlayCircle size={16} />
  {cls.status === 'live' ? 'Join Now' : 'View Details'}
</button>

            </div>
          ))}
        </div>
      </div>

  
      {/* Performance Analytics */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <FiBarChart2 size={28} style={{verticalAlign: 'middle', marginRight: '12px'}} />
          Performance Analytics
        </h2>
        <div style={styles.analyticsContainer}>
          <div style={styles.analyticsMainCard}>
            <h3 style={styles.analyticsCardTitle}>Weekly Learning Activity</h3>
            <div style={styles.chartContainer}>
              {performanceData.weeklyActivity.map((day, index) => (
                <div key={index} style={styles.chartBarContainer}>
                  <div style={styles.chartBar}>
                    <div style={{
                      ...styles.chartBarFill,
                      height: `${(day.hours / 6) * 100}%`
                    }}></div>
                  </div>
                  <span style={styles.chartLabel}>{day.day}</span>
                  <span style={styles.chartValue}>{day.hours}h</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.analyticsStatsGrid}>
            <div style={styles.statCardAnalytics}>
              <FiClock size={32} color="#1640FF" />
              <div style={styles.statValue}>{performanceData.totalHours}h</div>
              <div style={styles.statTitle}>This Week</div>
            </div>
            <div style={styles.statCardAnalytics}>
              <FiTarget size={32} color="#10B981" />
              <div style={styles.statValue}>{performanceData.completionRate}%</div>
              <div style={styles.statTitle}>Completion Rate</div>
            </div>
            <div style={styles.statCardAnalytics}>
              <FiTrendingUp size={32} color="#EF7C00" />
              <div style={styles.statValue}>{performanceData.averageScore}%</div>
              <div style={styles.statTitle}>Average Score</div>
            </div>
            <div style={styles.statCardAnalytics}>
              <FiAward size={32} color="#8B5CF6" />
              <div style={styles.statValue}>{performanceData.rank}</div>
              <div style={styles.statTitle}>Class Rank</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grades Overview */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <FiStar size={28} style={{verticalAlign: 'middle', marginRight: '12px'}} />
          Grades Overview
        </h2>
        <div style={styles.gradesGrid}>
          {grades.map(grade => (
            <div key={grade.id} style={styles.gradeCard}>
              <h3 style={styles.gradeCardTitle}>{grade.course}</h3>
              <div style={styles.gradeMainScore}>
                <div style={styles.gradeScoreCircle}>
                  <svg width="120" height="120">
                    <circle cx="60" cy="60" r="54" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                    <circle 
                      cx="60" 
                      cy="60" 
                      r="54" 
                      fill="none" 
                      stroke="#1640FF" 
                      strokeWidth="12"
                      strokeDasharray={`${(grade.avgGrade / 100) * 339.29} 339.29`}
                      strokeLinecap="round"
                      transform="rotate(-90 60 60)"
                    />
                  </svg>
                  <div style={styles.gradeScoreText}>
                    <span style={styles.gradeScoreNumber}>{grade.avgGrade}</span>
                    <span style={styles.gradeScoreLabel}>Average</span>
                  </div>
                </div>
              </div>
              <div style={styles.gradeStats}>
                <div style={styles.gradeStat}>
                  <span style={styles.gradeStatLabel}>Completed</span>
                  <span style={styles.gradeStatValue}>{grade.completed}/{grade.assignments}</span>
                </div>
                <div style={styles.gradeStat}>
                  <span style={styles.gradeStatLabel}>Last Grade</span>
                  <span style={{
                    ...styles.gradeStatValue,
                    color: grade.trend === 'up' ? '#10B981' : '#EF4444'
                  }}>
                    {grade.lastGrade}%
                    {grade.trend === 'up' ? ' ↑' : ' ↓'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* Available Internships */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Available Internships</h2>
        <div style={styles.coursesGrid}>
          {internships.map(program => (
            <div key={program.id} style={styles.courseCard}>
              <div style={styles.courseHeader}>
                <h3 style={{...styles.courseTitle, color: program.color}}>{program.title}</h3>
            <div style={{ color: '#EF7C00' }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
  <FiStar size={18} color="#EF7C00" /> {program.rating}
</span>
                </div>
              </div>
              <p style={styles.courseProvider}>{program.instructor}</p>
              <p style={styles.courseDescription}>{program.description}</p>
              
              <div style={styles.courseMeta}>
                <span style={styles.metaItem}>
                  <FiClock size={14} />
                  {program.duration}
                </span>
                <span style={styles.metaItem}>
                  <FiUsers size={14} />
                  {program.enrolled} enrolled
                </span>
                <span style={styles.metaItem}>
                  <FiAward size={14} />
                  {program.level}
                </span>
              </div>

              <div style={styles.skillTags}>
                {program.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} style={styles.skillTag}>{skill}</span>
                ))}
              </div>
              
              <div style={styles.courseActions}>
                <button 
                  onClick={() => {
                    setSelectedCourse(program);
                    setCurrentPage('courseDetail');
                  }}
                  style={styles.knowMoreButton}
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleEnroll(program)}
                  style={{...styles.enrollButton, backgroundColor: program.color}}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Courses */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Professional Diploma Courses</h2>
        <div style={styles.coursesGrid}>
          {courses.map(program => (
            <div key={program.id} style={styles.courseCard}>
              <div style={styles.courseHeader}>
                <h3 style={{...styles.courseTitle, color: program.color}}>{program.title}</h3>
                <div style={styles.courseRating}>
                 <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
  <FiStar size={18} color="#154afaff" /> {program.rating}
</span>
                </div>
              </div>
              <p style={styles.courseProvider}>{program.instructor}</p>
              <p style={styles.courseDescription}>{program.description}</p>
              
              <div style={styles.courseMeta}>
                <span style={styles.metaItem}>
                  <FiClock size={14} />
                  {program.duration}
                </span>
                <span style={styles.metaItem}>
                  <FiUsers size={14} />
                  {program.enrolled} enrolled
                </span>
                <span style={styles.metaItem}>
                  <FiAward size={14} />
                  {program.level}
                </span>
              </div>

              <div style={styles.skillTags}>
                {program.skills.slice(0, 3).map((skill, index) => (
                  <span key={index} style={styles.skillTag}>{skill}</span>
                ))}
              </div>
              
              <div style={styles.courseActions}>
                <button 
                  onClick={() => {
                    setSelectedCourse(program);
                    setCurrentPage('courseDetail');
                  }}
                  style={styles.knowMoreButton}
                >
                  View Details
                </button>
                <button 
                  onClick={() => handleEnroll(program)}
                  style={{...styles.enrollButton, backgroundColor: program.color}}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Materials */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>
          <FiBook size={28} style={{verticalAlign: 'middle', marginRight: '12px'}} />
          Study Materials & Resources
        </h2>
        <div style={styles.materialsGrid}>
          {studyMaterials.map(material => (
            <div key={material.id} style={styles.materialCard}>
              <div style={styles.materialIcon}>
                {material.type === 'slides' && <FiMonitor size={32} color="#1640FF" />}
                {material.type === 'pdf' && <FiFileText size={32} color="#EF4444" />}
                {material.type === 'code' && <FiCode size={32} color="#10B981" />}
                {material.type === 'video' && <FiVideo size={32} color="#8B5CF6" />}
              </div>
              <div style={styles.materialContent}>
                <h3 style={styles.materialTitle}>{material.title}</h3>
                <p style={styles.materialCourse}>{material.course}</p>
                <div style={styles.materialMeta}>
                  <span style={styles.materialMetaItem}>
                    <FiDatabase size={14} />
                    {material.size}
                  </span>
                  <span style={styles.materialMetaItem}>
                    <FiCalendar size={14} />
                    {material.date}
                  </span>
                  <span style={styles.materialMetaItem}>
                    <FiDownload size={14} />
                    {material.downloads} downloads
                  </span>
                </div>
              </div>
              <button style={styles.downloadButton}>
                <FiDownload size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>

      </div>
  );

  // Course Detail View
  const CourseDetailView = () => (
    <div>
      <button 
        onClick={() => setCurrentPage('dashboard')}
        style={styles.backButton}
      >
        ← Back to Dashboard
      </button>
      
      <div style={styles.detailContainer}>
        <div style={styles.detailHeader}>
          <h1 style={{...styles.detailTitle, color: selectedCourse?.color}}>{selectedCourse?.title}</h1>
          <div style={styles.detailMeta}>
            <span style={styles.detailMetaItem}>
              <FiClock size={20} />
              {selectedCourse?.duration}
            </span>
            <span style={styles.detailMetaItem}>
              <FiAward size={20} />
              {selectedCourse?.level}
            </span>
            <span style={styles.detailMetaItem}>
              <FiUsers size={20} />
              {selectedCourse?.enrolled} students
            </span>
           <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
  <FiActivity size={16} />
  {program.rating}
</span>
          </div>
        </div>

        <div style={styles.detailContent}>
          <div style={styles.detailMain}>
            <section style={styles.detailSection}>
              <h2 style={styles.detailSectionTitle}>About This Program</h2>
              <p style={styles.detailDescription}>{selectedCourse?.description}</p>
            </section>

            <section style={styles.detailSection}>
              <h2 style={styles.detailSectionTitle}>What You'll Learn</h2>
              <ul style={styles.moduleList}>
                {selectedCourse?.modules.map((module, index) => (
                  <li key={index} style={styles.moduleItem}>
                    <FiCheckCircle size={20} color="#10B981" />
                    <span>{module}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section style={styles.detailSection}>
              <h2 style={styles.detailSectionTitle}>Skills You'll Gain</h2>
              <div style={styles.skillTagsLarge}>
                {selectedCourse?.skills.map((skill, index) => (
                  <span key={index} style={styles.skillTagLarge}>{skill}</span>
                ))}
              </div>
            </section>

            <section style={styles.detailSection}>
              <h2 style={styles.detailSectionTitle}>Instructor</h2>
              <div style={styles.instructorCard}>
                <div style={styles.instructorAvatar}>
                  <FiUser size={32} />
                </div>
                <div>
                  <h3 style={styles.instructorName}>{selectedCourse?.instructor}</h3>
                  <p style={styles.instructorBio}>Expert instructor with years of industry experience</p>
                </div>
              </div>
            </section>
          </div>

          <div style={styles.detailSidebar}>
            <div style={styles.enrollCard}>
              <h3 style={styles.enrollCardTitle}>Ready to start?</h3>
              <button 
                onClick={() => handleEnroll(selectedCourse)}
                style={{...styles.enrollButtonLarge, backgroundColor: selectedCourse?.color}}
              >
                Enroll Now
              </button>
              <div style={styles.enrollFeatures}>
                <div style={styles.enrollFeature}>
                  <FiCheckCircle size={16} color="#10B981" />
                  <span>Lifetime Access</span>
                </div>
                <div style={styles.enrollFeature}>
                  <FiCheckCircle size={16} color="#10B981" />
                  <span>Certificate of Completion</span>
                </div>
                <div style={styles.enrollFeature}>
                  <FiCheckCircle size={16} color="#10B981" />
                  <span>Live Sessions & Support</span>
                </div>
                <div style={styles.enrollFeature}>
                  <FiCheckCircle size={16} color="#10B981" />
                  <span>Hands-on Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={styles.platform}>
    
      {/* Main Content */}
      <main style={styles.mainContent}>
        {currentPage === 'dashboard' && <DashboardView />}
        {currentPage === 'courseDetail' && <CourseDetailView />}
      </main>

      {/* Modals */}
      {showEnrollForm && <EnrollmentForm />}
      {showClassroom && <VirtualClassroom />}
    </div>
  );
};

// Styles
const styles = {
  platform: {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '#F8F9FC',
    minHeight: '100vh',
    color: '#1F2937'
  },
  navbar: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #E5E7EB',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  },
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '32px'
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  logoIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    background: 'linear-gradient(135deg, #1640FF 0%, #0D2DB8 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoText: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1640FF'
  },
  navLinks: {
    display: 'flex',
    gap: '8px',
    flex: 1
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#6B7280',
    fontSize: '15px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  navLinkActive: {
    backgroundColor: '#EBF5FF',
    color: '#1640FF'
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  iconButton: {
    width: '40px',
    height: '40px',
    border: 'none',
    borderRadius: '50%',
    backgroundColor: '#F3F4F6',
    color: '#6B7280',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  userAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    position: 'relative'
  },
  userMenu: {
    position: 'absolute',
    top: '48px',
    right: '0',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    padding: '8px',
    minWidth: '180px',
    zIndex: 10
  },
  userMenuItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    width: '100%',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'transparent',
    color: '#4B5563',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    textAlign: 'left'
  },
  mainContent: {
    padding: '32px 24px',
    maxWidth: '1400px',
    margin: '0 auto'
  },
welcomeHeader: {
  marginTop: 0,
  paddingTop: 0,
  borderBottom: '1px solid #F3F4F6'
},

welcomeTitle: {
  fontFamily: "'Playfair Display', serif",
  fontSize: '36px',
  fontWeight: '700',
  color: '#000',               // BLACK COLOR
  margin: '0 0 8px 0',
  letterSpacing: '-0.5px'
},

  welcomeSubtitle: {
    fontSize: '17px',
    color: '#6B7280',
    margin: 0,
    fontWeight: '400',
    letterSpacing: '0.2px'
  },
  internshipCard: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '32px',
    marginBottom: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #EBF5FF'
  },
  cardTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '24px',
    fontWeight: '600',
    color: '#1640FF',
    margin: '0 0 24px 0'
  },
  progressContainer: {
    marginBottom: '24px'
  },
  progressInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '8px'
  },
  progressLabel: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500'
  },
  progressValue: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1640FF'
  },
  progressBar: {
    height: '12px',
    backgroundColor: '#E5E7EB',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(90deg, #1640FF 0%, #0D2DB8 100%)',
    borderRadius: '6px',
    transition: 'width 1s ease-in-out'
  },
  moduleProgress: {
    marginTop: '8px'
  },
  moduleText: {
    fontSize: '13px',
    color: '#6B7280'
  },
  internshipDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '24px',
    marginBottom: '24px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '16px'
  },
  detailItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  detailLabel: {
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  detailValue: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937'
  },
  quickLinks: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  quickLinkButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    border: '2px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  section: {
    marginBottom: '48px'
  },
  sectionTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '28px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 24px 0'
  },
  classesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
    gap: '24px'
  },
  classCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    transition: 'all 0.3s'
  },
  classHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  classTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 6px 0'
  },
  classCourse: {
    fontSize: '13px',
    color: '#6B7280',
    margin: 0
  },
  liveIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: '20px',
    backgroundColor: '#FEE2E2',
    color: '#DC2626',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '0.5px'
  },
  liveDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#DC2626',
    animation: 'pulse 2s infinite'
  },
  classDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },
  classDetail: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  classLabel: {
    fontSize: '14px',
    color: '#6B7280',
    fontWeight: '500',
    minWidth: '80px'
  },
  classValue: {
    fontSize: '14px',
    color: '#1F2937',
    fontWeight: '500'
  },
  joinButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  coursesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px'
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    transition: 'all 0.3s',
    display: 'flex',
    flexDirection: 'column'
  },
  courseHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  courseTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '18px',
    fontWeight: '600',
    color: '#1640FF',
    margin: 0,
    flex: 1,
    lineHeight: '1.4'
  },
  courseRating: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0b36f5ff',
    marginLeft: '12px'
  },
  courseProvider: {
    fontSize: '14px',
    color: '#6B7280',
    margin: '0 0 12px 0',
    fontWeight: '500'
  },
  courseDescription: {
    fontSize: '14px',
    color: '#4B5563',
    margin: '0 0 16px 0',
    lineHeight: '1.6',
    flex: 1
  },
  courseMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '16px',
    flexWrap: 'wrap'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500'
  },
  skillTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginBottom: '20px'
  },
  skillTag: {
    padding: '6px 12px',
    borderRadius: '6px',
    backgroundColor: '#F3F4F6',
    color: '#4B5563',
    fontSize: '12px',
    fontWeight: '500'
  },
  courseActions: {
    display: 'flex',
    gap: '12px'
  },
  knowMoreButton: {
    flex: 1,
    padding: '12px',
    border: '2px solid #E5E7EB',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  enrollButton: {
    flex: 1,
    padding: '12px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#EF7C00',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  },
  modalContent: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 32px',
    borderBottom: '2px solid #F3F4F6'
  },
  modalTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: '#1F2937',
    margin: 0
  },
  closeButton: {
    border: 'none',
    backgroundColor: 'transparent',
    color: '#6B7280',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '8px',
    transition: 'all 0.2s'
  },
  formContent: {
    padding: '32px'
  },
  programSummary: {
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '16px',
    marginBottom: '32px'
  },
  programTitle: {
    fontSize: '18px',
    fontWeight: '600',
    margin: '0 0 12px 0'
  },
  programMeta: {
    display: 'flex',
    gap: '16px',
    fontSize: '14px',
    color: '#6B7280',
    flexWrap: 'wrap'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151'
  },
  input: {
    padding: '12px 16px',
    border: '2px solid #E5E7EB',
    borderRadius: '10px',
    fontSize: '15px',
    color: '#1F2937',
    transition: 'all 0.2s',
    fontFamily: "'Inter', sans-serif"
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#4B5563',
    cursor: 'pointer'
  },
  checkbox: {
    width: '18px',
    height: '18px',
    cursor: 'pointer'
  },
  formActions: {
    display: 'flex',
    gap: '12px',
    marginTop: '12px'
  },
  cancelButton: {
    flex: 1,
    padding: '14px',
    border: '2px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#6B7280',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  submitButton: {
    flex: 2,
    padding: '14px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  classroomOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1F2937',
    zIndex: 1000
  },
  classroomContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  classroomHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 32px',
    backgroundColor: '#374151',
    borderBottom: '2px solid #4B5563'
  },
  classroomTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    margin: 0
  },
  classroomSubtitle: {
    fontSize: '14px',
    color: '#D1D5DB',
    margin: '4px 0 0 0'
  },
  classroomActions: {
    display: 'flex',
    gap: '12px',
    alignItems: 'center'
  },
  classroomButton: {
    width: '44px',
    height: '44px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#4B5563',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  closeClassroomButton: {
    width: '44px',
    height: '44px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#DC2626',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  classroomMain: {
    flex: 1,
    display: 'flex',
    gap: '24px',
    padding: '24px',
    overflow: 'hidden'
  },
  videoArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  mainVideo: {
    flex: 1,
    backgroundColor: '#000000',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative'
  },
  videoPlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px'
  },
  videoPlaceholderText: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '600'
  },
  agendaPanel: {
    backgroundColor: '#374151',
    borderRadius: '16px',
    padding: '24px'
  },
  agendaTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 16px 0'
  },
  agendaList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  agendaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: '#D1D5DB'
  },
  classroomSidebar: {
    width: '360px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  sidebarSection: {
    backgroundColor: '#374151',
    borderRadius: '16px',
    padding: '20px'
  },
  sidebarHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  sidebarTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 16px 0'
  },
  participantCount: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#D1D5DB'
  },
  chatSection: {
    backgroundColor: '#374151',
    borderRadius: '16px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: '0'
  },
  chatMessages: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  chatMessage: {
    padding: '12px',
    backgroundColor: '#4B5563',
    borderRadius: '12px'
  },
  chatUser: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#60A5FA',
    marginBottom: '4px',
    display: 'block'
  },
  chatText: {
    fontSize: '14px',
    color: '#E5E7EB',
    margin: '0 0 4px 0'
  },
  chatTime: {
    fontSize: '11px',
    color: '#9CA3AF'
  },
  noChatMessages: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: '14px',
    padding: '20px'
  },
  chatInput: {
    display: 'flex',
    gap: '8px'
  },
  chatInputField: {
    flex: 1,
    padding: '12px 16px',
    border: '2px solid #4B5563',
    borderRadius: '12px',
    backgroundColor: '#1F2937',
    color: '#ffffff',
    fontSize: '14px',
    fontFamily: "'Inter', sans-serif"
  },
  sendButton: {
    width: '44px',
    height: '44px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  resourcesSection: {
    backgroundColor: '#374151',
    borderRadius: '16px',
    padding: '20px'
  },
  resourcesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  resourceButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    padding: '12px 16px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#4B5563',
    color: '#E5E7EB',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s',
    textAlign: 'left'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 20px',
    border: '2px solid #E5E7EB',
    borderRadius: '12px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '24px',
    transition: 'all 0.2s'
  },
  detailContainer: {
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  detailHeader: {
    marginBottom: '32px',
    paddingBottom: '32px',
    borderBottom: '2px solid #F3F4F6'
  },
  detailTitle: {
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 16px 0',
    lineHeight: '1.3'
  },
  detailMeta: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap'
  },
  detailMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    color: '#6B7280',
    fontWeight: '500'
  },
  detailContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 340px',
    gap: '40px'
  },
  detailMain: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  },
  detailSection: {
    padding: '0'
  },
  detailSectionTitle: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 16px 0'
  },
  detailDescription: {
    fontSize: '16px',
    color: '#4B5563',
    lineHeight: '1.7',
    margin: 0
  },
  moduleList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  moduleItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    fontSize: '15px',
    color: '#4B5563',
    lineHeight: '1.6'
  },
  skillTagsLarge: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  skillTagLarge: {
    padding: '10px 18px',
    borderRadius: '10px',
    backgroundColor: '#EBF5FF',
    color: '#1640FF',
    fontSize: '14px',
    fontWeight: '600'
  },
  instructorCard: {
    display: 'flex',
    gap: '16px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '16px'
  },
  instructorAvatar: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  instructorName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 6px 0'
  },
  instructorBio: {
    fontSize: '14px',
    color: '#6B7280',
    margin: 0,
    lineHeight: '1.5'
  },
  detailSidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  enrollCard: {
    position: 'sticky',
    top: '100px',
    backgroundColor: '#F9FAFB',
    borderRadius: '20px',
    padding: '32px',
    border: '2px solid #E5E7EB'
  },
  enrollCardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 20px 0'
  },
  enrollButtonLarge: {
    width: '100%',
    padding: '16px',
    border: 'none',
    borderRadius: '12px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    marginBottom: '24px',
    transition: 'all 0.2s'
  },
  enrollFeatures: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  enrollFeature: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    color: '#4B5563'
  },
  // Learning Path Styles
  learningPathContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  pathCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    backgroundColor: '#F9FAFB',
    borderRadius: '16px',
    position: 'relative',
    transition: 'all 0.3s'
  },
  pathNumber: {
    width: '56px',
    height: '56px',
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    border: '3px solid #E5E7EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '20px',
    color: '#6B7280',
    flexShrink: 0
  },
  pathNumberText: {
    fontFamily: "'Poppins', sans-serif"
  },
  pathContent: {
    flex: 1
  },
  pathTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 8px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  pathMeta: {
    display: 'flex',
    gap: '16px',
    marginBottom: '12px'
  },
  pathLessons: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '14px',
    color: '#6B7280'
  },
  pathStatus: {
    fontSize: '14px',
    fontWeight: '600'
  },
  pathProgress: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  pathProgressBar: {
    flex: 1,
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden'
  },
  pathProgressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s ease'
  },
  pathProgressText: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#1640FF',
    minWidth: '40px'
  },
  pathConnector: {
    position: 'absolute',
    left: '50px',
    bottom: '-16px',
    width: '3px',
    height: '16px',
    backgroundColor: '#E5E7EB'
  },
  // Assignment Styles
  assignmentsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '24px'
  },
  assignmentCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    transition: 'all 0.3s'
  },
  assignmentHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px'
  },
  assignmentTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 6px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  assignmentCourse: {
    fontSize: '13px',
    color: '#6B7280',
    margin: 0
  },
  assignmentBadge: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  assignmentDescription: {
    fontSize: '14px',
    color: '#4B5563',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  assignmentFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6'
  },
  assignmentMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: 1
  },
  assignmentMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500'
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  viewButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 18px',
    border: '2px solid #E5E7EB',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#4B5563',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap'
  },
  feedbackBox: {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: '#FEF3C7',
    borderRadius: '12px',
    borderLeft: '4px solid #F59E0B'
  },
  feedbackText: {
    fontSize: '14px',
    color: '#78350F',
    margin: '8px 0 0 0',
    lineHeight: '1.6'
  },
  // Performance Analytics Styles
  analyticsContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px'
  },
  analyticsMainCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  analyticsCardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 24px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  chartContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: '240px',
    gap: '12px'
  },
  chartBarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    gap: '8px'
  },
  chartBar: {
    width: '100%',
    height: '180px',
    backgroundColor: '#F3F4F6',
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    alignItems: 'flex-end',
    overflow: 'hidden'
  },
  chartBarFill: {
    width: '100%',
    background: 'linear-gradient(180deg, #1640FF 0%, #0D2DB8 100%)',
    borderRadius: '8px 8px 0 0',
    transition: 'height 0.5s ease'
  },
  chartLabel: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#6B7280'
  },
  chartValue: {
    fontSize: '12px',
    color: '#9CA3AF'
  },
  analyticsStatsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  },
  statCardAnalytics: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '12px'
  },
  // Grades Styles
  gradesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px'
  },
  gradeCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    textAlign: 'center'
  },
  gradeCardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1640FF',
    margin: '0 0 24px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  gradeMainScore: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px'
  },
  gradeScoreCircle: {
    position: 'relative',
    width: '120px',
    height: '120px'
  },
  gradeScoreText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  gradeScoreNumber: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: "'Poppins', sans-serif"
  },
  gradeScoreLabel: {
    fontSize: '12px',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  gradeStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    paddingTop: '24px',
    borderTop: '2px solid #F3F4F6'
  },
  gradeStat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px'
  },
  gradeStatLabel: {
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500'
  },
  gradeStatValue: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1F2937',
    fontFamily: "'Poppins', sans-serif"
  },
  // Achievements Styles
  achievementsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '20px'
  },
  achievementCard: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    textAlign: 'center',
    transition: 'all 0.3s'
  },
  achievementIcon: {
    fontSize: '48px',
    marginBottom: '16px'
  },
  achievementTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 8px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  achievementDescription: {
    fontSize: '13px',
    color: '#6B7280',
    lineHeight: '1.5',
    marginBottom: '12px'
  },
  achievementDate: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontSize: '12px',
    color: '#9CA3AF',
    fontWeight: '500'
  },
  // Study Materials Styles
  materialsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
    gap: '20px'
  },
  materialCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'all 0.3s'
  },
  materialIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: '#F9FAFB',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  materialContent: {
    flex: 1
  },
  materialTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 4px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  materialCourse: {
    fontSize: '13px',
    color: '#6B7280',
    marginBottom: '8px'
  },
  materialMeta: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  materialMetaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontSize: '12px',
    color: '#9CA3AF'
  },
  downloadButton: {
    width: '44px',
    height: '44px',
    border: 'none',
    borderRadius: '12px',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s',
    flexShrink: 0
  },
  // Announcements Styles
  announcementsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  announcementCard: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6'
  },
  announcementHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  priorityBadge: {
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: '700'
  },
  announcementDate: {
    fontSize: '13px',
    color: '#9CA3AF'
  },
  announcementTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 12px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  announcementMessage: {
    fontSize: '14px',
    color: '#4B5563',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  announcementFooter: {
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6'
  },
  announcementAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '13px',
    color: '#6B7280',
    fontWeight: '500'
  },
  // Forum Styles
  forumContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  forumPost: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    border: '2px solid #F3F4F6',
    transition: 'all 0.3s'
  },
  forumPostHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px'
  },
  forumPostAuthor: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  },
  forumAuthorAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  forumAuthorName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#1F2937',
    display: 'block'
  },
  forumPostTime: {
    fontSize: '12px',
    color: '#9CA3AF',
    display: 'block'
  },
  forumPostCourse: {
    fontSize: '12px',
    color: '#1640FF',
    fontWeight: '600',
    backgroundColor: '#EBF5FF',
    padding: '4px 12px',
    borderRadius: '12px'
  },
  forumPostTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1F2937',
    margin: '0 0 12px 0',
    fontFamily: "'Poppins', sans-serif"
  },
  forumPostExcerpt: {
    fontSize: '14px',
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '16px'
  },
  forumPostFooter: {
    display: 'flex',
    gap: '12px',
    paddingTop: '16px',
    borderTop: '1px solid #F3F4F6'
  },
  forumButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    border: '2px solid #E5E7EB',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#6B7280',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

export default ELearningPlatform;