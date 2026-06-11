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
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navBg = isScrolled
    ? "bg-white border-b border-border shadow-sm"
    : "bg-transparent";

  const linkColor = isScrolled
    ? "text-[#111111] hover:text-foreground"
    : "text-[#111111] hover:text-white";

  const activeLinkColor = isScrolled
    ? "text-[#111111] font-semibold"
    : "text-[#111111] font-semibold";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg} ${isScrolled ? "py-3" : "py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            data-testid="link-home-logo"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L8 8H4l4 4-2 6 6-3 6 3-2-6 4-4h-4L12 2z" />
              </svg>
            </div>
            <div>
              <div
                className={
                  "font-black text-base tracking-tight leading-tight transition-colors text-[#111111]"
                }
              >
                SOARING <span className="text-primary">AEROTECH</span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm  font-medium transition-colors ${location === link.href ? activeLinkColor : linkColor} text-[#111111]`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${location === "/contact" ? activeLinkColor : linkColor}`}
              data-testid="link-nav-contact"
            >
              Contact
            </Link>
            <Link href="/contact" data-testid="btn-nav-enroll">
              <span
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  isScrolled
                    ? "bg-foreground hover:bg-foreground/85 text-white"
                    : "bg-white hover:bg-white/90"
                }`}
              >
                <Phone className="w-3.5 h-3.5" /> Get in touch
              </span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              className={`text-base font-medium px-3 py-2.5 rounded-xl ${location === "/" ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}
              data-testid="link-mobile-nav-home"
            >
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium px-3 py-2.5 rounded-xl ${location === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`text-base font-medium px-3 py-2.5 rounded-xl ${location === "/contact" ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}
            >
              Contact
            </Link>
            <div className="mt-2 pt-3 border-t border-border">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-foreground text-white font-semibold py-3 rounded-xl text-sm"
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
