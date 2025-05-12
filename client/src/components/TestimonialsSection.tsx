import { Star, StarHalf } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[hsl(var(--primary-bg))]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-rajdhani mb-6">
            <span className="text-white">What Gamers </span>
            <span className="text-[hsl(var(--neon-cyan))] text-shadow-neon">Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of satisfied gamers who have discovered their favorite titles on our platform
          </p>
        </div>
        
        <div className="testimonial-slider relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[hsl(var(--secondary-bg))] p-6 rounded-xl border border-gray-800">
                <div className="flex text-yellow-400 mb-4">
                  {Array(Math.floor(testimonial.rating)).fill(0).map((_, i) => (
                    <Star key={i} className="fill-yellow-400" />
                  ))}
                  {testimonial.rating % 1 === 0.5 && <StarHalf className="fill-yellow-400" />}
                </div>
                <p className="text-gray-300 italic mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center mr-3`}>
                    <span className={`text-[hsl(var(--neon-${testimonial.accentColor}))] font-bold`}>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
