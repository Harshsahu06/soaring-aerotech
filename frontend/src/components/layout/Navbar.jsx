import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Media", href: "/media" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const darkPages = ["/", "/contact", "/blog", "/innovation-lab"];
  const isDarkPage = darkPages.includes(location);
  const isLightTheme = isScrolled || !isDarkPage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-border/80 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform active:scale-95"
            data-testid="link-home-logo"
          >
            <img
              src="/logo.png"
              alt="Soaring Aerotech"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 hover:opacity-100 ${
                    isActive
                      ? isLightTheme
                        ? "text-primary font-semibold"
                        : "text-white font-semibold"
                      : isLightTheme
                        ? "text-foreground/80 hover:text-primary"
                        : "text-white/80 hover:text-white"
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
            
            <Link
              href="/contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                location === "/contact"
                  ? isLightTheme
                    ? "text-primary font-semibold"
                    : "text-white font-semibold"
                  : isLightTheme
                    ? "text-foreground/80 hover:text-primary"
                    : "text-white/80 hover:text-white"
              }`}
              data-testid="link-nav-contact"
            >
              Contact
            </Link>

            <Link href="/contact" data-testid="btn-nav-enroll">
              <span
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 active:scale-95 cursor-pointer ${
                  isScrolled
                    ? "bg-primary hover:bg-primary/90 text-white shadow-sm shadow-primary/20"
                    : isDarkPage
                      ? "bg-white hover:bg-white/95 text-foreground hover:shadow-lg hover:shadow-white/10"
                      : "bg-primary hover:bg-primary/90 text-white shadow-sm"
                }`}
              >
                <Phone className="w-3.5 h-3.5" /> Get in touch
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors rounded-lg ${
              isScrolled || !isDarkPage
                ? "text-foreground hover:bg-black/5"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-xl animate-slide-in">
          <div className="container mx-auto px-4 py-5 flex flex-col gap-1.5">
            <Link
              href="/"
              className={`text-base font-medium px-4 py-3 rounded-xl transition-colors ${
                location === "/"
                  ? "text-primary bg-primary/5 font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
              data-testid="link-mobile-nav-home"
            >
              Home
            </Link>
            {links.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-base font-medium px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5 font-semibold"
                      : "text-foreground hover:bg-muted"
                  }`}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`text-base font-medium px-4 py-3 rounded-xl transition-colors ${
                location === "/contact"
                  ? "text-primary bg-primary/5 font-semibold"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              Contact
            </Link>
            <div className="mt-3 pt-4 border-t border-border">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/95 text-white font-semibold py-3.5 rounded-xl text-sm transition-all duration-300"
                data-testid="btn-mobile-enroll"
              >
                <Phone className="w-4 h-4" /> Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
