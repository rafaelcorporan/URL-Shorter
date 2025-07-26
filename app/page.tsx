'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Copy, Check, QrCode, BarChart3, Menu, X, Twitter, Github, Linkedin, MessageCircle, LogIn, UserPlus, LogOut, Zap, PieChart, Shield } from 'lucide-react'
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, CircularProgress } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import toast from 'react-hot-toast'
import { styled } from '@mui/material/styles'
import { useAuth } from '../contexts/AuthContext'

const GradientButton = styled(Button)({
  background: 'linear-gradient(90deg, #E65100 0%, #FF9800 50%, #FFB300 100%)',
  color: '#fff',
  fontWeight: 500,
  boxShadow: 'none',
  textTransform: 'none',
  '&:hover': {
    background: 'linear-gradient(90deg, #E65100 0%, #FF9800 50%, #FFB300 100%)',
    boxShadow: '0 10px 20px -5px rgba(230, 81, 0, 0.1)',
    transform: 'translateY(-2px)'
  }
})

export default function Home() {
  const router = useRouter()
  const { isAuthenticated, logout } = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  
  // Header state
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Form state
  const [originalUrl, setOriginalUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [expiration, setExpiration] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [copied, setCopied] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  useEffect(() => {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      router.push('/login')
    } else {
      setIsLoading(false)
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <CircularProgress />
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!originalUrl) {
      toast.error('Please enter a URL')
      return
    }
    // Mock URL shortening
    const domain = 'https://yuupi.gg/'
    const randomString = Math.random().toString(36).substring(2, 8)
    const newShortenedUrl = domain + (customAlias || randomString)
    setShortenedUrl(newShortenedUrl)
    setShowResult(true)
    setClickCount(Math.floor(Math.random() * 100))
    toast.success('URL shortened successfully!')
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl)
      setCopied(true)
      toast.success('URL copied to clipboard!')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast.error('Failed to copy URL')
    }
  }

  const getExpiryText = () => {
    if (!expiration) return "Never expires"
    const now = new Date()
    switch (expiration) {
      case "1h":
        now.setHours(now.getHours() + 1)
        return `Expires at ${now.toLocaleTimeString()}`
      case "1d":
        now.setDate(now.getDate() + 1)
        return `Expires ${now.toLocaleDateString()}`
      case "1w":
        now.setDate(now.getDate() + 7)
        return `Expires ${now.toLocaleDateString()}`
      case "1m":
        now.setMonth(now.getMonth() + 1)
        return `Expires ${now.toLocaleDateString()}`
      default:
        return "Never expires"
    }
  }

  // Footer links
  const footerLinks = {
    Product: ['Features', 'Pricing', 'API', 'Integrations'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Legal: ['Privacy', 'Terms', 'Cookie Policy', 'GDPR'],
    Resources: ['Documentation', 'Guides', 'Support', 'Community']
  }
  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: '#', label: 'Discord' }
  ]

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-4">
          <div className="flex items-center gap-2">
            <a href="/" className="cursor-pointer">
              <Image src="/logo.png" alt="Logo" width={120} height={48} />
            </a>
          </div>
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
            <a href="/features" className="text-orange-600 hover:text-orange-800">Features</a>
            <a href="/pricing" className="text-orange-600 hover:text-orange-800">Pricing</a>
            <a href="/api" className="text-orange-600 hover:text-orange-800">API</a>
            <a href="/about" className="text-orange-600 hover:text-orange-800">About</a>
          </nav>
          <div className="flex gap-2 items-center">
            <Button startIcon={<LogOut size={18} />} variant="text" onClick={logout} sx={{ color: '#ebedef', fontWeight: 500, textTransform: 'none', display: { xs: 'none', md: 'inline-flex' } }}>Logout</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-3xl mx-auto text-center mt-16 mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Shorten Your Links{' '}
            <span className="gradient-text">Instantly</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A powerful URL shortener that helps you create short, memorable links and track their performance.
          </p>
        </section>

        {/* Form Card */}
        <section className="w-full max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <TextField
                  type="url"
                  value={originalUrl}
                  onChange={e => setOriginalUrl(e.target.value)}
                  placeholder="Paste your long URL here..."
                  variant="outlined"
                  fullWidth
                  sx={{ background: '#f8fafc', borderRadius: 2 }}
                  inputProps={{ style: { fontSize: 16 } }}
                />
                <GradientButton type="submit" sx={{ px: 3, py: 1.5, borderRadius: 2, fontWeight: 500, fontSize: 16, whiteSpace: 'nowrap' }}>
                  Shorten URL
                </GradientButton>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <div className="flex-grow h-px bg-gray-200" />
                <span>Optional</span>
                <div className="flex-grow h-px bg-gray-200" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <TextField
                  type="text"
                  value={customAlias}
                  onChange={e => setCustomAlias(e.target.value)}
                  placeholder="Custom alias (optional)"
                  variant="outlined"
                  fullWidth
                  sx={{ background: '#f8fafc', borderRadius: 2 }}
                  inputProps={{ style: { fontSize: 16 } }}
                />
                <FormControl fullWidth sx={{ background: '#f8fafc', borderRadius: 2 }}>
                  <InputLabel>Never expire</InputLabel>
                  <Select
                    value={expiration}
                    onChange={e => setExpiration(e.target.value)}
                    label="Never expire"
                  >
                    <MenuItem value="">Never expire</MenuItem>
                    <MenuItem value="1h">1 hour</MenuItem>
                    <MenuItem value="1d">1 day</MenuItem>
                    <MenuItem value="1w">1 week</MenuItem>
                    <MenuItem value="1m">1 month</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </form>
          </div>
        </section>

        {/* Features */}
        <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="rounded-xl shadow-sm p-6 flex flex-col gap-2" style={{ backgroundColor: '#ebedef' }}>
            <div className="text-blue-500 mb-2"><Zap size={28} /></div>
            <h3 className="font-semibold text-lg mb-1" style={{ color: '#273746' }}>Lightning Fast</h3>
            <p className="text-sm" style={{ color: '#273746' }}>Our links redirect instantly with minimal latency, ensuring the best user experience.</p>
          </div>
          <div className="rounded-xl shadow-sm p-6 flex flex-col gap-2" style={{ backgroundColor: '#ebedef' }}>
            <div className="text-purple-500 mb-2"><PieChart size={28} /></div>
            <h3 className="font-semibold text-lg mb-1" style={{ color: '#273746' }}>Detailed Analytics</h3>
            <p className="text-sm" style={{ color: '#273746' }}>Track clicks, locations, devices, and more to understand your audience better.</p>
          </div>
          <div className="rounded-xl shadow-sm p-6 flex flex-col gap-2" style={{ backgroundColor: '#ebedef' }}>
            <div className="text-pink-500 mb-2"><Shield size={28} /></div>
            <h3 className="font-semibold text-lg mb-1" style={{ color: '#273746' }}>Secure Links</h3>
            <p className="text-sm" style={{ color: '#273746' }}>Our links are protected against spam and malware to keep your users safe.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
            </div>
            <div className="flex gap-6 text-gray-500">
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="GitHub"><Github size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="Discord"><MessageCircle size={20} /></a>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-700 mb-8">
            <div>
              <div className="font-semibold text-gray-500 mb-3 uppercase tracking-wider">Product</div>
              <ul className="space-y-2">
                <li><a href="/features" className="text-orange-600 hover:text-orange-800">Features</a></li>
                <li><a href="/pricing" className="text-orange-600 hover:text-orange-800">Pricing</a></li>
                <li><a href="/api" className="text-orange-600 hover:text-orange-800">API</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Integrations</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-500 mb-3 uppercase tracking-wider">Company</div>
              <ul className="space-y-2">
                <li><a href="/about" className="text-orange-600 hover:text-orange-800">About</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Blog</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Careers</a></li>
                <li><a href="/about" className="text-orange-600 hover:text-orange-800">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-500 mb-3 uppercase tracking-wider">Legal</div>
              <ul className="space-y-2">
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Privacy</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Terms</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Cookie Policy</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">GDPR</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-gray-500 mb-3 uppercase tracking-wider">Resources</div>
              <ul className="space-y-2">
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Documentation</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Guides</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Support</a></li>
                <li><a href="#" className="text-orange-600 hover:text-orange-800">Community</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-xs">© 2025 All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
} 