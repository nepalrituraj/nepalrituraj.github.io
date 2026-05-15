import React from 'react';

function ExpertiseForm({ data, onChange }) {
  const handleAdd = () => {
    onChange('expertise', [...(data || []), { category: '', skills: '' }]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange('expertise', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange('expertise', updated);
  };

  return (
    <div className="form-section">
      <h3>Core Expertise</h3>
      
      {(data || []).map((exp, index) => (
        <div key={index} className="form-group-container">
          <div className="form-group">
            <label>Category *</label>
            <input
              type="text"
              value={exp.category || ''}
              onChange={(e) => handleChange(index, 'category', e.target.value)}
              placeholder="e.g., Cloud & Data Platforms"
            />
          </div>

          <div className="form-group">
            <label>Skills & Technologies *</label>
            <textarea
              value={exp.skills || ''}
              onChange={(e) => handleChange(index, 'skills', e.target.value)}
              placeholder="e.g., Azure Data Factory, Azure Functions, Snowflake..."
              rows="3"
            />
          </div>

          <button type="button" onClick={() => handleRemove(index)} className="btn-remove">
            Remove Category
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd} className="btn-add">
        + Add Expertise Category
      </button>
    </div>
  );
}

export default ExpertiseForm;
