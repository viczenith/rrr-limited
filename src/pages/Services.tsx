import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Building, 
  Users, 
  DollarSign, 
  FileText,
  Phone,
  ArrowRight,
  Shield,
  TrendingUp,
  Home,
  Calculator,
  Briefcase,
  MapPin,
  Award,
  Clock,
  Headphones
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'

const services = [
  {
    icon: Building,
    title: 'Real Estate Sales',
    description: 'Premium residential and commercial properties with verified documentation across strategic locations in Abuja.',
    features: ['Verified C of O', 'Prime Locations', 'Flexible Payment Plans', 'Legal Documentation'],
    price: 'From ₦2.5M',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: Users,
    title: 'Property Management',
    description: 'Comprehensive property management services ensuring maximum returns on your real estate investments.',
    features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', '24/7 Support'],
    price: '5% Management Fee',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: DollarSign,
    title: 'Investment Advisory',
    description: 'Expert guidance on real estate investments with detailed market analysis and ROI projections.',
    features: ['Market Analysis', 'ROI Projections', 'Risk Assessment', 'Portfolio Planning'],
    price: 'From ₦50K',
    color: 'from-amber-400 to-amber-600'
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description: 'Complete legal services for property transactions ensuring compliance and protecting your interests.',
    features: ['Title Verification', 'Contract Drafting', 'Due Diligence', 'Ownership Transfer'],
    price: 'From ₦100K',
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: Calculator,
    title: 'Mortgage & Financing',
    description: 'Flexible financing options and mortgage assistance to make property ownership accessible.',
    features: ['Mortgage Processing', 'Loan Advisory', 'Payment Plans', 'Financial Planning'],
    price: 'Competitive Rates',
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    icon: MapPin,
    title: 'Site Inspection',
    description: 'Professional site inspection and property evaluation services with detailed reports.',
    features: ['Property Assessment', 'Location Analysis', 'Infrastructure Review', 'Detailed Reports'],
    price: 'From ₦25K',
    color: 'from-red-400 to-red-600'
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We understand your needs and budget to recommend the best properties for you.',
    icon: Users
  },
  {
    number: '02',
    title: 'Property Selection',
    description: 'Browse our curated selection of verified properties that match your criteria.',
    icon: Building
  },
  {
    number: '03',
    title: 'Site Inspection',
    description: 'Visit properties with our expert team for guided tours and detailed assessments.',
    icon: MapPin
  },
  {
    number: '04',
    title: 'Documentation',
    description: 'Complete all legal paperwork with our assistance ensuring transparent transactions.',
    icon: FileText
  },
  {
    number: '05',
    title: 'Payment & Transfer',
    description: 'Flexible payment options and seamless ownership transfer process.',
    icon: DollarSign
  },
  {
    number: '06',
    title: 'After-Sales Support',
    description: 'Ongoing support and property management services for your peace of mind.',
    icon: Headphones
  }
]

const whyChooseUs = [
  {
    icon: Shield,
    title: 'Verified Properties',
    description: 'All properties come with proper documentation and legal verification.'
  },
  {
    icon: TrendingUp,
    title: 'Market Expertise',
    description: 'Over 15 years of experience in the Nigerian real estate market.'
  },
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized for excellence in customer service and property delivery.'
  },
  {
    icon: Clock,
    title: 'Quick Processing',
    description: 'Fast-track documentation and property transfer processes.'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
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
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center">
                <Briefcase className="w-10 h-10 text-gray-700" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate solutions designed to make your property journey seamless and successful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From property sales to comprehensive management, we provide end-to-end real estate services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden h-full">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${service.color} p-8 text-white text-center relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10"></div>
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="relative w-20 h-20 mx-auto mb-4 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm"
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h3 className="relative text-2xl font-bold mb-2">{service.title}</h3>
                      <Badge className="bg-white/20 text-white border-0">{service.price}</Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Button className={`w-full bg-gradient-to-r ${service.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach to make your property acquisition journey smooth and transparent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl p-8 text-center h-full">
                  <div className="relative">
                    {/* Step Number */}
                    <div className="text-6xl font-bold text-white/20 mb-4">{step.number}</div>
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-blue-600 rounded-2xl flex items-center justify-center"
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Years of experience and commitment to excellence make us your ideal real estate partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-3xl p-8 text-center h-full">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-blue-600 rounded-full flex items-center justify-center"
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
              Contact us today to discuss your real estate needs and discover how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl font-bold px-8 py-4">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Properties
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}