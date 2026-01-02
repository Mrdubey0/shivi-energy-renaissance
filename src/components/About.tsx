import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Award, 
  Globe, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Shield,
  FileCheck
} from "lucide-react";

const About = () => {
  const stats = [
    { icon: Shield, label: "Incident-Free Hours", value: "2.4M+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Users, label: "Technical Professionals", value: "200+" },
    { icon: Target, label: "On-Time Execution", value: "98.7%" }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "OHSAS 18001 Health & Safety Standards",
    "API Certified Equipment & Services",
    "DNV GL Approved Procedures",
    "NACE Certified Corrosion Specialists",
    "24/7 Technical Support Operations"
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "CEO & Founder",
      company: "Shivi Energy Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "20+ years experience in energy sector operations with focus on execution discipline and operational governance.",
      linkedin: "#",
      email: "rajesh@shivienergy.com"
    },
    {
      name: "Ms. Priya Sharma",
      position: "CTO",
      company: "Shivi Energy Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      bio: "Expert in digital oversight systems and AI applications for safety verification and operational monitoring.",
      linkedin: "#",
      email: "priya@shivienergy.com"
    },
    {
      name: "Mr. Vikram Singh",
      position: "VP Operations",
      company: "Shivi Energy Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "15+ years leading complex field operations with accountability for safety and execution outcomes.",
      linkedin: "#",
      email: "vikram@shivienergy.com"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary">Company & Governance</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Engineering-Led
              <span className="text-primary"> Operational Services</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Shivi Energy Solutions delivers audit-ready field execution across the energy sector. 
              Our governance approach combines technical expertise with structured accountability 
              to ensure measurable outcomes for every operation.
            </p>

            <div className="space-y-4 mb-8">
              {certifications.map((certification, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-foreground">{certification}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                View Governance Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Access Technical Overview
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

            {/* Governance Statement Card */}
            <Card className="p-8 bg-gradient-hero text-primary-foreground">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <FileCheck className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">Governance Commitment</h3>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Every operation is executed within documented protocols with traceable 
                  decision-making, clear accountability, and audit-ready records. 
                  Our LOCA–LOCUS framework ensures measurable outcomes.
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

        {/* Leadership Team Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership & <span className="text-primary">Technical Council</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced leaders with accountability for execution outcomes 
              and operational governance across all service areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24 border-4 border-primary/10">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback className="text-xl font-bold bg-gradient-accent text-accent-foreground">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {leader.name}
                  </CardTitle>
                  <p className="text-primary font-semibold">{leader.position}</p>
                  <p className="text-sm text-muted-foreground">{leader.company}</p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="flex justify-center">
                    <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
