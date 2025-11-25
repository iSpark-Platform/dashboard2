"use client";
import React, { useState } from 'react';
import { 
  FiArrowLeft,
  FiInfo,
  FiBook,
  FiImage,
  FiDollarSign,
  FiCheckCircle,
  FiUpload,
  FiPlus,
  FiTrash2,
  FiVideo
} from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function CreateCoursePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [courseData, setCourseData] = useState({
    title: '',
    shortDescription: '',
    fullDescription: '',
    category: '',
    level: '',
    language: '',
    requirements: [''],
    learningOutcomes: [''],
    thumbnail: null,
    promoVideo: null,
    price: '',
    discount: '',
    currency: 'INR'
  });

  const steps = [
    { id: 'basic', label: 'BASIC', icon: FiInfo },
    { id: 'curriculum', label: 'CURRICULUM', icon: FiBook },
    { id: 'media', label: 'MEDIA', icon: FiImage },
    { id: 'price', label: 'PRICE', icon: FiDollarSign },
    { id: 'publish', label: 'PUBLISH', icon: FiCheckCircle }
  ];

  const categories = [
    'Programming',
    'Web Development',
    'Data Science',
    'Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Marketing',
    'Graphic Design'
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
  const languages = ['English', 'Hindi', 'Spanish', 'French', 'German'];

  const handleInputChange = (field, value) => {
    setCourseData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayAdd = (field) => {
    setCourseData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const handleArrayChange = (field, index, value) => {
    const newArray = [...courseData[field]];
    newArray[index] = value;
    setCourseData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleArrayRemove = (field, index) => {
    const newArray = courseData[field].filter((_, i) => i !== index);
    setCourseData(prev => ({ ...prev, [field]: newArray }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePublish = () => {
    console.log('Publishing course:', courseData);
    alert('Course published successfully!');
    router.push('/dashboard/courses');
  };

  const renderCharacterCount = (text, max = 100) => {
    const remaining = max - text.length;
    return (
      <span className={`char-count ${remaining < 0 ? 'exceeded' : ''}`}>
        {remaining < 0 ? Math.abs(remaining) + ' over' : remaining}
      </span>
    );
  };

  return (
    <>
      <div className="create-course-container">
        <div className="create-course-page">
          {/* Header */}
          <div className="page-header">
            <button className="back-button" onClick={() => router.back()}>
              <FiArrowLeft size={20} />
            </button>
            <h1 className="page-title">Create New Course</h1>
          </div>

          {/* Stepper */}
          <div className="stepper-container">
            <div className="stepper">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="step-item">
                    <div 
                      className={`step-circle ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                      onClick={() => setCurrentStep(index)}
                    >
                      {index < currentStep ? (
                        <FiCheckCircle size={20} />
                      ) : (
                        <step.icon size={20} />
                      )}
                    </div>
                    <span className={`step-label ${index === currentStep ? 'active' : ''}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="form-container">
            {/* Step 1: Basic Information */}
            {currentStep === 0 && (
              <div className="form-section">
                <div className="section-header">
                  <FiInfo size={24} />
                  <h2>Basic Information</h2>
                </div>

                <div className="form-content">
                  <div className="form-group">
                    <label>Course Title*</label>
                    <div className="input-with-counter">
                      <input
                        type="text"
                        placeholder="Course title here"
                        value={courseData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        maxLength={100}
                      />
                      {renderCharacterCount(courseData.title, 100)}
                    </div>
                    <p className="help-text">Please make this a maximum of 100 characters and unique.</p>
                  </div>

                  <div className="form-group">
                    <label>Short Description*</label>
                    <textarea
                      rows={5}
                      placeholder="Item description here..."
                      value={courseData.shortDescription}
                      onChange={(e) => handleInputChange('shortDescription', e.target.value)}
                    ></textarea>
                    <p className="help-text">Brief summary for course preview.</p>
                  </div>

                  <div className="form-group">
                    <label>Full Description</label>
                    <textarea
                      rows={8}
                      placeholder="Detailed course description..."
                      value={courseData.fullDescription}
                      onChange={(e) => handleInputChange('fullDescription', e.target.value)}
                    ></textarea>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Category*</label>
                      <select
                        value={courseData.category}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                      >
                        <option value="">Select category</option>
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Course Level*</label>
                      <select
                        value={courseData.level}
                        onChange={(e) => handleInputChange('level', e.target.value)}
                      >
                        <option value="">Select level</option>
                        {levels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Language*</label>
                      <select
                        value={courseData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                      >
                        <option value="">Select language</option>
                        {languages.map(lang => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Curriculum */}
            {currentStep === 1 && (
              <div className="form-section">
                <div className="section-header">
                  <FiBook size={24} />
                  <h2>Course Curriculum</h2>
                </div>

                <div className="form-content">
                  <div className="form-group">
                    <label>Requirements</label>
                    {courseData.requirements.map((req, index) => (
                      <div key={index} className="array-input">
                        <input
                          type="text"
                          placeholder="e.g., Basic programming knowledge"
                          value={req}
                          onChange={(e) => handleArrayChange('requirements', index, e.target.value)}
                        />
                        {courseData.requirements.length > 1 && (
                          <button
                            className="remove-btn"
                            onClick={() => handleArrayRemove('requirements', index)}
                          >
                            <FiTrash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="add-btn" onClick={() => handleArrayAdd('requirements')}>
                      <FiPlus size={16} />
                      Add Requirement
                    </button>
                  </div>

                  <div className="form-group">
                    <label>Learning Outcomes</label>
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="array-input">
                        <input
                          type="text"
                          placeholder="e.g., Build full-stack applications"
                          value={outcome}
                          onChange={(e) => handleArrayChange('learningOutcomes', index, e.target.value)}
                        />
                        {courseData.learningOutcomes.length > 1 && (
                          <button
                            className="remove-btn"
                            onClick={() => handleArrayRemove('learningOutcomes', index)}
                          >
                            <FiTrash2 size={16} />
                          </button>
                        )}
                      </div>
                    ))}
                    <button className="add-btn" onClick={() => handleArrayAdd('learningOutcomes')}>
                      <FiPlus size={16} />
                      Add Learning Outcome
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Media */}
            {currentStep === 2 && (
              <div className="form-section">
                <div className="section-header">
                  <FiImage size={24} />
                  <h2>Course Media</h2>
                </div>

                <div className="form-content">
                  <div className="form-group">
                    <label>Course Thumbnail*</label>
                    <div className="upload-area">
                      <FiUpload size={32} />
                      <p>Upload course thumbnail image</p>
                      <span>Recommended size: 1280x720 (16:9 ratio)</span>
                      <input type="file" accept="image/*" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Promotional Video</label>
                    <div className="upload-area">
                      <FiVideo size={32} />
                      <p>Upload promotional video</p>
                      <span>Max duration: 2 minutes, Max size: 500MB</span>
                      <input type="file" accept="video/*" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Price */}
            {currentStep === 3 && (
              <div className="form-section">
                <div className="section-header">
                  <FiDollarSign size={24} />
                  <h2>Pricing</h2>
                </div>

                <div className="form-content">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Currency</label>
                      <select
                        value={courseData.currency}
                        onChange={(e) => handleInputChange('currency', e.target.value)}
                      >
                        <option value="INR">INR (₹)</option>
                        <option value="USD">USD ($)</option>
                        <option value="EUR">EUR (€)</option>
                        <option value="GBP">GBP (£)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Course Price*</label>
                      <input
                        type="number"
                        placeholder="4999"
                        value={courseData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>Discount (%)</label>
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        max="100"
                        value={courseData.discount}
                        onChange={(e) => handleInputChange('discount', e.target.value)}
                      />
                    </div>
                  </div>

                  {courseData.price && (
                    <div className="price-preview">
                      <h3>Price Preview</h3>
                      <div className="price-breakdown">
                        <div className="price-item">
                          <span>Original Price:</span>
                          <span className="original-price">₹{courseData.price}</span>
                        </div>
                        {courseData.discount && (
                          <>
                            <div className="price-item">
                              <span>Discount ({courseData.discount}%):</span>
                              <span className="discount">-₹{(courseData.price * courseData.discount / 100).toFixed(2)}</span>
                            </div>
                            <div className="price-item final">
                              <span>Final Price:</span>
                              <span className="final-price">₹{(courseData.price - (courseData.price * courseData.discount / 100)).toFixed(2)}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 5: Publish */}
            {currentStep === 4 && (
              <div className="form-section">
                <div className="section-header">
                  <FiCheckCircle size={24} />
                  <h2>Review & Publish</h2>
                </div>

                <div className="form-content">
                  <div className="review-section">
                    <h3>Course Summary</h3>
                    
                    <div className="review-item">
                      <label>Title:</label>
                      <p>{courseData.title || 'Not set'}</p>
                    </div>

                    <div className="review-item">
                      <label>Category:</label>
                      <p>{courseData.category || 'Not set'}</p>
                    </div>

                    <div className="review-item">
                      <label>Level:</label>
                      <p>{courseData.level || 'Not set'}</p>
                    </div>

                    <div className="review-item">
                      <label>Language:</label>
                      <p>{courseData.language || 'Not set'}</p>
                    </div>

                    <div className="review-item">
                      <label>Price:</label>
                      <p>₹{courseData.price || '0'} {courseData.discount && `(${courseData.discount}% off)`}</p>
                    </div>

                    <div className="review-item">
                      <label>Requirements:</label>
                      <ul>
                        {courseData.requirements.filter(r => r).map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="review-item">
                      <label>Learning Outcomes:</label>
                      <ul>
                        {courseData.learningOutcomes.filter(o => o).map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="form-navigation">
              {currentStep > 0 && (
                <button className="btn-secondary" onClick={handleBack}>
                  <FiArrowLeft size={16} />
                  Back
                </button>
              )}
              
              {currentStep < steps.length - 1 ? (
                <button className="btn-primary" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button className="btn-primary publish" onClick={handlePublish}>
                  <FiCheckCircle size={16} />
                  Publish Course
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .create-course-container {
          background-color: #f8f9fa;
          min-height: 100vh;
          padding: 30px 20px;
        }

        .create-course-page {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header */
        .page-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 30px;
        }

        .back-button {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: #6b7280;
        }

        .back-button:hover {
          background-color: #f9fafb;
          color: #1f2937;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        /* Stepper */
        .stepper-container {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .stepper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 900px;
          margin: 0 auto;
        }

        .step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          flex: 0 0 auto;
        }

        .step-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #9ca3af;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .step-circle.active {
          background: #4f44efff;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }

        .step-circle.completed {
          background: #ee5121ff;
          color: #ffffff;
        }

        .step-label {
          font-size: 12px;
          font-weight: 600;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .step-label.active {
          color: #1f2937;
        }

        .step-line {
          flex: 1;
          height: 2px;
          background: #e5e7eb;
          margin: 0 -10px;
          position: relative;
          top: -25px;
        }

        .step-line.completed {
          background: #101bb9ff;
        }

        /* Form */
        .form-container {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .form-section {
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f3f4f6;
        }

        .section-header h2 {
          font-size: 22px;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .form-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s ease;
          box-sizing: border-box;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #5b4fef;
          box-shadow: 0 0 0 3px rgba(91, 79, 239, 0.1);
        }

        .input-with-counter {
          position: relative;
        }

        .input-with-counter input {
          padding-right: 60px;
        }

        .char-count {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 12px;
          font-weight: 600;
          color: #1021b9ff;
          background: #ffffff;
          padding: 0 4px;
        }

        .char-count.exceeded {
          color: #ef4444;
        }

        .help-text {
          font-size: 12px;
          color: #6b7280;
          margin: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        /* Array Inputs */
        .array-input {
          display: flex;
          gap: 8px;
          margin-bottom: 12px;
        }

        .array-input input {
          flex: 1;
        }

        .remove-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fef2f2;
          color: #4744efff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .remove-btn:hover {
          background: #fee2e2;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #f3f4f6;
          color: #1f2937;
          border: 1px dashed #d1d5db;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .add-btn:hover {
          background: #e5e7eb;
          border-color: #9ca3af;
        }

        /* Upload Area */
        .upload-area {
          border: 2px dashed #e5e7eb;
          border-radius: 12px;
          padding: 40px;
          text-align: center;
          cursor: pointer;
          transition: all 0.2s ease;
          position: relative;
        }

        .upload-area:hover {
          border-color: #5b4fef;
          background: #f9fafb;
        }

        .upload-area p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 12px 0 4px 0;
        }

        .upload-area span {
          font-size: 12px;
          color: #6b7280;
        }

        .upload-area input[type="file"] {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        /* Price Preview */
        .price-preview {
          background: #f9fafb;
          border-radius: 12px;
          padding: 24px;
          margin-top: 20px;
        }

        .price-preview h3 {
          font-size: 16px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 16px 0;
        }

        .price-breakdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .price-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
        }

        .price-item.final {
          padding-top: 12px;
          border-top: 2px solid #e5e7eb;
          font-weight: 700;
        }

        .original-price {
          color: #6b7280;
          text-decoration: line-through;
        }

        .discount {
          color: #2110b9ff;
        }

        .final-price {
          font-size: 20px;
          color: #5b4fef;
        }

        /* Review Section */
        .review-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .review-section h3 {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 12px 0;
        }

        .review-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .review-item label {
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .review-item p {
          font-size: 15px;
          color: #1f2937;
          margin: 0;
        }

        .review-item ul {
          margin: 0;
          padding-left: 20px;
        }

        .review-item li {
          font-size: 14px;
          color: #1f2937;
          margin-bottom: 4px;
        }

        /* Navigation */
        .form-navigation {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 2px solid #f3f4f6;
        }

        .btn-secondary,
        .btn-primary {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 32px;
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #1f2937;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .btn-primary {
          background: #5b4fef;
          color: #ffffff;
          margin-left: auto;
        }

        .btn-primary:hover {
          background: #4839d9;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(91, 79, 239, 0.3);
        }

        .btn-primary.publish {
          background: #1021b9ff;
        }

        .btn-primary.publish:hover {
          background: #051396ff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .create-course-container {
            padding: 20px 12px;
          }

          .stepper-container,
          .form-container {
            padding: 24px;
          }

          .stepper {
            flex-wrap: wrap;
          }

          .step-line {
            display: none;
          }

          .page-title {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}