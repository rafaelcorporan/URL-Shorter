'use client'

import Image from 'next/image'
import { Twitter, Github, Linkedin, MessageCircle } from 'lucide-react'

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

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={120} 
              height={48} 
              className="mr-2"
            />
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                {category}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 