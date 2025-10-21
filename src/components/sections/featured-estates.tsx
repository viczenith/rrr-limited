'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Home, 
  TrendingUp, 
  Shield, 
  ArrowRight,
  Star,
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause
} from 'lucide-react'
import { Calendar, Users, Building2, HelpCircle } from 'lucide-react'


// Estate configurations with shared properties
const estateConfigs = {
  "Rehoboth City": {
    location: "Lifecamp",
    titleType: "FCDA R of O", 
    estateFacilities: ["Perimeter Fencing", "Gate House", "Paved Roads", "Drainage", "Solar Street Lights", "Green Areas", "Shopping Complex", "School"],
    gradient: "from-emerald-400 via-emerald-500 to-teal-600"
  },
  "Polo City": {
    location: "Usama Hills, Katampe Extention",
    titleType: "FCDA R of O",
    estateFacilities: ["Electricity", "Water Supply", "Security", "Recreation Center", "Smart Homes", "Gym & Spa", "Swimming Pool", "Kids Playground"],
    gradient: "from-blue-400 via-blue-500 to-indigo-600"
  }
}

// Plot size configurations with unique properties
const plotConfigs = {
  "400sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype1.webp`,
    rating: 4.6,
    description: "3 Bedroom Fully Detached Duplex. Affordable luxury living with complete infrastructure and serene environment."
  },
  "500sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype2.webp`, 
    rating: 4.8,
    description: "3 Bedroom Fully Detached Duplex. Premium residential plot with modern infrastructure and strategic location."
  },
  "550sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    rating: 4.5,
    description: "3 Bedroom Fully Detached Duplex. Sustainable living plot with eco-friendly features and wellness focus."
  },
  "600sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype1.webp`,
    rating: 4.9,
    description: "3 Bedroom Fully Detached Duplex. Eco-friendly plot with sustainable living features and modern amenities."
  },
  "650sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype2.webp`,
    rating: 4.8,
    description: "3 Bedroom Fully Detached Duplex. Exclusive plot with premium recreational facilities and scenic potential."
  },
  "750sqm": {
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    rating: 4.7,
    description: "3 Bedroom Fully Detached Duplex. Luxury plot with world-class amenity potential and smart technology integration."
  }
}

// Types
type AvailablePlot = {
  id: number
  name: string
  location: string
  plotSize: string
  titleType: string
  isVerified: boolean
  isFeatured: boolean
  prototypeImage: string
  rating: number
  estateFacilities: string[]
  description: string
  gradient: string
}

// Small WhatsApp icon component for the CTA button
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.64c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.26.29-.45.1-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49-.16 0-.35-.02-.54-.02-.19 0-.49.07-.74.35-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.06 4.84 4.29.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33z"/>
      <path d="M26.6 5.4A13.4 13.4 0 0 0 16 1a13.4 13.4 0 0 0-11.6 20l-1.3 4.8 4.9-1.28A13.4 13.4 0 1 0 26.6 5.4zM16 27.5c-2.22 0-4.33-.59-6.18-1.7l-.44-.26-2.9.76.78-2.86-.28-.47A11.5 11.5 0 1 1 27.5 16 11.51 11.51 0 0 1 16 27.5z"/>
    </svg>
  )
}

// Generate dynamic plot combinations
const availablePlots: AvailablePlot[] = []
let plotId = 1

Object.keys(estateConfigs).forEach(estateName => {
  Object.keys(plotConfigs).forEach(plotSize => {
    const estate = estateConfigs[estateName]
    const plot = plotConfigs[plotSize]
    
    availablePlots.push({
      id: plotId++,
      name: estateName,
      location: estate.location,
      plotSize: plotSize,
      titleType: estate.titleType,
      isVerified: true,
      isFeatured: true,
      prototypeImage: plot.prototypeImage,
      rating: plot.rating,
      estateFacilities: estate.estateFacilities,
      description: plot.description,
      gradient: estate.gradient
    })
  })
})

export default function FeaturedEstates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const whatsAppLink = (import.meta as any)?.env?.VITE_HEAD_AFFILIATE_WHATSAPP_URL || 'https://wa.me/2340000000000'

  type AffiliateFormValues = {
    firstName: string
    lastName: string
    residentialAddress?: string
    officeAddress?: string
    email: string
    phone: string
    bankDetails?: string
    passport?: File | null
    idCard?: File | null
    birthMonth?: string
    birthDay?: string
    occupation?: string
    affiliateType: 'individual' | 'company' | ''
    discoverySource: 'social' | 'referral' | 'event' | 'website' | 'other' | ''
  }

  const form = useForm<AffiliateFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      residentialAddress: '',
      officeAddress: '',
      email: '',
      phone: '',
      bankDetails: '',
      passport: null,
      idCard: null,
      birthMonth: '',
      birthDay: '',
      occupation: '',
      affiliateType: '',
      discoverySource: ''
    }
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<null | 'success' | 'error'>(null)

  const onSubmit = async (values: AffiliateFormValues) => {
    setSubmitting(true)
    setSubmitResult(null)
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 800))
      setSubmitResult('success')
      form.reset()
    } catch (e) {
      setSubmitResult('error')
    } finally {
      setSubmitting(false)
    }
  }

  // Auto-carousel logic
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === availablePlots.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, isHovered])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === availablePlots.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? availablePlots.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  return (
    <section id="estates" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-8 mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border border-amber-200/50 rounded-full px-8 py-4 shadow-lg backdrop-blur-sm">
            <span className="text-amber-800 font-bold text-sm tracking-wide">✨ Available Plots</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gray-900 mb-3">Own a Verified Plot</span>
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent font-extrabold animate-pulse">
               with Confidence!
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore our available plots and {' '}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent font-semibold">secure the perfect size</span>{' '}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold">that meets your needs and budget.</span>{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent font-semibold"></span>
          </p>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center space-x-6 mt-8">
            <button
              onClick={prevSlide}
              className="group p-3 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="group p-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              {isAutoPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={nextSlide}
              className="group p-3 bg-white/80 backdrop-blur-sm hover:bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>
          </div>
        </div>

        {/* Beautiful Animated Carousel */}
        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {availablePlots.map((estate, index) => (
                <div key={estate.id} className="w-full flex-shrink-0 px-4">
                  <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] mx-auto max-w-4xl">
                    
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${estate.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="grid md:grid-cols-2 gap-0">
                      {/* Image Section */}
                      <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl md:rounded-3xl">
                        {/* Prototype Image with subtle overlays */}
                        <img
                          src={estate.prototypeImage}
                          alt={`${estate.name} ${estate.plotSize} prototype`}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${estate.gradient} opacity-30 mix-blend-multiply`}></div>
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute top-6 left-8 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                          <div className="absolute bottom-8 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                        
                        {/* Elegant Badges */}
                        <div className="absolute top-6 left-6 flex flex-col gap-3">
                          {estate.isVerified && (
                            <div className="flex items-center space-x-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                              <Shield className="w-4 h-4 text-emerald-500" />
                              <span className="text-sm font-bold text-emerald-700">Verified</span>
                            </div>
                          )}
                          {estate.isFeatured && (
                            <div className="flex items-center space-x-2 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full shadow-lg">
                              <Star className="w-4 h-4 fill-current" />
                              <span className="text-sm font-bold">Featured</span>
                            </div>
                          )}
                        </div>

                        {/* Rating */}
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg border border-white/20">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold text-gray-800">{estate.rating}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 md:p-12 flex flex-col justify-between relative">
                        {/* Subtle Pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-100 via-transparent to-gray-100"></div>
                        </div>

                        <div className="relative z-10">
                          <div className="mb-6">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                              {estate.name}
                            </h3>
                            <div className="flex items-center text-gray-600 text-lg mb-6">
                              <MapPin className="w-5 h-5 mr-3 text-red-500" />
                              <span className="font-medium">{estate.location}</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-lg mb-8">
                              {estate.description}
                            </p>
                          </div>

                          {/* Features Grid */}
                          <div className="grid grid-cols-2 gap-3 mb-8">
                            {estate.estateFacilities.slice(0, 4).map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-700 bg-gray-50/80 px-4 py-3 rounded-xl border border-gray-100">
                                <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* Price Section */}
                          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
                            <div>
                              <div className="text-gray-600 font-medium">
                                {estate.plotSize} • {estate.titleType}
                              </div>
                            </div>
                            
                            <Link
                              to={`/plots/${estate.name.toLowerCase().includes('polo') ? 'polo-city' : 'rehoboth-city'}/${estate.plotSize.replace(/\s+/g, '').toLowerCase()}`}
                              className="inline-flex"
                            >
                              <Button 
                                className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                              >
                                <span>View Details</span>
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Elegant Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {availablePlots.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative rounded-3xl p-12 md:p-16 overflow-hidden bg-gradient-to-br from-slate-600 via-gray-600 to-black shadow-2xl">
            {/* Elegant Background Patterns */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-5">
                <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl animate-pulse delay-500"></div>
              </div>
              
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-6 py-3 mb-6">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-semibold text-sm">EARN WITH US</span>
                </div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Join Our Affiliate Program
                  <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Earn Commissions with Us
                  </span>
                </h3>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                  Become an affiliate marketer and earn attractive commissions when you refer property buyers. Become an affiliate marketer and earn attractive commissions when you refer property buyers. Owning a business with independent financial benefits sets you on the path to becoming a fulfilled entrepreneur. Join our Affiliate program to secure alifetime of unlimited income.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="group bg-gradient-to-r from-white to-gray-100 text-gray-900 hover:from-gray-100 hover:to-gray-200 px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20">
                      <span>Register Here</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/10 dark:border-neutral-800 shadow-2xl w-[calc(100vw-1rem)] sm:w-full max-w-[calc(100vw-1rem)] sm:max-w-xl md:max-w-3xl lg:max-w-4xl max-h-[80svh] sm:max-h-[85vh] overflow-y-auto overscroll-contain z-[9999] p-3 sm:p-6 box-border [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent">
                    <DialogHeader>
                      <DialogTitle>Affiliate Registration</DialogTitle>
                      <DialogDescription>
                        Fill the form to join our affiliate program and start earning commissions.
                      </DialogDescription>
                    </DialogHeader>

                    {submitResult === 'success' && (
                      <div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 px-4 py-3">
                        Registration submitted successfully. Our team will reach out shortly.
                      </div>
                    )}
                    {submitResult === 'error' && (
                      <div className="mb-4 rounded-lg border border-red-300 bg-red-50 text-red-800 px-4 py-3">
                        Something went wrong. Please try again.
                      </div>
                    )}

                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          rules={{ required: 'First name is required' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First *</FormLabel>
                              <FormControl>
                                <Input placeholder="First name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          rules={{ required: 'Last name is required' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last *</FormLabel>
                              <FormControl>
                                <Input placeholder="Last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="residentialAddress"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Residential Address</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Your residential address" rows={2} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="officeAddress"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Office Address</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Your office address (optional)" rows={2} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          rules={{ required: 'Email is required', pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: 'Enter a valid email' } }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email *</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="name@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          rules={{ required: 'Phone is required' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone *</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="080..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="bankDetails"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Bank Details</FormLabel>
                              <FormControl>
                                <Textarea placeholder="Account Name, Bank Name, Account Number" rows={2} {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="passport"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Passport</FormLabel>
                              <FormControl>
                                <Input type="file" accept="image/*,application/pdf" onChange={(e) => field.onChange(e.target.files?.[0] ?? null)} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="idCard"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Valid Identity Card</FormLabel>
                              <FormControl>
                                <Input type="file" accept="image/*,application/pdf" onChange={(e) => field.onChange(e.target.files?.[0] ?? null)} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="birthMonth"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Birthday (Month)</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full h-11 rounded-xl bg-white/60 dark:bg-neutral-800/40 backdrop-blur border border-white/20 dark:border-neutral-700/40 text-left">
                                    <Calendar className="mr-2 h-4 w-4 opacity-60" />
                                    <SelectValue placeholder="Select month" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl z-[10050] max-h-[60vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&_*::-webkit-scrollbar]:w-0 [&_*::-webkit-scrollbar]:h-0">
                                  <SelectItem value="01">January</SelectItem>
                                  <SelectItem value="02">February</SelectItem>
                                  <SelectItem value="03">March</SelectItem>
                                  <SelectItem value="04">April</SelectItem>
                                  <SelectItem value="05">May</SelectItem>
                                  <SelectItem value="06">June</SelectItem>
                                  <SelectItem value="07">July</SelectItem>
                                  <SelectItem value="08">August</SelectItem>
                                  <SelectItem value="09">September</SelectItem>
                                  <SelectItem value="10">October</SelectItem>
                                  <SelectItem value="11">November</SelectItem>
                                  <SelectItem value="12">December</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="birthDay"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Birthday (Day)</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full h-11 rounded-xl bg-white/60 dark:bg-neutral-800/40 backdrop-blur border border-white/20 dark:border-neutral-700/40 text-left">
                                    <Calendar className="mr-2 h-4 w-4 opacity-60" />
                                    <SelectValue placeholder="Select day" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl z-[10050] max-h-[60vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&_*::-webkit-scrollbar]:w-0 [&_*::-webkit-scrollbar]:h-0">
                                  {Array.from({ length: 31 }, (_, i) => {
                                    const val = String(i + 1).padStart(2, '0')
                                    return (
                                      <SelectItem key={val} value={val}>
                                        {i + 1}
                                      </SelectItem>
                                    )
                                  })}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="occupation"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>Occupation</FormLabel>
                              <FormControl>
                                <Input placeholder="Your occupation" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="affiliateType"
                          rules={{ required: 'Please choose Individual or Company' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Registering As *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full h-11 rounded-xl bg-white/60 dark:bg-neutral-800/40 backdrop-blur border border-white/20 dark:border-neutral-700/40 text-left">
                                    <Users className="mr-2 h-4 w-4 opacity-60" />
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl z-[10050] max-h-[60vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&_*::-webkit-scrollbar]:w-0 [&_*::-webkit-scrollbar]:h-0">
                                  <SelectItem value="individual" className="rounded-md">Individual Marketer</SelectItem>
                                  <SelectItem value="company" className="rounded-md">Company Marketer</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="discoverySource"
                          rules={{ required: 'Please tell us how you found us' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>How did you find out about Righteous & Rich? *</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger className="w-full h-11 rounded-xl bg-white/60 dark:bg-neutral-800/40 backdrop-blur border border-white/20 dark:border-neutral-700/40 text-left">
                                    <HelpCircle className="mr-2 h-4 w-4 opacity-60" />
                                    <SelectValue placeholder="Select an option" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl z-[10050] max-h-[60vh] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar]:h-0 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-transparent [&_*::-webkit-scrollbar]:w-0 [&_*::-webkit-scrollbar]:h-0">
                                  <SelectItem value="social" className="rounded-md">Social Media</SelectItem>
                                  <SelectItem value="referral" className="rounded-md">Friend / Referral</SelectItem>
                                  <SelectItem value="event" className="rounded-md">Event / Seminar</SelectItem>
                                  <SelectItem value="website" className="rounded-md">Website</SelectItem>
                                  <SelectItem value="other" className="rounded-md">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        {submitResult === 'success' && (
                          <div className="mb-4 rounded-lg border border-emerald-300 bg-emerald-50 text-emerald-800 px-4 py-3">
                            Registration submitted successfully. Our team will reach out shortly.
                          </div>
                        )}
                        {submitResult === 'error' && (
                          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 text-red-800 px-4 py-3">
                            Something went wrong. Please try again.
                          </div>
                        )}

                        <DialogFooter className="md:col-span-2 mt-4">
                          <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white">
                            {submitting ? 'Submitting...' : 'Submit Registration'}
                          </Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <Button
                  onClick={() => window.open(whatsAppLink, '_blank')}
                  className="group border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-12 py-5 rounded-2xl text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5"
                >
                  <span>Chat Head of Affiliate</span>
                  <span className="relative ml-3 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-md opacity-60 group-hover:opacity-90 transition-opacity"></span>
                    <span className="absolute animate-ping inline-flex h-6 w-6 rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">Financial Security</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-medium">Unlimited Income</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Attractive Commission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}