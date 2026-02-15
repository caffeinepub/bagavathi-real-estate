import { MapPin, Maximize2, DollarSign } from 'lucide-react';

interface PlotCardProps {
  image: string;
  location: string;
  size: string;
  price?: string;
}

export default function PlotCard({ image, location, size, price }: PlotCardProps) {
  return (
    <div className="group relative bg-card rounded-lg overflow-hidden shadow-elevation-sm hover:shadow-elevation-md transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`Plot in ${location}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <h3 className="font-semibold text-lg text-card-foreground">{location}</h3>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Maximize2 className="w-4 h-4" />
          <span className="text-sm">{size}</span>
        </div>

        {price && (
          <div className="flex items-center gap-2 text-accent font-semibold">
            <DollarSign className="w-4 h-4" />
            <span>{price}</span>
          </div>
        )}
      </div>
    </div>
  );
}
