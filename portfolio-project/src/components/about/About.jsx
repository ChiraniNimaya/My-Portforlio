import React from 'react'
import './About.css'
import hero from '../../assets/hero.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About me</h1>
        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={hero} alt='profile image'/>
            </div>
            <div className='about-right'>
                <div className='about-para'>
                    <p>I am a fullstack developer from Galle, Sri Lanka with more than 2 years of experience in the Software Development industry. Currently I am reading MSc. in Advanced Software Engineering from University of Westminster and open to work.</p>
                    <p>My passion for software development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About