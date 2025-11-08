'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Metrics {
  tx_per_min: number
  volume_24h: number
  unique_posters_24h: number
  ctr_social: number
  velocity_402: number
}

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState<Metrics>({
    tx_per_min: 37,
    volume_24h: 2300000,
    unique_posters_24h: 1200,
    ctr_social: 12.4,
    velocity_402: 82,
  })
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    // Simulate WebSocket updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        tx_per_min: prev.tx_per_min + Math.floor(Math.random() * 3) - 1,
        volume_24h: prev.volume_24h + Math.floor(Math.random() * 10000) - 5000,
        unique_posters_24h: prev.unique_posters_24h + Math.floor(Math.random() * 5) - 2,
        ctr_social: Number((prev.ctr_social + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        velocity_402: prev.velocity_402 + Math.floor(Math.random() * 3) - 1,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatVolume = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
    return `$${value}`
  }

  return (
    <div className="relative bg-black/80 backdrop-blur border-t border-neon-lime/30 py-4">
      <div className="container mx-auto px-4">
        <AnimatePresence>
          {!isConnected && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center text-red-400 mb-2 text-sm"
            >
              FEED LOST ▪ ATTEMPTING RECONNECTION...
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base">
          <motion.div
            key="live"
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="w-2 h-2 bg-neon-lime rounded-full animate-pulse"></span>
            <span className="text-neon-lime font-semibold">LIVE 402 FEED</span>
          </motion.div>
          
          <motion.span
            key={`tx-${metrics.tx_per_min}`}
            initial={{ scale: 1.2, color: '#D4FF3D' }}
            animate={{ scale: 1, color: '#EDEDED' }}
            transition={{ duration: 0.3 }}
          >
            TX/MIN {metrics.tx_per_min}
          </motion.span>
          
          <motion.span
            key={`vol-${metrics.volume_24h}`}
            initial={{ scale: 1.2, color: '#D4FF3D' }}
            animate={{ scale: 1, color: '#EDEDED' }}
            transition={{ duration: 0.3 }}
          >
            VOLUME 24H {formatVolume(metrics.volume_24h)}
          </motion.span>
          
          <motion.span
            key={`users-${metrics.unique_posters_24h}`}
            initial={{ scale: 1.2, color: '#D4FF3D' }}
            animate={{ scale: 1, color: '#EDEDED' }}
            transition={{ duration: 0.3 }}
          >
            ACTIVE USERS {formatVolume(metrics.unique_posters_24h)}
          </motion.span>
          
          <motion.span
            key={`ctr-${metrics.ctr_social}`}
            initial={{ scale: 1.2, color: '#D4FF3D' }}
            animate={{ scale: 1, color: '#EDEDED' }}
            transition={{ duration: 0.3 }}
          >
            CTR {metrics.ctr_social}%
          </motion.span>
        </div>
      </div>
    </div>
  )
}

