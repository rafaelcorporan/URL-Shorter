'use client'

import { useState } from 'react'
import { ArrowRight, Zap, BarChart3, Shield, Link, Users, Globe, Clock, Target, TrendingUp, Lock, Eye, QrCode, Calendar, Smartphone, Check, X } from 'lucide-react'
import { Button, Card, CardContent, Typography, Grid, Box, Chip } from '@mui/material'
import Image from 'next/image'

const features = [
  {
    icon: <Zap size={32} />,
    title: "Lightning Fast",
    description: "Our links redirect instantly with minimal latency, ensuring the best user experience.",
    color: "#3B82F6",
    details: ["99.9% uptime", "Global CDN", "Instant redirects", "Mobile optimized"]
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Detailed Analytics",
    description: "Track clicks, locations, devices, and more to understand your audience better.",
    color: "#8B5CF6",
    details: ["Real-time tracking", "Geographic data", "Device analytics", "Referrer tracking"]
  },
  {
    icon: <Shield size={32} />,
    title: "Secure Links",
    description: "Our links are protected against spam and malware to keep your users safe.",
    color: "#EC4899",
    details: ["Malware protection", "Spam filtering", "SSL encryption", "Safe browsing"]
  },
  {
    icon: <QrCode size={32} />,
    title: "QR Code Generation",
    description: "Automatically generate QR codes for your short links to share offline and in print.",
    color: "#059669",
    details: ["Auto-generated QR codes", "Customizable design", "High resolution", "Download in multiple formats"]
  },
  {
    icon: <Link size={32} />,
    title: "Custom Domains",
    description: "Use your own domain for branded, professional short links.",
    color: "#10B981",
    details: ["Custom branding", "Domain verification", "SSL certificates", "DNS management"]
  },
  {
    icon: <Users size={32} />,
    title: "Team Collaboration",
    description: "Work together with your team to manage and track link performance.",
    color: "#F59E0B",
    details: ["Team roles", "Shared links", "Collaborative analytics", "Permission management"]
  },
  {
    icon: <Globe size={32} />,
    title: "Global Reach",
    description: "Reach audiences worldwide with our global infrastructure.",
    color: "#EF4444",
    details: ["200+ countries", "Local servers", "Language support", "Regional analytics"]
  },
  {
    icon: <Calendar size={32} />,
    title: "Link Expiration",
    description: "Set automatic expiration dates for your links to maintain control and security.",
    color: "#7C3AED",
    details: ["Custom expiration dates", "Automatic deactivation", "Scheduled campaigns", "Temporary links"]
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Optimization",
    description: "Perfect mobile experience with responsive design and mobile-specific features.",
    color: "#DC2626",
    details: ["Mobile-first design", "Touch-friendly interface", "App-like experience", "Offline support"]
  }
]

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Up to 100 links per month",
      "Basic analytics",
      "Standard support",
      "Link expiration"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    features: [
      "Unlimited links",
      "Advanced analytics",
      "Custom domains",
      "Priority support",
      "API access",
      "Team collaboration"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Pro",
      "White-label solution",
      "Dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee"
    ],
    popular: false
  }
]

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState('overview')

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
            Powerful Features for{' '}
            <span className="gradient-text">Modern Link Management</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Everything you need to create, manage, and track your links with enterprise-grade reliability.
          </p>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-lg p-1">
              {['overview', 'analytics', 'security', 'pricing'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-md font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-white text-orange-600 shadow-sm'
                      : ''
                  }`}
                  style={{ color: activeTab === tab ? undefined : '#212f3d' }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {activeTab === 'overview' && (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg mr-4" style={{ backgroundColor: `${feature.color}20` }}>
                        <div style={{ color: feature.color }}>{feature.icon}</div>
                      </div>
                      <Typography variant="h6" className="font-semibold">
                        {feature.title}
                      </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" className="mb-4">
                      {feature.description}
                    </Typography>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <ArrowRight size={16} className="mr-2 text-orange-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'analytics' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Comprehensive Analytics</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get deep insights into your link performance with our advanced analytics dashboard.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: <Eye size={24} />, label: "Total Clicks", value: "2.4M", change: "+12%" },
                { icon: <Target size={24} />, label: "Unique Visitors", value: "890K", change: "+8%" },
                { icon: <Globe size={24} />, label: "Countries", value: "156", change: "+3" },
                { icon: <TrendingUp size={24} />, label: "Conversion Rate", value: "3.2%", change: "+0.5%" }
              ].map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-orange-500 mb-3 flex justify-center">{stat.icon}</div>
                    <Typography variant="h4" className="font-bold mb-1">{stat.value}</Typography>
                    <Typography variant="body2" color="textSecondary" className="mb-2">{stat.label}</Typography>
                    <Chip label={stat.change} size="small" color="success" />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Typography variant="h6" className="mb-4">Top Performing Links</Typography>
                  {[
                    { name: "Summer Sale", clicks: "45.2K", growth: "+23%" },
                    { name: "Product Launch", clicks: "32.1K", growth: "+18%" },
                    { name: "Newsletter", clicks: "28.7K", growth: "+12%" },
                    { name: "Social Media", clicks: "24.3K", growth: "+9%" }
                  ].map((link, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <Typography variant="body1" className="font-medium">{link.name}</Typography>
                        <Typography variant="body2" color="textSecondary">{link.clicks} clicks</Typography>
                      </div>
                      <Chip label={link.growth} size="small" color="success" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Typography variant="h6" className="mb-4">Geographic Distribution</Typography>
                  {[
                    { country: "United States", percentage: "35%", clicks: "840K" },
                    { country: "United Kingdom", percentage: "18%", clicks: "432K" },
                    { country: "Germany", percentage: "12%", clicks: "288K" },
                    { country: "Canada", percentage: "8%", clicks: "192K" },
                    { country: "Others", percentage: "27%", clicks: "648K" }
                  ].map((geo, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                      <div>
                        <Typography variant="body1" className="font-medium">{geo.country}</Typography>
                        <Typography variant="body2" color="textSecondary">{geo.clicks} clicks</Typography>
                      </div>
                      <Typography variant="body1" className="font-semibold text-orange-600">{geo.percentage}</Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'security' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your links and data are protected with industry-leading security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Lock size={32} className="text-green-500 mr-4" />
                    <Typography variant="h6">SSL Encryption</Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    All links are served over HTTPS with 256-bit SSL encryption to ensure secure data transmission.
                  </Typography>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-green-500" />
                      End-to-end encryption
                    </li>
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-green-500" />
                      Certificate transparency
                    </li>
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-green-500" />
                      HSTS compliance
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield size={32} className="text-blue-500 mr-4" />
                    <Typography variant="h6">Malware Protection</Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary" className="mb-4">
                    Real-time scanning and blocking of malicious URLs to protect your users from threats.
                  </Typography>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-blue-500" />
                      Real-time threat detection
                    </li>
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-blue-500" />
                      Automated blocking
                    </li>
                    <li className="flex items-center text-sm">
                      <ArrowRight size={16} className="mr-2 text-blue-500" />
                      Threat intelligence feeds
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>
        )}

        {activeTab === 'pricing' && (
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. All plans include our core features.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
              {[
                {
                  name: "Free",
                  price: { monthly: 0 },
                  description: "Perfect for getting started",
                  features: [
                    { text: "Up to 100 links per month", included: true },
                    { text: "Basic analytics", included: true },
                    { text: "Standard support", included: true },
                    { text: "Link expiration", included: true },
                    { text: "Custom aliases", included: false },
                    { text: "API access", included: false },
                    { text: "Custom domains", included: false },
                    { text: "Team collaboration", included: false },
                    { text: "Advanced security", included: false },
                    { text: "Priority support", included: false }
                  ],
                  popular: false,
                  color: "#6B7280"
                },
                {
                  name: "Pro",
                  price: { monthly: 9 },
                  description: "For professionals and growing teams",
                  features: [
                    { text: "Unlimited links", included: true },
                    { text: "Advanced analytics", included: true },
                    { text: "Custom domains", included: true },
                    { text: "API access", included: true },
                    { text: "Team collaboration", included: true },
                    { text: "Priority support", included: true },
                    { text: "Link expiration", included: true },
                    { text: "Custom aliases", included: true },
                    { text: "Advanced security", included: false },
                    { text: "White-label solution", included: false }
                  ],
                  popular: true,
                  color: "#E65100"
                },
                {
                  name: "Enterprise",
                  price: { monthly: 29 },
                  description: "For large organizations",
                  features: [
                    { text: "Everything in Pro", included: true },
                    { text: "Advanced security", included: true },
                    { text: "White-label solution", included: true },
                    { text: "Dedicated support", included: true },
                    { text: "Custom integrations", included: true },
                    { text: "SLA guarantee", included: true },
                    { text: "Unlimited links", included: true },
                    { text: "Advanced analytics", included: true },
                    { text: "Custom domains", included: true },
                    { text: "API access", included: true }
                  ],
                  popular: false,
                  color: "#8B5CF6"
                }
              ].map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative flex flex-col cursor-pointer transition-all duration-300 min-h-[660px] md:scale-105 ${
                    plan.popular 
                      ? 'ring-2 ring-orange-500' 
                      : 'hover:shadow-lg'
                  } ${plan.popular ? 'pt-12' : 'pt-12'}`}
                >
                  <CardContent className={`${plan.popular ? 'pt-16 pb-12 px-12' : 'pt-16 pb-12 px-12'} flex-1 flex flex-col`}> 
                    <div className="text-center mb-6 flex flex-col items-center justify-center min-h-[80px]">
                      {plan.popular && (
                        <span
                          className="inline-block mb-2 px-4 py-1 rounded-full font-semibold text-white text-sm tracking-wide"
                          style={{ background: plan.color }}
                        >
                          Most Popular
                        </span>
                      )}
                      <Typography variant="h4" className="font-bold mb-2" style={{ color: plan.color }}>
                        {plan.name}
                      </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" className="mb-4">
                      {plan.description}
                    </Typography>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">
                        ${plan.price.monthly}
                      </span>
                      {plan.price.monthly > 0 && (
                        <span className="text-gray-500">
                          /month
                        </span>
                      )}
                    </div>
                    <ul className={`space-y-2.5 ${plan.popular ? 'mb-10' : 'mb-8'}`}>
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          {feature.included ? (
                            <Check size={16} className="mr-3 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X size={16} className="mr-3 text-gray-400 mt-0.5 flex-shrink-0" />
                          )}
                          <Typography 
                            variant="body2" 
                            className={`${feature.included ? 'text-gray-900' : 'text-gray-400'} leading-relaxed`}
                          >
                            {feature.text}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Button
                        variant={plan.popular ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                          bgcolor: plan.popular ? '#E65100' : 'transparent',
                          color: plan.popular ? 'white' : '#E65100',
                          borderColor: '#E65100',
                          '&:hover': {
                            bgcolor: plan.popular ? '#FF9800' : '#E65100',
                            color: 'white'
                          }
                        }}
                      >
                        {plan.price.monthly === 0 ? 'Get Started Free' : 'Get Started'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
} 