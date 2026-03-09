import { Eye, Shield, Target, Users } from "lucide-react";
import AnimatedDivider from "../components/AnimatedDivider";
import ScrollReveal from "../components/ScrollReveal";
import { usePageMeta } from "../hooks/usePageMeta";

export default function AboutPage() {
  usePageMeta({
    title: "Rishi Real Estate",
    description:
      "Learn about Rishi Real Estate - our mission, vision, and commitment to providing trusted real estate services in Coimbatore.",
    exactTitle: true,
  });

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Rishi Real Estate
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building trust through quality real estate services in Coimbatore
            </p>
          </div>
        </ScrollReveal>

        <AnimatedDivider />

        {/* Company Introduction */}
        <ScrollReveal delay={100}>
          <section className="mb-16">
            <div className="bg-card rounded-xl p-8 shadow-elevation-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Rishi Real Estate is a trusted name in the Coimbatore property
                  market, dedicated to helping individuals and families find
                  their perfect plots and buildings. With years of experience
                  and deep local knowledge, we have established ourselves as a
                  reliable partner in real estate transactions.
                </p>
                <p>
                  Our team understands that buying property is one of the most
                  important decisions in life. That's why we are committed to
                  providing transparent, honest, and professional service to
                  every client. From residential plots to commercial buildings,
                  we offer a carefully curated selection of properties that meet
                  the highest standards of quality and value.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <AnimatedDivider />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal delay={200}>
            <div className="bg-card rounded-xl p-8 shadow-elevation-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional real estate services that exceed client
                expectations, offering premium properties at fair prices while
                maintaining the highest standards of integrity and
                professionalism. We strive to make property ownership accessible
                and rewarding for everyone.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-card rounded-xl p-8 shadow-elevation-sm h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted and preferred real estate partner in
                Coimbatore, known for our commitment to quality, transparency,
                and customer satisfaction. We envision a future where every
                client finds their dream property with confidence and peace of
                mind.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <AnimatedDivider />

        {/* Trust & Experience */}
        <ScrollReveal delay={400}>
          <section>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold">Trust & Experience</h2>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Our reputation is built on years of successful transactions
                  and satisfied clients. We understand the local market
                  dynamics, legal requirements, and investment potential of
                  every property we represent. This expertise allows us to guide
                  our clients through every step of the buying process with
                  confidence.
                </p>
                <p>
                  At Rishi Real Estate, trust is not just a word—it's our
                  foundation. We believe in building long-term relationships
                  with our clients, many of whom return to us for their future
                  property needs and refer their friends and family. This trust
                  is earned through consistent delivery of quality service,
                  honest communication, and unwavering commitment to our
                  clients' best interests.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Properties Sold
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      10+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
