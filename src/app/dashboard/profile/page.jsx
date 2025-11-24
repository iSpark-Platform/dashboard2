"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiCamera,
  FiAward,
  FiBriefcase,
  FiLock,
  FiTrash2,
  FiCheckCircle,
  FiSettings,
  FiPlus,
  FiX,
  FiEdit2,
  FiCalendar,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiExternalLink,
  FiUpload,
  FiBook,
  FiGrid,
} from "react-icons/fi";

export default function InstructorProfilePage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      position: "Senior Software Engineer",
      organization: "Tech Company",
      duration: "2020 - Present",
      description: "Led development of cloud-based applications"
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [expInput, setExpInput] = useState({ 
    position: "", 
    organization: "", 
    duration: "", 
    description: "" 
  });
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "instructor@example.com",
    phone: "+1 234 567 8900",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    location: "San Francisco, CA",
    bio: "Experienced software engineer with a passion for teaching advanced technologies in robotics, AI, and cloud computing.",
    skills: ["JavaScript", "React", "Node.js", "Python", "Robotics", "AI/ML"],
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe"
  });

  // Internships data
  const internships = [
    "Smart Robotics & Industry 4.0 Automation Internship",
    "Applied AI & Machine Learning: From Models to Real-World Applications",
    "IoT & IIoT for Smart Systems and Industry 4.0",
    "Cloud & Edge Computing for Connected Intelligence",
    "3D Printing & Digital Fabrication for Engineers"
  ];

  // Courses data
  const courses = [
    "Professional Diploma in Humanoid Robotics for Service Industries",
    "Diploma in Artificial Intelligence Applications Across Industries",
    "Industry-Ready Diploma in Cloud & Edge Technologies",
    "Career-Ready Diploma in Cybersecurity & Digital Forensics",
    "Year-long STEM Readiness for UG Students"
  ];

  const addExperience = () => {
    if (expInput.position && expInput.organization) {
      const newExp = {
        id: Date.now(),
        ...expInput
      };
      setExperiences([...experiences, newExp]);
      setExpInput({ position: "", organization: "", duration: "", description: "" });
      setShowModal(false);
    }
  };

  const deleteExperience = (id) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };

  const saveChanges = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    setEditMode(false);
  };

  const handleInputChange = (field, value) => {
    setProfileData({
      ...profileData,
      [field]: value
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...profileData.skills];
    updatedSkills[index] = value;
    setProfileData({
      ...profileData,
      skills: updatedSkills
    });
  };

  const addSkill = () => {
    setProfileData({
      ...profileData,
      skills: [...profileData.skills, ""]
    });
  };

  const removeSkill = (index) => {
    const updatedSkills = profileData.skills.filter((_, i) => i !== index);
    setProfileData({
      ...profileData,
      skills: updatedSkills
    });
  };

  return (
    <div style={{ 
      fontFamily: "Inter, sans-serif", 
      background: "linear-gradient(to bottom right, #f8fafc, #f0f4ff)", 
      padding: "30px",
      minHeight: "100vh"
    }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "white",
          padding: "24px 32px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginBottom: "30px",
          border: "1px solid rgba(22,64,255,0.1)"
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: "32px", color: "#1a202c", fontWeight: "700", letterSpacing: "-0.5px" }}>Profile</h2>
          <p style={{ margin: "6px 0 0", color: "#64748b", fontSize: "16px" }}>
            Manage your personal and professional information
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            onClick={() => setEditMode(!editMode)}
            style={{
              padding: "12px 20px",
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              background: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontWeight: "500",
              color: "#4a5568",
              transition: "all 0.2s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}
          >
            {editMode ? "Cancel" : <><FiEdit2 /> Edit</>}
          </button>
          {editMode && (
            <button
              onClick={saveChanges}
              style={{
                padding: "12px 20px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #1640ff, #0f2fb8)",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px rgba(22,64,255,0.2)"
              }}
            >
              Save Changes
            </button>
          )}
        </div>
      </div>

      {/* Profile Overview */}
      <div
        style={{
          marginTop: "20px",
          background: "white",
          borderRadius: "24px",
          padding: "32px",
          border: "1px solid rgba(22,64,255,0.1)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          display: "flex",
          alignItems: "center",
          gap: "30px",
          marginBottom: "30px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{ 
          position: "absolute", 
          top: 0, 
          right: 0, 
          width: "200px", 
          height: "200px", 
          background: "linear-gradient(135deg, rgba(22,64,255,0.05), rgba(239,124,0,0.05))",
          borderRadius: "50%",
          transform: "translate(50%, -50%)"
        }}></div>
        
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ position: "relative" }}>
            <img
              src="https://picsum.photos/seed/instructor/120/120.jpg"
              alt="profile"
              style={{ 
                width: "140px", 
                height: "140px", 
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid #f0f4ff",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
            />
            {editMode && (
              <div
                style={{
                  position: "absolute",
                  bottom: "5px",
                  right: "5px",
                  background: "linear-gradient(135deg, #1640ff, #0f2fb8)",
                  padding: "10px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(22,64,255,0.3)",
                  transition: "all 0.2s ease"
                }}
              >
                <FiCamera size={18} color="white" />
              </div>
            )}
          </div>
        </div>

        <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
          <h3 style={{ margin: 0, fontSize: "28px", fontWeight: "700", color: "#1a202c", letterSpacing: "-0.5px" }}>
            {profileData.fullName}
          </h3>
          <p style={{ margin: "6px 0", color: "#64748b", fontSize: "18px", fontWeight: "500" }}>
            Instructor / Mentor
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
              <div style={{ 
                background: "#f0f4ff", 
                padding: "8px", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <FiMail size={16} color="#1640ff" />
              </div>
              <span>{profileData.email}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
              <div style={{ 
                background: "#f0f4ff", 
                padding: "8px", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <FiPhone size={16} color="#1640ff" />
              </div>
              <span>{profileData.phone}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#64748b" }}>
              <div style={{ 
                background: "#f0f4ff", 
                padding: "8px", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <FiMapPin size={16} color="#1640ff" />
              </div>
              <span>{profileData.location}</span>
            </div>
          </div>
          {editMode && (
            <button
              style={{
                marginTop: "16px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "#f0f4ff",
                color: "#1640ff",
                border: "1px solid #d0e0ff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: "500",
                transition: "all 0.2s ease"
              }}
            >
              <FiUpload /> Change Photo
            </button>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px", position: "relative", zIndex: 1 }}>
          <a 
            href={profileData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#1640ff",
              textDecoration: "none",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "#f0f4ff",
              transition: "all 0.2s ease",
              fontWeight: "500"
            }}
          >
            <FiLinkedin /> LinkedIn
          </a>
          <a 
            href={profileData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#1640ff",
              textDecoration: "none",
              padding: "10px 16px",
              borderRadius: "12px",
              background: "#f0f4ff",
              transition: "all 0.2s ease",
              fontWeight: "500"
            }}
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>

      {/* Personal Info */}
      <div
        style={{
          marginTop: "24px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginBottom: "30px",
          border: "1px solid rgba(22,64,255,0.1)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ 
            background: "linear-gradient(135deg, #1640ff, #0f2fb8)", 
            padding: "10px", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}>
            <FiUser size={20} color="white" />
          </div>
          <h3 style={{ margin: 0, fontSize: "22px", color: "#1a202c", fontWeight: "600" }}>
            Personal Information
          </h3>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { label: "Full Name", field: "fullName", type: "text" },
            { label: "Email Address", field: "email", type: "email" },
            { label: "Phone Number", field: "phone", type: "tel" },
            { label: "Date of Birth", field: "dateOfBirth", type: "date" },
            { label: "Gender", field: "gender", type: "select", options: ["Male", "Female", "Other", "Prefer not to say"] },
            { label: "Location", field: "location", type: "text" },
          ].map((item) => (
            <div key={item.field} style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ 
                marginBottom: "10px", 
                fontSize: "14px", 
                fontWeight: "600", 
                color: "#4a5568",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}>
                {item.label}
              </label>
              {item.type === "select" ? (
                <select
                  value={profileData[item.field]}
                  onChange={(e) => handleInputChange(item.field, e.target.value)}
                  disabled={!editMode}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    background: editMode ? "white" : "#f8fafc",
                    color: "#1a202c",
                    fontSize: "15px",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                >
                  {item.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={item.type}
                  value={profileData[item.field]}
                  onChange={(e) => handleInputChange(item.field, e.target.value)}
                  disabled={!editMode}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    background: editMode ? "white" : "#f8fafc",
                    color: "#1a202c",
                    fontSize: "15px",
                    fontWeight: "500",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

   

      {/* Professional Section */}
      <div
        style={{
          marginTop: "24px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          marginBottom: "30px",
          border: "1px solid rgba(22,64,255,0.1)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ 
            background: "linear-gradient(135deg, #1640ff, #0f2fb8)", 
            padding: "10px", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}>
            <FiBriefcase size={20} color="white" />
          </div>
          <h3 style={{ margin: 0, fontSize: "22px", color: "#1a202c", fontWeight: "600" }}>
            Professional Information
          </h3>
        </div>

        {/* Bio */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "10px", 
            fontSize: "14px", 
            fontWeight: "600", 
            color: "#4a5568" 
          }}>
            Professional Bio
          </label>
          <textarea
            value={profileData.bio}
            onChange={(e) => handleInputChange("bio", e.target.value)}
            disabled={!editMode}
            placeholder="Write your professional summary..."
            style={{ 
              width: "100%", 
              padding: "16px", 
              borderRadius: "12px", 
              border: "1px solid #e2e8f0",
              background: editMode ? "white" : "#f8fafc",
              color: "#1a202c",
              fontSize: "15px",
              fontWeight: "500",
              minHeight: "120px",
              resize: "vertical",
              transition: "all 0.2s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}
          />
        </div>

        {/* Skills */}
        <div style={{ marginBottom: "30px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "10px", 
            fontSize: "14px", 
            fontWeight: "600", 
            color: "#4a5568" 
          }}>
            Skills
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "12px" }}>
            {profileData.skills.map((skill, index) => (
              <div 
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "linear-gradient(135deg, #f0f4ff, #e6edff)",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  gap: "8px",
                  border: "1px solid #d0e0ff",
                  transition: "all 0.2s ease"
                }}
              >
                {editMode ? (
                  <>
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleSkillChange(index, e.target.value)}
                      style={{
                        border: "none",
                        background: "transparent",
                        outline: "none",
                        width: "80px",
                        fontWeight: "500",
                        color: "#1a202c"
                      }}
                    />
                    <button
                      onClick={() => removeSkill(index)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "#ef4444",
                        padding: "0",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50%",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <FiX size={16} />
                    </button>
                  </>
                ) : (
                  <span style={{ fontWeight: "500", color: "#1a202c" }}>{skill}</span>
                )}
              </div>
            ))}
            {editMode && (
              <button
                onClick={addSkill}
                style={{
                  background: "none",
                  border: "1px dashed #d0d0d0",
                  borderRadius: "20px",
                  padding: "8px 16px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#64748b",
                  fontWeight: "500",
                  transition: "all 0.2s ease"
                }}
              >
                <FiPlus size={16} /> Add Skill
              </button>
            )}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ 
                background: "linear-gradient(135deg, #1640ff, #0f2fb8)", 
                padding: "8px", 
                borderRadius: "10px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <FiAward size={18} color="white" />
              </div>
              <h4 style={{ margin: 0, fontSize: "20px", color: "#1a202c", fontWeight: "600" }}>
                Professional Experience
              </h4>
            </div>
            {editMode && (
              <button
                onClick={() => setShowModal(true)}
                style={{
                  padding: "10px 18px",
                  background: "linear-gradient(135deg, #1640ff, #0f2fb8)",
                  color: "white",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "15px",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px rgba(22,64,255,0.2)"
                }}
              >
                <FiPlus /> Add Experience
              </button>
            )}
          </div>
          
          {experiences.length === 0 ? (
            <div style={{
              padding: "30px",
              textAlign: "center",
              background: "#f8fafc",
              borderRadius: "16px",
              color: "#64748b",
              border: "1px dashed #e2e8f0"
            }}>
              <FiBriefcase size={40} style={{ marginBottom: "12px", color: "#cbd5e0" }} />
              <p>No experience added yet</p>
            </div>
          ) : (
            experiences.map((exp) => (
              <div
                key={exp.id}
                style={{
                  background: "#f8fafc",
                  padding: "20px",
                  borderRadius: "16px",
                  marginBottom: "16px",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ margin: "0 0 6px", fontSize: "18px", color: "#1a202c", fontWeight: "600" }}>
                      {exp.position}
                    </h4>
                    <p style={{ margin: "0 0 6px", color: "#4a5568", fontSize: "16px", fontWeight: "500" }}>
                      {exp.organization}
                    </p>
                    <p style={{ margin: "0 0 10px", color: "#64748b", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <FiCalendar size={14} /> {exp.duration}
                    </p>
                    <p style={{ margin: 0, color: "#4a5568", fontSize: "15px", lineHeight: "1.5" }}>
                      {exp.description}
                    </p>
                  </div>
                  {editMode && (
                    <button
                      onClick={() => deleteExperience(exp.id)}
                      style={{
                        background: "#fef2f2",
                        border: "1px solid #fecaca",
                        cursor: "pointer",
                        color: "#ef4444",
                        padding: "8px",
                        borderRadius: "10px",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <FiTrash2 />
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Account Settings */}
      <div
        style={{ 
          marginTop: "24px", 
          background: "white", 
          padding: "30px", 
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
          border: "1px solid rgba(22,64,255,0.1)"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
          <div style={{ 
            background: "linear-gradient(135deg, #1640ff, #0f2fb8)", 
            padding: "10px", 
            borderRadius: "12px", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center" 
          }}>
            <FiSettings size={20} color="white" />
          </div>
          <h3 style={{ margin: 0, fontSize: "22px", color: "#1a202c", fontWeight: "600" }}>
            Account Settings
          </h3>
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <button
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textAlign: "left",
              fontSize: "15px",
              color: "#4a5568",
              fontWeight: "500",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ 
              background: "#f0f4ff", 
              padding: "8px", 
              borderRadius: "10px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <FiLock size={16} color="#1640ff" />
            </div>
            Change Password
          </button>
          
          <button
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textAlign: "left",
              fontSize: "15px",
              color: "#4a5568",
              fontWeight: "500",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ 
              background: "#f0f4ff", 
              padding: "8px", 
              borderRadius: "10px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <FiMail size={16} color="#1640ff" />
            </div>
            Update Email
          </button>
          
          <button
            onClick={() => setShowDeleteConfirm(true)}
            style={{
              padding: "16px 20px",
              borderRadius: "12px",
              background: "#fef2f2",
              border: "1px solid #fecaca",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textAlign: "left",
              fontSize: "15px",
              color: "#ef4444",
              fontWeight: "500",
              transition: "all 0.2s ease"
            }}
          >
            <div style={{ 
              background: "#fee2e2", 
              padding: "8px", 
              borderRadius: "10px", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center" 
            }}>
              <FiTrash2 size={16} color="#ef4444" />
            </div>
            Delete Account
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "linear-gradient(135deg, #10b981, #059669)",
            color: "white",
            padding: "16px 24px",
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            zIndex: 1000,
            animation: "slideIn 0.3s ease-out"
          }}
        >
          <FiCheckCircle size={20} />
          <span style={{ fontWeight: "500" }}>Your profile has been updated successfully!</span>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)"
          }}
        >
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "20px", 
            width: "450px",
            maxWidth: "90%",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          }}>
            <div style={{ 
              background: "#fee2e2", 
              width: "60px", 
              height: "60px", 
              borderRadius: "50%", 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              margin: "0 auto 20px"
            }}>
              <FiTrash2 size={30} color="#ef4444" />
            </div>
            <h3 style={{ margin: "0 0 16px", color: "#1a202c", fontSize: "22px", fontWeight: "600", textAlign: "center" }}>
              Delete Account
            </h3>
            <p style={{ margin: "0 0 30px", color: "#64748b", textAlign: "center", lineHeight: "1.6" }}>
              Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "#f3f4f6",
                  color: "#4a5568",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle account deletion
                  setShowDeleteConfirm(false);
                }}
                style={{
                  padding: "12px 24px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px rgba(239,68,68,0.2)"
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Experience Modal */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)"
          }}
        >
          <div style={{ 
            background: "white", 
            padding: "32px", 
            borderRadius: "20px", 
            width: "550px",
            maxWidth: "90%",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ 
                  background: "linear-gradient(135deg, #1640ff, #0f2fb8)", 
                  padding: "10px", 
                  borderRadius: "12px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center" 
                }}>
                  <FiBriefcase size={20} color="white" />
                </div>
                <h3 style={{ margin: 0, color: "#1a202c", fontSize: "22px", fontWeight: "600" }}>Add Experience</h3>
              </div>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: "#f3f4f6",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "10px",
                  transition: "all 0.2s ease"
                }}
              >
                <FiX size={20} color="#64748B" />
              </button>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  color: "#4a5568" 
                }}>
                  Position
                </label>
                <input
                  type="text"
                  placeholder="e.g. Senior Software Engineer"
                  value={expInput.position}
                  onChange={(e) => setExpInput({ ...expInput, position: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "15px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  color: "#4a5568" 
                }}>
                  Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. Tech Company"
                  value={expInput.organization}
                  onChange={(e) => setExpInput({ ...expInput, organization: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "15px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  color: "#4a5568" 
                }}>
                  Duration
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2020 - Present"
                  value={expInput.duration}
                  onChange={(e) => setExpInput({ ...expInput, duration: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "15px",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                />
              </div>
              
              <div>
                <label style={{ 
                  display: "block", 
                  marginBottom: "8px", 
                  fontSize: "14px", 
                  fontWeight: "600", 
                  color: "#4a5568" 
                }}>
                  Description
                </label>
                <textarea
                  placeholder="Brief description of your role and responsibilities"
                  value={expInput.description}
                  onChange={(e) => setExpInput({ ...expInput, description: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: "1px solid #e2e8f0",
                    fontSize: "15px",
                    minHeight: "100px",
                    resize: "vertical",
                    transition: "all 0.2s ease",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                  }}
                />
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "16px", marginTop: "24px", justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  background: "#f3f4f6",
                  color: "#4a5568",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "16px",
                  transition: "all 0.2s ease"
                }}
              >
                Cancel
              </button>
              <button
                onClick={addExperience}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #1640ff, #0f2fb8)",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "500",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  boxShadow: "0 4px 6px rgba(22,64,255,0.2)"
                }}
              >
                Save Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}