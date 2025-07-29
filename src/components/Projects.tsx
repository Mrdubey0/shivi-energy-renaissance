import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Wrench, 
  Droplets, 
  Eye, 
  ArrowRight,
  Users,
  Target,
  Award
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ONGC Offshore Platform Corrosion Management",
      client: "Oil & Natural Gas Corporation",
      location: "Mumbai High, India",
      duration: "2023 - Ongoing",
      category: "Corrosion Management",
      status: "Active",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=250&fit=crop",
      description: "Comprehensive corrosion monitoring and mitigation solutions for offshore drilling platforms, implementing advanced cathodic protection systems.",
      coMbsFeatures: ["Carbon-neutral monitoring", "Predictive maintenance", "Extended asset life"],
      results: ["40% reduction in maintenance downtime", "25% cost savings", "Zero environmental incidents"],
      technologies: ["AI-powered monitoring", "Cathodic protection", "Coating systems"]
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
      description: "Advanced well intervention services including velocity strings and fishing operations for enhanced oil recovery across multiple wells.",
      coMbsFeatures: ["Minimize by Design operations", "Reduced emissions", "Circular materials"],
      results: ["95% operation success rate", "30% faster completion", "15% production increase"],
      technologies: ["Velocity strings", "Fishing tools", "Thru-tubing solutions"]
    },
    {
      id: 3,
      title: "Indian Navy AI-Powered PPE Monitoring",
      client: "Indian Navy",
      location: "Various Naval Bases",
      duration: "2023 - 2024",
      category: "AI & Computer Vision",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=250&fit=crop",
      description: "Implementation of AI-powered PPE compliance monitoring system across naval facilities to enhance safety protocols.",
      coMbsFeatures: ["Digital twin systems", "Real-time analytics", "Sustainable monitoring"],
      results: ["100% compliance tracking", "50% reduction in incidents", "Real-time safety alerts"],
      technologies: ["Computer Vision", "AI Analytics", "IoT sensors"]
    },
    {
      id: 4,
      title: "GAIL Plug & Abandonment Operations",
      client: "Gas Authority of India Limited",
      location: "Assam, India",
      duration: "2023",
      category: "Plug & Abandonment",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=250&fit=crop",
      description: "Environmental-compliant well decommissioning with advanced bridge plug technologies ensuring complete zonal isolation.",
      coMbsFeatures: ["Balance the Cycle approach", "Environmental restoration", "Responsible decommissioning"],
      results: ["100% environmental compliance", "Zero leakage incidents", "Faster completion time"],
      technologies: ["Bridge plugs", "Cement systems", "Environmental monitoring"]
    },
    {
      id: 5,
      title: "Bharat Petroleum Drilling Fluids Optimization",
      client: "Bharat Petroleum Corporation",
      location: "Rajasthan, India",
      duration: "2022 - 2023",
      category: "Drilling Fluids",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop",
      description: "Advanced drilling fluids engineering with eco-friendly formulations and loss circulation materials for challenging formations.",
      coMbsFeatures: ["Eco-friendly fluids", "Circular systems", "Reduced waste"],
      results: ["20% faster drilling", "30% waste reduction", "Improved wellbore stability"],
      technologies: ["Bio-based fluids", "LCM systems", "Solids control"]
    },
    {
      id: 6,
      title: "HP Digital Twin Implementation",
      client: "Hindustan Petroleum",
      location: "Multiple Refineries",
      duration: "2023 - Ongoing",
      category: "AI & Computer Vision",
      status: "Active",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=400&h=250&fit=crop",
      description: "Development of digital twin systems for refinery operations optimization using AI and IoT integration.",
      coMbsFeatures: ["Systemize the Future", "Closed-loop efficiency", "Predictive systems"],
      results: ["15% efficiency improvement", "Predictive maintenance", "Real-time optimization"],
      technologies: ["Digital twins", "IoT integration", "AI optimization"]
    }
  ];

  const projectStats = [
    { icon: Award, label: "Successful Projects", value: "150+" },
    { icon: Users, label: "Satisfied Clients", value: "50+" },
    { icon: Target, label: "On-Time Delivery", value: "98%" },
    { icon: Calendar, label: "Years Experience", value: "15+" }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Our Projects</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Delivering Excellence Across
            <span className="text-primary"> Industries</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            From offshore platforms to onshore facilities, our projects showcase innovation, 
            sustainability, and technical excellence aligned with our CO-MBS philosophy.
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className="bg-background/90 backdrop-blur-sm"
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {project.client}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {project.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* CO-MBS Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">CO-MBS Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.coMbsFeatures.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center">
                        <Target className="h-3 w-3 mr-2 text-primary flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Project Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <Button variant="energy" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;