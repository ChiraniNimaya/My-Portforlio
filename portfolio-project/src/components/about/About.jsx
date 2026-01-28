import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, Heart, Award } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "2+ Years",
      description: "Experience"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      label: "MSc Student",
      description: "Advanced SE"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      label: "Passionate",
      description: "Developer"
    },
    {
      icon: <Award className="w-6 h-6" />,
      label: "Open to",
      description: "Work"
    }
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-4 text-dark-200 text-lg leading-relaxed">
              <p>
                I am a <span className="text-primary-400 font-semibold">fullstack developer</span> from Galle, Sri Lanka with more than{' '}
                <span className="text-primary-400 font-semibold">2 years of experience</span> in the Software Development industry.
              </p>
              <p>
                Currently pursuing <span className="text-primary-400 font-semibold">MSc. in Advanced Software Engineering</span> from{' '}
                <span className="text-primary-400 font-semibold">University of Westminster</span> and actively seeking new opportunities.
              </p>
              <p>
                My passion for software development is not only reflected in my extensive experience but also in the{' '}
                <span className="text-primary-400 font-semibold">enthusiasm and dedication</span> I bring to each project.
              </p>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div className="text-white font-semibold text-lg">{item.label}</div>
                  <div className="text-dark-400 text-sm">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
