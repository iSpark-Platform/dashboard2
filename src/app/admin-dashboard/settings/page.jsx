"use client";
import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('Account');
  const [formData, setFormData] = useState({
    firstName: 'Joginder',
    lastName: 'Singh',
    headline: 'I am a Web Designer',
    bio: '',
    website: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    youtube: ''
  });

  const tabs = [
    'Account',
    
    'Close Account'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submit logic here
  };

  return (
    <div className="settings-container">
      {/* Header */}
      <div className="settings-header">
        
        <h1 className="settings-title">Settings</h1>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="content-container">
        {activeTab === 'Account' && (
          <form onSubmit={handleSubmit}>
            {/* Account Header */}
            <div className="section-header">
              <h2 className="section-title">Your iSpark Account</h2>
              <p className="section-description">
                This is your public presence on Cursus. You need a account to upload your paid courses, comment on courses, purchased by students, or earning.
              </p>
            </div>

            {/* Basic Profile */}
            <div className="form-section">
              <h3 className="form-section-title">Basic Profile</h3>
              <p className="form-section-subtitle">Add information about yourself</p>

              {/* Name Fields */}
              <div className="name-row">
                <div className="input-wrapper half">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="First Name"
                  />
                </div>
                <div className="input-wrapper half">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Headline */}
              <div className="input-wrapper">
                <div className="input-with-counter">
                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Headline"
                    maxLength={36}
                  />
                  <span className="character-counter">36</span>
                </div>
                <p className="input-hint">
                  Add a professional headline like, "Engineer at Cursus" or "Architect."
                </p>
              </div>

              {/* Bio */}
              <div className="input-wrapper">
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Write a little description about you..."
                  rows={4}
                />
                <p className="input-hint">
                  Links and coupon codes are not permitted in this section.
                </p>
              </div>
            </div>

            {/* Profile Links */}
            <div className="form-section">
              <h3 className="form-section-title">Profile Links</h3>

              {/* Website */}
              <div className="input-wrapper">
                <div className="input-with-prefix">
                  <span className="input-prefix">https://</span>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="form-input with-prefix"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Facebook */}
              <div className="input-wrapper">
                <div className="input-with-prefix">
                  <span className="input-prefix">http://facebook.com/</span>
                  <input
                    type="text"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleInputChange}
                    className="form-input with-prefix"
                    placeholder=""
                  />
                </div>
                <p className="input-hint">
                  Add your Facebook username (e.g. johndoe).
                </p>
              </div>

              {/* Twitter */}
              <div className="input-wrapper">
                <div className="input-with-prefix">
                  <span className="input-prefix">http://twitter.com/</span>
                  <input
                    type="text"
                    name="twitter"
                    value={formData.twitter}
                    onChange={handleInputChange}
                    className="form-input with-prefix"
                    placeholder=""
                  />
                </div>
                <p className="input-hint">
                  Add your Twitter username (e.g. johndoe).
                </p>
              </div>

              {/* LinkedIn */}
              <div className="input-wrapper">
                <div className="input-with-prefix">
                  <span className="input-prefix">http://www.linkedin.com/</span>
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="form-input with-prefix"
                    placeholder=""
                  />
                </div>
                <p className="input-hint">
                  Input your LinkedIn resource id (e.g. in/johndoe).
                </p>
              </div>

              {/* YouTube */}
              <div className="input-wrapper">
                <div className="input-with-prefix">
                  <span className="input-prefix">http://www.youtube.com/</span>
                  <input
                    type="text"
                    name="youtube"
                    value={formData.youtube}
                    onChange={handleInputChange}
                    className="form-input with-prefix"
                    placeholder=""
                  />
                </div>
                <p className="input-hint">
                  Input your Youtube username (e.g. johndoe).
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="save-button">
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== 'Account' && (
          <div className="empty-state">
            <p>{activeTab} content goes here</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .settings-container {
          max-width: 1500px;
          margin: 0 auto;
          padding: 30px 20px;
          background-color: #f5f5f5;
          min-height: 100vh;
        }

        .settings-header {
          display: flex;
          align-items: center;
          margin-bottom: 30px;
        }

        .settings-icon {
          width: 24px;
          height: 24px;
          margin-right: 10px;
          color: #333;
        }

        .settings-title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
          margin: 0;
        }

        .tabs-container {
          display: flex;
          gap: 8px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .tab-button {
          padding: 10px 20px;
          background-color: #ffffff;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 400;
          color: #333;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .tab-button:hover {
          background-color: #f9f9f9;
        }

        .tab-button.active {
          background-color: #3538dcff;
          color: #ffffff;
          border-color: #3546dcff;
        }

        .content-container {
          background-color: #ffffff;
          border-radius: 4px;
          padding: 40px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .section-header {
          margin-bottom: 30px;
        }

        .section-title {
          font-size: 20px;
          font-weight: 500;
          color: #333;
          margin: 0 0 10px 0;
        }

        .section-description {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .form-section {
          margin-bottom: 40px;
        }

        .form-section-title {
          font-size: 18px;
          font-weight: 500;
          color: #333;
          margin: 0 0 8px 0;
        }

        .form-section-subtitle {
          font-size: 14px;
          color: #666;
          margin: 0 0 25px 0;
        }

        .name-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .input-wrapper {
          margin-bottom: 20px;
        }

        .input-wrapper.half {
          margin-bottom: 0;
        }

        .form-input {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
          color: #333;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }

        .form-input:focus {
          outline: none;
          border-color: #3546dcff;
        }

        .form-input::placeholder {
          color: #999;
        }

        .input-with-counter {
          position: relative;
        }

        .character-counter {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          color: #999;
          background-color: #f5f5f5;
          padding: 4px 8px;
          border-radius: 3px;
        }

        .input-hint {
          font-size: 13px;
          color: #666;
          margin: 8px 0 0 0;
        }

        .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
          color: #333;
          font-family: inherit;
          resize: vertical;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #3540dcff;
        }

        .form-textarea::placeholder {
          color: #999;
        }

        .input-with-prefix {
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .input-with-prefix:focus-within {
          border-color: #3546dcff;
        }

        .input-prefix {
          padding: 12px 16px;
          background-color: #f9f9f9;
          border-right: 1px solid #e0e0e0;
          font-size: 14px;
          color: #666;
          white-space: nowrap;
        }

        .form-input.with-prefix {
          border: none;
          flex: 1;
        }

        .form-input.with-prefix:focus {
          border: none;
        }

        .form-actions {
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid #e0e0e0;
        }

        .save-button {
          padding: 12px 30px;
          background-color: #3540dcff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .save-button:hover {
          background-color: #2e23c8ff;
        }

        .empty-state {
          padding: 60px 20px;
          text-align: center;
          color: #999;
        }

        @media (max-width: 768px) {
          .content-container {
            padding: 20px;
          }

          .name-row {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .input-wrapper.half {
            margin-bottom: 15px;
          }

          .input-prefix {
            font-size: 12px;
            padding: 12px 10px;
          }

          .tabs-container {
            gap: 5px;
          }

          .tab-button {
            padding: 8px 12px;
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default SettingsPage;