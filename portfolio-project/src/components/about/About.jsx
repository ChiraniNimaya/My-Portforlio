import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src='' alt='profile image'/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p></p>
                    <p></p>
                </div>
                <div className='about-skills'>
                    <div className='about-skill'><p>C++</p> <hr style={{width:"80%"}}/></div>
                    <div className='about-skill'><p>Java+</p> <hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>C#</p> <hr style={{width:"50%"}}/></div>
                    <div className='about-skill'><p>React</p> <hr style={{width:"40%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About