'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Clock,
  Users,
  Building,
  CheckCircle,
  Calendar,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  inquiryType: string
  preferredContact: string
}

interface InspectionForm {
  name: string
  email: string
  phone: string
  estate: string
  preferredDate: string
  preferredTime: string
  message: string
  groupSize: string
}

export default function ContactPage() {
  const [contactForm, setContactForm] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general',
    preferredContact: 'email'
  })

  const [inspectionForm, setInspectionForm] = useState<InspectionForm>({
    name: '',
    email: '',
    phone: '',
    estate: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    groupSize: '1'
  })

  const [contactSubmitted, setContactSubmitted] = useState(false)
  const [inspectionSubmitted, setInspectionSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setContactSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setContactSubmitted(false)
      setContactForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general',
        preferredContact: 'email'
      })
    }, 3000)
  }

  const handleInspectionSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setInspectionSubmitted(true)
    setIsSubmitting(false)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setInspectionSubmitted(false)
      setInspectionForm({
        name: '',
        email: '',
        phone: '',
        estate: '',
        preferredDate: '',
        preferredTime: '',
        message: '',
        groupSize: '1'
      })
    }, 3000)
  }

  const offices = [
    {
      city: 'Head Office - Abuja',
      address: 'Vicbalkon Tower, Utako, FCT Abuja',
      phone: '+234 800 000 0000',
      email: 'info@righteousrichrealty.com',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
    },
    {
      city: 'Lagos Office',
      address: 'Suite 456, Victoria Island, Lagos',
      phone: '+234 808 987 6543',
      email: 'lagos@righteousrichrealty.com',
      hours: 'Mon-Fri: 9AM-5PM, Sat: 10AM-3PM'
    },
    {
      city: 'Port Harcourt Office',
      address: 'Complex 789, Trans Amadi, Port Harcourt',
      phone: '+234 807 456 7890',
      email: 'ph@righteousrichrealty.com',
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-2PM'
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Property Consultant',
      phone: '+234 801 234 5678',
      email: 'sarah.johnson@righteousrichrealty.com',
      expertise: 'Residential Properties'
    },
    {
      name: 'Michael Adeyemi',
      role: 'Land Acquisition Specialist',
      phone: '+234 802 345 6789',
      email: 'michael.adeyemi@righteousrichrealty.com',
      expertise: 'Land Documentation'
    },
    {
      name: 'Grace Okonkwo',
      role: 'Customer Relations Manager',
      phone: '+234 803 456 7890',
      email: 'grace.okonkwo@righteousrichrealty.com',
      expertise: 'Client Services'
    }
  ]

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
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-3xl bg-gray-100 flex items-center justify-center">
                <MessageSquare className="w-10 h-10 text-gray-700" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you find your perfect property. Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Tabs defaultValue="contact" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-white rounded-2xl shadow-lg p-2 border border-gray-200">
              <TabsTrigger value="contact" className="rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                Contact Us
              </TabsTrigger>
              <TabsTrigger value="inspection" className="rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                Book Inspection
              </TabsTrigger>
              <TabsTrigger value="offices" className="rounded-xl data-[state=active]:bg-gray-900 data-[state=active]:text-white">
                Our Offices
              </TabsTrigger>
            </TabsList>

            {/* Contact Form Tab */}
            <TabsContent value="contact" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="lg:col-span-2"
                >
                  <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-2xl font-bold text-gray-900">
                        Send us a Message
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-8 pb-8">
                      {contactSubmitted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Alert className="bg-gray-100 border-gray-300 rounded-2xl">
                            <CheckCircle className="h-5 w-5 text-gray-700" />
                            <AlertDescription className="text-gray-800 font-medium">
                              Thank you for your message! We'll get back to you within 24 hours.
                            </AlertDescription>
                          </Alert>
                        </motion.div>
                      ) : (
                        <form onSubmit={handleContactSubmit} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                              <Input
                                id="name"
                                value={contactForm.name}
                                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                                required
                                className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                              <Input
                                id="email"
                                type="email"
                                value={contactForm.email}
                                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                                required
                                className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number *</Label>
                              <Input
                                id="phone"
                                value={contactForm.phone}
                                onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                                required
                                className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                              />
                            </div>
                            <div>
                              <Label htmlFor="inquiryType" className="text-gray-700 font-medium">Inquiry Type</Label>
                              <Select value={contactForm.inquiryType} onValueChange={(value) => setContactForm(prev => ({ ...prev, inquiryType: value }))}>
                                <SelectTrigger className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="property">Property Information</SelectItem>
                                  <SelectItem value="financing">Payment & Financing</SelectItem>
                                  <SelectItem value="documentation">Legal Documentation</SelectItem>
                                  <SelectItem value="complaint">Complaint</SelectItem>
                                  <SelectItem value="partnership">Partnership</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div>
                            <Label htmlFor="subject" className="text-gray-700 font-medium">Subject *</Label>
                            <Input
                              id="subject"
                              value={contactForm.subject}
                              onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                              required
                              className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            />
                          </div>

                          <div>
                            <Label htmlFor="message" className="text-gray-700 font-medium">Message *</Label>
                            <Textarea
                              id="message"
                              rows={5}
                              value={contactForm.message}
                              onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                              required
                              className="mt-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                            />
                          </div>

                          <div>
                            <Label className="text-gray-700 font-medium">Preferred Contact Method</Label>
                            <RadioGroup
                              value={contactForm.preferredContact}
                              onValueChange={(value) => setContactForm(prev => ({ ...prev, preferredContact: value }))}
                              className="flex gap-6 mt-3"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="email" id="email-contact" />
                                <Label htmlFor="email-contact">Email</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="phone" id="phone-contact" />
                                <Label htmlFor="phone-contact">Phone</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                                <Label htmlFor="whatsapp-contact">WhatsApp</Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <Button 
                            type="submit" 
                            className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              'Sending...'
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </Button>
                        </form>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Quick Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-6"
                >
                  <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Quick Contact
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Phone</p>
                          <a href="tel:+2348000000000" className="text-gray-700 hover:text-gray-900 font-medium">
                            +234 800 000 0000
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Email</p>
                          <a href="mailto:info@righteousrichrealty.com" className="text-gray-700 hover:text-gray-900 font-medium">
                            info@righteousrichrealty.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">WhatsApp</p>
                          <a href="https://wa.me/2348000000000" className="text-gray-700 hover:text-gray-900 font-medium">
                            Chat with us
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <Clock className="w-6 h-6 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Business Hours</p>
                          <p className="text-sm text-gray-600">Mon-Fri: 8AM-6PM</p>
                          <p className="text-sm text-gray-600">Saturday: 9AM-4PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Follow Us
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="rounded-xl border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300">
                          <Facebook className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300">
                          <Twitter className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300">
                          <Instagram className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-xl border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300">
                          <Youtube className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border border-gray-200 shadow-lg rounded-2xl">
                    <CardHeader className="pb-6">
                      <CardTitle className="text-xl font-bold text-gray-900">
                        Emergency Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">
                        For urgent inquiries outside business hours:
                      </p>
                      <Button variant="outline" className="w-full rounded-xl border-gray-300 hover:bg-gray-50 hover:text-gray-700 transition-all duration-300">
                        <Phone className="w-4 h-4 mr-2" />
                        Emergency Hotline
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
            </div>
          </TabsContent>

          {/* Book Inspection Tab */}
          <TabsContent value="inspection" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Inspection Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Schedule a Site Inspection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {inspectionSubmitted ? (
                      <Alert className="bg-green-50 border-green-200">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          Your inspection has been scheduled! We'll confirm the details within 24 hours.
                        </AlertDescription>
                      </Alert>
                    ) : (
                      <form onSubmit={handleInspectionSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="inspection-name">Full Name *</Label>
                            <Input
                              id="inspection-name"
                              value={inspectionForm.name}
                              onChange={(e) => setInspectionForm(prev => ({ ...prev, name: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="inspection-email">Email Address *</Label>
                            <Input
                              id="inspection-email"
                              type="email"
                              value={inspectionForm.email}
                              onChange={(e) => setInspectionForm(prev => ({ ...prev, email: e.target.value }))}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="inspection-phone">Phone Number *</Label>
                            <Input
                              id="inspection-phone"
                              value={inspectionForm.phone}
                              onChange={(e) => setInspectionForm(prev => ({ ...prev, phone: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="estate">Estate to Visit *</Label>
                            <Select value={inspectionForm.estate} onValueChange={(value) => setInspectionForm(prev => ({ ...prev, estate: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select an estate" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="garden-city">Garden City Estate</SelectItem>
                                <SelectItem value="royal-gardens">Royal Gardens</SelectItem>
                                <SelectItem value="green-valley">Green Valley Estate</SelectItem>
                                <SelectItem value="sunset-city">Sunset City</SelectItem>
                                <SelectItem value="park-view">Park View Estate</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="date">Preferred Date *</Label>
                            <Input
                              id="date"
                              type="date"
                              value={inspectionForm.preferredDate}
                              onChange={(e) => setInspectionForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="time">Preferred Time *</Label>
                            <Select value={inspectionForm.preferredTime} onValueChange={(value) => setInspectionForm(prev => ({ ...prev, preferredTime: value }))}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select time" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="9am">9:00 AM</SelectItem>
                                <SelectItem value="10am">10:00 AM</SelectItem>
                                <SelectItem value="11am">11:00 AM</SelectItem>
                                <SelectItem value="12pm">12:00 PM</SelectItem>
                                <SelectItem value="1pm">1:00 PM</SelectItem>
                                <SelectItem value="2pm">2:00 PM</SelectItem>
                                <SelectItem value="3pm">3:00 PM</SelectItem>
                                <SelectItem value="4pm">4:00 PM</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="group-size">Group Size</Label>
                          <Select value={inspectionForm.groupSize} onValueChange={(value) => setInspectionForm(prev => ({ ...prev, groupSize: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">Just me</SelectItem>
                              <SelectItem value="2">2 people</SelectItem>
                              <SelectItem value="3-4">3-4 people</SelectItem>
                              <SelectItem value="5+">5+ people</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="inspection-message">Additional Information</Label>
                          <Textarea
                            id="inspection-message"
                            rows={3}
                            placeholder="Any specific questions or requirements for the inspection?"
                            value={inspectionForm.message}
                            onChange={(e) => setInspectionForm(prev => ({ ...prev, message: e.target.value }))}
                          />
                        </div>

                        <Button 
                          type="submit" 
                          className="w-full bg-green-700 hover:bg-green-800"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            'Scheduling...'
                          ) : (
                            <>
                              <Calendar className="w-4 h-4 mr-2" />
                              Schedule Inspection
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Inspection Info */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Guided tour of the estate</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">View available plots</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Infrastructure inspection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Document review session</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Q&A with property consultant</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Inspection Guidelines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>• Wear comfortable shoes and clothing</p>
                      <p>• Bring a valid ID for verification</p>
                      <p>• Schedule allows 2-3 hours</p>
                      <p>• Transportation can be arranged</p>
                      <p>• Refreshments provided</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Offices Tab */}
          <TabsContent value="offices" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-green-700" />
                      {office.city}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span className="text-sm">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <a href={`tel:${office.phone}`} className="text-sm text-green-700 hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <a href={`mailto:${office.email}`} className="text-sm text-green-700 hover:underline">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span className="text-sm">{office.hours}</span>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        Get Directions
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Office
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Members */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <Badge variant="secondary" className="mt-2">
                          {member.expertise}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <a href={`tel:${member.phone}`} className="text-green-700 hover:underline">
                            {member.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <a href={`mailto:${member.email}`} className="text-green-700 hover:underline">
                            {member.email}
                          </a>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-2">
                        <Button size="sm" className="w-full">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
}