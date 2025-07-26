import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '../components/ThemeRegistry'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from '../contexts/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yuupi! - Simple URL Shortener',
  description: 'Yuupi! is a powerful URL shortener that helps you create short, memorable links and track their performance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="yuupi">
      <head>
        <link rel="icon" type="image/png" href="/yuupi-logo.png" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <AuthProvider>
            {children}
          </AuthProvider>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </ThemeRegistry>
      </body>
    </html>
  )
} 