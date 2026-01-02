import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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
  TrendingUp,
  CheckCircle
} from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Engineering & Field Consultation",
    shortDescription: "Field-validated engineering assessments with lifecycle risk modeling.",
    riskAddressed: "Unmitigated design flaws leading to operational failures and unplanned interventions.",
    mitigationProtocol: "Field-validated engineering assessments with lifecycle risk modeling.",
    digitalOversight: "Real-time monitoring dashboards with early anomaly detection.",
    lifecycleImpact: "Reduced repeat interventions and extended asset operational life.",
    features: [
      "Comprehensive well integrity assessment",
      "Formation evaluation and modeling",
      "Equipment compatibility analysis",
      "Risk mitigation strategy development",
      "Regulatory compliance verification"
    ]
  },
  {
    icon: Shield,
    title: "Corrosion Management",
    shortDescription: "Cathodic protection systems with continuous condition monitoring.",
    riskAddressed: "Integrity degradation causing equipment failure, leaks, and environmental exposure.",
    mitigationProtocol: "Cathodic protection systems with continuous condition monitoring.",
    digitalOversight: "AI-powered corrosion rate prediction and automated alert systems.",
    lifecycleImpact: "40% reduction in unplanned maintenance and extended equipment lifespan.",
    features: [
      "Cathodic protection design and installation",
      "Corrosion rate monitoring systems",
      "Protective coating specification",
      "Chemical treatment programs",
      "Integrity data management"
    ]
  },
  {
    icon: Wrench,
    title: "Rigless Intervention",
    shortDescription: "Thru-tubing solutions with precision fishing and milling operations.",
    riskAddressed: "Well production decline and mechanical obstructions requiring costly rig mobilization.",
    mitigationProtocol: "Thru-tubing solutions with precision fishing and milling operations.",
    digitalOversight: "Downhole sensor integration for real-time intervention verification.",
    lifecycleImpact: "Reduced rig dependency and minimized well downtime exposure.",
    features: [
      "Slickline and wireline services",
      "Coiled tubing operations",
      "Well stimulation treatments",
      "Fishing and recovery services",
      "Scale and wax removal"
    ]
  },
  {
    icon: Drill,
    title: "Mills & Bits Solutions",
    shortDescription: "Application-specific milling geometry for defined operational envelopes.",
    riskAddressed: "Wellbore obstructions, cement, and debris preventing operational access.",
    mitigationProtocol: "Application-specific milling geometry for defined operational envelopes.",
    digitalOversight: "Torque and weight-on-bit monitoring for optimized cutting performance.",
    lifecycleImpact: "Improved first-run success rates and reduced intervention cycles.",
    features: [
      "Section milling systems",
      "Casing exit windows",
      "Cement and bridge plug milling",
      "Junk milling and fishing",
      "Pilot mills and dress mills"
    ]
  },
  {
    icon: Settings,
    title: "Rig Support",
    shortDescription: "Preventive maintenance protocols with rapid equipment deployment.",
    riskAddressed: "Equipment failures and operational inefficiencies causing drilling delays.",
    mitigationProtocol: "Preventive maintenance protocols with rapid equipment deployment.",
    digitalOversight: "Equipment health monitoring with predictive failure analytics.",
    lifecycleImpact: "Optimized rig performance with reduced non-productive time.",
    features: [
      "24/7 technical support",
      "Equipment rental and supply",
      "Crew training and competency",
      "Logistics coordination",
      "Emergency response services"
    ]
  },
  {
    icon: Lock,
    title: "Plug & Abandonment",
    shortDescription: "Bridge plug systems with verified cement integrity and regulatory compliance.",
    riskAddressed: "Environmental liability from improper well decommissioning and zonal isolation failure.",
    mitigationProtocol: "Bridge plug systems with verified cement integrity and regulatory compliance.",
    digitalOversight: "Pressure monitoring and seal verification throughout abandonment process.",
    lifecycleImpact: "Zero-leakage assurance with complete regulatory documentation.",
    features: [
      "Well kill and secure operations",
      "Casing and tubing recovery",
      "Cement plug placement",
      "Barrier verification testing",
      "Environmental compliance documentation"
    ]
  }
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background animate-zoom-in">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-sm font-medium text-primary">Operational Execution</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Execution Systems for
                <span className="text-primary"> Risk Reduction</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Field-validated protocols designed to prevent failure, reduce exposure, 
                and deliver measurable lifecycle impact across your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Dialog key={service.title}>
                    <DialogTrigger asChild>
                      <Card 
                        className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30 cursor-pointer"
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
                          <p className="text-muted-foreground">
                            {service.shortDescription}
                          </p>
                          <Button variant="ghost" className="group-hover:bg-primary group-hover:text-primary-foreground p-0 h-auto">
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                          <IconComponent className="h-8 w-8 text-accent-foreground" />
                        </div>
                        <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                        <DialogDescription className="text-base">
                          {service.shortDescription}
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-4">
                        {/* Risk Addressed */}
                        <div className="p-4 bg-destructive/10 rounded-lg">
                          <div className="flex items-center text-sm font-semibold text-destructive mb-2">
                            <AlertTriangle className="h-4 w-4 mr-2" />
                            Risk Addressed
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.riskAddressed}
                          </p>
                        </div>

                        {/* Mitigation Protocol */}
                        <div className="p-4 bg-primary/10 rounded-lg">
                          <div className="flex items-center text-sm font-semibold text-primary mb-2">
                            <Shield className="h-4 w-4 mr-2" />
                            Mitigation Protocol
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.mitigationProtocol}
                          </p>
                        </div>

                        {/* Digital Oversight */}
                        <div className="p-4 bg-secondary/10 rounded-lg">
                          <div className="flex items-center text-sm font-semibold text-secondary mb-2">
                            <Activity className="h-4 w-4 mr-2" />
                            Digital Oversight
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.digitalOversight}
                          </p>
                        </div>

                        {/* Lifecycle Impact */}
                        <div className="p-4 bg-accent/10 rounded-lg">
                          <div className="flex items-center text-sm font-semibold text-accent mb-2">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            Lifecycle Impact
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {service.lifecycleImpact}
                          </p>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold mb-3">Key Capabilities</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Operational Review?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Engage with our technical team to evaluate your operational requirements 
                and identify execution pathways that reduce risk and improve asset integrity.
              </p>
              <Button variant="secondary" size="lg">
                Technical Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
