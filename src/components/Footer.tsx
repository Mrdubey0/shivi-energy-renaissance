import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook
} from "lucide-react";

const Footer = () => {
  const services = [
    "Engineering Consultation",
    "Corrosion Management", 
    "Rigless Intervention",
    "Mills & Bits",
    "Rig Support",
    "Plug & Abandonment"
  ];

  const company = [
    "About Us",
    "Leadership Team", 
    "Careers",
    "Execution Outcomes",
    "Certifications",
    "Governance"
  ];

  const support = [
    "Technical Documentation",
    "Safety Guidelines",
    "Quality Assurance",
    "Training Programs",
    "Emergency Services",
    "Contact Support"
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold mb-4">
              <span className="text-primary-foreground">SHIVI</span>{" "}
              <span className="text-secondary">ENERGY</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Engineering-led operational services company delivering audit-ready field 
              execution across Drilling, Well Services, Capillary Technology, Rigless 
              Intervention, Plug & Abandonment, and Corrosion Management.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-secondary" />
                <span>info@shivienergy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-secondary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-secondary" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-12 w-12">
                <Linkedin className="h-7 w-7" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-12 w-12">
                <Twitter className="h-7 w-7" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10 h-12 w-12">
                <Facebook className="h-7 w-7" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Technical Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {item}
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
