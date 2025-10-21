'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'

type TItem = {
  name: string
  role: string
  quote: string
  rating: number
}

const items: TItem[] = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    quote:
      'Seamless process and verified documents. My plot appreciated significantly within a year.',
    rating: 5,
  },
  {
    name: 'Michael Bello',
    role: 'Engineer',
    quote:
      'Transparent team and flexible payment. They delivered exactly what they promised.',
    rating: 5,
  },
  {
    name: 'Amina Yusuf',
    role: 'Medical Doctor',
    quote:
      'As a first‑time buyer, I felt supported at every step. Location and papers are perfect.',
    rating: 6,
  },
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    quote:
      'Seamless process and verified documents. My plot appreciated significantly within a year.',
    rating: 5,
  },
  {
    name: 'Amina Yusuf',
    role: 'Medical Doctor',
    quote:
      'As a first‑time buyer, I felt supported at every step. Location and papers are perfect.',
    rating: 8,
  },
]

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const pauseRef = useRef(false)
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const t = window.setTimeout(() => setMounted(true), 60)
    return () => window.clearTimeout(t)
  }, [])

  // Bind Embla events for dots and snaps
  useEffect(() => {
    if (!api) return
    setScrollSnaps(api.scrollSnapList())
    setSelectedIndex(api.selectedScrollSnap())

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap())
    api.on('select', onSelect)
    api.on('reInit', () => {
      setScrollSnaps(api.scrollSnapList())
      setSelectedIndex(api.selectedScrollSnap())
    })
    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  // Autoplay logic with pause on hover/touch and when tab hidden
  useEffect(() => {
    if (!api) return

    const play = () => {
      if (pauseRef.current) return
      api.scrollNext()
    }

    const start = () => {
      stop()
      intervalRef.current = window.setInterval(play, 3500)
    }
    const stop = () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    start()

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [api])

  return (
    <section id="testimonials" className="relative overflow-hidden py-20">
      {/* Soft backdrop accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-rose-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-rose-200/60 bg-rose-50/60 px-4 py-1.5 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="block text-gray-900">Loved by our Clients</span>
            <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Real words. Real trust.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">A few short notes from happy landowners.</p>
        </div>

        {/* Autoplay carousel */}
        <Carousel
          className="mt-12"
          opts={{ align: 'start', loop: true }}
          setApi={setApi}
          onMouseEnter={() => {
            pauseRef.current = true
          }}
          onMouseLeave={() => {
            pauseRef.current = false
          }}
          onTouchStart={() => {
            pauseRef.current = true
          }}
          onTouchEnd={() => {
            pauseRef.current = false
          }}
        >
          <CarouselContent>
            {items.map((t, i) => (
              <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
                <Card
                  className={[
                    'group relative overflow-hidden border-0 bg-white/90 shadow-xl backdrop-blur',
                    'transition-all duration-500',
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                  ].join(' ')}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <CardContent className="relative z-10 p-6">
                    <div className="mb-4 flex items-center gap-1 text-yellow-500">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star key={idx} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700">“{t.quote}”</p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-rose-200 to-amber-200 text-rose-800 font-bold">
                        {t.name.split(' ').map((x) => x[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{t.name}</div>
                        <div className="text-sm text-gray-600">{t.role}</div>
                      </div>
                    </div>
                  </CardContent>
                  {/* subtle shine */}
                  <div className="pointer-events-none absolute -inset-y-8 -left-24 w-24 -skew-x-12 bg-white/40 blur-xl transition-transform duration-700 group-hover:translate-x-[200%]" />
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-2 sm:-left-6" />
          <CarouselNext className="-right-2 sm:-right-6" />
        </Carousel>

        {/* Dots */}
        {api && scrollSnaps.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                className={[
                  'h-2 w-2 rounded-full transition-colors',
                  selectedIndex === idx ? 'bg-rose-500' : 'bg-rose-300/60',
                ].join(' ')}
                onClick={() => api.scrollTo(idx)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}