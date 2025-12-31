import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Eye, 
  ArrowRight,
  Users,
  Target,
  Award,
  AlertTriangle,
  Shield,
  TrendingUp
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ONGC Offshore Platform Integrity Management",
      client: "Oil & Natural Gas Corporation",
      location: "Mumbai High, India",
      duration: "2023 - Ongoing",
      category: "Corrosion Management",
      status: "Active",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
      riskContext: "Progressive corrosion degradation threatening structural integrity of aging offshore assets.",
      intervention: "Deployed cathodic protection with AI-powered monitoring for continuous condition assessment.",
      outcomes: [
        "40% reduction in unplanned maintenance interventions",
        "Zero integrity-related shutdowns since deployment",
        "Extended projected asset life by 8 years"
      ],
      locaInterpretation: "Reduced material replacement frequency and intervention exposure through early detection."
    },
    {
      id: 2,
      title: "Reliance Industries Well Intervention Program",
      client: "Reliance Industries Limited",
      location: "Gujarat, India",
      duration: "2022 - 2023",
      category: "Well Interventions",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      riskContext: "Production decline across multiple wells requiring rapid intervention without rig mobilization.",
      intervention: "Thru-tubing velocity strings and fishing operations executed under rigless protocols.",
      outcomes: [
        "95% first-run success rate across interventions",
        "30% faster completion vs. conventional methods",
        "15% production uplift post-intervention"
      ],
      locaInterpretation: "Avoided rig mobilization exposure and reduced operational footprint per well."
    },
    {
      id: 3,
      title: "Indian Navy Safety Verification System",
      client: "Indian Navy",
      location: "Various Naval Bases",
      duration: "2023 - 2024",
      category: "Digital Oversight",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      riskContext: "Manual PPE compliance monitoring creating gaps in safety verification across facilities.",
      intervention: "Computer vision system deployed for automated safety equipment detection and compliance logging.",
      outcomes: [
        "100% automated compliance verification",
        "50% reduction in safety-related incidents",
        "Real-time alert system for immediate response"
      ],
      locaInterpretation: "Reduced human exposure to verification tasks and improved response time to violations."
    },
    {
      id: 4,
      title: "GAIL Well Abandonment Execution",
      client: "Gas Authority of India Limited",
      location: "Assam, India",
      duration: "2023",
      category: "Plug & Abandonment",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      riskContext: "End-of-life wells requiring decommissioning with verified zonal isolation and regulatory compliance.",
      intervention: "Bridge plug deployment with cement integrity verification and continuous pressure monitoring.",
      outcomes: [
        "100% regulatory compliance achieved",
        "Zero post-abandonment leakage incidents",
        "Completed 20% ahead of projected schedule"
      ],
      locaInterpretation: "Eliminated long-term environmental liability through verified permanent isolation."
    },
    {
      id: 5,
      title: "HP Refinery Digital Oversight Implementation",
      client: "Hindustan Petroleum",
      location: "Multiple Refineries",
      duration: "2023 - Ongoing",
      category: "Digital Oversight",
      status: "Active",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=250&fit=crop",
      riskContext: "Reactive maintenance cycles causing unplanned shutdowns and production losses.",
      intervention: "Integrated sensor network with AI analytics for predictive equipment health assessment.",
      outcomes: [
        "15% improvement in operational efficiency",
        "Predictive maintenance reducing failures by 35%",
        "Real-time optimization of process parameters"
      ],
      locaInterpretation: "Shifted from reactive to predictive operations, reducing failure-driven interventions."
    }
  ];

  const projectStats = [
    { icon: Award, label: "Execution Outcomes", value: "150+" },
    { icon: Shield, label: "Zero-Incident Executions", value: "142" },
    { icon: Target, label: "On-Time Delivery", value: "98.7%" },
    { icon: TrendingUp, label: "Avg. Lifecycle Extension", value: "6+ Years" }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Execution History</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Measured Execution
            <span className="text-primary"> Outcomes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Documented interventions demonstrating risk reduction, lifecycle extension, 
            and operational assurance across diverse field conditions.
          </p>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {projectStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Project Image */}
                  <div className="w-full md:w-48 h-32 flex-shrink-0 relative rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant={project.status === "Active" ? "default" : "secondary"}
                        className="bg-background/90 backdrop-blur-sm text-xs"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <h3 className="text-xl font-bold text-foreground mb-2 md:mb-0">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="bg-background/80 w-fit">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    {/* Execution Framework */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      {/* Risk Context */}
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-semibold text-destructive">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Risk Context
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.riskContext}
                        </p>
                      </div>
                      
                      {/* Intervention */}
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-semibold text-primary">
                          <Shield className="h-4 w-4 mr-2" />
                          Intervention
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.intervention}
                        </p>
                      </div>
                      
                      {/* Measured Outcomes */}
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-semibold text-accent">
                          <Target className="h-4 w-4 mr-2" />
                          Measured Outcomes
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.outcomes.slice(0, 2).map((outcome, index) => (
                            <li key={index} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* LOCA Interpretation */}
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-muted-foreground italic">
                        <span className="font-semibold text-foreground">Lifecycle Assessment: </span>
                        {project.locaInterpretation}
                      </p>
                    </div>
                    
                    <Button variant="outline" className="w-fit hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Eye className="h-4 w-4 mr-2" />
                      View Execution Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button variant="energy" size="lg">
            View All Execution Outcomes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
