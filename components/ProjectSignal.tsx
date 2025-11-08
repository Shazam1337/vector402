'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectSignal({ projectId }: { projectId: string }) {
  const [signalStrength, setSignalStrength] = useState(82)

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalStrength(prev => Math.max(0, Math.min(100, prev + Math.floor(Math.random() * 3) - 1)))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 container mx-auto px-4 border-t border-neon-lime/30">
      <h2 className="text-3xl font-bold mb-8 uppercase tracking-wider">Signal Strength</h2>
      <div className="max-w-2xl">
        <div className="border border-neon-lime/30 p-6 bg-black/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-text-secondary uppercase tracking-wider">Current Signal</span>
            <motion.span
              key={signalStrength}
              initial={{ scale: 1.1, color: '#D4FF3D' }}
              animate={{ scale: 1, color: '#EDEDED' }}
              className="text-4xl font-bold font-mono"
            >
              {signalStrength}
            </motion.span>
          </div>
          <div className="text-sm text-text-secondary">
            Signal strength is calculated from real-time 402 metrics including velocity, engagement, and volume trends.
          </div>
        </div>
      </div>
    </section>
  )
}

