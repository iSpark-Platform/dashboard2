"use client";
import React, { useState } from 'react';
import { FiUser,  FiEdit2,FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiChevronRight, FiShield, FiLogOut } from 'react-icons/fi';

const AdminProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Alexandra Admin',
    email: 'admin@techinternpro.com',
    phone: '+1 (555) 987-6543',
    role: 'Super Administrator',
    avatar: 'https://picsum.photos/seed/admin/150/150.jpg'
  });

  const [passwordSection, setPasswordSection] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });

  const [lastLogin] = useState('2023-11-15 14:35:22 UTC');
  const [securityStatus] = useState('Good');

  const handleProfileChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const handlePasswordChange = (field, value) => {
    setPasswords({ ...passwords, [field]: value });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({ ...showPasswords, [field]: !showPasswords[field] });
  };

  const handleSaveProfile = () => {
    alert('Profile Saved!');
    // API call logic here
  };

  const handleSavePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password Changed!');
    setPasswords({ current: '', new: '', confirm: '' });
    setPasswordSection(false);
    // API call logic here
  };

  return (
    <div style={styles.container}>
      <div style={styles.breadcrumb}>
        <span>Dashboard</span>
        <FiChevronRight size={14} color="#718096" />
        <span>Admin Profile</span>
      </div>

      <h1 style={styles.title}>Admin Profile</h1>
      <p style={styles.subtitle}>Manage your account details and security</p>

      <div style={styles.grid}>
        {/* Main Profile Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Profile Information</h3>
            <button style={styles.editButton}><FiEdit2 size={16} /> Edit</button>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.avatarContainer}>
              <img src={profile.avatar} alt="Admin Avatar" style={styles.avatar} />
              <button style={styles.changeAvatarButton}>Change Avatar</button>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.floatingLabel}>Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleProfileChange('name', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.floatingLabel}>Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleProfileChange('email', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.floatingLabel}>Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleProfileChange('phone', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.floatingLabel}>Role</label>
              <input
                type="text"
                value={profile.role}
                disabled
                style={{ ...styles.input, backgroundColor: '#f1f5f9', color: '#64748b' }}
              />
            </div>
            <button onClick={handleSaveProfile} style={styles.saveButton}>Save Profile</button>
          </div>
        </div>

        {/* Security & Status Card */}
        <div style={styles.column}>
          {/* Security Card */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <FiLock size={20} color="#1640FF" />
              <h3 style={styles.cardTitle}>Security</h3>
            </div>
            <div style={styles.cardContent}>
              <button
                onClick={() => setPasswordSection(!passwordSection)}
                style={styles.sectionToggleButton}
              >
                Change Password
              </button>

              {passwordSection && (
                <div style={styles.passwordSection}>
                  <div style={styles.formGroup}>
                    <label style={styles.floatingLabel}>Current Password</label>
                    <div style={styles.passwordInputContainer}>
                      <input
                        type={showPasswords.current ? 'text' : 'password'}
                        value={passwords.current}
                        onChange={(e) => handlePasswordChange('current', e.target.value)}
                        style={styles.input}
                      />
                      <button onClick={() => togglePasswordVisibility('current')} style={styles.visibilityToggle}>
                        {showPasswords.current ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.floatingLabel}>New Password</label>
                    <div style={styles.passwordInputContainer}>
                      <input
                        type={showPasswords.new ? 'text' : 'password'}
                        value={passwords.new}
                        onChange={(e) => handlePasswordChange('new', e.target.value)}
                        style={styles.input}
                      />
                      <button onClick={() => togglePasswordVisibility('new')} style={styles.visibilityToggle}>
                        {showPasswords.new ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <label style={styles.floatingLabel}>Confirm New Password</label>
                    <div style={styles.passwordInputContainer}>
                      <input
                        type={showPasswords.confirm ? 'text' : 'password'}
                        value={passwords.confirm}
                        onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                        style={styles.input}
                      />
                      <button onClick={() => togglePasswordVisibility('confirm')} style={styles.visibilityToggle}>
                        {showPasswords.confirm ? <FiEyeOff size={16} /> : <FiEye size={16} />}
                      </button>
                    </div>
                  </div>
                  <button onClick={handleSavePassword} style={styles.saveButton}>Update Password</button>
                </div>
              )}
            </div>
          </div>

          {/* Status Card */}
          <div style={styles.statusCard}>
            <h4 style={styles.statusCardTitle}>Account Status</h4>
            <div style={styles.statusItem}>
              <FiUser size={18} color="#1640FF" />
              <div>
                <p style={styles.statusLabel}>Last Login</p>
                <p style={styles.statusValue}>{lastLogin}</p>
              </div>
            </div>
            <div style={styles.statusItem}>
              <FiShield size={18} color="#10B981" />
              <div>
                <p style={styles.statusLabel}>Security Status</p>
                <p style={styles.statusValue}>{securityStatus}</p>
              </div>
            </div>
            <button style={styles.logoutButton}>
              <FiLogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', padding: '24px', color: '#1a202c' },
  breadcrumb: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#718096', marginBottom: '24px' },
  title: { fontSize: '32px', fontWeight: '700', margin: '0 0 8px', color: '#1a202c' },
  subtitle: { fontSize: '16px', color: '#718096', margin: '0 0 32px' },
  grid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' },
  column: { display: 'flex', flexDirection: 'column', gap: '24px' },
  card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', borderBottom: '1px solid #e2e8f0' },
  cardTitle: { fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a202c' },
  editButton: { display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', backgroundColor: '#f1f5f9', color: '#1640FF', border: 'none', borderRadius: '6px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  cardContent: { padding: '24px' },
  avatarContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '24px' },
  avatar: { width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e2e8f0' },
  changeAvatarButton: { padding: '8px 16px', backgroundColor: '#1640FF', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  formGroup: { marginBottom: '20px', position: 'relative' },
  floatingLabel: { position: 'absolute', Bottom: '30px', left: '12px', background: '#fff', padding: '0 4px', fontSize: '12px', fontWeight: '500', color: '#1640FF' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' },
  passwordSection: { marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' },
  passwordInputContainer: { position: 'relative', display: 'flex', alignItems: 'center' },
  visibilityToggle: { position: 'absolute', right: '12px', background: 'none', border: 'none', cursor: 'pointer', color: '#718096' },
  sectionToggleButton: { width: '100%', padding: '12px', backgroundColor: '#f1f5f9', color: '#1640FF', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', marginBottom: '20px' },
  saveButton: { width: '100%', padding: '12px', backgroundColor: '#1640FF', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
  statusCard: { backgroundColor: '#fff', borderRadius: '12px', padding: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
  statusCardTitle: { fontSize: '18px', fontWeight: '600', margin: '0 0 20px', color: '#1a202c' },
statusItem: {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  marginTop: "20px",
},



  statusLabel: { fontSize: '14px', color: '#718096', margin: '0 0 4px' },
  statusValue: { fontSize: '16px', fontWeight: '600', margin: 0, color: '#1a202c' },
  logoutButton: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px', backgroundColor: '#EF7C00', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', marginTop: '10px' },
};
export default AdminProfilePage;