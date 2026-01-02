import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users,
  Target,
  AlertTriangle,
  Shield,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

export const projectsData = [
  {
    id: 1,
    slug: "ongc-offshore-platform-integrity",
    title: "ONGC Offshore Platform Integrity Management",
    client: "Oil & Natural Gas Corporation",
    location: "Mumbai High, India",
    duration: "2023 - Ongoing",
    category: "Corrosion Management",
    status: "Active",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&h=400&fit=crop",
    riskContext: "Progressive corrosion degradation threatening structural integrity of aging offshore assets.",
    intervention: "Deployed cathodic protection with AI-powered monitoring for continuous condition assessment.",
    outcomes: [
      "40% reduction in unplanned maintenance interventions",
      "Zero integrity-related shutdowns since deployment",
      "Extended projected asset life by 8 years"
    ],
    locaInterpretation: "Reduced material replacement frequency and intervention exposure through early detection.",
    fullDescription: "This comprehensive integrity management program addresses the challenges of maintaining aging offshore infrastructure in the demanding Mumbai High environment. The project combines advanced cathodic protection systems with AI-powered monitoring to provide continuous visibility into corrosion progression.",
    technicalDetails: [
      "Impressed current cathodic protection system covering 12 platform legs",
      "32 continuous monitoring points with wireless data transmission",
      "AI analytics platform processing 50,000+ data points daily",
      "Predictive modeling accuracy exceeding 95%"
    ],
    teamSize: 45,
    technologies: ["Cathodic Protection", "AI Analytics", "Wireless Monitoring", "Predictive Maintenance"]
  },
  {
    id: 2,
    slug: "reliance-well-intervention",
    title: "Reliance Industries Well Intervention Program",
    client: "Reliance Industries Limited",
    location: "Gujarat, India",
    duration: "2022 - 2023",
    category: "Well Interventions",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    riskContext: "Production decline across multiple wells requiring rapid intervention without rig mobilization.",
    intervention: "Thru-tubing velocity strings and fishing operations executed under rigless protocols.",
    outcomes: [
      "95% first-run success rate across interventions",
      "30% faster completion vs. conventional methods",
      "15% production uplift post-intervention"
    ],
    locaInterpretation: "Avoided rig mobilization exposure and reduced operational footprint per well.",
    fullDescription: "A multi-well intervention campaign designed to restore production across mature assets without the cost and environmental impact of rig mobilization. The program utilized advanced thru-tubing techniques to address production decline issues efficiently.",
    technicalDetails: [
      "18 wells completed over 14-month campaign",
      "Velocity string installations in high-liquid wells",
      "Successful fishing operations in 6 wells",
      "Zero HSE incidents throughout program"
    ],
    teamSize: 28,
    technologies: ["Coiled Tubing", "Velocity Strings", "Fishing Tools", "Downhole Video"]
  },
  {
    id: 3,
    slug: "indian-navy-safety-verification",
    title: "Indian Navy Safety Verification System",
    client: "Indian Navy",
    location: "Various Naval Bases",
    duration: "2023 - 2024",
    category: "Digital Oversight",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop",
    riskContext: "Manual PPE compliance monitoring creating gaps in safety verification across facilities.",
    intervention: "Computer vision system deployed for automated safety equipment detection and compliance logging.",
    outcomes: [
      "100% automated compliance verification",
      "50% reduction in safety-related incidents",
      "Real-time alert system for immediate response"
    ],
    locaInterpretation: "Reduced human exposure to verification tasks and improved response time to violations.",
    fullDescription: "An innovative application of computer vision technology to address safety compliance challenges across multiple naval facilities. The system provides continuous, automated monitoring of personnel protective equipment usage.",
    technicalDetails: [
      "AI model trained on 50,000+ annotated images",
      "Detection accuracy exceeding 99%",
      "Real-time processing at 30 fps per camera",
      "Integration with existing security infrastructure"
    ],
    teamSize: 15,
    technologies: ["Computer Vision", "AI/ML", "Edge Computing", "Cloud Analytics"]
  }
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px]">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          
          <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
            <ScrollReveal>
              <Button variant="ghost" asChild className="mb-6">
                <Link to="/projects"><ArrowLeft className="h-4 w-4 mr-2" />Back to Projects</Link>
              </Button>
              <Badge className={project.status === "Active" ? "bg-green-500" : "bg-secondary"}>{project.status}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <span className="flex items-center"><Users className="h-4 w-4 mr-2" />{project.client}</span>
                <span className="flex items-center"><MapPin className="h-4 w-4 mr-2" />{project.location}</span>
                <span className="flex items-center"><Calendar className="h-4 w-4 mr-2" />{project.duration}</span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <ScrollReveal className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>
                
                <Card className="bg-destructive/10 border-destructive/20">
                  <CardContent className="p-6">
                    <div className="flex items-center text-destructive font-semibold mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />Risk Context
                    </div>
                    <p className="text-muted-foreground">{project.riskContext}</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-primary/10 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Shield className="h-5 w-5 mr-2" />Intervention
                    </div>
                    <p className="text-muted-foreground">{project.intervention}</p>
                  </CardContent>
                </Card>
                
                <div>
                  <div className="flex items-center text-accent font-semibold mb-4">
                    <Target className="h-5 w-5 mr-2" />Measured Outcomes
                  </div>
                  <ul className="space-y-2">
                    {project.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start"><CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />{outcome}</li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Team Size</h4>
                      <p className="text-muted-foreground">{project.teamSize} professionals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">LOCA Interpretation</h4>
                      <p className="text-sm text-muted-foreground italic">{project.locaInterpretation}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
