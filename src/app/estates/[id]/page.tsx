'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { 
  MapPin, 
  Home, 
  Square, 
  DollarSign, 
  Phone, 
  Mail, 
  Check,
  Calendar,
  Shield,
  Zap,
  Car,
  TreePine,
  Camera,
  Play,
  Share2,
  Heart,
  ArrowLeft,
  Calculator,
  FileText,
  Users,
  Star
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'

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
  fullDescription: string
  features: string[]
  images: string[]
  videoUrl?: string
  isFeatured: boolean
  totalPlots: number
  availablePlots: number
  coordinates: { lat: number; lng: number }
  nearbyLandmarks: string[]
  paymentPlans: {
    outright: number
    installment6Months: number
    installment12Months: number
    installment24Months: number
  }
  documents: string[]
  createdAt: string
  agent: {
    name: string
    phone: string
    email: string
    photo: string
  }
}

const mockEstate: Estate = {
  id: '1',
  name: 'Garden City Estate',
  location: 'Lugbe, Abuja',
  state: 'FCT',
  pricePerPlot: 3500000,
  minPlotSize: 300,
  maxPlotSize: 600,
  titleType: 'C of O',
  description: 'A beautiful residential estate with modern infrastructure and serene environment.',
  fullDescription: `Garden City Estate is a premium residential development located in the heart of Lugbe, Abuja. This meticulously planned community offers the perfect blend of urban convenience and natural serenity.

The estate features modern infrastructure including paved roads, underground electricity, and a centralized water supply system. Each plot is carefully planned to provide maximum space utilization while maintaining green spaces for community enjoyment.

With its strategic location just 20 minutes from the Central Business District and 10 minutes from the Nnamdi Azikiwe International Airport, Garden City Estate offers unparalleled accessibility to major commercial and recreational centers.

The estate is secured with perimeter fencing and 24/7 security personnel, ensuring a safe environment for residents. The drainage system is designed to prevent flooding, while the landscaping creates a beautiful, green environment.`,
  features: [
    'Perimeter Fencing',
    'Paved Roads',
    'Underground Electricity',
    'Central Water Supply',
    'Drainage System',
    '24/7 Security',
    'Street Lights',
    'Recreation Center',
    'Children Playground',
    'Green Areas'
  ],
  images: [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600'
  ],
  videoUrl: 'https://example.com/estate-tour',
  isFeatured: true,
  totalPlots: 150,
  availablePlots: 87,
  coordinates: { lat: 9.0765, lng: 7.3986 },
  nearbyLandmarks: [
    'Nnamdi Azikiwe International Airport - 10 mins',
    'Central Business District - 20 mins',
    'Shoprite Lugbe - 5 mins',
    'American International School - 15 mins'
  ],
  paymentPlans: {
    outright: 3500000,
    installment6Months: 3800000,
    installment12Months: 4200000,
    installment24Months: 4800000
  },
  documents: ['Certificate of Occupancy', 'Survey Plan', 'Layout Plan'],
  createdAt: '2024-01-15',
  agent: {
    name: 'Sarah Johnson',
    phone: '+234 801 234 5678',
    email: 'sarah.johnson@righteousrichrealty.com',
    photo: '/api/placeholder/100/100'
  }
}

export default function EstateDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const [estate, setEstate] = useState<Estate | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [showInspectionForm, setShowInspectionForm] = useState(false)
  const [calculatorData, setCalculatorData] = useState({
    plotSize: 300,
    paymentPlan: 'outright'
  })

  useEffect(() => {
    // In real app, fetch estate data from API
    setEstate(mockEstate)
  }, [params.id])

  if (!estate) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-700"></div>
      </div>
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const calculateTotalPrice = () => {
    const basePrice = estate.pricePerPlot
    const sizeMultiplier = calculatorData.plotSize / estate.minPlotSize
    let totalPrice = basePrice * sizeMultiplier

    switch (calculatorData.paymentPlan) {
      case '6months':
        totalPrice = estate.paymentPlans.installment6Months * sizeMultiplier
        break
      case '12months':
        totalPrice = estate.paymentPlans.installment12Months * sizeMultiplier
        break
      case '24months':
        totalPrice = estate.paymentPlans.installment24Months * sizeMultiplier
        break
    }

    return totalPrice
  }

  const calculateMonthlyPayment = () => {
    const total = calculateTotalPrice()
    switch (calculatorData.paymentPlan) {
      case '6months':
        return total / 6
      case '12months':
        return total / 12
      case '24months':
        return total / 24
      default:
        return 0
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => router.back()}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{estate.name}</h1>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{estate.location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <Image
                      src={estate.images[selectedImage]}
                      alt={estate.name}
                      fill
                      className="object-cover"
                    />
                    {estate.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="lg" className="bg-white/90 hover:bg-white text-black">
                              <Play className="w-6 h-6 mr-2" />
                              Watch Video Tour
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>{estate.name} Video Tour</DialogTitle>
                            </DialogHeader>
                            <div className="aspect-video bg-gray-200 rounded-lg">
                              {/* Video player would go here */}
                              <div className="flex items-center justify-center h-full">
                                <Play className="w-16 h-16 text-gray-400" />
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail Gallery */}
                  <div className="flex gap-2 p-4 overflow-x-auto">
                    {estate.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? 'border-green-700' : 'border-gray-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${estate.name} ${index + 1}`}
                          width={80}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Estate Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  About {estate.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {estate.fullDescription}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <DollarSign className="w-8 h-8 text-green-700 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Price per Plot</p>
                    <p className="font-bold text-lg">{formatPrice(estate.pricePerPlot)}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Square className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Plot Size</p>
                    <p className="font-bold text-lg">{estate.minPlotSize}-{estate.maxPlotSize}m²</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-8 h-8 text-purple-700 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Available</p>
                    <p className="font-bold text-lg">{estate.availablePlots}/{estate.totalPlots}</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-8 h-8 text-orange-700 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Title Type</p>
                    <p className="font-bold text-lg">{estate.titleType}</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {estate.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Nearby */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location & Nearby Landmarks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gray-200 rounded-lg mb-6 relative overflow-hidden">
                  {/* Google Maps would be integrated here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-gray-400" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Nearby Landmarks</h3>
                  <div className="space-y-2">
                    {estate.nearbyLandmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{landmark}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Legal Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {estate.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-400" />
                        <span className="font-medium">{doc}</span>
                      </div>
                      <Button variant="outline" size="sm">
                        View Sample
                      </Button>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Full documents available after payment or serious commitment
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price & Actions */}
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">Starting from</p>
                  <p className="text-3xl font-bold text-green-700">
                    {formatPrice(estate.pricePerPlot)}
                  </p>
                  <p className="text-sm text-gray-500">per plot</p>
                </div>

                <div className="space-y-3 mb-6">
                  <Dialog open={showCalculator} onOpenChange={setShowCalculator}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Payment
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Payment Calculator</DialogTitle>
                        <DialogDescription>
                          Calculate your payment based on plot size and payment plan
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Plot Size (m²)</label>
                          <Select 
                            value={calculatorData.plotSize.toString()} 
                            onValueChange={(value) => setCalculatorData(prev => ({ ...prev, plotSize: parseInt(value) }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="300">300m²</SelectItem>
                              <SelectItem value="400">400m²</SelectItem>
                              <SelectItem value="500">500m²</SelectItem>
                              <SelectItem value="600">600m²</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-2">Payment Plan</label>
                          <Select 
                            value={calculatorData.paymentPlan} 
                            onValueChange={(value) => setCalculatorData(prev => ({ ...prev, paymentPlan: value }))}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="outright">Outright Payment</SelectItem>
                              <SelectItem value="6months">6 Months Installment</SelectItem>
                              <SelectItem value="12months">12 Months Installment</SelectItem>
                              <SelectItem value="24months">24 Months Installment</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between mb-2">
                            <span>Total Price:</span>
                            <span className="font-bold">{formatPrice(calculateTotalPrice())}</span>
                          </div>
                          {calculatorData.paymentPlan !== 'outright' && (
                            <div className="flex justify-between">
                              <span>Monthly Payment:</span>
                              <span className="font-bold">{formatPrice(calculateMonthlyPayment())}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={showInspectionForm} onOpenChange={setShowInspectionForm}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Calendar className="w-4 h-4 mr-2" />
                        Book Inspection
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Book Site Inspection</DialogTitle>
                        <DialogDescription>
                          Schedule a visit to {estate.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name</label>
                          <Input placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input placeholder="Your phone number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input type="email" placeholder="Your email address" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Preferred Date</label>
                          <Input type="date" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                          <Textarea placeholder="Any specific questions or requirements?" />
                        </div>
                        <Button className="w-full bg-green-700 hover:bg-green-800">
                          Book Inspection
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Mail className="w-4 h-4 mr-2" />
                        Make Inquiry
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Make an Inquiry</DialogTitle>
                        <DialogDescription>
                          Get more information about {estate.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name</label>
                          <Input placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone</label>
                          <Input placeholder="Your phone number" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email</label>
                          <Input type="email" placeholder="Your email address" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Message</label>
                          <Textarea placeholder="Your questions or requirements" />
                        </div>
                        <Button className="w-full bg-green-700 hover:bg-green-800">
                          Send Inquiry
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Buy Plot Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Agent
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Info */}
            <Card>
              <CardHeader>
                <CardTitle>Property Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full relative overflow-hidden">
                    <Image
                      src={estate.agent.photo}
                      alt={estate.agent.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{estate.agent.name}</h3>
                    <p className="text-sm text-gray-600">Senior Property Consultant</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={`tel:${estate.agent.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-green-700">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{estate.agent.phone}</span>
                  </a>
                  <a href={`mailto:${estate.agent.email}`} className="flex items-center gap-2 text-gray-700 hover:text-green-700">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{estate.agent.email}</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Plots:</span>
                    <span className="font-medium">{estate.totalPlots}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Available:</span>
                    <span className="font-medium text-green-600">{estate.availablePlots}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sold:</span>
                    <span className="font-medium">{estate.totalPlots - estate.availablePlots}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Title Type:</span>
                    <Badge variant="secondary">{estate.titleType}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}