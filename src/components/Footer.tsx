import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoMain from "@/assets/logo-main.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      const sectionId = href.substring(2);
      
      if (location.pathname === "/") {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate("/" + "#" + sectionId);
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const services = [
    { name: "Engineering Consultation", href: "/solutions" },
    { name: "Corrosion Management", href: "/solutions" },
    { name: "Rigless Intervention", href: "/solutions" },
    { name: "Mills & Bits", href: "/solutions" },
    { name: "Rig Support", href: "/solutions" },
    { name: "Plug & Abandonment", href: "/solutions" }
  ];

  const company = [
    { name: "About Us", href: "/#about" },
    { name: "Leadership Team", href: "/#about" },
    { name: "Careers", href: "/careers" },
    { name: "Execution Outcomes", href: "/projects" },
    { name: "Certifications", href: "/#about" },
    { name: "Governance", href: "/#about" }
  ];

  const support = [
    { name: "Technical Documentation", href: "/solutions" },
    { name: "Safety Guidelines", href: "/sustainability" },
    { name: "Quality Assurance", href: "/#about" },
    { name: "Training Programs", href: "/careers" },
    { name: "Emergency Services", href: "/#contact" },
    { name: "Contact Support", href: "/#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-3 md:mb-4">
              <img 
                src={logoMain} 
                alt="SSES - Shivi Energy Solutions" 
                className="h-12 md:h-16 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed text-xs md:text-base hidden md:block">
              Engineering-led operational services company delivering audit-ready field 
              execution across Drilling, Well Services, Capillary Technology, Rigless 
              Intervention, Plug & Abandonment, and Corrosion Management.
            </p>
            <p className="text-primary-foreground/80 mb-4 text-xs md:hidden">
              Engineering-led operational services for the energy sector.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
              <div className="flex items-center text-xs md:text-base">
                <Mail className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary" />
                <span>info@shivienergy.com</span>
              </div>
              <div className="flex items-center text-xs md:text-base">
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-secondary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="hidden md:flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-2 md:space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-8 w-8 md:h-12 md:w-12">
                <Linkedin className="h-4 w-4 md:h-7 md:w-7" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-8 w-8 md:h-12 md:w-12">
                <Twitter className="h-4 w-4 md:h-7 md:w-7" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-8 w-8 md:h-12 md:w-12">
                <Facebook className="h-4 w-4 md:h-7 md:w-7" />
              </Button>
            </div>
          </div>

          {/* Services - Hidden on mobile */}
          <div className="hidden md:block">
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    onClick={(e) => handleHashNavigation(e, service.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 cursor-pointer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company - Compact on mobile */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {company.slice(0, 4).map((item) => (
                <li key={`mobile-${item.name}`} className="md:hidden">
                  <a 
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-xs cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {company.map((item) => (
                <li key={`desktop-${item.name}`} className="hidden md:block">
                  <a 
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Compact on mobile */}
          <div>
            <h3 className="text-sm md:text-lg font-semibold mb-3 md:mb-6">Support</h3>
            <ul className="space-y-2 md:space-y-3">
              {support.slice(0, 4).map((item) => (
                <li key={`mobile-${item.name}`} className="md:hidden">
                  <a 
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 text-xs cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {support.map((item) => (
                <li key={`desktop-${item.name}`} className="hidden md:block">
                  <a 
                    href={item.href}
                    onClick={(e) => handleHashNavigation(e, item.href)}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200 cursor-pointer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Shivi Energy Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;