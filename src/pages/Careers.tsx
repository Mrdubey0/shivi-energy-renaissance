import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Mail } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Drilling Engineer",
      department: "Engineering",
      location: "Houston, TX",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead drilling operations and optimize wellbore construction processes using advanced CO-MBS methodologies."
    },
    {
      title: "AI/ML Solutions Architect",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop cutting-edge AI solutions for downhole monitoring and predictive maintenance systems."
    },
    {
      title: "Corrosion Management Specialist",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement corrosion prevention strategies for oil & gas infrastructure."
    },
    {
      title: "Well Intervention Technician",
      department: "Operations",
      location: "Aberdeen, UK",
      type: "Full-time",
      experience: "2+ years",
      description: "Execute well intervention operations and maintain downhole equipment using CO-MBS protocols."
    },
    {
      title: "Sustainability Consultant",
      department: "ESG",
      location: "Calgary, Canada",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop sustainable practices and environmental compliance strategies for energy operations."
    },
    {
      title: "Field Operations Manager",
      department: "Operations",
      location: "Midland, TX",
      type: "Full-time",
      experience: "6+ years",
      description: "Oversee field operations and ensure safety compliance across multiple drilling sites."
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
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of the energy revolution. Build the future of sustainable oil & gas operations with CO-MBS technology.
              </p>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>Innovation First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work with cutting-edge CO-MBS technology and shape the future of energy operations.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <CardTitle>Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Make a difference worldwide with sustainable solutions for the energy industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                  <CardTitle>Work-Life Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Enjoy flexible work arrangements and comprehensive benefits package.
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
                Explore opportunities to grow your career with us
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
              <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Competitive Salary",
                "Health Insurance",
                "Flexible Hours",
                "Remote Options",
                "Training Programs",
                "Career Growth",
                "Innovation Time",
                "Global Projects"
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