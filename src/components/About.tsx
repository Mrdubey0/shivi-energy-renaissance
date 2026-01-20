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
  FileCheck,
  Eye,
  Rocket
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
        
        {/* Section 1: Mission & Vision */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">Our Purpose</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Mission & <span className="text-primary">Vision</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Vision Card */}
            <ScrollReveal delay={100}>
              <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-primary">
                      Our Vision
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    To be a globally trusted leader in low-carbon energy solutions, enabling the 
                    energy industry's transition toward a sustainable future through innovation, 
                    operational excellence, and measurable reduction in carbon footprint.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal delay={200}>
              <Card className="h-full border-2 border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-card hover:-translate-y-1 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold text-secondary">
                      Our Mission
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg italic font-medium">
                    "Reducing carbon. Enhancing efficiency. Transforming energy operations."
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mt-4">
                    We are committed to delivering innovative, value-driven technical solutions 
                    for both conventional and emerging energy sectors while maintaining the 
                    highest standards of operational excellence.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>

        {/* Section 2: Leadership Team */}
        <div className="mb-16 md:mb-24">
          <ScrollReveal>
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <span className="text-sm font-medium text-secondary">Our Team</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                Leadership <span className="text-primary">Team</span>
              </h3>
              <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto hidden md:block">
                Experienced leaders with accountability for execution outcomes 
                and operational governance across all service areas.
              </p>
            </div>
          </ScrollReveal>

          {/* Mobile: Horizontal scroll cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory -mx-4 px-4">
            {leadership.map((leader, index) => (
              <Card key={index} className="flex-shrink-0 w-64 snap-center">
                <CardHeader className="text-center pb-2 pt-4">
                  <div className="flex justify-center mb-2">
                    <Avatar className="w-16 h-16 border-2 border-primary/10">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback className="text-lg font-bold bg-gradient-accent text-accent-foreground">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-base font-bold text-foreground">
                    {leader.name}
                  </CardTitle>
                  <p className="text-primary font-medium text-sm">{leader.position}</p>
                </CardHeader>
                <CardContent className="text-center pt-0 pb-4">
                  <Button variant="outline" size="sm" className="text-xs">
                    <Linkedin className="h-3 w-3 mr-1" />
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Desktop: Grid layout */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full">
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
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Section 3: Engineering-Led Operational Services */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <ScrollReveal>
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

              {/* Certifications - Show only 3 on mobile */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {certifications.slice(0, 3).map((certification, index) => (
                  <div key={index} className="flex items-center md:hidden">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground text-sm">{certification}</span>
                  </div>
                ))}
                {certifications.map((certification, index) => (
                  <div key={index} className="hidden md:flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground">{certification}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button variant="default" size="default" className="md:size-lg text-sm md:text-base">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="default" className="hidden md:flex md:size-lg">
                  Access Technical Overview
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Stats Side */}
          <ScrollReveal delay={200}>
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

              {/* Governance Statement Card - Compact on mobile */}
              <Card className="p-4 md:p-8 bg-gradient-hero text-primary-foreground">
                <CardContent className="p-0">
                  <div className="flex items-center mb-2 md:mb-4">
                    <FileCheck className="h-5 w-5 md:h-6 md:w-6 mr-2" />
                    <h3 className="text-lg md:text-2xl font-bold">Governance Commitment</h3>
                  </div>
                  <p className="text-primary-foreground/90 leading-relaxed text-sm md:text-base hidden md:block">
                    Every operation is executed within documented protocols with traceable 
                    decision-making, clear accountability, and audit-ready records. 
                    Our LOCA–LOCUS framework ensures measurable outcomes.
                  </p>
                  <p className="text-primary-foreground/90 text-sm md:hidden">
                    Audit-ready execution with traceable accountability.
                  </p>
                </CardContent>
              </Card>

              {/* Certifications - Fewer on mobile */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-2 py-1 text-xs md:px-3 md:text-sm">ISO 9001</Badge>
                <Badge variant="secondary" className="px-2 py-1 text-xs md:px-3 md:text-sm">API Certified</Badge>
                <Badge variant="secondary" className="px-2 py-1 text-xs md:px-3 md:text-sm hidden md:inline-flex">OHSAS 18001</Badge>
                <Badge variant="secondary" className="px-2 py-1 text-xs md:px-3 md:text-sm hidden md:inline-flex">DNV GL</Badge>
                <Badge variant="secondary" className="px-2 py-1 text-xs md:px-3 md:text-sm">NACE</Badge>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
