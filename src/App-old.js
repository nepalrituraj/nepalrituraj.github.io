import React from 'react';
import './App.css';
import html2pdf from 'html2pdf.js';
import htmlDocx from 'html-docx-js/dist/html-docx';
import { saveAs } from 'file-saver';

function App() {
  const cvData = {
    name: "Rituraj Nepal",
    title: "Data Engineer | Cloud Architect",
    photo: "/photo.jpg", // Add your photo to public folder
    contact: {
      phone: "+358 50 324 2559",
      email: "rituraj.nepal0011@gmail.com",
      linkedin: "linkedin.com/in/nepalrituraj",
      github: "github.com/nepalrituraj",
      location: "Itsehallintotie 1A, 02600 Espoo, Finland"
    },
    summary: [
      "Data Engineer and Cloud Architect with a passion for designing and delivering innovative Azure solutions. Microsoft Certified Azure Solutions Architect Expert and Administrator Associate, specializing in cloud architecture, data engineering, and DevOps practices. I love combining infrastructure development with creative problem-solving to build scalable data platforms and automated workflows that solve real business challenges.",
      "Experienced in client-facing consulting roles throughout the entire project lifecycle—from architecture design and requirements gathering to production deployment. Thrive in Agile environments where collaboration brings ideas to life, with a strong focus on building data products that create genuine value for organizations."
    ],
    education: [
      {
        degree: "Master of Science in Information Technology",
        institution: "University of Turku",
        period: "2015 - 2020"
      },
      {
        degree: "Bachelor of Science in Information Technology",
        institution: "Centria University of Applied Sciences",
        period: "2010 - 2014"
      }
    ],
    certifications: {
      current: [
        "Microsoft Certified: Azure Solutions Architect Expert (Expert-level)",
        "Microsoft Certified: Azure Administrator Associate"
      ],
      previous: [
        "Microsoft Certified: Azure Data Engineer Associate",
        "Microsoft Certified: Azure Data Scientist Associate"
      ]
    },
    expertise: {
      "Cloud & Data Platforms": "Azure Data Factory, Azure Functions, Azure Data Lake, Snowflake, Azure Databricks, Azure SQL Database, Azure DevOps, Microsoft Entra ID, Azure OpenAI, Azure AI Search",
      "Programming & Development": "Python, Java, PySpark, REST API Development, Groovy Scripts",
      "Data Engineering": "ETL/ELT Pipelines, Data Warehousing, dbt (data build tool), Data Modeling",
      "DevOps & Infrastructure": "Bicep, ARM Templates, Azure DevOps, GitHub Actions",
      "Methodology & Soft Skills": "Agile, Client-facing Consulting, Requirements Gathering, Communication, Solution Architecture",
      "Databases": "Snowflake, PostgreSQL, Azure SQL, MySQL",
      "Machine Learning & AI": "TensorFlow, Keras, Scikit-learn, Computer Vision, NLP, Neural Networks, Azure OpenAI",
      "Tools & Integration": "Jira Administration, Liferay, Agentic AI, RAG, Git, Managed Identity, Service Principals"
    },
    languages: [
      { lang: "English", level: "Excellent (Professional working proficiency)" },
      { lang: "Finnish", level: "Advanced (Professional working proficiency)" },
      { lang: "Nepali", level: "Native" }
    ],
    experience: [
      {
        title: "Data Engineer & Cloud Architect",
        company: "Virnex Group Oy",
        period: "August 2022 - Current (3 years 8 months)",
        project: "Multiple Client Projects: Software Development, Data Engineering & Cloud Architecture",
        description: "Delivered comprehensive software development, data engineering, and cloud architecture solutions across multiple enterprise clients.",
        projects: [
          {
            name: "Enterprise Authentication & Integration Platform",
            period: "Jan 2026 - Apr 2026",
            details: "Developed enterprise authentication solution enabling seamless user authentication using Microsoft Entra ID. Implemented automated group synchronization from Entra ID to Liferay platform for role-based access control. Integrated third-party ticketing service for incident management and support workflows. Built scalable middleware services connecting multiple enterprise systems."
          },
          {
            name: "Legacy CRM Modernization",
            period: "Jun 2025 - Nov 2025",
            details: "Led cloud architecture design for CRM modernization initiative, transitioning legacy database systems to Azure-based infrastructure. Developed Azure infrastructure using Bicep for consistent environment provisioning. Engineered data migration solution using Python to extract, transform, and load data to Azure SQL Database and Azure Data Lake Storage."
          },
          {
            name: "Real-time BI Platform",
            period: "Jan 2025 - May 2025",
            details: "Architected and delivered end-to-end business intelligence platform enabling real-time resource monitoring and automated business calculations. Designed Azure infrastructure using Bicep templates, developed Java REST APIs with PostgreSQL optimization, and built comprehensive data pipeline to Snowflake. Implemented dbt transformation models creating robust data layer for business insights."
          },
          {
            name: "Warehouse Management System",
            period: "Aug 2023 - Dec 2024",
            details: "Led warehouse management system development, transforming manual processes into automated workflows enabling real-time stock management. Administered Jira as system expert, configuring workflows, permissions, and integrations. Automated multiple business processes using Azure Functions."
          },
          {
            name: "Cloud Data Integration Platform",
            period: "Aug 2022 - Jul 2023",
            details: "Developed multiple Function Apps for ETL/ELT processes integrating Azure Data Factory, Azure Functions, Azure Key Vault, Storage Accounts, and Snowflake. Implemented scalable, auditable data warehouse architecture with comprehensive error handling and monitoring."
          }
        ],
        tech: "Azure Data Factory, Azure Functions, Azure DevOps, Snowflake, Bicep, dbt, PostgreSQL, Azure SQL, Python, Java, Jira Administration, Microsoft Entra ID, Liferay, Agentic AI, RAG"
      },
      {
        title: "Software Developer & Data Scientist",
        company: "Aivan Innovations Oy",
        period: "June 2020 - October 2021 (1 year 4 months)",
        project: "AI/ML Solutions for Document Intelligence",
        description: "Developed advanced AI/ML solutions for computer vision and natural language processing in document intelligence domain. Designed custom encoder models and neural network architectures from scratch for segment detection in complex documents. Implemented NLP pipelines including Named Entity Recognition (NER), Part-of-Speech tagging, and topic modeling. Built handwritten document recognition system using Tesseract OCR with custom preprocessing. Developed autoencoder architectures for dimensionality reduction and feature extraction.",
        tech: "TensorFlow, Keras, Computer Vision, NLP, Azure Databricks, Tesseract OCR, Neural Networks, Python"
      },
      {
        title: "Business Developer & Full Stack Developer",
        company: "Self-Employed (Welete Oy)",
        period: "January 2018 - December 2019 (2 years)",
        project: "Business Analytics Solution Development",
        description: "Developed browser-based business analytics solution combining descriptive and predictive analytics capabilities. Built Python backend for data processing, statistical analysis, and predictive modeling. Created React frontend for interactive data visualization and user-friendly analytics interface. Implemented REST API integration between frontend and backend. Delivered 440+ hours of development work producing sustainable and extensible analytics platform.",
        tech: "React, Python, REST API, Predictive Modeling, Business Analytics"
      }
    ]
  };

  const downloadPDF = () => {
    const element = document.getElementById('cv-content');
    const opt = {
      margin: 10,
      filename: 'Rituraj_Nepal_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const downloadDOC = () => {
    const element = document.getElementById('cv-content');
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <style>
            body { font-family: Calibri, sans-serif; font-size: 11pt; line-height: 1.4; }
            h1 { font-size: 24pt; color: #1a365d; margin-bottom: 5pt; }
            h2 { font-size: 14pt; color: #2563eb; margin-top: 15pt; margin-bottom: 8pt; border-bottom: 2px solid #2563eb; }
            h3 { font-size: 12pt; color: #1e40af; margin-top: 10pt; margin-bottom: 5pt; }
            .subtitle { font-size: 12pt; color: #64748b; margin-bottom: 15pt; }
            .contact { font-size: 10pt; color: #475569; margin-bottom: 15pt; }
            .section { margin-bottom: 15pt; }
            .job-title { font-weight: bold; color: #1e40af; }
            .company { color: #475569; font-style: italic; }
            .period { color: #64748b; font-size: 10pt; }
            .tech { color: #0ea5e9; font-size: 9pt; margin-top: 5pt; }
            p { margin: 5pt 0; }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `;
    
    const converted = htmlDocx.asBlob(htmlContent);
    saveAs(converted, 'Rituraj_Nepal_CV.docx');
  };

  return (
    <div className="App">
      <div className="controls">
        <button onClick={downloadPDF} className="download-btn pdf-btn">
          📄 Download as PDF
        </button>
        <button onClick={downloadDOC} className="download-btn doc-btn">
          📝 Download as DOC
        </button>
      </div>

      <div className="cv-container" id="cv-content">
        <div className="cv-layout">
          {/* Left Column - Photo, Contact, Education, Certifications */}
          <aside className="cv-sidebar">
            {/* Photo Section */}
            {cvData.photo && (
              <div className="photo-container">
                <img src={cvData.photo} alt={cvData.name} className="profile-photo" />
              </div>
            )}
            
            {/* Name and Title */}
            <div className="sidebar-header">
              <h1 className="sidebar-name">{cvData.name}</h1>
              <p className="sidebar-title">{cvData.title}</p>
            </div>

            {/* Contact Information */}
            <div className="sidebar-section">
              <h2 className="sidebar-heading">Contact</h2>
              <div className="contact-list">
                <div className="contact-item">📞 {cvData.contact.phone}</div>
                <div className="contact-item">✉️ {cvData.contact.email}</div>
                <div className="contact-item">🔗 {cvData.contact.linkedin}</div>
                <div className="contact-item">💻 {cvData.contact.github}</div>
                <div className="contact-item">📍 {cvData.contact.location}</div>
              </div>
            </div>

            {/* Languages */}
            <div className="sidebar-section">
              <h2 className="sidebar-heading">Languages</h2>
              <div className="languages-list">
                {cvData.languages.map((lang, idx) => (
                  <div key={idx} className="language-item">
                    <strong>{lang.lang}</strong><br />
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="sidebar-section">
              <h2 className="sidebar-heading">Education</h2>
              {cvData.education.map((edu, idx) => (
                <div key={idx} className="education-item-sidebar">
                  <strong>{edu.degree}</strong><br />
                  <span>{edu.institution}</span><br />
                  <span className="period-text">{edu.period}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="sidebar-section">
              <h2 className="sidebar-heading">Certifications</h2>
              <div className="cert-list-sidebar">
                <strong>Current:</strong>
                <ul>
                  {cvData.certifications.current.map((cert, idx) => (
                    <li key={idx}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expertise - Moved to sidebar for better balance */}
            <div className="sidebar-section">
              <h2 className="sidebar-heading">Core Expertise</h2>
              <div className="expertise-sidebar">
                {Object.entries(cvData.expertise).map(([category, skills], idx) => (
                  <div key={idx} className="expertise-item-sidebar">
                    <strong className="expertise-category-sidebar">{category}</strong>
                    <p className="expertise-skills-sidebar">{skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Column - Summary and Experience */}
          <main className="cv-main">
            {/* Professional Summary */}
            <section className="main-section">
              <h2 className="main-heading">Professional Summary</h2>
              {cvData.summary.map((para, idx) => (
                <p key={idx} className="summary-text">{para}</p>
              ))}
            </section>

            {/* Experience */}
            <section className="main-section">
              <h2 className="main-heading">Professional Experience</h2>
              {cvData.experience.map((job, idx) => (
                <div key={idx} className="experience-item-compact">
                  <h3 className="job-title">{job.title}</h3>
                  <p className="company-period">
                    <strong>{job.company}</strong> | {job.period}
                  </p>
                  <p className="job-description-compact">{job.description}</p>
                  
                  {/* Show sub-projects if available (for Virnex) */}
                  {job.projects && (
                    <div className="sub-projects-compact">
                      {job.projects.map((subProject, subIdx) => (
                        <div key={subIdx} className="sub-project-compact">
                          <strong>• {subProject.name}</strong> ({subProject.period})
                          <p>{subProject.details}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <p className="tech-stack-compact"><strong>Technologies:</strong> {job.tech}</p>
                </div>
              ))}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
