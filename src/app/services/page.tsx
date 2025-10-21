'use client'

import { motion } from 'framer-motion'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Home, 
  Search, 
  FileText, 
  Calculator, 
  Camera, 
  Users, 
  Shield, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Property Sales & Purchases",
    description: "Expert guidance through every step of buying and selling residential and commercial properties",
    icon: Home,
    features: ["Free Property Valuation", "Market Analysis", "Negotiation Support", "Documentation"],
  },
  {
    id: 2,
    title: "Property Investment Advisory",
    description: "Strategic investment advice to maximize returns and build wealth through real estate",
    icon: TrendingUp,
    features: ["ROI Analysis", "Portfolio Management", "Risk Assessment", "Market Trends"],
  },
  {
    id: 3,
    title: "Legal & Documentation",
    description: "Complete legal support ensuring secure and compliant property transactions",
    icon: FileText,
    features: ["Title Verification", "Contract Review", "Registration Support", "Legal Compliance"],
  },
  {
    id: 4,
    title: "Property Management",
    description: "Comprehensive management services for property owners and investors",
    icon: Shield,
    features: ["Tenant Management", "Rent Collection", "Maintenance", "Reporting"],
  },
  {
    id: 5,
    title: "Site Inspection & Verification",
    description: "Thorough property inspections and verification to ensure informed decisions",
    icon: Search,
    features: ["Physical Inspection", "Document Verification", "Location Analysis", "Due Diligence"],
  },
  {
    id: 6,
    title: "Mortgage & Financing",
    description: "Assistance with securing the best financing options for your property purchase",
    icon: Calculator,
    features: ["Loan Application", "Bank Negotiation", "Interest Rate Analysis", "Repayment Planning"],
  }
]

const process = [
  { step: 1, title: "Initial Consultation", description: "Understanding your needs and requirements" },
  { step: 2, title: "Property Search", description: "Finding properties that match your criteria" },
  { step: 3, title: "Site Inspection", description: "Physical verification and assessment" },
  { step: 4, title: "Due Diligence", description: "Legal and documentation verification" },
  { step: 5, title: "Negotiation", description: "Getting the best terms and price" },
  { step: 6, title: "Closing", description: "Finalizing the transaction" }
]

const testimonials = [
  {
    id: 1,
    name: "Ahmed Ibrahim",
    role: "Property Investor",
    content: "Exceptional service! They helped me find the perfect investment property with excellent ROI. The team is professional and knowledgeable.",
    rating: 5,
    avatar: "/api/placeholder/50/50"
  },
  {
    id: 2,
    name: "Chioma Okonkwo",
    role: "Homeowner",
    content: "Made my first home purchase seamless and stress-free. Their guidance throughout the process was invaluable.",
    rating: 5,
    avatar: "/api/placeholder/50/50"
  },
  {
    id: 3,
    name: "Tunde Adeyemi",
    role: "Commercial Developer",
    content: "Outstanding property management services. They handle everything efficiently, allowing me to focus on my business.",
    rating: 5,
    avatar: "/api/placeholder/50/50"
  }
]

export default function ServicesPage() {
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
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions tailored to meet your unique needs and exceed your expectations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl">
                  <div className="h-2 bg-gray-900"></div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-gray-700" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to ensure smooth and successful real estate transactions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-6 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Let us help you achieve your real estate goals with our expert services
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