import React from 'react'
import './Projects.css'
import Projects_Data from '../../assets/projects_data'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          {Projects_Data.map((project,index)=>{
            return <div key={index} className='projects-format'>
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
            </div>
          })}
        </div>
    </div>
  )
}

export default Projects