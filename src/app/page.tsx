import Navbar from '@/components/layout/navbar'
import Hero from '@/components/sections/hero'
import AboutUs from '@/components/sections/about-us'
import FeaturedEstates from '@/components/sections/featured-estates'
import WhyChooseUs from '@/components/sections/why-choose-us'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="main-content">
        <Hero />
        <AboutUs />
        <FeaturedEstates />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}