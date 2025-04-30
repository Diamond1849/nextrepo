"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const brands = [
  {
    name: "Valvoline",
    image: "https://www.automaster.com.ni/wp-content/uploads/2022/09/valvolinefamilia.webp",
    logo: "https://www.akr-performance.es/assets/www.akr-performance.live/img/brands/valvoline.png",
  },
  {
    name: "Honda",
    image: "https://images.pexels.com/photos/7553370/pexels-photo-7553370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    logo: "https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "BMW",
    image: "https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    logo: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Mercedes-Benz",
    image: "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    logo: "https://images.pexels.com/photos/10636340/pexels-photo-10636340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const CarouselChambs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % brands.length);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? brands.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, goToNext]);

  return (
    <div className="relative w-full overflow-hidden h-[300px] md:h-[400px]">
      {/* Carousel Content */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {brands.map((brand, index) => (
          <div key={index} className="min-w-full h-full relative">
            <div 
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${brand.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
              <div className="w-24 h-24 mb-4 relative overflow-hidden rounded-full bg-white">
                <div 
                  className="w-full h-full bg-center bg-contain bg-no-repeat p-2"
                  style={{ backgroundImage: `url(${brand.logo})` }}
                ></div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{brand.name}</h3>
              <p className="text-lg max-w-md text-center px-4">
                Repuestos originales y alternativos de alta calidad
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {brands.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              currentIndex === index
                ? "bg-red-600 w-8"
                : "bg-white/70 hover:bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselChambs;