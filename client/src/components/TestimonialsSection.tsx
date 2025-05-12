import { useEffect, useRef, useState } from "react";
import { Star, StarHalf, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);
  
  // Calculate how many testimonials to show based on screen size
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Start autoplay
    startAutoplay();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, []);

  const startAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }

    autoplayInterval.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const resetAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    startAutoplay();
  };

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - itemsToShow ? 0 : prevIndex + 1
    );
    
    resetAutoplay();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
    
    resetAutoplay();
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex text-yellow-400 mb-3">
        {Array(Math.floor(rating)).fill(0).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400" />
        ))}
        {rating % 1 === 0.5 && <StarHalf size={16} className="fill-yellow-400" />}
      </div>
    );
  };

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / itemsToShow);
  const currentPage = Math.floor(currentIndex / itemsToShow) + 1;

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
        
        <div className="relative max-w-7xl mx-auto">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[hsla(var(--primary-bg),0.7)] backdrop-blur-sm hover:bg-[hsla(var(--neon-cyan),0.2)] border border-[hsla(var(--neon-cyan),0.3)] text-[hsl(var(--neon-cyan))]"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-[hsla(var(--primary-bg),0.7)] backdrop-blur-sm hover:bg-[hsla(var(--neon-cyan),0.2)] border border-[hsla(var(--neon-cyan),0.3)] text-[hsl(var(--neon-cyan))]"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </Button>
          </div>
          
          {/* Testimonial Cards */}
          <div 
            ref={carouselRef} 
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <div className="testimonial-card m-2 md:m-4 h-full bg-[hsl(var(--secondary-bg))] p-6 md:p-8 rounded-xl border border-gray-800 relative overflow-hidden">
                    {/* Quote Icon */}
                    <div className="absolute -top-2 -right-2">
                      <Quote size={70} className="text-[hsla(var(--neon-cyan),0.1)]" />
                    </div>
                    
                    {/* Rating */}
                    {renderStarRating(testimonial.rating)}
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-300 italic mb-8 relative z-10">
                      "{testimonial.text}"
                    </p>
                    
                    {/* User Info with Profile Image */}
                    <div className="flex items-center mt-auto">
                      <div className="testimonial-image w-12 h-12 rounded-full overflow-hidden border-2 border-[hsla(var(--neon-cyan),0.3)] mr-4 shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                        <img 
                          src={testimonial.profileImage} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-sm text-[hsl(var(--neon-cyan))]">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index * itemsToShow);
                    resetAutoplay();
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === Math.floor(currentIndex / itemsToShow)
                      ? 'w-6 bg-[hsl(var(--neon-cyan))]'
                      : 'bg-gray-600'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
