import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={hero} alt='hero'/>
        <h1><span>I am Chirani Rajapaksha,</span> Fullstack developer based in Sri Lanka.</h1>
        <p>I am a fullstack developer from Galle, Sri Lanka with more than 2 years of experience in the Software Development industry.</p>
    <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>My resume</div>
    </div>
    </div>
  )
}

export default Hero