'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={120} 
            height={48} 
            className="mr-2"
          />
        </div>
        
        <nav className={`hidden md:flex space-x-8 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">Features</a>
          <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">Pricing</a>
          <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">API</a>
          <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">About</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900 font-medium">
            Login
          </button>
          <button className="px-4 py-2 bg-orange-700 text-white rounded-lg hover:bg-orange-800 font-medium transition-colors duration-200">
            Sign Up
          </button>
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">Features</a>
            <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">Pricing</a>
            <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">API</a>
            <a href="#" className="text-orange-600 hover:text-orange-800 font-medium">About</a>
            <button className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium text-left">
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  )
} 