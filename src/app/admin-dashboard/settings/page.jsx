"use client";
import React, { useState } from 'react';
import { FiSettings, FiImage, FiMail, FiSun, FiMoon, FiSave, FiRotateCcw, FiUpload, FiEdit2 } from 'react-icons/fi';

const SystemSettingsPage = () => {
  const [settings, setSettings] = useState({
    logo: 'https://via.placeholder.com/150x50.png?text=Logo',
    platformName: 'TechIntern Pro',
    contactEmail: 'admin@techinternpro.com',
    contactPhone: '+1 (555) 123-4567',
    contactAddress: '123 Innovation Drive, Tech City, TC 12345',
    welcomeEmail: 'Welcome to our platform! We are excited to have you on board.',
    passwordResetEmail: 'You requested a password reset. Click the link to continue.',
    darkMode: false
  });

  const [logoPreview, setLogoPreview] = useState(settings.logo);
  const [isEditing, setIsEditing] = useState({});

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        handleChange('logo', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    alert('Settings Saved!');
    // In a real app, this would be an API call
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      // Reset logic here
      alert('Settings have been reset.');
    }
  };

  return (
    <div style={styles.container}>
     
      <h1 style={styles.title}>System Settings</h1>
      <p style={styles.subtitle}>Manage global platform settings and appearance</p>

      <div style={styles.grid}>
        {/* Platform Logo Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <FiImage size={20} color="#1640FF" />
            <h3 style={styles.cardTitle}>Platform Logo</h3>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.logoPreviewContainer}>
              <img src={logoPreview} alt="Platform Logo" style={styles.logoPreview} />
              <label htmlFor="logo-upload" style={styles.uploadButton}>
                <FiUpload size={16} /> Change Logo
              </label>
              <input id="logo-upload" type="file" accept="image/*" onChange={handleLogoChange} style={styles.hiddenInput} />
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <FiMail size={20} color="#1640FF" />
            <h3 style={styles.cardTitle}>Contact Information</h3>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Email</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleChange('contactEmail', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Phone</label>
              <input
                type="tel"
                value={settings.contactPhone}
                onChange={(e) => handleChange('contactPhone', e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Address</label>
              <textarea
                value={settings.contactAddress}
                onChange={(e) => handleChange('contactAddress', e.target.value)}
                style={styles.textarea}
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Email Templates Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <FiMail size={20} color="#1640FF" />
            <h3 style={styles.cardTitle}>Email Templates</h3>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.templateGroup}>
              <div style={styles.templateHeader}>
                <h4 style={styles.templateTitle}>Welcome Email</h4>
                <button onClick={() => setIsEditing({ ...isEditing, welcome: !isEditing.welcome })} style={styles.editButton}>
                  <FiEdit2 size={14} />
                </button>
              </div>
              <textarea
                value={settings.welcomeEmail}
                onChange={(e) => handleChange('welcomeEmail', e.target.value)}
                style={styles.textarea}
                rows={4}
                disabled={!isEditing.welcome}
              />
            </div>
            <div style={styles.templateGroup}>
              <div style={styles.templateHeader}>
                <h4 style={styles.templateTitle}>Password Reset Email</h4>
                <button onClick={() => setIsEditing({ ...isEditing, reset: !isEditing.reset })} style={styles.editButton}>
                  <FiEdit2 size={14} />
                </button>
              </div>
              <textarea
                value={settings.passwordResetEmail}
                onChange={(e) => handleChange('passwordResetEmail', e.target.value)}
                style={styles.textarea}
                rows={4}
                disabled={!isEditing.reset}
              />
            </div>
          </div>
        </div>

          </div>

  

      <div style={styles.actions}>
        <button onClick={handleReset} style={styles.resetButton}>
          <FiRotateCcw size={16} style={{ marginRight: '8px' }} /> Reset to Default
        </button>
        <button onClick={handleSave} style={styles.saveButton}>
          <FiSave size={16} style={{ marginRight: '8px' }} /> Save Changes
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { fontFamily: 'Inter, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', padding: '24px', color: '#1a202c' },
  banner: { display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#fff', padding: '16px 24px', borderRadius: '12px', marginBottom: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', fontSize: '16px', fontWeight: '500', color: '#1a202c' },
  title: { fontSize: '32px', fontWeight: '700', margin: '0 0 8px', color: '#1a202c' },
  subtitle: { fontSize: '16px', color: '#718096', margin: '0 0 32px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' },
  card: { backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', overflow: 'hidden' },
  cardHeader: { display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', borderBottom: '1px solid #e2e8f0' },
  cardTitle: { fontSize: '18px', fontWeight: '600', margin: 0, color: '#1a202c' },
  cardContent: { padding: '24px' },
  logoPreviewContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' },
  logoPreview: { maxWidth: '200px', maxHeight: '80px', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px', objectFit: 'contain' },
  uploadButton: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#1640FF', color: '#fff', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  hiddenInput: { display: 'none' },
  formGroup: { marginBottom: '20px' },
  label: { display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#4a5568' },
  input: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' },
  templateGroup: { marginBottom: '24px' },
  templateHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' },
  templateTitle: { fontSize: '16px', fontWeight: '600', margin: 0, color: '#1a202c' },
  editButton: { background: 'none', border: 'none', padding: '6px', borderRadius: '6px', cursor: 'pointer', color: '#1640FF' },
  themeDescription: { fontSize: '14px', color: '#718096', marginBottom: '20px' },
  themeToggleContainer: { display: 'flex', gap: '12px' },
  themeOption: { display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', fontWeight: '500', cursor: 'pointer', transition: 'all 0.2s' },
  actions: { display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '32px' },
  resetButton: { display: 'flex', alignItems: 'center', padding: '12px 20px', backgroundColor: '#fff', color: '#EF7C00', border: '1px solid #EF7C00', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
  saveButton: { display: 'flex', alignItems: 'center', padding: '12px 20px', backgroundColor: '#1640FF', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' },
};
export default SystemSettingsPage;