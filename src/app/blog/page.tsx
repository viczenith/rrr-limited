'use client'

import { useState } from 'react'
import { 
  Calendar, 
  Clock, 
  User, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Tag,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    role: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
  featured: boolean
  likes: number
  comments: number
  views: number
  coverImage: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Land Titles in Nigeria: C of O vs R of O',
    excerpt: 'A comprehensive guide to different land titles in Nigeria and what they mean for property buyers. Learn the key differences between Certificate of Occupancy and Right of Occupancy.',
    content: `Land titles in Nigeria can be complex, but understanding them is crucial for any property buyer. The Certificate of Occupancy (C of O) and Right of Occupancy (R of O) are two of the most important land documents you'll encounter...`,
    author: {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      role: 'Legal Consultant'
    },
    category: 'Legal',
    tags: ['Land Titles', 'C of O', 'R of O', 'Documentation'],
    publishedAt: '2024-03-15',
    readTime: 8,
    featured: true,
    likes: 234,
    comments: 45,
    views: 1520,
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '2',
    title: '10 Common Mistakes to Avoid When Buying Land in Nigeria',
    excerpt: 'Learn from the experiences of others. We\'ve compiled the most common mistakes land buyers make and how you can avoid them to ensure a smooth property purchase.',
    content: `Buying land is one of the biggest investments you'll make, yet many buyers make costly mistakes that could have been easily avoided. From improper verification to ignoring due diligence...`,
    author: {
      name: 'Michael Adeyemi',
      avatar: '/api/placeholder/40/40',
      role: 'Property Expert'
    },
    category: 'Buying Guide',
    tags: ['Land Buying', 'Mistakes', 'Due Diligence', 'Tips'],
    publishedAt: '2024-03-12',
    readTime: 6,
    featured: true,
    likes: 189,
    comments: 32,
    views: 980,
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '3',
    title: 'The Future of Real Estate in Abuja: Trends and Predictions',
    excerpt: 'Explore the emerging trends shaping Abuja\'s real estate market and what they mean for investors and homebuyers in the coming years.',
    content: `Abuja\'s real estate market is evolving rapidly, with new developments, changing regulations, and shifting buyer preferences. Understanding these trends is essential for anyone looking to invest...`,
    author: {
      name: 'Grace Okonkwo',
      avatar: '/api/placeholder/40/40',
      role: 'Market Analyst'
    },
    category: 'Market Trends',
    tags: ['Abuja', 'Real Estate', 'Investment', 'Trends'],
    publishedAt: '2024-03-10',
    readTime: 10,
    featured: false,
    likes: 156,
    comments: 28,
    views: 760,
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '4',
    title: 'Payment Plans Explained: Finding the Right Option for You',
    excerpt: 'Different payment plans work for different financial situations. We break down the various options available to help you make an informed decision.',
    content: `When it comes to buying land, one size doesn't fit all. That\'s why we offer flexible payment plans designed to accommodate different financial situations and preferences...`,
    author: {
      name: 'David Chen',
      avatar: '/api/placeholder/40/40',
      role: 'Financial Advisor'
    },
    category: 'Financing',
    tags: ['Payment Plans', 'Financing', 'Investment', 'Budget'],
    publishedAt: '2024-03-08',
    readTime: 7,
    featured: false,
    likes: 145,
    comments: 19,
    views: 620,
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '5',
    title: 'Land Verification Process: A Step-by-Step Guide',
    excerpt: 'Don\'t skip the due diligence! Follow our comprehensive guide to properly verify land before making any purchase to protect your investment.',
    content: `Land verification is a critical step in the property buying process that should never be overlooked. This comprehensive guide will walk you through each step...`,
    author: {
      name: 'Sarah Johnson',
      avatar: '/api/placeholder/40/40',
      role: 'Legal Consultant'
    },
    category: 'Legal',
    tags: ['Verification', 'Due Diligence', 'Process', 'Security'],
    publishedAt: '2024-03-05',
    readTime: 9,
    featured: true,
    likes: 198,
    comments: 38,
    views: 1100,
    coverImage: '/api/placeholder/800/400'
  },
  {
    id: '6',
    title: 'Client Success Story: From First-Time Buyer to Landlord',
    excerpt: 'Meet Mr. and Mrs. Johnson, who started their real estate journey with us and now own multiple properties. Learn from their experience and tips.',
    content: `Every client has a unique story, but some journeys are particularly inspiring. Today, we share the story of Mr. and Mrs. Johnson, who took their first step into property ownership...`,
    author: {
      name: 'Grace Okonkwo',
      avatar: '/api/placeholder/40/40',
      role: 'Customer Relations'
    },
    category: 'Success Stories',
    tags: ['Client Story', 'Success', 'Testimonial', 'Journey'],
    publishedAt: '2024-03-01',
    readTime: 5,
    featured: false,
    likes: 267,
    comments: 52,
    views: 1890,
    coverImage: '/api/placeholder/800/400'
  }
]

const categories = ['All', 'Legal', 'Buying Guide', 'Market Trends', 'Financing', 'Success Stories']
const popularTags = ['Land Titles', 'Investment', 'Abuja', 'Verification', 'Payment Plans', 'Due Diligence']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('All')
  const [sortBy, setSortBy] = useState('latest')
  const [currentPage, setCurrentPage] = useState(1)
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Set<string>>(new Set())

  const postsPerPage = 6

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesTag = selectedTag === 'All' || post.tags.includes(selectedTag)
    
    return matchesSearch && matchesCategory && matchesTag
  })

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    switch (sortBy) {
      case 'latest':
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      case 'popular':
        return b.views - a.views
      case 'liked':
        return b.likes - a.likes
      case 'comments':
        return b.comments - a.comments
      default:
        return 0
    }
  })

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const paginatedPosts = sortedPosts.slice(startIndex, startIndex + postsPerPage)

  const toggleLike = (postId: string) => {
    const newLikedPosts = new Set(likedPosts)
    if (newLikedPosts.has(postId)) {
      newLikedPosts.delete(postId)
    } else {
      newLikedPosts.add(postId)
    }
    setLikedPosts(newLikedPosts)
  }

  const toggleBookmark = (postId: string) => {
    const newBookmarkedPosts = new Set(bookmarkedPosts)
    if (newBookmarkedPosts.has(postId)) {
      newBookmarkedPosts.delete(postId)
    } else {
      newBookmarkedPosts.add(postId)
    }
    setBookmarkedPosts(newBookmarkedPosts)
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Blog & News
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert insights, market trends, and valuable tips for real estate success
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <div className="flex gap-2">
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="w-40">
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
                    
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="latest">Latest</SelectItem>
                        <SelectItem value="popular">Most Popular</SelectItem>
                        <SelectItem value="liked">Most Liked</SelectItem>
                        <SelectItem value="comments">Most Comments</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Posts */}
            {currentPage === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                    <FeaturedPostCard 
                      key={post.id} 
                      post={post} 
                      onLike={() => toggleLike(post.id)}
                      onBookmark={() => toggleBookmark(post.id)}
                      isLiked={likedPosts.has(post.id)}
                      isBookmarked={bookmarkedPosts.has(post.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
                  <span className="text-lg font-normal text-gray-600 ml-2">
                    ({sortedPosts.length} articles)
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {paginatedPosts.map((post) => (
                  <BlogPostCard 
                    key={post.id} 
                    post={post} 
                    onLike={() => toggleLike(post.id)}
                    onBookmark={() => toggleBookmark(post.id)}
                    isLiked={likedPosts.has(post.id)}
                    isBookmarked={bookmarkedPosts.has(post.id)}
                  />
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Tag className="w-5 h-5" />
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedTag(selectedTag === tag ? 'All' : tag)}
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((post, index) => (
                      <div key={post.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <Link href={`/blog/${post.id}`} className="text-sm font-medium hover:text-green-700 line-clamp-2">
                            {post.title}
                          </Link>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span>{post.views} views</span>
                            <span>•</span>
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest real estate insights and market trends delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Your email address" />
                  <Button className="w-full bg-green-700 hover:bg-green-800">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Join 5,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => {
                    const count = blogPosts.filter(post => post.category === category).length
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <Button
                          variant="ghost"
                          className="justify-start p-0 h-auto font-normal"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                        <Badge variant="secondary">{count}</Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  function FeaturedPostCard({ 
    post, 
    onLike, 
    onBookmark, 
    isLiked, 
    isBookmarked 
  }: {
    post: BlogPost
    onLike: () => void
    onBookmark: () => void
    isLiked: boolean
    isBookmarked: boolean
  }) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 bg-gray-200">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
          <Badge className="absolute top-4 left-4 bg-green-600">
            Featured
          </Badge>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-sm text-gray-500">{post.readTime} min read</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            <Link href={`/blog/${post.id}`} className="hover:text-green-700">
              {post.title}
            </Link>
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full relative overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{formatDate(post.publishedAt)}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onLike}
                className="h-8 w-8 p-0"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onBookmark}
                className="h-8 w-8 p-0"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-green-700 text-green-700' : ''}`} />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  function BlogPostCard({ 
    post, 
    onLike, 
    onBookmark, 
    isLiked, 
    isBookmarked 
  }: {
    post: BlogPost
    onLike: () => void
    onBookmark: () => void
    isLiked: boolean
    isBookmarked: boolean
  }) {
    return (
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="flex">
            <div className="w-48 h-32 bg-gray-200 relative flex-shrink-0">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{post.category}</Badge>
                {post.featured && (
                  <Badge className="bg-green-600">Featured</Badge>
                )}
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                <Link href={`/blog/${post.id}`} className="hover:text-green-700">
                  {post.title}
                </Link>
              </h3>
              
              <p className="text-gray-600 mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full relative overflow-hidden">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm text-gray-600">{post.author.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                  <span className="text-sm text-gray-500">{post.readTime} min read</span>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes + (isLiked ? 1 : 0)}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </div>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onLike}
                      className="h-6 w-6 p-0"
                    >
                      <Heart className={`w-3 h-3 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={onBookmark}
                      className="h-6 w-6 p-0"
                    >
                      <Bookmark className={`w-3 h-3 ${isBookmarked ? 'fill-green-700 text-green-700' : ''}`} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
}