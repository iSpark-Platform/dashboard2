"use client";
import React, { useState, useEffect } from 'react';
import { FiSearch, FiFilter, FiCheckCircle, FiXCircle, FiDollarSign, FiEye, FiCalendar, FiFileText, FiX, FiDownload } from 'react-icons/fi';

const PaymentValidationPage = () => {
  const [payments, setPayments] = useState([]);
  const [filteredPayments, setFilteredPayments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [showProofModal, setShowProofModal] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  
  // Simulate fetching data from API
  useEffect(() => {
    const mockPayments = [
      {
        id: 1,
        studentName: 'Alice Brown',
        studentEmail: 'alice@example.com',
        internship: '3D Printing & Digital Fabrication for Engineers',
        date: '2023-11-15',
        amount: 500,
        status: 'Pending',
        proofType: 'image',
        proofUrl: 'https://picsum.photos/seed/payment1/800/600.jpg',
        notes: ''
      },
      {
        id: 2,
        studentName: 'Bob Wilson',
        studentEmail: 'bob@example.com',
        internship: 'Cloud & Edge Computing for Connected Intelligence',
        date: '2023-11-14',
        amount: 750,
        status: 'Approved',
        proofType: 'pdf',
        proofUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: 'Payment verified successfully.'
      },
      {
        id: 3,
        studentName: 'Charlie Davis',
        studentEmail: 'charlie@example.com',
        internship: 'IoT & IIoT for Smart Systems and Industry 4.0',
        date: '2023-11-13',
        amount: 600,
        status: 'Pending',
        proofType: 'image',
        proofUrl: 'https://picsum.photos/seed/payment3/800/600.jpg',
        notes: ''
      },
      {
        id: 4,
        studentName: 'Diana Miller',
        studentEmail: 'diana@example.com',
        internship: 'Applied AI & Machine Learning: From Models to Real-World Applications',
        date: '2023-11-12',
        amount: 450,
        status: 'Rejected',
        proofType: 'image',
        proofUrl: 'https://picsum.photos/seed/payment4/800/600.jpg',
        notes: 'Receipt is unclear. Please upload a valid proof of payment.'
      },
      {
        id: 5,
        studentName: 'Ethan Garcia',
        studentEmail: 'ethan@example.com',
        internship: 'Smart Robotics & Industry 4.0 Automation Internship',
        date: '2023-11-11',
        amount: 800,
        status: 'Pending',
        proofType: 'pdf',
        proofUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        notes: ''
      }
    ];
    
    setPayments(mockPayments);
    setFilteredPayments(mockPayments);
  }, []);
  
  // Filter payments based on search term and status
  useEffect(() => {
    let filtered = payments;
    
    if (searchTerm) {
      filtered = filtered.filter(payment =>
        payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.studentEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.internship.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(payment => payment.status === statusFilter);
    }
    
    setFilteredPayments(filtered);
  }, [searchTerm, statusFilter, payments]);
  
  // Handle view payment proof
  const handleViewProof = (payment) => {
    setSelectedPayment(payment);
    setAdminNotes(payment.notes || '');
    setShowProofModal(true);
  };
  
  // Handle close modal
  const handleCloseModal = () => {
    setShowProofModal(false);
    setSelectedPayment(null);
    setAdminNotes('');
  };
  
  // Handle approve payment
  const handleApprovePayment = () => {
    if (!selectedPayment) return;
    
    const updatedPayments = payments.map(payment =>
      payment.id === selectedPayment.id
        ? { ...payment, status: 'Approved', notes: adminNotes }
        : payment
    );
    
    setPayments(updatedPayments);
    handleCloseModal();
  };
  
  // Handle reject payment
  const handleRejectPayment = () => {
    if (!selectedPayment) return;
    
    const updatedPayments = payments.map(payment =>
      payment.id === selectedPayment.id
        ? { ...payment, status: 'Rejected', notes: adminNotes }
        : payment
    );
    
    setPayments(updatedPayments);
    handleCloseModal();
  };
  
  // Get status badge style
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: '#fffbeb', color: '#b45309', borderColor: '#fde68a' };
      case 'Approved':
        return { backgroundColor: '#f0fdf4', color: '#166534', borderColor: '#bbf7d0' };
      case 'Rejected':
        return { backgroundColor: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' };
      default:
        return { backgroundColor: '#f8fafc', color: '#475569', borderColor: '#e2e8f0' };
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Payments & Validation</h1>
        <p style={styles.subtitle}>Review and validate student payment submissions</p>
      </div>
      
      {/* Search and Filters */}
      <div style={styles.filtersContainer}>
        <div style={styles.searchContainer}>
          <FiSearch size={18} color="#718096" style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search by student name, email, or internship..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.filterContainer}>
          <FiFilter size={18} color="#718096" style={styles.filterIcon} />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>
      
      {/* Pending Payments Alert */}
      {filteredPayments.some(p => p.status === 'Pending') && (
        <div style={styles.alertCard}>
          <FiDollarSign size={24} color="#EF7C00" style={styles.alertIcon} />
          <div style={styles.alertContent}>
            <h3 style={styles.alertTitle}>Pending Payment Validations</h3>
            <p style={styles.alertMessage}>
              {filteredPayments.filter(p => p.status === 'Pending').length} payments require your attention
            </p>
          </div>
        </div>
      )}
      
      {/* Payments Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.tableCell}>Student Name</th>
              <th style={styles.tableCell}>Email</th>
              <th style={styles.tableCell}>Internship</th>
              <th style={styles.tableCell}>Date</th>
              <th style={styles.tableCell}>Amount</th>
              <th style={styles.tableCell}>Status</th>
              <th style={styles.tableCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map(payment => (
              <tr key={payment.id} style={styles.tableRow}>
                <td style={styles.tableCell}>{payment.studentName}</td>
                <td style={styles.tableCell}>{payment.studentEmail}</td>
                <td style={styles.tableCell}>{payment.internship}</td>
                <td style={styles.tableCell}>{new Date(payment.date).toLocaleDateString()}</td>
                <td style={styles.tableCell}>${payment.amount}</td>
                <td style={styles.tableCell}>
                  <span style={{ ...styles.statusBadge, ...getStatusBadgeStyle(payment.status) }}>
                    {payment.status}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  <button
                    onClick={() => handleViewProof(payment)}
                    style={styles.actionButton}
                    title="View Proof"
                  >
                    <FiEye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Payment Proof Modal */}
      {showProofModal && selectedPayment && (
        <div style={styles.modalOverlay} onClick={handleCloseModal}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h2 style={styles.modalTitle}>Payment Proof Validation</h2>
              <button style={styles.closeButton} onClick={handleCloseModal}>
                <FiX size={20} />
              </button>
            </div>
            
            <div style={styles.modalBody}>
              <div style={styles.paymentInfo}>
                <div style={styles.infoSection}>
                  <h3 style={styles.sectionTitle}>Student Information</h3>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Name:</span>
                    <span style={styles.infoValue}>{selectedPayment.studentName}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Email:</span>
                    <span style={styles.infoValue}>{selectedPayment.studentEmail}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Internship:</span>
                    <span style={styles.infoValue}>{selectedPayment.internship}</span>
                  </div>
                </div>
                
                <div style={styles.infoSection}>
                  <h3 style={styles.sectionTitle}>Payment Details</h3>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Date:</span>
                    <span style={styles.infoValue}>{new Date(selectedPayment.date).toLocaleDateString()}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Amount:</span>
                    <span style={styles.infoValue}>${selectedPayment.amount}</span>
                  </div>
                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Status:</span>
                    <span style={{ ...styles.statusBadge, ...getStatusBadgeStyle(selectedPayment.status) }}>
                      {selectedPayment.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div style={styles.proofSection}>
                <h3 style={styles.sectionTitle}>Payment Proof</h3>
                <div style={styles.proofContainer}>
                  {selectedPayment.proofType === 'image' ? (
                    <img src={selectedPayment.proofUrl} alt="Payment Proof" style={styles.proofImage} />
                  ) : (
                    <div style={styles.pdfPreview}>
                      <FiFileText size={48} color="#EF7C00" />
                      <p>PDF Document</p>
                      <a
                        href={selectedPayment.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.downloadLink}
                      >
                        <FiDownload size={16} />
                        Open PDF
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div style={styles.notesSection}>
                <h3 style={styles.sectionTitle}>Admin Notes</h3>
                <textarea
                  value={adminNotes}
                  onChange={(e) => setAdminNotes(e.target.value)}
                  placeholder="Add notes about this payment validation..."
                  rows={4}
                  style={styles.notesTextarea}
                />
              </div>
              
              <div style={styles.modalActions}>
                <button
                  onClick={handleRejectPayment}
                  style={styles.rejectButton}
                  disabled={selectedPayment.status === 'Rejected'}
                >
                  <FiXCircle size={16} />
                  Reject Payment
                </button>
                <button
                  onClick={handleApprovePayment}
                  style={styles.approveButton}
                  disabled={selectedPayment.status === 'Approved'}
                >
                  <FiCheckCircle size={16} />
                  Approve Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh',
    padding: '20px',
    color: '#333'
  },
  header: {
    marginBottom: '24px'
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#1a202c'
  },
  subtitle: {
    fontSize: '16px',
    color: '#718096',
    margin: '0'
  },
  filtersContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    marginBottom: '24px',
    alignItems: 'center'
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    minWidth: '250px'
  },
  searchIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  searchInput: {
    width: '100%',
    padding: '10px 12px 10px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none'
  },
  filterContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  filterIcon: {
    position: 'absolute',
    left: '12px',
    pointerEvents: 'none'
  },
  filterSelect: {
    appearance: 'none',
    padding: '10px 12px 10px 40px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23718096' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    paddingRight: '36px'
  },
  alertCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#fff8f0',
    border: '1px solid #fde68a',
    marginBottom: '24px'
  },
  alertIcon: {
    flexShrink: 0
  },
  alertContent: {
    flex: '1'
  },
  alertTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 4px 0',
    color: '#b45309'
  },
  alertMessage: {
    fontSize: '14px',
    color: '#b45309',
    margin: 0
  },
  tableContainer: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  tableHeader: {
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: '#f7fafc'
  },
  tableRow: {
    borderBottom: '1px solid #e2e8f0'
  },
  tableCell: {
    padding: '16px',
    textAlign: 'left',
    fontSize: '14px'
  },
  statusBadge: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '500',
    border: '1px solid'
  },
  actionButton: {
    padding: '8px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f7fafc',
    color: '#4a5568',
    cursor: 'pointer',
    transition: 'background-color 0.2s'
  },
  modalOverlay: {
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
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '800px',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #e2e8f0'
  },
  modalTitle: {
    fontSize: '20px',
    fontWeight: '600',
    margin: 0,
    color: '#1a202c'
  },
  closeButton: {
    padding: '8px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#f7fafc',
    color: '#4a5568',
    cursor: 'pointer'
  },
  modalBody: {
    padding: '20px'
  },
  paymentInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    marginBottom: '24px'
  },
  infoSection: {
    flex: '1',
    minWidth: '200px'
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 12px 0',
    color: '#1a202c'
  },
  infoRow: {
    display: 'flex',
    marginBottom: '8px'
  },
  infoLabel: {
    fontSize: '14px',
    color: '#718096',
    width: '80px',
    flexShrink: 0
  },
  infoValue: {
    fontSize: '14px',
    color: '#4a5568',
    flex: '1'
  },
  proofSection: {
    marginBottom: '24px'
  },
  proofContainer: {
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: '#f7fafc'
  },
  proofImage: {
    maxWidth: '100%',
    maxHeight: '400px',
    objectFit: 'contain'
  },
  pdfPreview: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    padding: '24px'
  },
  downloadLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    borderRadius: '6px',
    backgroundColor: '#EF7C00',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500'
  },
  notesSection: {
    marginBottom: '24px'
  },
  notesTextarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical'
  },
  modalActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px'
  },
  rejectButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#fff',
    color: '#dc2626',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    border: '1px solid #fecaca'
  },
  approveButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '10px 16px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
  }
};

export default PaymentValidationPage;