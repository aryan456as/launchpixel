"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, MessageCircle, Plus, Minus } from "lucide-react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"
import { motion, AnimatePresence } from "framer-motion"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })

// FAQ Data
const faqData = [
  {
    question: "What services do you offer?",
    answer: "We specialize in AI automation, web development, mobile apps, brand strategy, UI/UX design, and SEO optimization. Our team delivers end-to-end solutions tailored to your business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex AI applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes! We work with clients worldwide and offer remote services with flexible communication schedules. We use tools like Slack, Zoom, and project management platforms to ensure smooth collaboration across time zones."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer custom quotes based on project requirements. Contact us for a free consultation and detailed proposal. We're transparent about costs and provide milestone-based billing for larger projects."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely! We offer maintenance packages, technical support, and continuous improvement services. Your success is our priority, and we're here to help you grow long after launch."
  },
  {
    question: "What technologies do you use?",
    answer: "We use cutting-edge technologies including React, Next.js, Node.js, Python, TensorFlow, and various AI/ML frameworks. Our tech stack is always evolving to deliver the best solutions."
  }
]

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30 backdrop-blur-lg hover:border-indigo-500/30 transition-colors">
      <button
        onClick={onClick}
        className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left group"
      >
        <span className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
          {question}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-500 rotate-0' : 'bg-gray-800 rotate-0'}`}>
          {isOpen ? (
            <Minus size={18} className="text-white" />
          ) : (
            <Plus size={18} className="text-gray-400" />
          )}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="pt-0 border-t border-gray-800">
                <p className="pt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// FAQ Section Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="mt-12 sm:mt-16 md:mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  )
}


export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      {/* Antigravity Background */}
      <div className="fixed inset-0 z-0">
        <Antigravity
          count={300}
          magnetRadius={15}
          ringRadius={12}
          waveSpeed={0.5}
          waveAmplitude={1.2}
          particleSize={1.2}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="box"
          fieldStrength={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950 pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-flow">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ready to transform your business with AI automation? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h2>

              {isSuccess && (
                <div className="mb-6 p-4 bg-green-900/50 border border-green-700 rounded-lg text-green-300">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="sm:w-5 sm:h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Information</h2>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Email</h3>
                      <a href="mailto:viveksharma.network@gmail.com" className="text-sm sm:text-base text-gray-400 hover:text-indigo-400 transition-colors break-all">
                        viveksharma.network@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Phone</h3>
                      <p className="text-sm sm:text-base text-gray-400">+91 80851 49514</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/918085149514"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#25D366]/10 border border-[#25D366]/20 rounded-full text-[#25D366] hover:bg-[#25D366]/20 transition-all text-sm font-medium"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-1">Location</h3>
                      <p className="text-sm sm:text-base text-gray-400">India (Remote Services Worldwide)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-400 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">
                  * Emergency support available 24/7 for existing clients
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-lg rounded-xl border border-indigo-800/50 p-6 sm:p-8">
                <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400 mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quick Response</h3>
                <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  For urgent matters, please mention "URGENT" in your subject line.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQSection />

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Start Your Project?</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join 50+ satisfied clients who have transformed their businesses with LaunchPixel's innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 border border-gray-700 text-sm sm:text-base"
              >
                View Our Work
              </Link>
              <Link
                href="/services"
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-sm sm:text-base"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact LaunchPixel",
            "description": "Get in touch with LaunchPixel for AI automation and digital solutions",
            "url": "https://launchpixel.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "LaunchPixel",
              "email": "viveksharma.network@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "viveksharma.network@gmail.com",
                "availableLanguage": ["English"]
              }
            }
          })
        }}
      />

      <Footer />
    </div>
  )
}
