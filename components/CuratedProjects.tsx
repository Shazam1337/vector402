'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Project {
  id: string
  name: string
  description: string
  volume: number
  ctr: number
  velocity402: number
  status: 'OPEN' | 'UPCOMING' | 'CLOSED'
}

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'NEURALINK PROTOCOL',
    description: 'Decentralized AI compute network with verifiable inference',
    volume: 1250000,
    ctr: 15.2,
    velocity402: 88,
    status: 'OPEN',
  },
  {
    id: '2',
    name: 'QUANTUM VAULT',
    description: 'Post-quantum cryptography for Web3 infrastructure',
    volume: 890000,
    ctr: 12.8,
    velocity402: 75,
    status: 'OPEN',
  },
  {
    id: '3',
    name: 'FLUX CHAIN',
    description: 'Layer 2 solution with 402-native tokenomics',
    volume: 2100000,
    ctr: 18.5,
    velocity402: 92,
    status: 'OPEN',
  },
  {
    id: '4',
    name: 'SYNTHETIC LABS',
    description: 'Synthetic asset protocol with real-world data feeds',
    volume: 0,
    ctr: 0,
    velocity402: 0,
    status: 'UPCOMING',
  },
  {
    id: '5',
    name: 'ZERO TRUST NET',
    description: 'Privacy-first identity verification using zero-knowledge proofs',
    volume: 450000,
    ctr: 9.3,
    velocity402: 65,
    status: 'CLOSED',
  },
  {
    id: '6',
    name: 'ENERGY GRID',
    description: 'Renewable energy tokenization and trading platform',
    volume: 0,
    ctr: 0,
    velocity402: 0,
    status: 'UPCOMING',
  },
]

export default function CuratedProjects() {
  const [projects, setProjects] = useState<Project[]>(mockProjects)

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setProjects(prev => prev.map(project => {
        if (project.status === 'OPEN') {
          return {
            ...project,
            volume: project.volume + Math.floor(Math.random() * 1000) - 500,
            ctr: Number((project.ctr + (Math.random() * 0.1 - 0.05)).toFixed(1)),
            velocity402: Math.max(0, Math.min(100, project.velocity402 + Math.floor(Math.random() * 3) - 1)),
          }
        }
        return project
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatVolume = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`
    return `$${value}`
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'OPEN':
        return 'text-neon-lime'
      case 'UPCOMING':
        return 'text-yellow-400'
      case 'CLOSED':
        return 'text-text-secondary'
      default:
        return 'text-text-secondary'
    }
  }

  return (
    <section id="projects" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        CURATED PROJECTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-neon-lime/30 p-6 hover:border-neon-lime hover:glow-border transition-all duration-120 bg-black/50"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-sm text-text-secondary mb-4">{project.description}</p>
            </div>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Volume:</span>
                <motion.span
                  key={project.volume}
                  initial={{ scale: 1.1, color: '#D4FF3D' }}
                  animate={{ scale: 1, color: '#EDEDED' }}
                  className="font-mono"
                >
                  {formatVolume(project.volume)}
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">CTR:</span>
                <motion.span
                  key={project.ctr}
                  initial={{ scale: 1.1, color: '#D4FF3D' }}
                  animate={{ scale: 1, color: '#EDEDED' }}
                  className="font-mono"
                >
                  {project.ctr}%
                </motion.span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Velocity402:</span>
                <motion.span
                  key={project.velocity402}
                  initial={{ scale: 1.1, color: '#D4FF3D' }}
                  animate={{ scale: 1, color: '#EDEDED' }}
                  className="font-mono"
                >
                  {project.velocity402}
                </motion.span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs uppercase tracking-wider ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <div className="flex gap-2">
              <Link
                href={`/project/${project.id}`}
                className="flex-1 px-4 py-2 border border-neon-lime text-neon-lime text-sm hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 text-center uppercase tracking-wider"
              >
                View project
              </Link>
              <button
                className="flex-1 px-4 py-2 border border-neon-lime text-neon-lime text-sm hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 uppercase tracking-wider"
              >
                Follow signal
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

