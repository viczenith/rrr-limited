import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Home, Shield, TrendingUp, Phone, Mail, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstateDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Estate data - in a real app this would come from an API or database
  const estateData = {
    'rehoboth-city': {
      title: 'Rehoboth City',
      location: 'Abuja, FCT',
      description: 'A premium residential estate offering modern living with world-class amenities in the heart of Abuja.',
      longDescription: 'Rehoboth City is strategically positioned to give residents swift access to the city center while maintaining a serene residential atmosphere. Expect modern infrastructure, 24/7 security, quality road networks, and proximity to schools, hospitals, and shopping centers.',
      price: 'From ₦2.5M',
      plotsBySize: [
        { size: '300sqm', total: 120, available: 50 },
        { size: '500sqm', total: 150, available: 40 },
        { size: '600sqm', total: 150, available: 60 },
        { size: '1000sqm', total: 80, available: 30 },
      ],
      amenities: [
        '24/7 Security',
        'Good Road Network',
        'Electricity Supply',
        'Water Treatment Plant',
        'Recreation Center',
        "Children's Playground",
        'Shopping Complex',
        'Medical Center'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      icon: '🏘️',
      status: 'Available',
      coordinates: { lat: 8.7842, lng: 7.0472 }
    },
    'polo-city': {
      title: 'Polo City Estate',
      location: 'Abuja, FCT',
      description: 'Family-friendly living in a flourishing corridor with essential amenities and quality infrastructure.',
      longDescription: 'Polo City Estate delivers comfort and convenience with a secure, well-planned neighbourhood, essential utilities, and swift access to key destinations across Abuja.',
      price: 'From ₦1.8M',
      plotsBySize: [
        { size: '300sqm', total: 80, available: 0 }, // Sold out example
        { size: '450sqm', total: 60, available: 10 },
        { size: '600sqm', total: 60, available: 10 },
      ],
      amenities: [
        'Gated Community',
        'Recreation Center',
        'Schools Nearby',
        'Shopping Mall',
        'Hospital'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      icon: '🏘️',
      status: 'Selling Fast',
      coordinates: { lat: 8.95, lng: 7.25 }
    },
    'lifecamp': {
      title: 'Lifecamp Extension',
      location: 'Lifecamp, Abuja',
      description: 'Modern urban development in the prestigious Lifecamp area with excellent infrastructure and investment potential.',
      longDescription: 'Lifecamp Extension represents the pinnacle of urban development in Abuja. Located in one of the most sought-after areas of the FCT, this estate offers unparalleled investment opportunities with guaranteed returns and modern amenities.',
      price: 'From ₦4.2M',
      plotsBySize: [
        { size: '400sqm', total: 90, available: 25 },
        { size: '500sqm', total: 90, available: 20 },
        { size: '800sqm', total: 60, available: 10 },
        { size: '1200sqm', total: 60, available: 0 },
      ],
      amenities: [
        'Perimeter Fencing',
        'Street Lighting',
        'Drainage System',
        'Power Infrastructure',
        'Water Supply',
        'Recreational Facilities',
        'Commercial Hub',
        'Security House'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      icon: '🏙️',
      status: 'Hot Sale',
      coordinates: { lat: 9.0765, lng: 7.3986 }
    },
    'gwarinpa': {
      title: 'Gwarinpa Extension',
      location: 'Gwarinpa, Abuja',
      description: 'Exclusive luxury plots in the heart of Gwarinpa with premium amenities and strategic location.',
      longDescription: 'Gwarinpa Extension offers exclusive luxury living in one of Abuja\'s most established residential areas. With its strategic location and premium amenities, this estate represents the perfect blend of comfort, luxury, and investment potential.',
      price: 'From ₦6.8M',
      plotsBySize: [
        { size: '500sqm', total: 60, available: 5 },
        { size: '600sqm', total: 60, available: 0 },
        { size: '1000sqm', total: 50, available: 8 },
        { size: '1500sqm', total: 30, available: 2 },
      ],
      amenities: [
        'Luxury Gate House',
        'CCTV Surveillance',
        'Paved Roads',
        'Underground Cables',
        'Central Water System',
        'Sports Complex',
        'Business District',
        'Green Areas'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      icon: '🏛️',
      status: 'Premium',
      coordinates: { lat: 9.0579, lng: 7.4951 }
    },
    'kubwa': {
      title: 'Kubwa Hills',
      location: 'Kubwa, Abuja',
      description: 'Elevated living experience in the scenic Kubwa hills with panoramic views and modern facilities.',
      longDescription: 'Kubwa Hills offers an elevated living experience with breathtaking panoramic views of Abuja. Nestled in the scenic hills of Kubwa, this estate provides a perfect escape from city life while maintaining easy access to urban amenities.',
      price: 'From ₦3.5M',
      plotsBySize: [
        { size: '400sqm', total: 120, available: 60 },
        { size: '600sqm', total: 120, available: 40 },
        { size: '800sqm', total: 80, available: 20 },
        { size: '1200sqm', total: 80, available: 0 },
      ],
      amenities: [
        'Scenic Views',
        'Hill Top Location',
        'Fresh Air Environment',
        'Security Patrol',
        'Access Roads',
        'Power Supply',
        'Borehole Water',
        'Recreation Park'
      ],
      images: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ],
      icon: '⛰️',
      status: 'New Launch',
      coordinates: { lat: 9.1574, lng: 7.3421 }
    }
  };

  const estate = id ? estateData[id as keyof typeof estateData] : null;

  // Derive totals from plotsBySize when available to keep progress and counts in sync
  const derivedTotals = estate && 'plotsBySize' in estate
    ? (estate as any).plotsBySize.reduce(
        (acc: { total: number; available: number }, p: { total: number; available: number }) => {
          acc.total += p.total
          acc.available += p.available
          return acc
        },
        { total: 0, available: 0 }
      )
    : null

  if (!estate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Estate Not Found</h1>
          <Link to="/estates" className="text-blue-600 hover:underline">
            Back to Estates
          </Link>
        </div>
      </div>
    );
  }

  const totalPlots = derivedTotals ? derivedTotals.total : (estate as any).totalPlots || 0
  const availablePlots = derivedTotals ? derivedTotals.available : ((estate as any).totalPlots || 0) - ((estate as any).soldPlots || 0)
  const soldPlots = totalPlots - availablePlots
  const progressPercentage = totalPlots > 0 ? (soldPlots / totalPlots) * 100 : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <Link 
              to="/estates"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Estates
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">{estate.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{estate.title}</h1>
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin size={20} />
                  <span className="text-lg">{estate.location}</span>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              {estate.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Estate Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {estate.longDescription}
                </p>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Amenities & Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {estate.amenities.map((amenity, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Plot Sizes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Plot Sizes</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {('plotsBySize' in estate
                    ? (estate as any).plotsBySize
                    : (((estate as any).plotSizes || []) as string[]).map((s) => ({ size: s, total: 0, available: 0 }))
                  ).map((p: { size: string; total: number; available: number }, index: number) => {
                    const sold = Math.max(p.total - p.available, 0)
                    const soldOut = p.available === 0 && p.total > 0
                    const badgeClass = soldOut ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                    return (
                      <div
                        key={index}
                        className="relative text-center p-4 bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <span className="block font-semibold text-gray-800">{p.size}</span>
                        <div className={`mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${badgeClass}`}>
                          {soldOut ? (
                            <>
                              <span>{sold}/{p.total}</span>
                              <span>Completely Sold Out</span>
                            </>
                          ) : (
                            <>
                              <span>{p.available}/{p.total}</span>
                              <span>Available</span>
                            </>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            </div>

            {/* Right Column - CTA & Info */}
            <div className="space-y-6">
              {/* Price & Status */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg sticky top-6"
              >
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">
                    {estate.status}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{estate.price}</div>
                  <div className="text-gray-600">Starting Price</div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Sold: {soldPlots}</span>
                    <span>Total: {totalPlots}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="text-center text-sm text-gray-600 mt-2">
                    {Math.round(progressPercentage)}% Sold
                  </div>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-blue-900 to-slate-800 text-white py-4 px-6 rounded-xl font-semibold text-center block hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Book Inspection
                  </Link>
                  
                  <a
                    href="tel:+2348123456789"
                    className="w-full border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-xl font-semibold text-center hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>

                  <a
                    href="mailto:info@rrrealty.com"
                    className="w-full border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-xl font-semibold text-center hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Email Us
                  </a>
                </div>

                {/* Quick Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5" />
                    <span className="text-sm">Available plots: {availablePlots}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <TrendingUp className="w-5 h-5" />
                    <span className="text-sm">High investment potential</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">Flexible payment plans</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateDetail;