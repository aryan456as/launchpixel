"use client"
import Link from "next/link"
import { Code2, Smartphone, Brain, Book, IdCard, LayoutDashboard, PenTool, BarChart2, ChevronRight } from "lucide-react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })
const ChromaGrid = dynamic(() => import('../../components/ChromaGrid'), { ssr: false })

// Metadata moved to layout

const services = [
  {
    icon: <Code2 className="w-12 h-12" />,
    title: "Web/App Development",
    subtitle: "Custom web and mobile applications built with modern technologies like React, Next.js, and Node.js.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "Brand Strategy",
    subtitle: "Comprehensive brand strategy services to establish your unique market position and identity.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <Brain className="w-12 h-12" />,
    title: "AI Applications",
    subtitle: "Cutting-edge AI and machine learning solutions including chatbots and predictive analytics.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <Book className="w-12 h-12" />,
    title: "Guidelines & Systems",
    subtitle: "Comprehensive design systems and brand guidelines for consistency across all touchpoints.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <IdCard className="w-12 h-12" />,
    title: "Identity Design",
    subtitle: "Memorable brand identities including logos, color palettes, and visual elements.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <LayoutDashboard className="w-12 h-12" />,
    title: "UI Design & UX Strategy",
    subtitle: "User-centered design combining beautiful interfaces with intuitive user experiences.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <PenTool className="w-12 h-12" />,
    title: "Prototyping",
    subtitle: "Interactive prototypes that bring your ideas to life before development begins.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
  {
    icon: <BarChart2 className="w-12 h-12" />,
    title: "SEO Strategies",
    subtitle: "Data-driven SEO strategies to improve search rankings and drive organic traffic.",
    borderColor: "#5227FF",
    gradient: "rgba(82, 39, 255, 0.1)",
  },
]

export default function ServicesPage() {
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive AI automation and digital solutions to transform your business. From web development to AI applications, we deliver excellence.
            </p>
          </div>

          {/* Services Grid with ChromaGrid */}
          <div style={{ minHeight: '600px', position: 'relative' }} className="sm:min-h-[800px]">
            <ChromaGrid
              items={services.map(service => ({
                image: '',
                title: service.title,
                subtitle: service.subtitle,
                borderColor: service.borderColor,
                gradient: service.gradient,
                icon: service.icon
              }))}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-sm sm:text-base"
            >
              Get Started Today
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Automation and Digital Solutions",
            "provider": {
              "@type": "Organization",
              "name": "LaunchPixel",
              "url": "https://launchpixel.com"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Automation Services",
              "itemListElement": services.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": service.title,
                  "description": service.subtitle
                }
              }))
            }
          })
        }}
      />

      <Footer />
    </div>
  )
}
