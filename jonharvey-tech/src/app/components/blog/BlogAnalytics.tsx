'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function BlogAnalytics({ cid }: { cid: string }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && "gtag" in window) {
      ;(window as any).gtag("event", "blog_view", {
        page_path: pathname,
        blog_id: cid,
      })
    }
  }, [pathname, cid])

  return null
}