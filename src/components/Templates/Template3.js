import React from 'react';
import './Template3.css';

// Creative Bold Template
function Template3({ data }) {
  return (
    <div className="template-3">
      {/* Header */}
      <header className="t3-header">
        <div className="t3-header-content">
          {data.personal?.photo && (
            <div className="t3-photo-container">
              <img src={data.personal.photo} alt={data.personal.name} className="t3-profile-photo" />
            </div>
          )}
          <div className="t3-header-text">
            <h1 className="t3-name">{data.personal?.name || 'Your Name'}</h1>
            <p className="t3-title">{data.personal?.title || 'Your Professional Title'}</p>
            <div className="t3-contact">
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
          </div>
        </div>
      </header>

      <div className="t3-content">
        {/* Summary */}
        {data.summary && (
          <section className="t3-section">
            <h2 className="t3-section-heading">
              <span className="t3-heading-icon">💼</span>
              About Me
            </h2>
            <p className="t3-text">{data.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <section className="t3-section">
            <h2 className="t3-section-heading">
              <span className="t3-heading-icon">🚀</span>
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="t3-exp-item">
                <h3 className="t3-exp-title">{exp.title}</h3>
                <div className="t3-exp-meta">
                  <span className="t3-exp-company">{exp.company}</span>
                  <span className="t3-exp-period">
                    {exp.startMonth} {exp.startYear} - {exp.endMonth || 'Present'} {exp.endYear}
                  </span>
                </div>
                {exp.technologies && (
                  <div className="t3-tech-tags">
                    {exp.technologies.split(',').map((tech, i) => (
                      <span key={i} className="t3-tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                )}
                
                {/* Projects */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="t3-projects">
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="t3-project">
                        <h4 className="t3-project-name">• {project.name}</h4>
                        <p className="t3-project-period">
                          {project.startMonth} {project.startYear} - {project.endMonth} {project.endYear}
                        </p>
                        <p className="t3-text">{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        <div className="t3-two-column">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section className="t3-section">
              <h2 className="t3-section-heading">
                <span className="t3-heading-icon">🎓</span>
                Education
              </h2>
              {data.education.map((edu, index) => (
                <div key={index} className="t3-edu-item">
                  <h3 className="t3-edu-degree">{edu.degree}</h3>
                  <p className="t3-edu-institution">{edu.institution}</p>
                  <p className="t3-edu-period">
                    {edu.startMonth} {edu.startYear} - {edu.endMonth} {edu.endYear}
                  </p>
                </div>
              ))}
            </section>
          )}

          {/* Expertise */}
          {data.expertise && data.expertise.length > 0 && (
            <section className="t3-section">
              <h2 className="t3-section-heading">
                <span className="t3-heading-icon">⚡</span>
                Core Expertise
              </h2>
              {data.expertise.map((exp, index) => (
                <div key={index} className="t3-expertise-item">
                  <h3 className={`t3-expertise-category ${exp.category.replace(/[^a-z0-9]/gi, '').toLowerCase()}`}>{exp.category}</h3>
                  <p className="t3-expertise-skills">{exp.skills}</p>
                </div>
              ))}
            </section>
          )}

          {/* Languages */}
          {data.languages && data.languages.length > 0 && (
            <section className="t3-section">
              <h2 className="t3-section-heading">
                <span className="t3-heading-icon">🌍</span>
                Languages
              </h2>
              <div className="t3-languages-grid">
                {data.languages.map((lang, index) => {
                  let langClass = '';
                  if (/english/i.test(lang.language)) langClass = 'lang-english';
                  else if (/finnish/i.test(lang.language)) langClass = 'lang-finnish';
                  else if (/nepali/i.test(lang.language)) langClass = 'lang-nepali';
                  return (
                    <div key={index} className={`t3-language-item ${langClass}`}>
                      <span className="t3-language-label">{lang.language}</span>
                      <span className="t3-language-stars">
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i}>
                            {i < lang.proficiency ? '★' : '☆'}
                          </span>
                        ))}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default Template3;
