'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PortalAuth from '@/components/PortalAuth'
import PortalDashboard from '@/components/PortalDashboard'

export default function PortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userData, setUserData] = useState<any>(null)

  const handleAuth = (data: any) => {
    setUserData(data)
    setIsAuthenticated(true)
  }

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <PortalAuth onAuth={handleAuth} />
      </>
    )
  }

  return (
    <>
      <Header />
      <PortalDashboard userData={userData} />
    </>
  )
}

