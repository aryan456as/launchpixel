"use client"
import { useEffect, useState } from "react"
import {
  Code2,
  Smartphone,
  Brain,
  Twitter,
  Linkedin,
  Github,
  DiscIcon as Discord,
  ChevronRight,
  MessageSquare,
  Menu,
  X,
} from "lucide-react"
import { motion } from 'framer-motion'
import Image from "next/image"

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  const NavLink = ({ section, label }: { section: string; label: string }) => (
    <button
      onClick={() => scrollToSection(section)}
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
        activeSection === section ? "bg-indigo-500/10 text-indigo-400" : "text-gray-400 hover:text-indigo-400"
      }`}
    >
      {label}
    </button>
  )

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-2000"></div>

        {/* Pulsating Grid Beam Effect */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-beam"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              LaunchPixel
            </h1>
            <div className="hidden lg:flex items-center gap-2 justify-end">
              <NavLink section="home" label="Home" />
              <NavLink section="services" label="Services" />
              <NavLink section="portfolio" label="Portfolio" />
              <NavLink section="testimonials" label="Testimonials" />
              <NavLink section="blog" label="Blog" />
              <button
                onClick={() => scrollToSection("contact")}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-400 hover:text-white z-[101] relative"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
    <motion.div
    className="fixed top-[50px] md:top-[60px] left-0 w-full h-[calc(100vh-50px)] md:h-[calc(100vh-60px)] bg-gray-50 z-40 flex items-center justify-center overflow-y-auto shadow-lg"
    initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >            <div className="flex flex-col items-center w-full justify-center min-h-screen px-6 bg-gray-950  blur-50 backdrop-blur-lg">
                <nav className="container mx-auto flex flex-col items-center space-y-6 transform -translate-y-12 backdrop-blur-lg">
                {["home", "services", "portfolio", "testimonials", "blog"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-2xl font-semibold ${
                      activeSection === section ? "text-indigo-400" : "text-gray-400 hover:text-indigo-400"
                    } transition-colors duration-300`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-xl font-semibold"
                >
                  Contact Us
                </button>
              </nav>
            </div>
            </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"} text-center md:text-left`}
            >
              <div className="inline-block">
                <div className="flex items-center gap-2 text-indigo-400 bg-indigo-950/50 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-indigo-800/50">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                  </span>
                  Innovating the Future of Software
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Innovating{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Software
                </span>{" "}
                Solutions
              </h1>
              <p className="text-xl text-gray-300">
                Transform Your Ideas Into Digital Reality. We help businesses transform their ideas into powerful
                digital solutions through innovative software development and strategic consulting.
              </p>
              <div className="flex gap-4 items-center justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 flex items-center gap-2"
                >
                  Get Started
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                  alt="Hero illustration"
                  width={800}
                  height={450}
                  className="rounded-2xl shadow-2xl relative z-10 border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-800 relative group hover:border-indigo-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  50+
                </div>
                <div className="text-gray-400 mt-2">Happy Clients</div>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-800 relative group hover:border-indigo-500/50 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  100+
                </div>
                <div className="text-gray-400 mt-2">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-indigo-950 flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
                <p className="text-gray-400">
                  Custom web applications built with modern technologies and best practices.
                </p>
              </div>
            </div>
            <div className="p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-indigo-950 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Mobile Apps</h3>
                <p className="text-gray-400">Native and cross-platform mobile applications for iOS and Android.</p>
              </div>
            </div>
            <div className="p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-indigo-950 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">AI Apps</h3>
                <p className="text-gray-400">
                  Intelligent applications powered by cutting-edge AI and machine learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="AdvDiary"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold text-white mb-2">AdvDiary</h3>
                <p className="text-gray-300 text-sm">Mobile App</p>
                <p className="text-gray-400 mt-2">Comprehensive legal case management and tracking system.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Livercure"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold text-white mb-2">Livercure.org</h3>
                <p className="text-gray-300 text-sm">Web App</p>
                <p className="text-gray-400 mt-2">Healthcare platform for liver disease awareness and treatment.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                alt="EaseLearnAI"
                width={800}
                height={600}
                className="w-full h-64 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-xl font-semibold text-white mb-2">EaseLearnai.in</h3>
                <p className="text-gray-300 text-sm">AI App</p>
                <p className="text-gray-400 mt-2">AI-powered personalized learning platform.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">What Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aryan",
                role: "CEO, TechCorp",
                text: "Working with LaunchPixel has been an incredible experience. They delivered our project on time and exceeded our expectations.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Vivek",
                role: "CTO, StartupX",
                text: "The team's technical expertise and attention to detail made our complex project a success.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
              },
              {
                name: "Rahul",
                role: "Founder, InnovateCo",
                text: "Outstanding service and support. They truly understand modern software development.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-colors relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-md opacity-50"></div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover relative z-10 border-2 border-indigo-500/50"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-indigo-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-400">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">Let's Talk</h2>
              <p className="text-gray-400 mb-8">Ready to start your next project? Get in touch with us today.</p>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-full bg-gray-900/50 backdrop-blur-lg border border-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-full bg-gray-900/50 backdrop-blur-lg border border-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-full bg-gray-900/50 backdrop-blur-lg border border-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button className="group px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 flex items-center gap-2">
                  Send Message
                  <MessageSquare size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            <div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                  alt="Contact illustration"
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl relative z-10 border border-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-gray-950/80 backdrop-blur-lg text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                LaunchPixel
              </h3>
              <p className="text-gray-400">Transforming ideas into powerful digital solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">Web Development</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">Mobile Apps</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">AI Apps</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">Blog</li>
                <li className="hover:text-indigo-400 transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex gap-4">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer" />
                <Github className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer" />
                <Discord className="w-6 h-6 text-gray-400 hover:text-indigo-400 transition-colors cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 LaunchPixel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

