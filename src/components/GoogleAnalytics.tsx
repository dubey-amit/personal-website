'use client'

import { GoogleAnalytics } from '@next/third-parties/google'

export default function Analytics() {
  // Using the actual Google Analytics measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-1YLLEMBN0P'
  
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
} 