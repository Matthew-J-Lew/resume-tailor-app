# 📄 Resume Tailor


An AI-powered resume and LaTeX tailoring web application!

Upload your resume (PDF or LaTeX), parse it into structured data (skills, experience, education, projects), store it locally with SQLite, and get tailored suggestions and edits for the job description using the OpenAI API.

The goal is for the application to store all your skills and experiences as a 'Master List' and using AI it can create the best version of your resume for a given job posting!

---

## ✨ Features

- 📤 Upload and parse resumes for your 'Master List' (PDF or LaTeX)
- 🧠 Tailor LaTeX resumes or cover letters to job descriptions using OpenAI
- 📊 Manage resume data via a dashboard (skills, experience, education, projects)
- ⚙️ Store resume data locally using SQLite and Prisma
- 💡 Intelligent suggestions based on job postings

---
## 📸 Screenshots

### 🏠 Landing Page  
![Landing Page](./public/screenshots/homepage.png)

### 🖥 Resume Upload
Upload your resume PDF or LaTeX code and your skills will be inserted into your database!
![Resume_Upload](./public/screenshots/upload_resume.png)

### 📊 Resume Dashboard  
Manage your master list of skills, education, experience, and projects.  
![Dashboard](./public/screenshots/dashboard.png)

### 🧠 LaTeX Resume Tailoring  
Get AI-generated suggestions based on job descriptions.  
![Resume Tailor](./public/screenshots/resume_tailor.png)

### ✍️ Cover Letter Tailoring  
Tailor your existing cover letter to match job requirements.  
![Cover Letter Tailor](./public/screenshots/cover_letter_tailor.png)

### 📄 Sample Output: Resume & Cover Letter

<div align="center">
  <img src="./public/screenshots/sample_resume.png" alt="Sample Resume" width="400" style="margin-right: 10px;" />
  <img src="./public/screenshots/sample_cover_letter.png" alt="Sample Cover Letter" width="400" />
</div>



---
## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) — App framework
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Prisma](https://www.prisma.io/) + SQLite — Database
- [OpenAI API](https://platform.openai.com/docs) — AI tailoring

---
## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Matthew-J-Lew/resume-tailor-app
cd resume-tailor
```

### 2. Install Dependencies
**Note:** You’ll need **[Node.js](https://nodejs.org/)** installed (version 18 or higher recommended).
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root and add your OpenAI API key and the following file path for the DATABASE_URL:
```env
OPENAI_API_KEY=your_openai_api_key_here
DATABASE_URL="file:./prisma/dev.db"
```
You can get your OpenAI API key by creating an account at **[platform.openai.com](https://platform.openai.com/account/api-keys)** and generating a key under your account settings.

### 4. Set Up the Database
Initialize SQLite and Prisma:
```bash
npx prisma generate
npx prisma migrate dev --name init
```
This creates your local SQLite database (.prisma/dev.db) and applies the schema/
If you want to inspect the DB:
```bash
npx prisma studio
```
### 5. Run the App!
```bash
npm run dev
```
Visit http://localhost:3000 and you'll be brought to the landing page!
---
## 💡 Planned Features

- User can store and save special tailoring instructions in database
- Better cover letter tailoring (better writing style preservation/formatting)
- Exporting LaTeX resumes and cover letters to PDF
- Multiple saved resume versions
- Supabase/Postgres backend integration and Vercel deployment

---
## 🪪 License

MIT License © [Matthew Lew](https://github.com/Matthew-J-Lew)

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Matthew-J-Lew)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matt-j-lew/)






