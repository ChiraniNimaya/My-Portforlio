import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { projectsData } from '../../data/projectsData'

const Projects = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Some of my recent work that showcases my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`group relative glass-effect rounded-2xl p-8 transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer border-2 border-dark-700 hover:border-primary-500/50 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/projects/${project.slug}`)}
            >
              {/* Project Number */}
              <div className="text-6xl font-bold text-primary-500/20 mb-4 group-hover:text-primary-500/30 transition-colors">
                {project.p_no}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:scale-105 transition-transform origin-left">
                {project.p_name}
              </h3>

              {/* Project Description */}
              <p className="text-dark-300 mb-6 line-clamp-3 leading-relaxed">
                {project.p_desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium bg-dark-800 text-primary-400 rounded-full border border-dark-700"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-3 py-1 text-xs font-medium bg-dark-800 text-dark-400 rounded-full border border-dark-700">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-3 transition-all mt-auto">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:via-primary-500/5 group-hover:to-primary-600/5 rounded-2xl transition-all pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects