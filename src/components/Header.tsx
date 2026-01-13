import { Menu, X, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen, isAnimating } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Projects", href: "/projects" },
    { name: "CO-MBS", href: "/sustainability" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ];

  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-foreground/5' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              <span className="text-primary">SHIVI</span>{" "}
              <span className="text-secondary">ENERGY</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href.startsWith('/#') ? (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50"
                    onClick={(e) => {
                      e.preventDefault();
                      const sectionId = item.href.substring(2);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Inquiries Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              className={`relative flex items-center gap-2 border-blue-500 transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}
              onClick={() => setIsCartOpen(true)}
            >
              <ClipboardList className={`h-5 w-5 transition-transform duration-300 ${isAnimating ? 'rotate-12' : ''}`} />
              <span className="font-medium">Inquiries</span>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white min-w-[1.25rem] h-5 text-xs px-1 animate-scale-in">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button and Inquiries */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={`relative transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}
              onClick={() => setIsCartOpen(true)}
            >
              <ClipboardList className={`h-5 w-5 transition-transform duration-300 ${isAnimating ? 'rotate-12' : ''}`} />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white min-w-[1.25rem] h-5 text-xs px-1 animate-scale-in">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const sectionId = item.href.substring(2);
                      const section = document.getElementById(sectionId);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
