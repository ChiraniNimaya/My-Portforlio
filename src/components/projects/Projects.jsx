import React, { useRef, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { projectsData } from '../../data/projectsData'

const Projects = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  // Check if arrows should be visible
  const checkScroll = () => {
    if (!scrollContainerRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    
    // Show left arrow if scrolled right
    setShowLeftArrow(scrollLeft > 10)
    
    // Show right arrow if there's more content to the right
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [projectsData.length])

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return
    
    const scrollAmount = scrollContainerRef.current.clientWidth * 0.8
    const newScrollLeft = direction === 'left' 
      ? scrollContainerRef.current.scrollLeft - scrollAmount
      : scrollContainerRef.current.scrollLeft + scrollAmount
    
    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })
  }

  // Only show navigation if more than 3 projects
  const showNavigation = projectsData.length > 3

  return (
    <section 
      id="projects" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="relative">
          {/* Left Arrow */}
          {showNavigation && showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-110 flex items-center justify-center group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Projects Container */}
          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className={`overflow-x-auto scrollbar-hide ${
              showNavigation ? 'px-8' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className={`grid ${
              projectsData.length > 3 
                ? 'grid-flow-col auto-cols-[minmax(300px,1fr)] md:auto-cols-[minmax(350px,1fr)]' 
                : 'md:grid-cols-2 lg:grid-cols-3'
            } gap-8`}>
              {projectsData.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative glass-effect rounded-2xl p-8 transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer border-2 border-dark-700 hover:border-primary-500/50 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/projects/${project.slug}`)}
                >
                  <div className="text-6xl font-bold text-primary-500/20 mb-4 group-hover:text-primary-500/30 transition-colors">
                    {project.p_no}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 gradient-text group-hover:scale-105 transition-transform origin-left">
                    {project.p_name}
                  </h3>

                  <p className="text-dark-300 mb-6 line-clamp-3 leading-relaxed">
                    {project.p_desc}
                  </p>

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

                  <div className="flex items-center gap-2 text-primary-400 font-medium group-hover:gap-3 transition-all mt-auto">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:via-primary-500/5 group-hover:to-primary-600/5 rounded-2xl transition-all pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showNavigation && showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-110 flex items-center justify-center group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>
      </div>

      {/* CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Projects