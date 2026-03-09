import { Filter } from "lucide-react";
import PlotCard from "../components/PlotCard";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

export default function PlotsPage() {
  usePageMeta({
    title: "Plots",
    description:
      "Browse our selection of premium plots in prime locations across Coimbatore. Find the perfect land for your dream home or investment.",
  });

  const plots = [
    {
      id: "plot-1",
      image: "/assets/generated/plot-1.dim_1200x800.png",
      location: "Saravanampatti, Coimbatore",
      size: "2,400 sq ft",
      price: "\u20b945 Lakhs",
    },
    {
      id: "plot-2",
      image: "/assets/generated/plot-2.dim_1200x800.png",
      location: "Vadavalli, Coimbatore",
      size: "3,000 sq ft",
      price: "\u20b955 Lakhs",
    },
    {
      id: "plot-3",
      image: "/assets/generated/plot-3.dim_1200x800.png",
      location: "Peelamedu, Coimbatore",
      size: "1,800 sq ft",
      price: "\u20b938 Lakhs",
    },
    {
      id: "plot-4",
      image: "/assets/generated/plot-1.dim_1200x800.png",
      location: "Ganapathy, Coimbatore",
      size: "2,200 sq ft",
      price: "\u20b942 Lakhs",
    },
    {
      id: "plot-5",
      image: "/assets/generated/plot-2.dim_1200x800.png",
      location: "Singanallur, Coimbatore",
      size: "2,800 sq ft",
      price: "\u20b950 Lakhs",
    },
    {
      id: "plot-6",
      image: "/assets/generated/plot-3.dim_1200x800.png",
      location: "RS Puram, Coimbatore",
      size: "2,000 sq ft",
      price: "\u20b948 Lakhs",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Available Plots
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium plots in prime locations across Coimbatore
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Placeholder */}
        <ScrollReveal delay={100}>
          <div className="mb-8 p-6 bg-card rounded-xl shadow-elevation-sm border-2 border-dashed border-border">
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter options coming soon</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Plots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plots.map((plot, index) => (
            <ScrollReveal key={plot.id} delay={index * 50}>
              <PlotCard {...plot} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Can't find what you're looking for? Contact us for more options.
            </p>
            <a
              href="tel:9787683497"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105"
            >
              Call Us: 9787683497
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
