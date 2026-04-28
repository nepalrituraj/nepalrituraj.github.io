import React from 'react';

function PersonalInfoForm({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange('personal', { ...data, [field]: value });
  };

  return (
    <div className="form-section">
      <h3>Personal Information</h3>
      
      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          value={data.name || ''}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="e.g., Rituraj Nepal"
        />
      </div>

      <div className="form-group">
        <label>Professional Title *</label>
        <input
          type="text"
          value={data.title || ''}
          onChange={(e) => handleChange('title', e.target.value)}
          placeholder="e.g., Data Engineer | Cloud Architect"
        />
      </div>

      <div className="form-group">
        <label>Phone *</label>
        <input
          type="tel"
          value={data.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
          placeholder="e.g., +358 50 324 2559"
        />
      </div>

      <div className="form-group">
        <label>Email *</label>
        <input
          type="email"
          value={data.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
          placeholder="e.g., your.email@example.com"
        />
      </div>

      <div className="form-group">
        <label>LinkedIn</label>
        <input
          type="text"
          value={data.linkedin || ''}
          onChange={(e) => handleChange('linkedin', e.target.value)}
          placeholder="e.g., linkedin.com/in/yourprofile"
        />
      </div>

      <div className="form-group">
        <label>GitHub</label>
        <input
          type="text"
          value={data.github || ''}
          onChange={(e) => handleChange('github', e.target.value)}
          placeholder="e.g., github.com/yourusername"
        />
      </div>

      <div className="form-group">
        <label>Location *</label>
        <input
          type="text"
          value={data.location || ''}
          onChange={(e) => handleChange('location', e.target.value)}
          placeholder="e.g., Espoo, Finland"
        />
      </div>
    </div>
  );
}

export default PersonalInfoForm;
