import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Mail, Shield, Target, GraduationCap, Briefcase, NotebookPen, IndianRupee, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fresherPositions, experiencedPositions, type CareerPosition } from "@/data/careers";

const ITEMS_PER_PAGE = 10;

const PaginationControls = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (p: number) => void }) => {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <Button key={page} variant={page === currentPage ? "default" : "outline"} size="sm" onClick={() => onPageChange(page)} className="min-w-[36px]">
          {page}
        </Button>
      ))}
      <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

const PositionCard = ({ position }: { position: CareerPosition }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2 md:pb-4">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
          <div className="flex-1">
            <CardTitle className="text-base md:text-lg">{position.title}</CardTitle>
            <CardDescription className="text-sm mt-1">{position.description}</CardDescription>
          </div>
          <div className="flex flex-wrap gap-1.5 md:flex-shrink-0">
            <Badge variant="secondary" className="text-xs">{position.department}</Badge>
            <Badge variant="outline" className="text-xs">{position.type}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-3 text-xs md:text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <MapPin className="h-3 w-3 md:h-4 md:w-4" />
            {position.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 md:h-4 md:w-4" />
            {position.experience}
          </div>
          <div className="flex items-center gap-1">
            <IndianRupee className="h-3 w-3 md:h-4 md:w-4" />
            <span className="text-primary font-medium">{position.stipend}</span>
          </div>
        </div>

        {/* Requirements toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:underline font-medium mb-3 flex items-center gap-1"
        >
          <CheckCircle2 className="h-3 w-3" />
          {expanded ? "Hide Requirements" : "View Requirements"}
        </button>

        {expanded && (
          <div className="mb-3 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs font-semibold text-foreground mb-2">Key Requirements:</p>
            <ul className="space-y-1">
              {position.keyRequirements.map((req, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span className="font-medium text-sm">Ready to Apply?</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Send resume to{" "}
                <a href={`mailto:${position.applicationLink}`} className="text-primary hover:underline font-medium">
                  {position.applicationLink}
                </a>
              </p>
            </div>
            <Button size="sm" asChild className="w-full sm:w-auto">
              <a href={`mailto:${position.applicationLink}?subject=Application for ${position.title}`}>
                Apply Now
                <Mail className="ml-2 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState<"freshers" | "experience">("freshers");
  const [currentPage, setCurrentPage] = useState(1);

  const currentPositions = activeTab === "freshers" ? fresherPositions : experiencedPositions;
  const totalPages = Math.ceil(currentPositions.length / ITEMS_PER_PAGE);
  const paginatedPositions = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return currentPositions.slice(start, start + ITEMS_PER_PAGE);
  }, [currentPositions, currentPage]);

  useEffect(() => setCurrentPage(1), [activeTab]);

  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <SEO
        title="Careers"
        description="Join Shivi Energy Solutions — explore engineering, technology, and operations roles. Build your career with disciplined execution teams in the energy sector."
        canonical="/careers"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ])}
      />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary border border-primary-glow/30 backdrop-blur-sm mb-6">
                <NotebookPen className="h-4 w-4 mr-2 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground">Shape Your Future</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Join Our Execution Teams
              </h1>
              <p className="text-xl text-muted-foreground">
                Build your career with disciplined execution teams. We value accountability, 
                technical expertise, and operational excellence.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 pt-12 md:pt-12">What We Are Looking For</h2>
        </div>

        {/* Company Values */}
        <section className="py-2 md:py-2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="text-center p-4">
                <CardHeader className="pb-2 pt-2">
                  <Shield className="h-8 w-8 md:h-10 md:w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-base md:text-lg">Execution Discipline</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-muted-foreground">Work within structured protocols that prioritize safety and quality.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader className="pb-2 pt-2">
                  <Target className="h-8 w-8 md:h-10 md:w-10 text-secondary mx-auto mb-2" />
                  <CardTitle className="text-base md:text-lg">Accountability</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-muted-foreground">Take ownership of execution outcomes with clear responsibility.</p>
                </CardContent>
              </Card>
              <Card className="text-center p-4">
                <CardHeader className="pb-2 pt-2">
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-accent mx-auto mb-2" />
                  <CardTitle className="text-base md:text-lg">Technical Excellence</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 pb-2">
                  <p className="text-sm text-muted-foreground">Develop expertise with field-validated systems and learning.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-10 md:py-14 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Open Positions</h2>
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Explore opportunities to contribute to operational excellence
              </p>

              {/* Toggle Button */}
              <div className="inline-flex items-center bg-muted rounded-full p-1 gap-1">
                <Button
                  variant={activeTab === "freshers" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-3 md:px-6 gap-1 md:gap-2 text-xs md:text-sm ${activeTab === "freshers" ? "" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("freshers")}
                >
                  <GraduationCap className="h-3 w-3 md:h-4 md:w-4" />
                  Freshers
                  <Badge variant="secondary" className="ml-1 text-xs">{fresherPositions.length}</Badge>
                </Button>
                <Button
                  variant={activeTab === "experience" ? "default" : "ghost"}
                  size="sm"
                  className={`rounded-full px-3 md:px-6 gap-1 md:gap-2 text-xs md:text-sm ${activeTab === "experience" ? "" : "text-muted-foreground"}`}
                  onClick={() => setActiveTab("experience")}
                >
                  <Briefcase className="h-3 w-3 md:h-4 md:w-4" />
                  Experienced
                  <Badge variant="secondary" className="ml-1 text-xs">{experiencedPositions.length}</Badge>
                </Button>
              </div>
            </div>

            {/* Count display */}
            <p className="text-center text-sm text-muted-foreground mb-4">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1}–{Math.min(currentPage * ITEMS_PER_PAGE, currentPositions.length)} of {currentPositions.length} positions
            </p>

            <div className="grid gap-4 max-w-4xl mx-auto">
              {paginatedPositions.map((position) => (
                <PositionCard key={position.id} position={position} />
              ))}
            </div>

            <PaginationControls currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </section>

        {/* Benefits */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">What We Offer</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                <Card key={index} className="text-center p-3 md:p-4">
                  <h3 className="font-semibold text-primary text-xs md:text-sm">{benefit}</h3>
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
