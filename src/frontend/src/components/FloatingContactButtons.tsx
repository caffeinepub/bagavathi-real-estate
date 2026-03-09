import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContactButtons() {
  const whatsappNumber = "9443899417";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elevation-lg hover:shadow-elevation-md transition-all duration-300 hover:scale-110 group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-elevation-lg hover:shadow-elevation-md transition-all duration-300 hover:scale-110 group"
        aria-label="Go to contact page"
      >
        <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </Link>
    </div>
  );
}
