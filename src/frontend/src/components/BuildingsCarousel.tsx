import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Building {
  image: string;
  title: string;
  type: string;
}

interface BuildingsCarouselProps {
  buildings: Building[];
}

export default function BuildingsCarousel({ buildings }: BuildingsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? buildings.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === buildings.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Main Image */}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-elevation-lg group">
        <img
          src={buildings[currentIndex].image}
          alt={buildings[currentIndex].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-3xl font-bold mb-2">{buildings[currentIndex].title}</h3>
          <p className="text-lg text-white/90">{buildings[currentIndex].type}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 text-foreground shadow-elevation-md hover:shadow-elevation-lg transition-all duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="Previous building"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 dark:bg-black/90 text-foreground shadow-elevation-md hover:shadow-elevation-lg transition-all duration-200 hover:scale-110 flex items-center justify-center"
        aria-label="Next building"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {buildings.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to building ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
