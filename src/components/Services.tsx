import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cog, 
  Shield, 
  Wrench, 
  Drill, 
  Settings, 
  Lock,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Engineering & Field Consultation",
      description: "Expert consultation services for complex engineering challenges in the energy sector with comprehensive field support.",
      features: ["Technical Analysis", "Field Assessment", "Project Planning", "Risk Management"]
    },
    {
      icon: Shield,
      title: "Corrosion Management",
      description: "Advanced corrosion prevention and management solutions to protect your critical industrial equipment and installations.",
      features: ["Corrosion Assessment", "Prevention Strategies", "Monitoring Systems", "Material Selection"]
    },
    {
      icon: Wrench,
      title: "Rigless Intervention",
      description: "Comprehensive rigless intervention services with cutting-edge technology and expert project management capabilities.",
      features: ["Well Intervention", "Equipment Supply", "Project Management", "Technical Support"]
    },
    {
      icon: Drill,
      title: "Downhole Tools",
      description: "Complete range of downhole tools and equipment with exclusive partnerships for rapid deployment and support.",
      features: ["Tool Selection", "Equipment Supply", "Technical Training", "Maintenance Support"]
    },
    {
      icon: Settings,
      title: "Rig Support",
      description: "Comprehensive rig support services ensuring optimal performance and safety in all drilling operations.",
      features: ["Operational Support", "Equipment Maintenance", "Safety Systems", "Performance Optimization"]
    },
    {
      icon: Lock,
      title: "Plug and Abandonment Solution",
      description: "Professional plug and abandonment services ensuring environmental compliance and regulatory adherence.",
      features: ["Well Abandonment", "Environmental Compliance", "Regulatory Support", "Safe Disposal"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Energy
            <span className="text-primary"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver premium solutions across the energy industry with unmatched expertise 
            and cutting-edge technology to meet your most demanding challenges.
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
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Energy Operations?
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Partner with us for comprehensive energy solutions that deliver results. 
              Our expert team is ready to tackle your most complex challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Request Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;