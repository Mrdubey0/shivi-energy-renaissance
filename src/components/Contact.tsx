import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Energy Plaza", "Mumbai, Maharashtra 400001", "India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 22 1234 5678", "+91 22 9876 5432", "24/7 Emergency: +91 98765 43210"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@shivienergy.com", "sales@shivienergy.com", "support@shivienergy.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"]
    }
  ];

  return (
    <section id="contact" className="py-12 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-primary">Get In Touch</span>
            </div>
            
            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Contact <span className="text-primary">Us</span>
            </h2>
            
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto hidden md:block">
              Ready to transform your energy operations? Our team of experts is here to help you 
              find the perfect solution for your specific needs.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <ScrollReveal>
            <Card className="p-8">
            <CardHeader className="p-0 pb-6">
              <div className="flex items-center mb-4">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
            
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-1" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@company.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company Ltd." className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Inquiry about energy solutions" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project requirements..."
                    className="mt-1 min-h-[120px] resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
          </ScrollReveal>

          {/* Contact Information */}
          <ScrollReveal delay={200}>
            <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          </ScrollReveal>
        </div>

        {/* Map Section */}
        <ScrollReveal>
          <div className="mt-16">
            <Card className="overflow-hidden">
              <div className="bg-muted h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Office Location</h3>
                  <p className="text-muted-foreground">Interactive map will be integrated here</p>
                </div>
              </div>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;