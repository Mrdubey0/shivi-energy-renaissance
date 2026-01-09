import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Calendar, 
  Users, 
  AlertTriangle, 
  Shield, 
  Target,
  ExternalLink,
  X
} from "lucide-react";

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

interface ProjectDetailPopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailPopup = ({ project, isOpen, onClose }: ProjectDetailPopupProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0">
        {/* Hero Image */}
        <div className="relative h-48 md:h-64 w-full">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge 
              variant={project.status === "Active" ? "default" : "secondary"}
              className="text-sm"
            >
              {project.status}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-background/80 hover:bg-background"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-6 pt-0 -mt-12 relative z-10">
          <DialogHeader className="mb-4">
            <div className="flex items-start justify-between gap-4">
              <DialogTitle className="text-xl md:text-2xl font-bold text-foreground text-left">
                {project.title}
              </DialogTitle>
              <Badge variant="outline" className="flex-shrink-0">
                {project.category}
              </Badge>
            </div>
          </DialogHeader>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
              <Users className="w-4 h-4 text-primary" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-3">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{project.duration}</span>
            </div>
          </div>

          {/* Execution Framework */}
          <div className="space-y-4 mb-6">
            {/* Risk Context */}
            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
              <div className="flex items-center text-sm font-semibold text-destructive mb-2">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Risk Context
              </div>
              <p className="text-sm text-muted-foreground">
                {project.riskContext}
              </p>
            </div>

            {/* Intervention */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <div className="flex items-center text-sm font-semibold text-primary mb-2">
                <Shield className="h-4 w-4 mr-2" />
                Intervention
              </div>
              <p className="text-sm text-muted-foreground">
                {project.intervention}
              </p>
            </div>

            {/* Measured Outcomes */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
              <div className="flex items-center text-sm font-semibold text-accent mb-2">
                <Target className="h-4 w-4 mr-2" />
                Measured Outcomes
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                {project.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-1.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* LOCA Interpretation */}
          <div className="bg-muted rounded-lg p-4 mb-6">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Lifecycle Assessment: </span>
              {project.locaInterpretation}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Close
            </Button>
            <Button variant="default" className="flex-1">
              <ExternalLink className="h-4 w-4 mr-2" />
              Request Case Study
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailPopup;
