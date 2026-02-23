import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Joanna Moon - Portfolio',
  description: 'Software Engineer, Data Scientist',
  icons: {
    icon: [
      {
        url: '/flower-icon.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/flower-icon.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/flower-icon.jpg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/flower-icon.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_geist.variable} ${_playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
