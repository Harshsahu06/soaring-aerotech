import { Link, useLocation } from "wouter";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { name: "About", href: "/about" },
  { name: "Training", href: "/training" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Industries", href: "/industries" },
  { name: "Innovation Lab", href: "/innovation-lab" },
  { name: "Media", href: "/media" },
  { name: "Blog", href: "/blog" },
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

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  const scrolledNav = isScrolled
    ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
    : "bg-transparent";

  const linkColor = isScrolled
    ? "text-foreground/70 hover:text-primary"
    : "text-white/80 hover:text-white";

  const activeLinkColor = isScrolled ? "text-primary font-semibold" : "text-white font-semibold";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledNav} ${isScrolled ? "py-3" : "py-5"}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group" data-testid="link-home-logo">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L8 8H4l4 4-2 6 6-3 6 3-2-6 4-4h-4L12 2z"/>
              </svg>
            </div>
            <span className={`font-black text-lg tracking-tight transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}>
              SOARING <span className="text-primary">AEROTECH</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${location === link.href ? activeLinkColor : linkColor}`}
                data-testid={`link-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={`text-sm font-medium transition-colors ${location === "/contact" ? activeLinkColor : linkColor}`} data-testid="link-nav-contact">
              Contact
            </Link>
            <Link href="/training">
              <Button size="sm" className="rounded-full px-5 h-9 text-sm font-semibold" data-testid="btn-nav-enroll">
                Enroll Now <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border p-4 shadow-md">
          <div className="flex flex-col gap-1">
            <Link href="/" className={`text-base font-medium p-3 rounded-lg ${location === "/" ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`} data-testid="link-mobile-nav-home">Home</Link>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium p-3 rounded-lg ${location === link.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`}
                data-testid={`link-mobile-nav-${link.name.toLowerCase().replace(" ", "-")}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/contact" className={`text-base font-medium p-3 rounded-lg ${location === "/contact" ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"}`} data-testid="link-mobile-nav-contact">Contact</Link>
            <Link href="/training" className="mt-2">
              <Button className="w-full rounded-lg" data-testid="btn-mobile-enroll">Enroll Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
