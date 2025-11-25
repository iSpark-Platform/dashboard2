"use client";
import React, { useState, useRef } from 'react';
import { FiUpload, FiCalendar, FiUser, FiLink, FiX, FiSave, FiArrowLeft } from 'react-icons/fi';
import { useRouter } from "next/navigation";

const CreateInternship = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    startDate: '',
    endDate: '',
    zoomLink: '',
    instructor: '',
    tags: []
  });
  
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const fileInputRef = useRef(null);
  
  // Available categories
  const categories = [
    'Development',
    'Data Science',
    'Design',
    'Marketing',
    'Business',
    'Photography',
    'Music',
    'Health & Fitness'
  ];
  
  // Available instructors
  const instructors = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com' }
  ];
  
  // Available tags
  const availableTags = [
    'Beginner', 'Intermediate', 'Advanced',
    'Online', 'In-person', 'Hybrid',
    'Full-time', 'Part-time',
    'Paid', 'Unpaid',
    'Certificate', 'No Certificate'
  ];
  
  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const router = useRouter();

const handleBack = () => {
  router.push('/admin-dashboard/internship');  // <-- your main internships page
};

  
  // Handle thumbnail upload
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Check file type
      if (!file.type.match('image.*')) {
        setErrors({
          ...errors,
          thumbnail: 'Please select an image file'
        });
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({
          ...errors,
          thumbnail: 'Image size should be less than 5MB'
        });
        return;
      }
      
      setThumbnail(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result);
      };
      reader.readAsDataURL(file);
      
      // Clear error if it exists
      if (errors.thumbnail) {
        setErrors({
          ...errors,
          thumbnail: null
        });
      }
    }
  };
  
  // Handle tag selection
  const handleTagToggle = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.category) {
      newErrors.category = 'Category is required';
    }
    
    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }
    
    if (!formData.endDate) {
      newErrors.endDate = 'End date is required';
    } else if (formData.startDate && new Date(formData.endDate) < new Date(formData.startDate)) {
      newErrors.endDate = 'End date must be after start date';
    }
    
    if (!formData.instructor) {
      newErrors.instructor = 'Instructor is required';
    }
    
    if (!thumbnail) {
      newErrors.thumbnail = 'Thumbnail is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            title: '',
            description: '',
            category: '',
            startDate: '',
            endDate: '',
            zoomLink: '',
            instructor: '',
            tags: []
          });
          setThumbnail(null);
          setThumbnailPreview(null);
          setSelectedTags([]);
          setSubmitSuccess(false);
        }, 3000);
      }, 1500);
    }
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backButton} onClick={handleBack}>
  <FiArrowLeft size={18} />
  <span>Back to Internships</span>
</button>

        <h1 style={styles.title}>Create New Internship</h1>
        <p style={styles.subtitle}>Add details for a new program</p>
      </div>
      
      {submitSuccess && (
        <div style={styles.successMessage}>
          <h3>Internship created successfully!</h3>
          <p>Your new internship has been added to the platform.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formContainer}>
          {/* Left Column - Form Fields */}
          <div style={styles.formColumn}>
            {/* Title */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Internship Title <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter internship title"
                style={{
                  ...styles.input,
                  borderColor: errors.title ? '#EF7C00' : '#e2e8f0'
                }}
              />
              {errors.title && <p style={styles.errorText}>{errors.title}</p>}
            </div>
            
            {/* Description */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Description <span style={styles.required}>*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the internship program"
                rows={5}
                style={{
                  ...styles.textarea,
                  borderColor: errors.description ? '#EF7C00' : '#e2e8f0'
                }}
              />
              {errors.description && <p style={styles.errorText}>{errors.description}</p>}
            </div>
            
            {/* Category */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Category <span style={styles.required}>*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                style={{
                  ...styles.select,
                  borderColor: errors.category ? '#EF7C00' : '#e2e8f0'
                }}
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <p style={styles.errorText}>{errors.category}</p>}
            </div>
            
            {/* Dates */}
            <div style={styles.formRow}>
              <div style={{ ...styles.formGroup, flex: 1, marginRight: '16px' }}>
                <label style={styles.label}>
                  Start Date <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWithIcon}>
                  <FiCalendar size={18} color="#718096" style={styles.inputIcon} />
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      paddingLeft: '40px',
                      borderColor: errors.startDate ? '#EF7C00' : '#e2e8f0'
                    }}
                  />
                </div>
                {errors.startDate && <p style={styles.errorText}>{errors.startDate}</p>}
              </div>
              
              <div style={{ ...styles.formGroup, flex: 1 }}>
                <label style={styles.label}>
                  End Date <span style={styles.required}>*</span>
                </label>
                <div style={styles.inputWithIcon}>
                  <FiCalendar size={18} color="#718096" style={styles.inputIcon} />
                  <input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    style={{
                      ...styles.input,
                      paddingLeft: '40px',
                      borderColor: errors.endDate ? '#EF7C00' : '#e2e8f0'
                    }}
                  />
                </div>
                {errors.endDate && <p style={styles.errorText}>{errors.endDate}</p>}
              </div>
            </div>
            
            {/* Zoom Link */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Zoom Link
              </label>
              <div style={styles.inputWithIcon}>
               
                <input
                  type="url"
                  name="zoomLink"
                  value={formData.zoomLink}
                  onChange={handleChange}
                  placeholder="https://zoom.us/j/123456789"
                  style={styles.input}
                />
              </div>
            </div>
            
            {/* Instructor */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Assign Instructor <span style={styles.required}>*</span>
              </label>
              <div style={styles.inputWithIcon}>
                <FiUser size={18} color="#718096" style={styles.inputIcon} />
                <select
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  style={{
                    ...styles.select,
                    paddingLeft: '40px',
                    borderColor: errors.instructor ? '#EF7C00' : '#e2e8f0'
                  }}
                >
                  <option value="">Select an instructor</option>
                  {instructors.map(instructor => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name} ({instructor.email})
                    </option>
                  ))}
                </select>
              </div>
              {errors.instructor && <p style={styles.errorText}>{errors.instructor}</p>}
            </div>
            
            {/* Tags */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Tags
              </label>
              <div style={styles.tagsContainer}>
                {availableTags.map(tag => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => handleTagToggle(tag)}
                    style={{
                      ...styles.tagButton,
                      backgroundColor: selectedTags.includes(tag) ? '#1640FF' : '#fff',
                      color: selectedTags.includes(tag) ? '#fff' : '#4a5568',
                      borderColor: selectedTags.includes(tag) ? '#1640FF' : '#e2e8f0'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Thumbnail Upload */}
            <div style={styles.formGroup}>
              <label style={styles.label}>
                Upload Thumbnail <span style={styles.required}>*</span>
              </label>
              <div
                style={{
                  ...styles.thumbnailUpload,
                  borderColor: errors.thumbnail ? '#EF7C00' : '#e2e8f0'
                }}
                onClick={() => fileInputRef.current.click()}
              >
                {thumbnailPreview ? (
                  <div style={styles.thumbnailPreview}>
                    <img src={thumbnailPreview} alt="Thumbnail preview" style={styles.thumbnailImage} />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setThumbnail(null);
                        setThumbnailPreview(null);
                        fileInputRef.current.value = null;
                      }}
                      style={styles.removeThumbnail}
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ) : (
                  <div style={styles.thumbnailPlaceholder}>
                    <FiUpload size={24} color="#718096" />
                    <p style={styles.thumbnailText}>
                      Click to upload or drag and drop
                    </p>
                    <p style={styles.thumbnailSubtext}>
                      PNG, JPG, GIF up to 5MB
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  style={styles.fileInput}
                />
              </div>
              {errors.thumbnail && <p style={styles.errorText}>{errors.thumbnail}</p>}
            </div>
          </div>
          
          {/* Right Column - Preview */}
          <div style={styles.previewColumn}>
            <div style={styles.previewCard}>
              <h2 style={styles.previewTitle}>Preview</h2>
              
              <div style={styles.previewImage}>
                {thumbnailPreview ? (
                  <img src={thumbnailPreview} alt="Internship thumbnail" style={styles.previewImageImg} />
                ) : (
                  <div style={styles.previewImagePlaceholder}>
                    <FiUpload size={32} color="#cbd5e0" />
                  </div>
                )}
              </div>
              
              <div style={styles.previewContent}>
                <h3 style={styles.previewInternshipTitle}>
                  {formData.title || 'Internship Title'}
                </h3>
                
                <div style={styles.previewMeta}>
                  <div style={styles.previewMetaItem}>
                    <span style={styles.previewMetaLabel}>Category:</span>
                    <span style={styles.previewMetaValue}>
                      {formData.category || 'Not selected'}
                    </span>
                  </div>
                  
                  <div style={styles.previewMetaItem}>
                    <span style={styles.previewMetaLabel}>Duration:</span>
                    <span style={styles.previewMetaValue}>
                      {formData.startDate && formData.endDate
                        ? `${new Date(formData.startDate).toLocaleDateString()} - ${new Date(formData.endDate).toLocaleDateString()}`
                        : 'Not specified'}
                    </span>
                  </div>
                  
                  <div style={styles.previewMetaItem}>
                    <span style={styles.previewMetaLabel}>Instructor:</span>
                    <span style={styles.previewMetaValue}>
                      {formData.instructor
                        ? instructors.find(i => i.id === parseInt(formData.instructor))?.name || 'Not selected'
                        : 'Not selected'}
                    </span>
                  </div>
                </div>
                
                <p style={styles.previewDescription}>
                  {formData.description || 'Internship description will appear here...'}
                </p>
                
                {selectedTags.length > 0 && (
                  <div style={styles.previewTags}>
                    {selectedTags.map(tag => (
                      <span key={tag} style={styles.previewTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Actions */}
        <div style={styles.formActions}>
          <button
            type="button"
            style={styles.cancelButton}
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          <button
            type="submit"
            style={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span>Creating...</span>
              </>
            ) : (
              <>
                <FiSave size={18} />
                <span>Create Internship</span>
              </>
            )}
          </button>
        </div>
      </form>
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
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    padding: '8px 0',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#718096',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer'
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
  successMessage: {
    backgroundColor: '#f0fdf4',
    border: '1px solid #bbf7d0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '24px',
    color: '#166534'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  formContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px'
  },
  formColumn: {
    flex: '2',
    minWidth: '300px'
  },
  previewColumn: {
    flex: '1',
    minWidth: '300px'
  },
  formGroup: {
    marginBottom: '20px'
  },
  formRow: {
    display: 'flex',
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    marginBottom: '8px',
    color: '#4a5568'
  },
  required: {
    color: '#EF7C00'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    resize: 'vertical'
  },
  select: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
    backgroundPosition: 'right 12px center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '16px'
  },
  inputWithIcon: {
    position: 'relative'
  },
  inputIcon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    pointerEvents: 'none'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tagButton: {
    padding: '6px 12px',
    borderRadius: '20px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  thumbnailUpload: {
    border: '2px dashed #e2e8f0',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s'
  },
  thumbnailPreview: {
    position: 'relative',
    maxWidth: '100%'
  },
  thumbnailImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '6px',
    objectFit: 'cover'
  },
  removeThumbnail: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  },
  thumbnailPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px'
  },
  thumbnailText: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#4a5568',
    margin: 0
  },
  thumbnailSubtext: {
    fontSize: '14px',
    color: '#718096',
    margin: 0
  },
  fileInput: {
    display: 'none'
  },
  errorText: {
    color: '#EF7C00',
    fontSize: '14px',
    marginTop: '4px',
    margin: 0
  },
  previewCard: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    position: 'sticky',
    top: '20px'
  },
  previewTitle: {
    fontSize: '18px',
    fontWeight: '600',
    padding: '16px',
    borderBottom: '1px solid #e2e8f0',
    margin: 0
  },
  previewImage: {
    height: '180px',
    overflow: 'hidden',
    backgroundColor: '#f7fafc'
  },
  previewImageImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  previewImagePlaceholder: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  previewContent: {
    padding: '16px'
  },
  previewInternshipTitle: {
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 12px 0',
    color: '#1a202c'
  },
  previewMeta: {
    marginBottom: '16px'
  },
  previewMetaItem: {
    display: 'flex',
    marginBottom: '8px'
  },
  previewMetaLabel: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#718096',
    minWidth: '80px'
  },
  previewMetaValue: {
    fontSize: '14px',
    color: '#4a5568'
  },
  previewDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
    color: '#4a5568',
    margin: '0 0 16px 0'
  },
  previewTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  previewTag: {
    display: 'inline-block',
    padding: '4px 8px',
    backgroundColor: '#f1f5f9',
    color: '#4a5568',
    borderRadius: '4px',
    fontSize: '12px'
  },
  formActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    marginTop: '24px'
  },
  cancelButton: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#fff',
    color: '#4a5568',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#1640FF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  }
};

export default CreateInternship;