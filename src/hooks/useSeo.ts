import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SeoOptions {
  title: string
  description?: string
  /** Set true for pages that should not be indexed. */
  noindex?: boolean
}

export const SITE_URL = 'https://solidstatepractice.com'
const BASE_TITLE = 'Solid State Practice'
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80'

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setBreadcrumb(pageTitle: string, url: string, isHome: boolean) {
  const id = 'ld-breadcrumb'
  document.getElementById(id)?.remove()
  if (isHome) return
  const script = document.createElement('script')
  script.id = id
  script.type = 'application/ld+json'
  script.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: pageTitle, item: url },
    ],
  })
  document.head.appendChild(script)
}

/** Per-page SEO: title, description, canonical, Open Graph, Twitter and breadcrumb data. */
export function useSeo({ title, description, noindex = false }: SeoOptions) {
  const { pathname } = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE
    const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
    const url = `${SITE_URL}${path}`
    const isHome = path === '/'

    document.title = fullTitle
    setCanonical(url)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', BASE_TITLE)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', DEFAULT_IMAGE)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:image', DEFAULT_IMAGE)

    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }

    setBreadcrumb(title, url, isHome)
  }, [title, description, noindex, pathname])
}
