'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, MessageCircle, Phone } from 'lucide-react'

export default function Contact() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* Soft backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      </div>

  <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-blue-200/60 bg-blue-50/60 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
          Contact
        </span>
        <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
          <span className="block text-gray-900">Get in touch</span>
          <span className="bg-gradient-to-r from-blue-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">We reply within minutes</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">Quick ways to reach our team.</p>

        <Card
          className={[
            'mx-auto mt-10 max-w-2xl overflow-hidden rounded-2xl border-0 bg-white/90 shadow-xl backdrop-blur',
            'transition-all duration-500',
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
          ].join(' ')}
        >
          <CardContent className="p-6 sm:p-8 overflow-hidden">
            <div className="grid min-w-0 auto-rows-fr gap-4 sm:gap-6 sm:grid-cols-3">
              <a
                href="https://wa.me/2348000000000"
                target="_blank"
                rel="noreferrer noopener"
                className="group block w-full h-full min-w-0 overflow-hidden rounded-2xl border border-emerald-200/60 bg-emerald-50/60 p-5 sm:p-6 text-left shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Chat on WhatsApp"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md group-hover:rotate-3 transition-transform">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="font-semibold text-gray-900 truncate">WhatsApp</div>
                <div className="text-sm text-gray-600 break-words">Instant responses</div>
              </a>

              <a
                href="tel:+2348000000000"
                className="group block w-full h-full min-w-0 overflow-hidden rounded-2xl border border-blue-200/60 bg-blue-50/60 p-5 sm:p-6 text-left shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Call us"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md group-hover:rotate-3 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="font-semibold text-gray-900 truncate">Call us</div>
                <div className="text-sm text-gray-600 break-words">+234 800 000 0000</div>
              </a>

              <a
                href="mailto:info@righteousrichrealty.com"
                className="group block w-full h-full min-w-0 overflow-hidden rounded-2xl border border-rose-200/60 bg-rose-50/60 p-5 sm:p-6 text-left shadow-sm transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Email us"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md group-hover:rotate-3 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="font-semibold text-gray-900 truncate">Email us</div>
                <div className="text-sm text-gray-600 break-words">info@righteousrichrealty.com</div>
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-500">Mon–Fri: 8am–6pm · Sat: 9am–4pm</div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}