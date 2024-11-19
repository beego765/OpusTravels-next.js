'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Hotel, Car, Menu, Globe, Search } from 'lucide-react'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { 
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '../components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'
import { Badge } from '../components/ui/badge'
import { cn } from '../lib/utils'

const destinations = [
  { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", continent: "Asia", price: "From £799" },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", continent: "Europe", price: "From £649" },
  { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", continent: "North America", price: "From £499" },
  { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", continent: "Australia", price: "From £999" },
  { name: "Rio de Janeiro", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80", continent: "South America", price: "From £799" },
  { name: "Cape Town", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80", continent: "Africa", price: "From £899" },
]

export function EnhancedGlobalTravelLanding() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [currentDestination, setCurrentDestination] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDestination((prev) => (prev + 1) % destinations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-blue-900 to-indigo-900 text-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <Globe className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold">OpusTravels</span>
        </div>
        <nav className="hidden lg:flex space-x-6">
          {["Destinations", "Flights", "Hotels", "Deals", "About"].map((item) => (
            <a key={item} href="#" className="hover:text-blue-300 transition-colors">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Book Now</Button>
        </div>
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-screen p-4">
            <nav className="flex flex-col space-y-4">
              {["Destinations", "Flights", "Hotels", "Deals", "About"].map((item) => (
                <a key={item} href="#" className="text-lg font-medium hover:text-blue-300 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="mt-6 space-y-4">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Book Now</Button>
            </div>
          </PopoverContent>
        </Popover>
      </header>

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="container mx-auto py-20 flex flex-col items-center text-center relative overflow-hidden">
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
                layout="fill"
                objectFit="cover"
                className="mix-blend-overlay opacity-50"
              />
            </motion.div>
          </AnimatePresence>
          <motion.h1 
            className="text-5xl font-bold mb-6 leading-tight relative z-10 sm:text-4xl max-sm:text-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Explore the World with OpusTravels
          </motion.h1>
          <motion.p 
            className="text-xl mb-10 max-w-2xl relative z-10 sm:text-lg max-sm:text-base"
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
              <TabsList className="grid w-full grid-cols-3 mb-4 sm:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-2">
                <TabsTrigger value="flights" className="flex items-center max-sm:py-2"><Plane className="mr-2 h-4 w-4" /> Flights</TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center max-sm:py-2"><Hotel className="mr-2 h-4 w-4" /> Hotels</TabsTrigger>
                <TabsTrigger value="cars" className="flex items-center max-sm:py-2"><Car className="mr-2 h-4 w-4" /> Car Rental</TabsTrigger>
              </TabsList>
              <TabsContent value="flights">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-sm:gap-3">
                  <div className="max-sm:mb-2">
                    <label htmlFor="from" className="block text-sm font-medium mb-1 max-sm:text-xs">From</label>
                    <SelectRoot>
                      <SelectTrigger className={cn("w-full max-sm:text-sm")}>
                        <SelectValue placeholder="Select origin" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="origin1">Origin 1</SelectItem>
                        <SelectItem value="origin2">Origin 2</SelectItem>
                      </SelectContent>
                    </SelectRoot>
                  </div>
                  <div className="max-sm:mb-2">
                    <label htmlFor="to" className="block text-sm font-medium mb-1 max-sm:text-xs">To</label>
                    <SelectRoot>
                      <SelectTrigger className={cn("w-full max-sm:text-sm")}>
                        <SelectValue placeholder="Select destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dest1">Destination 1</SelectItem>
                        <SelectItem value="dest2">Destination 2</SelectItem>
                      </SelectContent>
                    </SelectRoot>
                  </div>
                  <div className="max-sm:mb-2">
                    <label htmlFor="depart" className="block text-sm font-medium mb-1 max-sm:text-xs">Depart</label>
                    <Input type="date" id="depart" className={cn("w-full max-sm:text-sm")} />
                  </div>
                  <div className="max-sm:mb-2">
                    <label htmlFor="return" className="block text-sm font-medium mb-1 max-sm:text-xs">Return</label>
                    <Input type="date" id="return" className={cn("w-full max-sm:text-sm")} />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-sm:gap-3">
                  <div className="max-sm:mb-2">
                    <label htmlFor="passengers" className="block text-sm font-medium mb-1 max-sm:text-xs">Passengers</label>
                    <SelectRoot>
                      <SelectTrigger className={cn("w-full max-sm:text-sm")}>
                        <SelectValue placeholder="1 Adult" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Adult</SelectItem>
                        <SelectItem value="2">2 Adults</SelectItem>
                        <SelectItem value="3">3 Adults</SelectItem>
                        <SelectItem value="4">4 Adults</SelectItem>
                      </SelectContent>
                    </SelectRoot>
                  </div>
                  <div className="max-sm:mb-2">
                    <label htmlFor="class" className="block text-sm font-medium mb-1 max-sm:text-xs">Class</label>
                    <SelectRoot>
                      <SelectTrigger className={cn("w-full max-sm:text-sm")}>
                        <SelectValue placeholder="Economy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="economy">Economy</SelectItem>
                        <SelectItem value="premium">Premium Economy</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="first">First Class</SelectItem>
                      </SelectContent>
                    </SelectRoot>
                  </div>
                  <div className="flex items-end max-sm:mt-2">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors max-sm:py-3">
                      <Search className="mr-2 h-4 w-4" /> Search Flights
                    </Button>
                  </div>
                </div>
              </TabsContent>
              {/* Other tabs remain the same */}
            </Tabs>
          </motion.div>
        </section>

        <section className="container mx-auto py-20">
          <h2 className="text-3xl font-bold mb-10 text-center max-sm:text-2xl">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-sm:gap-4">
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
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 max-sm:h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 max-sm:text-xl">{destination.name}</h3>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{destination.continent}</Badge>
                    <span className="text-white font-semibold max-sm:text-sm">{destination.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
