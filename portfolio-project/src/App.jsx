import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import EducationAndWork from './components/education&work/EducationAndWork'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <EducationAndWork/>
      <Skills/>
      <Projects/>
      <Blogs/>
      <Contact/>
    </div>
  )
}

export default App