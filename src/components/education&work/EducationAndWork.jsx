import React from 'react'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Briefcase, ExternalLink, Calendar } from 'lucide-react'

const EducationAndWork = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const education = [
    {
      year: '2025 (Reading)',
      institution: 'University of Westminster',
      url: 'https://www.westminster.ac.uk/',
      degree: 'M.Sc. in Advanced Software Development',
      details: []
    },
    {
      year: '2017 - 2022',
      institution: 'University of Moratuwa',
      url: 'https://uom.lk/',
      degree: 'B.Sc.(Hons) in Electrical Engineering',
      details: ['Second Upper Division Class']
    },
    {
      year: '2003 - 2016',
      institution: 'Sanghamiththa Balika Vidyalaya',
      url: 'https://www.sanghamittavidyalaya-lk.toursurv.com/',
      degree: 'Advanced Level in Physical Science Stream',
      details: ['Z-score - 1.9716']
    }
  ]

  const work = [
    {
      year: '2023 - 2025',
      role: 'Software Engineer',
      company: 'Millenium IT Software (Pvt) Ltd in LSEG',
      description: ''
    },
    {
      year: 'September 2022 - December 2022',
      role: 'Fullstack Developer - Intern',
      company: 'Kaymu Lanka (Pvt) Ltd',
      description: ''
    },
    {
      year: '2021',
      role: 'Electrical Engineer - Intern',
      company: 'Abans MEP Division, CEB Colombo City Underground Projects, CEB Upper Kotmale Hydro Power Plant, CEB Kiribathkumbura Grid Station, LECO Moratuwa',
      description: ''
    }
  ]

  return (
    <section 
      id="educationAndWork" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Education & <span className="gradient-text">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            My academic background and professional journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className={`transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="glass-effect rounded-2xl p-8 h-full border-2 border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((item, index) => (
                  <div 
                    key={index}
                    className="relative pl-6 pb-6 border-l-2 border-primary-500/30 last:pb-0 group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 group-hover:scale-125 transition-transform" />
                    
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-semibold rounded-full mb-2">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {item.year}
                    </div>

                    <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-xl font-bold text-white hover:text-primary-400 transition-colors mb-2"
                    >
                      {item.institution}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>

                    <p className="text-dark-200 font-medium mb-1">{item.degree}</p>

                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-dark-400 text-sm">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="glass-effect rounded-2xl p-8 h-full border-2 border-primary-500/20 hover:border-primary-500/40 transition-all">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary-500/10 rounded-lg">
                  <Briefcase className="w-8 h-8 text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-white">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {work.map((item, index) => (
                  <div 
                    key={index}
                    className="relative pl-6 pb-6 border-l-2 border-primary-500/30 last:pb-0 group"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 group-hover:scale-125 transition-transform" />
                    
                    <div className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 text-sm font-semibold rounded-full mb-2">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {item.year}
                    </div>

                    <h4 className="text-xl font-bold text-white mb-2">{item.role}</h4>

                    <p className="text-dark-200 font-medium mb-1">{item.company}</p>

                    {item.description && (
                      <p className="text-dark-400 text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationAndWork