import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Mail, Shield, Target } from "lucide-react";

const Careers = () => {
  const openPositions = [
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
      title: "Well Intervention Technician",
      department: "Operations",
      location: "Aberdeen, UK",
      type: "Full-time",
      experience: "2+ years",
      description: "Execute well intervention operations with accountability for safety and execution quality."
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Our Execution Teams
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Build your career with disciplined execution teams. We value accountability, 
                technical expertise, and operational excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Execution Discipline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work within structured protocols that prioritize safety, quality, and measurable outcomes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Accountability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Take ownership of execution outcomes with clear responsibility and governance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Technical Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Develop expertise with field-validated systems and continuous learning opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground">
                Explore opportunities to contribute to operational excellence
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          {position.description}
                        </CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">{position.department}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.experience}
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                      <div className="flex items-center gap-2 text-primary">
                        <Mail className="h-4 w-4" />
                        <span className="font-medium">Ready to Apply?</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Send your resume to{" "}
                        <a 
                          href="mailto:hr@shiviEnergy.com" 
                          className="text-primary hover:underline font-medium"
                        >
                          hr@shiviEnergy.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Competitive Compensation",
                "Health & Safety Programs",
                "Technical Training",
                "Career Development",
                "Field Experience",
                "Global Projects",
                "Performance Recognition",
                "Work-Life Integration"
              ].map((benefit, index) => (
                <Card key={index} className="text-center p-6">
                  <h3 className="font-semibold text-primary">{benefit}</h3>
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
