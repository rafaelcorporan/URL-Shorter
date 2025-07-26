import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { originalUrl, customAlias, expiration } = body

    if (!originalUrl) {
      return NextResponse.json(
        { error: 'Original URL is required' },
        { status: 400 }
      )
    }

    // Validate URL
    try {
      new URL(originalUrl)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Generate short URL
    const domain = process.env.NEXT_PUBLIC_APP_URL || 'https://yuupi.gg'
    const randomString = Math.random().toString(36).substring(2, 8)
    const shortCode = customAlias || randomString
    const shortenedUrl = `${domain}/${shortCode}`

    // In a real application, you would:
    // 1. Check if custom alias is available
    // 2. Store the URL in a database
    // 3. Set up expiration logic
    // 4. Return analytics tracking

    return NextResponse.json({
      success: true,
      originalUrl,
      shortenedUrl,
      shortCode,
      expiration: expiration || null,
      createdAt: new Date().toISOString(),
      clicks: 0
    })

  } catch (error) {
    console.error('Error shortening URL:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 