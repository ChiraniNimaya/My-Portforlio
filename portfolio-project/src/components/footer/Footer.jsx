import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/chirani-rajapaksha/',
      icon: 'Li'
    },
    {
      name: 'Facebook',
      url: 'https://web.facebook.com/chirani.rajapaksha.16',
      icon: 'Fb'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/chiranirajapaksha/',
      icon: 'Ig'
    }
  ]

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-dark-300">
            <span>© {currentYear} Chirani Rajapaksha</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary-500 fill-current animate-pulse" /> in Sri Lanka
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-4 py-2 text-dark-300 hover:text-white transition-colors"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>

        {/* Additional Footer Text */}
        <div className="text-center mt-6 pt-6 border-t border-dark-800">
          <p className="text-dark-400 text-sm">
            Thanks for stopping by! Let's build something amazing together.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer