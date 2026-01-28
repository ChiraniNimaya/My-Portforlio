import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink, Check } from 'lucide-react'
import { projectsData } from '../../data/projectsData'

const ProjectDetail = () => {
  const { projectName } = useParams()
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Find the project by slug
  const project = projectsData.find(
    (p) => p.slug === projectName
  )

  // If project not found
  if (!project) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Project not found</h2>
          <p className="text-dark-300 mb-6">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const details = project.details

  return (
    <div className="min-h-screen bg-dark-950 relative">
      {/* REMOVED: Background overlays that were hiding content */}
      
      {/* Header with Back Button */}
      <div className="relative z-50 bg-dark-900 border-b border-dark-800">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Project Content - FIXED: Added z-50 to ensure content is above any background elements */}
      <div className="relative z-50 max-w-5xl mx-auto px-6 py-12">
        {/* Project Header */}
        <div className="mb-12">
          {/* Project Number */}
          <div className="text-8xl font-bold text-primary-500/20 mb-4">
            {project.p_no}
          </div>

          {/* Project Title - FIXED: Ensured text is visible */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
              {details.title}
            </span>
          </h1>

          {/* Project Description */}
          <p className="text-white text-xl leading-relaxed mb-8">
            {details.description}
          </p>

          {/* Project Links - FIXED: Always visible */}
          <div className="flex flex-wrap gap-4">
            {/* GitHub Link */}
            <a
              href={details.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
            
            {/* Demo Link - Only show if it exists */}
            {details.demo && (
              <a
                href={details.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tech Stack */}
          <div className="glass-effect rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {details.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-primary-400 font-medium hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/20 transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="glass-effect rounded-2xl p-8 border border-dark-700 md:row-span-2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {details.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                      <Check className="w-3 h-3 text-primary-400" />
                    </div>
                  </div>
                  <span className="text-white leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Stats */}
          <div className="glass-effect rounded-2xl p-8 border border-dark-700">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full" />
              Project Type
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Category</span>
                <span className="text-white font-semibold">
                  {project.id === 1 ? 'Machine Learning' : project.id === 2 ? 'Web Application' : 'Portfolio'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Status</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full">
                  Completed
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-dark-300">Year</span>
                <span className="text-white font-semibold">2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail