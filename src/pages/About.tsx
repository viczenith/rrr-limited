'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { 
  MapPin, 
  Phone,
  Mail,
  CheckCircle,
  Target,
  Home,
  PiggyBank,
  Briefcase,
  Eye,
  Quote,
  Sparkles,
  Globe,
  Crown,
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 }
}

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
}

// Data

const services = [
  {
    icon: Home,
    title: "Real Estate",
    description: "Premium residential and commercial properties with verified documentation in strategic locations across Abuja.",
    features: ["Verified C of O", "Prime Locations", "Flexible Payment", "Legal Support"],
    color: "from-amber-400 to-amber-600"
  },
  {
    icon: Target,
    title: "Project Management",
    description: "Professional project management services ensuring successful property development and timely delivery.",
    features: ["Timeline Management", "Quality Control", "Budget Optimization", "Risk Management"],
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: PiggyBank,
    title: "Investment Advisory",
    description: "Expert guidance on real estate investments with comprehensive market analysis and ROI projections.",
    features: ["Market Analysis", "ROI Projections", "Risk Assessment", "Portfolio Management"],
    color: "from-green-400 to-green-600"
  }
]

const team = [
  {
    name: "Jossy Okoro",
    position: "Administrative Director",
    image: "/api/placeholder/300/300",
    bio: "With over 15 years in real estate, Jossy leads our company with vision and expertise.",
    expertise: ["Strategic Planning", "Business Development", "Client Relations"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Sarah Johnson",
    position: "Head of Operations",
    image: "/api/placeholder/300/300",
    bio: "Sarah ensures seamless operations and exceptional service delivery across all our projects.",
    expertise: ["Operations Management", "Process Optimization", "Team Leadership"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Michael Chen",
    position: "Head of Legal Affairs",
    image: "/api/placeholder/300/300",
    bio: "Michael handles all legal aspects ensuring compliance and protecting client interests.",
    expertise: ["Real Estate Law", "Contract Negotiation", "Due Diligence"],
    linkedin: "#",
    twitter: "#"
  },
  {
    name: "Emily Davis",
    position: "Head of Marketing",
    image: "/api/placeholder/300/300",
    bio: "Emily drives our marketing initiatives and builds strong relationships with clients.",
    expertise: ["Digital Marketing", "Brand Strategy", "Client Acquisition"],
    linkedin: "#",
    twitter: "#"
  }
]

// achievements section removed per requirements

export default function AboutPage() {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-blue-50/30"></div>
        
        {/* Floating Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-8 h-8 bg-amber-400/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 left-1/4 w-6 h-6 bg-green-400/20 rounded-full"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-8 py-4 mb-8"
            >
              <Crown className="w-6 h-6 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">Premium Real Estate Excellence</span>
              <Sparkles className="w-6 h-6 text-blue-600" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Where <span className="font-semibold text-amber-600">righteousness</span> meets 
              <span className="font-semibold text-blue-600"> wealth creation</span> - Your trusted partner in premium real estate excellence since 2014
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Our Locations
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-8 shadow-lg">
                <Globe className="w-5 h-5 text-amber-600" />
                <span className="text-sm font-semibold text-gray-700">Our Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Our Story of 
                <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in <strong>2014</strong> with a vision to revolutionize Nigeria's real estate landscape, 
                  Righteous & Rich Realty has grown from a passionate startup to one of Abuja's most trusted 
                  real estate companies.
                </p>
                <p>
                  Our journey began with a simple yet powerful belief: that every Nigerian deserves access to 
                  <strong> premium, verified, and affordable property opportunities</strong>. We recognized the 
                  challenges in the market - lack of transparency, unreliable documentation, and limited 
                  financing options.
                </p>
                <p>
                  Today, we've successfully facilitated over <strong>₦50 billion</strong> in property transactions, 
                  helped <strong>1,200+ families</strong> find their dream homes, and built a reputation for 
                  <strong> integrity, innovation, and exceptional service delivery</strong>.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">RC 1234567</h4>
                    <p className="text-gray-600">FCTA Approved & CAC Registered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={slideInRight}
              initial="initial"  
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-blue-400/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="h-80 bg-gradient-to-br from-amber-50 via-blue-50 to-amber-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* CEO Portrait with Elegant Frame (hero-style) */}
                    <div className="relative w-72 h-72 group-hover:scale-105 transition-transform duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-blue-500 rounded-full p-1 animate-pulse">
                        <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full p-4">
                          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-amber-400">
                            {!imageError ? (
                              <img
                                src="/rrr-ceo.jpeg"
                                alt="CEO - Righteous & Rich Realty"
                                className="w-full h-full object-cover object-center"
                                onError={() => setImageError(true)}
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-5xl font-bold text-amber-600 mb-1">RRR</div>
                                  <div className="text-xs text-gray-600 font-semibold">CEO</div>
                                </div>
                              </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            <div className="absolute -inset-2 border-4 border-dashed border-amber-400/30 rounded-full animate-spin-slow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MD's Message Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Message from our 
              <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                Managing Director
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A word from our visionary leader about our commitment to excellence
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={scaleIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-0">
                    {/* Profile Section */}
                    <div className="bg-gradient-to-br from-amber-500 to-blue-600 p-8 text-white text-center relative overflow-hidden">
                      {/* Background decorative elements */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                      
                      {/* CEO Portrait with Elegant Frame (condensed) */}
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        className="relative mx-auto mb-6 w-48 h-48"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-blue-500 rounded-full p-1 animate-pulse">
                          <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full p-3">
                            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-amber-400">
                              {!imageError ? (
                                <img
                                  src="/rrr-ceo.jpeg"
                                  alt="CEO - Righteous & Rich Realty"
                                  className="w-full h-full object-cover object-center"
                                  onError={() => setImageError(true)}
                                />
                              ) : (
                                <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                                  <div className="text-center">
                                    <div className="text-4xl font-bold text-amber-600 mb-1">RRR</div>
                                    <div className="text-xs text-gray-600 font-semibold">CEO</div>
                                  </div>
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                              <div className="absolute -inset-2 border-4 border-dashed border-amber-400/30 rounded-full animate-spin-slow"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      
                      <div className="relative">
                        <h3 className="text-2xl font-bold mb-2">Blessing Samuel</h3>
                        <p className="text-amber-100 mb-1 font-semibold">Managing Director & CEO</p>
                        <p className="text-amber-200 text-sm mb-4">B.Sc, MBA, FRICS</p>
                        
                        <div className="space-y-3 text-sm"></div>
                        
                        {/* Contact buttons removed for brevity */}
                      </div>
                    </div>
                    
                    {/* Message Section */}
                    <div className="md:col-span-2 p-8">
                      <Quote className="w-12 h-12 text-amber-500 mb-6" />
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="text-lg">
                          <strong>Dear Valued Clients and Partners,</strong>
                        </p>
                        <p>
                          When I founded Righteous & Rich Realty over a decade ago, I had a simple yet ambitious vision: 
                          to create a real estate company that operates with unwavering integrity while helping Nigerians 
                          build generational wealth through strategic property investments.
                        </p>
                        <p>
                          Today, I'm proud to say that we've not only achieved this vision but exceeded it. Our commitment 
                          to <strong>righteousness in business practices</strong> and our track record of creating 
                          <strong> wealth for our clients</strong> has established us as a trusted name in Nigeria's 
                          real estate sector.
                        </p>
                        <p>
                          Every property we sell, every investment we recommend, and every service we provide is guided 
                          by our core principle: <em>"Your success is our success."</em> We don't just sell properties; 
                          we build relationships, create opportunities, and help dreams become reality.
                        </p>
                        <p className="font-semibold text-gray-900">
                          Thank you for trusting us with your real estate journey. Together, we're building a prosperous future.
                        </p>
                      </div>
                      
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
                            {!imageError ? (
                              <img src="/rrr-ceo.jpeg" alt="CEO" className="w-full h-full object-cover" onError={() => setImageError(true)} />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                                <span className="text-amber-600 font-bold">CEO</span>
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">Blessing Samuel</p>
                            <p className="text-gray-600">Managing Director & CEO</p>
                            <p className="text-sm text-gray-500">Righteous & Rich Realty</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-8 shadow-lg">
              <Briefcase className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">What We Offer</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Premium 
              <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions designed to maximize your investment potential 
              and secure your financial future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group"
              >
                <Card className="h-full bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-8">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-blue-500/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-amber-300" />
              <span className="text-sm font-semibold text-white">Our Purpose</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mission & 
              <span className="bg-gradient-to-r from-amber-300 to-blue-300 bg-clip-text text-transparent">
                Vision
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center"
                  >
                    <Target className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To democratize real estate investment in Nigeria by providing transparent, 
                  verified, and accessible property opportunities that enable every Nigerian 
                  to build generational wealth through strategic real estate investments.
                </p>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl p-8 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center"
                  >
                    <Eye className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-200 leading-relaxed">
                  To become Africa's most trusted real estate company, recognized for our 
                  integrity, innovation, and unwavering commitment to transforming lives 
                  through strategic property investments and exceptional service delivery.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Brief profiles of our leaders</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <Card className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border-4 border-amber-400 shadow mb-4">
                      {!imageError ? (
                        <img src="/rrr-ceo.jpeg" alt={member.name} className="w-full h-full object-cover" onError={() => setImageError(true)} />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                          <span className="text-amber-600 font-bold">CEO</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-amber-600 font-semibold">{member.position}</p>
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
            className="bg-gray-600 rounded-2xl p-12 text-center text-white shadow-xl"
          >
            <h2 className="text-4xl font-bold mb-4">
              Partner With Us
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Experience the difference of working with a team that truly cares about your real estate goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-600 hover:bg-gray-100 transition-all duration-300 rounded-xl font-bold px-8 py-4 hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}