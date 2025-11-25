"use client";
import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiEdit2, FiCamera, FiMapPin, FiBook, FiAward, FiBriefcase, FiCheck, FiSave, FiX, FiCalendar, FiLinkedin, FiGithub, FiTwitter, FiGlobe } from 'react-icons/fi';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    institute: 'Stanford University',
    bio: 'Passionate learner with a focus on computer science and machine learning. Always looking to expand my knowledge and skills.',
    degree: 'Master of Science in Computer Science',
    graduationYear: '2023',
    skills: ['JavaScript', 'React', 'Python', 'Machine Learning', 'Data Analysis', 'UI/UX Design'],
    experiences: [
      {
        company: 'Tech Innovations Inc.',
        position: 'Software Developer Intern',
        period: 'Summer 2022',
        description: 'Developed web applications using React and Node.js.'
      },
      {
        company: 'Data Science Lab',
        position: 'Research Assistant',
        period: '2021-2022',
        description: 'Conducted research on machine learning algorithms for natural language processing.'
      }
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/alexjohnson',
      github: 'https://github.com/alexjohnson',
      twitter: 'https://twitter.com/alexjohnson',
      website: 'https://alexjohnson.dev'
    }
  });
  
  const [tempProfileData, setTempProfileData] = useState(profileData);
  const [profileCompletion, setProfileCompletion] = useState(85);
  const [isEmailVerified] = useState(true);
  const [profileImage, setProfileImage] = useState('https://picsum.photos/seed/profile123/300/300.jpg');
  const [coverImage, setCoverImage] = useState('https://picsum.photos/seed/cover456/1200/300.jpg');
  
  const handleEditToggle = () => {
    if (isEditing) {
      // Cancel editing, revert to original data
      setTempProfileData(profileData);
    } else {
      // Start editing
      setTempProfileData(profileData);
    }
    setIsEditing(!isEditing);
  };
  
  const handleSaveChanges = () => {
    setProfileData(tempProfileData);
    setIsEditing(false);
    // Calculate new profile completion
    let completion = 50; // Base completion
    if (tempProfileData.bio && tempProfileData.bio.length > 20) completion += 10;
    if (tempProfileData.degree) completion += 10;
    if (tempProfileData.skills.length > 3) completion += 10;
    if (tempProfileData.experiences.length > 0) completion += 10;
    if (tempProfileData.address) completion += 5;
    if (tempProfileData.phone) completion += 5;
    setProfileCompletion(Math.min(completion, 100));
  };
  
  const handleInputChange = (field, value) => {
    setTempProfileData({
      ...tempProfileData,
      [field]: value
    });
  };
  
  const handleSocialLinkChange = (platform, value) => {
    setTempProfileData({
      ...tempProfileData,
      socialLinks: {
        ...tempProfileData.socialLinks,
        [platform]: value
      }
    });
  };
  
  const handleSkillRemove = (index) => {
    const newSkills = [...tempProfileData.skills];
    newSkills.splice(index, 1);
    setTempProfileData({
      ...tempProfileData,
      skills: newSkills
    });
  };
  
  const handleSkillAdd = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      setTempProfileData({
        ...tempProfileData,
        skills: [...tempProfileData.skills, e.target.value.trim()]
      });
      e.target.value = '';
    }
  };
  
  return (
    <div style={styles.container}>
      {/* Cover Photo Section */}
      <div style={styles.coverPhotoContainer}>
        <img src={coverImage} alt="Cover" style={styles.coverPhoto} />
        <div style={styles.coverPhotoOverlay}>
          <button style={styles.uploadButton}>
            <FiCamera size={18} />
            Change Cover
          </button>
        </div>
      </div>
      
      <div style={styles.content}>
        {/* Profile Header */}
        <div style={styles.profileHeader}>
          <div style={styles.profileImageContainer}>
            <img src={profileImage} alt="Profile" style={styles.profileImage} />
            <div style={styles.profileImageOverlay}>
              <FiCamera size={20} />
            </div>
            {isEmailVerified && (
              <div style={styles.verificationBadge}>
                <FiCheck size={12} />
              </div>
            )}
          </div>
          
          <div style={styles.profileInfo}>
            <h1 style={styles.profileName}>{profileData.name}</h1>
            <p style={styles.profileInstitute}>{profileData.institute}</p>
            <div style={styles.profileActions}>
              {isEditing ? (
                <div style={styles.editActions}>
                  <button style={styles.saveButton} onClick={handleSaveChanges}>
                    <FiSave size={16} style={{ marginRight: '6px' }} />
                    Save Changes
                  </button>
                  <button style={styles.cancelButton} onClick={handleEditToggle}>
                    <FiX size={16} style={{ marginRight: '6px' }} />
                    Cancel
                  </button>
                </div>
              ) : (
                <button style={styles.editButton} onClick={handleEditToggle}>
                  <FiEdit2 size={16} style={{ marginRight: '6px' }} />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
        
        {/* Profile Completion */}
        <div style={styles.completionCard}>
          <h3 style={styles.cardTitle}>Profile Completion</h3>
          <div style={styles.progressBarContainer}>
            <div style={styles.progressBar}>
              <div style={{ ...styles.progressFill, width: `${profileCompletion}%` }}></div>
            </div>
            <span style={styles.progressText}>{profileCompletion}%</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div style={styles.mainContent}>
          {/* Left Column - Personal Information */}
          <div style={styles.leftColumn}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Personal Information</h3>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiUser size={16} style={styles.labelIcon} />
                  Name
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.name}</p>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiMail size={16} style={styles.labelIcon} />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={tempProfileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.email}</p>
                )}
                {isEmailVerified && <span style={styles.verifiedText}>Verified</span>}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiPhone size={16} style={styles.labelIcon} />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={tempProfileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.phone}</p>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiMapPin size={16} style={styles.labelIcon} />
                  Address
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.address}</p>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiBook size={16} style={styles.labelIcon} />
                  Institute
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.institute}
                    onChange={(e) => handleInputChange('institute', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.institute}</p>
                )}
              </div>
            </div>
            
            {/* Academic Information */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Academic Information</h3>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>Degree</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.degree}
                    onChange={(e) => handleInputChange('degree', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.degree}</p>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>Graduation Year</label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <p style={styles.value}>{profileData.graduationYear}</p>
                )}
              </div>
            </div>
            
            {/* Social Links */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Social Links</h3>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiLinkedin size={16} style={styles.labelIcon} />
                  LinkedIn
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.socialLinks.linkedin}
                    onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    {profileData.socialLinks.linkedin}
                  </a>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiGithub size={16} style={styles.labelIcon} />
                  GitHub
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.socialLinks.github}
                    onChange={(e) => handleSocialLinkChange('github', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    {profileData.socialLinks.github}
                  </a>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiTwitter size={16} style={styles.labelIcon} />
                  Twitter
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.socialLinks.twitter}
                    onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <a href={profileData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    {profileData.socialLinks.twitter}
                  </a>
                )}
              </div>
              
              <div style={styles.inputGroup}>
                <label style={styles.label}>
                  <FiGlobe size={16} style={styles.labelIcon} />
                  Website
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={tempProfileData.socialLinks.website}
                    onChange={(e) => handleSocialLinkChange('website', e.target.value)}
                    style={styles.input}
                  />
                ) : (
                  <a href={profileData.socialLinks.website} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    {profileData.socialLinks.website}
                  </a>
                )}
              </div>
            </div>
          </div>
          
          {/* Right Column - Bio, Skills, Experience */}
          <div style={styles.rightColumn}>
            {/* Bio */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Bio</h3>
              {isEditing ? (
                <textarea
                  value={tempProfileData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  style={styles.textarea}
                  rows={4}
                />
              ) : (
                <p style={styles.bioText}>{profileData.bio}</p>
              )}
            </div>
            
            {/* Skills */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Skills</h3>
              <div style={styles.skillsContainer}>
                {(isEditing ? tempProfileData.skills : profileData.skills).map((skill, index) => (
                  <div key={index} style={styles.skillTag}>
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => handleSkillRemove(index)}
                        style={styles.skillRemoveButton}
                      >
                        <FiX size={12} />
                      </button>
                    )}
                  </div>
                ))}
                {isEditing && (
                  <input
                    type="text"
                    placeholder="Add skill and press Enter"
                    onKeyPress={handleSkillAdd}
                    style={styles.skillInput}
                  />
                )}
              </div>
            </div>
            
            {/* Experience */}
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>
                <FiBriefcase size={18} style={{ marginRight: '8px' }} />
                Experience
              </h3>
              <div style={styles.timeline}>
                {profileData.experiences.map((exp, index) => (
                  <div key={index} style={styles.timelineItem}>
                    <div style={styles.timelineDot}></div>
                    <div style={styles.timelineContent}>
                      <h4 style={styles.timelineTitle}>{exp.position}</h4>
                      <h5 style={styles.timelineCompany}>{exp.company}</h5>
                      <p style={styles.timelinePeriod}>{exp.period}</p>
                      <p style={styles.timelineDescription}>{exp.description}</p>
                    </div>
                  </div>
                ))}
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
    fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#f8fafc',
    minHeight: '100vh',
    color: '#333',
    maxWidth: '100%',
    margin: '0 auto'
  },
  coverPhotoContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  coverPhotoOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    cursor: 'pointer'
  },
  'coverPhotoContainer:hover .coverPhotoOverlay': {
    opacity: 1
  },
  uploadButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    color: '#333',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
  },
  content: {
    maxWidth: '1200px',
    margin: '-60px auto 0',
    padding: '0 24px 24px',
    position: 'relative',
    zIndex: 1
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '24px'
  },
  profileImageContainer: {
    position: 'relative',
    marginRight: '24px'
  },
  profileImage: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    border: '4px solid #fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    objectFit: 'cover'
  },
  profileImageOverlay: {
    position: 'absolute',
    bottom: '5px',
    right: '5px',
    backgroundColor: '#1640FF',
    color: 'white',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.2s ease'
  },
  'profileImageOverlay:hover': {
    backgroundColor: '#0d2d8f',
    transform: 'scale(1.05)'
  },
  verificationBadge: {
    position: 'absolute',
    top: '5px',
    right: '5px',
    backgroundColor: '#10b981',
    color: 'white',
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  profileInfo: {
    flex: 1,
    paddingBottom: '10px'
  },
  profileName: {
    margin: '0 0 8px 0',
    fontSize: '32px',
    fontWeight: '700',
    color: '#ffffffff',
    letterSpacing: '-0.025em'
  },
  profileInstitute: {
    margin: '0 0 16px 0',
    fontSize: '18px',
    color: '#000000ff',
    fontWeight: '500'
  },
  profileActions: {
    display: 'flex'
  },
  editButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1640FF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(22, 64, 255, 0.25)'
  },
  'editButton:hover': {
    backgroundColor: '#0d2d8f',
    transform: 'translateY(-1px)'
  },
  editActions: {
    display: 'flex',
    gap: '12px'
  },
  saveButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(16, 185, 129, 0.25)'
  },
  'saveButton:hover': {
    backgroundColor: '#0d7f5e',
    transform: 'translateY(-1px)'
  },
  cancelButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(239, 68, 68, 0.25)'
  },
  'cancelButton:hover': {
    backgroundColor: '#c91e1e',
    transform: 'translateY(-1px)'
  },
  completionCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
  },
  cardTitle: {
    margin: '0 0 16px 0',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a202c',
    display: 'flex',
    alignItems: 'center'
  },
  progressBarContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  progressBar: {
    flex: 1,
    height: '10px',
    backgroundColor: '#e2e8f0',
    borderRadius: '5px',
    overflow: 'hidden',
    marginRight: '12px'
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1640FF',
    borderRadius: '5px',
    transition: 'width 0.5s ease'
  },
  progressText: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#4a5568',
    minWidth: '45px'
  },
  mainContent: {
    display: 'flex',
    gap: '24px'
  },
  leftColumn: {
    flex: 1
  },
  rightColumn: {
    flex: 1
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '24px',
    marginBottom: '24px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease'
  },
  'card:hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)'
  },
  inputGroup: {
    marginBottom: '20px',
    position: 'relative'
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: '600',
    color: '#1640FF',
    marginBottom: '8px'
  },
  labelIcon: {
    marginRight: '8px'
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'all 0.2s',
    outline: 'none',
    boxSizing: 'border-box'
  },
  'input:focus': {
    borderColor: '#1640FF',
    boxShadow: '0 0 0 3px rgba(22, 64, 255, 0.1)'
  },
  textarea: {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    fontSize: '14px',
    transition: 'all 0.2s',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
    boxSizing: 'border-box'
  },
  'textarea:focus': {
    borderColor: '#1640FF',
    boxShadow: '0 0 0 3px rgba(22, 64, 255, 0.1)'
  },
  value: {
    margin: '0',
    fontSize: '15px',
    color: '#4a5568',
    padding: '12px 0',
    lineHeight: '1.5'
  },
  socialLink: {
    margin: '0',
    fontSize: '15px',
    color: '#1640FF',
    padding: '12px 0',
    lineHeight: '1.5',
    textDecoration: 'none',
    display: 'block',
    wordBreak: 'break-all'
  },
  'socialLink:hover': {
    textDecoration: 'underline'
  },
  verifiedText: {
    display: 'inline-block',
    fontSize: '12px',
    color: '#10b981',
    fontWeight: '500',
    marginLeft: '8px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    padding: '2px 8px',
    borderRadius: '12px'
  },
  bioText: {
    margin: '0',
    fontSize: '15px',
    lineHeight: '1.6',
    color: '#4a5568'
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  },
  skillTag: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ebf4ff',
    color: '#1640FF',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  },
  'skillTag:hover': {
    backgroundColor: '#d6e6ff',
    transform: 'translateY(-1px)'
  },
  skillRemoveButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#1640FF',
    marginLeft: '6px',
    cursor: 'pointer',
    padding: '0',
    transition: 'all 0.2s ease'
  },
  'skillRemoveButton:hover': {
    color: '#0d2d8f',
    transform: 'scale(1.2)'
  },
  skillInput: {
    padding: '8px 16px',
    border: '1px dashed #1640FF',
    borderRadius: '20px',
    fontSize: '14px',
    outline: 'none',
    minWidth: '150px',
    backgroundColor: 'rgba(22, 64, 255, 0.05)',
    transition: 'all 0.2s ease'
  },
  'skillInput:focus': {
    borderStyle: 'solid',
    backgroundColor: '#fff'
  },
  timeline: {
    position: 'relative',
    paddingLeft: '30px',
    marginTop: '10px'
  },
  'timeline::before': {
    content: '""',
    position: 'absolute',
    left: '9px',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: '#e2e8f0'
  },
  timelineItem: {
    position: 'relative',
    paddingBottom: '30px'
  },
  timelineDot: {
    position: 'absolute',
    left: '-30px',
    top: '6px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: '#1640FF',
    border: '4px solid #fff',
    boxShadow: '0 0 0 2px #1640FF',
    zIndex: 1
  },
  timelineContent: {
    backgroundColor: '#f8fafc',
    borderRadius: '8px',
    padding: '16px',
    transition: 'all 0.2s ease'
  },
  'timelineContent:hover': {
    backgroundColor: '#f1f5f9',
    transform: 'translateX(4px)'
  },
  timelineTitle: {
    margin: '0 0 4px 0',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1a202c'
  },
  timelineCompany: {
    margin: '0 0 4px 0',
    fontSize: '16px',
    fontWeight: '500',
    color: '#1640FF'
  },
  timelinePeriod: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#718096',
    display: 'flex',
    alignItems: 'center'
  },
  timelinePeriod: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#718096',
    display: 'flex',
    alignItems: 'center'
  },
  timelinePeriod: {
    margin: '0 0 8px 0',
    fontSize: '14px',
    color: '#718096',
    display: 'flex',
    alignItems: 'center'
  },
  timelineDescription: {
    margin: '0',
    fontSize: '15px',
    lineHeight: '1.5',
    color: '#4a5568'
  }
};

export default ProfilePage;