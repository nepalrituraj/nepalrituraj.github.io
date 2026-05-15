import React from 'react';

function EducationForm({ data, onChange }) {
  const handleAdd = () => {
    onChange('education', [...(data || []), { 
      degree: '', 
      institution: '', 
      startMonth: '', 
      startYear: '', 
      endMonth: '', 
      endYear: '' 
    }]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange('education', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange('education', updated);
  };

  return (
    <div className="form-section">
      <h3>Education</h3>
      
      {(data || []).map((edu, index) => (
        <div key={index} className="form-group-container">
          <div className="form-group">
            <label>Degree/Qualification *</label>
            <input
              type="text"
              value={edu.degree || ''}
              onChange={(e) => handleChange(index, 'degree', e.target.value)}
              placeholder="e.g., Master of Science in Information Technology"
            />
          </div>

          <div className="form-group">
            <label>Institution *</label>
            <input
              type="text"
              value={edu.institution || ''}
              onChange={(e) => handleChange(index, 'institution', e.target.value)}
              placeholder="e.g., University of Turku"
            />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <div className="form-group">
              <label>Start Month *</label>
              <input
                type="text"
                value={edu.startMonth || ''}
                onChange={(e) => handleChange(index, 'startMonth', e.target.value)}
                placeholder="e.g., August"
              />
            </div>
            <div className="form-group">
              <label>Start Year *</label>
              <input
                type="text"
                value={edu.startYear || ''}
                onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                placeholder="e.g., 2015"
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <div className="form-group">
              <label>End Month *</label>
              <input
                type="text"
                value={edu.endMonth || ''}
                onChange={(e) => handleChange(index, 'endMonth', e.target.value)}
                placeholder="e.g., May"
              />
            </div>
            <div className="form-group">
              <label>End Year *</label>
              <input
                type="text"
                value={edu.endYear || ''}
                onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                placeholder="e.g., 2020"
              />
            </div>
          </div>

          <button type="button" onClick={() => handleRemove(index)} className="btn-remove">
            Remove Education
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd} className="btn-add">
        + Add Education
      </button>
    </div>
  );
}

export default EducationForm;
