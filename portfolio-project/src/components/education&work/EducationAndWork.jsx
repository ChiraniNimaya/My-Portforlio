import React from 'react'
import './EducationAndWork.css'

const EducationAndWork = () => {
  return (
    <div id='educationAndWork' className='educationAndWork'>
        <div className='educationAndWork-title'>
            <h1>Education and Work</h1>
        </div>
        <div className='educationAndWork-sections'>
            
            {/* Education Section */}
        <div className='education'>
          <h2>🎓 Education</h2>
          <div className='education-item'>
            <p className='year'>2025(Reading)</p>
            <h3>
                <a href="https://www.westminster.ac.uk/" target="_blank" rel="noopener noreferrer" className="plain-link">
                University of Westminster
              </a>
            </h3>
            <p>M.Sc. in Advanced Software Development</p>
          </div>
          <div className='education-item'>
            <p className='year'>2017 - 2022</p>
            <h3>
                <a href="https://uom.lk/" ttarget="_blank" rel="noopener noreferrer" className="plain-link">
                University of Moratuwa
              </a>
            </h3>
            <p>B.Sc.(Hons) in Electrical Engineering with Second Upper Division Class</p>
          </div>
          <div className='education-item'>
            <p className='year'>2003 - 2016</p>
            <h3>
                <a href="https://www.sanghamittavidyalaya-lk.toursurv.com/" target="_blank" rel="noopener noreferrer" className="plain-link">
                Sanghamiththa Balika Vidyalaya
                </a>
            </h3>
            <p>Advanced Level in Physical Science Stream</p>
            <p>Z-score - 1.9716</p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className='work'>
          <h2>💼 Work Experience</h2>
          <div className='work-item'>
            <p className='year'>2023 - 2025</p>
            <h3>Software Engineer</h3>
            <p>Millenium IT Software (Pvt) Ltd in LSEG</p>
          </div>
          <div className='work-item'>
            <p className='year'>September 2022 - December 2022</p>
            <h3>Fullstack Developer - Intern</h3>
            <p>Kaymu Lanka (Pvt) Ltd</p>
          </div>
          <div className='work-item'>
            <p className='year'>2021</p>
            <h3>Electrical Engineer - Intern</h3>
            <p>Abans MEP Division, CEB Colombo City Underground Projects, CEB Upper Kotmale Hydro Power Plant, CEB Kiribathkumbura Grid Station, LECO Moratuwa</p>
          </div>
        </div>
        
        </div>
    </div>
  )
}

export default EducationAndWork