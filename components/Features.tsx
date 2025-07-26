'use client'

import { Zap, PieChart, Shield } from 'lucide-react'

const features = [
  {
    icon: <Zap className="text-blue-600" size={32} />,
    title: "Lightning Fast",
    description: "Our links redirect instantly with minimal latency, ensuring the best user experience."
  },
  {
    icon: <PieChart className="text-purple-600" size={32} />,
    title: "Detailed Analytics",
    description: "Track clicks, locations, devices, and more to understand your audience better."
  },
  {
    icon: <Shield className="text-pink-600" size={32} />,
    title: "Secure Links",
    description: "Our links are protected against spam and malware to keep your users safe."
  }
]

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      {features.map((feature, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-3xl">
            {feature.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </section>
  )
} 