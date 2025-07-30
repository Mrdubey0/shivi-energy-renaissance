import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { 
      name: "Home", 
      href: "/" 
    },
    { 
      name: "About", 
      href: "#about" 
    },
    { 
      name: "Solutions", 
      href: "#solutions",
      dropdown: [
        { name: "Corrosion Management", href: "#corrosion" },
        { name: "Well Interventions", href: "#interventions" },
        { name: "Plug & Abandonment", href: "#abandonment" },
        { name: "Well Construction", href: "#construction" },
        { name: "Drilling Fluids", href: "#fluids" },
        { name: "AI & Computer Vision", href: "#ai-solutions" }
      ]
    },
    { 
      name: "Products", 
      href: "/products",
      dropdown: [
        { name: "Downhole Tools", href: "/products#downhole-tools" },
        { name: "Drilling Chemicals", href: "/products#drilling-chemicals" },
        { name: "Monitoring Equipment", href: "/products#monitoring-equipment" },
        { name: "AI Devices", href: "/products#ai-devices" }
      ]
    },
    { 
      name: "Sustainability", 
      href: "#sustainability" 
    },
    { 
      name: "Industries", 
      href: "#industries" 
    },
    { 
      name: "Projects", 
      href: "/projects" 
    },
    { 
      name: "Clients", 
      href: "#clients" 
    },
    { 
      name: "Blog", 
      href: "/blog" 
    },
    { 
      name: "Careers", 
      href: "/careers" 
    },
    { 
      name: "Resources", 
      href: "#resources" 
    },
    { 
      name: "Contact", 
      href: "#contact" 
    }
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
                {item.href.startsWith('/') ? (
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
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => 
                        subItem.href.startsWith('/') ? (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ) : (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="energy" size="sm">
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
                item.href.startsWith('/') ? (
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
              <Button variant="energy" size="sm" className="w-fit">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;