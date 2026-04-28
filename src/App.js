import React, { useState, useEffect } from 'react';
import './App.css';
import html2pdf from 'html2pdf.js';
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';

// Import form components
import PersonalInfoForm from './components/FormInput/PersonalInfoForm';
import SummaryForm from './components/FormInput/SummaryForm';
import EducationForm from './components/FormInput/EducationForm';
import ExperienceForm from './components/FormInput/ExperienceForm';
import ExpertiseForm from './components/FormInput/ExpertiseForm';
import LanguagesForm from './components/FormInput/LanguagesForm';

// Import templates
import Template1 from './components/Templates/Template1';
import Template2 from './components/Templates/Template2';
import Template3 from './components/Templates/Template3';

function App() {
  // Check if running in development mode (local) or production (GitHub Pages)
  const isDevelopment = process.env.NODE_ENV === 'development';
  const [showForm, setShowForm] = useState(isDevelopment); // Show forms only in development
  const [selectedTemplate, setSelectedTemplate] = useState('template1');
  const [cvData, setCvData] = useState(() => {
    // Load from localStorage or use default with pre-filled data
    const saved = localStorage.getItem('cvData');
    return saved ? JSON.parse(saved) : {
      personal: {
        name: 'Rituraj Nepal',
        title: 'Data Engineer | Cloud Architect',
        phone: '+358 50 324 2559',
        email: 'rituraj.nepal0011@gmail.com',
        linkedin: 'https://www.linkedin.com/in/nepalrituraj/',
        github: 'https://nepalrituraj.github.io/',
        location: 'Espoo, Finland',
        photo: '/photo.jpg'
      },
      summary: 'Data Engineer, Cloud Architect, and DevOps Specialist with over six years of hands-on experience building enterprise-grade solutions on Azure. Microsoft Certified Azure Solutions Architect Expert, passionate about creating data products in the cloud that serve people and solve real business challenges.\n\nBuilding end-to-end data platforms—ETL/ELT pipelines with Azure Data Factory and Functions, data warehouses using Snowflake and DataVault methodology, transformation models with dbt, and data migrations from legacy systems to cloud data lakes. Designing scalable Azure infrastructure with Bicep, implementing secure networking with managed identities, and architecting multi-tier applications.',
      education: [
        {
          degree: 'Master of Science in Information Technology',
          institution: 'University of Turku',
          startMonth: 'August',
          startYear: '2015',
          endMonth: 'May',
          endYear: '2020'
        },
        {
          degree: 'Bachelor of Science in Information Technology',
          institution: 'Centria University of Applied Sciences',
          startMonth: 'September',
          startYear: '2010',
          endMonth: 'June',
          endYear: '2014'
        }
      ],
      expertise: [
        {
          category: 'Cloud & Data Platforms',
          skills: 'Azure Data Factory, Azure Functions, Azure Data Lake, Snowflake, Azure Databricks, Azure SQL Database, Azure DevOps, Microsoft Entra ID, Azure OpenAI, Azure AI Search'
        },
        {
          category: 'Programming & Development',
          skills: 'Python, Java, PySpark, REST API Development, Groovy Scripts'
        },
        {
          category: 'Data Engineering',
          skills: 'ETL/ELT Pipelines, Data Warehousing, dbt (data build tool), Data Modeling, DataVault Builder'
        },
        {
          category: 'DevOps & Infrastructure',
          skills: 'Bicep, ARM Templates, Docker, Kubernetes, CI/CD Pipelines, Azure DevOps, GitHub Actions'
        },
        {
          category: 'Databases',
          skills: 'Snowflake, PostgreSQL, Azure SQL, MySQL, IBM DB2'
        },
        {
          category: 'Machine Learning & AI',
          skills: 'TensorFlow, Keras, Scikit-learn, Computer Vision, NLP, Neural Networks, Azure OpenAI'
        }
      ],
      experience: [
        {
          title: 'Data Engineer & Cloud Architect',
          company: 'Virnex Group Oy',
          startMonth: 'August',
          startYear: '2022',
          endMonth: 'Present',
          endYear: '',
          technologies: 'Azure Data Factory, Azure Functions, Snowflake, Bicep, dbt, PostgreSQL, Azure SQL, Python, Java, Microsoft Entra ID, Docker, Kubernetes',
          projects: [
            {
              name: 'Enterprise Authentication & Integration Platform',
              startMonth: 'January',
              startYear: '2026',
              endMonth: 'April',
              endYear: '2026',
              description: 'Developed enterprise authentication solution enabling seamless user authentication using Microsoft Entra ID. Implemented automated group synchronization from Entra ID to Liferay platform for role-based access control. Integrated third-party ticketing service for incident management and support workflows.'
            },
            {
              name: 'Legacy CRM Modernization',
              startMonth: 'June',
              startYear: '2025',
              endMonth: 'November',
              endYear: '2025',
              description: 'Led cloud architecture design for CRM modernization initiative, transitioning legacy IBM DB2 to Azure-based infrastructure. Developed Azure infrastructure using Bicep for consistent environment provisioning. Engineered data migration solution using Python to extract, transform, and load data to Azure SQL Database and Azure Data Lake Storage.'
            },
            {
              name: 'Real-time BI Platform',
              startMonth: 'January',
              startYear: '2025',
              endMonth: 'May',
              endYear: '2025',
              description: 'Architected and delivered end-to-end business intelligence platform enabling real-time resource monitoring and automated business calculations. Designed Azure infrastructure using Bicep templates, developed Java REST APIs with PostgreSQL optimization, and built comprehensive data pipeline to Snowflake. Implemented dbt transformation models.'
            },
            {
              name: 'Warehouse Management System',
              startMonth: 'August',
              startYear: '2023',
              endMonth: 'December',
              endYear: '2024',
              description: 'Led warehouse management system development, transforming manual processes into automated workflows enabling real-time stock management. Administered Jira as system expert, configuring workflows, permissions, and integrations. Automated multiple business processes using Azure Functions.'
            },
            {
              name: 'Cloud Data Integration Platform',
              startMonth: 'August',
              startYear: '2022',
              endMonth: 'July',
              endYear: '2023',
              description: 'Developed multiple Function Apps for ETL/ELT processes integrating Azure Data Factory, Azure Functions, Azure Key Vault, Storage Accounts, and Snowflake. Implemented DataVault Builder methodology for scalable, auditable data warehouse architecture with comprehensive error handling and monitoring.'
            }
          ]
        },
        {
          title: 'Software Developer & Data Scientist',
          company: 'Aivan Innovations Oy',
          startMonth: 'June',
          startYear: '2020',
          endMonth: 'October',
          endYear: '2021',
          technologies: 'TensorFlow, Keras, Computer Vision, NLP, Azure Databricks, Tesseract OCR, Neural Networks, Python',
          projects: [
            {
              name: 'AI/ML Solutions for Document Intelligence',
              startMonth: 'June',
              startYear: '2020',
              endMonth: 'October',
              endYear: '2021',
              description: 'Developed advanced AI/ML solutions for computer vision and natural language processing in document intelligence domain. Designed custom encoder models and neural network architectures from scratch for segment detection in complex documents. Implemented NLP pipelines including Named Entity Recognition (NER), Part-of-Speech tagging, and topic modeling. Built handwritten document recognition system using Tesseract OCR with custom preprocessing.'
            }
          ]
        },
        {
          title: 'Business Developer & Full Stack Developer',
          company: 'Self-Employed (Welete Oy)',
          startMonth: 'January',
          startYear: '2018',
          endMonth: 'December',
          endYear: '2019',
          technologies: 'React, Python, REST API, Predictive Modeling, Business Analytics',
          projects: [
            {
              name: 'Business Analytics Solution Development',
              startMonth: 'January',
              startYear: '2018',
              endMonth: 'December',
              endYear: '2019',
              description: 'Developed browser-based business analytics solution combining descriptive and predictive analytics capabilities. Built Python backend for data processing, statistical analysis, and predictive modeling. Created React frontend for interactive data visualization and user-friendly analytics interface. Implemented REST API integration between frontend and backend.'
            }
          ]
        }
      ],
      languages: [
        { language: 'English', proficiency: 4 },
        { language: 'Finnish', proficiency: 4 },
        { language: 'Nepali', proficiency: 5 }
      ]
    };
  });

  // Save to localStorage whenever cvData changes
  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  const handleDataChange = (section, data) => {
    setCvData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const resetToDefault = () => {
    if (window.confirm('This will reset all data to default values. Are you sure?')) {
      localStorage.removeItem('cvData');
      window.location.reload();
    }
  };

  const downloadPDF = () => {
    const element = document.getElementById('cv-preview');
    const opt = {
      margin: 8,
      filename: `${cvData.personal.name || 'CV'}_Resume.pdf`,
      image: { type: 'jpeg', quality: 0.75 }, // Reduced quality for smaller file size
      html2canvas: { 
        scale: 1.5, // Reduced from 2 to keep file size under 2MB
        useCORS: true,
        logging: false,
        letterRendering: true
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait',
        compress: true // Enable PDF compression
      }
    };
    html2pdf().set(opt).from(element).save();
  };

  const downloadDOC = async () => {
    // Create a simple DOCX document
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: cvData.personal.name || 'Your Name',
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: cvData.personal.title || '',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `📞 ${cvData.personal.phone || ''} | ✉️ ${cvData.personal.email || ''} | 📍 ${cvData.personal.location || ''}`,
              }),
            ],
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'PROFESSIONAL SUMMARY',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: cvData.summary || '',
          }),
          new Paragraph({ text: '' }),
          new Paragraph({
            text: 'EXPERIENCE',
            heading: HeadingLevel.HEADING_2,
          }),
          ...(cvData.experience || []).flatMap(exp => [
            new Paragraph({
              text: exp.title || '',
              heading: HeadingLevel.HEADING_3,
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.company || ''} | `, italic: true }),
                new TextRun({ text: exp.period || '', italic: true }),
              ],
            }),
            new Paragraph({
              text: exp.description || '',
            }),
            new Paragraph({ text: '' }),
          ]),
          new Paragraph({
            text: 'EDUCATION',
            heading: HeadingLevel.HEADING_2,
          }),
          ...(cvData.education || []).flatMap(edu => [
            new Paragraph({
              text: edu.degree || '',
              heading: HeadingLevel.HEADING_3,
            }),
            new Paragraph({
              children: [
                new TextRun({ text: `${edu.institution || ''} | `, italic: true }),
                new TextRun({ text: edu.period || '', italic: true }),
              ],
            }),
            new Paragraph({ text: '' }),
          ]),
          new Paragraph({
            text: 'TECHNICAL SKILLS',
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: cvData.skills || '',
          }),
        ],
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${cvData.personal.name || 'CV'}_Resume.docx`);
  };

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <Template1 data={cvData} />;
      case 'template2':
        return <Template2 data={cvData} />;
      case 'template3':
        return <Template3 data={cvData} />;
      default:
        return <Template1 data={cvData} />;
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>{isDevelopment ? 'CV Builder' : `${cvData.personal?.name || 'Professional'} - Curriculum Vitae`}</h1>
        <div className="header-controls">
          {isDevelopment && (
            <>
              <button onClick={() => setShowForm(!showForm)} className="toggle-form-btn">
                {showForm ? 'Hide' : 'Show'} Form
              </button>
              <button onClick={resetToDefault} className="toggle-form-btn" style={{background: '#f56565', color: 'white'}}>
                Reset Data
              </button>
            </>
          )}
          <select 
            value={selectedTemplate} 
            onChange={(e) => setSelectedTemplate(e.target.value)}
            className="template-selector"
          >
            <option value="template1">Professional Modern</option>
            <option value="template2">Minimalist ATS-Friendly</option>
            <option value="template3">Creative Bold</option>
          </select>
          <button onClick={downloadPDF} className="download-btn pdf-btn">
            📄 PDF
          </button>
          <button onClick={downloadDOC} className="download-btn doc-btn">
            📝 DOC
          </button>
        </div>
      </header>

      <div className="app-layout">
        {showForm && (
          <aside className="form-sidebar">
            <div className="form-container">
              <PersonalInfoForm 
                data={cvData.personal} 
                onChange={handleDataChange}
              />
              <SummaryForm 
                data={cvData.summary} 
                onChange={handleDataChange}
              />
              <EducationForm 
                data={cvData.education} 
                onChange={handleDataChange}
              />
              <ExperienceForm 
                data={cvData.experience} 
                onChange={handleDataChange}
              />
              <ExpertiseForm 
                data={cvData.expertise} 
                onChange={handleDataChange}
              />
              <LanguagesForm 
                data={cvData.languages} 
                onChange={(data) => handleDataChange('languages', data)}
              />
            </div>
          </aside>
        )}

        <main className={`preview-area ${!showForm ? 'full-width' : ''}`}>
          <div id="cv-preview" className="cv-preview">
            {renderTemplate()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
