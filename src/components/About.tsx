import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Globe, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Users, label: "Expert Professionals", value: "200+" },
    { icon: Target, label: "Success Rate", value: "99%" }
  ];

  const achievements = [
    "ISO 9001:2015 Certified Quality Management",
    "OHSAS 18001 Health & Safety Standards",
    "API Certified Equipment & Services",
    "DNV GL Approved Procedures",
    "NACE Certified Corrosion Specialists",
    "24/7 Global Technical Support"
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">About Shivi Energy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leading the Future of
              <span className="text-primary"> Energy Solutions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Since our establishment, Shivi Energy Solutions has been at the forefront of 
              innovation in the energy industry. We specialize in providing comprehensive 
              solutions that combine cutting-edge technology with deep industry expertise 
              to deliver exceptional results for our clients worldwide.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Stats Side */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Mission Statement Card */}
            <Card className="p-8 bg-gradient-hero text-primary-foreground">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  To provide innovative, reliable, and sustainable energy solutions that 
                  exceed client expectations while maintaining the highest standards of 
                  safety, quality, and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="px-3 py-1">ISO 9001:2015</Badge>
              <Badge variant="secondary" className="px-3 py-1">OHSAS 18001</Badge>
              <Badge variant="secondary" className="px-3 py-1">API Certified</Badge>
              <Badge variant="secondary" className="px-3 py-1">DNV GL</Badge>
              <Badge variant="secondary" className="px-3 py-1">NACE Certified</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;