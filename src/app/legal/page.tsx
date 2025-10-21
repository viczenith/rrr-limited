'use client'

import { useState } from 'react'
import { 
  FileText, 
  Shield, 
  HelpCircle, 
  Download, 
  CheckCircle, 
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Search,
  BookOpen,
  Scale,
  Home,
  MapPin,
  Building
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

interface Document {
  id: string
  title: string
  description: string
  type: string
  isSample: boolean
  fileSize: string
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What is the difference between C of O and R of O?',
    answer: 'Certificate of Occupancy (C of O) is the highest form of land title in Nigeria, granting the holder exclusive possession for 99 years. Right of Occupancy (R of O) is a similar title but may have different conditions and duration. C of O is generally more secure and valuable than R of O.',
    category: 'Land Titles'
  },
  {
    id: '2',
    question: 'How long does the land verification process take?',
    answer: 'The land verification process typically takes 2-4 weeks, depending on the complexity of the title and the government agency involved. This includes: (1) Title search at the land registry, (2) Physical inspection of the property, (3) Verification of survey plan, (4) Confirmation of ownership history.',
    category: 'Verification Process'
  },
  {
    id: '3',
    question: 'What documents do I need to verify before buying land?',
    answer: 'Essential documents to verify include: (1) Certificate of Occupancy or Right of Occupancy, (2) Registered Survey Plan, (3) Deed of Assignment, (4) Receipt of payment, (5) Building plan approval (if applicable), (6) Tax clearance certificate, (7) Government receipt for land charges.',
    category: 'Documentation'
  },
  {
    id: '4',
    question: 'Can I buy land without a C of O?',
    answer: 'While it\'s possible to buy land without a C of O, it\'s not recommended. Lands without proper titles may have ownership disputes, government acquisition issues, or other legal problems. Always insist on proper documentation before making any payment.',
    category: 'Land Titles'
  },
  {
    id: '5',
    question: 'What is an Allocation Letter?',
    answer: 'An Allocation Letter is a document issued by the government or estate developers indicating that a specific plot of land has been allocated to an individual. It\'s often the first step in the land acquisition process, but should be followed by proper title documentation.',
    category: 'Land Titles'
  },
  {
    id: '6',
    question: 'How do I verify if land is under government acquisition?',
    answer: 'To verify government acquisition status: (1) Conduct a search at the relevant land registry, (2) Check the urban and regional planning master plan, (3) Verify with the Ministry of Lands, (4) Check for any public notices in government gazettes, (5) Engage a qualified surveyor for physical verification.',
    category: 'Verification Process'
  },
  {
    id: '7',
    question: 'What should I look for in a Survey Plan?',
    answer: 'A valid survey plan should include: (1) Survey plan number and date, (2) Name of the registered surveyor, (3) Coordinates and bearings, (4) Plot size and dimensions, (5) Location description, (6) Stamp of the Surveyors Council of Nigeria (SURCON), (7) Approval stamp from the relevant government agency.',
    category: 'Documentation'
  },
  {
    id: '8',
    question: 'Is it safe to buy land from family members?',
    answer: 'Buying land from family members requires extra caution. Ensure: (1) The family has proper authority to sell, (2) All family members consent to the sale, (3) Proper documentation is provided, (4) The title is verified independently, (5) A written agreement is signed by all relevant parties.',
    category: 'Buying Process'
  },
  {
    id: '9',
    question: 'What happens after I make payment for land?',
    answer: 'After payment: (1) You receive a receipt and contract of sale, (2) Documents are transferred to your name, (3) The title is registered in your name, (4) You take physical possession of the land, (5) You may need to pay land charges and other fees, (6) Consider obtaining insurance for the property.',
    category: 'Buying Process'
  },
  {
    id: '10',
    question: 'How can I protect myself from land fraud?',
    answer: 'To avoid land fraud: (1) Always verify documents independently, (2) Use qualified lawyers and surveyors, (3) Never make full payment without proper documentation, (4) Visit the land physically before purchase, (5) Check for multiple claims on the same land, (6) Be wary of unusually low prices, (7) Use reputable real estate companies.',
    category: 'Security'
  }
]

const documents: Document[] = [
  {
    id: '1',
    title: 'Sample Certificate of Occupancy',
    description: 'Sample C of O document showing the format and required information',
    type: 'C of O',
    isSample: true,
    fileSize: '2.5 MB'
  },
  {
    id: '2',
    title: 'Sample Survey Plan',
    description: 'Example of a properly registered survey plan with all necessary details',
    type: 'Survey Plan',
    isSample: true,
    fileSize: '1.8 MB'
  },
  {
    id: '3',
    title: 'Deed of Assignment Template',
    description: 'Standard template for transferring land ownership from seller to buyer',
    type: 'Legal Document',
    isSample: true,
    fileSize: '856 KB'
  },
  {
    id: '4',
    title: 'Land Verification Checklist',
    description: 'Comprehensive checklist for verifying land documents and ownership',
    type: 'Guide',
    isSample: false,
    fileSize: '425 KB'
  },
  {
    id: '5',
    title: 'Land Purchase Agreement Template',
    description: 'Standard agreement template for land purchase transactions',
    type: 'Legal Document',
    isSample: true,
    fileSize: '1.2 MB'
  }
]

const categories = ['All', 'Land Titles', 'Verification Process', 'Documentation', 'Buying Process', 'Security']

export default function LegalPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [activeTab, setActiveTab] = useState('faqs')

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="w-12 h-12 text-green-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Legal & Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive guide to land titles, verification, and legal documentation
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
          </TabsList>

          {/* FAQs Tab */}
          <TabsContent value="faqs" className="space-y-8">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search FAQs..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQs List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                            <Badge variant="secondary" className="mt-1">
                              {faq.category}
                            </Badge>
                          </div>
                        </div>
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4 pt-0">
                        <div className="pl-8 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No FAQs found
                  </h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filter criteria
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc) => (
                <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-green-700" />
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                      </div>
                      {doc.isSample && (
                        <Badge variant="secondary">Sample</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span>{doc.fileSize}</span>
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1">
                            <FileText className="w-4 h-4 mr-2" />
                            Preview
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{doc.title}</DialogTitle>
                            <DialogDescription>
                              {doc.description}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="aspect-[8.5/11] bg-gray-100 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600">Document preview would appear here</p>
                              <p className="text-sm text-gray-500 mt-2">
                                This is a {doc.isSample ? 'sample' : 'watermarked'} document
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      
                      <Button className="flex-1 bg-green-700 hover:bg-green-800">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Sample documents are watermarked and for reference only. Full documents are provided after purchase or upon serious commitment.
              </AlertDescription>
            </Alert>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Land Verification Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-700" />
                    Land Verification Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { step: '1', title: 'Document Collection', desc: 'Gather all available land documents from the seller' },
                      { step: '2', title: 'Title Search', desc: 'Conduct search at the Land Registry for ownership history' },
                      { step: '3', title: 'Physical Inspection', desc: 'Visit the property to verify boundaries and landmarks' },
                      { step: '4', title: 'Survey Verification', desc: 'Confirm survey plan authenticity with SURCON' },
                      { step: '5', title: 'Government Clearance', desc: 'Check for government acquisition or restrictions' },
                      { step: '6', title: 'Legal Review', desc: 'Have a qualified lawyer review all documents' }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-700 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Title Types Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-green-700" />
                    Understanding Land Titles
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <h4 className="font-semibold">Certificate of Occupancy (C of O)</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Highest form of land title, 99-year leasehold, most secure and valuable
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold">Right of Occupancy (R of O)</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Similar to C of O but may have different conditions and duration
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        <h4 className="font-semibold">Allocation Letter</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Initial allocation document, should be followed by proper title
                      </p>
                    </div>
                    
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                        <h4 className="font-semibold">Gazette</h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        Government publication declaring land use and ownership
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Pitfalls */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-700" />
                    Common Pitfalls to Avoid
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      'Buying land without proper verification',
                      'Making full payment before document transfer',
                      'Ignoring family or community claims on land',
                      'Not conducting physical site inspection',
                      'Dealing with unregistered agents',
                      'Skipping legal review of documents',
                      'Not checking for government acquisition',
                      'Buying land with disputed boundaries'
                    ].map((pitfall, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{pitfall}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Required Documents Checklist */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-green-700" />
                    Essential Documents Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {[
                      { name: 'Certificate of Occupancy', required: true },
                      { name: 'Registered Survey Plan', required: true },
                      { name: 'Deed of Assignment', required: true },
                      { name: 'Receipt of Payment', required: true },
                      { name: 'Building Plan Approval', required: false },
                      { name: 'Tax Clearance Certificate', required: false },
                      { name: 'Government Receipts', required: true },
                      { name: 'Identity Documents', required: true }
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">{doc.name}</span>
                        <Badge variant={doc.required ? 'default' : 'secondary'}>
                          {doc.required ? 'Required' : 'Optional'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}