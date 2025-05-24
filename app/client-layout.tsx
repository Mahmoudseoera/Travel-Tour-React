'use client'

import { useEffect } from 'react'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Remove ColorZilla attributes after mount
    const removeAttributes = () => {
      const html = document.documentElement
      if (html.hasAttribute('cz-shortcut-listen')) {
        html.removeAttribute('cz-shortcut-listen')
      }
    }

    // Remove immediately
    removeAttributes()

    // Also set up a mutation observer to catch any future additions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'cz-shortcut-listen') {
          removeAttributes()
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['cz-shortcut-listen']
    })

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
} 