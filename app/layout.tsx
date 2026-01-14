import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'JUATEK - Machine Intelligence Layer for Industrial & Medical Equipment',
  description: 'Understand your machines long before they fail. JUATEK transforms raw machine signals into actionable operational insight, enabling informed maintenance decisions through behavioral intelligence.',
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
