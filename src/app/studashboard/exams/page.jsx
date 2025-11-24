"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiPlus, FiEdit, FiTrash2, FiEye, FiDownload, FiCalendar, FiClock, FiCheckCircle, FiAlertCircle, FiFileText, FiUpload, FiSend, FiBarChart2, FiUsers, FiBookOpen, FiTrendingUp, FiX, FiChevronDown, FiPaperclip, FiMessageSquare } from 'react-icons/fi';

const AssessmentManagement = () => {
  const [assessments, setAssessments] = useState([
    {
      id: 1,
      title: "3D Printing & Digital Fabrication for Engineers",
      course: "3D Printing & Digital ",
      type: "Assignment",
      dueDate: "2023-12-15",
      marks: 100,
      submissions: 23,
      totalStudents: 30,
      status: "active"
    },
    {
      id: 2,
      title: "Cloud & Edge Computing for Connected Intelligence",
      course: "Cloud & Edge Computing ",
      type: "Quiz",
      dueDate: "2023-12-10",
      marks: 50,
      submissions: 18,
      totalStudents: 25,
      status: "active"
    },
    {
      id: 3,
      title: "IoT & IIoT for Smart Systems and Industry 4.0",
      course: "IoT & IIoT",
      type: "Test",
      dueDate: "2023-11-25",
      marks: 150,
      submissions: 20,
      totalStudents: 20,
      status: "completed"
    },
    {
      id: 4,
      title: "Applied AI & Machine Learning: From Models to Real-World Applications",
      course: "Applied AI & Machine Learning",
      type: "Final Exam",
      dueDate: "2023-12-20",
      marks: 200,
      submissions: 5,
      totalStudents: 28,
      status: "active"
    },
    {
      id: 5,
      title: "Smart Robotics & Industry 4.0 Automation Internship",
      course: "Smart Robotics & Industry 4.0",
      type: "Assignment",
      dueDate: "2023-11-30",
      marks: 75,
      submissions: 12,
      totalStudents: 15,
      status: "active"
    }
  ]);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const courses = ["Web Development Fundamentals", "Advanced React", "Backend Development", "Database Management", "UI/UX Design"];
  
  const studentSubmissions = [
    { id: 1, name: "John Doe", status: "submitted", file: "assignment1.pdf", feedback: "Good work", marks: 85 },
    { id: 2, name: "Jane Smith", status: "submitted", file: "assignment2.docx", feedback: "Excellent", marks: 92 },
    { id: 3, name: "Mike Johnson", status: "pending", file: null, feedback: "", marks: 0 },
    { id: 4, name: "Sarah Williams", status: "submitted", file: "assignment3.zip", feedback: "Needs improvement", marks: 78 },
    { id: 5, name: "Tom Brown", status: "late", file: "assignment4.pdf", feedback: "Late submission", marks: 70 }
  ];

  const filteredAssessments = assessments.filter(assessment => {
    const matchesFilter = filter === "all" || assessment.type.toLowerCase() === filter.toLowerCase();
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          assessment.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCourse = selectedCourse === "all" || assessment.course === selectedCourse;
    
    return matchesFilter && matchesSearch && matchesCourse;
  });

  const openDetailsModal = (assessment) => {
    setSelectedAssessment(assessment);
    setShowDetailsModal(true);
  };

  const openSubmissionModal = (assessment) => {
    setSelectedAssessment(assessment);
    setShowSubmissionModal(true);
  };

  const handleDeleteAssessment = (id) => {
    if (window.confirm("Are you sure you want to delete this assessment?")) {
      setAssessments(assessments.filter(a => a.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "active": return "#1640ff";
      case "completed": return "#10b981";
      case "draft": return "#6b7280";
      default: return "#1640ff";
    }
  };

  const getStatusBgColor = (status) => {
    switch(status) {
      case "active": return "rgba(22, 64, 255, 0.1)";
      case "completed": return "rgba(16, 185, 129, 0.1)";
      case "draft": return "rgba(107, 114, 128, 0.1)";
      default: return "rgba(22, 64, 255, 0.1)";
    }
  };

  const getSubmissionStatusColor = (status) => {
    switch(status) {
      case "submitted": return "#10b981";
      case "pending": return "#f59e0b";
      case "late": return "#ef4444";
      default: return "#6b7280";
    }
  };

  const getSubmissionStatusBgColor = (status) => {
    switch(status) {
      case "submitted": return "rgba(16, 185, 129, 0.1)";
      case "pending": return "rgba(245, 158, 11, 0.1)";
      case "late": return "rgba(239, 68, 68, 0.1)";
      default: return "rgba(107, 114, 128, 0.1)";
    }
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', margin: '0' }}>Assessment Management</h1>
            <p style={{ color: '#64748b', marginTop: '5px' }}>Create, manage, and evaluate student assessments</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setShowAddForm(true)}
              style={{
                backgroundColor: '#1640ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                boxShadow: '0 4px 6px rgba(22, 64, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0e2ecc';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 12px rgba(22, 64, 255, 0.3)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1640ff';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px rgba(22, 64, 255, 0.2)';
              }}
            >
              <FiPlus size={18} /> Create Assessment
            </button>
            <button
              style={{
                backgroundColor: 'white',
                color: '#1640ff',
                border: '1px solid #1640ff',
                borderRadius: '8px',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
              }}
            >
              <FiUpload size={18} /> Upload Question Bank
            </button>
          </div>
        </div>

        {/* Dashboard Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #1640ff',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 5px 0' }}>Total Assessments</p>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', margin: '0' }}>{assessments.length}</h3>
              </div>
              <div style={{ backgroundColor: 'rgba(22, 64, 255, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiFileText size={24} color="#1640ff" />
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #EF7C00',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 5px 0' }}>Pending Evaluations</p>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', margin: '0' }}>
                  {assessments.reduce((sum, a) => sum + (a.totalStudents - a.submissions), 0)}
                </h3>
              </div>
              <div style={{ backgroundColor: 'rgba(239, 124, 0, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiClock size={24} color="#EF7C00" />
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #10b981',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 5px 0' }}>Completed</p>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', margin: '0' }}>
                  {assessments.filter(a => a.status === 'completed').length}
                </h3>
              </div>
              <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiCheckCircle size={24} color="#10b981" />
              </div>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
            borderLeft: '4px solid #ef4444',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
          }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 5px 0' }}>Upcoming Deadlines</p>
                <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b', margin: '0' }}>
                  {assessments.filter(a => a.status === 'active').length}
                </h3>
              </div>
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FiAlertCircle size={24} color="#ef4444" />
              </div>
            </div>
          </div>
        </div>

 
        {/* Assessment Table */}
       <div
  style={{
    width: "1400px",          
    maxWidth: "100%",        
    backgroundColor: "white",
    borderRadius: "12px",
    overflow: "hidden",
    padding: "20px",
    marginTop: "20px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.08)"
  }}
>
  <div style={{ overflowX: "auto" }}>
  <div
    style={{
      fontSize: '22px',
      fontWeight: '700',
      color: '#1640ff',
      margin: '0',
      marginTop:"40px",
      marginRight:"20px",
      letterSpacing: '0.5px'

    }}
  >
    Assessment Overview
  </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: 'linear-gradient(to right, #1640ff, #2c5aff)' }}>
                <tr>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Title</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Course</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Type</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Due Date</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Marks</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Submissions</th>
                  <th style={{ padding: '16px', textAlign: 'left', color: 'white', fontWeight: '600', fontSize: '14px' }}>Status</th>
                  <th style={{ padding: '16px', textAlign: 'center', color: 'white', fontWeight: '600', fontSize: '14px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssessments.map((assessment, index) => (
                  <tr
                    key={assessment.id}
                    style={{
                      borderBottom: '1px solid #f1f5f9',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                    }}
                  >
                    <td style={{ padding: '16px' }}>
                      <div style={{ fontWeight: '600', color: '#1e293b' }}>{assessment.title}</div>
                    </td>
                    <td style={{ padding: '16px', color: '#64748b' }}>{assessment.course}</td>
                    <td style={{ padding: '16px' }}>
                      <span
                        style={{
                          backgroundColor: assessment.type === 'Assignment' ? 'rgba(22, 64, 255, 0.1)' :
                                         assessment.type === 'Quiz' ? 'rgba(239, 124, 0, 0.1)' :
                                         assessment.type === 'Test' ? 'rgba(16, 185, 129, 0.1)' :
                                         'rgba(239, 68, 68, 0.1)',
                          color: assessment.type === 'Assignment' ? '#1640ff' :
                                 assessment.type === 'Quiz' ? '#EF7C00' :
                                 assessment.type === 'Test' ? '#10b981' :
                                 '#ef4444',
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {assessment.type}
                      </span>
                    </td>
                    <td style={{ padding: '16px', color: '#64748b' }}>{assessment.dueDate}</td>
                    <td style={{ padding: '16px', color: '#64748b' }}>{assessment.marks}</td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ 
                          width: '60px', 
                          height: '8px', 
                          backgroundColor: '#e2e8f0', 
                          borderRadius: '4px', 
                          overflow: 'hidden',
                          marginRight: '10px'
                        }}>
                          <div
                            style={{
                              width: `${(assessment.submissions / assessment.totalStudents) * 100}%`,
                              height: '100%',
                              backgroundColor: '#1640ff'
                            }}
                          />
                        </div>
                        <span style={{ color: '#64748b', fontSize: '14px' }}>
                          {assessment.submissions}/{assessment.totalStudents}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <span
                        style={{
                          backgroundColor: getStatusBgColor(assessment.status),
                          color: getStatusColor(assessment.status),
                          padding: '4px 10px',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '500'
                        }}
                      >
                        {assessment.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                        <button
                          onClick={() => openDetailsModal(assessment)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#1640ff',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                          title="View Details"
                        >
                          <FiEye size={16} />
                        </button>
                        <button
                          onClick={() => openSubmissionModal(assessment)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#1640ff',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                          title="View Submissions"
                        >
                          <FiUsers size={16} />
                        </button>
                        <button
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#1640ff',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                          title="Edit"
                        >
                          <FiEdit size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteAssessment(assessment.id)}
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: '#ef4444',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '6px',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseOver={(e) => {
                            e.target.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
                          }}
                          onMouseOut={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                          }}
                          title="Delete"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Analytics Section */}
        <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiTrendingUp color="#1640ff" /> Submission Trend
            </h3>
            <div style={{ height: '200px', backgroundColor: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#94a3b8' }}>Chart placeholder</p>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiClock color="#EF7C00" /> Late Submissions
            </h3>
            <div style={{ height: '200px', backgroundColor: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#94a3b8' }}>Chart placeholder</p>
            </div>
          </div>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FiBarChart2 color="#10b981" /> Performance Distribution
            </h3>
            <div style={{ height: '200px', backgroundColor: '#f8fafc', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <p style={{ color: '#94a3b8' }}>Chart placeholder</p>
            </div>
          </div>
        </div>

        {/* Teacher Actions */}
        <div style={{ marginTop: '30px', backgroundColor: 'white', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', margin: '0 0 20px 0' }}>Quick Actions</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            <button
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontWeight: '500',
                color: '#64748b',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.05)';
                e.target.style.borderColor = '#1640ff';
                e.target.style.color = '#1640ff';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.color = '#64748b';
              }}
            >
              <FiPlus size={18} /> Create Assessment
            </button>
            <button
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontWeight: '500',
                color: '#64748b',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.05)';
                e.target.style.borderColor = '#1640ff';
                e.target.style.color = '#1640ff';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.color = '#64748b';
              }}
            >
              <FiUpload size={18} /> Upload Question Bank
            </button>
            <button
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontWeight: '500',
                color: '#64748b',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.05)';
                e.target.style.borderColor = '#1640ff';
                e.target.style.color = '#1640ff';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.color = '#64748b';
              }}
            >
              <FiSend size={18} /> Send Reminder
            </button>
            <button
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                fontWeight: '500',
                color: '#64748b',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.05)';
                e.target.style.borderColor = '#1640ff';
                e.target.style.color = '#1640ff';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.borderColor = '#e2e8f0';
                e.target.style.color = '#64748b';
              }}
            >
              <FiBarChart2 size={18} /> Generate Report
            </button>
          </div>
        </div>

        {/* Assessment Details Modal */}
        {showDetailsModal && selectedAssessment && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                padding: '20px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', margin: 0 }}>Assessment Details</h2>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b',
                    borderRadius: '4px',
                    padding: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1e293b', margin: '0 0 10px 0' }}>{selectedAssessment.title}</h3>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span
                      style={{
                        backgroundColor: selectedAssessment.type === 'Assignment' ? 'rgba(22, 64, 255, 0.1)' :
                                         selectedAssessment.type === 'Quiz' ? 'rgba(239, 124, 0, 0.1)' :
                                         selectedAssessment.type === 'Test' ? 'rgba(16, 185, 129, 0.1)' :
                                         'rgba(239, 68, 68, 0.1)',
                        color: selectedAssessment.type === 'Assignment' ? '#1640ff' :
                               selectedAssessment.type === 'Quiz' ? '#EF7C00' :
                               selectedAssessment.type === 'Test' ? '#10b981' :
                               '#ef4444',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {selectedAssessment.type}
                    </span>
                    <span
                      style={{
                        backgroundColor: getStatusBgColor(selectedAssessment.status),
                        color: getStatusColor(selectedAssessment.status),
                        padding: '4px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {selectedAssessment.status}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 8px 0' }}>Course</h4>
                  <p style={{ fontSize: '16px', color: '#1e293b', margin: 0 }}>{selectedAssessment.course}</p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 8px 0' }}>Instructions</h4>
                  <p style={{ fontSize: '16px', color: '#1e293b', margin: 0, lineHeight: '1.5' }}>
                    This assessment covers the fundamental concepts of JavaScript. Students are expected to demonstrate their understanding of variables, functions, arrays, and objects. Please read all questions carefully before answering.
                  </p>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 8px 0' }}>Attachments</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', backgroundColor: '#f8fafc', borderRadius: '8px' }}>
                    <FiPaperclip color="#64748b" size={18} />
                    <span style={{ fontSize: '14px', color: '#1e293b' }}>assessment_guidelines.pdf</span>
                    <button
                      style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#1640ff',
                        cursor: 'pointer',
                        marginLeft: 'auto',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                    >
                      <FiDownload size={16} />
                    </button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 8px 0' }}>Total Marks</h4>
                    <p style={{ fontSize: '16px', color: '#1e293b', margin: 0 }}>{selectedAssessment.marks}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#64748b', margin: '0 0 8px 0' }}>Due Date</h4>
                    <p style={{ fontSize: '16px', color: '#1e293b', margin: 0 }}>{selectedAssessment.dueDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Student Submission Tracker Modal */}
        {showSubmissionModal && selectedAssessment && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '900px',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                padding: '20px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', margin: 0 }}>
                  Student Submissions - {selectedAssessment.title}
                </h2>
                <button
                  onClick={() => setShowSubmissionModal(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b',
                    borderRadius: '4px',
                    padding: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>Total Students: </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#1e293b' }}>{selectedAssessment.totalStudents}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>Submitted: </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#10b981' }}>{selectedAssessment.submissions}</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '14px', color: '#64748b' }}>Pending: </span>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: '#f59e0b' }}>{selectedAssessment.totalStudents - selectedAssessment.submissions}</span>
                  </div>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Student Name</th>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Status</th>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Submitted File</th>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Feedback</th>
                        <th style={{ padding: '12px', textAlign: 'left', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Marks</th>
                        <th style={{ padding: '12px', textAlign: 'center', color: '#64748b', fontWeight: '600', fontSize: '14px' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentSubmissions.map((student) => (
                        <tr key={student.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '12px', color: '#1e293b' }}>{student.name}</td>
                          <td style={{ padding: '12px' }}>
                            <span
                              style={{
                                backgroundColor: getSubmissionStatusBgColor(student.status),
                                color: getSubmissionStatusColor(student.status),
                                padding: '4px 10px',
                                borderRadius: '20px',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}
                            >
                              {student.status}
                            </span>
                          </td>
                          <td style={{ padding: '12px' }}>
                            {student.file ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiPaperclip color="#64748b" size={16} />
                                <span style={{ fontSize: '14px', color: '#1e293b' }}>{student.file}</span>
                              </div>
                            ) : (
                              <span style={{ fontSize: '14px', color: '#94a3b8' }}>—</span>
                            )}
                          </td>
                          <td style={{ padding: '12px' }}>
                            {student.feedback ? (
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FiMessageSquare color="#64748b" size={16} />
                                <span style={{ fontSize: '14px', color: '#1e293b' }}>{student.feedback}</span>
                              </div>
                            ) : (
                              <span style={{ fontSize: '14px', color: '#94a3b8' }}>—</span>
                            )}
                          </td>
                          <td style={{ padding: '12px', color: '#1e293b' }}>
                            {student.marks > 0 ? (
                              <span style={{ fontWeight: '600' }}>{student.marks}/{selectedAssessment.marks}</span>
                            ) : (
                              <span style={{ color: '#94a3b8' }}>—</span>
                            )}
                          </td>
                          <td style={{ padding: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                              <button
                                style={{
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  color: '#1640ff',
                                  cursor: 'pointer',
                                  borderRadius: '4px',
                                  padding: '6px',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                }}
                                title="View Submission"
                              >
                                <FiEye size={16} />
                              </button>
                              <button
                                style={{
                                  backgroundColor: 'transparent',
                                  border: 'none',
                                  color: '#1640ff',
                                  cursor: 'pointer',
                                  borderRadius: '4px',
                                  padding: '6px',
                                  transition: 'all 0.2s ease'
                                }}
                                onMouseOver={(e) => {
                                  e.target.style.backgroundColor = 'rgba(22, 64, 255, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                  e.target.style.backgroundColor = 'transparent';
                                }}
                                title="Grade"
                              >
                                <FiEdit size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Add New Assessment Form */}
        {showAddForm && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflow: 'auto',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            }}>
              <div style={{
                padding: '20px',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', margin: 0 }}>Create New Assessment</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#64748b',
                    borderRadius: '4px',
                    padding: '4px',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                  }}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Assessment Title</label>
                  <input
                    type="text"
                    placeholder="Enter assessment title"
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1640ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Course</label>
                  <select
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1640ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                    }}
                  >
                    <option value="">Select a course</option>
                    {courses.map(course => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Assessment Type</label>
                  <select
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1640ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                    }}
                  >
                    <option value="">Select type</option>
                    <option value="assignment">Assignment</option>
                    <option value="quiz">Quiz</option>
                    <option value="test">Test</option>
                    <option value="final-exam">Final Exam</option>
                  </select>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Instructions</label>
                  <textarea
                    placeholder="Enter assessment instructions"
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#1640ff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                    }}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Attachments</label>
                  <div style={{
                    border: '1px dashed #d1d5db',
                    borderRadius: '6px',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#f9fafb'
                  }}>
                    <FiUpload size={24} color="#6b7280" style={{ marginBottom: '10px' }} />
                    <p style={{ fontSize: '14px', color: '#6b7280', margin: '0 0 10px 0' }}>Drag and drop files here or click to browse</p>
                    <button
                      style={{
                        backgroundColor: 'white',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        padding: '8px 16px',
                        fontSize: '14px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#f3f4f6';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'white';
                      }}
                    >
                      Choose Files
                    </button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Total Marks</label>
                    <input
                      type="number"
                      placeholder="Enter total marks"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#1640ff';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>Due Date</label>
                    <input
                      type="date"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#1640ff';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                  <button
                    onClick={() => setShowAddForm(false)}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#6b7280',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#f3f4f6';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'white';
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      backgroundColor: '#1640ff',
                      border: 'none',
                      borderRadius: '6px',
                      padding: '10px 20px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#0e2ecc';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#1640ff';
                    }}
                  >
                    Create Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssessmentManagement;