import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import EducationAndWork from './components/education&work/EducationAndWork'
import Projects from './components/projects/Projects'
import Blogs from './components/blogs/Blogs'

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
    </div>
  )
}

export default App