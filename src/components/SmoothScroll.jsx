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
    // Service pages ko slug-change pe top pe le jane ke liye handle expose
    window.__lenis = lenis
    lenis.on('scroll', ScrollTrigger.update)

    // Anchor links (#id) pe Lenis smooth scroll — browser ka direct
    // jump/pop nahi hoga. Navbar, mobile menu, footer — sab cover.
    const onClick = (e) => {
      const anchor = e.target.closest?.('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash.length < 2) return
      const el = document.querySelector(hash)
      if (!el) {
        // Ye section is page pe nahi hai (jaise legal pages pe #Services)
        // → home pe jao; wahan pahunchte hi section tak smooth scroll ho jayega
        e.preventDefault()
        try {
          sessionStorage.setItem('cnk-scroll', hash)
        } catch {
          /* storage blocked — phir bhi home pe bhejo */
        }
        window.location.href = '/'
        return
      }
      e.preventDefault()
      // Mobile menu khula ho to uska scroll lock hatao
      document.body.style.overflow = ''
      lenis.scrollTo(el, { offset: -80, duration: 1.4 })
    }
    document.addEventListener('click', onClick)

    // Kisi doosre page (jaise /privacy-policy) ke navbar link se aaye ho
    // to yaad rakhe hue section tak smooth scroll karo
    let pendingHash = null
    try {
      pendingHash = sessionStorage.getItem('cnk-scroll')
      sessionStorage.removeItem('cnk-scroll')
    } catch {
      /* storage blocked — kuch nahi karna */
    }
    if (pendingHash) {
      const target = document.querySelector(pendingHash)
      if (target) {
        requestAnimationFrame(() => {
          lenis.scrollTo(target, { offset: -80, duration: 1.4 })
        })
      }
    }

    const tick = (t) => lenis.raf(t * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      document.removeEventListener('click', onClick)
      gsap.ticker.remove(tick)
      window.__lenis = null
      lenis.destroy()
    }
  }, [])

  return children
}