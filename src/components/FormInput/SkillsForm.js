import React from 'react';

function SkillsForm({ data, onChange }) {
  const handleChange = (value) => {
    onChange('skills', value);
  };

  return (
    <div className="form-section">
      <h3>Technical Skills</h3>
      
      <div className="form-group">
        <label>Skills & Technologies *</label>
        <textarea
          value={data || ''}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="List your technical skills, tools, and technologies. You can organize by categories:&#10;&#10;Cloud & Data Platforms: Azure Data Factory, Snowflake, etc.&#10;Programming: Python, Java, SQL, etc.&#10;Data Engineering: ETL/ELT, Data Warehousing, etc."
          rows="10"
        />
        <small>Tip: Organize skills by category for better readability.</small>
      </div>
    </div>
  );
}

export default SkillsForm;
