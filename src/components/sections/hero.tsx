'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  ArrowRight, 
  MapPin, 
  Home, 
  Shield, 
  TrendingUp,
  Play,
  Phone
} from 'lucide-react'

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Properties",
      description: "All our properties come with verified documentation"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "High ROI",
      description: "Strategic locations with high appreciation potential"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Flexible Payment",
      description: "Installment plans available for all budgets"
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/30">
            <Shield className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold tracking-wide">RC 1234567 | FCTA Approved</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-2">Building with Integrity,</span>
              <span 
                className="block text-transparent bg-clip-text font-extrabold tracking-tight"
                style={{ backgroundImage: 'var(--color-gradient-text-accent)' }}
              >
                Defining Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light">
              Secured Land Investments in Abuja's
              <span className="text-yellow-400 font-semibold"> strategic locations</span> with 
              <span className="text-green-400 font-semibold"> Premium Plots</span> and 
              <span className="text-blue-400 font-semibold">  Unmatched Value</span>.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/15 backdrop-blur-lg rounded-3xl p-3 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <Input
                    type="text"
                    placeholder="Search by location, estate name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 bg-white/95 border-0 text-gray-800 placeholder-gray-500 h-14 rounded-2xl text-lg font-medium shadow-inner"
                  />
                </div>
                <Button 
                  className="text-white px-10 h-14 rounded-2xl text-lg font-bold flex items-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: '#36454f' }}
                >
                  <span>Search Properties</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/15 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl group"
              >
                <div className="flex items-center space-x-5">
                  <div className="bg-white/25 rounded-2xl p-4 text-white group-hover:bg-white/35 transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  )
}