import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import EducationAndWork from './components/education&work/EducationAndWork'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ProjectDetail from './components/projects/ProjectDetail'
import BlogDetail from './components/blogs/BlogDetail'

// ScrollRestoration component to handle scroll position
const ScrollRestoration = () => {
  const location = useLocation()

  useEffect(() => {
    // Only scroll to top for detail pages (not the home page)
    if (location.pathname.startsWith('/projects/') || location.pathname.startsWith('/blogs/')) {
      window.scrollTo(0, 0)
    }
    // For home page ('/'), let browser restore previous scroll position naturally
  }, [location.pathname])

  return null
}

const App = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <Router>
      <ScrollRestoration />
      <div className="min-h-screen bg-dark-950 text-dark-50 overflow-x-hidden">
        <Routes>
          {/* Home page with background effects */}
          <Route 
            path="/" 
            element={
              <>
                {/* Background gradient overlay - ONLY ON HOME PAGE */}
                <div className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 pointer-events-none -z-10" />
                
                {/* Animated background particles - ONLY ON HOME PAGE */}
                <div className="fixed inset-0 opacity-20 pointer-events-none -z-10">
                  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float" />
                  <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
                </div>
                
                <Navbar />
                <main className="relative z-10">
                  <Hero />
                  <About />
                  <EducationAndWork />
                  <Skills />
                  <Projects />
                  <Blogs />
                  <Contact />
                </main>
                <Footer />
              </>
            } 
          />
          {/* Detail pages WITHOUT background overlays */}
          <Route path="/projects/:projectName" element={<ProjectDetail />} /> 
          <Route path="/blogs/:slug" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App