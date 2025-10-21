'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, MapPin, Home, DollarSign, Square, Calendar, Star, Heart, Share2, Phone, Mail } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: "Luxury Garden Villa",
    type: "Residential",
    location: "Asokoro, Abuja",
    price: "₦85,000,000",
    size: "450 sqm",
    bedrooms: 4,
    bathrooms: 3,
    featured: true,
    rating: 4.8,
    image: "/api/placeholder/400/300",
    description: "Stunning luxury villa with private garden and modern amenities",
    amenities: ["Swimming Pool", "Garden", "Garage", "Security"]
  },
  {
    id: 2,
    title: "Commercial Plaza Space",
    type: "Commercial",
    location: "Central Business District, Abuja",
    price: "₦120,000,000",
    size: "600 sqm",
    bedrooms: 0,
    bathrooms: 2,
    featured: true,
    rating: 4.9,
    image: "/api/placeholder/400/300",
    description: "Prime commercial space in the heart of business district",
    amenities: ["Parking", "Security", "Elevator", "24/7 Access"]
  },
  {
    id: 3,
    title: "Modern Family Home",
    type: "Residential",
    location: "Maitama, Abuja",
    price: "₦65,000,000",
    size: "350 sqm",
    bedrooms: 3,
    bathrooms: 2,
    featured: false,
    rating: 4.6,
    image: "/api/placeholder/400/300",
    description: "Perfect family home with spacious rooms and modern design",
    amenities: ["Garden", "Parking", "Security", "Play Area"]
  },
  {
    id: 4,
    title: "Investment Duplex",
    type: "Residential",
    location: "Jabi, Abuja",
    price: "₦95,000,000",
    size: "500 sqm",
    bedrooms: 5,
    bathrooms: 4,
    featured: true,
    rating: 4.7,
    image: "/api/placeholder/400/300",
    description: "High-yield investment property with rental potential",
    amenities: ["2 Kitchens", "Balcony", "Parking", "Security"]
  },
  {
    id: 5,
    title: "Office Complex",
    type: "Commercial",
    location: "Wuse II, Abuja",
    price: "₦150,000,000",
    size: "800 sqm",
    bedrooms: 0,
    bathrooms: 4,
    featured: false,
    rating: 4.5,
    image: "/api/placeholder/400/300",
    description: "Modern office complex with multiple units",
    amenities: ["Conference Rooms", "Parking", "Security", "Cafeteria"]
  },
  {
    id: 6,
    title: "Penthouse Apartment",
    type: "Residential",
    location: "Asokoro, Abuja",
    price: "₦110,000,000",
    size: "280 sqm",
    bedrooms: 3,
    bathrooms: 2,
    featured: true,
    rating: 4.9,
    image: "/api/placeholder/400/300",
    description: "Luxurious penthouse with panoramic city views",
    amenities: ["Rooftop Access", "Gym", "Security", "Concierge"]
  }
]

const propertyTypes = ["All", "Residential", "Commercial", "Land"]
const priceRanges = ["All", "Under ₦50M", "₦50M - ₦100M", "₦100M - ₦150M", "Above ₦150M"]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")
  const [sortBy, setSortBy] = useState("featured")
  const [savedProperties, setSavedProperties] = useState<number[]>([])

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === "All" || property.type === selectedType
    const matchesPrice = selectedPrice === "All" || checkPriceRange(property.price, selectedPrice)
    
    return matchesSearch && matchesType && matchesPrice
  })

  function checkPriceRange(price: string, range: string) {
    const numericPrice = parseInt(price.replace(/[₦,]/g, ''))
    switch (range) {
      case "Under ₦50M": return numericPrice < 50000000
      case "₦50M - ₦100M": return numericPrice >= 50000000 && numericPrice <= 100000000
      case "₦100M - ₦150M": return numericPrice > 100000000 && numericPrice <= 150000000
      case "Above ₦150M": return numericPrice > 150000000
      default: return true
    }
  }

  const toggleSaveProperty = (id: number) => {
    setSavedProperties(prev => 
      prev.includes(id) ? prev.filter(pid => pid !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 via-transparent to-gray-50/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Premium Properties
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of residential and commercial properties in prime locations across Abuja
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
                />
              </div>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
                  <div className="relative">
                    <div className="h-56 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                      {property.featured && (
                        <Badge className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          onClick={() => toggleSaveProperty(property.id)}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-sm"
                        >
                          <Heart className={`w-5 h-5 ${savedProperties.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                        </button>
                        <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-sm">
                          <Share2 className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-1 mb-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold">{property.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                          {property.location}
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                        {property.type}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Square className="w-4 h-4 text-gray-500" />
                          <span>{property.size}</span>
                        </div>
                        {property.bedrooms > 0 && (
                          <div className="flex items-center gap-1">
                            <Home className="w-4 h-4 text-gray-500" />
                            <span>{property.bedrooms} Beds</span>
                          </div>
                        )}
                        {property.bathrooms > 0 && (
                          <div className="flex items-center gap-1">
                            <Home className="w-4 h-4 text-gray-500" />
                            <span>{property.bathrooms} Baths</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {property.price}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.amenities.slice(0, 3).map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                          {amenity}
                        </Badge>
                      ))}
                      {property.amenities.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                          +{property.amenities.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 rounded-xl">
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredProperties.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or filters</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 rounded-2xl p-12 text-center text-white shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let our experts help you find the perfect property tailored to your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-xl font-bold px-8 py-4 hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Send Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}