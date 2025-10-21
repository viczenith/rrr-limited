
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowLeft, Home, Ruler, Shield, Star, FileText, Phone, Mail, Building2, Tag, BedDouble, Bath, HomeIcon, BookOpen, ZoomIn, ZoomOut, RefreshCcw } from 'lucide-react'
import { findPlotBySlugs, toSizeSlug, estateConfigs } from '@/lib/plots'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useState } from 'react'

export default function PlotDetail() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxSrc, setLightboxSrc] = useState<string>('')
  const [lightboxTitle, setLightboxTitle] = useState<string>('')
  const [zoom, setZoom] = useState(1)

  const openLightbox = (src: string, title: string) => {
    setLightboxSrc(src)
    setLightboxTitle(title)
    setZoom(1)
    setLightboxOpen(true)
  }
  const zoomIn = () => setZoom((z) => Math.min(z + 0.25, 4))
  const zoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5))
  const resetZoom = () => setZoom(1)

  const { estate: estateSlug, size: sizeSlug } = useParams<{ estate: string; size: string }>()
  const plot = estateSlug && sizeSlug ? findPlotBySlugs(estateSlug, sizeSlug) : undefined

  if (!plot) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Plot Not Found</h1>
          <Link to="/estates" className="text-blue-600 hover:underline">Back to Estates</Link>
        </div>
      </div>
    )
  }

  const estate = estateConfigs[plot.estateKey]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-rose-300/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-transparent to-gray-50/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/estates/${plot.estateKey}`} className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" /> Back to Estate
          </Link>
          <div className="mt-6 grid lg:grid-cols-5 gap-8">
            {/* Preview */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-3xl shadow-xl">
                <img src={plot.prototypeImage} alt={`${plot.name} ${plot.plotSize} prototype`} className="w-full h-[420px] object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-br ${estate.gradient} opacity-10 mix-blend-multiply`}></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow">
                  <div className="flex items-center gap-2 text-gray-800 text-sm font-semibold">
                    <Home className="w-4 h-4 text-emerald-600" /> {plot.plotSize}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-bold text-gray-800">{plot.rating}</span>
                </div>
                {/* Price badge (single price) */}
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm font-bold">₦{plot.price.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
              {(plot.floorPlans && plot.floorPlans.length > 0) && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
                  className="mt-6 bg-white rounded-2xl p-5 shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Floor Plans</h3>
                    <span className="text-sm text-gray-500">{plot.floorPlans.length} level{plot.floorPlans.length > 1 ? 's' : ''}</span>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {plot.floorPlans.map((fp, idx) => (
                      <AccordionItem key={idx} value={`fp-${idx}`} className="border-gray-200">
                        <AccordionTrigger className="px-2">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold">{fp.title}</span>
                            <div className="flex flex-wrap items-center gap-3 text-gray-700 text-xs sm:text-sm">
                              {typeof fp.bedrooms === 'number' && (
                                <span className="inline-flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" /> {fp.bedrooms} Bedroom{fp.bedrooms === 1 ? '' : 's'}</span>
                              )}
                              {typeof fp.bathrooms === 'number' && (
                                <span className="inline-flex items-center gap-1"><Bath className="w-3.5 h-3.5" /> {fp.bathrooms} Bath{fp.bathrooms === 1 ? '' : 's'}</span>
                              )}
                              {typeof fp.bq === 'number' && fp.bq > 0 && (
                                <span className="inline-flex items-center gap-1"><HomeIcon className="w-3.5 h-3.5" /> {fp.bq} BQ</span>
                              )}
                              {fp.study && (
                                <span className="inline-flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> Study</span>
                              )}
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-2">
                          <div className="grid md:grid-cols-3 gap-4">
                            {fp.image && (
                              <div className="md:col-span-1">
                                <button
                                  type="button"
                                  onClick={() => openLightbox(fp.image!, `${plot.name} • ${fp.title}`)}
                                  className="group relative block w-full overflow-hidden rounded-xl border focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                >
                                  <img
                                    src={fp.image}
                                    alt={`${fp.title} plan`}
                                    className="w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02] cursor-zoom-in"
                                  />
                                  <span className="pointer-events-none absolute bottom-2 right-2 inline-flex items-center gap-1 rounded-full bg-black/50 text-white px-2 py-1 text-[10px] font-semibold">
                                    <ZoomIn className="w-3 h-3" /> Click to zoom
                                  </span>
                                </button>
                              </div>
                            )}
                            <div className={fp.image ? 'md:col-span-2' : 'md:col-span-3'}>
                              {fp.notes && (
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{fp.notes}</p>
                              )}
                              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                                {typeof fp.bedrooms === 'number' && (
                                  <li className="bg-gray-50 rounded-lg px-3 py-2">Bedrooms: <span className="font-semibold">{fp.bedrooms}</span></li>
                                )}
                                {typeof fp.bathrooms === 'number' && (
                                  <li className="bg-gray-50 rounded-lg px-3 py-2">Bathrooms: <span className="font-semibold">{fp.bathrooms}</span></li>
                                )}
                                {typeof fp.bq === 'number' && (
                                  <li className="bg-gray-50 rounded-lg px-3 py-2">BQ: <span className="font-semibold">{fp.bq}</span></li>
                                )}
                                {typeof fp.lounges === 'number' && (
                                  <li className="bg-gray-50 rounded-lg px-3 py-2">Lounge(s): <span className="font-semibold">{fp.lounges}</span></li>
                                )}
                                {fp.study && (
                                  <li className="bg-gray-50 rounded-lg px-3 py-2">Study: <span className="font-semibold">Yes</span></li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              )}
            </div>

            {/* Summary */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold text-gray-900">{plot.name}</h1>
                  <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-red-500" /> {plot.location}
                  </span>
                </div>
                <div className="text-gray-700 mb-4">{plot.plotSize} • {plot.titleType}</div>
                {/* Single price only - removed per-sqm */}
                <p className="text-gray-600 leading-relaxed">{plot.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {plot.estateFacilities.slice(0, 6).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span className="font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="tel:+2348000000000" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-3 px-4 rounded-xl font-semibold">
                    <Phone className="w-4 h-4" /> Call Sales
                  </a>
                  <a href="mailto:info@rrrealty.com" className="flex-1 inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:text-blue-600 py-3 px-4 rounded-xl font-semibold">
                    <Mail className="w-4 h-4" /> Email Us
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What’s Included</h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 mt-1 text-blue-600" /> Approved layout and survey plan available upon request.</li>
                  <li className="flex items-start gap-2"><Ruler className="w-4 h-4 mt-1 text-blue-600" /> Flexible building options: bungalow, duplex, or terrace (subject to guidelines).</li>
                  <li className="flex items-start gap-2"><Building2 className="w-4 h-4 mt-1 text-blue-600" /> Access to estate shared facilities per phase development plan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* Lightbox Dialog */}
    <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
      <DialogContent className="bg-white/95 backdrop-blur-xl rounded-2xl border border-black/10 shadow-2xl max-w-5xl w-[calc(100vw-2rem)]">
        <DialogHeader>
          <DialogTitle className="text-gray-900">{lightboxTitle}</DialogTitle>
        </DialogHeader>
        <div className="relative">
          <div className="absolute top-2 right-2 z-10 flex gap-2">
            <button onClick={zoomOut} className="inline-flex items-center justify-center rounded-md border bg-white/80 hover:bg-white px-2 py-1 text-sm shadow">
              <ZoomOut className="w-4 h-4" />
            </button>
            <button onClick={resetZoom} className="inline-flex items-center justify-center rounded-md border bg-white/80 hover:bg-white px-2 py-1 text-sm shadow">
              <RefreshCcw className="w-4 h-4" />
            </button>
            <button onClick={zoomIn} className="inline-flex items-center justify-center rounded-md border bg-white/80 hover:bg-white px-2 py-1 text-sm shadow">
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          <div className="overflow-auto max-h-[70vh] rounded-xl border bg-white">
            <img
              src={lightboxSrc}
              alt={lightboxTitle}
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
              className="mx-auto transition-transform duration-200"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}

