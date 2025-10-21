import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Building, MapPin, Heart, Eye, Phone, ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

interface Estate {
  id: string
  name: string
  location: string
  priceFrom: string
  plots: number
  estateSizeHa: number
  amenities: string[]
  image: string
  status: 'Available' | 'Selling Fast' | 'Coming Soon' | 'Sold Out'
  description: string
}

const estates: Estate[] = [
  {
    id: 'rehoboth-city',
    name: 'Rehoboth City Estate',
    location: 'Life-camp,Abuja, FCT',
    priceFrom: '₦2.5M',
    plots: 150,
    estateSizeHa: 25,
    amenities: ['24/7 Security', 'Tarred Roads', 'Electricity', 'Water Supply', 'Drainage'],
    image: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    status: 'Available',
    description:
      'A thoughtfully planned community with modern infrastructure and swift access to key routes across Abuja.'
  },
  {
    id: 'rehoboth-city',
    name: 'Rehoboth City Estate',
    location: 'Lifecamp, Abuja, FCT',
    priceFrom: '₦2.5M',
    plots: 150,
    estateSizeHa: 25,
    amenities: ['24/7 Security', 'Tarred Roads', 'Electricity', 'Water Supply', 'Drainage'],
    image: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    status: 'Sold Out',
    description:
      'A thoughtfully planned community with modern infrastructure and swift access to key routes across Abuja.'
  },
  {
    id: 'rehoboth-city',
    name: 'Rehoboth City Estate',
    location: 'Abuja, FCT',
    priceFrom: '₦2.5M',
    plots: 150,
    estateSizeHa: 25,
    amenities: ['24/7 Security', 'Tarred Roads', 'Electricity', 'Water Supply', 'Drainage'],
    image: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    status: 'Available',
    description:
      'A thoughtfully planned community with modern infrastructure and swift access to key routes across Abuja.'
  },
  {
    id: 'rehoboth-city',
    name: 'Rehoboth City Estate',
    location: 'Abuja, FCT',
    priceFrom: '₦2.5M',
    plots: 150,
    estateSizeHa: 25,
    amenities: ['24/7 Security', 'Tarred Roads', 'Electricity', 'Water Supply', 'Drainage'],
    image: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    status: 'Sold Out',
    description:
      'A thoughtfully planned community with modern infrastructure and swift access to key routes across Abuja.'
  },
  {
    id: 'polo-city',
    name: 'Polo City Estate',
    location: 'Abuja, FCT',
    priceFrom: '₦1.8M',
    plots: 200,
    estateSizeHa: 30,
    amenities: ['Gated Community', 'Recreation Center', 'Schools Nearby', 'Shopping Mall', 'Hospital'],
    image: `${import.meta.env.BASE_URL}estate-prototypes/prototype1.webp`,
    status: 'Selling Fast',
    description:
      'Family-friendly living in a flourishing corridor with essential amenities and quality infrastructure.'
  }
]

export default function EstatesPage() {
  const [selectedEstate, setSelectedEstate] = useState<Estate | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Soft backdrop accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-transparent to-gray-50/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-5">
              <div className="w-20 h-20 rounded-3xl border border-white/60 bg-white/70 shadow-xl backdrop-blur flex items-center justify-center">
                <Building className="w-10 h-10 text-gray-700" />
              </div>
            </div>

            <span className="inline-flex items-center justify-center rounded-full border border-rose-200/60 bg-rose-50/60 px-4 py-1.5 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur">
              Estates
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="block text-gray-900">Explore Our Estates</span>
              <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">Premium properties in Abuja</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover premium residential developments with verified titles, infrastructure, and flexible plans.
            </p>
            <p className="mt-2 text-sm text-gray-500">Currently showcasing {estates.length} active estates</p>
          </motion.div>
        </div>
      </section>

      {/* Estates Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {estates.map((estate, index) => (
              <motion.div
                key={estate.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01, rotate: -0.2 }}
                className="group cursor-pointer"
              >
                <Card className="relative bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden h-full">
                  {/* shine */}
                  <div className="pointer-events-none absolute -inset-y-10 -left-24 w-28 -skew-x-12 bg-white/40 blur-xl transition-transform duration-700 group-hover:translate-x-[220%]" />
                  <CardContent className="p-0">
                    {/* Image */}
                    <div className="relative h-64 rounded-sm overflow-hidden">
                      {/* image */}
                      <img
                        src={estate.image}
                        alt={estate.name}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge 
                          className={`${
                            estate.status === 'Available' 
                              ? 'bg-green-500' 
                              : estate.status === 'Selling Fast'
                              ? 'bg-orange-500'
                              : 'bg-red-500'
                          } text-white`}
                        >
                          {estate.status}
                        </Badge>
                      </div>


                      {/* Price */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-lg font-bold text-gray-900">From {estate.priceFrom}</span>
                        </div>
                      </div>

                      {/* Fallback icon overlay for ambience */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <Building className="w-24 h-24 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{estate.name}</h3>
                        <div className="flex items-center text-gray-600 mb-3">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{estate.location}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{estate.description}</p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-xl font-bold text-gray-900">{estate.plots}</div>
                          <div className="text-sm text-gray-600">Total Plots</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-xl">
                          <div className="text-xl font-bold text-gray-900">{estate.estateSizeHa} Ha</div>
                          <div className="text-sm text-gray-600">Estate Size</div>
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {estate.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                            <Badge key={amenityIndex} variant="secondary" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {estate.amenities.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{estate.amenities.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <Link to={`/estates/${estate.id}`} className="flex-1">
                          <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        <a href="tel:+2348000000000" className="flex-1">
                          <Button variant="outline" className="w-full border-gray-300 rounded-xl">
                            <Phone className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
              Ready to Invest?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Schedule a site inspection today and secure your dream plot in any of our premium estates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Book Inspection
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                View All Properties
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}