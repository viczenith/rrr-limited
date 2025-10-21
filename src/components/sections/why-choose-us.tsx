'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Shield, TrendingUp, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  const items = [
    {
      icon: Shield,
      title: 'Verified Properties',
      desc: 'Every plot is legally verified and transparently documented.'
    },
    {
      icon: TrendingUp,
      title: 'Strong ROI Potential',
      desc: 'Strategic locations designed for long‑term value growth.'
    },
    {
      icon: Headphones,
      title: 'Human Support',
      desc: 'Friendly experts ready to guide you at every step.'
    }
  ] as const

  return (
    <section id="about" className="relative overflow-hidden py-20">
      {/* Soft background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-8 -left-8 h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-emerald-200/60 bg-emerald-50/60 px-4 py-1.5 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur">
            Why Choose Us
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="block text-gray-900">Righteous & Rich Realty</span>
            <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Built on Trust</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A focused promise: verified plots, smart growth, and people‑first support.
          </p>
        </div>

        {/* Mini reasons grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <Card
                key={it.title}
                className={[
                  'group relative overflow-hidden border-0 bg-white/90 shadow-xl backdrop-blur',
                  'transition-all duration-500',
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                ].join(' ')}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* gradient stroke on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-transparent transition-opacity duration-500 group-hover:opacity-100" style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(59,130,246,0.15))',
                  WebkitMask: 'linear-gradient(#fff, #fff) content-box, linear-gradient(#fff, #fff)',
                  WebkitMaskComposite: 'xor' as any,
                  padding: 1
                }} />
                <CardContent className="relative z-10 p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{it.title}</h3>
                  <p className="mt-2 text-gray-600">{it.desc}</p>
                </CardContent>

                {/* subtle animated shine */}
                <div className="pointer-events-none absolute -inset-y-8 -left-24 w-24 -skew-x-12 bg-white/40 blur-xl transition-transform duration-700 group-hover:translate-x-[200%]" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
