'use client'

import * as React from 'react'
import Header from '../components/page-components/Header'
import HeroSection from '../components/page-components/HeroSection'
import PopularDestinations from '../components/page-components/PopularDestinations'
import FlightDeals from '../components/page-components/FlightDeals'
import WhyChooseUs from '../components/page-components/WhyChooseUs'
import Faq from '../components/page-components/Faq'
import Footer from '../components/page-components/Footer'

export default function EnhancedGlobalTravelLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-blue-900 to-indigo-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <PopularDestinations />
        <FlightDeals />
        <WhyChooseUs />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
