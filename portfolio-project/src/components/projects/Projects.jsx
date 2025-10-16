import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.css'
import Projects_Data from '../../assets/projects_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  const navigate = useNavigate();                      

  const handleProjectClick = (index) => {               
    navigate(`/projects/${index}`);
  };

  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1>
        </div>
        <div className="projects-container">
          {Projects_Data.map((project,index)=>{
            return <div key={index} className='projects-format' onClick={() => handleProjectClick(index)}>
              <h3>{project.p_no}</h3>
              <h2>{project.p_name}</h2>
              <p>{project.p_desc}</p>
              <div className='projects-readmore'>
                <p>Read More</p>
                  <img src={arrow_icon} alt='arrow_icon'/>
              </div>

            </div>
          })}
        </div>
    </div>
  )
}

export default Projects