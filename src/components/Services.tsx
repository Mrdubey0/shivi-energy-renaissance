import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cog, 
  Shield, 
  Wrench, 
  Drill, 
  Settings, 
  Lock,
  ArrowRight,
  AlertTriangle,
  Activity,
  TrendingUp
} from "lucide-react";
import { useState } from "react";
import QuoteRequestForm from "./QuoteRequestForm";

const Services = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const services = [
    {
      icon: Cog,
      title: "Engineering & Field Consultation",
      riskAddressed: "Unmitigated design flaws leading to operational failures and unplanned interventions.",
      mitigationProtocol: "Field-validated engineering assessments with lifecycle risk modeling.",
      digitalOversight: "Real-time monitoring dashboards with early anomaly detection.",
      lifecycleImpact: "Reduced repeat interventions and extended asset operational life."
    },
    {
      icon: Shield,
      title: "Corrosion Management",
      riskAddressed: "Integrity degradation causing equipment failure, leaks, and environmental exposure.",
      mitigationProtocol: "Cathodic protection systems with continuous condition monitoring.",
      digitalOversight: "AI-powered corrosion rate prediction and automated alert systems.",
      lifecycleImpact: "40% reduction in unplanned maintenance and extended equipment lifespan."
    },
    {
      icon: Wrench,
      title: "Rigless Intervention",
      riskAddressed: "Well production decline and mechanical obstructions requiring costly rig mobilization.",
      mitigationProtocol: "Thru-tubing solutions with precision fishing and milling operations.",
      digitalOversight: "Downhole sensor integration for real-time intervention verification.",
      lifecycleImpact: "Reduced rig dependency and minimized well downtime exposure."
    },
    {
      icon: Drill,
      title: "Mills & Bits Solutions",
      riskAddressed: "Wellbore obstructions, cement, and debris preventing operational access.",
      mitigationProtocol: "Application-specific milling geometry for defined operational envelopes.",
      digitalOversight: "Torque and weight-on-bit monitoring for optimized cutting performance.",
      lifecycleImpact: "Improved first-run success rates and reduced intervention cycles."
    },
    {
      icon: Settings,
      title: "Rig Support",
      riskAddressed: "Equipment failures and operational inefficiencies causing drilling delays.",
      mitigationProtocol: "Preventive maintenance protocols with rapid equipment deployment.",
      digitalOversight: "Equipment health monitoring with predictive failure analytics.",
      lifecycleImpact: "Optimized rig performance with reduced non-productive time."
    },
    {
      icon: Lock,
      title: "Plug & Abandonment",
      riskAddressed: "Environmental liability from improper well decommissioning and zonal isolation failure.",
      mitigationProtocol: "Bridge plug systems with verified cement integrity and regulatory compliance.",
      digitalOversight: "Pressure monitoring and seal verification throughout abandonment process.",
      lifecycleImpact: "Zero-leakage assurance with complete regulatory documentation."
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Operational Execution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Execution Systems for
            <span className="text-primary"> Risk Reduction</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Field-validated protocols designed to prevent failure, reduce exposure, 
            and deliver measurable lifecycle impact across your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Risk Addressed */}
                  <div className="space-y-1">
                    <div className="flex items-center text-sm font-semibold text-destructive">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Risk Addressed
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {service.riskAddressed}
                    </p>
                  </div>

                  {/* Mitigation Protocol */}
                  <div className="space-y-1">
                    <div className="flex items-center text-sm font-semibold text-primary">
                      <Shield className="h-4 w-4 mr-2" />
                      Mitigation Protocol
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {service.mitigationProtocol}
                    </p>
                  </div>

                  {/* Digital Oversight */}
                  <div className="space-y-1">
                    <div className="flex items-center text-sm font-semibold text-secondary">
                      <Activity className="h-4 w-4 mr-2" />
                      Digital Oversight
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {service.digitalOversight}
                    </p>
                  </div>

                  {/* Lifecycle Impact */}
                  <div className="space-y-1">
                    <div className="flex items-center text-sm font-semibold text-accent">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Lifecycle Impact
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">
                      {service.lifecycleImpact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Operational Review?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Engage with our technical team to evaluate your operational requirements 
              and identify execution pathways that reduce risk and improve asset integrity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => setIsQuoteFormOpen(true)}
              >
                Technical Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                View Execution History
              </Button>
            </div>
          </div>
        </div>
      </div>

      <QuoteRequestForm 
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        cartItems={[]}
        onClearCart={() => {}}
      />
    </section>
  );
};

export default Services;
