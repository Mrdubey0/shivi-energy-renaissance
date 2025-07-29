import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const services = [
    "Engineering Consultation",
    "Corrosion Management", 
    "Rigless Intervention",
    "Downhole Tools",
    "Rig Support",
    "Plug & Abandonment"
  ];

  const company = [
    "About Us",
    "Our Team", 
    "Careers",
    "News & Updates",
    "Case Studies",
    "Certifications"
  ];

  const support = [
    "Contact Support",
    "Technical Documentation",
    "Training Programs",
    "Safety Guidelines",
    "Quality Assurance",
    "Emergency Services"
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
              Premium solutions provider for Energy Industry with expertise ranging from 
              Drilling, Thru Tubing, Well Services, Capillary Technology, Rigless Intervention, 
              Plug & Abandonment and Corrosion Management.
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
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
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
            <h3 className="text-lg font-semibold mb-6">Support</h3>
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

        {/* Newsletter */}
        <Separator className="my-12 bg-primary-foreground/20" />
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest industry insights, project updates, 
            and technological innovations in the energy sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button variant="secondary" className="px-6">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
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
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;