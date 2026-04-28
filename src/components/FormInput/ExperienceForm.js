import React from 'react';

function ExperienceForm({ data, onChange }) {
  const handleAdd = () => {
    onChange('experience', [
      ...(data || []),
      { 
        title: '', 
        company: '', 
        startMonth: '', 
        startYear: '', 
        endMonth: '', 
        endYear: '', 
        technologies: '',
        projects: []
      }
    ]);
  };

  const handleRemove = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange('experience', updated);
  };

  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange('experience', updated);
  };

  const handleAddProject = (expIndex) => {
    const updated = [...data];
    updated[expIndex].projects = [
      ...(updated[expIndex].projects || []),
      { name: '', startMonth: '', startYear: '', endMonth: '', endYear: '', description: '' }
    ];
    onChange('experience', updated);
  };

  const handleRemoveProject = (expIndex, projectIndex) => {
    const updated = [...data];
    updated[expIndex].projects = updated[expIndex].projects.filter((_, i) => i !== projectIndex);
    onChange('experience', updated);
  };

  const handleProjectChange = (expIndex, projectIndex, field, value) => {
    const updated = [...data];
    updated[expIndex].projects[projectIndex] = {
      ...updated[expIndex].projects[projectIndex],
      [field]: value
    };
    onChange('experience', updated);
  };

  return (
    <div className="form-section">
      <h3>Work Experience</h3>
      
      {(data || []).map((exp, index) => (
        <div key={index} className="form-group-container" style={{marginBottom: '30px', background: '#f0f4f8'}}>
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              value={exp.title || ''}
              onChange={(e) => handleChange(index, 'title', e.target.value)}
              placeholder="e.g., Data Engineer & Cloud Architect"
            />
          </div>

          <div className="form-group">
            <label>Company *</label>
            <input
              type="text"
              value={exp.company || ''}
              onChange={(e) => handleChange(index, 'company', e.target.value)}
              placeholder="e.g., Company Name Oy"
            />
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <div className="form-group">
              <label>Start Month *</label>
              <input
                type="text"
                value={exp.startMonth || ''}
                onChange={(e) => handleChange(index, 'startMonth', e.target.value)}
                placeholder="e.g., August"
              />
            </div>
            <div className="form-group">
              <label>Start Year *</label>
              <input
                type="text"
                value={exp.startYear || ''}
                onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                placeholder="e.g., 2022"
              />
            </div>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
            <div className="form-group">
              <label>End Month</label>
              <input
                type="text"
                value={exp.endMonth || ''}
                onChange={(e) => handleChange(index, 'endMonth', e.target.value)}
                placeholder="e.g., Present or December"
              />
            </div>
            <div className="form-group">
              <label>End Year</label>
              <input
                type="text"
                value={exp.endYear || ''}
                onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                placeholder="e.g., 2026 or leave empty"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Key Technologies</label>
            <input
              type="text"
              value={exp.technologies || ''}
              onChange={(e) => handleChange(index, 'technologies', e.target.value)}
              placeholder="e.g., Azure Data Factory, Python, Snowflake, dbt"
            />
          </div>

          {/* Projects Section */}
          <div style={{marginTop: '20px', padding: '15px', background: 'white', borderRadius: '6px'}}>
            <h4 style={{marginBottom: '15px', color: '#2d3748'}}>Projects</h4>
            
            {(exp.projects || []).map((project, pIndex) => (
              <div key={pIndex} style={{marginBottom: '15px', padding: '15px', background: '#f7fafc', borderRadius: '6px', border: '1px solid #e2e8f0'}}>
                <div className="form-group">
                  <label>Project Name *</label>
                  <input
                    type="text"
                    value={project.name || ''}
                    onChange={(e) => handleProjectChange(index, pIndex, 'name', e.target.value)}
                    placeholder="e.g., Legacy CRM Modernization"
                  />
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                  <div className="form-group">
                    <label>Start Month</label>
                    <input
                      type="text"
                      value={project.startMonth || ''}
                      onChange={(e) => handleProjectChange(index, pIndex, 'startMonth', e.target.value)}
                      placeholder="e.g., June"
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Year</label>
                    <input
                      type="text"
                      value={project.startYear || ''}
                      onChange={(e) => handleProjectChange(index, pIndex, 'startYear', e.target.value)}
                      placeholder="e.g., 2025"
                    />
                  </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                  <div className="form-group">
                    <label>End Month</label>
                    <input
                      type="text"
                      value={project.endMonth || ''}
                      onChange={(e) => handleProjectChange(index, pIndex, 'endMonth', e.target.value)}
                      placeholder="e.g., November"
                    />
                  </div>
                  <div className="form-group">
                    <label>End Year</label>
                    <input
                      type="text"
                      value={project.endYear || ''}
                      onChange={(e) => handleProjectChange(index, pIndex, 'endYear', e.target.value)}
                      placeholder="e.g., 2025"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Project Description</label>
                  <textarea
                    value={project.description || ''}
                    onChange={(e) => handleProjectChange(index, pIndex, 'description', e.target.value)}
                    placeholder="Describe the project, your role, and achievements..."
                    rows="4"
                  />
                </div>

                <button type="button" onClick={() => handleRemoveProject(index, pIndex)} className="btn-remove">
                  Remove Project
                </button>
              </div>
            ))}

            <button type="button" onClick={() => handleAddProject(index)} className="btn-add" style={{marginTop: '10px'}}>
              + Add Project
            </button>
          </div>

          <button type="button" onClick={() => handleRemove(index)} className="btn-remove" style={{marginTop: '15px'}}>
            Remove Company
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd} className="btn-add">
        + Add Company
      </button>
    </div>
  );
}

export default ExperienceForm;
