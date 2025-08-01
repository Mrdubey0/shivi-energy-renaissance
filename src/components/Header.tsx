import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import QuoteRequestForm from "./QuoteRequestForm";
import shiviLogo from "@/assets/shivi-energy-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const navigationItems = [
    { 
      name: "Home", 
      href: "/",
      section: "hero"
    },
    { 
      name: "About Us", 
      href: "/",
      section: "about"
    },
    { 
      name: "Services", 
      href: "/",
      section: "services"
    },
    { 
      name: "Products", 
      href: "/products"
    },
    { 
      name: "Projects", 
      href: "/projects" 
    },
    { 
      name: "CO-MBS", 
      href: "/sustainability" 
    },
    { 
      name: "Blog", 
      href: "/blog" 
    },
    { 
      name: "Careers", 
      href: "/careers" 
    }
  ];

  const handleNavClick = (item: any) => {
    if (item.section && window.location.pathname === "/") {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={shiviLogo} 
              alt="SHIVI ENERGY" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.href.startsWith('/') && !item.section ? (
                  <Link
                    to={item.href}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                  </Link>
                ) : item.section ? (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                  </button>
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

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="energy" size="sm" onClick={() => setIsQuoteFormOpen(true)}>
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                item.href.startsWith('/') && !item.section ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : item.section ? (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
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
              <Button variant="energy" size="sm" className="w-fit" onClick={() => setIsQuoteFormOpen(true)}>
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>

      <QuoteRequestForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        cartItems={[]}
        onClearCart={() => {}}
      />
    </header>
  );
};

export default Header;