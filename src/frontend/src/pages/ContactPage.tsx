import { MapPin, Phone, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact Us',
    description: 'Get in touch with Bagavathi Real Estate. Visit us in Coimbatore or contact us via phone or email.',
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Coimbatore, Tamil Nadu',
      link: null,
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '9443899417',
      link: 'tel:9443899417',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'bagavathi885@gmail.com',
      link: 'mailto:bagavathi885@gmail.com',
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're here to help you find your perfect property. Reach out to us today!
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card p-8 rounded-xl shadow-elevation-sm hover:shadow-elevation-md transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-muted-foreground hover:text-primary transition-colors text-lg"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-lg">{info.content}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Map Section */}
        <ScrollReveal delay={300}>
          <div className="bg-card rounded-xl shadow-elevation-sm overflow-hidden animate-fade-in">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Find Us in Coimbatore
              </h2>
            </div>
            <div className="relative w-full h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.5308489841!2d76.79915484999999!3d11.016844399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1645000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Coimbatore Location Map"
                className="animate-fade-in"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal delay={400}>
          <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-xl p-12 text-center shadow-elevation-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Property Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today and let our team guide you to your dream property
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9443899417"
                className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg shadow-elevation-md hover:shadow-elevation-lg transition-all duration-300 hover:scale-105"
              >
                Call Now
              </a>
              <a
                href="mailto:bagavathi885@gmail.com"
                className="inline-block px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Send Email
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
