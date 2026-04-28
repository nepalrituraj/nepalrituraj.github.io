import React from 'react';
import './Template2.css';

// Minimalist Single Column Template (ATS-Friendly)
function Template2({ data }) {
  return (
    <div className="template-2">
      {/* Header */}
      <header className="t2-header">
        {data.personal?.photo && (
          <div className="t2-photo-container">
            <img 
              src={data.personal.photo} 
              alt={data.personal?.name || 'Profile'} 
              className="t2-profile-photo"
            />
          </div>
        )}
        <h1 className="t2-name">{data.personal?.name || 'Your Name'}</h1>
        <p className="t2-title">{data.personal?.title || 'Your Professional Title'}</p>
        
        <div className="t2-contact">
          {data.personal?.phone && <span>📞 {data.personal.phone}</span>}
          {data.personal?.email && <span>✉️ {data.personal.email}</span>}
          {data.personal?.linkedin && (
            <span>
              🔗 <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer">{data.personal.linkedin}</a>
            </span>
          )}
          {data.personal?.github && (
            <span>
              💻 <a href={data.personal.github} target="_blank" rel="noopener noreferrer">{data.personal.github}</a>
            </span>
          )}
          {data.personal?.location && <span>📍 {data.personal.location}</span>}
        </div>
      </header>

      {/* Summary */}
      {data.summary && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Professional Summary</h2>
          <p className="t2-text">{data.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Professional Experience</h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="t2-exp-item">
              <div className="t2-exp-header">
                <h3 className="t2-exp-title">{exp.title}</h3>
                <span className="t2-exp-period">
                  {exp.startMonth} {exp.startYear} - {exp.endMonth || 'Present'} {exp.endYear}
                </span>
              </div>
              <p className="t2-exp-company">{exp.company}</p>
              {exp.technologies && (
                <p className="t2-tech"><strong>Technologies:</strong> {exp.technologies}</p>
              )}
              
              {/* Projects */}
              {exp.projects && exp.projects.length > 0 && (
                <div className="t2-projects">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex} className="t2-project">
                      <h4 className="t2-project-name">{project.name}</h4>
                      <p className="t2-project-period">
                        {project.startMonth} {project.startYear} - {project.endMonth} {project.endYear}
                      </p>
                      <p className="t2-text">{project.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {data.education && data.education.length > 0 && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Education</h2>
          {data.education.map((edu, index) => (
            <div key={index} className="t2-edu-item">
              <div className="t2-edu-header">
                <h3 className="t2-edu-degree">{edu.degree}</h3>
                <span className="t2-edu-period">
                  {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                </span>
              </div>
              <p className="t2-edu-institution">{edu.institution}</p>
            </div>
          ))}
        </section>
      )}

      {/* Expertise */}
      {data.expertise && data.expertise.length > 0 && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Core Expertise</h2>
          {data.expertise.map((exp, index) => (
            <div key={index} className="t2-expertise-item">
              <h3 className="t2-expertise-category">{exp.category}</h3>
              <p className="t2-expertise-skills">{exp.skills}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {data.skills && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Technical Skills</h2>
          <p className="t2-text">{data.skills}</p>
        </section>
      )}

      {/* Languages */}
      {data.languages && data.languages.length > 0 && (
        <section className="t2-section">
          <h2 className="t2-section-heading">Languages</h2>
          <div className="t2-languages-container">
            {data.languages.map((lang, index) => (
              <div key={index} className="t2-language-item">
                <span className="t2-language-name">{lang.language}:</span>
                <span className="t2-language-level">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < lang.proficiency ? '★' : '☆'}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default Template2;
