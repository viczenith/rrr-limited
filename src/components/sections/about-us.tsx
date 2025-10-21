import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Building2, 
  Users, 
  Award, 
  TrendingUp,
  Shield,
  Clock,
  FileText,
  Headphones,
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Home,
  PiggyBank,
  Target
} from 'lucide-react'

const companyStats = [
  {
    icon: <Building2 className="w-8 h-8" />,
    number: "500+",
    label: "Properties Sold",
    color: "text-amber-600"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "1,200+",
    label: "Happy Clients",
    color: "text-blue-600"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "15+",
    label: "Awards Won",
    color: "text-amber-600"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    number: "25+",
    label: "Prime Locations",
    color: "text-blue-600"
  }
]

const services = [
  {
    icon: <Home className="w-10 h-10" />,
    title: "Real Estate",
    description: "Premium residential and commercial properties in strategic locations across Abuja and surrounding areas.",
    features: ["Verified Documentation", "C of O Available", "Survey Plans"],
    color: "bg-gradient-to-br from-amber-50 to-amber-100",
    iconColor: "text-amber-600"
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Project Management",
    description: "Professional project management services to ensure successful property development and delivery.",
    features: ["Project Planning", "Quality Control", "Timeline Management"],
    color: "bg-gradient-to-br from-blue-50 to-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: <PiggyBank className="w-10 h-10" />,
    title: "Investment",
    description: "Expert guidance on real estate investments with high ROI potential and strategic market insights.",
    features: ["Market Analysis", "ROI Projections", "Risk Assessment"],
    color: "bg-gradient-to-br from-green-50 to-green-100",
    iconColor: "text-green-600"
  }
]

const values = [
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "Integrity",
    description: "We maintain the highest standards of honesty and transparency in all our dealings."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service delivery and client experience."
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
    title: "Innovation",
    description: "We embrace modern technology and innovative solutions to enhance our services."
  }
]

export default function AboutUs() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6">
            <Building2 className="w-4 sm:w-5 h-4 sm:h-5 text-amber-600" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">About Us</span>
          </div>
        </div>



        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Building Dreams, Creating Wealth
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              At Righteous & Rich Realty, we believe that everyone deserves access to quality real estate 
              opportunities. With over a decade of experience in the Nigerian property market, we have 
              established ourselves as the go-to partner for discerning investors and homebuyers.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Our commitment to righteousness in business practices and our track record of creating 
              wealth for our clients has earned us the trust of over 1,200 satisfied customers across Nigeria.
            </p>
            
            {/* Core Values */}
            {/* Service Highlights */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Our Services</h4>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base sm:text-lg">Real Estate</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">Premium property solutions</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base sm:text-lg">Project Management</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">Professional project oversight</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <PiggyBank className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-base sm:text-lg">Investment</h5>
                    <p className="text-gray-600 text-xs sm:text-sm">Strategic investment guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group order-1 lg:order-2 px-4 sm:px-0">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/30 to-blue-400/30 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="relative bg-white rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-200 via-transparent to-blue-200 animate-pulse"></div>
              </div>
              
              {/* Main Animated Image Container */}
              <div className="relative z-10 flex items-center justify-center h-64 sm:h-80 lg:h-80 mb-6">
                <div className="w-full h-full bg-gradient-to-br from-amber-50 via-blue-50 to-amber-100 rounded-3xl flex items-center justify-center overflow-hidden relative">
                  {/* Floating Elements Animation */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 w-2 sm:w-3 h-2 sm:h-3 bg-amber-400 rounded-full animate-bounce delay-0"></div>
                    <div className="absolute top-8 right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
                    <div className="absolute bottom-6 left-8 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-500 rounded-full animate-bounce delay-700"></div>
                    <div className="absolute bottom-4 right-4 w-2 sm:w-3 h-2 sm:h-3 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
                  </div>
                  
                  {/* CEO Portrait with Elegant Frame */}
                  <div className="relative w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 group-hover:scale-105 transition-transform duration-700">
                    {/* Animated Frame Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-300 via-amber-400 to-blue-500 rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full p-4 sm:p-6">
                        
                        {/* CEO Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-400">
                          {!imageError ? (
                            <img 
                              src="/rrr-ceo.jpeg" 
                              // src="/rrr-ceo-nobg.png"
                              alt="CEO - Righteous & Rich Realty" 
                              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                              onError={() => setImageError(true)}
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-4xl sm:text-6xl font-bold text-amber-600 mb-2">RRR</div>
                                <div className="text-xs sm:text-sm text-gray-600 font-semibold">CEO</div>
                                <div className="text-xs text-gray-500 mt-1 hidden sm:block">Leadership</div>
                              </div>
                            </div>
                          )}
                          
                          {/* Professional Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          
                          {/* Animated Border Ring */}
                          <div className="absolute -inset-2 border-2 sm:border-4 border-dashed border-amber-400/30 rounded-full animate-spin-slow"></div>
                        </div>

                        {/* Floating Success Icons - Hidden on mobile, visible on tablet+ */}
                        <div className="absolute top-4 -right-2 hidden sm:block">
                          <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                            <Award className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                          </div>
                        </div>

                        <div className="absolute -bottom-2 -left-2 hidden sm:block">
                          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                          </div>
                        </div>

                        <div className="absolute top-1/4 -left-4 hidden md:block">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg animate-bounce delay-500">
                            <Building2 className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          </div>
                        </div>

                        <div className="absolute top-1/3 -right-4 hidden md:block">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-300">
                            <Users className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                          </div>
                        </div>

                        {/* Professional Title Badge */}
                        <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-xs px-2">
                          <div className="bg-gradient-to-r from-amber-500 to-blue-600 text-white px-3 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-xl">
                            <div className="text-center">
                              <div className="text-xs sm:text-sm font-bold">Chief Executive Officer</div>
                              <div className="text-xs opacity-90 hidden sm:block">Leadership Excellence</div>
                            </div>
                          </div>
                        </div>

                        {/* Animated Glow Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-200/20 via-transparent to-blue-200/20 animate-pulse pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Success Metrics Floating Around - Hidden on mobile */}
                    <div className="absolute -top-8 left-1/4 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg animate-float hidden md:block">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-amber-600">1200+</div>
                        <div className="text-xs text-gray-600">Happy Clients</div>
                      </div>
                    </div>

                    <div className="absolute -bottom-8 right-1/4 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg animate-float-delayed hidden md:block">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-blue-600">500+</div>
                        <div className="text-xs text-gray-600">Properties Sold</div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -left-12 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg animate-float-slow hidden lg:block">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-green-600">15+</div>
                        <div className="text-xs text-gray-600">Awards</div>
                      </div>
                    </div>

                    <div className="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 shadow-lg animate-float-reverse hidden lg:block">
                      <div className="text-center">
                        <div className="text-base sm:text-lg font-bold text-purple-600">25+</div>
                        <div className="text-xs text-gray-600">Locations</div>
                      </div>
                    </div>

                    {/* Inspirational Quote Bubble - Hidden on small screens */}
                    <div className="absolute -top-16 right-0 max-w-xs hidden lg:block">
                      <div className="bg-gradient-to-br from-amber-50 to-blue-50 border border-amber-200 rounded-2xl p-4 shadow-lg relative">
                        <div className="text-sm text-gray-700 italic">
                          "Building dreams with integrity and creating lasting wealth for our valued clients."
                        </div>
                        <div className="absolute -bottom-2 left-8 w-4 h-4 bg-amber-50 border-b border-r border-amber-200 transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


          <div className="text-center px-4">
            <a href="/about" className="inline-block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 via-amber-600 to-blue-600 hover:from-amber-600 hover:via-blue-500 hover:to-blue-700 text-white font-bold text-base sm:text-lg lg:text-xl px-8 sm:px-12 lg:px-20 py-6 sm:py-7 lg:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                  <Star className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 animate-spin group-hover:animate-pulse" />
                  <span className="tracking-wider">Discover Us</span>
                  <ArrowRight className="w-5 sm:w-6 lg:w-8 h-5 sm:h-6 lg:h-8 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
                
                <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-white/30 animate-ping group-hover:animate-none"></div>
              </Button>
            </a>
          </div>


      </div>
    </section>
  )
}