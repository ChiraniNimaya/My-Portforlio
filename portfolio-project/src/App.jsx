import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import EducationAndWork from './components/education&work/EducationAndWork'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ProjectDetail from './components/projects/ProjectDetail';

const App = () => {
  return (
    <Router>  
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar/>
              <Hero/>
              <About/>
              <EducationAndWork/>
              <Skills/>
              <Projects/>
              <Blogs/>
              <Contact/>
              <Footer />
            </>
          } 
        />
        <Route path="/projects/:projectName" element={<ProjectDetail />} /> 
      </Routes>
    </Router>
  )
}

export default App