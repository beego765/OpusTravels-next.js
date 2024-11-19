import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const flightDeals = [
  { from: 'London', to: 'New York', price: '£499', savings: '30%' },
  { from: 'Paris', to: 'Tokyo', price: '£799', savings: '25%' },
  { from: 'Los Angeles', to: 'Sydney', price: '£999', savings: '20%' },
]

const FlightDeals: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <Card className="bg-gradient-to-r from-blue-800 to-indigo-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-4">Exclusive Flight Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {flightDeals.map((deal) => (
              <div
                key={`${deal.from}-${deal.to}`}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{deal.from} to {deal.to}</h3>
                <p className="text-3xl font-bold mb-2">{deal.price}</p>
                <Badge variant="secondary" className="bg-green-500 text-white">Save {deal.savings}</Badge>
                <Button className="mt-4 w-full">Book Now</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default FlightDeals
