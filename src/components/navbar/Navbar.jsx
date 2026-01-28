import React, { useState, useRef, useEffect } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Menu, X } from 'lucide-react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'educationAndWork', label: 'Education & Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blogs', label: 'Blogs' },
  ]

  const handleNavClick = (section) => {
    setActiveSection(section)
    setIsMenuOpen(false)
  }

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/90 backdrop-blur-lg shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between h-20">

          <AnchorLink href="#home" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-22 w-auto transition-transform hover:scale-105"
            />
          </AnchorLink>

          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <AnchorLink
                  href={`#${item.id}`}
                  offset={item.id === 'home' ? 0 : 80}
                  className={`relative text-sm font-medium transition-colors duration-200 group ${
                    activeSection === item.id 
                      ? 'text-primary-400' 
                      : 'text-dark-200 hover:text-dark-50'
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span 
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transform origin-left transition-transform duration-200 ${
                      activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </AnchorLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <AnchorLink 
              href="#contact" 
              offset={80}
              className="group relative px-6 py-2.5 text-sm font-semibold text-white overflow-hidden rounded-full transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10">Connect With Me</span>
            </AnchorLink>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-dark-200 hover:text-dark-50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-80 bg-dark-900/95 backdrop-blur-xl border-l border-dark-800 shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col p-6 space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                href={`#${item.id}`}
                offset={item.id === 'home' ? 0 : 80}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-500/20 text-primary-400'
                    : 'text-dark-200 hover:bg-dark-800/50 hover:text-dark-50'
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </AnchorLink>
            </li>
          ))}
          <li className="pt-4">
            <AnchorLink
              href="#contact"
              offset={80}
              className="block w-full px-4 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect With Me
            </AnchorLink>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navbar