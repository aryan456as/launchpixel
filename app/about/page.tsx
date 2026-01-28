import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Target, Lightbulb, Users, ChevronRight, Brain, Code2, BarChart2, Zap, Trophy, Layers, Headphones } from "lucide-react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"
import SpotlightCard from "../../components/SpotlightCard"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })

export const metadata: Metadata = {
  title: "About LaunchPixel | Leading AI Automation & Digital Solutions Company",
  description: "Learn about LaunchPixel, a premier AI automation company specializing in web development, AI applications, and digital transformation. Discover our mission, vision, and commitment to innovation.",
  keywords: "about LaunchPixel, AI automation company, digital solutions provider, web development agency, AI technology experts, business automation, digital transformation, innovation, technology company",
  openGraph: {
    title: "About LaunchPixel | AI Automation Experts",
    description: "Leading AI automation and digital solutions company transforming businesses worldwide",
    type: "website",
  },
}

export default function AboutPage() {
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">LaunchPixel</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We're a team of innovators, developers, and designers passionate about transforming businesses through AI automation and cutting-edge technology.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <SpotlightCard className="p-6 sm:p-8 flex flex-col items-start h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Mission</h2>
              <p className="text-sm sm:text-base text-gray-400">
                To empower businesses worldwide with innovative AI automation solutions that drive growth, efficiency, and digital transformation. We believe in making advanced technology accessible and practical for businesses of all sizes.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6 sm:p-8 flex flex-col items-start h-full">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-950 flex items-center justify-center mb-3 sm:mb-4">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Our Vision</h2>
              <p className="text-sm sm:text-base text-gray-400">
                To be the world's most trusted AI automation partner, recognized for delivering exceptional digital solutions that transform how businesses operate and grow in the digital age.
              </p>
            </SpotlightCard>
          </div>

          {/* What We Do */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">What We Do</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <SpotlightCard className="p-4 sm:p-6 flex flex-col items-start h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-950 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">AI Automation</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  We build intelligent automation solutions that streamline operations, reduce costs, and improve efficiency using cutting-edge AI and machine learning technologies.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-4 sm:p-6 flex flex-col items-start h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-950 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Web Development</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Custom web applications built with modern frameworks like React, Next.js, and Node.js. We create fast, scalable, and user-friendly digital experiences.
                </p>
              </SpotlightCard>
              <SpotlightCard className="p-4 sm:p-6 flex flex-col items-start h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-indigo-950 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Digital Strategy</h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Comprehensive digital transformation strategies including SEO, brand development, and online presence optimization to help your business thrive online.
                </p>
              </SpotlightCard>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Why Choose LaunchPixel</h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: Brain,
                  title: "Expertise in AI & Automation",
                  description: "Deep knowledge of AI technologies, machine learning, and automation frameworks to deliver cutting-edge solutions."
                },
                {
                  icon: Users,
                  title: "Client-Centric Approach",
                  description: "We prioritize your business goals and work collaboratively to ensure every solution aligns with your vision."
                },
                {
                  icon: Trophy,
                  title: "Proven Track Record",
                  description: "50+ satisfied clients and 100+ successful projects across various industries demonstrate our capability."
                },
                {
                  icon: Layers,
                  title: "End-to-End Solutions",
                  description: "From strategy and design to development and deployment, we handle every aspect of your digital transformation."
                },
                {
                  icon: Zap,
                  title: "Cutting-Edge Technology",
                  description: "We stay ahead of technology trends, using the latest tools and frameworks to build future-proof solutions."
                },
                {
                  icon: Headphones,
                  title: "Ongoing Support",
                  description: "Our commitment doesn't end at launch. We provide continuous support and optimization for long-term success."
                }
              ].map((item, index) => (
                <SpotlightCard key={index} className="flex flex-row gap-3 sm:gap-4 p-4 sm:p-6 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "100+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <SpotlightCard key={index} className="text-center p-4 sm:p-6 flex flex-col items-center justify-center">
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </SpotlightCard>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how LaunchPixel can help you achieve your digital transformation goals with AI automation and innovative technology solutions.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-sm sm:text-base"
            >
              Get in Touch
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "LaunchPixel",
            "description": "Leading AI automation and digital solutions company",
            "url": "https://launchpixel.com",
            "logo": "https://launchpixel.com/logo.gif",
            "foundingDate": "2019",
            "sameAs": [
              "https://twitter.com/launchpixel",
              "https://linkedin.com/company/launchpixel"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "availableLanguage": ["English"]
            }
          })
        }}
      />

      <Footer />
    </div>
  )
}
