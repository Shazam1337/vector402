'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'WHAT IS 402 SIGNAL?',
    answer: '402 signal is a real-time metric derived from on-chain and social activity. It measures velocity, engagement, and verifiable traction of projects listed on VECTOR402.',
  },
  {
    question: 'HOW DO I VERIFY MY STARTUP?',
    answer: 'Connect your wallet, submit your pitch deck, and provide access to your 402 metrics. Our system verifies traction automatically through API integration.',
  },
  {
    question: 'WHAT IS THE COST TO LIST?',
    answer: 'Listing is free. VECTOR402 operates on a success-fee model. We take a percentage only when your project reaches funding milestones.',
  },
  {
    question: 'CAN I PARTICIPATE WITHOUT A PROJECT?',
    answer: 'Yes. Participants can browse verified projects, follow signals, and access early investment opportunities through the portal.',
  },
  {
    question: 'HOW IS VELOCITY_402 CALCULATED?',
    answer: 'Velocity_402 combines transaction frequency, social engagement (CTR), unique user growth, and volume trends into a single normalized score (0-100).',
  },
  {
    question: 'IS MY DATA SECURE?',
    answer: 'All data is encrypted and stored on-chain where applicable. We use zero-knowledge proofs for sensitive information and never share your metrics without consent.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 container mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        FAQ
      </h2>

      <div className="max-w-3xl mx-auto space-y-2">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-l-2 border-neon-lime/30 hover:border-neon-lime transition-colors duration-120 cursor-crosshair"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            style={{ cursor: 'crosshair' }}
          >
            <div className="pl-4 py-4 bg-black/30 hover:bg-black/50 transition-colors duration-120">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold uppercase tracking-wider">
                  {item.question}
                </h3>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-neon-lime text-2xl font-light"
                >
                  +
                </motion.span>
              </div>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pt-4 text-text-secondary leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

