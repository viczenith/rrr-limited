// Centralized plots data, utilities, and resolvers for plot detail pages

export type EstateKey = 'rehoboth-city' | 'polo-city' | 'lifecamp' | 'gwarinpa' | 'kubwa'

export interface EstateConfig {
  key: EstateKey
  name: string
  location: string
  titleType: string
  estateFacilities: string[]
  gradient: string
}

export interface PlotConfig {
  size: string // e.g., '500sqm'
  prototypeImage: string
  rating: number
  description: string
  floorPlanImage?: string
  floorPlans?: FloorPlan[]
}

export interface FloorPlan {
  title: string // e.g., Ground Floor, First Floor
  bedrooms?: number
  bathrooms?: number
  bq?: number
  lounges?: number
  study?: boolean
  image?: string
  notes?: string
}

export const estateConfigs: Record<EstateKey, EstateConfig> = {
  'rehoboth-city': {
    key: 'rehoboth-city',
    name: 'Rehoboth City',
    location: 'Abuja, FCT',
    titleType: 'FCDA R of O',
    estateFacilities: [
      'Perimeter Fencing',
      'Gate House',
      'Paved Roads',
      'Drainage',
      'Solar Street Lights',
      'Green Areas',
      'Shopping Complex',
      'School'
    ],
    gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
  },
  'polo-city': {
    key: 'polo-city',
    name: 'Polo City',
    location: 'Abuja, FCT',
    titleType: 'FCDA R of O',
    estateFacilities: [
      'Electricity',
      'Water Supply',
      'Security',
      'Recreation Center',
      'Smart Homes',
      'Gym & Spa',
      'Swimming Pool',
      'Kids Playground',
    ],
    gradient: 'from-blue-400 via-blue-500 to-indigo-600',
  },
  lifecamp: {
    key: 'lifecamp',
    name: 'Lifecamp Extension',
    location: 'Lifecamp, Abuja',
    titleType: 'FCDA R of O',
    estateFacilities: ['Perimeter Fencing', 'Street Lights', 'Drainage', 'Water'],
    gradient: 'from-rose-400 via-pink-500 to-fuchsia-600',
  },
  gwarinpa: {
    key: 'gwarinpa',
    name: 'Gwarinpa Extension',
    location: 'Gwarinpa, Abuja',
    titleType: 'C of O',
    estateFacilities: ['Gate House', 'Security', 'Green Areas'],
    gradient: 'from-amber-400 via-orange-500 to-red-600',
  },
  kubwa: {
    key: 'kubwa',
    name: 'Kubwa Hills',
    location: 'Kubwa, Abuja',
    titleType: 'C of O',
    estateFacilities: ['Scenic Views', 'Access Roads', 'Power'],
    gradient: 'from-teal-400 via-emerald-500 to-green-600',
  },
}

export const plotConfigs: Record<string, PlotConfig> = {
  '400sqm': {
    size: '400sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype1.webp`,
    rating: 4.6,
    description:
      '3 Bedroom Fully Detached Duplex. Affordable luxury living with complete infrastructure and serene environment.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/floor-400.webp`,
    floorPlans: [
      {
        title: 'Ground Floor',
        bedrooms: 1,
        bathrooms: 2,
        bq: 1,
        lounges: 1,
        image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp`,
        notes: 'Spacious living, dining, kitchen, guest room, and BQ.'
      },
      {
        title: 'First Floor',
        bedrooms: 2,
        bathrooms: 2,
        lounges: 1,
        study: true,
        image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp`,
        notes: 'Primary bedroom ensuite with balcony and family lounge.'
      }
    ],
  },
  '500sqm': {
    size: '500sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype2.webp`,
    rating: 4.8,
    description:
      '3 Bedroom Fully Detached Duplex. Premium residential plot with modern infrastructure and strategic location.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype2.webp`,
    floorPlans: [
      {
        title: 'Ground Floor',
        bedrooms: 1,
        bathrooms: 2,
        bq: 1,
        lounges: 1,
        image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp`,
      },
      {
        title: 'First Floor',
        bedrooms: 3,
        bathrooms: 3,
        lounges: 1,
        study: true,
        image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp`,
      },
      {
        title: 'Second Floor',
        bedrooms: 1,
        bathrooms: 1,
        lounges: 1,
        image: `${import.meta.env.BASE_URL}floor-plan/secound-floor.webp`,
        notes: 'Pent floor lounge and terrace.'
      }
    ],
  },
  '550sqm': {
    size: '550sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    rating: 4.5,
    description:
      '3 Bedroom Fully Detached Duplex. Sustainable living plot with eco-friendly features and wellness focus.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/floor-550.webp`,
    floorPlans: [
  { title: 'Ground Floor', bedrooms: 1, bathrooms: 2, bq: 1, lounges: 1, image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp` },
      { title: 'First Floor', bedrooms: 3, bathrooms: 3, lounges: 1, study: true, image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp` },
    ],
  },
  '600sqm': {
    size: '600sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype1.webp`,
    rating: 4.9,
    description:
      '3 Bedroom Fully Detached Duplex. Eco-friendly plot with sustainable living features and modern amenities.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/floor-600.webp`,
    floorPlans: [
  { title: 'Ground Floor', bedrooms: 2, bathrooms: 2, bq: 1, lounges: 1, image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp` },
      { title: 'First Floor', bedrooms: 3, bathrooms: 3, lounges: 1, image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp` },
    ],
  },
  '650sqm': {
    size: '650sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype2.webp`,
    rating: 4.8,
    description:
      '3 Bedroom Fully Detached Duplex. Exclusive plot with premium recreational facilities and scenic potential.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/floor-650.webp`,
    floorPlans: [
  { title: 'Ground Floor', bedrooms: 2, bathrooms: 3, bq: 1, lounges: 2, image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp` },
      { title: 'First Floor', bedrooms: 4, bathrooms: 3, lounges: 1, study: true, image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp` },
    ],
  },
  '750sqm': {
    size: '750sqm',
    prototypeImage: `${import.meta.env.BASE_URL}estate-prototypes/prototype3.webp`,
    rating: 4.7,
    description:
      '3 Bedroom Fully Detached Duplex. Luxury plot with world-class amenity potential and smart technology integration.',
    floorPlanImage: `${import.meta.env.BASE_URL}estate-prototypes/floor-750.webp`,
    floorPlans: [
  { title: 'Ground Floor', bedrooms: 2, bathrooms: 3, bq: 1, lounges: 2, image: `${import.meta.env.BASE_URL}floor-plan/ground-floor.webp` },
      { title: 'First Floor', bedrooms: 4, bathrooms: 4, lounges: 1, study: true, image: `${import.meta.env.BASE_URL}floor-plan/first-floor.webp` },
      { title: 'Second Floor', bedrooms: 1, bathrooms: 1, lounges: 1, image: `${import.meta.env.BASE_URL}floor-plan/secound-floor.webp` },
    ],
  },
}

export const toEstateSlug = (name: string): EstateKey => {
  const s = name.trim().toLowerCase()
  if (s.includes('rehoboth')) return 'rehoboth-city'
  if (s.includes('polo')) return 'polo-city'
  if (s.includes('lifecamp')) return 'lifecamp'
  if (s.includes('gwarinpa')) return 'gwarinpa'
  return 'kubwa'
}

export const toSizeSlug = (size: string) => size.replace(/\s+/g, '').toLowerCase() // e.g., 500sqm

export interface AvailablePlot {
  id: number
  estateKey: EstateKey
  name: string
  location: string
  plotSize: string
  titleType: string
  isVerified: boolean
  isFeatured: boolean
  prototypeImage: string
  floorPlanImage?: string
  rating: number
  estateFacilities: string[]
  description: string
  gradient: string
  price: number
  floorPlans?: FloorPlan[]
}

export const buildAvailablePlots = (): AvailablePlot[] => {
  const plots: AvailablePlot[] = []
  let id = 1
  const sizes = Object.keys(plotConfigs)
  const estates = Object.values(estateConfigs)
  estates.forEach((estate) => {
    sizes.forEach((size) => {
      const plot = plotConfigs[size]
      plots.push({
        id: id++,
        estateKey: estate.key,
        name: estate.name,
        location: estate.location,
        plotSize: plot.size,
        titleType: estate.titleType,
        isVerified: true,
        isFeatured: true,
        prototypeImage: plot.prototypeImage,
        floorPlanImage: plot.floorPlanImage,
        rating: plot.rating,
        estateFacilities: estate.estateFacilities,
        description: plot.description,
        gradient: estate.gradient,
        price: getPlotPrice(estate.key, plot.size),
        floorPlans: plot.floorPlans,
      })
    })
  })
  return plots
}

export const findPlotBySlugs = (estateSlug: string, sizeSlug: string): AvailablePlot | undefined => {
  const plots = buildAvailablePlots()
  return plots.find(
    (p) => p.estateKey === (estateSlug as EstateKey) && toSizeSlug(p.plotSize) === sizeSlug
  )
}

// Pricing per estate and plot size (NGN). Adjust as needed.
const pricing: Record<EstateKey, Record<string, number>> = {
  'rehoboth-city': {
    '400sqm': 2000000,
    '500sqm': 2500000,
    '550sqm': 2700000,
    '600sqm': 3000000,
    '650sqm': 3200000,
    '750sqm': 3800000,
  },
  'polo-city': {
    '400sqm': 1800000,
    '500sqm': 2200000,
    '550sqm': 2400000,
    '600sqm': 2600000,
    '650sqm': 2800000,
    '750sqm': 3200000,
  },
  lifecamp: {
    '400sqm': 4200000,
    '500sqm': 4600000,
    '550sqm': 5000000,
    '600sqm': 5400000,
    '650sqm': 5800000,
    '750sqm': 6500000,
  },
  gwarinpa: {
    '400sqm': 6000000,
    '500sqm': 6800000,
    '550sqm': 7200000,
    '600sqm': 7600000,
    '650sqm': 8000000,
    '750sqm': 9000000,
  },
  kubwa: {
    '400sqm': 3500000,
    '500sqm': 3800000,
    '550sqm': 4200000,
    '600sqm': 4500000,
    '650sqm': 4800000,
    '750sqm': 5200000,
  },
}

export function getPlotPrice(estateKey: EstateKey, size: string): number {
  const table = pricing[estateKey]
  return table?.[size] ?? 2000000
}
