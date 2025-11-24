"use client";
import React, { useState } from 'react';
import { FiMessageSquare, FiUploadCloud } from 'react-icons/fi';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [screenshots, setScreenshots] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newScreenshots = Array.from(files).map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }));
    setScreenshots(prev => [...prev, ...newScreenshots]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', { formData, screenshots });
    // Add your submit logic here
  };

  const triggerFileInput = () => {
    document.getElementById('file-upload').click();
  };

  return (
    <div className="feedback-container">
      <div className="feedback-content">
        {/* Header */}
        <div>
        <div className="feedback-header">
        
          <h1 className="header-title">Send Feedback</h1>
        </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Email address"
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Describe your issue or share your ideas"
              rows={6}
              required
            />
          </div>

          {/* Screenshots Section */}
          <div className="screenshots-section">
            <h3 className="screenshots-title">Add Screenshots</h3>
            
            <div 
              className={`upload-area ${dragActive ? 'drag-active' : ''}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={triggerFileInput}
            >
              <FiUploadCloud className="upload-icon" />
              <p className="upload-text">Select screenshots to upload</p>
              <p className="upload-subtext">or drag and drop screenshots</p>
              
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileInput}
                style={{ display: 'none' }}
              />
            </div>

            {/* Screenshot Previews */}
            {screenshots.length > 0 && (
              <div className="screenshots-preview">
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="screenshot-item">
                    <img 
                      src={screenshot.preview} 
                      alt={screenshot.name}
                      className="screenshot-image"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setScreenshots(prev => prev.filter((_, i) => i !== index));
                      }}
                      className="remove-screenshot"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="submit-button">
              Send Feedback
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .feedback-container {
          min-height: 100vh;
          background-color: #f5f5f5;
          padding: 40px 20px;
        }

        .feedback-content {
          max-width: 1200px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .feedback-header {
          display: flex;
          align-items: center;
          margin-bottom: 35px;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          margin-right: 30px;
          color: #333;
          gap:20px;
        }

        .header-title {
          font-size: 24px;
          font-weight: 500;
          color: #333;
          margin: 0;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input {
          width: 100%;
          padding: 14px 16px;
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
          color: #aaa;
        }

        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          font-size: 14px;
          color: #333;
          font-family: inherit;
          resize: vertical;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          min-height: 120px;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #3546dcff;
        }

        .form-textarea::placeholder {
          color: #aaa;
        }

        .screenshots-section {
          margin-bottom: 30px;
        }

        .screenshots-title {
          font-size: 16px;
          font-weight: 500;
          color: #333;
          margin: 0 0 15px 0;
        }

        .upload-area {
          border: 2px dashed #e0e0e0;
          border-radius: 4px;
          padding: 50px 20px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          background-color: #fafafa;
        }

        .upload-area:hover {
          border-color: #3538dcff;
          background-color: #fff;
        }

        .upload-area.drag-active {
          border-color: #354edcff;
          background-color: #fff5f5;
        }

        .upload-icon {
          width: 48px;
          height: 48px;
          color: #999;
          margin-bottom: 15px;
        }

        .upload-text {
          font-size: 15px;
          color: #333;
          margin: 0 0 5px 0;
          font-weight: 500;
        }

        .upload-subtext {
          font-size: 13px;
          color: #999;
          margin: 0;
        }

        .screenshots-preview {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .screenshot-item {
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          aspect-ratio: 1;
        }

        .screenshot-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-screenshot {
          position: absolute;
          top: 5px;
          right: 5px;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          font-size: 20px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s ease;
        }

        .remove-screenshot:hover {
          background-color: #3540dcff;
        }

        .form-actions {
          margin-top: 30px;
        }

        .submit-button {
          padding: 14px 32px;
          background-color: #3546dcff;
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .submit-button:hover {
          background-color: #234fc8ff;
        }

        .submit-button:active {
          transform: translateY(1px);
        }

        @media (max-width: 768px) {
          .feedback-content {
            padding: 25px;
          }

          .header-title {
            font-size: 20px;
          }

          .upload-area {
            padding: 35px 15px;
          }

          .upload-icon {
            width: 40px;
            height: 40px;
          }

          .screenshots-preview {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default FeedbackPage;