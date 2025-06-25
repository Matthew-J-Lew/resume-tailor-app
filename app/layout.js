import './globals.css'
import Link from 'next/link'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata = {
  title: 'Resume Tailor App',
  description: 'AI-powered resume and LaTeX tailoring tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-gray-900 text-white min-h-screen font-sans">
        <nav className="w-full bg-gray-800 text-white px-8 py-4 flex space-x-6 shadow-sm">
          <Link href="/" className="hover:text-blue-400 font-medium">Home</Link>
          <Link href="/resume-dashboard" className="hover:text-blue-400 font-medium">Dashboard</Link>
          <Link href="/latex-tailor" className="hover:text-blue-400 font-medium">Resume Generator</Link>
          <Link href="/cover-letter-tailor" className="hover:text-blue-400 font-medium">Cover Letter Generator</Link>
          <Link href="/upload-resume" className="hover:text-blue-400 font-medium">Resume Parser</Link>
        </nav>

        <main className="px-8 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
