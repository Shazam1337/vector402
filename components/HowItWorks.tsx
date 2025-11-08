'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'founders' | 'participants'>('founders')

  const steps = [
    { id: 'wallet', label: 'Wallet', x: 0, y: 0 },
    { id: 'pitch', label: 'Pitch', x: 200, y: 0 },
    { id: 'verification', label: 'Verification', x: 400, y: 0 },
    { id: 'listing', label: 'Listing', x: 600, y: 0 },
    { id: 'feed', label: '402 Feed', x: 800, y: 0 },
    { id: 'liquidity', label: 'Liquidity', x: 1000, y: 0 },
  ]

  return (
    <section id="how-it-works" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        HOW IT WORKS
      </h2>

      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('founders')}
            className={`px-8 py-4 border-2 transition-all duration-120 uppercase tracking-wider ${
              activeTab === 'founders'
                ? 'border-neon-lime bg-neon-lime text-bg-dark'
                : 'border-neon-lime text-neon-lime hover:glow-border'
            }`}
          >
            Founders
          </button>
          <button
            onClick={() => setActiveTab('participants')}
            className={`px-8 py-4 border-2 transition-all duration-120 uppercase tracking-wider ${
              activeTab === 'participants'
                ? 'border-neon-lime bg-neon-lime text-bg-dark'
                : 'border-neon-lime text-neon-lime hover:glow-border'
            }`}
          >
            Participants
          </button>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            {activeTab === 'founders' ? (
              <p className="text-xl text-text-secondary">
                Raise capital without dilution. Verify traction in real-time.
              </p>
            ) : (
              <p className="text-xl text-text-secondary">
                Access verified projects, powered by 402 signal.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Flow Diagram */}
        <div className="relative h-64 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Connections */}
            {steps.slice(0, -1).map((step, i) => {
              const next = steps[i + 1]
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={step.x + 50}
                  y1={step.y + 100}
                  x2={next.x + 50}
                  y2={next.y + 100}
                  stroke="#D4FF3D"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </motion.line>
              )
            })}

            {/* Nodes */}
            {steps.map((step, i) => (
              <g key={step.id}>
                <motion.circle
                  cx={step.x + 50}
                  cy={step.y + 100}
                  r="20"
                  fill="none"
                  stroke="#D4FF3D"
                  strokeWidth="2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ scale: 1.2, strokeWidth: 3 }}
                />
                <motion.text
                  x={step.x + 50}
                  y={step.y + 140}
                  textAnchor="middle"
                  fill="#EDEDED"
                  fontSize="14"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                >
                  {step.label}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center mt-16 flex-wrap">
          <a
            href="/portal?action=pitch"
            className="px-8 py-4 bg-neon-lime text-bg-dark font-semibold hover:glow-border transition-all duration-120 uppercase tracking-wider"
          >
            Pitch your startup →
          </a>
          <a
            href="/portal?action=join"
            className="px-8 py-4 border-2 border-neon-lime text-neon-lime font-semibold hover:bg-neon-lime hover:text-bg-dark transition-all duration-120 uppercase tracking-wider"
          >
            Join as participant →
          </a>
        </div>
      </div>
    </section>
  )
}

