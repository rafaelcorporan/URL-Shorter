'use client'

import { useState } from 'react'
import { Code, Globe, Smartphone, Database, Zap, Shield } from 'lucide-react'
import { Button, Card, CardContent, Typography, Chip, Tabs, Tab, Box } from '@mui/material'
import Image from 'next/image'
import VideoPlayer from '../../components/VideoPlayer'

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    video: {
      webm: "/videos/ecommerce-demo.webm",
      mp4: "/videos/ecommerce-demo.mp4",
      poster: "/images/ecommerce-poster.jpg"
    },
    features: ["User authentication", "Product catalog", "Shopping cart", "Payment processing", "Admin dashboard"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with social features.",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    video: {
      webm: "/videos/fitness-app-demo.webm",
      mp4: "/videos/fitness-app-demo.mp4",
      poster: "/images/fitness-poster.jpg"
    },
    features: ["Workout tracking", "Nutrition logging", "Social features", "Progress analytics", "Push notifications"],
    liveUrl: "https://fitness-app.com",
    githubUrl: "https://github.com/yourusername/fitness-app"
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot powered by machine learning for customer support and automated responses.",
    category: "ai",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL"],
    video: {
      webm: "/videos/ai-chat-demo.webm",
      mp4: "/videos/ai-chat-demo.mp4",
      poster: "/images/ai-chat-poster.jpg"
    },
    features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training"],
    liveUrl: "https://ai-chat-demo.com",
    githubUrl: "https://github.com/yourusername/ai-chat"
  },
  {
    id: 4,
    title: "Real-time Dashboard",
    description: "Interactive dashboard for monitoring system metrics, user analytics, and business intelligence.",
    category: "web",
    technologies: ["Vue.js", "D3.js", "WebSocket", "Redis"],
    video: {
      webm: "/videos/dashboard-demo.webm",
      mp4: "/videos/dashboard-demo.mp4",
      poster: "/images/dashboard-poster.jpg"
    },
    features: ["Real-time updates", "Interactive charts", "Data filtering", "Export functionality", "Responsive design"],
    liveUrl: "https://dashboard-demo.com",
    githubUrl: "https://github.com/yourusername/dashboard"
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description: "Secure cryptocurrency wallet with multi-chain support and DeFi integration capabilities.",
    category: "blockchain",
    technologies: ["Solidity", "Web3.js", "React", "MetaMask"],
    video: {
      webm: "/videos/wallet-demo.webm",
      mp4: "/videos/wallet-demo.mp4",
      poster: "/images/wallet-poster.jpg"
    },
    features: ["Multi-chain support", "Secure key management", "DeFi integration", "Transaction history", "Portfolio tracking"],
    liveUrl: "https://wallet-demo.com",
    githubUrl: "https://github.com/yourusername/wallet"
  },
  {
    id: 6,
    title: "IoT Smart Home",
    description: "Internet of Things platform for home automation with sensor monitoring and device control.",
    category: "iot",
    technologies: ["Python", "MQTT", "Raspberry Pi", "React"],
    video: {
      webm: "/videos/smart-home-demo.webm",
      mp4: "/videos/smart-home-demo.mp4",
      poster: "/images/smart-home-poster.jpg"
    },
    features: ["Device automation", "Sensor monitoring", "Mobile app control", "Energy optimization", "Security alerts"],
    liveUrl: "https://smart-home-demo.com",
    githubUrl: "https://github.com/yourusername/smart-home"
  }
]

const categories = [
  { value: 'all', label: 'All Projects', icon: <Code size={20} /> },
  { value: 'web', label: 'Web Apps', icon: <Globe size={20} /> },
  { value: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={20} /> },
  { value: 'ai', label: 'AI/ML', icon: <Zap size={20} /> },
  { value: 'blockchain', label: 'Blockchain', icon: <Shield size={20} /> },
  { value: 'iot', label: 'IoT', icon: <Database size={20} /> }
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTab, setSelectedTab] = useState(0)

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  )

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue)
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue)
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
            <a href="/features" className="hover:text-orange-600">Features</a>
            <a href="/pricing" className="hover:text-orange-600">Pricing</a>
            <a href="/api" className="hover:text-orange-600">API</a>
            <a href="/about" className="hover:text-orange-600">About</a>
          </nav>
          <div className="flex gap-2 items-center">
            <Button variant="text" sx={{ color: '#6B7280', fontWeight: 500, textTransform: 'none', display: { xs: 'none', md: 'inline-flex' } }}>Login</Button>
            <Button sx={{ bgcolor: '#E65100', color: 'white', fontWeight: 500, textTransform: 'none', display: { xs: 'none', md: 'inline-flex' }, px: 2.5, py: 1.5, borderRadius: 2, '&:hover': { bgcolor: '#FF9800' } }}>Sign Up</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Showcasing my recent projects and technical expertise across various domains.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Chip
                key={category.value}
                icon={category.icon}
                label={category.label}
                onClick={(e) => handleCategoryChange(e, category.value)}
                sx={{
                  bgcolor: selectedCategory === category.value ? '#E65100' : '#f3f4f6',
                  color: selectedCategory === category.value ? 'white' : '#374151',
                  '&:hover': {
                    bgcolor: selectedCategory === category.value ? '#FF9800' : '#e5e7eb'
                  }
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                {/* Video Player */}
                <VideoPlayer
                  title={project.title}
                  description={project.description}
                  webmSrc={project.video.webm}
                  mp4Src={project.video.mp4}
                  poster={project.video.poster}
                />

                {/* Project Details */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#f3f4f6',
                          color: '#374151',
                          fontSize: '0.75rem'
                        }}
                      />
                    ))}
                  </div>

                  <Tabs value={selectedTab} onChange={handleTabChange} sx={{ mb: 3 }}>
                    <Tab label="Features" />
                    <Tab label="Links" />
                  </Tabs>

                  <Box role="tabpanel" hidden={selectedTab !== 0}>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Box>

                  <Box role="tabpanel" hidden={selectedTab !== 1}>
                    <div className="space-y-3">
                      <Button
                        variant="outlined"
                        fullWidth
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          borderColor: '#E65100',
                          color: '#E65100',
                          '&:hover': {
                            borderColor: '#FF9800',
                            bgcolor: 'rgba(230, 81, 0, 0.04)'
                          }
                        }}
                      >
                        View Live Demo
                      </Button>
                      <Button
                        variant="text"
                        fullWidth
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#6B7280',
                          '&:hover': {
                            color: '#E65100',
                            bgcolor: 'rgba(230, 81, 0, 0.04)'
                          }
                        }}
                      >
                        View Source Code
                      </Button>
                    </div>
                  </Box>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Code size={64} className="mx-auto text-gray-400 mb-4" />
            <Typography variant="h5" className="text-gray-600 mb-2">
              No projects found
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Try selecting a different category to see more projects.
            </Typography>
          </div>
        )}
      </section>
    </div>
  )
} 