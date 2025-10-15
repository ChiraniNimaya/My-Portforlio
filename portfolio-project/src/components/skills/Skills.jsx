import React from 'react'
import './Skills.css'
import hero from '../../assets/hero.png'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className='skills-title'>
            <h1>Skills</h1>
            <div className='skills-sections'>
                <div className='skills-left'>
                    <img src={hero} alt='profile image'/>
                </div>
                <div className='skills-right'>
                    <div className='skills-para'>
                        <p>I am a fullstack developer from Galle, Sri Lanka with more than 2 years of experience in the Software Development industry. Currently I am reading MSc. in Advanced Software Engineering from University of Westminster and open to work.</p>
                        <p>My passion for software development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className='skills-list'>
                        <div className='skill'><p>C++</p> <hr style={{width:"80%"}}/></div>
                        <div className='skill'><p>Java</p> <hr style={{width:"50%"}}/></div>
                        <div className='skill'><p>C#</p> <hr style={{width:"50%"}}/></div>
                        <div className='skill'><p>React</p> <hr style={{width:"40%"}}/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills