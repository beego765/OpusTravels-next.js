import * as React from 'react'
import { Menu, Globe } from 'lucide-react'
import { Button } from '../ui/button'
import { Popover } from '../ui/popover'
import { PopoverContent } from '../ui/popover'
import { PopoverTrigger } from '../ui/popover'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
      <div className="flex items-center space-x-2">
        <Globe className="h-8 w-8 text-blue-400" />
        <span className="text-2xl font-bold">OpusTravels</span>
      </div>
      <nav className="hidden lg:flex space-x-6">
        {['Destinations', 'Flights', 'Hotels', 'Deals', 'About'].map((item) => (
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
            {['Destinations', 'Flights', 'Hotels', 'Deals', 'About'].map((item) => (
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
  )
}

export default Header
