"use client"

import React, { useState } from 'react'
import { Sparkles, ArrowRight, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import dynamic from "next/dynamic"

const Antigravity = dynamic(() => import('../../components/Antigravity'), { ssr: false })

// Note: Metadata is set in layout.tsx for client components
// SEO: Campus Ambassador Program, Internship Opportunities, Remote Work, Student Jobs

export default function CampusAmbassadorForm() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    why: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  // Track mouse position for background effects
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field])
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required'
        if (value.trim().length < 3) return 'Name must be at least 3 characters'
        if (!/^[a-zA-Z\s]*$/.test(value)) return 'Name should only contain letters'
        return ''

      case 'phone':
        if (!value.trim()) return 'Phone number is required'
        if (!/^[0-9]{10}$/.test(value.replace(/\D/g, '')))
          return 'Please enter a valid 10-digit phone number'
        return ''

      case 'college':
        if (!value.trim()) return 'College/University is required'
        if (value.trim().length < 3) return 'Please enter full college name'
        return ''

      case 'department':
        if (!value.trim()) return 'Department is required'
        if (value.trim().length < 2) return 'Please enter valid department'
        return ''

      case 'year':
        if (!value) return 'Year of study is required'
        return ''

      case 'why':
        if (!value.trim()) return 'Please tell us why you want to join'
        if (value.trim().length < 50) return 'Please provide at least 50 characters'
        return ''

      default:
        return ''
    }
  }

  const validateForm = () => {
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/hiring', {
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
          phone: '',
          college: '',
          department: '',
          year: '',
          why: ''
        })
        setErrors({})
        setTouched({})
      } else {
        alert('There was an error. Please try again.')
      }
    } catch (error) {
      alert('There was an error. Please try again.')
      console.error('Error in form submission:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
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

        <div className="flex items-center justify-center px-4 py-40">
          <div className="max-w-md w-full text-center p-8 rounded-2xl bg-indigo-900/20 backdrop-blur-sm border border-indigo-700/30">
            <h2 className="text-2xl font-bold text-white mb-4">Thank You for Your Application!</h2>
            <p className="text-gray-300 mb-6">Our team will review your information and reach out to you soon about the Campus Ambassador position.</p>
            <button
              onClick={() => {
                router.push("/")
              }}
              className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl 
                font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-indigo-600/20 
                flex items-center gap-2 mx-auto"
            >
              Back to Homepage
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <Footer />
      </div>
    )
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

      <div className="relative z-10 container mx-auto px-4 pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Join Launch Pixel as a
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 ml-2">
                Campus Ambassador
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-4">
              Gain valuable experience, expand your professional network, and earn commissions while representing Launch Pixel!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="p-4 sm:p-6 rounded-xl bg-indigo-800/20 backdrop-blur-sm border border-indigo-700/30">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Your Responsibilities</h3>
                <ul className="text-gray-300 space-y-2 sm:space-y-3 text-left text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Lead Generation & Outreach to US-based clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Networking & Awareness in professional communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Client Engagement & Nurturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Execute targeted marketing campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Drive referral-based growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Collect client feedback & insights</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 sm:p-6 rounded-xl bg-indigo-800/20 backdrop-blur-sm border border-indigo-700/30">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">What You Get</h3>
                <ul className="text-gray-300 space-y-2 sm:space-y-3 text-left text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Work from Anywhere – 100% remote, flexible hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Paid Internship – Earn commissions per referral</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Prestigious Internship Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Exclusive Rewards & Bonuses for top performers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Valuable networking opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-xl mx-auto">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onBlur={() => handleBlur('name')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 placeholder-gray-500 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              />
              {errors.name && touched.name && <p className="mt-2 text-red-400 text-sm">{errors.name}</p>}
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onBlur={() => handleBlur('phone')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 placeholder-gray-500 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              />
              {errors.phone && touched.phone && <p className="mt-2 text-red-400 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="College / University"
                value={formData.college}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                onBlur={() => handleBlur('college')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 placeholder-gray-500 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              />
              {errors.college && touched.college && <p className="mt-2 text-red-400 text-sm">{errors.college}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Department"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                onBlur={() => handleBlur('department')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 placeholder-gray-500 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              />
              {errors.department && touched.department && <p className="mt-2 text-red-400 text-sm">{errors.department}</p>}
            </div>

            <div>
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                onBlur={() => handleBlur('year')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              >
                <option value="">Select Year of Study</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="Graduate">Graduate Student</option>
              </select>
              {errors.year && touched.year && <p className="mt-2 text-red-400 text-sm">{errors.year}</p>}
            </div>

            <div>
              <textarea
                placeholder="Why do you want to be a Campus Ambassador for Launch Pixel?"
                value={formData.why}
                onChange={(e) => setFormData({ ...formData, why: e.target.value })}
                onBlur={() => handleBlur('why')}
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 placeholder-gray-500 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              />
              {errors.why && touched.why && <p className="mt-2 text-red-400 text-sm">{errors.why}</p>}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl 
                font-medium hover:opacity-90 transition-all shadow-lg shadow-indigo-600/20 
                flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Submit Application
                </>
              )}
            </button>
          </form>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-400 px-4">
              Questions about the program? Email us at <span className="text-indigo-400">team@launchpixel.in</span>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}