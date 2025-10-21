'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, Filter, MapPin, Home, DollarSign, Square, Star, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

interface Estate {
  id: string
  name: string
  location: string
  state: string
  pricePerPlot: number
  minPlotSize: number
  maxPlotSize: number
  titleType: string
  description: string
  features: string[]
  images: string[]
  isFeatured: boolean
  totalPlots: number
  availablePlots: number
  createdAt: string
}

const mockEstates: Estate[] = [
  {
    id: '1',
    name: 'Garden City Estate',
    location: 'Lugbe, Abuja',
    state: 'FCT',
    pricePerPlot: 3500000,
    minPlotSize: 300,
    maxPlotSize: 600,
    titleType: 'C of O',
    description: 'A beautiful residential estate with modern infrastructure and serene environment.',
    features: ['Perimeter Fencing', 'Paved Roads', 'Electricity', 'Water Supply', 'Drainage System'],
    images: ['/api/placeholder/400/300'],
    isFeatured: true,
    totalPlots: 150,
    availablePlots: 87,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: 'Royal Gardens',
    location: 'Airport Road, Abuja',
    state: 'FCT',
    pricePerPlot: 5500000,
    minPlotSize: 400,
    maxPlotSize: 800,
    titleType: 'R of O',
    description: 'Premium estate with luxury amenities and strategic location near the airport.',
    features: ['Gated Community', 'Street Lights', 'Security', 'Recreation Center', 'Landscaping'],
    images: ['/api/placeholder/400/300'],
    isFeatured: true,
    totalPlots: 100,
    availablePlots: 45,
    createdAt: '2024-01-20'
  },
  {
    id: '3',
    name: 'Green Valley Estate',
    location: 'Kubwa, Abuja',
    state: 'FCT',
    pricePerPlot: 2800000,
    minPlotSize: 350,
    maxPlotSize: 500,
    titleType: 'Allocation',
    description: 'Affordable housing estate with green environment and family-friendly atmosphere.',
    features: ['Play Ground', 'School Area', 'Shopping Complex', 'Health Center', 'Public Transport'],
    images: ['/api/placeholder/400/300'],
    isFeatured: false,
    totalPlots: 200,
    availablePlots: 132,
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    name: 'Sunset City',
    location: 'Life Camp, Abuja',
    state: 'FCT',
    pricePerPlot: 4200000,
    minPlotSize: 300,
    maxPlotSize: 450,
    titleType: 'C of O',
    description: 'Modern estate with stunning sunset views and contemporary architecture.',
    features: ['Modern Design', 'Solar Street Lights', 'Waste Management', 'Internet Infrastructure', 'Gym'],
    images: ['/api/placeholder/400/300'],
    isFeatured: true,
    totalPlots: 80,
    availablePlots: 23,
    createdAt: '2024-02-10'
  },
  {
    id: '5',
    name: 'Park View Estate',
    location: 'Asokoro, Abuja',
    state: 'FCT',
    pricePerPlot: 8500000,
    minPlotSize: 500,
    maxPlotSize: 1000,
    titleType: 'C of O',
    description: 'Ultra-premium estate in the heart of Abuja with diplomatic proximity.',
    features: ['Underground Utilities', 'Smart Home Ready', 'Private Park', '24/7 Security', 'Helipad'],
    images: ['/api/placeholder/400/300'],
    isFeatured: true,
    totalPlots: 50,
    availablePlots: 12,
    createdAt: '2024-02-15'
  }
]

const titleTypes = ['All', 'C of O', 'R of O', 'Allocation', 'Gazette']
const states = ['All', 'FCT', 'Lagos', 'Port Harcourt', 'Kano', 'Enugu']
const features = [
  'Perimeter Fencing',
  'Paved Roads',
  'Electricity',
  'Water Supply',
  'Drainage System',
  'Security',
  'Street Lights',
  'Recreation Center',
  'Gated Community'
]

export default function EstatesPage() {
  const [estates, setEstates] = useState<Estate[]>(mockEstates)
  const [filteredEstates, setFilteredEstates] = useState<Estate[]>(mockEstates)
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [selectedState, setSelectedState] = useState('All')
  const [selectedTitleType, setSelectedTitleType] = useState('All')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [sortBy, setSortBy] = useState('featured')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    let filtered = estates.filter(estate => {
      const matchesSearch = estate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           estate.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           estate.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesPrice = estate.pricePerPlot >= priceRange[0] && estate.pricePerPlot <= priceRange[1]
      const matchesState = selectedState === 'All' || estate.state === selectedState
      const matchesTitleType = selectedTitleType === 'All' || estate.titleType === selectedTitleType
      const matchesFeatures = selectedFeatures.length === 0 || 
                             selectedFeatures.some(feature => estate.features.includes(feature))

      return matchesSearch && matchesPrice && matchesState && matchesTitleType && matchesFeatures
    })

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.pricePerPlot - b.pricePerPlot
        case 'price-high':
          return b.pricePerPlot - a.pricePerPlot
        case 'name':
          return a.name.localeCompare(b.name)
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'featured':
        default:
          if (a.isFeatured && !b.isFeatured) return -1
          if (!a.isFeatured && b.isFeatured) return 1
          return 0
      }
    })

    setFilteredEstates(filtered)
  }, [estates, searchTerm, priceRange, selectedState, selectedTitleType, selectedFeatures, sortBy])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const EstateCard = ({ estate }: { estate: Estate }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Card className="overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            {estate.isFeatured && (
              <Badge className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                Featured
              </Badge>
            )}
            <div className="absolute top-4 right-4 flex gap-2 z-10">
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-sm">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
              </button>
              <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-sm">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <Badge className="absolute bottom-4 left-4 bg-black/70 hover:bg-black/80 text-white px-3 py-1 rounded-full text-sm">
              {estate.titleType}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors duration-300">
                {estate.name}
              </h3>
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                <span>{estate.location}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {estate.description}
          </p>

          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {formatPrice(estate.pricePerPlot)}
              </p>
              <p className="text-xs text-gray-500">per plot</p>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-gray-600">
                <Square className="w-4 h-4 mr-1 text-gray-500" />
                <span>{estate.minPlotSize}-{estate.maxPlotSize}m²</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {estate.availablePlots} of {estate.totalPlots} available
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {estate.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                {feature}
              </Badge>
            ))}
            {estate.features.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700 border-gray-200">
                +{estate.features.length - 3} more
              </Badge>
            )}
          </div>

          <div className="flex gap-2">
            <Link href={`/estates/${estate.id}`} className="flex-1">
              <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105">
                View Details
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 rounded-xl">
              <Home className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

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
              Premium Estates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our exclusive collection of premium estates in prime locations across Nigeria
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-gray-200"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search estates, locations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="lg:hidden rounded-xl border-gray-300">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>
                      Refine your estate search
                    </SheetDescription>
                  </SheetHeader>
                  <FiltersPanel />
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 rounded-xl border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A-Z</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-gray-200"
            >
              <h2 className="text-lg font-semibold mb-6 text-gray-900">Filters</h2>
              <FiltersPanel />
            </motion.div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-between mb-6"
            >
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredEstates.length}</span> estates
              </p>
              
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-xl"
                >
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-xl"
                >
                  List
                </Button>
              </div>
            </motion.div>

            {/* Estates Grid/List */}
            {filteredEstates.length > 0 ? (
              <div className={viewMode === 'grid' ? 
                "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" : 
                "space-y-6"
              }>
                {filteredEstates.map((estate, index) => (
                  <motion.div
                    key={estate.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <EstateCard estate={estate} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Home className="w-10 h-10 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No estates found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('')
                    setPriceRange([0, 10000000])
                    setSelectedState('All')
                    setSelectedTitleType('All')
                    setSelectedFeatures([])
                  }}
                  variant="outline"
                  className="rounded-xl border-gray-300"
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )

  function FiltersPanel() {
    return (
      <div className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range
          </label>
          <div className="space-y-3">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={10000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            State
          </label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Title Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Title Type
          </label>
          <Select value={selectedTitleType} onValueChange={setSelectedTitleType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {titleTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Features */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Features
          </label>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {features.map((feature) => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={selectedFeatures.includes(feature)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedFeatures([...selectedFeatures, feature])
                    } else {
                      setSelectedFeatures(selectedFeatures.filter(f => f !== feature))
                    }
                  }}
                />
                <label htmlFor={feature} className="text-sm text-gray-700">
                  {feature}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setPriceRange([0, 10000000])
            setSelectedState('All')
            setSelectedTitleType('All')
            setSelectedFeatures([])
          }}
        >
          Clear Filters
        </Button>
      </div>
    )
  }
}