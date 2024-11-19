import * as React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const Faq: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I book a flight?</AccordionTrigger>
          <AccordionContent>
            To book a flight, use our search form at the top of the page. Enter your departure and arrival cities, dates, and number of passengers. Click &quot;Search Flights&quot; to view available options and complete your booking.
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
  )
}

export default Faq
