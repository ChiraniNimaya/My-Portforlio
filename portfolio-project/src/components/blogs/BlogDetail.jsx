import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { blogsData } from '../../data/blogsData'

const BlogDetail = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  // Find the blog by slug
  const blog = blogsData.find((b) => b.slug === slug)

  // If blog not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-dark-950 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Blog not found</h2>
          <p className="text-dark-300 mb-6">The blog post you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header with Back Button */}
      <div className="bg-dark-900 border-b border-dark-800">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center gap-2 text-dark-300 hover:text-primary-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      {/* Blog Header */}
      <div className="relative">
        {/* Hero Image */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/80 to-dark-950/20" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className="inline-block px-4 py-1.5 bg-primary-500 text-white text-sm font-semibold rounded-full mb-4">
              {blog.category}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-dark-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert prose-lg max-w-none">
          {blog.content.map((paragraph, index) => (
            <p key={index} className="text-dark-200 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-dark-800" />

        {/* Back Button at Bottom */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/50 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
        </div>
      </article>
    </div>
  )
}

export default BlogDetail