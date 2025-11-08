import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VECTOR402 - Verifiable Startup Flow',
  description: 'VECTOR402 connects verified capital with verifiable innovation.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

