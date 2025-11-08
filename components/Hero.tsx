'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LiveMetrics from './LiveMetrics'
import AnimatedGrid from './AnimatedGrid'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedGrid />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight"
            animate={isLoaded ? {} : { 
              x: [0, -2, 2, -1, 1, 0],
              transition: { duration: 0.3, delay: 0.5 }
            }}
          >
            <span className="block">WELCOME TO THE</span>
            <span className="block text-neon-lime glow-text">VERIFIABLE</span>
            <span className="block">STARTUP FLOW</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-text-secondary mt-6 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            VECTOR402 connects verified capital with verifiable innovation.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <a
            href="/portal"
            className="px-8 py-4 bg-neon-lime text-bg-dark font-semibold hover:glow-border transition-all duration-120 uppercase tracking-wider"
          >
            Launch Portal
          </a>
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-neon-lime text-neon-lime font-semibold hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 uppercase tracking-wider"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <LiveMetrics />
      </div>
    </section>
  )
}

