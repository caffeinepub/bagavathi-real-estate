import { Link } from '@tanstack/react-router';
import { Building2, MapPin, TrendingUp, Award } from 'lucide-react';
import HeroParallax from '../components/HeroParallax';
import ScrollReveal from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'Home',
    description: 'Bagavathi Real Estate - Trusted Properties in Coimbatore, Tamil Nadu. Find your dream plot or building with us.',
  });

  const features = [
    {
      icon: Building2,
      title: 'Premium Properties',
      description: 'Carefully curated selection of residential and commercial properties',
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategic locations across Coimbatore for maximum value',
    },
    {
      icon: TrendingUp,
      title: 'Investment Growth',
      description: 'Properties with high appreciation potential and returns',
    },
    {
      icon: Award,
      title: 'Trusted Service',
      description: 'Years of experience delivering quality real estate solutions',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroParallax imageSrc="/assets/generated/home-hero-building.dim_1920x1080.png">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-slide-up">
            Welcome to Bagavathi Real Estate
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Trusted Properties in Coimbatore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/plots"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              View Plots
            </Link>
            <Link
              to="/buildings"
              className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
            >
              Explore Buildings
            </Link>
          </div>
        </div>
      </HeroParallax>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Why Choose Bagavathi Real Estate
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Your trusted partner in finding the perfect property in Coimbatore
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-card p-6 rounded-xl shadow-elevation-sm hover:shadow-elevation-md transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center shadow-elevation-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Find Your Dream Property?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Get in touch with us today and let our experienced team help you find the perfect plot or building
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105"
              >
                Contact Us Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
