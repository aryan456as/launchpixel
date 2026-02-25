"use client"

import React, { useState, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight, Loader2, Upload, X } from "lucide-react"
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
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    college: '',
    department: '',
    year: '',
    why: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // File upload state
  const [attachments, setAttachments] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10 MB per file
  const MAX_FILES = 5
  const ACCEPTED_TYPES = '.pdf,.png,.jpg,.jpeg,.gif,.mp4,.webm,.zip,.rar,.doc,.docx'

  const handleFiles = useCallback((files: FileList | null) => {
    if (!files) return
    const newFiles = Array.from(files)
    const validFiles: File[] = []
    const fileErrors: string[] = []

    for (const file of newFiles) {
      if (file.size > MAX_FILE_SIZE) {
        fileErrors.push(`"${file.name}" exceeds 10 MB limit`)
        continue
      }
      if (attachments.length + validFiles.length >= MAX_FILES) {
        fileErrors.push(`Maximum ${MAX_FILES} files allowed`)
        break
      }
      // Avoid duplicates by name
      if (attachments.some(f => f.name === file.name) || validFiles.some(f => f.name === file.name)) {
        fileErrors.push(`"${file.name}" is already attached`)
        continue
      }
      validFiles.push(file)
    }

    if (validFiles.length > 0) {
      setAttachments(prev => [...prev, ...validFiles])
    }
    if (fileErrors.length > 0) {
      setErrors(prev => ({ ...prev, files: fileErrors.join('. ') }))
    } else {
      setErrors(prev => { const { files: _, ...rest } = prev; return rest })
    }
  }, [attachments])

  const removeFile = (index: number) => {
    setAttachments(prev => prev.filter((_, i) => i !== index))
    setErrors(prev => { const { files: _, ...rest } = prev; return rest })
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFiles(e.dataTransfer.files)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  // Track mouse position for background effects
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const error = validateField(field, formData[field as keyof typeof formData])
    setErrors(prev => ({ ...prev, [field]: error }))
  }

  const validateField = (name: string, value: string) => {
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
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) newErrors[key] = error
    })

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError('')

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const payload = new FormData()
      // FormSubmit configuration
      payload.append('_subject', 'New Campus Ambassador Application - LaunchPixel')
      payload.append('_captcha', 'false')
      payload.append('_template', 'box')

      // Form fields
      payload.append('Name', formData.name)
      payload.append('Phone', formData.phone)
      payload.append('College / University', formData.college)
      payload.append('Department', formData.department)
      payload.append('Year of Study', formData.year)
      payload.append('Why Join as Campus Ambassador', formData.why)

      // File attachments
      for (const file of attachments) {
        payload.append('attachment', file)
      }

      const res = await fetch('https://formsubmit.co/ajax/viveksharma.network@gmail.com', {
        method: 'POST',
        body: payload,
      })

      const result = await res.json()

      if (result.success === 'true' || result.success === true) {
        setIsSuccess(true)
      } else {
        setSubmitError('Something went wrong. Please try again.')
      }
    } catch {
      setSubmitError('Network error. Please check your connection and try again.')
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-white">Join LaunchPixel as a</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_auto] animate-gradient-flow">Campus Ambassador</span>
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

          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6 max-w-xl mx-auto"
          >

            <div>
              <input
                type="text"
                name="name"
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
                name="phone"
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
                name="college"
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
                name="department"
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
                name="year"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                onBlur={() => handleBlur('year')}
                className="w-full px-6 py-4 rounded-xl bg-indigo-800/50 text-gray-100 
                  border border-indigo-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 
                  transition-all duration-200 backdrop-blur-xl"
              >
                <option value="">Select Year of Study</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduate Student">Graduate Student</option>
              </select>
              {errors.year && touched.year && <p className="mt-2 text-red-400 text-sm">{errors.year}</p>}
            </div>

            <div>
              <textarea
                name="message"
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

            {/* File Upload Zone */}
            <div>
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`w-full px-6 py-8 rounded-xl border-2 border-dashed cursor-pointer
                  transition-all duration-200 backdrop-blur-xl text-center
                  ${isDragOver
                    ? 'border-indigo-400 bg-indigo-800/40 scale-[1.02]'
                    : 'border-indigo-700/50 bg-indigo-800/20 hover:border-indigo-500/60 hover:bg-indigo-800/30'
                  }`}
              >
                <Upload className={`w-8 h-8 mx-auto mb-3 transition-colors ${isDragOver ? 'text-indigo-300' : 'text-indigo-500'
                  }`} />
                <p className="text-gray-300 text-sm sm:text-base font-medium">
                  {isDragOver ? 'Drop files here' : 'Drag & drop your files here'}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Resume, portfolio, images, videos, or zip &middot; Max 10 MB each &middot; Up to {MAX_FILES} files
                </p>
                <p className="text-gray-600 text-xs mt-2">
                  PDF, PNG, JPG, GIF, MP4, WEBM, ZIP, RAR, DOC, DOCX
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept={ACCEPTED_TYPES}
                  onChange={(e) => { handleFiles(e.target.files); e.target.value = '' }}
                  className="hidden"
                />
              </div>

              {/* Attached Files List */}
              {attachments.length > 0 && (
                <div className="mt-3 space-y-2">
                  {attachments.map((file, index) => (
                    <div
                      key={`${file.name}-${index}`}
                      className="flex items-center justify-between px-4 py-2.5 rounded-lg
                        bg-indigo-800/30 border border-indigo-700/40 text-sm"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-gray-200 truncate">{file.name}</span>
                        <span className="text-gray-500 text-xs flex-shrink-0">({formatFileSize(file.size)})</span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); removeFile(index) }}
                        className="text-gray-400 hover:text-red-400 transition-colors p-1 flex-shrink-0"
                        aria-label={`Remove ${file.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {errors.files && <p className="mt-2 text-red-400 text-sm">{errors.files}</p>}
            </div>

            {/* Submit Error */}
            {submitError && (
              <p className="text-red-400 text-sm text-center bg-red-900/20 rounded-lg px-4 py-3 border border-red-700/30">
                {submitError}
              </p>
            )}

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