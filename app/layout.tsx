import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ARCHON V7.0.0 | Main Dashboard',
  description: 'ARCHON V7 Micro-Frontend Main Dashboard',
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
  ;
}