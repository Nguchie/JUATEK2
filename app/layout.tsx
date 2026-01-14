import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JUATEK - AI-Powered Predictive Maintenance for Industrial & Medical Equipment',
  description: 'Predict critical machine failures before they disrupt operations or patient care. AI and IoT sensors monitor equipment, detect early warning signs, and prevent unexpected breakdowns.',
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
