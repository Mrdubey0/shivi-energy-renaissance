import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Calendar, 
  Eye, 
  Users,
  Target,
  Award,
  AlertTriangle,
  Shield,
  TrendingUp,
  Search,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectDetailPopup from "./ProjectDetailPopup";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { projects, projectCategories, type Project } from "@/data/projects";

const ITEMS_PER_PAGE = 10;

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const contentSectionRef = useRef<HTMLDivElement>(null);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory]);

  const scrollToContent = () => {
    if (contentSectionRef.current) {
      const yOffset = -100;
      const element = contentSectionRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setTimeout(() => scrollToContent(), 100);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    scrollToContent();
  };

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const projectStats = [
    { icon: Award, label: "Execution Outcomes", value: `${projects.length}+` },
    { icon: Shield, label: "Zero-Incident Executions", value: `${projects.filter(p => p.status === "Completed").length}` },
    { icon: Target, label: "On-Time Delivery", value: "98.7%" },
    { icon: TrendingUp, label: "Avg. Lifecycle Extension", value: "6+ Years" }
  ];

  // Filter projects based on search and category
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "all" || project.parentCategory === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const PaginationControls = () => {
    if (totalPages <= 1) return null;
    return (
      <div className="flex items-center justify-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(page)}
            className="min-w-[36px]"
          >
            {page}
          </Button>
        ))}
        <Button
          variant="outline"
          size="sm"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    );
  };

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
            
            {/* Project Stats - Mobile */}
            <div className="flex justify-center gap-6 mb-6 md:hidden">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">{projects.length}+</div>
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
              {/* Search */}
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
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap justify-center border-t border-border pt-3">
                <Badge
                  variant={activeCategory === "all" ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1.5 text-xs transition-colors ${
                    activeCategory === "all" 
                      ? "bg-primary text-primary-foreground" 
                      : "hover:bg-primary/10"
                  }`}
                  onClick={() => handleCategoryChange("all")}
                >
                  All Categories
                </Badge>
                {projectCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer px-3 py-1.5 text-xs transition-colors ${
                      activeCategory === category.id 
                        ? "bg-primary text-primary-foreground" 
                        : "hover:bg-primary/10"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Results count */}
        <div className="text-sm text-muted-foreground mb-4 text-center">
          Showing {startIndex + 1}–{Math.min(endIndex, filteredProjects.length)} of {filteredProjects.length} projects
        </div>

        {/* Projects List */}
        <div className="space-y-4 md:space-y-6" ref={contentSectionRef}>
          {paginatedProjects.length === 0 ? (
            <div className="text-center py-8 md:py-16">
              <p className="text-sm md:text-lg text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          ) : (
            paginatedProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              {/* Mobile: Compact card */}
              <Card 
                className="md:hidden overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => handleViewDetails(project)}
              >
                <CardContent className="p-3">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 flex-shrink-0 relative rounded-lg overflow-hidden">
                      <ImageWithSkeleton 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        skeletonClassName="w-full h-full"
                      />
                      <Badge 
                        variant={project.status === "Active" || project.status === "Ongoing" ? "default" : "secondary"}
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
                        <span className="truncate">{project.location || "India"}</span>
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
                    <ImageWithSkeleton 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge 
                        variant={project.status === "Active" || project.status === "Ongoing" ? "default" : "secondary"}
                        className={`backdrop-blur-sm text-xs ${project.status === "Active" || project.status === "Ongoing" ? "" : "bg-background/90"}`}
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
                        <span>{project.location || "India"}</span>
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
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.riskContext}
                        </p>
                      </div>
                      
                      {/* Intervention */}
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-semibold text-primary">
                          <Shield className="h-4 w-4 mr-2" />
                          Intervention
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.intervention}
                        </p>
                      </div>
                      
                      {/* Outcomes */}
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-semibold text-accent">
                          <Target className="h-4 w-4 mr-2" />
                          Outcomes
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.outcomes}
                        </p>
                      </div>
                    </div>

                    {/* Lifecycle Assessment */}
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-sm text-muted-foreground italic line-clamp-2">
                        <span className="font-semibold text-foreground">Lifecycle Assessment: </span>
                        {project.lifecycleAssessment}
                      </p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-fit bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
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

        {/* Pagination */}
        <PaginationControls />

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
