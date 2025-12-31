import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Scale
} from "lucide-react";

const Sustainability = () => {
  const locaFramework = [
    {
      icon: TrendingDown,
      code: "L",
      title: "Lifecycle Risk Assessment",
      description: "Measuring total operational exposure across the asset lifecycle, not point-in-time snapshots.",
      metrics: [
        "Intervention frequency reduction",
        "Asset life extension measurement",
        "Failure probability tracking",
        "Material intensity per operation"
      ]
    },
    {
      icon: Activity,
      code: "O", 
      title: "Operational Footprint",
      description: "Quantifying the real impact of each operation on resources, exposure time, and environmental interaction.",
      metrics: [
        "Human exposure hours per operation",
        "Equipment utilization efficiency",
        "Resource consumption per outcome",
        "Waste and emission tracking"
      ]
    },
    {
      icon: Target,
      code: "C",
      title: "Continuous Verification", 
      description: "Ongoing measurement and validation ensuring operations remain within defined assurance parameters.",
      metrics: [
        "Real-time compliance monitoring",
        "Deviation detection and response",
        "Performance trend analysis",
        "Audit trail maintenance"
      ]
    },
    {
      icon: Scale,
      code: "A",
      title: "Accountability Governance",
      description: "Clear ownership of outcomes with traceable decision-making and documented execution.",
      metrics: [
        "Decision audit trails",
        "Responsibility mapping",
        "Outcome ownership tracking",
        "Regulatory compliance documentation"
      ]
    }
  ];

  const assuranceMetrics = [
    { metric: "98.7%", label: "On-Time Execution Rate", trend: "stable" },
    { metric: "2.4M+", label: "Incident-Free Hours", trend: "up" },
    { metric: "142", label: "Zero-Incident Projects", trend: "up" },
    { metric: "100%", label: "Regulatory Compliance", trend: "stable" }
  ];

  const locusIndicators = [
    {
      title: "Quality (Q)",
      description: "Execution quality measured against defined technical specifications.",
      status: "Verified"
    },
    {
      title: "Performance (P)",
      description: "Operational performance against projected outcomes and timelines.",
      status: "Tracked"
    },
    {
      title: "Safety (S)",
      description: "Safety record and incident prevention effectiveness.",
      status: "Monitored"
    },
    {
      title: "Integrity (I)",
      description: "Asset and operational integrity across the lifecycle.",
      status: "Assessed"
    }
  ];

  return (
    <section id="assurance" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">ESG & Operational Assurance</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">LOCA</span>–<span className="text-secondary">LOCUS</span>
            <br />
            <span className="text-foreground">Assurance Framework</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              A measurement and governance framework that quantifies operational impact, 
              tracks accountability, and ensures audit-ready execution across all operations.
            </p>
          </div>
        </div>

        {/* LOCA Framework Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LOCA: Lifecycle Operational Assessment
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four-dimensional measurement system for operational assurance
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {locaFramework.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card 
                  key={pillar.title}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
                >
                  {/* Code Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-primary-foreground">{pillar.code}</span>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground mb-2 pr-12">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.metrics.map((metric, idx) => (
                        <li key={idx} className="flex items-start">
                          <BarChart3 className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Assurance Metrics Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Current Assurance Status
            </h3>
            <p className="text-xl text-muted-foreground">
              Real-time operational metrics across active executions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assuranceMetrics.map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {item.metric}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {item.label}
                  </div>
                  <div className={`text-xs font-medium ${item.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`}>
                    {item.trend === 'up' ? '↑ Improving' : '● Stable'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* LOCUS Governance Indicators */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              LOCUS: Unified Governance Outcome
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              QPSI framework linking Quality, Performance, Safety, and Integrity to ESG outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locusIndicators.map((indicator, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-foreground">{indicator.title}</h4>
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      {indicator.status}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Governance Documentation */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center mb-4">
                <FileCheck className="h-8 w-8 mr-3" />
                <CardTitle className="text-2xl font-bold">Assessment Protocol</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-primary-foreground/90 leading-relaxed">
                Every operation is assessed against LOCA criteria before execution. 
                Documented risk context, mitigation protocols, and expected outcomes 
                provide audit-ready execution records.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Pre-execution risk assessment
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Real-time execution monitoring
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Post-execution outcome verification
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground">
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 mr-3" />
                <CardTitle className="text-2xl font-bold">Governance Commitment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-secondary-foreground/90 leading-relaxed">
                LOCUS unifies our QPSI indicators into a single governance framework. 
                ESG outcomes emerge from measured operational excellence, not promotional claims.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Traceable decision-making
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Documented accountability
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Regulatory-ready records
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Assurance Documentation
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
