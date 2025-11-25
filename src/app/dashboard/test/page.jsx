"use client";
import React, { useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiCalendar,
  FiFileText,
  FiUsers,
  FiUpload,
  FiSend,
  FiEye,
  FiDownload,
  FiEdit,
  FiTrash2,
  FiX,
  FiFilter,
  FiBarChart2,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";

export default function AssignmentManagement() {
  const PRIMARY = "#1640ff";
  const ACCENT = "#EF7C00";

  const [showAddModal, setShowAddModal] = useState(false);
  const [showSubmissionsModal, setShowSubmissionsModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  /** SAMPLE ASSIGNMENTS **/
  const assignments = [
    {
      title: "Applied AI & Machine Learning: From Models to Real-World Applications",
      course: "Applied AI & Machine Learning",
      dueDate: "Jan 28, 2025",
      students: 32,
      submitted: 24,
      status: "Pending",
    },
    {
      title: "Smart Robotics & Industry 4.0 Automation Internship",
      course: "Smart Robotics & Automation",
      dueDate: "Jan 30, 2025",
      students: 28,
      submitted: 28,
      status: "Completed",
    },
    {
      title: "IoT & IIoT for Smart Systems and Industry 4.0",
      course: "IoT Systems",
      dueDate: "Feb 2, 2025",
      students: 30,
      submitted: 18,
      status: "Overdue",
    },
  ];

  /** STATUS COLOR FUNCTION */
  const badgeColor = (status) => {
    if (status === "Completed") return "#10b981";
    if (status === "Pending") return ACCENT;
    if (status === "Overdue") return "#ef4444";
    return PRIMARY;
  };

  /** MAIN PAGE **/
  return (
    <div style={styles.page}>
      {/* ===================== PAGE TITLE ===================== */}
      <h1 style={styles.pageTitle}>Assignment Management</h1>
      <p style={styles.subtitle}>
        Track, manage, and evaluate all assignments across your e-learning
        platform.
      </p>

      {/* ===================== SUMMARY CARDS ===================== */}
      <div style={styles.summaryGrid}>
        {[
          { label: "Total Assignments", value: "42", icon: <FiFileText /> },
          { label: "Pending", value: "12", icon: <FiCalendar />, color: ACCENT },
          { label: "Completed", value: "25", icon: <FiUsers />, color: "#10b981" },
          { label: "Overdue", value: "5", icon: <FiAlertCircle />, color: "#ef4444" },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              ...styles.summaryCard,
              borderLeft: `6px solid ${card.color || PRIMARY}`,
              ...(hoveredCard === index ? styles.summaryCardHover : {}),
            }}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardIcon}>{card.icon}</div>
            <div style={styles.cardValue}>{card.value}</div>
            <div style={styles.cardLabel}>{card.label}</div>
          </div>
        ))}
      </div>

      {/* ===================== ACTION BAR ===================== */}
      <div style={styles.actionBar}>
        {/* Search */}
        <div style={styles.searchBox}>
          <FiSearch size={18} color="#64748b" />
          <input
            placeholder="Search assignments..."
            style={styles.searchInput}
          />
        </div>

        {/* Filter Dropdown */}
        <div style={styles.filterDropdown}>
          <FiFilter size={16} color="#64748b" />
          <select 
            style={styles.filterSelect}
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
          >
            <option value="all">All Assignments</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>

        {/* Quick actions */}
        <button 
          style={{
            ...styles.actionBtn,
            ...(hoveredButton === "create" ? styles.actionBtnHover : {})
          }}
          onMouseEnter={() => setHoveredButton("create")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => setShowAddModal(true)}
        >
          <FiPlus size={18} />
          Create
        </button>

        <button 
          style={{
            ...styles.actionBtn,
            ...(hoveredButton === "upload" ? styles.actionBtnHover : {})
          }}
          onMouseEnter={() => setHoveredButton("upload")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => alert("Upload PDF functionality would be implemented here")}
        >
          <FiUpload size={18} />
          Upload PDF
        </button>

        <button 
          style={{
            ...styles.actionBtn,
            ...(hoveredButton === "reminder" ? styles.actionBtnHover : {})
          }}
          onMouseEnter={() => setHoveredButton("reminder")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => alert("Reminder would be sent to all students")}
        >
          <FiSend size={18} />
          Send Reminder
        </button>

        <button 
          style={{
            ...styles.actionBtn,
            backgroundColor: "#10b981",
            ...(hoveredButton === "report" ? styles.actionBtnHover : {})
          }}
          onMouseEnter={() => setHoveredButton("report")}
          onMouseLeave={() => setHoveredButton(null)}
          onClick={() => alert("Report generation would start here")}
        >
          <FiBarChart2 size={18} />
          Generate Report
        </button>
      </div>

      {/* ===================== ASSIGNMENT TABLE ===================== */}
      <div style={styles.tableBox}>
        <div style={styles.tableHeader}>
          <span style={styles.tableTitle}>Assignments Overview</span>
        </div>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Title</th>
              <th style={styles.th}>Course</th>
              <th style={styles.th}>Due Date</th>
              <th style={styles.th}>Students</th>
              <th style={styles.th}>Submitted %</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((a, i) => (
              <tr 
                key={i} 
                style={{
                  ...styles.tr,
                  ...(hoveredRow === i ? styles.trHover : {})
                }}
                onMouseEnter={() => setHoveredRow(i)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.td}>{a.title}</td>
                <td style={styles.td}>{a.course}</td>
                <td style={styles.td}>{a.dueDate}</td>
                <td style={styles.td}>{a.students}</td>

                {/* Progress Bar */}
                <td style={styles.td}>
                  <div style={styles.progressBar}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${(a.submitted / a.students) * 100}%`,
                        backgroundColor: PRIMARY,
                      }}
                    />
                  </div>
                  <span style={styles.progressText}>
                    {Math.round((a.submitted / a.students) * 100)}%
                  </span>
                </td>

                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.statusChip,
                      backgroundColor: badgeColor(a.status),
                    }}
                  >
                    {a.status}
                  </span>
                </td>

                <td style={styles.td}>
                  <div style={styles.actionButtons}>
                    <button
                      style={{
                        ...styles.actionIconButton,
                        ...(hoveredButton === `view-${i}` ? styles.actionIconButtonHover : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`view-${i}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => setShowSubmissionsModal(true)}
                      title="View Submissions"
                    >
                      <FiEye size={16} />
                    </button>
                    <button
                      style={{
                        ...styles.actionIconButton,
                        ...(hoveredButton === `edit-${i}` ? styles.actionIconButtonHover : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`edit-${i}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => alert(`Edit ${a.title}`)}
                      title="Edit Assignment"
                    >
                      <FiEdit size={16} />
                    </button>
                    <button
                      style={{
                        ...styles.actionIconButton,
                        ...(hoveredButton === `download-${i}` ? styles.actionIconButtonHover : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`download-${i}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => alert(`Download ${a.title}`)}
                      title="Download Assignment"
                    >
                      <FiDownload size={16} />
                    </button>
                    <button
                      style={{
                        ...styles.actionIconButton,
                        backgroundColor: "#ef4444",
                        ...(hoveredButton === `delete-${i}` ? styles.actionIconButtonHover : {})
                      }}
                      onMouseEnter={() => setHoveredButton(`delete-${i}`)}
                      onMouseLeave={() => setHoveredButton(null)}
                      onClick={() => {
                        if (window.confirm(`Are you sure you want to delete ${a.title}?`)) {
                          alert(`${a.title} would be deleted`);
                        }
                      }}
                      title="Delete Assignment"
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

      {/* ===================== CHART PLACEHOLDERS ===================== */}
      <div style={styles.chartGrid}>
        <div style={styles.chartBox}>
          <div style={styles.chartHeader}>
            <FiBarChart2 size={20} color={PRIMARY} />
            <span>Submissions Over Time</span>
          </div>
          <div style={styles.chartPlaceholder}>
            Chart visualization would appear here
          </div>
        </div>
        <div style={styles.chartBox}>
          <div style={styles.chartHeader}>
            <FiUsers size={20} color={PRIMARY} />
            <span>Grade Distribution</span>
          </div>
          <div style={styles.chartPlaceholder}>
            Chart visualization would appear here
          </div>
        </div>
      </div>

      {/* ===================== ADD ASSIGNMENT MODAL ===================== */}
      {showAddModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Create New Assignment</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowAddModal(false)}
              >
                <FiX size={18} />
              </button>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Assignment Title</label>
              <input placeholder="Enter assignment title" style={styles.modalInput} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Course</label>
              <select style={styles.modalInput}>
                <option>Select a course</option>
                <option>Applied AI & Machine Learning</option>
                <option>Smart Robotics & Automation</option>
                <option>IoT Systems</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Due Date</label>
              <input type="date" style={styles.modalInput} />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Description</label>
              <textarea
                placeholder="Enter assignment description"
                style={styles.modalTextarea}
              ></textarea>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.formLabel}>Attachments</label>
              <div style={styles.fileUpload}>
                <FiUpload size={24} color="#64748b" />
                <span style={styles.fileUploadText}>
                  Click to upload or drag and drop
                </span>
                <span style={styles.fileUploadSubtext}>
                  PDF, DOC, DOCX (MAX. 10MB)
                </span>
              </div>
            </div>

            <div style={styles.modalActions}>
              <button 
                style={styles.cancelBtn}
                onClick={() => setShowAddModal(false)}
              >
                Cancel
              </button>
              <button style={styles.saveBtn}>
                Create Assignment
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== SUBMISSION OVERVIEW MODAL ===================== */}
      {showSubmissionsModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalLarge}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Submission Overview</h2>
              <button 
                style={styles.closeButton}
                onClick={() => setShowSubmissionsModal(false)}
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Submission stats */}
            <div style={styles.submissionStats}>
              <div style={styles.statItem}>
                <span style={styles.statValue}>24</span>
                <span style={styles.statLabel}>Submitted</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>8</span>
                <span style={styles.statLabel}>Pending</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>75%</span>
                <span style={styles.statLabel}>Submission Rate</span>
              </div>
            </div>

            {/* Search and filter */}
            <div style={styles.modalSearchBar}>
              <div style={styles.searchBox}>
                <FiSearch size={18} color="#64748b" />
                <input
                  placeholder="Search students..."
                  style={styles.searchInput}
                />
              </div>
              <button style={styles.filterButton}>
                <FiFilter size={16} />
                Filter
              </button>
            </div>

            {/* Submission list */}
            <div style={styles.submissionList}>
              {[
                { name: "Aakash", status: "Submitted", grade: "A", file: "neural_networks.pdf" },
                { name: "Divya", status: "Submitted", grade: "B+", file: "neural_networks.docx" },
                { name: "Suman", status: "Pending", grade: "-", file: null },
                { name: "Ravi", status: "Submitted", grade: "A-", file: "neural_networks.zip" },
              ].map((student, i) => (
                <div key={i} style={styles.submissionRow}>
                  <div style={styles.studentInfo}>
                    <div style={styles.studentAvatar}>
                      {student.name.charAt(0)}
                    </div>
                    <div>
                      <div style={styles.studentName}>{student.name}</div>
                      <div style={styles.studentStatus}>
                        <FiClock size={12} color="#64748b" />
                        Submitted 2 days ago
                      </div>
                    </div>
                  </div>
                  
                  <div style={styles.submissionDetails}>
                    <span style={{
                      ...styles.statusChip,
                      backgroundColor: student.status === "Submitted" ? "#10b981" : "#f59e0b"
                    }}>
                      {student.status}
                    </span>
                    <span style={styles.grade}>{student.grade}</span>
                  </div>
                  
                  <div style={styles.submissionActions}>
                    {student.file && (
                      <button 
                        style={styles.viewFileBtn}
                        onClick={() => alert(`View ${student.file}`)}
                      >
                        <FiEye size={14} />
                        View
                      </button>
                    )}
                    <button 
                      style={styles.gradeBtn}
                      onClick={() => alert(`Grade ${student.name}`)}
                    >
                      <FiEdit size={14} />
                      Grade
                    </button>
                    <button 
                      style={styles.downloadBtn}
                      onClick={() => alert(`Download ${student.file || 'No file'}`)}
                    >
                      <FiDownload size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.modalActions}>
              <button style={styles.secondaryBtn}>
                Send Reminder to Pending
              </button>
              <button 
                style={styles.cancelBtn}
                onClick={() => setShowSubmissionsModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   ALL INLINE CSS STYLES  
   (Based on your screenshot: large fonts, bold labels, clean UI)
   ========================================================= */
const styles = {
  page: {
    padding: "40px",
    fontFamily: "Inter, sans-serif",
    background: "#f4f7fc",
    minHeight: "100vh",
  },

  pageTitle: {
    fontSize: "34px",
    fontWeight: "800",
    marginBottom: "6px",
    color: "#1e293b",
    letterSpacing: "-0.5px",
  },

  subtitle: {
    fontSize: "15px",
    color: "#64748b",
    marginBottom: "35px",
  },

  /* ---------------- SUMMARY CARDS ---------------- */
  summaryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "22px",
    marginBottom: "35px",
  },

  summaryCard: {
    background: "#ffffff",
    padding: "22px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  summaryCardHover: {
    transform: "translateY(-4px)",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },

  cardIcon: {
    fontSize: "26px",
    color: "#475569",
  },

  cardValue: {
    fontSize: "30px",
    fontWeight: "800",
    marginTop: "10px",
    color: "#0f172a",
  },

  cardLabel: {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "4px",
  },

  /* ---------------- ACTION BAR ---------------- */
  actionBar: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    marginBottom: "28px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "#ffffff",
    padding: "10px 14px",
    borderRadius: "12px",
    width: "40%",
    border: "1px solid #e2e8f0",
    boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
  },

  searchInput: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    width: "100%",
    color: "#334155",
  },

  filterDropdown: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#ffffff",
    padding: "10px 14px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 3px 10px rgba(0,0,0,0.04)",
  },

  filterSelect: {
    border: "none",
    outline: "none",
    fontSize: "14px",
    color: "#334155",
    background: "transparent",
    cursor: "pointer",
  },

  actionBtn: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "#1640ff",
    color: "white",
    padding: "10px 16px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    transition: "0.25s ease",
  },

  actionBtnHover: {
    background: "#0f2fcc",
    transform: "translateY(-2px)",
    boxShadow: "0 4px 12px rgba(22, 64, 255, 0.3)",
  },

  /* ---------------- TABLE ---------------- */
  tableBox: {
    background: "white",
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  },

  tableHeader: {
    marginBottom: "16px",
  },

  tableTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#1640ff",
    letterSpacing: "-0.4px",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  th: {
    textAlign: "left",
    padding: "14px",
    fontSize: "14px",
    fontWeight: "700",
    color: "#475569",
    background: "#f1f5f9",
  },

  tr: {
    borderBottom: "1px solid #eef2f5",
    transition: "background-color 0.2s ease",
  },

  trHover: {
    backgroundColor: "#f8fafc",
  },

  td: {
    padding: "14px",
    fontSize: "14px",
    color: "#334155",
  },

  /* ---------------- PROGRESS BAR ---------------- */
  progressBar: {
    width: "100%",
    height: "8px",
    background: "#e2e8f0",
    borderRadius: "6px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "6px",
  },

  progressText: {
    fontSize: "12px",
    marginLeft: "4px",
    color: "#475569",
  },

  /* ---------------- STATUS CHIP ---------------- */
  statusChip: {
    padding: "6px 12px",
    color: "white",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "capitalize",
    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
  },

  /* ---------------- ACTION BUTTONS ---------------- */
  actionButtons: {
    display: "flex",
    gap: "8px",
  },

  actionIconButton: {
    background: "#1640ff",
    border: "none",
    padding: "4px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  actionIconButtonHover: {
    transform: "scale(1.1)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },

  viewBtn: {
    background: "#1640ff",
    border: "none",
    padding: "8px",
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    transition: "0.2s ease",
  },

  viewBtnHover: {
    background: "#0f2fcc",
  },

  /* ---------------- CHART PLACEHOLDER ---------------- */
  chartGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "25px",
    marginTop: "35px",
  },

  chartBox: {
    background: "white",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
  },

  chartHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
  },

  chartPlaceholder: {
    height: "200px",
    background: "#f8fafc",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: "14px",
  },

  /* ---------------- MODALS ---------------- */
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    marginTop:"50px",
  },

  modal: {
    width: "450px",
    background: "white",
    padding: "0",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    overflow: "hidden",
  },

modalLarge: {
  width: "750px",
  maxWidth: "90%",
  maxHeight: "85vh", // Limit height to 85% of viewport
  background: "white",
  padding: "0",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column", // Important for proper scrolling
},

modalHeader: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 28px",
  borderBottom: "1px solid #e2e8f0",
  flexShrink: 0, // Prevent header from shrinking
},

modalTitle: {
  fontSize: "20px",
  fontWeight: "700",
  color: "#1640ff",
  margin: 0,
},


  closeButton: {
    background: "transparent",
    border: "none",
    color: "#64748b",
    cursor: "pointer",
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
  },

  formGroup: {
    padding: "0 32px 20px",
  },

  formLabel: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#374151",
    marginBottom: "8px",
  },

  modalInput: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    fontSize: "14px",
    transition: "border-color 0.2s ease",
  },

  modalTextarea: {
    width: "100%",
    padding: "13px",
    borderRadius: "10px",
    border: "1px solid #e2e8f0",
    height: "90px",
    fontSize: "14px",
    resize: "vertical",
  },

  fileUpload: {
    border: "2px dashed #d1d5db",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    cursor: "pointer",
    transition: "border-color 0.2s ease",
  },

  fileUploadText: {
    display: "block",
    fontSize: "14px",
    color: "#374151",
    marginTop: "8px",
  },

  fileUploadSubtext: {
    display: "block",
    fontSize: "12px",
    color: "#6b7280",
    marginTop: "4px",
  },

modalActions: {
  display: "flex",
  justifyContent: "space-between",
  gap: "12px",
  padding: "16px 28px",
  borderTop: "1px solid #e2e8f0",
  flexShrink: 0, // Prevent actions from shrinking
},

saveBtn: {
  padding: "10px 18px",
  background: "#1640ff",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
},

cancelBtn: {
  padding: "10px 18px",
  background: "#ef4444",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
},

secondaryBtn: {
  padding: "10px 18px",
  background: "#10b981",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.2s ease",
},
  /* ---------------- SUBMISSION MODAL ---------------- */
submissionStats: {
  display: "flex",
  padding: "16px 28px",
  borderBottom: "1px solid #e2e8f0",
  flexShrink: 0, // Prevent stats from shrinking
},

statItem: {
  flex: 1,
  textAlign: "center",
},

 statValue: {
  display: "block",
  fontSize: "22px",
  fontWeight: "700",
  color: "#1640ff",
},

statLabel: {
  display: "block",
  fontSize: "11px",
  color: "#64748b",
  marginTop: "2px",
},


modalSearchBar: {
  display: "flex",
  gap: "12px",
  padding: "16px 28px",
  borderBottom: "1px solid #e2e8f0",
  flexShrink: 0, // Prevent search bar from shrinking
},

  filterButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "#f3f4f6",
    color: "#374151",
    padding: "10px 14px",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "500",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

 submissionList: {
  flex: 1, // Take remaining space
  overflowY: "auto",
  padding: "16px 28px",
  minHeight: "200px",
  maxHeight: "350px", // Limit the list height
},

submissionRow: {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#f8fafc",
  padding: "14px",
  borderRadius: "10px",
  marginBottom: "10px",
},

studentAvatar: {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  background: "#1640ff",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "600",
  fontSize: "14px",
},

studentName: {
  fontSize: "15px",
  fontWeight: "600",
  color: "#1e293b",
},

studentStatus: {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  fontSize: "11px",
  color: "#64748b",
  marginTop: "2px",
},

grade: {
  fontSize: "15px",
  fontWeight: "700",
  color: "#1640ff",
  minWidth: "35px",
},

  submissionActions: {
    display: "flex",
    gap: "8px",
  },

 // Update button sizes in submission actions:
viewFileBtn: {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "6px 12px",
  background: "#1640ff",
  color: "white",
  fontSize: "12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
},

gradeBtn: {
  display: "flex",
  alignItems: "center",
  gap: "4px",
  padding: "6px 12px",
  background: "#10b981",
  color: "white",
  fontSize: "12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
},

downloadBtn: {
  display: "flex",
  alignItems: "center",
  padding: "6px 10px",
  background: "#6b7280",
  color: "white",
  fontSize: "12px",
  borderRadius: "6px",
  border: "none",
  cursor: "pointer",
  transition: "all 0.2s ease",
},
};