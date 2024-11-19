import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '../ui/badge';

const destinations = [
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', continent: 'Asia', price: 'From £799' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', continent: 'Europe', price: 'From £649' },
  { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80', continent: 'North America', price: 'From £499' },
  { name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80', continent: 'Australia', price: 'From £999' },
  { name: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80', continent: 'South America', price: 'From £799' },
  { name: 'Cape Town', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80', continent: 'Africa', price: 'From £899' },
];

const PopularDestinations: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <motion.div 
            key={destination.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <Image 
              src={destination.image} 
              alt={`${destination.name} cityscape`}
              width={400} 
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{destination.continent}</Badge>
                <span className="text-white font-semibold">{destination.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
