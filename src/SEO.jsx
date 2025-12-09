import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Basic per-route SEO config – adjust copy as needed
const seoConfig = {
  '/': {
    title: 'Siramamba-Gold & Precious Metal Refining Company in Sharjah, Dubai, UAE',
    description:
      'Siramamba is the best gold and Precious Metal refinery in Sharjah, Dubai  UAE. We offer gold refining services for all types of gold jewellery, coins, bars etc.',
    keywords:
      'dubai gold refineries,metal refining enterprise,refining gold company uae,gold refining company uae,gold refinery sharjah,gold refinery in abu dhabi,gold refinery uae, best gold refinery uae, gold refinery in uae, gold refinery in sharjah, gold refinery in dubai, gold refinery dubai, Best Gold Refinery in UAE, famous gold refinery in UAE, gold refinery sharjah, UAE gold refinery, leading gold refinery in UAE, refinery UAE, refinery near me, gold refinery, precious metals refinery',
    canonical: 'https://siramamba.ae/',
  },
  '/about': {
    title: 'Best Gold & Precious Metal Refinery Company Sharjah | UAE - Siramamba',
    description:
      'Siramamba is the best Precious Metal  gold refinery company in Sharjah, UAE. We offer a wide range of gold refining services to your needs. We help you any time',
    keywords:
      'Best Gold Refinery in UAE, famous gold refinery in UAE, gold refinery sharjah, UAE gold refinery, leading gold refinery in UAE, refinery UAE, refinery near me, gold refinery, precious metals refinery',
    canonical: 'https://siramamba.ae/about',
  },
  '/services': {
    title: 'Trusted Gold Precious Metal refineries Sharjah|UAE - Siramamba',
    description:
      'Siramamba is a trusted and advanced Gold precious metals  Refinery in Sharjah, UAE, with high quatity. Our service in exceptional quality and service in precious metal refining.',
    keywords:
      'gold and silver refineries, Precious Metal Refinery Company , Precious Metal Refinery Company  Sharjah,gold refining company uae',
    canonical: 'https://siramamba.ae/services',
  },
  '/products': {
    title: 'Highly Purified Gold and Precious Metal refineries Sharjah | UAE - Siramamba',
    description:
      'Highly purified gold Kilo Bars and metals Refinery Company in Sharjah Uae.Siramamba offers 999.9 fine gold, 999.9 gold bar, and other precious metal products to our clients.',
    keywords:
      'gold bar uae,gold and silver refineries,Precious Metal Refinery Company,Best Gold Refinery in UAE, famous gold refinery in UAE, gold refinery sharjah, UAE gold refinery, leading gold refinery in UAE, refinery UAE, refinery near me, gold refinery, precious metals refinery',
    canonical: 'https://siramamba.ae/products',
  },
  '/gallery': {
    title: 'New and Best  Gold Refinery Company in Sharjah | UAE',
    description:
      'Siramamba is the best highly trusted and advanced Gold precious metals  Refinery comapny in Sharjah, UAE, with high quatity. We provide high purity gold and  Precious Metal',
    keywords:
      'Gold Refinery in UAE,Precious Metal Refinery Company,Precious Metal Refinery Company , Precious Metal Refinery Company  Sharjah,gold refining company uae',
    canonical: 'https://siramamba.ae/gallery',
  },
  '/accreditations': {
    title: 'Gold precious metals Refinery |Gold Refinery in Sharjah | Dubai | UAE',
    description:
      'Siramamba is the largest and fastest growing gold and Gold precious metals refineries in the Middle East. We are the No 1 in  Gold  Refinery industry in  Sharjah UAE.',
    keywords:
      'Gold Refinery Certificate,ISO 9001: Quality Management System Gold Refinery Certificate,,Precious Metal Refinery Company,Best Gold Refinery in UAE, famous gold refinery in UAE, gold refinery sharjah, UAE gold refinery, leading gold refinery in UAE, refinery UAE, refinery near me, gold refinery, precious metals refinery',
    canonical: 'https://siramamba.ae/accreditations',
  },
  '/contact': {
    title: 'Gold Bar buyers | Precious metals buyers | Pure Gold Precious metals',
    description:
      'Siramamba is one of the top gold and Precious metals refinery company in UAE. Contact us today for highly pure gold and  Precious metals refining in Sharjah | Dubai | UAE',
    keywords:
      'gold refining company uae,gold refinery sharjah,gold refinery in abu dhabi,gold refinery uae, best gold refinery uae, gold refinery in uae, gold refinery in sharjah, gold refinery in dubai, gold refinery dubai, Best Gold Refinery in UAE, famous gold refinery in UAE, gold refinery sharjah, UAE gold refinery, leading gold refinery in UAE, refinery UAE, refinery near me, gold refinery, precious metals refinery',
    canonical: 'https://siramamba.ae/contact',
  },
  '/sustainability': {
    title: 'Sustainability & Responsible Sourcing | Sira Mamba',
    description:
      'Discover Sira Mamba’s commitment to sustainability, responsible sourcing, and ethical refining practices.',
    keywords:
      'sustainable refining, responsible gold sourcing, ethical refinery UAE, ESG metals',
    canonical: 'https://siramamba.ae/sustainability',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Sira Mamba Refinery',
    description:
      'Read Sira Mamba Refinery’s privacy policy and how we protect your personal information.',
    keywords:
      'Sira Mamba privacy policy, data protection, privacy UAE refinery website',
    canonical: 'https://siramamba.ae/privacy-policy',
  },
  '/terms-conditions': {
    title: 'Terms & Conditions | Sira Mamba Refinery',
    description:
      'Review Sira Mamba Refinery’s website terms and conditions for using our online services.',
    keywords:
      'Sira Mamba terms, website terms and conditions, legal terms UAE refinery',
    canonical: 'https://siramamba.ae/terms-conditions',
  },
}

const DEFAULT_TITLE = 'Sira Mamba Refinery | Gold & Precious Metals Refining in UAE'
const DEFAULT_DESCRIPTION =
  'Sira Mamba Refinery is a trusted UAE-based refinery specializing in gold and precious metals refining, bullion products, and sustainable metal solutions.'
const DEFAULT_KEYWORDS =
  'Sira Mamba, gold refinery UAE, bullion, precious metals, gold bars, silver bars, metal refining, Dubai refinery'
const BASE_URL = 'https://siramamba.ae'

export function SEO() {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname
    const config = seoConfig[path] || {}

    const title = config.title || DEFAULT_TITLE
    const description = config.description || DEFAULT_DESCRIPTION
    const keywords = config.keywords || DEFAULT_KEYWORDS
    const canonical = config.canonical || `${BASE_URL}${path === '/' ? '' : path}`

    if (typeof document !== 'undefined') {
      document.title = title

      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.content = description

      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.content = keywords

      let canonicalLink = document.querySelector('link[rel="canonical"]')
      if (!canonicalLink) {
        canonicalLink = document.createElement('link')
        canonicalLink.rel = 'canonical'
        document.head.appendChild(canonicalLink)
      }
      canonicalLink.href = canonical
    }
  }, [location])

  return null
}


