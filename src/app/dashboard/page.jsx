"use client";
import React, { useState, useEffect } from 'react';
import {
  Users,
  BookOpen,
  Video,
  CheckCircle,
  Bell,
  FileText,
  Upload,
  Clipboard,
  UserCheck,
  Volume2,
  Eye,
  Trash2,
  Plus,
  Clock,
  TrendingUp,
  Download,
  ChevronRight,
  Calendar,
  Award,
  BarChart3
} from 'lucide-react';
import { useRouter } from 'next/navigation';
const InstructorDashboard = () => {
  const PRIMARY = "#1640FF";
  const ACCENT = "#EF7C00";
  const BACKGROUND = "#F8F9FF";
  
  const [currentDate, setCurrentDate] = useState(new Date());
  const [instructorName] = useState("Anbarasi S");
  const [notifications] = useState(5);
  const [showNotifications, setShowNotifications] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [showMaterials, setShowMaterials] = useState(false);
  const [actionMessage, setActionMessage] = useState('');
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);
  
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
  
  const stats = [
    { icon: Users, label: "Total Students", value: "1,248", color: PRIMARY, change: "+12%" },
    { icon: BookOpen, label: "Active Internships", value: "8", color: ACCENT, change: "+2" },
    { icon: Video, label: "Total Live Classes", value: "156", color: "#10b981", change: "+8%" },
    { icon: CheckCircle, label: "Completion Rate", value: "87%", color: "#8b5cf6", change: "+5%" }
  ];


  
  const internships = [
    {
      id: 1,
      name: "Smart Robotics & Industry 4.0 Automation",
      status: "Live",
      statusColor: "#10b981",
      students: 145,
      todayClass: "14:00 - 15:30",
      progress: 65
    },
    {
      id: 2,
      name: "Applied AI & Machine Learning",
      status: "Upcoming",
      statusColor: PRIMARY,
      students: 198,
      todayClass: "16:00 - 17:30",
      progress: 45
    },
    {
      id: 3,
      name: "IoT & IIoT for Smart Systems",
      status: "Completed",
      statusColor: "#64748b",
      students: 167,
      todayClass: "10:00 - 11:30",
      progress: 100
    },
    {
      id: 4,
      name: "Cloud & Edge Computing",
      status: "Upcoming",
      statusColor: PRIMARY,
      students: 134,
      todayClass: "Tomorrow 10:00",
      progress: 30
    }
  ];
  const router = useRouter();
  const handleJoinLiveClass = (path) => {
    if (path) {
      router.push(path); // Navigate to your live class page
    }
  };
  const materials = [
    {
      id: 1,
      name: "Neural Networks Fundamentals - Lecture Slides",
      type: "PPT",
      uploadDate: "Nov 24, 2025",
      internship: "Applied AI",
      downloads: 142
    },
    {
      id: 2,
      name: "IoT Security Best Practices Guide",
      type: "PDF",
      uploadDate: "Nov 23, 2025",
      internship: "IoT & IIoT",
      downloads: 98
    },
    {
      id: 3,
      name: "Robot Kinematics Tutorial Video",
      type: "Video",
      uploadDate: "Nov 22, 2025",
      internship: "Smart Robotics",
      downloads: 167
    },
    {
      id: 4,
      name: "Cloud Architecture Design Patterns",
      type: "PDF",
      uploadDate: "Nov 21, 2025",
      internship: "Cloud Computing",
      downloads: 124
    }
  ];
  
  const quickActions = [
    { icon: Upload, label: "Upload Material", color: PRIMARY, action: "📤 Opening upload dialog..." },
    { icon: Clipboard, label: "Create Assignment", color: ACCENT, action: "📝 Creating new assignment..." },
    { icon: UserCheck, label: "View Attendance", color: "#10b981", action: "✅ Loading attendance records..." },
    { icon: Volume2, label: "Post Announcement", color: "#f59e0b", action: "📢 Opening announcement editor..." },
    { icon: Users, label: "Manage Students", color: "#8b5cf6", action: "👥 Loading student management..." },
    { icon: BarChart3, label: "View Analytics", color: "#ec4899", action: "📊 Loading analytics dashboard..." }
  ];
  
  const announcements = [
    {
      id: 1,
      title: "Assignment Submission Deadline Extended",
      time: "2 hours ago",
      internship: "Applied AI & ML",
      priority: "high"
    },
    {
      id: 2,
      title: "New Study Material Available for Module 5",
      time: "5 hours ago",
      internship: "Smart Robotics",
      priority: "medium"
    },
    {
      id: 3,
      title: "Guest Lecture Scheduled for Next Week",
      time: "1 day ago",
      internship: "Cloud Computing",
      priority: "low"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: BACKGROUND, fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: '0 0 4px 0' }}>
                Welcome back, {instructorName}
              </h1>
              <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
                {formatDate(currentDate)}
              </p>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button 
                style={{ 
                  position: 'relative', 
                  padding: '10px', 
                  borderRadius: '8px', 
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onClick={() => setShowNotifications(!showNotifications)}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
               
               
              </button>
              
              {showNotifications && (
                <div style={{ 
                  position: 'absolute', 
                  top: '64px', 
                  right: '32px', 
                  width: '320px', 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px', 
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  zIndex: 50 
                }}>
                  <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
                    <h3 style={{ fontWeight: '600', color: '#111827', margin: 0 }}>Notifications</h3>
                  </div>
                  <div style={{ maxHeight: '384px', overflowY: 'auto' }}>
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} style={{ 
                        padding: '16px', 
                        borderBottom: '1px solid #f3f4f6', 
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <p style={{ fontSize: '14px', fontWeight: '500', color: '#111827', margin: '0 0 4px 0' }}>
                          New assignment submitted
                        </p>
                        <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>
                          {i} hours ago
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingLeft: '16px', borderLeft: '1px solid #e5e7eb' }}>
                <div style={{ textAlign: 'right' }}>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth: '1600px', margin: '0 auto', padding: '32px' }}>
        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
          {stats.map((stat, index) => (
            <div key={index} style={{ 
              backgroundColor: '#fff', 
              borderRadius: '12px', 
              padding: '24px', 
              border: '1px solid #e5e7eb',
              transition: 'box-shadow 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
            onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: `${stat.color}15`
                }}>
                  <stat.icon size={24} color={stat.color} />
                </div>
                <span style={{ 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  color: '#059669', 
                  backgroundColor: '#ecfdf5', 
                  padding: '4px 8px', 
                  borderRadius: '4px' 
                }}>
                  {stat.change}
                </span>
              </div>
              <div style={{ fontSize: '30px', fontWeight: '700', color: '#111827', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#6b7280' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Live Class Banner */}
        <div style={{ 
          backgroundColor: PRIMARY, 
          borderRadius: '12px', 
          padding: '24px', 
          marginBottom: '32px',
          border: `1px solid ${PRIMARY}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: '#ef4444', 
                color: '#fff', 
                padding: '6px 12px', 
                borderRadius: '20px', 
                fontSize: '12px', 
                fontWeight: '700' 
              }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#fff', 
                  borderRadius: '50%',
                  animation: 'pulse 2s infinite'
                }}></span>
                LIVE NOW
              </div>
              <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', fontWeight: '500' }}>
                14:00 - 15:30
              </span>
            </div>
             <button 
      style={{ 
        backgroundColor: '#fff', 
        color: '#1640FF', // replace PRIMARY with your color
        padding: '10px 24px', 
        borderRadius: '8px', 
        fontWeight: '600', 
        fontSize: '14px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        transition: 'background-color 0.2s'
      }}
      onClick={() => handleJoinLiveClass('/coming-soon')} // <-- put your link here
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
    >
      <Video size={18} />
      Join Live Class
    </button>
          </div>
          <h3 style={{ color: '#fff', fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
            Smart Robotics & Industry 4.0 Automation - Advanced Motion Control
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '16px' }}>
            Module 5: Implementing PID Controllers in Robot Kinematics
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
            <Users size={16} />
            <span>145 Students Enrolled</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '32px' }}>
          {/* Left Column - 2/3 width */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Current Internships */}
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Current Internships
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {internships.map((internship) => (
                  <div key={internship.id} style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: '1px solid #e5e7eb', 
                    overflow: 'hidden',
                    transition: 'box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}
                  onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <span 
                          style={{
                            fontSize: '12px',
                            fontWeight: '700',
                            padding: '4px 12px',
                            borderRadius: '20px',
                            backgroundColor: `${internship.statusColor}15`,
                            color: internship.statusColor
                          }}
                        >
                          {internship.status}
                        </span>
                        <span style={{ fontSize: '12px', color: '#6b7280' }}>
                          {internship.progress}% Complete
                        </span>
                      </div>
                      
                      <h3 style={{ 
                        fontWeight: '600', 
                        color: '#111827', 
                        marginBottom: '16px', 
                        fontSize: '14px', 
                        lineHeight: '1.4' 
                      }}>
                        {internship.name}
                      </h3>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6b7280' }}>
                          <Clock size={14} />
                          <span>{internship.todayClass}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#6b7280' }}>
                          <Users size={14} />
                          <span>{internship.students} Students</span>
                        </div>
                      </div>
                      
                      <div style={{ 
                        width: '100%', 
                        backgroundColor: '#f3f4f6', 
                        borderRadius: '4px', 
                        height: '6px', 
                        marginBottom: '16px' 
                      }}>
                        <div 
                          style={{
                            height: '6px',
                            borderRadius: '4px',
                            width: `${internship.progress}%`,
                            backgroundColor: internship.statusColor,
                            transition: 'width 0.5s ease'
                          }}
                        ></div>
                      </div>
                      
                      <button 
                        style={{
                          width: '100%',
                          backgroundColor: '#f9fafb',
                          color: '#111827',
                          padding: '10px',
                          borderRadius: '8px',
                          fontSize: '14px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '8px',
                          transition: 'background-color 0.2s'
                        }}
                        onClick={() => {
                          setSelectedInternship(internship.name);
                          setTimeout(() => setSelectedInternship(null), 2000);
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#f9fafb'}
                      >
                        Manage
                        <ChevronRight size={16} />
                      </button>
                      {selectedInternship === internship.name && (
                        <div style={{ 
                          marginTop: '8px', 
                          padding: '8px', 
                          backgroundColor: '#ecfdf5', 
                          color: '#059669', 
                          fontSize: '12px', 
                          borderRadius: '6px', 
                          textAlign: 'center', 
                          fontWeight: '500' 
                        }}>
                          Opening {internship.name}...
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Study Materials */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>
                  Recently Uploaded Materials
                </h2>
                <button 
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: PRIMARY, 
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0
                  }}
                  onClick={() => {
                    setShowMaterials(true);
                    setTimeout(() => setShowMaterials(false), 2000);
                  }}
                >
                  View All
                </button>
              </div>
              
              {showMaterials && (
                <div style={{ 
                  marginBottom: '16px', 
                  padding: '12px', 
                  backgroundColor: '#eff6ff', 
                  color: '#1d4ed8', 
                  fontSize: '14px', 
                  borderRadius: '8px', 
                  fontWeight: '500' 
                }}>
                  📚 Loading all materials...
                </div>
              )}
              
              <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e5e7eb', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                    <tr>
                      <th style={{ 
                        padding: '12px 24px', 
                        textAlign: 'left', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#6b7280', 
                        textTransform: 'uppercase' 
                      }}>
                        Material
                      </th>
                      <th style={{ 
                        padding: '12px 24px', 
                        textAlign: 'left', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#6b7280', 
                        textTransform: 'uppercase' 
                      }}>
                        Type
                      </th>
                      <th style={{ 
                        padding: '12px 24px', 
                        textAlign: 'left', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#6b7280', 
                        textTransform: 'uppercase' 
                      }}>
                        Date
                      </th>
                      <th style={{ 
                        padding: '12px 24px', 
                        textAlign: 'left', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#6b7280', 
                        textTransform: 'uppercase' 
                      }}>
                        Downloads
                      </th>
                      <th style={{ 
                        padding: '12px 24px', 
                        textAlign: 'left', 
                        fontSize: '12px', 
                        fontWeight: '600', 
                        color: '#6b7280', 
                        textTransform: 'uppercase' 
                      }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {materials.map((material) => (
                      <tr key={material.id} style={{ borderBottom: '1px solid #f3f4f6', transition: 'background-color 0.2s' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#f9fafb'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                      >
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ 
                              width: '32px', 
                              height: '32px', 
                              borderRadius: '8px', 
                              backgroundColor: `${PRIMARY}15`, 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center' 
                            }}>
                              <FileText size={16} color={PRIMARY} />
                            </div>
                            <div>
                              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827' }}>
                                {material.name}
                              </div>
                              <div style={{ fontSize: '12px', color: '#6b7280' }}>
                                {material.internship}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <span style={{
                            fontSize: '12px',
                            fontWeight: '600',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            backgroundColor: material.type === 'PDF' ? '#dbeafe' :
                                           material.type === 'PPT' ? '#fed7aa' :
                                           '#f3e8ff',
                            color: material.type === 'PDF' ? '#1d4ed8' :
                                  material.type === 'PPT' ? '#c2410c' :
                                  '#9333ea'
                          }}>
                            {material.type}
                          </span>
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '14px', color: '#6b7280' }}>
                          {material.uploadDate}
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
                            <Download size={14} />
                            {material.downloads}
                          </div>
                        </td>
                        <td style={{ padding: '16px 24px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <button 
                              style={{ 
                                padding: '6px', 
                                borderRadius: '6px', 
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                              }}
                              onClick={() => alert(`👁️ Viewing: ${material.name}`)}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                              <Eye size={16} color="#6b7280" />
                            </button>
                            <button 
                              style={{ 
                                padding: '6px', 
                                borderRadius: '6px', 
                                border: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                              }}
                              onClick={() => {
                                if (confirm(`Delete "${material.name}"?`)) {
                                  alert('🗑️ Material deleted successfully!');
                                }
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#fef2f2'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                              <Trash2 size={16} color="#dc2626" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Quick Actions */}
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Quick Actions
              </h2>
              {actionMessage && (
                <div style={{ 
                  marginBottom: '16px', 
                  padding: '12px', 
                  backgroundColor: '#ecfdf5', 
                  color: '#059669', 
                  fontSize: '14px', 
                  borderRadius: '8px', 
                  fontWeight: '500' 
                }}>
                  {actionMessage}
                </div>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {quickActions.map((action, index) => (
                  <button 
                    key={index} 
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      padding: '20px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'all 0.2s'
                    }}
                    onClick={() => {
                      setActionMessage(action.action);
                      setTimeout(() => setActionMessage(''), 2000);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                      e.target.style.borderColor = '#d1d5db';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.boxShadow = 'none';
                      e.target.style.borderColor = '#e5e7eb';
                    }}
                  >
                    <div 
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: `${action.color}15`
                      }}
                    >
                      <action.icon size={24} color={action.color} />
                    </div>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827', textAlign: 'center' }}>
                      {action.label}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - 1/3 width */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Announcements */}
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Announcements
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id} 
                    style={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}
                    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
                  >
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '8px', 
                        backgroundColor: `${ACCENT}15`, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Volume2 size={18} color={ACCENT} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <h4 style={{ 
                          fontSize: '14px', 
                          fontWeight: '600', 
                          color: '#111827', 
                          marginBottom: '4px', 
                          lineHeight: '1.4' 
                        }}>
                          {announcement.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                          <span style={{ color: '#6b7280' }}>{announcement.time}</span>
                          <span style={{ color: '#d1d5db' }}>•</span>
                          <span style={{ color: ACCENT, fontWeight: '500' }}>{announcement.internship}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Performance Insights */}
            <section>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Performance Insights
              </h2>
              <div style={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px', 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <TrendingUp size={16} color={PRIMARY} />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                        Avg Attendance
                      </span>
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
                      87%
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '4px', height: '8px' }}>
                    <div style={{ 
                      backgroundColor: PRIMARY, 
                      height: '8px', 
                      borderRadius: '4px', 
                      width: '87%' 
                    }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Download size={16} color="#10b981" />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                        Material Downloads
                      </span>
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
                      1,248
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '4px', height: '8px' }}>
                    <div style={{ 
                      backgroundColor: '#10b981', 
                      height: '8px', 
                      borderRadius: '4px', 
                      width: '92%' 
                    }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} color="#8b5cf6" />
                      <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>
                        Assignment Rate
                      </span>
                    </div>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
                      76%
                    </span>
                  </div>
                  <div style={{ width: '100%', backgroundColor: '#f3f4f6', borderRadius: '4px', height: '8px' }}>
                    <div style={{ 
                      backgroundColor: '#8b5cf6', 
                      height: '8px', 
                      borderRadius: '4px', 
                      width: '76%' 
                    }}></div>
                  </div>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                  <button 
                    style={{
                      width: '100%',
                      backgroundColor: '#f9fafb',
                      color: '#111827',
                      padding: '10px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'background-color 0.2s'
                    }}
                    onClick={() => alert('📊 Loading detailed analytics dashboard...')}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f9fafb'}
                  >
                    <BarChart3 size={16} />
                    View Detailed Analytics
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;