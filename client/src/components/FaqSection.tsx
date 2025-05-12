import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-[hsl(var(--secondary-bg))]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6">
            <span className="text-white">Frequently Asked </span>
            <span className="text-[hsl(var(--neon-magenta))] text-shadow-magenta">Questions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about our service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[hsl(var(--primary-bg))] hover:bg-gray-800 rounded-xl border border-gray-800 px-0"
              >
                <AccordionTrigger className="px-5 text-lg font-medium font-rajdhani hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-gray-800 rounded-b-xl px-5 pb-5 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
