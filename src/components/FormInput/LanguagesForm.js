import React from 'react';

function LanguagesForm({ data = [], onChange }) {
  const handleAdd = () => {
    onChange([...data, { language: '', proficiency: 3 }]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const handleChange = (index, field, value) => {
    const updated = data.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    onChange(updated);
  };

  const renderStars = (rating, langIndex) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'filled' : ''}`}
            onClick={() => handleChange(langIndex, 'proficiency', star)}
            style={{ cursor: 'pointer', fontSize: '24px' }}
          >
            {star <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="form-section">
      <h3>Languages</h3>
      {data.map((lang, index) => (
        <div key={index} className="form-group-container">
          <div className="form-group">
            <label>Language</label>
            <input
              type="text"
              value={lang.language}
              onChange={(e) => handleChange(index, 'language', e.target.value)}
              placeholder="e.g., Finnish, English"
            />
          </div>
          <div className="form-group">
            <label>Proficiency (Stars)</label>
            {renderStars(lang.proficiency, index)}
          </div>
          <button 
            type="button" 
            onClick={() => handleRemove(index)}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAdd} className="add-btn">
        + Add Language
      </button>
    </div>
  );
}

export default LanguagesForm;
