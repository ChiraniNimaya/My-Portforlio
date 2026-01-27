import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogsData } from '../../data/blogsData'

const Blogs = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  return (
    <section 
      id="blogs" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Latest <span className="gradient-text">Blogs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Thoughts, stories, and insights from my journey
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative glass-effect rounded-2xl overflow-hidden transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${blog.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/blogs/${blog.slug}`)}
            >
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {blog.category}
                </div>

                {/* Featured Badge */}
                {blog.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-dark-900/90 backdrop-blur-sm border border-primary-500 text-primary-400 text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
              </div>

              {/* Blog Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-dark-300 mb-4 line-clamp-3 text-sm">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 mb-4 text-dark-400 text-xs">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blogs