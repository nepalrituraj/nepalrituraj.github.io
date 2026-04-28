import React from 'react';
import './Template1.css';

// Professional Modern Template (Two-Column)
function Template1({ data }) {
  return (
    <div className="template-1">
      <div className="t1-layout">
        {/* Left Sidebar */}
        <aside className="t1-sidebar">
          {data.personal?.photo && (
            <div className="t1-photo-container">
              <img src={data.personal.photo} alt={data.personal.name} className="t1-profile-photo" />
            </div>
          )}
          
          <div className="t1-sidebar-header">
            <h1 className="t1-name">{data.personal?.name || 'Your Name'}</h1>
            <p className="t1-title">{data.personal?.title || 'Your Professional Title'}</p>
          </div>

          {/* Contact */}
          <div className="t1-section">
            <h2 className="t1-section-heading">Contact</h2>
            <div className="t1-contact-list">
              {data.personal?.phone && <div className="t1-contact-item">📞 {data.personal.phone}</div>}
              {data.personal?.email && <div className="t1-contact-item">✉️ {data.personal.email}</div>}
              {data.personal?.linkedin && (
                <div className="t1-contact-item">
                  🔗 <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer">{data.personal.linkedin}</a>
                </div>
              )}
              {data.personal?.github && (
                <div className="t1-contact-item">
                  💻 <a href={data.personal.github} target="_blank" rel="noopener noreferrer">{data.personal.github}</a>
                </div>
              )}
              {data.personal?.location && <div className="t1-contact-item">📍 {data.personal.location}</div>}
            </div>
          </div>

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div className="t1-section">
              <h2 className="t1-section-heading">Education</h2>
              {data.education.map((edu, index) => (
                <div key={index} className="t1-edu-item">
                  <h3 className="t1-edu-degree">{edu.degree}</h3>
                  <p className="t1-edu-institution">{edu.institution}</p>
                  <p className="t1-edu-period">
                    {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Expertise */}
          {data.expertise && data.expertise.length > 0 && (
            <div className="t1-section">
              <h2 className="t1-section-heading">Core Expertise</h2>
              {data.expertise.map((exp, index) => (
                <div key={index} className="t1-expertise-item">
                  <h3 className="t1-expertise-category">{exp.category}</h3>
                  <p className="t1-expertise-skills">{exp.skills}</p>
                </div>
              ))}
            </div>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <div className="t1-section">
              <h2 className="t1-section-heading">Languages</h2>
              {data.languages.map((lang, index) => (
                <div key={index} className="t1-language-item">
                  <span className="t1-language-name">{lang.language}</span>
                  <span className="t1-language-level">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < lang.proficiency ? 'star-filled' : 'star-empty'}>
                        {i < lang.proficiency ? '★' : '☆'}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="t1-main">
          {/* Summary */}
          {data.summary && (
            <section className="t1-content-section">
              <h2 className="t1-content-heading">Professional Summary</h2>
              <div className="t1-summary-text">{data.summary}</div>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="t1-content-section">
              <h2 className="t1-content-heading">Experience</h2>
              {data.experience.map((exp, index) => (
                <div key={index} className="t1-exp-item">
                  <h3 className="t1-exp-title">{exp.title}</h3>
                  <div className="t1-exp-meta">
                    <span className="t1-exp-company">{exp.company}</span>
                    <span className="t1-exp-period">
                      {exp.startMonth} {exp.startYear} - {exp.endMonth || 'Present'} {exp.endYear}
                    </span>
                  </div>
                  {exp.technologies && (
                    <p className="t1-exp-tech"><strong>Technologies:</strong> {exp.technologies}</p>
                  )}
                  
                  {/* Projects within company */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="t1-projects">
                      {exp.projects.map((project, pIndex) => (
                        <div key={pIndex} className="t1-project-item">
                          <h4 className="t1-project-name">{project.name}</h4>
                          <p className="t1-project-period">
                            {project.startMonth} {project.startYear} - {project.endMonth} {project.endYear}
                          </p>
                          <p className="t1-project-description">{project.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </section>
          )}

          {/* Skills */}
          {data.skills && (
            <section className="t1-content-section">
              <h2 className="t1-content-heading">Additional Information</h2>
              <div className="t1-skills-text">{data.skills}</div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default Template1;
