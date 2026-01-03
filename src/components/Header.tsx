import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "CO-MBS", href: "/sustainability" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
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

          {/* Cart Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[1.25rem] h-5 text-xs px-1">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Menu Button and Cart */}
          <div className="lg:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[1.25rem] h-5 text-xs px-1">
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
