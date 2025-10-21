import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './pages/Home'
import About from './pages/About'
import Estates from './pages/Estates'
import Services from './pages/Services'
import Contact from './pages/Contact'
import EstateDetail from './pages/EstateDetail'
import PlotDetail from './pages/PlotDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import AffiliateRegistration from './app/affiliate-registration/page'
import InvoiceGenerator from './app/invoice-generator/page'
import { Toaster } from './components/ui/toaster'

function App() {
  const location = useLocation()
  
  // Routes that should NOT have navbar and footer
  const hideNavigationRoutes = ['/invoice-generator']
  const shouldHideNavigation = hideNavigationRoutes.some(route => location.pathname.endsWith(route))

  return (
    <div className="min-h-screen">
      {!shouldHideNavigation && <Navbar />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Estates />} />
          <Route path="/estates" element={<Estates />} />
          <Route path="/estates/:id" element={<EstateDetail />} />
          <Route path="/plots/:estate/:size" element={<PlotDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/affiliate-registration" element={<AffiliateRegistration />} />
          <Route path="/invoice-generator" element={<InvoiceGenerator />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      {!shouldHideNavigation && <Footer />}
      <Toaster />
    </div>
  )
}

export default App