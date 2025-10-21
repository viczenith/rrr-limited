'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  MessageCircle
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--gradient-charcoal)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-400 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/logo.png" 
                  alt="RIGHTEOUS AND RICH REALTY Logo" 
                  className="w-12 h-12 rounded-xl object-cover group-hover:rotate-6 transition-transform duration-300"
                />
              </div>
              <div>
                <p className="text-base font-bold text-white group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: 'var(--color-gradient-text-accent)' }}>
                  RIGHTEOUS AND RICH
                </p>
                <p className="text-sm text-gray-300 font-medium">REALTY</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-base">
              Your trusted partner in real estate investment since 2022. 
              We provide <span className="text-emerald-400 font-semibold">verified properties</span> with <span className="text-blue-400 font-semibold">secure documentation</span>.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-rose-600 transition-all duration-300 cursor-pointer hover:scale-110">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 cursor-pointer hover:scale-110">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-base">
              <li><Link to="/estates" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-x-1 inline-block">→ Available Estates</Link></li>
              <li><Link to="/affiliate-registration" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-x-1 inline-block">→ Affiliate Program</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-x-1 inline-block">→ Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center group-hover:bg-rose-700 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">+234 800 000 0000</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">info@righteousrichrealty.com</span>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">Vicbalkon Tower, Utako, FCT Abuja</span>
              </div>
            </div>
            <div className="pt-4">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Newsletter</h3>
            <p className="text-gray-300 leading-relaxed text-base">
              Subscribe to get updates on <span className="text-yellow-400 font-semibold">new properties</span> and <span className="text-emerald-400 font-semibold">investment opportunities</span>.
            </p>
            <div className="space-y-4">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="h-14 bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-400 rounded-2xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 transition-all duration-300 text-base px-5"
              />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-base text-gray-400">
            <p className="font-medium">
              &copy; {new Date().getFullYear()} RIGHTEOUS AND RICH REALTY. All rights reserved.
            </p>
            <p>Designed & Developed by <a href='https://www.fescode.com' className='text-emerald-400' target='blank'>FesCode Limited</a></p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">Terms of Service</Link>
              <Link to="/cookie-policy" className="hover:text-emerald-400 transition-colors duration-300 font-medium hover:translate-y-[-2px] inline-block">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}