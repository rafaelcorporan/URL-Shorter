import { redirect } from 'next/navigation'

interface PageProps {
  params: {
    shortCode: string
  }
}

export function generateStaticParams() {
  // For static export, we'll generate a few demo short codes
  return [
    { shortCode: 'demo' },
    { shortCode: 'example' },
    { shortCode: 'test' },
  ]
}

export default async function ShortUrlPage({ params }: PageProps) {
  const { shortCode } = params

  // In a real application, you would:
  // 1. Look up the shortCode in your database
  // 2. Check if the URL has expired
  // 3. Increment the click count
  // 4. Redirect to the original URL

  // For now, we'll redirect to a demo URL
  const demoUrl = 'https://example.com'
  
  // Simulate a small delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 100))

  redirect(demoUrl)
} 