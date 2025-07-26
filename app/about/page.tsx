'use client'

import { useState } from 'react'
import { Users, Target, Heart, Award, Globe, Clock, Mail, Phone, MapPin, Linkedin, Twitter, Github, MessageCircle, Shield } from 'lucide-react'
import { Button, Card, CardContent, Typography, Grid, Box, Chip } from '@mui/material'
import Image from 'next/image'

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "/2.png",
    bio: "Former Google engineer with 10+ years in link management and analytics.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "/4.png",
    bio: "Expert in scalable infrastructure and API development.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    image: "/3.png",
    bio: "Product leader focused on user experience and growth.",
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    image: "/1.png",
    bio: "Full-stack developer specializing in performance optimization.",
    linkedin: "#",
    twitter: "#"
  }
]

const stats = [
  { icon: <Globe size={32} />, value: "50M+", label: "Links Created" },
  { icon: <Users size={32} />, value: "100K+", label: "Active Users" },
  { icon: <Clock size={32} />, value: "99.9%", label: "Uptime" },
  { icon: <Award size={32} />, value: "200+", label: "Countries Served" }
]

const values = [
  {
    icon: <Target size={32} />,
    title: "Innovation",
    description: "We constantly push the boundaries of what&apos;s possible in link management and analytics."
  },
  {
    icon: <Heart size={32} />,
    title: "User-First",
    description: "Every decision we make is driven by what&apos;s best for our users and their success."
  },
  {
    icon: <Shield size={32} />,
    title: "Security",
    description: "We prioritize the security and privacy of our users' data above everything else."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Reach",
    description: "We serve users worldwide with our global infrastructure and localized support."
  }
]

const timeline = [
  {
    year: "2024",
    title: "Series A Funding",
    description: "Raised $10M to accelerate product development and global expansion."
  },
  {
    year: "2023",
    title: "100K Users Milestone",
    description: "Reached 100,000 active users and launched enterprise features."
  },
  {
    year: "2022",
    title: "Product Launch",
    description: "Launched our URL shortener with advanced analytics and API access."
  },
  {
    year: "2021",
    title: "Company Founded",
    description: "Founded with a mission to simplify link management for everyone."
  }
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('story')

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
            About{' '}
            <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            We&apos;re on a mission to make link management simple, powerful, and accessible to everyone.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-orange-500 mb-3 flex justify-center">{stat.icon}</div>
                <Typography variant="h3" className="font-bold mb-1">{stat.value}</Typography>
                <Typography variant="body2" color="textSecondary" style={{ color: '#f2f4f4' }}>{stat.label}</Typography>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="max-w-7xl mx-auto px-4 mb-12">
        <div className="flex justify-center">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { id: 'story', label: 'Our Story' },
              { id: 'mission', label: 'Mission & Values' },
              { id: 'team', label: 'Team' },
              { id: 'contact', label: 'Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-orange-600 shadow-sm'
                    : ''
                }`}
                style={{ color: activeTab === tab.id ? undefined : '#212f3d' }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Our Story */}
        {activeTab === 'story' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-bold mb-4" style={{ color: '#f4f6f6' }}>Our Story</Typography>
              <Typography variant="body1" className="max-w-3xl mx-auto" style={{ color: '#f4f6f6' }}>
                From a simple idea to a global platform serving millions of users.
              </Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Typography variant="h4" className="font-bold mb-6" style={{ color: '#f4f6f6' }}>
                  Building the Future of Link Management
                </Typography>
                <Typography variant="body1" className="mb-4" style={{ color: '#f4f6f6' }}>
                  Founded in 2021, we started with a simple observation: link management was unnecessarily complex. 
                  Existing solutions were either too basic or too expensive, leaving many users without a proper solution.
                </Typography>
                <Typography variant="body1" className="mb-4" style={{ color: '#f4f6f6' }}>
                  Our team of engineers and product experts came together to build something different - a platform 
                  that combines simplicity with powerful features, making professional link management accessible to everyone.
                </Typography>
                <Typography variant="body1" style={{ color: '#f4f6f6' }}>
                  Today, we serve over 100,000 users across 200+ countries, helping businesses and individuals 
                  create, manage, and track their links with enterprise-grade reliability.
                </Typography>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <Typography variant="h5" className="font-bold mb-4">Our Journey</Typography>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-white text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {item.year}
                      </div>
                      <div>
                        <Typography variant="h6" className="font-semibold mb-1">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" className="opacity-90">
                          {item.description}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mission & Values */}
        {activeTab === 'mission' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-bold mb-4" style={{ color: '#f4f6f6' }}>Mission & Values</Typography>
              <Typography variant="body1" className="max-w-3xl mx-auto" style={{ color: '#f4f6f6' }}>
                Our core values guide everything we do, from product development to customer support.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="text-orange-500 mb-4 flex justify-center">{value.icon}</div>
                    <Typography variant="h5" className="font-semibold mb-3" style={{ color: '#212f3d' }}>
                      {value.title}
                    </Typography>
                    <Typography variant="body1" style={{ color: '#212f3d' }}>
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <CardContent className="p-12 text-center">
                <Typography variant="h4" className="font-bold mb-6">
                  Our Mission
                </Typography>
                <Typography variant="h6" className="mb-8 opacity-90 max-w-3xl mx-auto">
                  To democratize professional link management by making powerful tools accessible, 
                  affordable, and easy to use for everyone - from individuals to enterprise teams.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#E65100',
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    '&:hover': {
                      bgcolor: '#f3f4f6'
                    }
                  }}
                >
                  Join Our Mission
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team */}
        {activeTab === 'team' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-bold mb-4" style={{ color: '#f4f6f6' }}>Meet Our Team</Typography>
              <Typography variant="body1" className="max-w-3xl mx-auto" style={{ color: '#f4f6f6' }}>
                We&apos;re a diverse team of engineers, designers, and product experts passionate about 
                building the best link management platform.
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Image src={member.image} alt={member.name} width={96} height={96} className="rounded-full" />
                    </div>
                    <Typography variant="h6" className="font-semibold mb-1" style={{ color: '#212f3d' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" className="mb-3" style={{ color: '#212f3d' }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" className="mb-4" style={{ color: '#212f3d' }}>
                      {member.bio}
                    </Typography>
                    <div className="flex justify-center gap-2">
                      <Button size="small" sx={{ color: '#0077B5' }}>
                        <Linkedin size={16} />
                      </Button>
                      <Button size="small" sx={{ color: '#1DA1F2' }}>
                        <Twitter size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gray-50">
              <CardContent className="p-8 text-center">
                <Typography variant="h5" className="font-bold mb-4" style={{ color: '#212f3d' }}>
                  Join Our Team
                </Typography>
                <Typography variant="body1" className="mb-6" style={{ color: '#212f3d' }}>
                  We&apos;re always looking for talented individuals who share our passion for building great products.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: '#E65100',
                    color: 'white',
                    fontWeight: 600,
                    px: 6,
                    py: 2,
                    '&:hover': { bgcolor: '#FF9800' }
                  }}
                >
                  View Open Positions
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <Typography variant="h3" className="font-bold mb-4" style={{ color: '#f4f6f6' }}>Get in Touch</Typography>
              <Typography variant="body1" className="max-w-3xl mx-auto" style={{ color: '#f4f6f6' }}>
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </Typography>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <Typography variant="h4" className="font-bold mb-6" style={{ color: '#f4f6f6' }}>Contact Information</Typography>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Mail size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="font-semibold" style={{ color: '#f4f6f6' }}>Email</Typography>
                      <Typography variant="body1" style={{ color: '#f4f6f6' }}>
                        hello@yuupi.io
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Phone size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="font-semibold" style={{ color: '#f4f6f6' }}>Phone</Typography>
                      <Typography variant="body1" style={{ color: '#f4f6f6' }}>
                        +1 (307) 800-1809
                      </Typography>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <MapPin size={24} className="text-orange-600" />
                    </div>
                    <div>
                      <Typography variant="h6" className="font-semibold" style={{ color: '#f4f6f6' }}>Address</Typography>
                      <Typography variant="body1" style={{ color: '#f4f6f6' }}>
                        30 N GOULD ST STE R<br />
                        SHERIDAN WY 82801-6317 United States
                      </Typography>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Typography variant="h6" className="font-semibold mb-4">Follow Us</Typography>
                  <div className="flex gap-4">
                    <Button sx={{ color: '#1DA1F2' }}>
                      <Twitter size={20} />
                    </Button>
                    <Button sx={{ color: '#0077B5' }}>
                      <Linkedin size={20} />
                    </Button>
                    <Button sx={{ color: '#333' }}>
                      <Github size={20} />
                    </Button>
                    <Button sx={{ color: '#5865F2' }}>
                      <MessageCircle size={20} />
                    </Button>
                  </div>
                </div>
              </div>

              <Card>
                <CardContent className="p-8">
                  <Typography variant="h5" className="font-bold mb-6" style={{ color: '#212f3d' }}>Send us a Message</Typography>
                  
                  <div className="space-y-4">
                    <div>
                      <Typography variant="body2" className="font-medium mb-2" style={{ color: '#212f3d' }}>Name</Typography>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <Typography variant="body2" className="font-medium mb-2" style={{ color: '#212f3d' }}>Email</Typography>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <Typography variant="body2" className="font-medium mb-2" style={{ color: '#212f3d' }}>Subject</Typography>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                        <option>General Inquiry</option>
                        <option>Support</option>
                        <option>Sales</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                    
                    <div>
                      <Typography variant="body2" className="font-medium mb-2" style={{ color: '#212f3d' }}>Message</Typography>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your message..."
                      />
                    </div>
                    
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: '#E65100',
                        color: 'white',
                        fontWeight: 600,
                        py: 2,
                        '&:hover': { bgcolor: '#FF9800' }
                      }}
                    >
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 