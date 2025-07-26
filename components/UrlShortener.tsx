'use client'

import { useState } from 'react'
import { Copy, Check, QrCode, BarChart3 } from 'lucide-react'
import { Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material'
import { QRCodeSVG } from 'qrcode.react'
import toast from 'react-hot-toast'

export default function UrlShortener() {
  const [originalUrl, setOriginalUrl] = useState('')
  const [customAlias, setCustomAlias] = useState('')
  const [expiration, setExpiration] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [copied, setCopied] = useState(false)
  const [clickCount, setClickCount] = useState(0)

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

  return (
    <section className="max-w-2xl w-full mx-auto mb-20">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              type="url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="Paste your long URL here..."
              variant="outlined"
              fullWidth
              required
              className="flex-grow"
            />
            <Button
              type="submit"
              variant="contained"
              className="btn-gradient text-white px-6 py-3 font-medium"
              sx={{
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.4)',
                }
              }}
            >
              Shorten URL
            </Button>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex-grow max-w-xs mx-2 hidden md:block">
              <div className="h-px bg-gray-200"></div>
            </div>
            <span className="text-gray-400 text-sm px-2">Optional</span>
            <div className="flex-grow max-w-xs mx-2 hidden md:block">
              <div className="h-px bg-gray-200"></div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <TextField
              type="text"
              value={customAlias}
              onChange={(e) => setCustomAlias(e.target.value)}
              placeholder="Custom alias (optional)"
              variant="outlined"
              fullWidth
              className="flex-grow"
            />
            <FormControl fullWidth className="md:w-48">
              <InputLabel>Expiration</InputLabel>
              <Select
                value={expiration}
                onChange={(e) => setExpiration(e.target.value)}
                label="Expiration"
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

        {showResult && (
          <div className="mt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <TextField
                type="text"
                value={shortenedUrl}
                variant="outlined"
                fullWidth
                InputProps={{
                  readOnly: true,
                  className: "font-mono text-blue-600"
                }}
              />
              <Button
                onClick={handleCopy}
                variant="contained"
                className="copy-btn"
                startIcon={copied ? <Check size={20} /> : <Copy size={20} />}
              >
                {copied ? 'Copied!' : 'Copy URL'}
              </Button>
            </div>
            
            <div className="mt-4 flex justify-between text-sm text-gray-500">
              <span>{clickCount} clicks</span>
              <span>{getExpiryText()}</span>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Button
                onClick={() => setShowQR(!showQR)}
                variant="outlined"
                startIcon={<QrCode size={20} />}
                className="mr-2"
              >
                QR Code
              </Button>
              <Button
                onClick={() => toast('Analytics dashboard would appear here')}
                variant="outlined"
                startIcon={<BarChart3 size={20} />}
              >
                View Analytics
              </Button>
            </div>
            
            {showQR && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg flex justify-center">
                <QRCodeSVG value={shortenedUrl} size={200} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
} 