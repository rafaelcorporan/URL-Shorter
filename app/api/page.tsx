'use client'

import { useState } from 'react'
import { Copy, Check, Code, Zap, Shield, Database, Globe, Terminal, BookOpen, Download, Play } from 'lucide-react'
import { Button, Card, CardContent, Typography, Chip, Tabs, Tab, Box } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const endpoints = [
  {
    method: 'POST',
    path: '/api/shorten',
    description: 'Create a new short link',
    parameters: [
      { name: 'url', type: 'string', required: true, description: 'The original URL to shorten' },
      { name: 'custom_alias', type: 'string', required: false, description: 'Custom alias for the short link' },
      { name: 'expires_at', type: 'string', required: false, description: 'Expiration date (ISO 8601)' }
    ],
    response: {
      success: {
        short_url: 'https://short.ly/abc123',
        original_url: 'https://example.com/very-long-url',
        alias: 'abc123',
        created_at: '2024-01-15T10:30:00Z',
        expires_at: null
      }
    }
  },
  {
    method: 'GET',
    path: '/api/links',
    description: 'Get all links for authenticated user',
    parameters: [
      { name: 'page', type: 'number', required: false, description: 'Page number (default: 1)' },
      { name: 'limit', type: 'number', required: false, description: 'Items per page (default: 20)' }
    ],
    response: {
      links: [
        {
          id: '1',
          short_url: 'https://short.ly/abc123',
          original_url: 'https://example.com/very-long-url',
          clicks: 1250,
          created_at: '2024-01-15T10:30:00Z'
        }
      ],
      pagination: {
        page: 1,
        limit: 20,
        total: 150,
        pages: 8
      }
    }
  },
  {
    method: 'GET',
    path: '/api/links/{alias}/stats',
    description: 'Get analytics for a specific link',
    parameters: [
      { name: 'alias', type: 'string', required: true, description: 'The short link alias' },
      { name: 'period', type: 'string', required: false, description: 'Time period (day, week, month, year)' }
    ],
    response: {
      alias: 'abc123',
      total_clicks: 1250,
      unique_clicks: 980,
      countries: [
        { country: 'US', clicks: 450 },
        { country: 'UK', clicks: 230 }
      ],
      devices: [
        { device: 'mobile', clicks: 680 },
        { device: 'desktop', clicks: 570 }
      ]
    }
  },
  {
    method: 'DELETE',
    path: '/api/links/{alias}',
    description: 'Delete a short link',
    parameters: [
      { name: 'alias', type: 'string', required: true, description: 'The short link alias to delete' }
    ],
    response: {
      success: true,
      message: 'Link deleted successfully'
    }
  }
]

const codeExamples = {
  javascript: `// Create a short link
const response = await fetch('https://api.short.ly/v1/shorten', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    url: 'https://example.com/very-long-url',
    custom_alias: 'my-link'
  })
});

const data = await response.json();
console.log(data.short_url);`,

  python: `import requests

# Create a short link
response = requests.post(
    'https://api.short.ly/v1/shorten',
    headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    },
    json={
        'url': 'https://example.com/very-long-url',
        'custom_alias': 'my-link'
    }
)

data = response.json()
print(data['short_url'])`,

  curl: `# Create a short link
curl -X POST https://api.short.ly/v1/shorten \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "url": "https://example.com/very-long-url",
    "custom_alias": "my-link"
  }'`,

  php: `<?php
// Create a short link
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.short.ly/v1/shorten');
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'url' => 'https://example.com/very-long-url',
    'custom_alias' => 'my-link'
]));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer YOUR_API_KEY'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$data = json_decode($response, true);
echo $data['short_url'];
curl_close($ch);
?>`
}

const sdks = [
  {
    name: 'JavaScript/Node.js',
    icon: <Code size={24} />,
    description: 'Official SDK for JavaScript and Node.js',
    install: 'npm install @shortly/sdk',
    color: '#F7DF1E'
  },
  {
    name: 'Python',
    icon: <Code size={24} />,
    description: 'Official SDK for Python',
    install: 'pip install shortly-sdk',
    color: '#3776AB'
  },
  {
    name: 'PHP',
    icon: <Code size={24} />,
    description: 'Official SDK for PHP',
    install: 'composer require shortly/sdk',
    color: '#777BB4'
  },
  {
    name: 'Ruby',
    icon: <Code size={24} />,
    description: 'Official SDK for Ruby',
    install: 'gem install shortly-sdk',
    color: '#CC342D'
  }
]

export default function ApiPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState('javascript')

  const handleCopyCode = async (code: string, language: string) => {
    try {
      await navigator.clipboard.writeText(code)
      setCopiedCode(language)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return '#10B981'
      case 'POST': return '#3B82F6'
      case 'PUT': return '#F59E0B'
      case 'DELETE': return '#EF4444'
      default: return '#6B7280'
    }
  }

  return (
    <div className="min-h-screen bg-white">
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
            <Button variant="text" sx={{ color: '#ebedef', fontWeight: 500, textTransform: 'none', display: { xs: 'none', md: 'inline-flex' } }}>Login</Button>
            <Button sx={{ bgcolor: '#E65100', color: 'white', fontWeight: 500, textTransform: 'none', display: { xs: 'none', md: 'inline-flex' }, px: 2.5, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#FF9800' } }}>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Powerful{' '}
            <span className="gradient-text">API</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Integrate link shortening into your applications with our comprehensive REST API.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Chip icon={<Zap size={16} />} label="RESTful API" color="primary" />
            <Chip icon={<Shield size={16} />} label="OAuth 2.0" color="primary" />
            <Chip icon={<Database size={16} />} label="JSON Responses" color="primary" />
            <Chip icon={<Globe size={16} />} label="Global CDN" color="primary" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              startIcon={<BookOpen size={20} />}
              sx={{
                bgcolor: '#E65100',
                color: 'white',
                fontWeight: 600,
                px: 4,
                py: 2,
                '&:hover': { bgcolor: '#FF9800' }
              }}
              component={Link}
              href="/api/documentation"
            >
              View Documentation
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download size={20} />}
              sx={{
                borderColor: '#E65100',
                color: '#E65100',
                fontWeight: 600,
                px: 4,
                py: 2,
                '&:hover': {
                  borderColor: '#FF9800',
                  bgcolor: 'rgba(230, 81, 0, 0.04)'
                }
              }}
            >
              Download SDK
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} className="mb-8">
          <Tab label="Quick Start" style={{ color: activeTab === 0 ? undefined : '#f2f4f4' }} />
          <Tab label="Endpoints" style={{ color: activeTab === 1 ? undefined : '#f2f4f4' }} />
          <Tab label="SDKs" style={{ color: activeTab === 2 ? undefined : '#f2f4f4' }} />
          <Tab label="Examples" style={{ color: activeTab === 3 ? undefined : '#f2f4f4' }} />
        </Tabs>

        {/* Quick Start */}
        {activeTab === 0 && (
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <Typography variant="h4" className="font-bold mb-6">Get Started in Minutes</Typography>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Terminal size={24} className="text-orange-600" />
                    </div>
                    <Typography variant="h6" className="font-semibold mb-2">1. Get API Key</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Sign up and get your API key from the dashboard
                    </Typography>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Code size={24} className="text-orange-600" />
                    </div>
                    <Typography variant="h6" className="font-semibold mb-2">2. Make Request</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Use our REST API to create and manage links
                    </Typography>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play size={24} className="text-orange-600" />
                    </div>
                    <Typography variant="h6" className="font-semibold mb-2">3. Start Using</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Integrate short links into your application
                    </Typography>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Typography variant="h6" className="text-white">Quick Example</Typography>
                    <Button
                      size="small"
                      startIcon={copiedCode === 'quick' ? <Check size={16} /> : <Copy size={16} />}
                      onClick={() => handleCopyCode(codeExamples.curl, 'quick')}
                      sx={{ color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
                    >
                      {copiedCode === 'quick' ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{codeExamples.curl}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Endpoints */}
        {activeTab === 1 && (
          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Chip
                      label={endpoint.method}
                      sx={{
                        bgcolor: getMethodColor(endpoint.method),
                        color: 'white',
                        fontWeight: 600
                      }}
                    />
                    <Typography variant="h6" className="font-mono">
                      {endpoint.path}
                    </Typography>
                  </div>
                  
                  <Typography variant="body1" className="mb-4">
                    {endpoint.description}
                  </Typography>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <Typography variant="h6" className="font-semibold mb-3">Parameters</Typography>
                      <div className="space-y-2">
                        {endpoint.parameters.map((param, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Chip
                              label={param.required ? 'Required' : 'Optional'}
                              size="small"
                              color={param.required ? 'error' : 'default'}
                            />
                            <div>
                              <Typography variant="body2" className="font-mono">
                                {param.name}: {param.type}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                {param.description}
                              </Typography>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Typography variant="h6" className="font-semibold mb-3">Response</Typography>
                      <div className="bg-gray-50 rounded p-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* SDKs */}
        {activeTab === 2 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Typography variant="h4" className="font-bold mb-4">Official SDKs</Typography>
              <Typography variant="body1" color="textSecondary">
                Use our official SDKs to integrate quickly and easily
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sdks.map((sdk, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div style={{ color: sdk.color }}>{sdk.icon}</div>
                      <div>
                        <Typography variant="h6" className="font-semibold">
                          {sdk.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {sdk.description}
                        </Typography>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded p-3 mb-4">
                      <pre className="text-green-400 text-sm">
                        <code>{sdk.install}</code>
                      </pre>
                    </div>

                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{
                        borderColor: '#E65100',
                        color: '#E65100',
                        '&:hover': {
                          borderColor: '#FF9800',
                          bgcolor: 'rgba(230, 81, 0, 0.04)'
                        }
                      }}
                      component={Link}
                      href="/api/documentation"
                    >
                      View Documentation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Examples */}
        {activeTab === 3 && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Typography variant="h4" className="font-bold mb-4">Code Examples</Typography>
              <Typography variant="body1" color="textSecondary" style={{ color: '#f2f4f4' }}>
                See how to use our API in different programming languages
              </Typography>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.keys(codeExamples).map((lang) => (
                <Button
                  key={lang}
                  variant={selectedLanguage === lang ? "contained" : "outlined"}
                  onClick={() => setSelectedLanguage(lang)}
                  sx={{
                    bgcolor: selectedLanguage === lang ? '#E65100' : 'transparent',
                    color: selectedLanguage === lang ? 'white' : '#E65100',
                    borderColor: '#E65100',
                    textTransform: 'capitalize',
                    '&:hover': {
                      bgcolor: selectedLanguage === lang ? '#FF9800' : '#E65100',
                      color: 'white'
                    }
                  }}
                >
                  {lang}
                </Button>
              ))}
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Typography variant="h6" className="font-semibold">
                    Create a Short Link - {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
                  </Typography>
                  <Button
                    startIcon={copiedCode === selectedLanguage ? <Check size={16} /> : <Copy size={16} />}
                    onClick={() => handleCopyCode(codeExamples[selectedLanguage as keyof typeof codeExamples], selectedLanguage)}
                    sx={{
                      color: '#E65100',
                      '&:hover': { bgcolor: 'rgba(230, 81, 0, 0.04)' }
                    }}
                  >
                    {copiedCode === selectedLanguage ? 'Copied!' : 'Copy Code'}
                  </Button>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-6">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{codeExamples[selectedLanguage as keyof typeof codeExamples]}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
} 