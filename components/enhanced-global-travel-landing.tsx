'use client'

import * as React from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Plane, Hotel, Car, Menu, Globe, Calendar, Users, Search, CreditCard, Headphones, MapPin, ArrowRight, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const destinations = [
  { name: "Tokyo", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80", continent: "Asia", price: "From £799" },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80", continent: "Europe", price: "From £649" },
  { name: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80", continent: "North America", price: "From £499" },
  { name: "Sydney", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80", continent: "Australia", price: "From £999" },
  { name: "Rio de Janeiro", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80", continent: "South America", price: "From £799" },
  { name: "Cape Town", image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80", continent: "Africa", price: "From £899" },
]

const flightDeals = [
  { from: "London", to: "New York", price: "£499", savings: "30%" },
  { from: "Paris", to: "Tokyo", price: "£799", savings: "25%" },
  { from: "Los Angeles", to: "Sydney", price: "£999", savings: "20%" },
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

      <main>
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
                layout="fill"
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
                    <Select id="from">
                      <option>Select origin</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="to" className="block text-sm font-medium mb-1">To</label>
                    <Select id="to">
                      <option>Select destination</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="depart" className="block text-sm font-medium mb-1">Depart</label>
                    <Input type="date" id="depart" />
                  </div>
                  <div>
                    <label htmlFor="return" className="block text-sm font-medium mb-1">Return</label>
                    <Input type="date" id="return" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="passengers" className="block text-sm font-medium mb-1">Passengers</label>
                    <Select id="passengers">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>3 Adults</option>
                      <option>4 Adults</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="class" className="block text-sm font-medium mb-1">Class</label>
                    <Select id="class">
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
                    <Select id="destination">
                      <option>Select destination</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="check-in" className="block text-sm font-medium mb-1">Check-in</label>
                    <Input type="date" id="check-in" />
                  </div>
                  <div>
                    <label htmlFor="check-out" className="block text-sm font-medium mb-1">Check-out</label>
                    <Input type="date" id="check-out" />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-1">Guests</label>
                    <Select id="guests">
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
                    <Select id="pickup">
                      <option>Select location</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="dropoff" className="block text-sm font-medium mb-1">Drop-off Location</label>
                    <Select id="dropoff">
                      <option>Select location</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="pickup-date" className="block text-sm font-medium mb-1">Pick-up Date</label>
                    <Input type="date" id="pickup-date" />
                  </div>
                  <div>
                    <label htmlFor="dropoff-date" className="block text-sm font-medium mb-1">Drop-off Date</label>
                    <Input type="date" id="dropoff-date" />
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

        <section className="container mx-auto px-4 py-20">
          <Card className="bg-gradient-to-r from-blue-800 to-indigo-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4">Exclusive Flight Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {flightDeals.map((deal, index) => (
                  <motion.div
                    key={`${deal.from}-${deal.to}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{deal.from} to {deal.to}</h3>
                    <p className="text-3xl font-bold mb-2">{deal.price}</p>
                    <Badge variant="secondary" className="bg-green-500 text-white">Save {deal.savings}</Badge>
                    <Button className="mt-4 w-full">Book Now</Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Choose OpusTravels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Global Coverage", icon: <Globe className="h-8 w-8" />, description: "Access to flights and destinations worldwide" },
              { title: "24/7 Support", icon: <Headphones className="h-8 w-8" />, description: "Round-the-clock customer service for peace of mind" },
              { title: "Best Price Guarantee", icon: <CreditCard className="h-8 w-8" />, description: "Competitive prices and price matching available" },
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

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I book a flight?</AccordionTrigger>
              <AccordionContent>
                To book a flight, use our search form at the top of the page. Enter your departure and arrival cities, dates, and number of passengers. Click "Search Flights" to view available options and complete your booking.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
              <AccordionContent>
                Our cancellation policy varies depending on the type of ticket you purchase. Generally, you can cancel within 24 hours of booking for a full refund. After that, fees may apply. Check your specific fare rules for details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Do you offer travel insurance?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer travel insurance options to protect your trip. You can add insurance during the booking process or contact our customer support team to add it to an existing reservation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About OpusTravels</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Press Centre</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Booking Information</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 OpusTravels. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="fixed bottom-4 right-4 rounded-full p-4" size="icon">
            <Headphones className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Need Help?</DialogTitle>
            <DialogDescription>
              Our customer support team is here to assist you 24/7. How can we help you today?
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button className="w-full justify-start text-left" variant="outline">
              <MapPin className="mr-2 h-4 w-4" />
              Track my booking
            </Button>
            <Button className="w-full justify-start text-left" variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Change my reservation
            </Button>
            <Button className="w-full justify-start text-left" variant="outline">
              <Users className="mr-2 h-4 w-4" />
              Speak to an agent
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}