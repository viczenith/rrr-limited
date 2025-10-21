import { useState } from 'react'
import { motion } from 'framer-motion'
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
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'
import { Alert, AlertDescription } from '../components/ui/alert'

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

export default function ContactPage() {
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
      
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-blue-50/30"></div>
        
//         {/* Floating Animation Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           <motion.div
//             animate={{ 
//               y: [0, -20, 0],
//               rotate: [0, 5, 0]
//             }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-20 left-10 w-8 h-8 bg-amber-400/20 rounded-full"
//           />
//           <motion.div
//             animate={{ 
//               y: [0, 30, 0],
//               rotate: [0, -5, 0]
//             }}
//             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//             className="absolute top-40 right-20 w-12 h-12 bg-blue-400/20 rounded-full"
//           />
//         </div>
        
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-8 py-4 mb-8"
//             >
//               <Crown className="w-6 h-6 text-amber-600" />
//               <span className="text-sm font-semibold text-gray-700">We're Here to Help</span>
//               <Sparkles className="w-6 h-6 text-blue-600" />
//             </motion.div>
            
//             <h1 className="text-5xl md:text-7xl font-bold mb-8">
//               <span className="text-gray-900">Get in </span>
//               <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-blue-600 bg-clip-text text-transparent">
//                 Touch
//               </span>
//             </h1>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
//             >
//               Ready to start your real estate journey? Let's connect and make your property dreams a reality.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
//             {/* Contact Form */}
//             <motion.div
//               variants={slideInLeft}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-6 py-3 mb-8">
//                 <MessageSquare className="w-5 h-5 text-amber-600" />
//                 <span className="text-sm font-semibold text-gray-700">Send us a Message</span>
//               </div>
              
//               <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
//                 Let's 
//                 <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
//                   Connect
//                 </span>
//               </h2>

//               {submitted ? (
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Alert className="bg-gradient-to-r from-amber-50 to-blue-50 border-amber-200 rounded-2xl p-6">
//                     <CheckCircle className="h-6 w-6 text-amber-600" />
//                     <AlertDescription className="text-gray-800 font-medium text-lg ml-2">
//                       Thank you for reaching out! We'll get back to you within 24 hours.
//                     </AlertDescription>
//                   </Alert>
//                 </motion.div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <Label htmlFor="name" className="text-gray-700 font-semibold text-lg mb-2 block">Full Name *</Label>
//                     <Input
//                       id="name"
//                       value={contactForm.name}
//                       onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
//                       required
//                       placeholder="Enter your full name"
//                       className="border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-12 text-lg"
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <Label htmlFor="email" className="text-gray-700 font-semibold text-lg mb-2 block">Email Address *</Label>
//                       <Input
//                         id="email"
//                         type="email"
//                         value={contactForm.email}
//                         onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
//                         required
//                         placeholder="your.email@example.com"
//                         className="border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-12 text-lg"
//                       />
//                     </div>
//                     <div>
//                       <Label htmlFor="phone" className="text-gray-700 font-semibold text-lg mb-2 block">Phone Number *</Label>
//                       <Input
//                         id="phone"
//                         value={contactForm.phone}
//                         onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
//                         required
//                         placeholder="+234 800 000 0000"
//                         className="border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 h-12 text-lg"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <Label htmlFor="message" className="text-gray-700 font-semibold text-lg mb-2 block">Message *</Label>
//                     <Textarea
//                       id="message"
//                       rows={6}
//                       value={contactForm.message}
//                       onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
//                       required
//                       placeholder="Tell us how we can help you..."
//                       className="border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-lg"
//                     />
//                   </div>

//                   <Button 
//                     type="submit" 
//                     className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       'Sending...'
//                     ) : (
//                       <>
//                         <Send className="w-5 h-5 mr-2" />
//                         Send Message
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               )}
//             </motion.div>

//             {/* Contact Info */}
//             <motion.div
//               variants={slideInRight}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-0 shadow-xl rounded-2xl overflow-hidden">
//                 <CardHeader className="bg-gradient-to-r from-amber-500 to-blue-600 text-white pb-6">
//                   <CardTitle className="text-2xl font-bold flex items-center">
//                     <Phone className="w-6 h-6 mr-3" />
//                     Quick Contact
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-8 space-y-6">
//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
//                       <Phone className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg mb-1">Phone</p>
//                       <a href="tel:+2348000000000" className="text-amber-600 hover:text-amber-700 font-semibold text-lg">
//                         +234 800 000 0000
//                       </a>
//                       <p className="text-sm text-gray-600 mt-1">Mon-Fri: 8AM-6PM</p>
//                     </div>
//                   </div>
                  
//                   <div className="border-t border-gray-200 pt-6"></div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
//                       <Mail className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg mb-1">Email</p>
//                       <a href="mailto:info@righteousrichrealty.com" className="text-blue-600 hover:text-blue-700 font-semibold text-lg break-all">
//                         info@righteousrichrealty.com
//                       </a>
//                       <p className="text-sm text-gray-600 mt-1">24/7 Response</p>
//                     </div>
//                   </div>

//                   <div className="border-t border-gray-200 pt-6"></div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
//                       <Clock className="w-7 h-7 text-white" />
//                     </div>
//                     <div>
//                       <p className="font-bold text-gray-900 text-lg mb-1">Business Hours</p>
//                       <p className="text-gray-700 font-medium">Monday - Friday</p>
//                       <p className="text-gray-600">8:00 AM - 6:00 PM</p>
//                       <p className="text-gray-700 font-medium mt-2">Saturday</p>
//                       <p className="text-gray-600">9:00 AM - 4:00 PM</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
//                 <CardContent className="p-8">
//                   <div className="flex items-center space-x-3 mb-6">
//                     <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-blue-600 rounded-xl flex items-center justify-center">
//                       <MessageSquare className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900">Need Urgent Help?</h3>
//                   </div>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     For immediate assistance or emergency inquiries, our dedicated support team is available via WhatsApp.
//                   </p>
//                   <Button 
//                     className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
//                     onClick={() => window.open('https://wa.me/2348000000000', '_blank')}
//                   >
//                     <MessageSquare className="w-5 h-5 mr-2" />
//                     Chat on WhatsApp
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Map Section - Full Width */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-6 py-3 mb-8">
//               <MapPin className="w-5 h-5 text-amber-600" />
//               <span className="text-sm font-semibold text-gray-700">Visit Us</span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Find Our 
//               <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
//                 Office
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Located in the heart of Abuja at Vicbalkon Tower, Utako, FCT
//             </p>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8 items-start">
//             {/* Map */}
//             <motion.div
//               className="map-wrapper"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="map-container">
//                 <div className="map-placeholder">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3833853505783!2d7.48702931472692!3d9.028973893519283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba74c3c7a3d%3A0x36bb85d8f9066d90!2sUtako%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1635789123456!5m2!1sen!2sng"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     title="Righteous & Rich Realty Location"
//                   ></iframe>
//                 </div>
                
//                 <div className="map-overlay">
//                   <div className="office-info">
//                     <h3>Our Office Location</h3>
//                     <p>Vicbalkon Tower, Utako, FCT Abuja</p>
//                     <button className="directions-btn btn-secondary">
//                       <MapPin size={16} />
//                       Get Directions
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Address Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <Card className="bg-white border-0 shadow-xl rounded-2xl overflow-hidden">
//                 <CardHeader className="bg-gradient-to-r from-amber-500 to-blue-600 text-white pb-6">
//                   <CardTitle className="text-2xl font-bold flex items-center">
//                     <Building className="w-6 h-6 mr-3" />
//                     Head Office Location
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-8 space-y-6">
//                   <div className="space-y-4">
//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
//                         <MapPin className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-lg mb-1">Address</p>
//                         <p className="text-gray-700 leading-relaxed">
//                           Vicbalkon Tower, Utako,<br />
//                           Federal Capital Territory,<br />
//                           Abuja, Nigeria
//                         </p>
//                       </div>
//                     </div>

//                     <div className="border-t border-gray-200 pt-4"></div>

//                     <div className="flex items-start gap-4">
//                       <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
//                         <Clock className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-lg mb-2">Hours</p>
//                         <div className="space-y-1 text-gray-700">
//                           <p className="font-medium">Monday - Friday</p>
//                           <p className="text-gray-600">8:00 AM - 6:00 PM</p>
//                           <p className="font-medium mt-2">Saturday</p>
//                           <p className="text-gray-600">9:00 AM - 4:00 PM</p>
//                           <p className="font-medium mt-2">Sunday</p>
//                           <p className="text-gray-600">Closed</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="pt-6 border-t border-gray-200">
//                     <Button 
//                       className="w-full bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
//                       onClick={() => window.open('https://www.google.com/maps/search/Vicbalkon+Tower+Utako+FCT+Abuja', '_blank')}
//                     >
//                       <MapPin className="w-5 h-5 mr-2" />
//                       Get Directions
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Contact Info */}
//               <Card className="bg-gradient-to-br from-amber-50 to-blue-50 border-0 shadow-lg rounded-2xl">
//                 <CardContent className="p-6">
//                   <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help Finding Us?</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-amber-600" />
//                       <a href="tel:+2348000000000" className="text-gray-700 hover:text-amber-600 font-medium">
//                         +234 800 000 0000
//                       </a>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-blue-600" />
//                       <a href="mailto:info@righteousrichrealty.com" className="text-gray-700 hover:text-blue-600 font-medium break-all">
//                         info@righteousrichrealty.com
//                       </a>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Offices Section */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 mb-8 shadow-lg">
//               <Building className="w-5 h-5 text-amber-600" />
//               <span className="text-sm font-semibold text-gray-700">All Locations</span>
//             </div>
            
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
//               Our 
//               <span className="bg-gradient-to-r from-amber-600 to-blue-600 bg-clip-text text-transparent">
//                 Offices
//               </span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Visit us at any of our offices across Nigeria for personalized service
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {offices.map((office, index) => (
//               <motion.div
//                 key={office.city}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 whileHover={{ y: -8, scale: 1.02 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl h-full">
//                   <CardHeader className="pb-4">
//                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
//                       <Building className="w-8 h-8 text-white" />
//                     </div>
//                     <CardTitle className="text-2xl font-bold text-gray-900">{office.city}</CardTitle>
//                     <p className="text-amber-600 font-semibold">{office.location}</p>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex items-start gap-3">
//                       <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700">{office.address}</span>
//                     </div>
                    
//                     <div className="flex items-center gap-3">
//                       <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                       <a href={`tel:${office.phone}`} className="text-amber-600 hover:text-amber-700 font-semibold">
//                         {office.phone}
//                       </a>
//                     </div>
                    
//                     <div className="flex items-center gap-3">
//                       <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
//                       <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-700 font-semibold break-all">
//                         {office.email}
//                       </a>
//                     </div>

//                     <div className="pt-4 border-t border-gray-200">
//                       <Button className="w-full bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105">
//                         <MapPin className="w-4 h-4 mr-2" />
//                         Get Directions
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
