import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  TrendingUp,
  Search
} from "lucide-react";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectDetailPopup from "./ProjectDetailPopup";

interface Project {
  id: number;
  title: string;
  client: string;
  location: string;
  duration: string;
  category: string;
  status: string;
  image: string;
  riskContext: string;
  intervention: string;
  outcomes: string[];
  locaInterpretation: string;
}

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeYear, setActiveYear] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

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

  // Extract unique years from projects
  const years = ["all", ...new Set(projects.map(p => {
    const yearMatch = p.duration.match(/\d{4}/);
    return yearMatch ? yearMatch[0] : "";
  }).filter(Boolean).sort((a, b) => Number(b) - Number(a)))];

  // Extract unique categories from projects
  const categories = ["all", ...new Set(projects.map(p => p.category))];

  // Filter projects based on search, year, and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = activeYear === "all" || project.duration.includes(activeYear);
    const matchesCategory = activeCategory === "all" || project.category === activeCategory;
    return matchesSearch && matchesYear && matchesCategory;
  });

  return (
    <section id="projects" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
      {/* Background texture pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-primary">Execution History</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Execution <span className="text-primary">Outcomes</span>
            </h2>
            
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-12 hidden md:block">
              Documented interventions demonstrating risk reduction, lifecycle extension, 
              and operational assurance across diverse field conditions.
            </p>

            {/* Project Stats - Desktop */}
            <div className="hidden md:grid grid-cols-4 gap-6 mb-16">
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
            
            {/* Project Stats - Mobile: Compact inline */}
            <div className="flex justify-center gap-6 mb-6 md:hidden">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">150+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">98.7%</div>
                <div className="text-xs text-muted-foreground">On-Time</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Search and Filter Bar */}
        <ScrollReveal delay={100}>
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-4 mb-8 border border-border shadow-lg">
            <div className="flex flex-col gap-4">
              {/* Search and Year Filter Row */}
              <div className="flex flex-col md:flex-row gap-3 items-center">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 h-10 text-sm"
                  />
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  {years.map((year) => (
                    <Button
                      key={year}
                      variant={activeYear === year ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveYear(year)}
                      className="capitalize text-xs"
                    >
                      {year === "all" ? "All Years" : year}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Category Filter Row */}
              <div className="flex gap-2 flex-wrap justify-center border-t border-border pt-3">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1.5 text-xs transition-colors ${
                      activeCategory === category 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category === "all" ? "All Categories" : category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-4 md:space-y-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8 md:py-16">
              <p className="text-sm md:text-lg text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              {/* Mobile: Compact card */}
              <Card 
                className="md:hidden overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleViewDetails(project)}
              >
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 flex-shrink-0 relative rounded-lg overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge 
                        variant={project.status === "Active" ? "default" : "secondary"}
                        className="absolute top-1 left-1 text-[10px] px-1.5 py-0.5"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-foreground line-clamp-2 mb-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="truncate">{project.location}</span>
                      </div>
                      <Badge variant="outline" className="text-[10px] px-1.5 py-0.5">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Desktop: Full card */}
              <Card className="hidden md:block overflow-hidden hover:shadow-lg transition-all duration-300">
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
                          {project.outcomes.slice(0, 2).map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
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
                    
                    <Button 
                      variant="outline" 
                      className="w-fit hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={() => handleViewDetails(project)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View Execution Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            </ScrollReveal>
          ))
          )}
        </div>

        {/* View All Projects CTA */}
        <ScrollReveal>
          <div className="text-center mt-16">
            <Button variant="energy" size="lg">
              View All Execution Outcomes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Project Detail Popup */}
        <ProjectDetailPopup
          project={selectedProject}
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </div>
    </section>
  );
};

export default Projects;
