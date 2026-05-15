import React from 'react';

function SummaryForm({ data, onChange }) {
  const handleChange = (value) => {
    onChange('summary', value);
  };

  return (
    <div className="form-section">
      <h3>Professional Summary</h3>
      
      <div className="form-group">
        <label>About You *</label>
        <textarea
          value={data || ''}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Write a brief professional summary highlighting your expertise, experience, and what you bring to the table..."
          rows="8"
        />
        <small>Tip: Keep it concise (2-3 paragraphs) and focus on your key strengths and achievements.</small>
      </div>
    </div>
  );
}

export default SummaryForm;
