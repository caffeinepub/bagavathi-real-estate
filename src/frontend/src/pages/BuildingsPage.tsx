import BuildingsCarousel from "../components/BuildingsCarousel";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

export default function BuildingsPage() {
  usePageMeta({
    title: "Buildings",
    description:
      "Explore our portfolio of residential and commercial buildings in Coimbatore. Quality construction and prime locations.",
  });

  const buildings = [
    {
      image: "/assets/generated/building-1.dim_1200x800.png",
      title: "Luxury Residential Complex",
      type: "Residential - 3 & 4 BHK Apartments",
    },
    {
      image: "/assets/generated/building-2.dim_1200x800.png",
      title: "Premium Commercial Tower",
      type: "Commercial - Office Spaces",
    },
    {
      image: "/assets/generated/building-3.dim_1200x800.png",
      title: "Modern Apartment Building",
      type: "Residential - 2 & 3 BHK Flats",
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Buildings
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of residential and commercial properties
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal delay={100}>
          <BuildingsCarousel buildings={buildings} />
        </ScrollReveal>

        {/* Features Grid */}
        <ScrollReveal delay={200}>
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-elevation-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                Premium
              </div>
              <div className="text-muted-foreground">Quality Construction</div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-elevation-sm text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                Strategic
              </div>
              <div className="text-muted-foreground">Prime Locations</div>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-elevation-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">Modern</div>
              <div className="text-muted-foreground">Contemporary Design</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={300}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                Why Choose Our Buildings?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our buildings are designed with modern living in mind,
                  featuring contemporary architecture, quality construction, and
                  premium amenities. Each property is strategically located to
                  provide easy access to schools, hospitals, shopping centers,
                  and major transportation hubs.
                </p>
                <p>
                  Whether you're looking for a residential apartment or
                  commercial office space, our buildings offer the perfect blend
                  of comfort, convenience, and investment value. With attention
                  to detail and commitment to quality, we ensure that every
                  building meets the highest standards.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in any of our buildings? Get in touch for site visits
              and more details.
            </p>
            <a
              href="mailto:bagavathi885@gmail.com"
              className="inline-block px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
