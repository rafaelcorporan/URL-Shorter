'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Loader2 } from 'lucide-react'
import { Button, Card, CardContent, Typography } from '@mui/material'

interface VideoPlayerProps {
  title: string
  description: string
  webmSrc?: string
  mp4Src: string
  poster?: string
  className?: string
}

export default function VideoPlayer({
  title,
  description,
  webmSrc,
  mp4Src,
  poster,
  className = ''
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoading(false)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setCurrentTime(0)
    }

    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('ended', handleEnded)

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('ended', handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return

    const time = parseFloat(e.target.value)
    video.currentTime = time
    setCurrentTime(time)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <Card className={`overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <CardContent className="p-0">
        <div ref={containerRef} className="relative group">
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-auto rounded-t-lg"
            poster={poster}
            preload="metadata"
            playsInline
          >
            {webmSrc && <source src={webmSrc} type="video/webm" />}
            <source src={mp4Src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
          )}

          {/* Play/Pause Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
            <Button
              onClick={togglePlay}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              sx={{
                bgcolor: 'rgba(255,255,255,0.9)',
                color: '#000',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,1)'
                }
              }}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </Button>
          </div>

          {/* Video Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-white bg-opacity-30 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #E65100 0%, #E65100 ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.3) 100%)`
              }}
            />

            {/* Control Buttons */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Button
                  onClick={togglePlay}
                  size="small"
                  sx={{ color: 'white', minWidth: 'auto', p: 0.5 }}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </Button>
                <Button
                  onClick={toggleMute}
                  size="small"
                  sx={{ color: 'white', minWidth: 'auto', p: 0.5 }}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </Button>
                <Typography variant="caption" sx={{ color: 'white' }}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </Typography>
              </div>
              <Button
                onClick={toggleFullscreen}
                size="small"
                sx={{ color: 'white', minWidth: 'auto', p: 0.5 }}
              >
                <Maximize size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Video Info */}
        <div className="p-4">
          <Typography variant="h6" className="font-semibold mb-2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </div>
      </CardContent>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #E65100;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #E65100;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </Card>
  )
} 