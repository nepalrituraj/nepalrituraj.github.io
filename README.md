# Professional CV Builder

Interactive CV Builder application built with React, featuring multiple professional templates, form-based editing, and export functionality.

🔗 **Live Site**: [https://nepalrituraj.github.io/](https://nepalrituraj.github.io/)

## 🌟 Features

- **3 Professional Templates**: 
  - Professional Modern (2-column with purple sidebar)
  - Minimalist ATS-Friendly (single-column print-ready)
  - Creative Bold (colorful gradient design)
- **Interactive Forms**: Edit personal info, summary, experience, education, expertise, and languages
- **Project Management**: Add multiple projects under each company with dates and descriptions
- **Core Expertise**: Categorized skills display
- **Language Proficiency**: Star rating system for language skills
- **Photo Upload**: Professional profile photo support
- **PDF Export**: Download CV as optimized PDF (<2MB)
- **DOC Export**: Download CV as Word document  
- **Data Persistence**: LocalStorage saves your data automatically
- **Mobile Responsive**: Works on all devices
- **Clickable Links**: LinkedIn and GitHub links are interactive

## 🚀 Quick Start

### Development

```bash
npm install
npm start
```

Visit http://localhost:3001

### Deployment to GitHub Pages

```bash
npm run deploy
```

## 🛠️ Technologies

- React 18
- html2pdf.js (PDF generation)
- docx (Word document generation)
- file-saver
- gh-pages (GitHub Pages deployment)
- CSS3 with responsive design

## 🎨 Template Features

### Template 1 - Professional Modern
- Two-column layout with 380px sidebar
- Purple gradient sidebar
- White main content area
- Ideal for tech professionals

### Template 2 - Minimalist ATS-Friendly
- Single-column print-optimized layout
- Clean serif typography
- ATS-compatible formatting
- Center-aligned header with photo

### Template 3 - Creative Bold
- Colorful gradient header
- Card-based design
- Modern icons and visual elements
- Grid layout for sections

## 📦 Project Structure

```
nepalrituraj.github.io/
├── public/
│   ├── index.html
│   └── photo.jpg
├── src/
│   ├── components/
│   │   ├── FormInput/
│   │   │   ├── PersonalInfoForm.js
│   │   │   ├── SummaryForm.js
│   │   │   ├── EducationForm.js
│   │   │   ├── ExperienceForm.js
│   │   │   ├── ExpertiseForm.js
│   │   │   └── LanguagesForm.js
│   │   └── Templates/
│   │       ├── Template1.js (Professional Modern)
│   │       ├── Template2.js (Minimalist ATS)
│   │       └── Template3.js (Creative Bold)
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔄 Data Management

- **LocalStorage**: All data is automatically saved
- **Reset Button**: Clear data and reload defaults
- **Pre-filled Data**: Comes with complete CV example
- **Form Validation**: Required fields and proper formatting

## 🌐 Deployment

This project is configured for GitHub Pages deployment:
- `homepage` set to `https://nepalrituraj.github.io`
- Run `npm run deploy` to publish
- Deploys to `gh-pages` branch automatically

## 📄 License

MIT License - Feel free to fork and customize for your own use!

---

Built with React and ❤️


