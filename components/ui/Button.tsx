'use client'

import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export default function Button({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}: ButtonProps) {
  const baseClasses = "font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
  
  const variantClasses = {
    primary: "btn-gradient text-white hover:shadow-lg",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
  }
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <MuiButton
      className={twMerge(
        clsx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )
      )}
      {...props}
    >
      {children}
    </MuiButton>
  )
} 