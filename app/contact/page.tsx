import type { Metadata } from "next"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })

export const metadata: Metadata = {
  title: "Contact Us | LaunchPixel - Get in Touch for AI Automation Solutions",
  description: "Contact LaunchPixel for AI automation, web development, and digital transformation services. Get a free consultation and start your project today.",
  keywords: "contact LaunchPixel, AI automation consultation, web development inquiry, get quote, business automation contact, digital solutions inquiry, free consultation",
  openGraph: {
    title: "Contact Us | LaunchPixel",
    description: "Get in touch with LaunchPixel for AI automation and digital solutions",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />
      
      {/* Antigravity Background */}
      <div className="fixed inset-0 z-0">
        <Antigravity
          count={400}
          magnetRadius={13}
          ringRadius={10}
          waveSpeed={0.6}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Touch</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ready to transform your business with AI automation? Let's discuss your project and create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send us a Message</h2>
              <form action="https://formsubmit.co/viveksharma.network@gmail.com" method="POST" className="space-y-4 sm:space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://launchpixel.com/contact?success=true" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
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
                    className="w-full px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
                >
                  <Send size={18} className="sm:w-5 sm:h-5" />
                  Send Message
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
                      <p className="text-sm sm:text-base text-gray-400">Available on request</p>
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
          <div className="mt-12 sm:mt-16 md:mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  question: "What services do you offer?",
                  answer: "We specialize in AI automation, web development, mobile apps, brand strategy, UI/UX design, and SEO optimization."
                },
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex AI applications may take 2-3 months."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Yes! We work with clients worldwide and offer remote services with flexible communication schedules."
                },
                {
                  question: "What is your pricing structure?",
                  answer: "We offer custom quotes based on project requirements. Contact us for a free consultation and detailed proposal."
                }
              ].map((faq, index) => (
                <div key={index} className="p-4 sm:p-6 bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

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
