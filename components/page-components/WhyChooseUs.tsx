import * as React from 'react'
import { Globe, Headphones, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseUs: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Why Choose OpusTravels</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Global Coverage', icon: <Globe className="h-8 w-8" />, description: 'Access to flights and destinations worldwide' },
          { title: '24/7 Support', icon: <Headphones className="h-8 w-8" />, description: 'Round-the-clock customer service for peace of mind' },
          { title: 'Best Price Guarantee', icon: <CreditCard className="h-8 w-8" />, description: 'Competitive prices and price matching available' },
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg text-center"
          >
            <div className="text-blue-400 mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
