import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Linkedin, Facebook, Instagram } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "chirani.rajapaksha.97@gmail.com",
      href: "mailto:chirani.rajapaksha.97@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+94-770716994",
      href: "tel:+94770716994"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Galle, Sri Lanka",
      href: "https://www.google.com/maps/place/Galle/@6.0558853,80.1295951,12z/data=!3m1!4b1!4m6!3m5!1s0x3ae173bb6932fce3:0x4a35b903f9c64c03!8m2!3d6.0328948!4d80.2167912!16zL20vMDI3M21r?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/chirani-rajapaksha/',
      color: 'hover:bg-[#0077B5]'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-5 h-5" />,
      url: 'https://web.facebook.com/chirani.rajapaksha.16',
      color: 'hover:bg-[#1877F2]'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      url: 'https://www.instagram.com/chiranirajapaksha/',
      color: 'hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]'
    }
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const { name, email, message } = formData

    // Basic validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields' })
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email' })
      setIsSubmitting(false)
      return
    }

    const form = event.target
    const formDataToSend = new FormData(form)
    formDataToSend.append("access_key", "4201710e-5d73-4e24-b8b2-548f15357769")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again later.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      ref={ref}
      className="relative section-padding bg-gradient-to-b from-dark-900 to-dark-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-4" />
          <p className="text-dark-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Let's talk</h3>
              <p className="text-dark-300 text-lg">
                I'm currently available for new job opportunities and exciting projects.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                >
                  <div className="p-3 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-dark-400 text-sm">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links with Proper Icons */}
            <div className="pt-4">
              <p className="text-dark-400 text-sm mb-3">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-lg bg-dark-800 text-dark-300 transition-all duration-300 hover:scale-110 hover:text-white ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={onSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-200 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-200 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-200 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                />
              </div>

              {/* Status Message */}
              {submitStatus && (
                <div className={`p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/50 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/50 text-red-400'
                }`}>
                  {submitStatus.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full relative px-8 py-4 text-base font-semibold text-white overflow-hidden rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact