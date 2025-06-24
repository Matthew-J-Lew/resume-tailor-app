'use client'

import Link from 'next/link'

// Home page with welcome message and navigation buttons to main app features
export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 -mt-16">
      <div className="text-center max-w-2xl">
        {/* Main heading */}
        <h1 className="text-4xl font-bold mb-4 text-blue-400">
          Welcome to Your Personalized Resume Tailor!
        </h1>

        {/* Brief description */}
        <p className="text-lg text-gray-300 mb-8">
          Upload your resume, store your skills, and get clean finished LaTeX resumes!
        </p>

        {/* Navigation buttons to core app sections */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/resume-dashboard">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded shadow whitespace-nowrap">
              Dashboard
            </button>
          </Link>
          <Link href="/latex-tailor">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow whitespace-nowrap">
              Resume Generator
            </button>
          </Link>
          <Link href="/cover-letter-tailor">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow whitespace-nowrap">
              Cover Letter Generator
            </button>
          </Link>
          <Link href="/upload-resume">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow whitespace-nowrap">
              Resume Parser
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
