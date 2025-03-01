"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"}`}
    >
      <div className="container-custom flex justify-between items-center px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold gradient-text">
          <span className="font-poppins">Nabin Shrestha</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-white transition-colors">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="btn-primary">
            Contact Me
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <nav className="flex flex-col items-center py-6 space-y-4">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link href="#contact" className="btn-primary" onClick={() => setIsOpen(false)}>
              Contact Me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

