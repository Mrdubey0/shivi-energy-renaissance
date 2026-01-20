import { Menu, X, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import logoMain from "@/assets/logo-main.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen, isAnimating } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.substring(2); // Remove "/#"
    
    // If we're on the home page, just scroll
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with the hash
      navigate("/" + "#" + sectionId);
      // After navigation, scroll to section
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigationItems = [
    { name: "Home", href: "/", matchPaths: ["/"] },
    { name: "About Us", href: "/#about", matchPaths: [] },
    { name: "Solutions", href: "/solutions", matchPaths: ["/solutions"] },
    { name: "Projects", href: "/projects", matchPaths: ["/projects"] },
    { name: "LOCA-LOCUS", href: "/sustainability", matchPaths: ["/sustainability"] },
    { name: "Blog", href: "/blog", matchPaths: ["/blog"] },
    { name: "Careers", href: "/careers", matchPaths: ["/careers"] }
  ];

  const isActiveRoute = (item: typeof navigationItems[0]) => {
    if (item.href === "/") {
      return location.pathname === "/" && !location.hash;
    }
    if (item.href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === item.href.substring(1);
    }
    return item.matchPaths.some(path => location.pathname === path || location.pathname.startsWith(path + "/"));
  };

  return (
    <header className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-foreground/5' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src={logoMain} 
              alt="SSES - Shivi Energy Solutions" 
              className="h-14 md:h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const isActive = isActiveRoute(item);
              return (
                <div key={item.name} className="relative group">
                  {item.href.startsWith('/#') ? (
                    <a
                      href={item.href}
                      className={`px-4 py-2 transition-colors duration-200 font-medium rounded-lg ${
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                      onClick={(e) => handleHashNavigation(e, item.href)}
                    >
                      {item.name}
                    </a>
                  ) : item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 transition-colors duration-200 font-medium rounded-lg ${
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-4 py-2 transition-colors duration-200 font-medium rounded-lg ${
                        isActive 
                          ? "text-primary bg-primary/10" 
                          : "text-foreground hover:text-primary hover:bg-muted/50"
                      }`}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              );
            })}
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
              {navigationItems.map((item) => {
                const isActive = isActiveRoute(item);
                return item.href.startsWith('/#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleHashNavigation(e, item.href);
                    }}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`transition-colors duration-200 font-medium ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`transition-colors duration-200 font-medium ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
