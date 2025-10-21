'use client'

import { useState } from 'react'
import { 
  Camera, 
  Video, 
  Image as ImageIcon, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Download,
  Heart,
  Share2,
  Grid,
  List,
  Filter,
  Calendar,
  MapPin,
  Users
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  title: string
  description: string
  url: string
  thumbnail: string
  category: string
  estate: string
  date: string
  location: string
  featured: boolean
  likes: number
}

const mediaItems: MediaItem[] = [
  {
    id: '1',
    type: 'image',
    title: 'Garden City Estate - Aerial View',
    description: 'Beautiful aerial view of Garden City Estate showing the complete layout and infrastructure',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Aerial',
    estate: 'Garden City Estate',
    date: '2024-01-15',
    location: 'Lugbe, Abuja',
    featured: true,
    likes: 245
  },
  {
    id: '2',
    type: 'video',
    title: 'Royal Gardens Virtual Tour',
    description: 'Complete virtual tour of Royal Gardens showing all amenities and available plots',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Virtual Tour',
    estate: 'Royal Gardens',
    date: '2024-01-20',
    location: 'Airport Road, Abuja',
    featured: true,
    likes: 189
  },
  {
    id: '3',
    type: 'image',
    title: 'Infrastructure Development',
    description: 'Road construction and drainage system installation at Green Valley Estate',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Development',
    estate: 'Green Valley Estate',
    date: '2024-02-01',
    location: 'Kubwa, Abuja',
    featured: false,
    likes: 156
  },
  {
    id: '4',
    type: 'image',
    title: 'Site Inspection Visit',
    description: 'Recent clients during site inspection at Sunset City Estate',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Events',
    estate: 'Sunset City',
    date: '2024-02-10',
    location: 'Life Camp, Abuja',
    featured: false,
    likes: 98
  },
  {
    id: '5',
    type: 'video',
    title: 'Client Testimonial - Mr. & Mrs. Johnson',
    description: 'Happy clients share their experience buying land at Park View Estate',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Testimonials',
    estate: 'Park View Estate',
    date: '2024-02-15',
    location: 'Asokoro, Abuja',
    featured: true,
    likes: 267
  },
  {
    id: '6',
    type: 'image',
    title: 'Perimeter Fencing Installation',
    description: 'Security perimeter fencing being installed at Garden City Estate',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Development',
    estate: 'Garden City Estate',
    date: '2024-02-20',
    location: 'Lugbe, Abuja',
    featured: false,
    likes: 134
  },
  {
    id: '7',
    type: 'image',
    title: 'Land Allocation Ceremony',
    description: 'Recent land allocation ceremony for new plot owners at Royal Gardens',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Events',
    estate: 'Royal Gardens',
    date: '2024-02-25',
    location: 'Airport Road, Abuja',
    featured: false,
    likes: 178
  },
  {
    id: '8',
    type: 'video',
    title: 'Infrastructure Overview',
    description: 'Complete overview of infrastructure development across all our estates',
    url: '/api/placeholder/1200/800',
    thumbnail: '/api/placeholder/400/300',
    category: 'Company',
    estate: 'All Estates',
    date: '2024-03-01',
    location: 'Abuja',
    featured: true,
    likes: 312
  }
]

const categories = ['All', 'Aerial', 'Virtual Tour', 'Development', 'Events', 'Testimonials', 'Company']
const estates = ['All', 'Garden City Estate', 'Royal Gardens', 'Green Valley Estate', 'Sunset City', 'Park View Estate']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedEstate, setSelectedEstate] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())

  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesEstate = selectedEstate === 'All' || item.estate === selectedEstate
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesEstate && matchesSearch
  })

  const handleMediaClick = (item: MediaItem, index: number) => {
    setSelectedMedia(item)
    setCurrentIndex(index)
  }

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : filteredMedia.length - 1
    setCurrentIndex(newIndex)
    setSelectedMedia(filteredMedia[newIndex])
  }

  const handleNext = () => {
    const newIndex = currentIndex < filteredMedia.length - 1 ? currentIndex + 1 : 0
    setCurrentIndex(newIndex)
    setSelectedMedia(filteredMedia[newIndex])
  }

  const toggleLike = (itemId: string) => {
    const newLikedItems = new Set(likedItems)
    if (newLikedItems.has(itemId)) {
      newLikedItems.delete(itemId)
    } else {
      newLikedItems.add(itemId)
    }
    setLikedItems(newLikedItems)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Camera className="w-12 h-12 text-green-700" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Gallery & Media
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our estates through photos, videos, and virtual tours
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <Input
                  placeholder="Search media..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Category Filter */}
              <div className="lg:w-48">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Estate Filter */}
              <div className="lg:w-56">
                <Select value={selectedEstate} onValueChange={setSelectedEstate}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estate" />
                  </SelectTrigger>
                  <SelectContent>
                    {estates.map((estate) => (
                      <SelectItem key={estate} value={estate}>
                        {estate}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* View Mode */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Media Grid/List */}
        {filteredMedia.length > 0 ? (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
            "space-y-6"
          }>
            {filteredMedia.map((item, index) => (
              <MediaCard 
                key={item.id} 
                item={item} 
                viewMode={viewMode}
                onClick={() => handleMediaClick(item, index)}
                onLike={() => toggleLike(item.id)}
                isLiked={likedItems.has(item.id)}
              />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="text-center py-12">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No media found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Media Viewer Dialog */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-6xl w-full h-[90vh] p-0 overflow-hidden">
          {selectedMedia && (
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-white">
                <div>
                  <h2 className="text-xl font-semibold">{selectedMedia.title}</h2>
                  <p className="text-sm text-gray-600">{selectedMedia.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedMedia(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Media Content */}
              <div className="flex-1 relative bg-black">
                {selectedMedia.type === 'image' ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={selectedMedia.url}
                      alt={selectedMedia.title}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p>Video player would be here</p>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="lg"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  onClick={handleNext}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>

              {/* Footer */}
              <div className="p-4 border-b bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(selectedMedia.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedMedia.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {selectedMedia.likes + (likedItems.has(selectedMedia.id) ? 1 : 0)} likes
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleLike(selectedMedia.id)}
                    >
                      <Heart className={cn("w-4 h-4", likedItems.has(selectedMedia.id) && "fill-red-500 text-red-500")} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )

  function MediaCard({ 
    item, 
    viewMode, 
    onClick, 
    onLike, 
    isLiked 
  }: { 
    item: MediaItem
    viewMode: 'grid' | 'list'
    onClick: () => void
    onLike: () => void
    isLiked: boolean
  }) {
    if (viewMode === 'list') {
      return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onClick}>
          <CardContent className="p-0">
            <div className="flex">
              <div className="w-48 h-32 bg-gray-200 relative flex-shrink-0">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                )}
                {item.featured && (
                  <Badge className="absolute top-2 left-2 bg-green-600">
                    Featured
                  </Badge>
                )}
              </div>
              <div className="flex-1 p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      onLike()
                    }}
                  >
                    <Heart className={cn("w-4 h-4", isLiked && "fill-red-500 text-red-500")} />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </div>
                  <Badge variant="secondary">{item.category}</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )
    }

    return (
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group" onClick={onClick}>
        <div className="relative aspect-video bg-gray-200 overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {item.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
              <Play className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
            </div>
          )}
          {item.featured && (
            <Badge className="absolute top-2 left-2 bg-green-600">
              Featured
            </Badge>
          )}
          <div className="absolute top-2 right-2 flex gap-1">
            <Badge variant="secondary" className="bg-black/70 text-white">
              {item.type === 'video' ? (
                <><Video className="w-3 h-3 mr-1" /> Video</>
              ) : (
                <><ImageIcon className="w-3 h-3 mr-1" /> Photo</>
              )}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">
                {item.category}
              </Badge>
              <span className="text-xs text-gray-500">
                {formatDate(item.date)}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={(e) => {
                  e.stopPropagation()
                  onLike()
                }}
              >
                <Heart className={cn("w-4 h-4", isLiked && "fill-red-500 text-red-500")} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}