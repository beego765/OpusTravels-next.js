import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plane, Hotel, Car, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select } from '../ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const destinations = [
  { name: 'Tokyo', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', continent: 'Asia', price: 'From £799' },
  { name: 'Paris', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', continent: 'Europe', price: 'From £649' },
  { name: 'New York', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80', continent: 'North America', price: 'From £499' },
  { name: 'Sydney', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80', continent: 'Australia', price: 'From £999' },
  { name: 'Rio de Janeiro', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80', continent: 'South America', price: 'From £799' },
  { name: 'Cape Town', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80', continent: 'Africa', price: 'From £899' },
];

const HeroSection: React.FC = () => {
  const [currentDestination, setCurrentDestination] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDestination}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={destinations[currentDestination].image}
            alt={`${destinations[currentDestination].name} cityscape`}
            fill
            objectFit="cover"
            className="mix-blend-overlay opacity-50"
          />
        </motion.div>
      </AnimatePresence>
      <motion.h1 
        className="text-5xl font-bold mb-6 leading-tight relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Explore the World with OpusTravels
      </motion.h1>
      <motion.p 
        className="text-xl mb-10 max-w-2xl relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Discover amazing destinations across the globe. Book your flights with ease and embark on unforgettable journeys.
      </motion.p>
      <motion.div 
        className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg relative z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Tabs defaultValue="flights" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="flights" className="flex items-center"><Plane className="mr-2 h-4 w-4" /> Flights</TabsTrigger>
            <TabsTrigger value="hotels" className="flex items-center"><Hotel className="mr-2 h-4 w-4" /> Hotels</TabsTrigger>
            <TabsTrigger value="cars" className="flex items-center"><Car className="mr-2 h-4 w-4" /> Car Rental</TabsTrigger>
          </TabsList>
          <TabsContent value="flights">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="from" className="block text-sm font-medium mb-1">From</label>
                <Select>
                  <option>Select origin</option>
                </Select>
              </div>
              <div>
                <label htmlFor="to" className="block text-sm font-medium mb-1">To</label>
                <Select>
                  <option>Select destination</option>
                </Select>
              </div>
              <div>
                <label htmlFor="depart" className="block text-sm font-medium mb-1">Depart</label>
                <Input type="date" />
              </div>
              <div>
                <label htmlFor="return" className="block text-sm font-medium mb-1">Return</label>
                <Input type="date" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="passengers" className="block text-sm font-medium mb-1">Passengers</label>
                <Select>
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </Select>
              </div>
              <div>
                <label htmlFor="class" className="block text-sm font-medium mb-1">Class</label>
                <Select>
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                  <Search className="mr-2 h-4 w-4" /> Search Flights
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="destination" className="block text-sm font-medium mb-1">Destination</label>
                <Select>
                  <option>Select destination</option>
                </Select>
              </div>
              <div>
                <label htmlFor="check-in" className="block text-sm font-medium mb-1">Check-in</label>
                <Input type="date" />
              </div>
              <div>
                <label htmlFor="check-out" className="block text-sm font-medium mb-1">Check-out</label>
                <Input type="date" />
              </div>
              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-1">Guests</label>
                <Select>
                  <option>2 Adults, 0 Children</option>
                </Select>
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <Search className="mr-2 h-4 w-4" /> Search Hotels
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="cars">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="pickup" className="block text-sm font-medium mb-1">Pick-up Location</label>
                <Select>
                  <option>Select location</option>
                </Select>
              </div>
              <div>
                <label htmlFor="dropoff" className="block text-sm font-medium mb-1">Drop-off Location</label>
                <Select>
                  <option>Select location</option>
                </Select>
              </div>
              <div>
                <label htmlFor="pickup-date" className="block text-sm font-medium mb-1">Pick-up Date</label>
                <Input type="date" />
              </div>
              <div>
                <label htmlFor="dropoff-date" className="block text-sm font-medium mb-1">Drop-off Date</label>
                <Input type="date" />
              </div>
            </div>
            <div className="mt-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                <Search className="mr-2 h-4 w-4" /> Search Cars
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default HeroSection;
