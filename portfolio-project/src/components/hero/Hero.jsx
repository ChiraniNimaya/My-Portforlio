import React, { useState, useEffect } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Download, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import hero from '../../assets/hero.jpg'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [typedText, setTypedText] = useState('')
  const fullText = "Chirani Rajapaksha"
  
  useEffect(() => {
    if (inView) {
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index))
          index++
        } else {
          clearInterval(timer)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [inView])

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/uc?export=download&id=1f4MNoNqlfrORVP-a0ghV4o-_cz-7Rkvq'
    link.download = 'Chirani_Rajapaksha_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section 
      id="home" 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 pb-32 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className={`relative z-10 w-full max-w-5xl mx-auto text-center transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="relative inline-block mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
          <img 
            src={hero} 
            alt="Chirani Rajapaksha" 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-dark-800 shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <p className="text-lg md:text-xl text-dark-300 font-medium mb-4 animate-fade-in">
          Hello, I am
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
          <span className="gradient-text">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-dark-200 max-w-3xl mx-auto leading-relaxed mb-10 animate-slide-up">
          A passionate <span className="text-primary-400 font-semibold">Fullstack Developer</span> from Galle, Sri Lanka with{' '}
          <span className="text-primary-400 font-semibold">2+ years</span> of experience crafting exceptional digital experiences
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <AnchorLink 
            href="#contact" 
            offset={80}
            className="group relative px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600" />
            <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 flex items-center gap-2">
              Connect with me
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </AnchorLink>

          <button 
            onClick={handleResumeDownload}
            className="group px-8 py-4 text-base font-semibold text-dark-50 border-2 border-primary-500 rounded-full transition-all duration-300 hover:bg-primary-500/10 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/30"
          >
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
              My Resume
            </span>
          </button>
        </div>

        <div className="flex flex-col items-center gap-2 mt-8">
          <div className="w-6 h-10 rounded-full border-2 border-primary-500 flex items-start justify-center p-2 animate-bounce">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
          </div>
          <p className="text-primary-400 text-sm font-medium animate-pulse">
            Swipe Down
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero