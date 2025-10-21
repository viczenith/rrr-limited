import Hero from '../components/sections/hero'
import AboutUs from '../components/sections/about-us'
import FeaturedEstates from '../components/sections/featured-estates'
import WhyChooseUs from '../components/sections/why-choose-us'
import Testimonials from '../components/sections/testimonials'
import Contact from '../components/sections/contact'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedEstates />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </>
  )
}