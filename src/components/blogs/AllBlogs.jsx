import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogsData } from '../../data/blogsData'

const AllBlogs = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get unique categories
  const categories = ['All', ...new Set(blogsData.map(blog => blog.category))]

  // Filter blogs by category
  const filteredBlogs = selectedCategory === 'All' 
    ? blogsData 
    : blogsData.filter(blog => blog.category === selectedCategory)

  const handleBackToHome = () => {
    navigate('/')
    setTimeout(() => window.scrollTo(0, 0), 0)
  }

  const handleBackToBlogs = () => {
    navigate('/')
    setTimeout(() => {
      const blogsSection = document.getElementById('blogs')
      if (blogsSection) {
        blogsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
    }

  return (
    <div className="min-h-screen bg-dark-950 relative">
      {/* Header with Back Button */}
      <div className="relative z-50 bg-dark-900 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <button
            onClick={handleBackToHome}
            className="group flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Page Title */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display mb-4">
            All <span className="gradient-text">Blogs</span>
          </h1>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-base md:text-lg max-w-2xl mx-auto px-4">
            Explore all my thoughts, stories, and insights
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/50'
                  : 'bg-dark-800 text-dark-300 hover:text-white hover:bg-dark-700 border border-dark-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group relative glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary-500/20 cursor-pointer border-2 border-dark-700 hover:border-primary-500/50"
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

                {blog.showOnMainPage && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    Featured
                  </div>
                )}
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
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-600/0 group-hover:from-primary-500/5 group-hover:via-primary-500/5 group-hover:to-primary-600/5 rounded-2xl transition-all pointer-events-none" />
            </div>
          ))}
        </div>

        {/* No blogs message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-dark-300 text-base md:text-lg">No blogs found in this category.</p>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={handleBackToBlogs}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-105 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  )
}

export default AllBlogs