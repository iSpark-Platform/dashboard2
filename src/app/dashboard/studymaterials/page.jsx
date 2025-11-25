"use client";
import React, { useState, useEffect } from "react";
import {
  FiPlus,
  FiUpload,
  FiSearch,
  FiFilter,
  FiChevronDown,
  FiFileText,
  FiVideo,
  FiBookOpen,
  FiTrash2,
  FiEdit,
  FiDownload,
  FiX,
  FiCalendar,
  FiFolder,
  FiGrid,
  FiList,
  FiMoreVertical,
  FiChevronRight,
} from "react-icons/fi";

export default function StudyMaterialsPage() {
  const [materials, setMaterials] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [materialTypeFilter, setMaterialTypeFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    file: null,
    videoLink: "",
    category: "",
    internship: "",
  });
  const [isDragging, setIsDragging] = useState(false);

  // Sample data
  useEffect(() => {
    // Simulate fetching materials
    setMaterials([
      {
        id: 1,
        title: "Introduction to Robotics",
        description: "Basic concepts and components of robotics systems",
        type: "PDF",
        category: "internship",
        subcategory: "Smart Robotics & Industry 4.0 Automation Internship",
        size: "2.4 MB",
        uploadDate: "2025-06-15",
        url: "#",
      },
      {
        id: 2,
        title: "Machine Learning Fundamentals",
        description: "Core principles of ML algorithms and applications",
        type: "Video",
        category: "internship",
        subcategory: "Applied AI & Machine Learning: From Models to Real-World Applications",
        size: "125 MB",
        uploadDate: "2025-06-10",
        url: "#",
      },
      {
        id: 3,
        title: "Cloud Architecture Patterns",
        description: "Design patterns for scalable cloud applications",
        type: "PPT",
        category: "internship",
        subcategory: "Cloud & Edge Computing for Connected Intelligence",
        size: "8.7 MB",
        uploadDate: "2025-06-05",
        url: "#",
      },
      {
        id: 4,
        title: "IoT Sensor Networks",
        description: "Building and managing interconnected sensor systems",
        type: "PDF",
        category: "internship",
        subcategory: "IoT & IIoT for Smart Systems and Industry 4.0",
        size: "4.2 MB",
        uploadDate: "2025-05-28",
        url: "#",
      },
      {
        id: 5,
        title: "3D Printing Techniques",
        description: "Advanced methods for additive manufacturing",
        type: "Video",
        category: "internship",
        subcategory: "3D Printing & Digital Fabrication for Engineers",
        size: "210 MB",
        uploadDate: "2025-05-20",
        url: "#",
      },
      {
        id: 6,
        title: "Humanoid Robotics Fundamentals",
        description: "Design and implementation of humanoid robots",
        type: "PDF",
        category: "course",
        subcategory: "Professional Diploma in Humanoid Robotics for Service Industries",
        size: "5.8 MB",
        uploadDate: "2025-06-12",
        url: "#",
      },
      {
        id: 7,
        title: "AI in Healthcare",
        description: "Applications of artificial intelligence in medical field",
        type: "Video",
        category: "course",
        subcategory: "Diploma in Artificial Intelligence Applications Across Industries",
        size: "180 MB",
        uploadDate: "2025-06-08",
        url: "#",
      },
      {
        id: 8,
        title: "Edge Computing Security",
        description: "Security challenges and solutions for edge computing",
        type: "PPT",
        category: "course",
        subcategory: "Industry-Ready Diploma in Cloud & Edge Technologies",
        size: "6.3 MB",
        uploadDate: "2025-06-02",
        url: "#",
      },
    ]);
  }, []);

  // Filter and sort materials
  const filteredMaterials = materials
    .filter(material => {
      const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            material.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || material.category === selectedCategory;
      const matchesType = materialTypeFilter === "All" || material.type === materialTypeFilter;
      
      return matchesSearch && matchesCategory && matchesType;
    })
    .sort((a, b) => {
      if (sortBy === "Newest") {
        return new Date(b.uploadDate) - new Date(a.uploadDate);
      } else {
        return new Date(a.uploadDate) - new Date(b.uploadDate);
      }
    });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this material?")) {
      setMaterials(materials.filter(material => material.id !== id));
    }
  };

  const handleUpload = () => {
    // Create a new material object
    const newMaterial = {
      id: materials.length + 1,
      title: formData.title,
      description: formData.description,
      type: formData.videoLink ? "Video" : formData.file ? formData.file.name.split('.').pop().toUpperCase() : "PDF",
      category: formData.category,
      subcategory: formData.internship,
      size: formData.file ? `${(formData.file.size / (1024 * 1024)).toFixed(1)} MB` : "Unknown",
      uploadDate: new Date().toISOString().split('T')[0],
      url: "#",
    };
    
    setMaterials([newMaterial, ...materials]);
    setShowUploadModal(false);
    setFormData({
      title: "",
      description: "",
      file: null,
      videoLink: "",
      category: "",
      internship: "",
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({
        ...formData,
        file: e.dataTransfer.files[0]
      });
    }
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "PDF":
        return <FiFileText size={24} color="#1640FF" />;
      case "PPT":
        return <FiBookOpen size={24} color="#1640FF" />;
      case "Video":
        return <FiVideo size={24} color="#EF7C00" />;
      default:
        return <FiFileText size={24} color="#1640FF" />;
    }
  };

  const internships = [
    "Smart Robotics & Industry 4.0 Automation Internship",
    "Applied AI & Machine Learning: From Models to Real-World Applications",
    "IoT & IIoT for Smart Systems and Industry 4.0",
    "Cloud & Edge Computing for Connected Intelligence",
    "3D Printing & Digital Fabrication for Engineers"
  ];
  
  const courses = [
    "Professional Diploma in Humanoid Robotics for Service Industries",
    "Diploma in Artificial Intelligence Applications Across Industries",
    "Industry-Ready Diploma in Cloud & Edge Technologies",
    "Career-Ready Diploma in Cybersecurity & Digital Forensics",
    "Year-long STEM Readiness for UG Students"
  ];
  
  const materialTypes = ["All", "PDF", "PPT", "Video"];

  return (
    <div style={{
      fontFamily: "Inter, Poppins, system-ui, sans-serif",
      background: "#F8FAFC",
      minHeight: "100vh",
      padding: "24px 32px",
      color: "#111827"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "24px"
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "700",
            color: "#111827"
          }}>
            Study Materials
          </h1>
          <p style={{
            margin: "4px 0 0",
            fontSize: "16px",
            color: "#64748B"
          }}>
            Upload and manage learning resources for your internships.
          </p>
        </div>
        
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            style={{
              background: "white",
              color: "#64748B",
              borderRadius: "10px",
              padding: "10px 14px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid #E2E8F0",
              cursor: "pointer",
              fontWeight: "500"
            }}
          >
            {viewMode === "grid" ? <FiList /> : <FiGrid />}
            {viewMode === "grid" ? "List View" : "Grid View"}
          </button>
          
          <button
            onClick={() => setShowUploadModal(true)}
            style={{
              background: "#1640FF",
              color: "white",
              borderRadius: "10px",
              padding: "12px 20px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
              boxShadow: "0 4px 12px rgba(22, 64, 255, 0.2)"
            }}
          >
            <FiPlus size={20} />
            Upload Material
          </button>
        </div>
      </div>

   

      {/* Toolbar */}
      <div style={{
        background: "white",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#F8FAFC",
          borderRadius: "10px",
          padding: "10px 16px",
          gap: "8px",
          flex: 1,
          minWidth: "280px",
          border: "1px solid #E2E8F0"
        }}>
          <FiSearch color="#64748B" />
          <input
            type="text"
            placeholder="Search materials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              width: "100%",
              fontSize: "14px"
            }}
          />
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#F8FAFC",
          borderRadius: "10px",
          padding: "10px 14px",
          gap: "8px",
          border: "1px solid #E2E8F0"
        }}>
          <FiFolder color="#64748B" />
          <select
            value={materialTypeFilter}
            onChange={(e) => setMaterialTypeFilter(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "14px",
              appearance: "none",
              cursor: "pointer"
            }}
          >
            {materialTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <FiChevronDown color="#64748B" size={16} />
        </div>

        <div style={{
          display: "flex",
          alignItems: "center",
          background: "#F8FAFC",
          borderRadius: "10px",
          padding: "10px 14px",
          gap: "8px",
          border: "1px solid #E2E8F0"
        }}>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: "14px",
              appearance: "none",
              cursor: "pointer"
            }}
          >
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
          <FiChevronDown color="#64748B" size={16} />
        </div>
      </div>

      {/* Materials Grid/List */}
      {filteredMaterials.length === 0 ? (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          background: "white",
          borderRadius: "20px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
          textAlign: "center"
        }}>
          <div style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #F0F4FF 0%, #FFF0E5 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px"
          }}>
            <FiUpload size={40} color="#1640FF" />
          </div>
          <h3 style={{
            margin: "0 0 8px",
            fontSize: "24px",
            fontWeight: "600",
            color: "#111827"
          }}>
            No materials uploaded yet
          </h3>
          <p style={{
            margin: "0 0 24px",
            fontSize: "16px",
            color: "#64748B",
            maxWidth: "500px"
          }}>
            Start adding resources to your internships to help students learn more effectively.
          </p>
          <button
            onClick={() => setShowUploadModal(true)}
            style={{
              background: "#1640FF",
              color: "white",
              borderRadius: "10px",
              padding: "12px 24px",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px"
            }}
          >
            <FiPlus size={20} />
            Upload First Material
          </button>
        </div>
      ) : (
        <div className={viewMode === "grid" ? "materials-grid" : "materials-list"}>
          {filteredMaterials.map(material => (
            <div
              key={material.id}
              className="material-card"
              style={{
                background: "white",
                borderRadius: viewMode === "grid" ? "20px" : "12px",
                padding: viewMode === "grid" ? "24px" : "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                border: "1px solid #F1F5F9"
              }}
            >
              {/* Accent Strip */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "4px",
                height: "100%",
                background: material.type === "Video" ? "#EF7C00" : "#1640FF"
              }}></div>

              {viewMode === "grid" ? (
                // Grid View
                <div>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px"
                  }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "12px",
                      background: material.type === "Video" ? "#FFF0E5" : "#F0F4FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      {getFileIcon(material.type)}
                    </div>
                    <button style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FiMoreVertical color="#64748B" />
                    </button>
                  </div>

                  <h3 style={{
                    margin: "0 0 8px",
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#111827",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                  }}>
                    {material.title}
                  </h3>

                  <p style={{
                    margin: "0 0 16px",
                    fontSize: "14px",
                    color: "#64748B",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}>
                    {material.description}
                  </p>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "16px"
                  }}>
                    <span style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "500",
                      background: material.category === "internship" ? "#1640FF15" : "#EF7C0015",
                      color: material.category === "internship" ? "#1640FF" : "#EF7C00"
                    }}>
                      {material.category === "internship" ? "Internship" : "Course"}
                    </span>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                    fontSize: "12px",
                    color: "#64748B"
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <FiFolder size={14} />
                      <span style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        maxWidth: "150px"
                      }}>
                        {material.subcategory}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <FiCalendar size={14} />
                      {material.uploadDate}
                    </div>
                  </div>

                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span style={{
                      fontSize: "12px",
                      color: "#64748B"
                    }}>
                      {material.size}
                    </span>
                    <div className="card-actions" style={{
                      display: "flex",
                      gap: "8px",
                      opacity: 0.7
                    }}>
                      <button style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <FiBookOpen size={16} color="#1640FF" />
                      </button>
                      <button style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <FiDownload size={16} color="#1640FF" />
                      </button>
                      <button style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <FiEdit size={16} color="#1640FF" />
                      </button>
                      <button
                        onClick={() => handleDelete(material.id)}
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          padding: "6px",
                          borderRadius: "6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <FiTrash2 size={16} color="#EF4444" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                // List View
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px"
                }}>
                  <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "10px",
                    background: material.type === "Video" ? "#FFF0E5" : "#F0F4FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {getFileIcon(material.type)}
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      margin: "0 0 4px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#111827"
                    }}>
                      {material.title}
                    </h3>

                    <p style={{
                      margin: "0 0 8px",
                      fontSize: "14px",
                      color: "#64748B"
                    }}>
                      {material.description}
                    </p>

                    <div style={{
                      display: "flex",
                      gap: "16px",
                      fontSize: "12px",
                      color: "#64748B"
                    }}>
                      <span style={{
                        padding: "2px 8px",
                        borderRadius: "12px",
                        fontWeight: "500",
                        background: material.category === "internship" ? "#1640FF15" : "#EF7C0015",
                        color: material.category === "internship" ? "#1640FF" : "#EF7C00"
                      }}>
                        {material.category === "internship" ? "Internship" : "Course"}
                      </span>
                      <span>{material.size}</span>
                      <span>{material.uploadDate}</span>
                    </div>
                  </div>

                  <div className="card-actions" style={{
                    display: "flex",
                    gap: "8px",
                    opacity: 0.7
                  }}>
                    <button style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "6px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FiBookOpen size={16} color="#1640FF" />
                    </button>
                    <button style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "6px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FiDownload size={16} color="#1640FF" />
                    </button>
                    <button style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: "6px",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <FiEdit size={16} color="#1640FF" />
                    </button>
                    <button
                      onClick={() => handleDelete(material.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "6px",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <FiTrash2 size={16} color="#EF4444" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "32px",
            width: "600px",
            maxWidth: "90%",
            maxHeight: "90vh",
            overflowY: "auto"
          }}>
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px"
            }}>
              <h2 style={{
                margin: 0,
                fontSize: "24px",
                fontWeight: "600",
                color: "#111827"
              }}>
                Upload Material
              </h2>
              <button
                onClick={() => setShowUploadModal(false)}
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <FiX size={24} color="#64748B" />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter material title"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    fontSize: "14px"
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the material"
                  rows={3}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    fontSize: "14px",
                    resize: "vertical"
                  }}
                />
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    fontSize: "14px",
                    appearance: "none",
                    background: "white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\") no-repeat right 12px center",
                    backgroundSize: "16px"
                  }}
                >
                  <option value="">Select a category</option>
                  <option value="internship">Internship</option>
                  <option value="course">Course</option>
                </select>
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Internship/Course
                </label>
                <select
                  value={formData.internship}
                  onChange={(e) => setFormData({ ...formData, internship: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    fontSize: "14px",
                    appearance: "none",
                    background: "white url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\") no-repeat right 12px center",
                    backgroundSize: "16px"
                  }}
                >
                  <option value="">Select an internship or course</option>
                  {internships.map(internship => (
                    <option key={internship} value={internship}>{internship}</option>
                  ))}
                  {courses.map(course => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  File Upload
                </label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{
                    border: isDragging ? "2px dashed #1640FF" : "2px dashed #E2E8F0",
                    borderRadius: "10px",
                    padding: "24px",
                    textAlign: "center",
                    background: isDragging ? "#F0F4FF" : "#F8FAFC",
                    cursor: "pointer"
                  }}
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  <FiUpload size={32} color={isDragging ? "#1640FF" : "#64748B"} />
                  <p style={{
                    margin: "12px 0 4px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: isDragging ? "#1640FF" : "#374151"
                  }}>
                    {isDragging ? "Drop file here" : "Drag and drop or click to upload"}
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: "14px",
                    color: "#64748B"
                  }}>
                    {formData.file ? formData.file.name : "PDF, PPT, or Video (Max 500MB)"}
                  </p>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,.ppt,.pptx,.mp4,.mov,.avi"
                    onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div>
                <label style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151"
                }}>
                  Or Video Link
                </label>
                <input
                  type="url"
                  value={formData.videoLink}
                  onChange={(e) => setFormData({ ...formData, videoLink: e.target.value })}
                  placeholder="https://example.com/video"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    border: "1px solid #E2E8F0",
                    fontSize: "14px"
                  }}
                />
              </div>

              <div style={{
                display: "flex",
                gap: "12px",
                justifyContent: "flex-end",
                marginTop: "8px"
              }}>
                <button
                  onClick={() => setShowUploadModal(false)}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    background: "#F3F4F6",
                    color: "#374151",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500"
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  style={{
                    padding: "12px 20px",
                    borderRadius: "10px",
                    background: "#1640FF",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500"
                  }}
                >
                  Upload Material
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS for responsive grid and hover effects */}
      <style jsx>{`
        .materials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        
        .materials-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .material-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .material-card:hover .card-actions {
          opacity: 1;
        }
        
        @media (max-width: 1024px) {
          .materials-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        
        @media (max-width: 768px) {
          .materials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}