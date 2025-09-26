"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Image
              src="/logo.gif"
              alt="LaunchPixel Logo"
              width={90}
              height={90}
              className="rounded-full"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-2 justify-end">
            <Link href="/" className="cursor-pointer transition-colors duration-300 text-gray-400 hover:text-indigo-400" style={{ padding: '0 8px', fontWeight: 500 }}>
              Home
            </Link>
            <Link href="/#services" className="cursor-pointer transition-colors duration-300 text-gray-400 hover:text-indigo-400" style={{ padding: '0 8px', fontWeight: 500 }}>
              Services
            </Link>
            <Link href="/#portfolio" className="cursor-pointer transition-colors duration-300 text-gray-400 hover:text-indigo-400" style={{ padding: '0 8px', fontWeight: 500 }}>
              Portfolio
            </Link>
            <Link href="/#testimonials" className="cursor-pointer transition-colors duration-300 text-gray-400 hover:text-indigo-400" style={{ padding: '0 8px', fontWeight: 500 }}>
              Testimonials
            </Link>
            <Link href="/blogs" className="cursor-pointer transition-colors duration-300 text-indigo-400" style={{ padding: '0 8px', fontWeight: 500 }}>
              Blog
            </Link>
            <Link href="/#contact" className="ml-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300">
              Contact Us
            </Link>
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
        <div className="fixed top-[50px] md:top-[60px] left-0 w-full h-[calc(100vh-50px)] md:h-[calc(100vh-60px)] bg-gray-50 z-40 flex items-center justify-center overflow-y-auto shadow-lg">
          <div className="flex flex-col items-center w-full justify-center min-h-screen px-6 bg-gray-950 blur-50 backdrop-blur-lg">
            <nav className="container mx-auto flex flex-col items-center space-y-6 transform -translate-y-12 backdrop-blur-lg">
              <Link href="/" className="text-2xl font-semibold text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                Home
              </Link>
              <Link href="/#services" className="text-2xl font-semibold text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                Services
              </Link>
              <Link href="/#portfolio" className="text-2xl font-semibold text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/#testimonials" className="text-2xl font-semibold text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                Testimonials
              </Link>
              <Link href="/blogs" className="text-2xl font-semibold text-indigo-400 transition-colors duration-300">
                Blog
              </Link>
              <Link href="/#contact" className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-full hover:from-indigo-500 hover:to-indigo-400 transition-all duration-300 text-xl font-semibold">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}
