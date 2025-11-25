"use client";
import React, { useState } from 'react';
import { FiUser, FiEdit2, FiMail, FiPhone, FiLock, FiEye, FiEyeOff, FiChevronRight, FiShield, FiLogOut, FiCamera, FiCheck } from 'react-icons/fi';

const AdminProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Alexandra Admin',
    email: 'admin@techinternpro.com',
    phone: '+1 (555) 987-6543',
    role: 'Super Administrator',
    avatar: 'https://picsum.photos/seed/admin/150/150.jpg'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [passwordSection, setPasswordSection] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [showPasswords, setShowPasswords] = useState({ current: false, new: false, confirm: false });

  const [lastLogin] = useState('Nov 15, 2023 at 2:35 PM');
  const [securityStatus] = useState('Secure');

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
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleSavePassword = () => {
    if (passwords.new !== passwords.confirm) {
      alert('New passwords do not match!');
      return;
    }
    alert('Password changed successfully!');
    setPasswords({ current: '', new: '', confirm: '' });
    setPasswordSection(false);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
        
          <h1 style={styles.title}>My Profile</h1>
          <p style={styles.subtitle}>Manage your personal information and security settings</p>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.gridLayout}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {/* Profile Card */}
            <div style={styles.card}>
              <div style={styles.cardHeaderSimple}>
                <div style={styles.cardHeaderContent}>
                  <div style={styles.iconCircle}>
                    <FiUser size={20} color="#1640FF" />
                  </div>
                  <div>
                    <h3 style={styles.cardTitle}>Personal Information</h3>
                    <p style={styles.cardSubtitle}>Update your personal details</p>
                  </div>
                </div>
              </div>

              <div style={styles.cardBody}>
                {/* Avatar Section */}
                <div style={styles.avatarSection}>
                  <div style={styles.avatarWrapper}>
                    <img src={profile.avatar} alt="Profile" style={styles.avatar} />
                    <button style={styles.avatarOverlay}>
                      <FiCamera size={18} />
                    </button>
                  </div>
                  <div style={styles.avatarInfo}>
                    <h4 style={styles.avatarName}>{profile.name}</h4>
                    <span style={styles.roleBadge}>{profile.role}</span>
                  </div>
                </div>

                {/* Form Fields */}
                <div style={styles.formSection}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      <FiUser size={16} color="#64748B" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                      disabled={!isEditing}
                      style={{...styles.input, ...(isEditing ? {} : styles.inputDisabled)}}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      <FiMail size={16} color="#64748B" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      disabled={!isEditing}
                      style={{...styles.input, ...(isEditing ? {} : styles.inputDisabled)}}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      <FiPhone size={16} color="#64748B" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      disabled={!isEditing}
                      style={{...styles.input, ...(isEditing ? {} : styles.inputDisabled)}}
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <label style={styles.label}>
                      <FiShield size={16} color="#64748B" />
                      Role
                    </label>
                    <input
                      type="text"
                      value={profile.role}
                      disabled
                      style={styles.inputDisabled}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={styles.buttonGroup}>
                  {!isEditing ? (
                    <button onClick={() => setIsEditing(true)} style={styles.primaryButton}>
                      <FiEdit2 size={18} />
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button onClick={handleSaveProfile} style={styles.primaryButton}>
                        <FiCheck size={18} />
                        Save Changes
                      </button>
                      <button onClick={() => setIsEditing(false)} style={styles.secondaryButton}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Security Card */}
            <div style={styles.card}>
              <div style={styles.cardHeaderSimple}>
                <div style={styles.cardHeaderContent}>
                  <div style={styles.iconCircle}>
                    <FiLock size={20} color="#1640FF" />
                  </div>
                  <div>
                    <h3 style={styles.cardTitle}>Security Settings</h3>
                    <p style={styles.cardSubtitle}>Manage your password and security</p>
                  </div>
                </div>
              </div>

              <div style={styles.cardBody}>
                <button
                  onClick={() => setPasswordSection(!passwordSection)}
                  style={styles.expandButton}
                >
                  <span>Change Password</span>
                  <FiChevronRight 
                    size={20} 
                    style={{
                      transform: passwordSection ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </button>

                {passwordSection && (
                  <div style={styles.passwordSection}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Current Password</label>
                      <div style={styles.passwordInputWrapper}>
                        <input
                          type={showPasswords.current ? 'text' : 'password'}
                          value={passwords.current}
                          onChange={(e) => handlePasswordChange('current', e.target.value)}
                          placeholder="Enter current password"
                          style={styles.input}
                        />
                        <button 
                          onClick={() => togglePasswordVisibility('current')} 
                          style={styles.eyeButton}
                        >
                          {showPasswords.current ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>New Password</label>
                      <div style={styles.passwordInputWrapper}>
                        <input
                          type={showPasswords.new ? 'text' : 'password'}
                          value={passwords.new}
                          onChange={(e) => handlePasswordChange('new', e.target.value)}
                          placeholder="Enter new password"
                          style={styles.input}
                        />
                        <button 
                          onClick={() => togglePasswordVisibility('new')} 
                          style={styles.eyeButton}
                        >
                          {showPasswords.new ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div style={styles.inputGroup}>
                      <label style={styles.label}>Confirm New Password</label>
                      <div style={styles.passwordInputWrapper}>
                        <input
                          type={showPasswords.confirm ? 'text' : 'password'}
                          value={passwords.confirm}
                          onChange={(e) => handlePasswordChange('confirm', e.target.value)}
                          placeholder="Confirm new password"
                          style={styles.input}
                        />
                        <button 
                          onClick={() => togglePasswordVisibility('confirm')} 
                          style={styles.eyeButton}
                        >
                          {showPasswords.confirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                        </button>
                      </div>
                    </div>

                    <button onClick={handleSavePassword} style={styles.primaryButton}>
                      Update Password
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            {/* Account Status Card */}
            <div style={styles.card}>
              <div style={styles.cardHeaderSimple}>
                <div style={styles.cardHeaderContent}>
                  <div style={styles.iconCircle}>
                    <FiShield size={20} color="#10B981" />
                  </div>
                  <div>
                    <h3 style={styles.cardTitle}>Account Status</h3>
                    <p style={styles.cardSubtitle}>Your account information</p>
                  </div>
                </div>
              </div>

              <div style={styles.cardBody}>
                <div style={styles.statusList}>
                  <div style={styles.statusItem}>
                    <div style={styles.statusIcon}>
                      <FiUser size={18} color="#1640FF" />
                    </div>
                    <div style={styles.statusContent}>
                      <p style={styles.statusLabel}>Last Login</p>
                      <p style={styles.statusValue}>{lastLogin}</p>
                    </div>
                  </div>

                  <div style={styles.statusItem}>
                    <div style={styles.statusIcon}>
                      <FiShield size={18} color="#10B981" />
                    </div>
                    <div style={styles.statusContent}>
                      <p style={styles.statusLabel}>Security Status</p>
                      <div style={styles.securityBadge}>
                        <div style={styles.securityDot}></div>
                        {securityStatus}
                      </div>
                    </div>
                  </div>

                  <div style={styles.statusItem}>
                    <div style={styles.statusIcon}>
                      <FiLock size={18} color="#EF7C00" />
                    </div>
                    <div style={styles.statusContent}>
                      <p style={styles.statusLabel}>Two-Factor Auth</p>
                      <p style={styles.statusValue}>Enabled</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div style={styles.card}>
              <div style={styles.cardHeaderSimple}>
                <div style={styles.cardHeaderContent}>
                  <h3 style={styles.cardTitle}>Quick Actions</h3>
                </div>
              </div>

              <div style={styles.cardBody}>
                <div style={styles.quickActions}>
                  <button style={styles.actionButton}>
                    <FiShield size={18} />
                    Activity Log
                  </button>
                  <button style={styles.actionButton}>
                    <FiLock size={18} />
                    Privacy Settings
                  </button>
                  <button style={{...styles.actionButton, ...styles.logoutButton}}>
                    <FiLogOut size={18} />
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#F8FAFC',
    minHeight: '100vh',
    padding: '0',
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderBottom: '1px solid #E2E8F0',
    padding: '32px 40px',
    marginBottom: '32px',
  },
  breadcrumb: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
    fontSize: '14px',
  },
  breadcrumbLink: {
    color: '#64748B',
    cursor: 'pointer',
  },
  breadcrumbCurrent: {
    color: '#1640FF',
    fontWeight: '500',
  },
  title: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#0F172A',
    margin: '0 0 8px 0',
  },
  subtitle: {
    fontSize: '15px',
    color: '#64748B',
    margin: '0',
  },
  content: {
    padding: '0 40px 40px',
  },
  gridLayout: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '24px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    border: '1px solid #E2E8F0',
    overflow: 'hidden',
  },
  cardHeaderSimple: {
    padding: '24px',
    borderBottom: '1px solid #F1F5F9',
  },
  cardHeaderContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  iconCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    backgroundColor: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#0F172A',
    margin: '0 0 4px 0',
  },
  cardSubtitle: {
    fontSize: '14px',
    color: '#64748B',
    margin: '0',
  },
  cardBody: {
    padding: '24px',
  },
  avatarSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    paddingBottom: '24px',
    marginBottom: '24px',
    borderBottom: '1px solid #F1F5F9',
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #F1F5F9',
  },
  avatarOverlay: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    color: '#FFFFFF',
    border: '3px solid #FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  avatarInfo: {
    flex: 1,
  },
  avatarName: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#0F172A',
    margin: '0 0 8px 0',
  },
  roleBadge: {
    display: 'inline-block',
    padding: '6px 12px',
    backgroundColor: '#FFF7ED',
    color: '#EF7C00',
    fontSize: '13px',
    fontWeight: '600',
    borderRadius: '6px',
  },
  formSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#334155',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '15px',
    color: '#0F172A',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    outline: 'none',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
  },
  inputDisabled: {
    backgroundColor: '#F8FAFC',
    color: '#94A3B8',
    cursor: 'not-allowed',
  },
  passwordInputWrapper: {
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    color: '#64748B',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '24px',
  },
  primaryButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 24px',
    backgroundColor: '#1640FF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  secondaryButton: {
    flex: 1,
    padding: '14px 24px',
    backgroundColor: '#F1F5F9',
    color: '#475569',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  expandButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px',
    backgroundColor: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#334155',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  passwordSection: {
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid #F1F5F9',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  statusList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  statusItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  statusIcon: {
    width: '40px',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#F8FAFC',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  statusContent: {
    flex: 1,
  },
  statusLabel: {
    fontSize: '13px',
    color: '#64748B',
    margin: '0 0 4px 0',
  },
  statusValue: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#0F172A',
    margin: '0',
  },
  securityBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 12px',
    backgroundColor: '#ECFDF5',
    color: '#10B981',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '6px',
  },
  securityDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#10B981',
  },
  quickActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '14px 16px',
    backgroundColor: '#F8FAFC',
    border: '1px solid #E2E8F0',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '500',
    color: '#334155',
    cursor: 'pointer',
    transition: 'all 0.2s',
    width: '100%',
    textAlign: 'left',
  },
  logoutButton: {
    backgroundColor: '#FFF7ED',
    borderColor: '#FFEDD5',
    color: '#EF7C00',
  },
};

export default AdminProfilePage;