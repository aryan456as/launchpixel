"use client"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, X } from "lucide-react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"
import { useState } from "react"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })
const TiltedCard = dynamic(() => import('../../components/TiltedCard'), { ssr: false })

// Metadata moved to layout or handled differently for client components

const portfolioItems = [
  {
    title: "EaseLearn.ai",
    displayName: "EaseLearn AI",
    type: "AI App",
    description: "AI-powered personalized learning platform with interactive elements and unique user experiences. Features adaptive learning algorithms and real-time progress tracking.",
    fullDescription: "EaseLearn.ai is a comprehensive AI-powered learning platform that revolutionizes education through personalized learning paths. The platform uses advanced machine learning algorithms to adapt to each student's learning style, pace, and preferences. Features include interactive lessons, real-time progress tracking, AI-powered recommendations, and gamification elements to keep students engaged.",
    image: "/easelearnai.png",
    video: "/easelearnai.mp4",
    link: "https://easelearn.ai",
    tags: ["AI", "Education", "Machine Learning", "Next.js"],
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "OpenAI API", "PostgreSQL"],
    features: ["Adaptive Learning", "Progress Tracking", "AI Recommendations", "Interactive Lessons", "Gamification"]
  },
  {
    title: "Akonomics.in",
    displayName: "Akonomics",
    type: "EdTech Platform",
    description: "Expert-led economics coaching platform with mobile app integration, empowering students with concept-driven learning and exam preparation.",
    fullDescription: "Akonomics is a premier economics education platform offering both physical classes in Delhi and a comprehensive mobile learning app. Designed for students preparing for competitive exams like CUET PG, IES, and RBI, it features expert-led video lessons, mock tests, and personalized mentorship. The platform bridges the gap between complex economic theories and practical understanding.",
    image: "/akonomics.png",
    link: "https://akonomics.in",
    tags: ["EdTech", "Mobile App", "Education"],
    technologies: ["React", "Node.js", "Mobile App", "LMS", "Video Streaming"],
    features: ["Interactive Lessons", "Exam Prep", "Mentorship", "Mock Tests", "Offline Access"]
  },
  {
    title: "LiverCure.org",
    displayName: "LiverCure",
    type: "Healthcare Platform",
    description: "Comprehensive healthcare platform for liver disease awareness, treatment information, and patient resources. Built with accessibility and user experience in mind.",
    fullDescription: "LiverCure.org is a dedicated healthcare platform focused on liver disease awareness, prevention, and treatment. The platform provides comprehensive information about liver health, connects patients with specialists, and offers resources for caregivers. Built with WCAG 2.1 AA accessibility standards to ensure everyone can access vital health information.",
    image: "/livercure.png",
    video: "/livercure.mp4",
    link: "https://livercure.org",
    tags: ["Healthcare", "Web App", "React", "SEO"],
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS", "AWS"],
    features: ["Patient Resources", "Doctor Directory", "Health Articles", "Appointment Booking", "Accessibility Compliant"]
  },
  {
    title: "MadhavFabrication.in",
    displayName: "Madhav Fabrication",
    type: "E-commerce",
    description: "Modern e-commerce platform for women's clothing with seamless shopping experience, secure payments, and inventory management.",
    fullDescription: "Madhav Fabrication is a full-featured e-commerce platform specializing in women's clothing and fashion. The platform offers a seamless shopping experience with advanced filtering, secure payment integration, real-time inventory management, and order tracking. Built with performance and conversion optimization in mind.",
    image: "/madhavfabrications.png",
    video: "/madhavfabrication.mp4",
    link: "https://madhavfabrication.in",
    tags: ["E-commerce", "Fashion", "Payment Integration"],
    technologies: ["Next.js", "Stripe", "MongoDB", "Redis", "Cloudinary"],
    features: ["Product Catalog", "Secure Payments", "Order Tracking", "Inventory Management", "Wishlist"]
  },
  {
    title: "VibeCast.in",
    displayName: "VibeCast Innovations",
    type: "B2B Platform",
    description: "Corporate website for VibeCast Innovations PVT LTD, specializing in digital signage solutions with dynamic content management.",
    fullDescription: "VibeCast Innovations is a B2B platform for digital signage solutions. The platform enables businesses to manage and display dynamic content across multiple screens and locations. Features include content scheduling, real-time updates, analytics dashboard, and multi-location management.",
    image: "/vibecast.png",
    video: "/vibecast.mp4",
    link: "https://vibecast.in",
    tags: ["B2B", "Digital Signage", "Corporate"],
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "AWS S3"],
    features: ["Content Management", "Multi-location Support", "Real-time Updates", "Analytics", "Scheduling"]
  },
  {
    title: "VaranasionWheels.com",
    displayName: "Varanasi on Wheels",
    type: "Tours & Travel",
    description: "Comprehensive tours and travel agency platform with booking system, tour packages, and customer management for Varanasi tourism.",
    fullDescription: "Varanasi on Wheels is a complete tours and travel management platform for exploring Varanasi. The platform offers customizable tour packages, online booking, payment processing, itinerary management, and customer reviews. Integrated with Google Maps for real-time location tracking.",
    image: "/varanasionwheels.png",
    video: "/varanasionwheels.mp4",
    link: "https://varanasionwheels.com",
    tags: ["Travel", "Booking System", "Tourism"],
    technologies: ["Next.js", "Stripe", "Google Maps API", "MongoDB", "Twilio"],
    features: ["Tour Packages", "Online Booking", "Payment Gateway", "Itinerary Builder", "Customer Reviews"]
  },
  {
    title: "Prajapatiagroexim.com",
    displayName: "Prajapati Agro Exim",
    type: "Agriculture Export",
    description: "Trusted agriculture manufacturing and trading export company specializing in the bulk supply of high-quality agricultural products.",
    fullDescription: "Prajapati Agro Exim is a leading agriculture export company trusted for delivering high-quality commodities worldwide. Specializing in bulk supply of corn, rice, onions, and chickpeas, they ensure direct sourcing from reliable farms. The platform facilitates international trade with a focus on trust and excellence.",
    image: "/prajapatiagro.png",
    link: "https://prajapatiagroexim.com",
    tags: ["Agriculture", "Export", "B2B"],
    technologies: ["Next.js", "React", "TailwindCSS", "Multi-language", "SEO"],
    features: ["Product Catalog", "Bulk Ordering", "Export Compliance", "Farm-to-Table", "Inquiry System"]
  },
  {
    title: "Mornova.in",
    displayName: "Mornova",
    type: "Health & Wellness",
    description: "Premium Moringa-based superfood products store promoting holistic health and wellness through nature's most potent ingredients.",
    fullDescription: "Mornova is a dedicated health and wellness brand bringing the benefits of Moringa to daily life. The platform offers a curated selection of premium Moringa products, including herbal sips and pure powders. With a focus on purity and sustainability, Mornova provides scientifically proven health solutions driven by nature.",
    image: "/mornova.png",
    link: "https://mornova.in",
    tags: ["Health", "E-commerce", "Wellness"],
    technologies: ["Next.js", "React", "TailwindCSS", "Payment Gateway", "SEO"],
    features: ["Product Catalog", "Health Education", "Secure Checkout", "Mobile Responsive", "Wellness Blog"],
    imageStyle: { objectPosition: 'left center' }
  },
  {
    title: "SunilBookStore.store",
    displayName: "Sunil Book Store",
    type: "Portfolio Website",
    description: "Digital presence for Sunil Book Store, expanding their reach to wider audiences with online catalog and contact features.",
    fullDescription: "Sunil Book Store's digital platform showcases their extensive book collection and services. The website features an online catalog, search functionality, book recommendations, and easy contact options. Optimized for local SEO to attract nearby customers.",
    image: "/sunilbookstore.png",
    link: "https://sunilbookstore.store",
    tags: ["Portfolio", "Local Business", "SEO"],
    technologies: ["Next.js", "TailwindCSS", "Vercel", "Google Analytics"],
    features: ["Book Catalog", "Search", "Contact Form", "Local SEO", "Mobile Responsive"]
  },
  {
    title: "PowerPlayCricketAcademy.com",
    displayName: "PowerPlay Cricket Academy",
    type: "Sports Academy",
    description: "Professional website showcasing faculty, facilities, and online registration system for cricket academy enrollments.",
    fullDescription: "PowerPlay Cricket Academy's platform manages student enrollments, showcases coaching staff and facilities, and handles online registrations. Features include batch management, fee payment, attendance tracking, and parent portal for progress updates.",
    image: "/cricketacademy.png",
    link: "https://powerplaycricketacademy.com",
    tags: ["Sports", "Education", "Registration"],
    technologies: ["React", "Node.js", "MongoDB", "Razorpay", "Nodemailer"],
    features: ["Online Registration", "Batch Management", "Fee Payment", "Attendance", "Parent Portal"]
  },
  {
    title: "AyushmaanHospitalKorba.net.in",
    displayName: "Ayushmaan Hospital",
    type: "Hospital Management",
    description: "Complete hospital management system with patient records, appointment booking, and staff management for efficient healthcare delivery.",
    fullDescription: "Ayushmaan Hospital's comprehensive management system streamlines hospital operations. Features include patient record management, appointment scheduling, doctor availability, prescription management, billing, and inventory tracking. Built with HIPAA compliance in mind.",
    image: "/ayushmaan.png",
    link: "https://ayushman-hospital2.vercel.app/",
    tags: ["Healthcare", "Management System", "Booking"],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "NextAuth", "TailwindCSS"],
    features: ["Patient Records", "Appointments", "Prescriptions", "Billing", "Inventory"]
  },
  {
    title: "sharansmusicacademy.com",
    displayName: "Sharans Music Academy",
    type: "Music Academy",
    description: "Music academy management platform with student enrollment, class scheduling, and online booking capabilities.",
    fullDescription: "Sharans Music Academy platform manages music education with features for student enrollment, class scheduling, instrument tracking, practice logs, and performance recordings. Includes parent portal for progress monitoring and online fee payment.",
    image: "/sharansmusicacademy.png",
    link: "https://sharansmusicacademy.com",
    tags: ["Music", "Education", "Management"],
    technologies: ["Next.js", "MongoDB", "Stripe", "AWS S3", "Socket.io"],
    features: ["Student Enrollment", "Class Scheduling", "Practice Logs", "Recordings", "Fee Management"]
  },
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null)

  return (
    <div className="min-h-screen bg-gray-950">
      <Navigation />

      {/* Antigravity Background */}
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
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="text-white">Our </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-flow">Portfolio</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Explore our successful projects across AI automation, web development, and digital transformation. Real results for real businesses.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer"
              >
                <TiltedCard
                  imageSrc={item.image}
                  altText={item.displayName}
                  captionText={item.displayName}
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  scaleOnHover={1.05}
                  rotateAmplitude={12}
                  showMobileWarning={false}
                  showTooltip={true}
                  // @ts-ignore
                  imageStyle={item.imageStyle}
                  onClick={() => setSelectedProject(item)}
                />
              </div>
            ))}
          </div>



          {/* CTA Section */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Ready to start your project?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-sm sm:text-base"
            >
              Let's Work Together
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
            "@type": "CollectionPage",
            "name": "LaunchPixel Portfolio",
            "description": "Portfolio of AI automation and web development projects",
            "provider": {
              "@type": "Organization",
              "name": "LaunchPixel"
            }
          })
        }}
      />

      {/* Modal Popup */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-4 pt-16 sm:pt-20"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl border border-gray-800 max-w-3xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>

            {/* Project Image/Video */}
            <div className="relative h-40 sm:h-48 md:h-64 overflow-hidden rounded-t-2xl">
              {selectedProject.video ? (
                <video
                  src={selectedProject.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.displayName}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  // @ts-ignore
                  style={(selectedProject as any).imageStyle}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{selectedProject.displayName}</h2>
                  <p className="text-sm sm:text-base text-indigo-400">{selectedProject.type}</p>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm flex-shrink-0"
                  >
                    Visit Site
                    <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                  </a>
                )}
              </div>

              <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm">{selectedProject.fullDescription}</p>

              {/* Technologies */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Technologies Used</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-3 sm:mb-4">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Key Features</h3>
                <ul className="grid sm:grid-cols-2 gap-1 sm:gap-1.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-xs sm:text-sm">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-indigo-400 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Categories</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:py-1 text-xs bg-indigo-950/50 text-indigo-300 rounded-full border border-indigo-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
