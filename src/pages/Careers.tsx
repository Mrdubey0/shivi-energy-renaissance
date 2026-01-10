import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Mail, Shield, Target, GraduationCap, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const [activeTab, setActiveTab] = useState<"freshers" | "experience">("freshers");

  const fresherPositions = [
    {
      title: "Graduate Trainee Engineer",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time",
      experience: "0-1 years",
      description: "Join our graduate program to learn drilling operations, safety protocols, and field execution under expert mentorship."
    },
    {
      title: "Junior Data Analyst",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "0-1 years",
      description: "Start your career analyzing operational data and supporting digital oversight systems with hands-on training."
    }
  ];

  const experiencedPositions = [
    {
      title: "Senior Drilling Engineer",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead drilling operations and optimize wellbore construction processes with focus on execution discipline and risk mitigation."
    },
    {
      title: "AI/ML Solutions Engineer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop digital oversight systems for safety verification and operational anomaly detection."
    },
    {
      title: "Corrosion Management Engineer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement integrity management systems for oil & gas infrastructure."
    },
    {
      title: "HSE & Compliance Specialist",
      department: "Operations",
      location: "Calgary, Canada",
      type: "Full-time",
      experience: "3+ years",
      description: "Maintain regulatory compliance and operational governance across field activities."
    },
    {
      title: "Field Operations Supervisor",
      department: "Operations",
      location: "Midland, TX",
      type: "Full-time",
      experience: "6+ years",
      description: "Oversee field execution with accountability for safety, quality, and on-time delivery."
    }
  ];

  const currentPositions = activeTab === "freshers" ? fresherPositions : experiencedPositions;

  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-6 md:py-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Our Execution Teams
              </h1>
              <p className="text-sm md:text-base text-muted-foreground">
                Build your career with disciplined execution teams. We value accountability, 
                technical expertise, and operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <Card className="text-center p-2 md:p-3">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-primary mx-auto mb-1" />
                <h3 className="text-xs md:text-sm font-semibold">Execution Discipline</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 hidden md:block">
                  Structured protocols for safety and quality.
                </p>
              </Card>
              
              <Card className="text-center p-2 md:p-3">
                <Target className="h-6 w-6 md:h-8 md:w-8 text-secondary mx-auto mb-1" />
                <h3 className="text-xs md:text-sm font-semibold">Accountability</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 hidden md:block">
                  Own execution outcomes with responsibility.
                </p>
              </Card>
              
              <Card className="text-center p-2 md:p-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-accent mx-auto mb-1" />
                <h3 className="text-xs md:text-sm font-semibold">Technical Excellence</h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mt-1 hidden md:block">
                  Field-validated systems and learning.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-4 md:py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Open Positions</h2>
              <p className="text-xs md:text-sm text-muted-foreground mb-3">
                Explore opportunities to contribute to operational excellence
              </p>
              
              {/* Toggle Button */}
              <div className="inline-flex items-center bg-muted rounded-full p-0.5 gap-0.5">
                <Button
                  variant={activeTab === "freshers" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-3 md:px-4 gap-1 text-xs h-7 ${activeTab === "freshers" ? "" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("freshers")}
                >
                  <GraduationCap className="h-3 w-3" />
                  Freshers
                  <Badge variant="secondary" className="ml-1 text-[10px] px-1.5 py-0">
                    {fresherPositions.length}
                  </Badge>
                </Button>
                <Button
                  variant={activeTab === "experience" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-3 md:px-4 gap-1 text-xs h-7 ${activeTab === "experience" ? "" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("experience")}
                >
                  <Briefcase className="h-3 w-3" />
                  Experienced
                  <Badge variant="secondary" className="ml-1 text-[10px] px-1.5 py-0">
                    {experiencedPositions.length}
                  </Badge>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 max-w-4xl mx-auto">
              {currentPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow p-3 md:p-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm md:text-base font-semibold">{position.title}</h3>
                        <div className="flex flex-wrap gap-1 shrink-0">
                          <Badge variant="secondary" className="text-[10px] px-1.5">{position.department}</Badge>
                          <Badge variant="outline" className="text-[10px] px-1.5">{position.type}</Badge>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {position.description}
                      </p>
                      <div className="flex flex-wrap gap-3 text-[10px] md:text-xs text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 p-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-md">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-primary" />
                        <span className="text-xs">
                          <a href="mailto:hr@shiviEnergy.com" className="text-primary hover:underline font-medium">
                            hr@shiviEnergy.com
                          </a>
                        </span>
                      </div>
                      <Button size="sm" asChild className="h-7 text-xs px-3">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Apply Now
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-4 md:py-6">
          <div className="container mx-auto px-4">
            <div className="text-center mb-3">
              <h2 className="text-lg md:text-xl font-bold">What We Offer</h2>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {[
                "Competitive Pay",
                "Health & Safety",
                "Training",
                "Career Growth",
                "Field Experience",
                "Global Projects",
                "Recognition",
                "Work-Life Balance"
              ].map((benefit, index) => (
                <Card key={index} className="text-center p-2">
                  <h3 className="font-medium text-primary text-[10px] md:text-xs">{benefit}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
