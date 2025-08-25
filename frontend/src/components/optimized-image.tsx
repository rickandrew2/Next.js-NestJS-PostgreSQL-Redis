'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
  fill = false,
  placeholder = 'empty',
  blurDataURL
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Fallback for broken images
  const handleError = () => {
    setError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (error) {
    return (
      <div 
        className={`bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center ${className}`}
        style={{ width: width || '100%', height: height || '200px' }}
      >
        <span className="text-red-600 text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse" />
      )}
      
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        priority={priority}
        sizes={sizes}
        fill={fill}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onLoad={handleLoad}
        onError={handleError}
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  )
}
