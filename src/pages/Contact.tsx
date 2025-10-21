
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock,
  Building,
  CheckCircle,
  Crown,
  Sparkles
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Alert, AlertDescription } from '../components/ui/alert';
import './Contact.css';

interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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

const Contact = () => {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setContactForm({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
    }, 3000)
  }

  const offices = [
    {
      city: 'Head Office',
      location: 'Abuja',
      address: 'Vicbalkon Tower, Utako, FCT',
      phone: '+234 800 000 0000',
      email: 'info@righteousrichrealty.com'
    },
    {
      city: 'Lagos Office',
      location: 'Victoria Island',
      address: 'Suite 456, Victoria Island',
      phone: '+234 808 987 6543',
      email: 'lagos@righteousrichrealty.com'
    },
    {
      city: 'Port Harcourt',
      location: 'Trans Amadi',
      address: 'Complex 789, Trans Amadi',
      phone: '+234 807 456 7890',
      email: 'ph@righteousrichrealty.com'
    }
  ]

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
              <span className="text-sm font-semibold text-gray-700">We're Here to Help</span>
              <Sparkles className="w-6 h-6 text-blue-600" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-gray-900">Get in </span>
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Ready to start your real estate journey? Let's connect and make your property dreams a reality.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* WhatsApp Connect Section */}
            <motion.div
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Floating Decorative Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 w-20 h-20 bg-green-200/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-300/20 rounded-full blur-xl"
              />

              <div className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-10 shadow-2xl border border-green-100">
                {/* Header Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-md"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </motion.div>
                  <span className="text-sm font-bold text-gray-700">Instant Connection</span>
                  <motion.div
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                </motion.div>
                
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl font-bold mb-4"
                >
                  <span className="text-gray-900">Need Urgent</span>
                  <br />
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    Help?
                  </span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  Chat with us instantly on WhatsApp! Our expert team is ready to assist you with all your real estate needs.
                </motion.p>

                {/* Feature Cards */}
                <div className="space-y-4 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Instant Response</h4>
                      <p className="text-gray-600 text-sm">Get replies within minutes, not hours</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">24/7 Availability</h4>
                      <p className="text-gray-600 text-sm">We're here whenever you need us</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Expert Guidance</h4>
                      <p className="text-gray-600 text-sm">Professional advice at your fingertips</p>
                    </div>
                  </motion.div>
                </div>

                {/* WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Button 
                    className="w-full bg-gradient-to-r from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 text-white font-bold py-8 rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 text-xl relative overflow-hidden group"
                    onClick={() => window.open('https://wa.me/2348000000000?text=Hi%20Righteous%20%26%20Rich%20Realty%2C%20I%20need%20help%20with%20real%20estate%20services', '_blank')}
                  >
                    {/* Animated Background */}
                    <motion.div
                      animate={{
                        x: [-1000, 1000],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    
                    <span className="relative flex items-center justify-center gap-3">
                      <motion.div
                        animate={{ 
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <MessageSquare className="w-7 h-7" />
                      </motion.div>
                      <span>Chat on WhatsApp Now</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-6 h-6" />
                      </motion.div>
                    </span>
                  </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">Online Now</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-medium">Verified Business</span>
                  </div>
                  <div className="w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-amber-600" />
                    <span className="font-medium">Premium Support</span>
                  </div>
                </motion.div>

                {/* Alternative Contact */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="mt-8 pt-6 border-t border-green-200/50"
                >
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={slideInRight}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-0 shadow-xl rounded-2xl overflow-hidden">
                
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Phone</p>
                      <a href="tel:+2348000000000" className="text-amber-600 hover:text-amber-700 font-semibold text-lg">
                        +234 800 000 0000
                      </a>
                      <p className="text-sm text-gray-600 mt-1">Mon-Fri: 8AM-6PM</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Email</p>
                      <a href="mailto:info@righteousrichrealty.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all">
                        info@righteousrichrealty.com
                      </a>
                      <p className="text-sm text-gray-600 mt-1">24/7 Response</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-1">Business Hours</p>
                      <p className="text-gray-700 font-medium">Monday - Friday</p>
                      <p className="text-gray-600">8:00 AM - 6:00 PM</p>
                      <p className="text-gray-700 font-medium mt-2">Saturday</p>
                      <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-6 py-3 mb-8">
              <MapPin className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">Visit Us</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map */}
            <motion.div
              className="map-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="map-container">
                <div className="map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3833853505783!2d7.48702931472692!3d9.028973893519283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba74c3c7a3d%3A0x36bb85d8f9066d90!2sUtako%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1635789123456!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Righteous & Rich Realty Location"
                  ></iframe>
                </div>
                
                <div className="map-overlay">
                  <div className="office-info">
                    <h3>Our Office Location</h3>
                    <p>Vicbalkon Tower, Utako, FCT Abuja</p>
                    <button className="directions-btn btn-secondary">
                      <MapPin size={16} />
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
                
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg mb-1">Address</p>
                        <p className="text-gray-700 leading-relaxed">
                          Vicbalkon Tower, Utako,<br />
                          Federal Capital Territory,<br />
                          Abuja, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-4"></div>

                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-6 py-3 mb-8">
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-semibold text-gray-700">FAQ</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked 
              <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
                {' '}Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-amber-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What types of land does Righteous & Rich Realty offer for sale?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer a variety of land options, including residential, commercial, and mixed-use plots, all in strategic locations with high investment potential. Whether you're looking for a place to build your dream home or a smart investment, we've got you covered.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What title documents come with your properties?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our properties come with legally recognized title documents such as the Certificate of Occupancy (C of O), Right of Occupancy (R of O), Deed of Assignment, and Registered Survey—depending on the estate. All our lands are free from government encumbrances and legal disputes.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Are your lands fully dry and ready for building?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! We ensure that all lands we sell are suitable for immediate development. No swamps, no surprises—just solid land, ready for your vision.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What is the payment plan like?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We offer flexible payment plans to suit different budgets. You can choose to pay outrightly for an instant allocation or spread payments over 3–12 months with minimal interest. We also provide tailored payment plans for serious buyers.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-pink-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Can I visit the land before making a purchase?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Absolutely! We organize free site inspections multiple times a week. You get to see the land, verify its location, and confirm everything for yourself before committing.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-indigo-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Can I resell my land after purchase?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes! Our lands appreciate quickly, making them great investment assets. You can resell at a higher value or even partner with us to find buyers for a profitable deal.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-orange-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What areas do you cover in Abuja?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We cover all major districts in Abuja including Maitama, Asokoro, Wuse 2, Guzape, Utako, Katampe, and many more prime locations across the FCT.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-teal-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">How long does the property buying process take?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The timeline varies depending on the property and financing, but typically ranges from 2-8 weeks. We work diligently to expedite the process while ensuring all legal requirements are met.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-rose-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Do you assist with property financing?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Yes, we have partnerships with leading banks and financial institutions to help you secure favorable mortgage terms and property financing options.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-cyan-50 to-white border-0 shadow-lg rounded-2xl h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">What documents do I need for property purchase?</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Required documents include valid ID, proof of income, bank statements, and other legal documents. We provide a comprehensive checklist and guide you through the process.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


