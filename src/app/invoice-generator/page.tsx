'use client'

import React, { useState, useRef } from 'react'
import { InvoiceForm } from '@/invoice-generator/InvoiceForm'
import { InvoiceTemplate } from '@/invoice-generator/InvoiceTemplate'
import { InvoiceData, defaultInvoiceData } from '@/types/Invoice'
import { Button } from '@/components/ui/button'
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { FileText, Download, Eye, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// For PDF generation
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function InvoiceGeneratorPage() {
  const [invoiceData, setInvoiceData] = useState<InvoiceData>(defaultInvoiceData)
  const [savedInvoices, setSavedInvoices] = useState<InvoiceData[]>([])
  const [previewOpen, setPreviewOpen] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const invoiceRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  // Load saved invoices from localStorage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem('rrr-invoices')
    if (stored) {
      try {
        setSavedInvoices(JSON.parse(stored))
      } catch (error) {
        console.error('Error loading invoices:', error)
      }
    }
  }, [])

  // Save invoices to localStorage whenever they change
  React.useEffect(() => {
    if (savedInvoices.length > 0) {
      localStorage.setItem('rrr-invoices', JSON.stringify(savedInvoices))
    }
  }, [savedInvoices])

  const handleSave = (data: InvoiceData) => {
    setInvoiceData(data)
    
    // Add or update invoice in saved list
    setSavedInvoices(prev => {
      const existingIndex = prev.findIndex(inv => inv.invoiceNumber === data.invoiceNumber)
      if (existingIndex >= 0) {
        // Update existing invoice
        const updated = [...prev]
        updated[existingIndex] = data
        return updated
      } else {
        // Add new invoice
        return [...prev, data]
      }
    })
    
    generatePDF(data)
  }

  const handlePreview = (data: InvoiceData) => {
    setInvoiceData(data)
    setPreviewOpen(true)
  }

  const handleEditInvoice = (invoice: InvoiceData) => {
    setInvoiceData(invoice)
    // Scroll to top of form
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDeleteInvoice = (invoiceNumber: string) => {
    setSavedInvoices(prev => prev.filter(inv => inv.invoiceNumber !== invoiceNumber))
  }

  const handleViewInvoice = (invoice: InvoiceData) => {
    setInvoiceData(invoice)
    setPreviewOpen(true)
  }

  const handleDownloadInvoice = (invoice: InvoiceData) => {
    generatePDF(invoice)
  }

  const generatePDF = async (data: InvoiceData) => {
    setIsGeneratingPDF(true)
    
    try {
      // Create a temporary container for the invoice
      const tempDiv = document.createElement('div')
      tempDiv.style.position = 'absolute'
      tempDiv.style.left = '-9999px'
      tempDiv.style.top = '0'
      document.body.appendChild(tempDiv)

      // Render the invoice template into the temporary container
      const { createRoot } = await import('react-dom/client')
      const root = createRoot(tempDiv)
      
      await new Promise<void>((resolve) => {
        root.render(
          <div ref={invoiceRef}>
            <InvoiceTemplate data={data} />
          </div>
        )
        setTimeout(resolve, 500) // Wait for rendering
      })

      const invoiceElement = tempDiv.querySelector('#invoice-template') as HTMLElement
      
      if (invoiceElement) {
        // Generate canvas from the invoice
        const canvas = await html2canvas(invoiceElement, {
          useCORS: true,
          logging: false,
          background: '#ffffff'
        })

        // Create PDF
        const imgData = canvas.toDataURL('image/png')
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        })

        const imgWidth = 210 // A4 width in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight)
        
        // Download the PDF with client name and invoice number
        const clientName = data.clientName?.trim() || 'Client'
        const sanitizedClientName = clientName.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '_')
        const invoiceNum = data.invoiceNumber.replace(/\//g, '-')
        const date = new Date().toISOString().split('T')[0]
        const fileName = `${sanitizedClientName}_Invoice_${invoiceNum}_${date}.pdf`
        pdf.save(fileName)

        // Show success modal
        setShowSuccessModal(true)
        setTimeout(() => setShowSuccessModal(false), 4000)
      }

      // Cleanup
      root.unmount()
      document.body.removeChild(tempDiv)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-4 hover:bg-amber-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button> */}

          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 border border-amber-200/50 rounded-full px-6 py-3 mb-6">
            <FileText className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm">INVOICE GENERATOR</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="block text-gray-900 mb-2">Create Professional Invoices</span>
            <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              In Minutes
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Generate beautiful, professional invoices for your real estate transactions with our easy-to-use invoice generator.
          </p>
        </motion.div>

        {/* Invoice Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InvoiceForm
            initialData={invoiceData}
            onSave={handleSave}
            onPreview={handlePreview}
            savedInvoices={savedInvoices}
            onEditInvoice={handleEditInvoice}
            onDeleteInvoice={handleDeleteInvoice}
            onViewInvoice={handleViewInvoice}
            onDownloadInvoice={handleDownloadInvoice}
          />
        </motion.div>

        {/* Preview Dialog - Beautifully Redesigned with Proper Scaling */}
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent 
            className="w-[98vw] max-w-[1200px] h-[98vh] max-h-[98vh] overflow-hidden flex flex-col p-0 gap-0" 
            style={{ zIndex: 9999 }}
          >
            {/* Beautiful Header */}
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-6 py-4 flex-shrink-0">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Eye className="w-6 h-6 md:w-8 md:h-8" />
                  Invoice Preview
                </DialogTitle>
                <DialogDescription className="text-white/90 text-sm md:text-base mt-1">
                  Review your invoice before generating the PDF document
                </DialogDescription>
              </DialogHeader>
            </div>
            
            {/* Invoice Content with Original Size - No Compression */}
            <div 
              className="flex-1 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 lg:p-8"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#f59e0b #e5e7eb'
              }}
            >
              <style>
                {`
                  .invoice-preview-scroll::-webkit-scrollbar {
                    width: 10px;
                    height: 10px;
                  }
                  .invoice-preview-scroll::-webkit-scrollbar-track {
                    background: #e5e7eb;
                    border-radius: 5px;
                  }
                  .invoice-preview-scroll::-webkit-scrollbar-thumb {
                    background: #f59e0b;
                    border-radius: 5px;
                  }
                  .invoice-preview-scroll::-webkit-scrollbar-thumb:hover {
                    background: #d97706;
                  }
                  /* Prevent any scaling or compression */
                  .invoice-original-size {
                    width: 210mm !important;
                    min-width: 210mm !important;
                    transform: none !important;
                    zoom: 1 !important;
                  }
                `}
              </style>
              <div 
                className="invoice-preview-scroll mx-auto"
                style={{ 
                  width: 'fit-content',
                  maxWidth: '100%',
                  overflowX: 'auto',
                  overflowY: 'visible'
                }}
              >
                <div 
                  className="invoice-original-size bg-white rounded-lg shadow-2xl"
                >
                  <InvoiceTemplate data={invoiceData} />
                </div>
              </div>
            </div>

            {/* Beautiful Footer with Actions */}
            <div className="bg-white border-t border-gray-200 px-4 md:px-6 lg:px-8 py-4 flex-shrink-0 flex flex-col sm:flex-row justify-center items-center gap-3">
              <Button
                onClick={() => setPreviewOpen(false)}
                variant="outline"
                size="lg"
                className="border-2 hover:bg-gray-50 w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Close Preview
              </Button>
              <Button
                onClick={() => {
                  setPreviewOpen(false)
                  generatePDF(invoiceData)
                }}
                disabled={isGeneratingPDF}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-orange-500/30 w-full sm:w-auto"
              >
                {isGeneratingPDF ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </>
                )}
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Loading Overlay - Increased Z-Index */}
        {isGeneratingPDF && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center" style={{ zIndex: 10000 }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md"
            >
              <div className="relative mb-6">
                <div className="animate-spin rounded-full h-20 w-20 border-4 border-amber-500 border-t-transparent mx-auto"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-amber-500" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-2">Generating Invoice PDF...</p>
              <p className="text-base text-gray-600">Please wait while we create your document</p>
              <div className="mt-6 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Success Modal - Beautiful Replacement for Alert */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center" style={{ zIndex: 10001 }}>
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md mx-4"
            >
              {/* Success Icon with Animation */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="relative mb-6"
              >
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                {/* Celebration Particles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute text-4xl animate-ping opacity-75">🎉</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-3">
                  Success!
                </h3>
                <p className="text-lg text-gray-700 mb-2 font-semibold">
                  Invoice PDF Generated Successfully
                </p>
                <p className="text-base text-gray-600 mb-6">
                  Your invoice has been downloaded and is ready to use
                </p>

                {/* Auto-close indicator */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>This will close automatically</span>
                </div>

                {/* Manual close button */}
                <Button
                  onClick={() => setShowSuccessModal(false)}
                  className="mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30"
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}
