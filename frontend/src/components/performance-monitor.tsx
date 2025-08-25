'use client'

import { useEffect } from 'react'

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      parameters?: {
        value?: number
        event_category?: string
        event_label?: string
      }
    ) => void
  }
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Track Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        console.log('LCP:', lastEntry.startTime)
        
        // Send to analytics if available
        if (window.gtag) {
          window.gtag('event', 'LCP', {
            value: Math.round(lastEntry.startTime),
            event_category: 'Web Vitals',
            event_label: 'LCP'
          })
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Track First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEventTiming
          console.log('FID:', fidEntry.processingStart - fidEntry.startTime)
          
          if (window.gtag) {
            window.gtag('event', 'FID', {
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
              event_category: 'Web Vitals',
              event_label: 'FID'
            })
          }
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log('CLS:', clsValue)
        
        if (window.gtag) {
          window.gtag('event', 'CLS', {
            value: Math.round(clsValue * 1000) / 1000,
            event_category: 'Web Vitals',
            event_label: 'CLS'
          })
        }
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }

    // Track page load time
    const trackPageLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart
        console.log('Page Load Time:', loadTime)
        
        if (window.gtag) {
          window.gtag('event', 'page_load_time', {
            value: Math.round(loadTime),
            event_category: 'Performance',
            event_label: 'Page Load'
          })
        }
      }
    }

    // Track when page is fully loaded
    if (document.readyState === 'complete') {
      trackPageLoad()
    } else {
      window.addEventListener('load', trackPageLoad)
    }

    return () => {
      window.removeEventListener('load', trackPageLoad)
    }
  }, [])

  return null // This component doesn't render anything
}
