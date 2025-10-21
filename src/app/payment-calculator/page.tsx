'use client'

import { useState } from 'react'
import { Calculator, DollarSign, Calendar, FileText, Check, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface Estate {
  id: string
  name: string
  location: string
  basePrice: number
  minPlotSize: number
  maxPlotSize: number
}

const estates: Estate[] = [
  { id: '1', name: 'Garden City Estate', location: 'Lugbe, Abuja', basePrice: 3500000, minPlotSize: 300, maxPlotSize: 600 },
  { id: '2', name: 'Royal Gardens', location: 'Airport Road, Abuja', basePrice: 5500000, minPlotSize: 400, maxPlotSize: 800 },
  { id: '3', name: 'Green Valley Estate', location: 'Kubwa, Abuja', basePrice: 2800000, minPlotSize: 350, maxPlotSize: 500 },
  { id: '4', name: 'Sunset City', location: 'Life Camp, Abuja', basePrice: 4200000, minPlotSize: 300, maxPlotSize: 450 },
  { id: '5', name: 'Park View Estate', location: 'Asokoro, Abuja', basePrice: 8500000, minPlotSize: 500, maxPlotSize: 1000 }
]

export default function PaymentCalculatorPage() {
  const [selectedEstate, setSelectedEstate] = useState<Estate>(estates[0])
  const [plotSize, setPlotSize] = useState<number>(300)
  const [paymentPlan, setPaymentPlan] = useState<string>('outright')
  const [showResults, setShowResults] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const calculatePricePerSqm = () => {
    return selectedEstate.basePrice / selectedEstate.minPlotSize
  }

  const calculateBasePrice = () => {
    const pricePerSqm = calculatePricePerSqm()
    return pricePerSqm * plotSize
  }

  const calculateTotalPrice = () => {
    const basePrice = calculateBasePrice()
    
    switch (paymentPlan) {
      case 'outright':
        return basePrice
      case '6months':
        return basePrice * 1.10 // 10% premium
      case '12months':
        return basePrice * 1.20 // 20% premium
      case '24months':
        return basePrice * 1.35 // 35% premium
      case '36months':
        return basePrice * 1.50 // 50% premium
      default:
        return basePrice
    }
  }

  const calculateInitialDeposit = () => {
    const total = calculateTotalPrice()
    switch (paymentPlan) {
      case 'outright':
        return total * 0.50 // 50% deposit
      case '6months':
        return total * 0.40 // 40% deposit
      case '12months':
        return total * 0.30 // 30% deposit
      case '24months':
        return total * 0.25 // 25% deposit
      case '36months':
        return total * 0.20 // 20% deposit
      default:
        return total * 0.50
    }
  }

  const calculateMonthlyPayment = () => {
    const total = calculateTotalPrice()
    const deposit = calculateInitialDeposit()
    const remaining = total - deposit
    
    switch (paymentPlan) {
      case '6months':
        return remaining / 6
      case '12months':
        return remaining / 12
      case '24months':
        return remaining / 24
      case '36months':
        return remaining / 36
      default:
        return 0
    }
  }

  const getPaymentPlanDetails = () => {
    switch (paymentPlan) {
      case 'outright':
        return {
          name: 'Outright Payment',
          description: 'Pay 50% now, 50% within 3 months',
          discount: '0% premium',
          period: '3 months'
        }
      case '6months':
        return {
          name: '6 Months Installment',
          description: 'Pay 40% now, spread remaining over 6 months',
          discount: '10% premium',
          period: '6 months'
        }
      case '12months':
        return {
          name: '12 Months Installment',
          description: 'Pay 30% now, spread remaining over 12 months',
          discount: '20% premium',
          period: '12 months'
        }
      case '24months':
        return {
          name: '24 Months Installment',
          description: 'Pay 25% now, spread remaining over 24 months',
          discount: '35% premium',
          period: '24 months'
        }
      case '36months':
        return {
          name: '36 Months Installment',
          description: 'Pay 20% now, spread remaining over 36 months',
          discount: '50% premium',
          period: '36 months'
        }
      default:
        return {
          name: 'Outright Payment',
          description: 'Pay 50% now, 50% within 3 months',
          discount: '0% premium',
          period: '3 months'
        }
    }
  }

  const handleCalculate = () => {
    setShowResults(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Calculator className="w-12 h-12 text-green-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Payment Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Calculate your land investment with our flexible payment plans
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculate Your Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Estate Selection */}
                <div>
                  <Label htmlFor="estate" className="text-base font-medium">Select Estate</Label>
                  <Select value={selectedEstate.id} onValueChange={(value) => {
                    const estate = estates.find(e => e.id === value)
                    if (estate) {
                      setSelectedEstate(estate)
                      setPlotSize(estate.minPlotSize)
                    }
                  }}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {estates.map((estate) => (
                        <SelectItem key={estate.id} value={estate.id}>
                          <div>
                            <div className="font-medium">{estate.name}</div>
                            <div className="text-sm text-gray-500">{estate.location}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Plot Size */}
                <div>
                  <Label className="text-base font-medium">
                    Plot Size: {plotSize}m²
                  </Label>
                  <div className="mt-2">
                    <Slider
                      value={[plotSize]}
                      onValueChange={(value) => setPlotSize(value[0])}
                      min={selectedEstate.minPlotSize}
                      max={selectedEstate.maxPlotSize}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>{selectedEstate.minPlotSize}m²</span>
                      <span>{selectedEstate.maxPlotSize}m²</span>
                    </div>
                  </div>
                </div>

                {/* Payment Plan */}
                <div>
                  <Label htmlFor="plan" className="text-base font-medium">Payment Plan</Label>
                  <Select value={paymentPlan} onValueChange={setPaymentPlan}>
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="outright">
                        <div>
                          <div className="font-medium">Outright Payment</div>
                          <div className="text-sm text-gray-500">0% premium • 3 months</div>
                        </div>
                      </SelectItem>
                      <SelectItem value="6months">
                        <div>
                          <div className="font-medium">6 Months Installment</div>
                          <div className="text-sm text-gray-500">10% premium • 6 months</div>
                        </div>
                      </SelectItem>
                      <SelectItem value="12months">
                        <div>
                          <div className="font-medium">12 Months Installment</div>
                          <div className="text-sm text-gray-500">20% premium • 12 months</div>
                        </div>
                      </SelectItem>
                      <SelectItem value="24months">
                        <div>
                          <div className="font-medium">24 Months Installment</div>
                          <div className="text-sm text-gray-500">35% premium • 24 months</div>
                        </div>
                      </SelectItem>
                      <SelectItem value="36months">
                        <div>
                          <div className="font-medium">36 Months Installment</div>
                          <div className="text-sm text-gray-500">50% premium • 36 months</div>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    {getPaymentPlanDetails().description}
                  </AlertDescription>
                </Alert>

                <Button 
                  onClick={handleCalculate} 
                  className="w-full bg-green-700 hover:bg-green-800 text-lg py-3"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Payment
                </Button>
              </CardContent>
            </Card>

            {/* Payment Plans Comparison */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Payment Plans Comparison</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Payment Plan</th>
                        <th className="text-center py-2">Premium</th>
                        <th className="text-center py-2">Initial Deposit</th>
                        <th className="text-center py-2">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 font-medium">Outright Payment</td>
                        <td className="text-center text-green-600">0%</td>
                        <td className="text-center">50%</td>
                        <td className="text-center">3 months</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">6 Months</td>
                        <td className="text-center">10%</td>
                        <td className="text-center">40%</td>
                        <td className="text-center">6 months</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">12 Months</td>
                        <td className="text-center">20%</td>
                        <td className="text-center">30%</td>
                        <td className="text-center">12 months</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">24 Months</td>
                        <td className="text-center">35%</td>
                        <td className="text-center">25%</td>
                        <td className="text-center">24 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">36 Months</td>
                        <td className="text-center">50%</td>
                        <td className="text-center">20%</td>
                        <td className="text-center">36 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Sidebar */}
          <div className="space-y-6">
            {showResults && (
              <>
                <Card className="sticky top-6">
                  <CardHeader>
                    <CardTitle className="text-green-700">Calculation Results</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600">Estate</p>
                      <p className="font-semibold">{selectedEstate.name}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <p className="text-sm text-gray-600">Plot Size</p>
                      <p className="font-semibold">{plotSize}m²</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Base Price</p>
                      <p className="font-semibold">{formatPrice(calculateBasePrice())}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Payment Plan</p>
                      <p className="font-semibold">{getPaymentPlanDetails().name}</p>
                      <Badge variant="secondary" className="mt-1">
                        {getPaymentPlanDetails().discount}
                      </Badge>
                    </div>
                    
                    <Separator />
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Total Price</p>
                      <p className="text-2xl font-bold text-green-700">
                        {formatPrice(calculateTotalPrice())}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600">Initial Deposit</p>
                      <p className="font-semibold text-lg">{formatPrice(calculateInitialDeposit())}</p>
                      <p className="text-xs text-gray-500">
                        {((calculateInitialDeposit() / calculateTotalPrice()) * 100).toFixed(0)}% of total
                      </p>
                    </div>
                    
                    {paymentPlan !== 'outright' && (
                      <div>
                        <p className="text-sm text-gray-600">Monthly Payment</p>
                        <p className="font-semibold text-lg">{formatPrice(calculateMonthlyPayment())}</p>
                        <p className="text-xs text-gray-500">
                          For {getPaymentPlanDetails().period}
                        </p>
                      </div>
                    )}
                    
                    <div className="pt-4 space-y-2">
                      <Button className="w-full bg-green-700 hover:bg-green-800">
                        Proceed to Payment
                      </Button>
                      <Button variant="outline" className="w-full">
                        Save Calculation
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Additional Information */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Survey Plan</span>
                  <span className="font-medium">₦150,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legal Documentation</span>
                  <span className="font-medium">₦100,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Development Levy</span>
                  <span className="font-medium">₦200,000</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Additional Costs</span>
                  <span>₦450,000</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Flexible payment plans</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">No hidden charges</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Verified documents</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Instant allocation</span>
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