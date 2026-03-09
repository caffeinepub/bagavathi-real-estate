import { Heart } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier =
    typeof window !== "undefined"
      ? window.location.hostname
      : "rishi-real-estate";

  const socialLinks = [
    { icon: SiFacebook, href: "#", label: "Facebook" },
    { icon: SiInstagram, href: "#", label: "Instagram" },
    { icon: SiX, href: "#", label: "X (Twitter)" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="mt-auto border-t bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Rishi Real Estate
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Attribution */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent fill-accent" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
