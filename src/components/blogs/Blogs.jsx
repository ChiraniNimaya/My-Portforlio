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

  // Get only featured blogs for the main page (limit to 3)
  const featuredBlogs = blogsData.filter(blog => blog.showOnMainPage).slice(0, 3)

  return (
    <section 
      id="blogs" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`group relative glass-effect rounded-2xl overflow-hidden transition-all duration-1000 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/blogs/${blog.slug}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-transparent" />
                
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                  {blog.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-dark-300 mb-4 line-clamp-3 text-sm">
                  {blog.excerpt}
                </p>

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

                <div className="flex items-center gap-2 text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Read More Blogs Button */}
        {blogsData.length > 3 && (
          <div className={`text-center mt-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <button
              onClick={() => navigate('/all-blogs')}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-105"
            >
              <span>Read More Blogs</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blogs