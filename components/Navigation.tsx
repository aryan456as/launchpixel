"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blogs", label: "Blog" },
    { href: "/hiring", label: "Hiring" },
  ]

  return (
    <>
      <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-3 sm:px-6 py-2 sm:py-0 shadow-2xl">
          {/* Floating gradient orb effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10" />
          
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative group">
              <Image
                src="/logo.gif"
                alt="LaunchPixel"
                width={98}
                height={98}
                className="rounded-full relative z-10 hover:scale-105 transition-transform w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[98px] md:h-[98px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 group ${
                    pathname === item.href
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {pathname === item.href && (
                    <span className="absolute inset-0 bg-white/10 rounded-full" />
                  )}
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-3/4 transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden lg:block relative px-7 py-3 text-base font-semibold text-white overflow-hidden rounded-full group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 group-hover:scale-105 transition-transform" />
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <span className="relative z-10">Contact</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-full"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-gray-950">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/logo.gif"
                alt="LaunchPixel"
                width={60}
                height={60}
                className="rounded-full"
              />
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-colors bg-gray-800/50 rounded-full"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col p-6 gap-3 overflow-y-auto h-[calc(100vh-100px)]">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full text-left py-4 px-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white border border-indigo-500/30"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50 border border-gray-800"
                }`}
                style={{
                  animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`,
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center mt-4 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-indigo-600/20"
              style={{
                animation: `fadeInUp 0.3s ease-out ${navItems.length * 0.05}s both`,
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
