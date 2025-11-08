'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur border-b border-neon-lime/30' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="VECTOR402"
              width={80}
              height={80}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-neon-lime hover:glow-text transition-all">
              VECTOR402
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-text-secondary hover:text-neon-lime transition-colors uppercase tracking-wider text-sm"
            >
              How it Works
            </Link>
            <Link
              href="#projects"
              className="text-text-secondary hover:text-neon-lime transition-colors uppercase tracking-wider text-sm"
            >
              Projects
            </Link>
            <Link
              href="#faq"
              className="text-text-secondary hover:text-neon-lime transition-colors uppercase tracking-wider text-sm"
            >
              FAQ
            </Link>
            <Link
              href="/portal"
              className="px-6 py-2 border border-neon-lime text-neon-lime hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 uppercase tracking-wider text-sm"
            >
              Portal
            </Link>
            <a
              href="https://x.com/vector402_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-neon-lime/30 text-neon-lime hover:border-neon-lime hover:bg-neon-lime hover:text-bg-dark transition-all duration-120"
              aria-label="X (Twitter)"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

