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
  const [selectedTemplate, setSelectedTemplate] = useState('template3');
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
      summary: 'Data Engineer, Cloud Architect, and DevOps Specialist with over seven years of professional experience building Azure solutions, progressing from mid-level to senior-level roles. Microsoft Certified Azure Solutions Architect Expert, passionate about creating data products that solve real business challenges and serve people. Grounded in a strong IT foundation with formal education and hands-on exposure since 2010.\n\nSpecialized in building end-to-end data platforms—ETL/ELT pipelines with Azure Data Factory and Functions, data warehouses using Snowflake and DataVault methodology, transformation models with dbt, and seamless data migrations from legacy systems to cloud data lakes. Proven expertise in designing scalable Azure infrastructure with Bicep, implementing secure networking with managed identities, and architecting multi-tier applications across various enterprise environments.',
      education: [
        {
          degree: 'Master of Science in Information Technology',
          institution: 'University of Turku',
          startMonth: 'August',
          startYear: '2015',
          endMonth: 'June',
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
          title: 'Azure Data Engineer',
          company: 'Prosimo Oy',
          startMonth: 'March',
          startYear: '2022',
          endMonth: 'May',
          endYear: '2022',
          technologies: 'Azure, Software Development, Testing, Medical Device Software',
          projects: [
            {
              name: 'Software Development and Testing',
              description: 'Contributed to software development and testing for a Software as a Medical Device (SaMD) product. Performed integration testing and quality assurance for client-facing applications. Collaborated on Azure-based solutions ensuring compliance with medical device standards and regulatory requirements.'
            }
          ]
        },
        {
          title: 'Software Developer & Data Scientist',
          company: 'Aivan Innovations Oy',
          startMonth: 'June',
          startYear: '2020',
          endMonth: 'September',
          endYear: '2021',
          technologies: 'TensorFlow, Keras, Computer Vision, NLP, Azure Databricks, Tesseract OCR, Neural Networks, Python',
          projects: [
            {
              name: 'AI/ML Solutions for Document Intelligence',
              startMonth: 'June',
              startYear: '2020',
              endMonth: 'September',
              endYear: '2021',
              description: 'Developed advanced AI/ML solutions for computer vision and natural language processing in document intelligence domain. Designed custom encoder models and neural network architectures from scratch for segment detection in complex documents. Implemented NLP pipelines including Named Entity Recognition (NER), Part-of-Speech tagging, and topic modeling. Built handwritten document recognition system using Tesseract OCR with custom preprocessing.'
            }
          ]
        },
        {
          title: 'Business Developer & Full Stack Developer',
          company: 'Welete',
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
        },
        {
          title: 'Data Analyst Intern',
          company: 'University of Turku',
          startMonth: 'May',
          startYear: '2017',
          endMonth: 'July',
          endYear: '2017',
          technologies: 'Python, Digital Signal Processing, Data Visualization, Hardware Communication Protocols',
          projects: [
            {
              name: 'Real-time Signal Processing and Analysis',
              startMonth: 'May',
              startYear: '2017',
              endMonth: 'July',
              endYear: '2017',
              description: 'Developed Python applications for hardware communication protocols enabling real-time data acquisition. Implemented digital signal processing algorithms for feature extraction from sensor data. Created data visualization dashboards for real-time signal monitoring and analysis. Optimized communication protocols for high-frequency data streaming.'
            }
          ]
        },
        {
          title: 'Junior Data Engineer',
          company: 'Bigdatapump Oy',
          startMonth: 'February',
          startYear: '2015',
          endMonth: 'May',
          endYear: '2015',
          technologies: 'Python, Real-time Data Processing, Web Services, Analytics',
          projects: [
            {
              name: 'Transport Container Anomaly Detection System',
              startMonth: 'February',
              startYear: '2015',
              endMonth: 'May',
              endYear: '2015',
              description: 'Contributed to MVP development project for transport container anomaly detection solution. Developed real-time data processing pipelines using Python with 10-second synchronization intervals from web servers. Implemented analytics and anomaly detection logic to identify deviations in container operations. Built automated data retrieval and processing workflows for continuous monitoring.'
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
    // Create a comprehensive DOCX document
    const children = [
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
    ];

    // Add experience entries
    (cvData.experience || []).forEach(exp => {
      const period = `${exp.startMonth || ''} ${exp.startYear || ''} - ${exp.endMonth || 'Present'} ${exp.endYear || ''}`.trim();
      
      children.push(
        new Paragraph({
          text: exp.title || '',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: `${exp.company || ''} | `, italic: true }),
            new TextRun({ text: period, italic: true }),
          ],
        })
      );

      if (exp.technologies) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: 'Technologies: ', bold: true }),
              new TextRun({ text: exp.technologies }),
            ],
          })
        );
      }

      // Add projects
      if (exp.projects && exp.projects.length > 0) {
        exp.projects.forEach(project => {
          children.push(
            new Paragraph({
              children: [
                new TextRun({ text: `• ${project.name || ''}`, bold: true }),
              ],
            })
          );

          if (project.startMonth) {
            const projectPeriod = `${project.startMonth} ${project.startYear} - ${project.endMonth} ${project.endYear}`;
            children.push(
              new Paragraph({
                children: [
                  new TextRun({ text: projectPeriod, italic: true, color: 'D97706' }),
                ],
              })
            );
          }

          if (project.description) {
            children.push(
              new Paragraph({
                text: project.description,
              })
            );
          }
        });
      }

      children.push(new Paragraph({ text: '' }));
    });

    // Add Education section
    children.push(
      new Paragraph({
        text: 'EDUCATION',
        heading: HeadingLevel.HEADING_2,
      })
    );

    (cvData.education || []).forEach(edu => {
      const period = `${edu.startMonth || ''} ${edu.startYear || ''} - ${edu.endMonth || ''} ${edu.endYear || ''}`.trim();
      
      children.push(
        new Paragraph({
          text: edu.degree || '',
          heading: HeadingLevel.HEADING_3,
        }),
        new Paragraph({
          children: [
            new TextRun({ text: `${edu.institution || ''} | `, italic: true }),
            new TextRun({ text: period, italic: true }),
          ],
        }),
        new Paragraph({ text: '' })
      );
    });

    // Add Expertise section
    if (cvData.expertise && cvData.expertise.length > 0) {
      children.push(
        new Paragraph({
          text: 'TECHNICAL EXPERTISE',
          heading: HeadingLevel.HEADING_2,
        })
      );

      cvData.expertise.forEach(item => {
        children.push(
          new Paragraph({
            children: [
              new TextRun({ text: `${item.category}: `, bold: true }),
              new TextRun({ text: item.skills || '' }),
            ],
          })
        );
      });

      children.push(new Paragraph({ text: '' }));
    }

    // Add Languages section
    if (cvData.languages && cvData.languages.length > 0) {
      children.push(
        new Paragraph({
          text: 'LANGUAGES',
          heading: HeadingLevel.HEADING_2,
        })
      );

      const languageList = cvData.languages.map(lang => {
        const proficiencyLevels = ['Basic', 'Conversational', 'Professional', 'Fluent', 'Native'];
        const level = proficiencyLevels[lang.proficiency - 1] || '';
        return `${lang.language}: ${level}`;
      }).join(' | ');

      children.push(
        new Paragraph({
          text: languageList,
        })
      );
    }

    const doc = new Document({
      sections: [{
        properties: {},
        children: children,
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
