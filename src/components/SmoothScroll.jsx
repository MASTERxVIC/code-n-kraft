'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) return // normal browser scroll rehne do

    const lenis = new Lenis({ duration: 1.2 })
    lenis.on('scroll', ScrollTrigger.update)

    // Anchor links (#id) pe Lenis smooth scroll — browser ka direct
    // jump/pop nahi hoga. Navbar, mobile menu, footer — sab cover.
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash.length < 2) return
      const el = document.querySelector(hash)
      if (!el) return
      e.preventDefault()
      // Mobile menu khula ho to uska scroll lock hatao
      document.body.style.overflow = ''
      lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(tick)
      lenis.destroy()
    }
  }, [])

  return children
}