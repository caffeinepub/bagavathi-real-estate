import { useEffect, useState } from 'react';

interface HeroParallaxProps {
  imageSrc: string;
  children: React.ReactNode;
}

export default function HeroParallax({ imageSrc, children }: HeroParallaxProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />
        <img
          src={imageSrc}
          alt="Hero background"
          className="w-full h-full object-cover animate-zoom-in"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
