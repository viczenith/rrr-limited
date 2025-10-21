'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Shield, 
  Star, 
  ArrowRight,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type AffiliateFormValues = {
  firstName: string
  lastName: string
  residentialAddress?: string
  officeAddress?: string
  email: string
  phone: string
  bankDetails?: string
  passport?: File | null
  idCard?: File | null
  birthMonth?: string
  birthDay?: string
  occupation?: string
  affiliateType: 'individual' | 'company' | ''
  discoverySource: 'social' | 'referral' | 'event' | 'website' | 'other' | ''
}

// Small WhatsApp icon component
function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.11 17.64c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.14-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.26.29-.45.1-.19.05-.35-.02-.49-.07-.14-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.49-.16 0-.35-.02-.54-.02-.19 0-.49.07-.74.35-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.03.14.19 2 3.06 4.84 4.29.68.29 1.2.46 1.61.59.68.22 1.3.19 1.79.12.55-.08 1.7-.7 1.94-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.33z"/>
      <path d="M26.6 5.4A13.4 13.4 0 0 0 16 1a13.4 13.4 0 0 0-11.6 20l-1.3 4.8 4.9-1.28A13.4 13.4 0 1 0 26.6 5.4zM16 27.5c-2.22 0-4.33-.59-6.18-1.7l-.44-.26-2.9.76.78-2.86-.28-.47A11.5 11.5 0 1 1 27.5 16 11.51 11.51 0 0 1 16 27.5z"/>
    </svg>
  )
}

export default function AffiliateRegistrationPage() {
  const whatsAppLink = (import.meta as any)?.env?.VITE_HEAD_AFFILIATE_WHATSAPP_URL || 'https://wa.me/2340000000000'

  const form = useForm<AffiliateFormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      residentialAddress: '',
      officeAddress: '',
      email: '',
      phone: '',
      bankDetails: '',
      passport: null,
      idCard: null,
      birthMonth: '',
      birthDay: '',
      occupation: '',
      affiliateType: '',
      discoverySource: ''
    }
  })

  const [submitting, setSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<null | 'success' | 'error'>(null)

  const onSubmit = async (values: AffiliateFormValues) => {
    setSubmitting(true)
    setSubmitResult(null)
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 800))
      setSubmitResult('success')
      form.reset()
      // Scroll to success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (e) {
      setSubmitResult('error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm">EARN WITH US</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 mb-2">Join Our Affiliate Program</span>
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Earn Commissions with Us
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Become an affiliate marketer and earn attractive commissions when you refer property buyers. Owning a business with independent financial benefits sets you on the path to becoming a fulfilled entrepreneur. Join our Affiliate program to secure a lifetime of unlimited income.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-gray-700">
              <Shield className="w-5 h-5 text-emerald-500" />
              <span className="font-medium">Financial Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-medium">Unlimited Income</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Attractive Commission</span>
            </div>
          </div>
        </motion.div>

        {/* Success/Error Messages */}
        {submitResult === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 rounded-2xl border-2 border-emerald-300 bg-emerald-50 text-emerald-800 px-6 py-4 flex items-center gap-3"
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            <div>
              <p className="font-semibold">Registration Successful!</p>
              <p className="text-sm">Our team will reach out to you shortly.</p>
            </div>
          </motion.div>
        )}

        {submitResult === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 rounded-2xl border-2 border-red-300 bg-red-50 text-red-800 px-6 py-4"
          >
            <p className="font-semibold">Something went wrong. Please try again.</p>
          </motion.div>
        )}

        {/* Registration Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-8 lg:p-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Affiliate Registration</h2>
              <p className="text-gray-600">Fill the form to join our affiliate program and start earning commissions.</p>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                rules={{ required: 'First name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">First Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="First name" 
                        {...field} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="lastName"
                rules={{ required: 'Last name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Last Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Last name" 
                        {...field} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="residentialAddress"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-700 font-semibold">Residential Address</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your residential address" 
                        rows={2} 
                        {...field} 
                        className="rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="officeAddress"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-700 font-semibold">Office Address</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your office address (optional)" 
                        rows={2} 
                        {...field} 
                        className="rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ required: 'Email is required', pattern: { value: /[^\s@]+@[^\s@]+\.[^\s@]+/, message: 'Enter a valid email' } }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Email *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="name@example.com" 
                        {...field} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                rules={{ required: 'Phone is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Phone *</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="080..." 
                        {...field} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="bankDetails"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-700 font-semibold">Bank Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Account Name, Bank Name, Account Number" 
                        rows={2} 
                        {...field} 
                        className="rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passport"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Passport</FormLabel>
                    <FormControl>
                      <Input 
                        type="file" 
                        accept="image/*,application/pdf" 
                        onChange={(e) => field.onChange(e.target.files?.[0] ?? null)} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="idCard"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Valid Identity Card</FormLabel>
                    <FormControl>
                      <Input 
                        type="file" 
                        accept="image/*,application/pdf" 
                        onChange={(e) => field.onChange(e.target.files?.[0] ?? null)} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="birthMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Birthday (Month)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <Calendar className="mr-2 h-4 w-4 opacity-60" />
                          <SelectValue placeholder="Select month" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl max-h-[300px]">
                        <SelectItem value="01">January</SelectItem>
                        <SelectItem value="02">February</SelectItem>
                        <SelectItem value="03">March</SelectItem>
                        <SelectItem value="04">April</SelectItem>
                        <SelectItem value="05">May</SelectItem>
                        <SelectItem value="06">June</SelectItem>
                        <SelectItem value="07">July</SelectItem>
                        <SelectItem value="08">August</SelectItem>
                        <SelectItem value="09">September</SelectItem>
                        <SelectItem value="10">October</SelectItem>
                        <SelectItem value="11">November</SelectItem>
                        <SelectItem value="12">December</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="birthDay"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Birthday (Day)</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <Calendar className="mr-2 h-4 w-4 opacity-60" />
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl max-h-[300px]">
                        {Array.from({ length: 31 }, (_, i) => {
                          const val = String(i + 1).padStart(2, '0')
                          return (
                            <SelectItem key={val} value={val}>
                              {val}
                            </SelectItem>
                          )
                        })}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="occupation"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-gray-700 font-semibold">Occupation</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your occupation" 
                        {...field} 
                        className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="affiliateType"
                rules={{ required: 'Please choose Individual or Company' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">Registering As *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <Users className="mr-2 h-4 w-4 opacity-60" />
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl">
                        <SelectItem value="individual">Individual Marketer</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discoverySource"
                rules={{ required: 'Please tell us how you found us' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">How did you find out about Righteous & Rich? *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 rounded-xl bg-white/60 backdrop-blur border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                          <SelectValue placeholder="Select source" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="rounded-xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl">
                        <SelectItem value="social">Social Media</SelectItem>
                        <SelectItem value="referral">Referral</SelectItem>
                        <SelectItem value="event">Event</SelectItem>
                        <SelectItem value="website">Website</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  type="submit"
                  disabled={submitting}
                  className="group flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Registration</span>
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={() => window.open(whatsAppLink, '_blank')}
                  className="group border-2 border-emerald-500/30 text-emerald-700 hover:bg-emerald-50 px-8 py-6 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
                >
                  <span>Chat Head of Affiliate</span>
                  <span className="relative ml-3 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-emerald-400/40 blur-md opacity-60 group-hover:opacity-90 transition-opacity"></span>
                    <span className="absolute animate-ping inline-flex h-6 w-6 rounded-full bg-emerald-400/50" />
                    <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md group-hover:scale-110 transition-transform">
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 text-sm">
            By submitting this form, you agree to our terms and conditions. Our team will review your application and contact you within 48 hours.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
