'use client'

import { useState } from 'react'
import { Check, X, Star, Zap, Shield, Users, Globe, Code, Headphones, Crown } from 'lucide-react'
import { Button, Card, CardContent, Typography, Chip, Switch, FormControlLabel } from '@mui/material'
import Image from 'next/image'

const plans = [
  {
    name: "Free",
    price: { monthly: 0, yearly: 0 },
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
    price: { monthly: 9, yearly: 90 },
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
    price: { monthly: 29, yearly: 290 },
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
]

const features = [
  {
    name: "Link Management",
    icon: <Zap size={24} />,
    description: "Create, manage, and track unlimited short links"
  },
  {
    name: "Analytics & Insights",
    icon: <Globe size={24} />,
    description: "Comprehensive analytics to understand your audience"
  },
  {
    name: "Security & Compliance",
    icon: <Shield size={24} />,
    description: "Enterprise-grade security and compliance features"
  },
  {
    name: "Team Collaboration",
    icon: <Users size={24} />,
    description: "Work together with your team efficiently"
  },
  {
    name: "API & Integrations",
    icon: <Code size={24} />,
    description: "Powerful API and third-party integrations"
  },
  {
    name: "Premium Support",
    icon: <Headphones size={24} />,
    description: "Get help when you need it with priority support"
  }
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('Pro')

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
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
            <a href="/portfolio" className="text-orange-600 hover:text-orange-800">Portfolio</a>
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
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your needs. All plans include our core features.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-semibold`} style={{ color: !isYearly ? '#E65100' : '#6B7280' }}>Monthly</span>
            <Switch
              checked={isYearly}
              onChange={(e) => setIsYearly(e.target.checked)}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#E65100',
                  '&:hover': {
                    backgroundColor: 'rgba(230, 81, 0, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#E65100',
                },
              }}
            />
            <span className={`text-lg font-semibold`} style={{ color: isYearly ? '#E65100' : '#6B7280' }}>Yearly</span>
            {isYearly && (
              <Chip label="Save 17%" color="success" size="small" />
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative flex flex-col cursor-pointer transition-all duration-300 min-h-[660px] md:scale-105 ${
                selectedPlan === plan.name 
                  ? 'ring-2 ring-orange-500' 
                  : plan.popular 
                    ? 'ring-2 ring-orange-500' 
                    : 'hover:shadow-lg'
              } ${plan.popular ? 'pt-12' : 'pt-12'}`}
              onClick={() => handlePlanSelect(plan.name)}
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
                    ${isYearly ? plan.price.yearly : plan.price.monthly}
                  </span>
                  {plan.price.monthly > 0 && (
                    <span className="text-gray-500">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  )}
                </div>
                {isYearly && plan.price.monthly > 0 && (
                  <Typography variant="body2" color="textSecondary">
                    ${plan.price.monthly}/month when billed monthly
                  </Typography>
                )}
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
                    variant={selectedPlan === plan.name ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      bgcolor: selectedPlan === plan.name ? '#E65100' : 'transparent',
                      color: selectedPlan === plan.name ? 'white' : '#E65100',
                      borderColor: '#E65100',
                      '&:hover': {
                        bgcolor: selectedPlan === plan.name ? '#FF9800' : '#E65100',
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

        {/* Feature Comparison */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compare Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how our plans stack up against each other to find the perfect fit for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <Typography variant="h6" className="font-semibold mb-2">
                  {feature.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our pricing and plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              question: "Can I change my plan at any time?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
            },
            {
              question: "Is there a free trial?",
              answer: "Yes, all paid plans come with a 14-day free trial. No credit card required to start your trial."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise customers can also pay via invoice."
            },
            {
              question: "Can I cancel my subscription?",
              answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period."
            },
            {
              question: "Do you offer refunds?",
              answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, contact our support team for a full refund."
            },
            {
              question: "Is there a setup fee?",
              answer: "No, there are no setup fees for any of our plans. You only pay the advertised monthly or yearly price."
            }
          ].map((faq, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <Typography variant="h6" className="font-semibold mb-3">
                  {faq.question}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faq.answer}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-12">
              <Crown size={48} className="mx-auto mb-6 text-white" />
              <Typography variant="h3" className="font-bold mb-4">
                Ready to Get Started?
              </Typography>
              <Typography variant="h6" className="mb-8 opacity-90">
                Join thousands of users who trust us with their link management needs.
              </Typography>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#E65100',
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    '&:hover': {
                      bgcolor: '#f3f4f6'
                    }
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    '&:hover': {
                      borderColor: 'white',
                      bgcolor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Contact Sales
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
} 