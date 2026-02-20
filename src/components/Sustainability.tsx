import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Activity, 
  Target,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  FileCheck,
  Scale,
  Gauge,
  Leaf,
  Users,
  Eye,
  ShieldCheck,
  Ban,
  FileText,
  Clock
} from "lucide-react";

const Sustainability = () => {
  const locaLocusComparison = [
    {
      label: "LOCA",
      subtitle: "Measurement Engine",
      tagline: "Curriculum · Method · Process",
      description: "Long-term Operations & Compliance Assessment. The structured, evidence-based process that collects ESG data, fills in scoresheets, and generates the LOCUS score across all 5 project lifecycle stages.",
      icon: BarChart3,
    },
    {
      label: "LOCUS",
      subtitle: "Unified ESG Score",
      tagline: "Scorecard · Outcome · Result",
      description: "The single number (0–100) that expresses where a project or organisation stands. Broken into 5 pillars. Used in management review, client reporting, and continuous improvement.",
      icon: Gauge,
    }
  ];

  const lifecycleStages = [
    { step: "01", name: "Tender", description: "Business Dev identifies ESG opportunities" },
    { step: "02", name: "Forecast", description: "PM defines LOCA baseline" },
    { step: "03", name: "Execute", description: "Site Lead captures evidence" },
    { step: "04", name: "Close-out", description: "Sustainability Lead calculates LOCUS" },
    { step: "05", name: "Review", description: "Management approves corrective actions" },
  ];

  const qpsiAxis = [
    {
      icon: CheckCircle2,
      code: "Q",
      title: "Quality",
      description: "Process control, product realization, API Q1 procedures. Quality failures are treated as ESG failures."
    },
    {
      icon: Activity,
      code: "P",
      title: "Performance",
      description: "Delivery effectiveness, continual improvement, reduction of rework and inefficiency."
    },
    {
      icon: Shield,
      code: "S",
      title: "Safety",
      description: "Hazard identification, exposure reduction, HSE controls. Any safety incident is an ESG failure."
    },
    {
      icon: Scale,
      code: "I",
      title: "Integrity",
      description: "Ethics, transparency, traceability. Integrity breaches are governance failures that reduce LOCUS."
    }
  ];

  const corePrinciples = [
    {
      icon: ShieldCheck,
      title: "Prevention Over Rectification",
      description: "We design services to stop problems before they happen. Cathodic protection that prevents corrosion is fundamentally superior to replacing a failed pipeline."
    },
    {
      icon: Ban,
      title: "Avoidance Over Compensation",
      description: "We address impacts in order: Avoid first. Minimize second. Control third. Compensatory actions like tree planting cannot substitute for poor operational performance."
    },
    {
      icon: FileText,
      title: "Evidence Over Assertion",
      description: "No ESG claim is unsupported. Every score, every rating, every statement is backed by documented evidence, measurable data, and independent client validation."
    },
    {
      icon: Clock,
      title: "Lifecycle Accountability",
      description: "We consider the full lifespan of assets and decisions. Short-term cost savings that create long-term environmental or safety risks are unacceptable."
    }
  ];

  const locaHighlights = [
    "Captures waste, energy, travel, safety, training, OPE data",
    "Runs across all 5 project lifecycle stages",
    "Requires documented, auditable evidence only",
    "Environmental = 70% of total weight",
    "Triggers corrective action if score < 55"
  ];

  return (
    <section id="assurance" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">ESG & Operational Assurance Framework</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">LOCA</span> runs the assessment.
            <br />
            <span className="text-secondary">LOCUS</span> shows the score.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            One process. One outcome. No gap.
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">The score comes from the work — not from a report.</span>
          </p>
        </div>

        {/* Two Tools, One Score */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Two Tools. One Score.
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              LOCA is how you do the assessment. LOCUS is what you get when you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locaLocusComparison.map((item) => {
              const IconComponent = item.icon;
              return (
                <Card key={item.label} className="relative overflow-hidden border-2 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary" />
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-7 w-7 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-foreground">{item.label}</CardTitle>
                        <span className="text-sm font-semibold text-secondary">{item.subtitle}</span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground tracking-wider uppercase">{item.tagline}</span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* LOCA Key Highlights */}
        <div className="mb-16 md:mb-20">
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <FileCheck className="h-8 w-8" />
              <h3 className="text-2xl font-bold">LOCA at a Glance</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {locaHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Project Lifecycle Integration */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Project Lifecycle Integration
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              LOCA and LOCUS are active at every stage — not just at project close-out.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            {lifecycleStages.map((stage, index) => (
              <div key={stage.step} className="flex-1 relative">
                <Card className="h-full p-5 text-center border-2 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-xs font-bold text-secondary mb-2">{stage.step}</div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{stage.name}</h4>
                  <p className="text-xs text-muted-foreground">{stage.description}</p>
                </Card>
                {index < lifecycleStages.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* QPSI Foundational Axis */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              The Foundational Axis: <span className="text-primary">QPSI</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quality · Performance · Safety · Integrity — embedded across every LOCUS pillar.
              A project cannot score high if it fails on QPSI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {qpsiAxis.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={pillar.code} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-foreground">{pillar.code}</span>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground pr-12">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-8 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground italic">
              "Quality defines how we work. Performance defines how well. Safety defines who we protect. Integrity defines who we are. <span className="text-primary font-semibold not-italic">LOCUS defines where we stand.</span>"
            </p>
          </div>
        </div>

        {/* Core Operating Principles */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Core Operating Principles
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Non-negotiable rules that define Shivi's operational DNA.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {corePrinciples.map((principle) => {
              const IconComponent = principle.icon;
              return (
                <Card key={principle.title} className="p-6 border-l-4 border-l-secondary hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Brand Pillars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 md:mb-20 max-w-6xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-7 w-7" />
              <h4 className="text-xl font-bold">Operational Excellence</h4>
            </div>
            <p className="text-primary-foreground/90 text-sm leading-relaxed mb-4">
              We operate in sectors where failure cascades: environmental damage, safety risk, regulatory exposure, lost trust.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Every decision is documented and traceable</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Processes align with API Q1 &amp; API Q2</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>LOCA measures it — LOCUS makes it visible</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-7 w-7" />
              <h4 className="text-xl font-bold">Operational Assurance</h4>
            </div>
            <p className="text-secondary-foreground/90 text-sm leading-relaxed mb-4">
              Clients need verification, not just confidence. LOCUS makes performance measurable, auditable, and comparable over time.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Signed OPE sheets as independent validation</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Verbal claims are invalid — evidence hierarchy</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>No score without client-signed documentation</span>
              </li>
            </ul>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground">
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="h-7 w-7" />
              <h4 className="text-xl font-bold">ESG as Identity</h4>
            </div>
            <p className="text-accent-foreground/90 text-sm leading-relaxed mb-4">
              LOCA eliminates the traditional separation between 'operations' and 'sustainability'. The LOCUS score is generated FROM operations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>No gap between what we do and what we report</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Score from fuel logs, waste records, safety hours</span>
              </li>
              <li className="flex items-start text-sm gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Sustainability as a quality standard</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Central Message */}
        <div className="mb-16 md:mb-20">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-10 md:p-14 border border-primary/20 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              We don't talk about doing things right.
            </h3>
            <p className="text-xl md:text-2xl font-semibold text-primary">
              We have a system that proves it.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Framework Documentation
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Access detailed LOCA–LOCUS framework documentation and understand 
              how our governance approach supports your operational and ESG requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                Access Framework Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Governance Review
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
