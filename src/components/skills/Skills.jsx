import React from 'react'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript/TypeScript", level: 85, color: "from-yellow-500 to-amber-500" },
        { name: "HTML/CSS", level: 95, color: "from-orange-500 to-red-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-emerald-500" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "C/C++", level: 90, color: "from-blue-600 to-indigo-600" },
        { name: "Java", level: 80, color: "from-red-500 to-orange-500" },
        { name: "C#", level: 60, color: "from-purple-500 to-pink-500" },
        { name: "Python", level: 75, color: "from-green-500 to-emerald-500" },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", level: 80, color: "from-blue-500 to-cyan-500" },
        { name: "Oracle", level: 75, color: "from-red-600 to-orange-600" },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 90, color: "from-orange-500 to-red-500" },
        { name: "AWS", level: 40, color: "from-yellow-500 to-orange-500" },
        { name: "Kafka", level: 60, color: "from-purple-500 to-indigo-500" },
        { name: "Jira", level: 80, color: "from-blue-500 to-cyan-500" },
      ]
    }
  ]

  return (
    <section 
      id="skills" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-950 to-dark-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I've worked with over the years
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`glass-effect rounded-2xl p-6 md:p-8 transition-all duration-1000 hover:shadow-xl hover:shadow-primary-500/10 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-dark-200 font-medium group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-dark-400 font-semibold group-hover:text-primary-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-dark-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                        style={{ 
                          width: inView ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills