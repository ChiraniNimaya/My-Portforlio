import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={hero} alt='hero'/>
        <h1><span>I am Chirani Rajapaksha,</span> Fullstack developer based in Sri Lanka.</h1>
        <p>I am a fullstack developer from Galle, Sri Lanka with more than 2 years of experience in the Software Development industry. Currently I am reading MSc. in Advanced Software Engineering from University of Westminster and open to work.</p>
    <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero