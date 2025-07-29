import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Recycle, 
  Zap, 
  Target,
  TrendingDown,
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const Sustainability = () => {
  const pillars = [
    {
      icon: Target,
      letter: "M",
      title: "Minimize by Design",
      description: "We design out carbon from the beginning through material choice, energy efficiency, and system design.",
      quote: "Every gram of CO₂ saved upstream is a gigaton saved downstream.",
      features: [
        "Material optimization and selection",
        "Energy-efficient system design", 
        "Lifecycle carbon assessment",
        "Preventive maintenance solutions"
      ]
    },
    {
      icon: Recycle,
      letter: "B", 
      title: "Balance the Cycle",
      description: "Our commitment to carbon that returns, not accumulates, through durability, circularity, and regeneration.",
      quote: "If we borrow from nature, we return the value.",
      features: [
        "Circular economy principles",
        "Durable solution design",
        "Waste reduction strategies",
        "Resource regeneration"
      ]
    },
    {
      icon: Zap,
      letter: "S",
      title: "Systemize the Future", 
      description: "We build closed-loop systems where energy, materials, and decisions are linked across lifecycles.",
      quote: "Carbon efficiency must be systemic, not situational.",
      features: [
        "Integrated system design",
        "Cross-industry collaboration",
        "Automated optimization",
        "Scalable solutions"
      ]
    }
  ];

  const achievements = [
    { metric: "500+ Tonnes", label: "CO₂ Emissions Reduced" },
    { metric: "15+", label: "Digital Retrofits Completed" },
    { metric: "1M+ Liters", label: "Water Conservation" },
    { metric: "99%", label: "Waste Circularity Rate" }
  ];

  const taglines = [
    "Carbon and Oxide Must Be Sustainable.",
    "Less Carbon, by Design.",
    "Build Systems. Not Waste.",
    "Emission is Permission — Only If It Restores.",
    "Sustainability is Not a Department. It's Our Default."
  ];

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
            <Leaf className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">CO-MBS Philosophy</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-green-600">CO-MBS</span>: Carbon and Oxide
            <br />
            <span className="text-primary">Must Be Sustainable</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <blockquote className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-green-500 pl-6">
              "Everything we create enters the atmosphere — in substance or in spirit. 
              If it adds carbon, it must justify its existence. If it consumes, it must restore. 
              If it emits, it must transform. Carbon and oxide must be sustainable — 
              not because it's fashionable, but because it's fundamental to survival."
            </blockquote>
            <p className="text-lg text-green-600 font-semibold mt-4">
              The air we share is the future we build.
            </p>
          </div>
        </div>

        {/* MBS Framework */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              MBS: Must Be Sustainable Framework
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our three-pillar approach to creating a sustainable energy future
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card 
                  key={pillar.title}
                  className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-green-500/30"
                >
                  {/* Pillar Letter */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{pillar.letter}</span>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground mb-2">
                      {pillar.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {pillar.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <blockquote className="text-green-700 dark:text-green-300 font-medium italic mb-6 pl-4 border-l-2 border-green-500">
                      {pillar.quote}
                    </blockquote>

                    <ul className="space-y-3">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Measurable Impact
            </h3>
            <p className="text-xl text-muted-foreground">
              Quantifiable results from implementing CO-MBS principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {achievement.metric}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {achievement.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tagline Suite */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Guiding Principles
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {taglines.map((tagline, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-green-500/10 text-green-700 dark:text-green-300 border-green-500/20 hover:bg-green-500/20 transition-colors"
              >
                {tagline}
              </Badge>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-green-50 leading-relaxed text-lg">
                To deliver innovative, sustainable energy solutions that exceed client expectations 
                while maintaining the highest standards of environmental responsibility through our 
                CO-MBS philosophy.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-3xl font-bold">2030 Vision</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-blue-50 leading-relaxed text-lg">
                To achieve carbon-neutral field services and become the global leader in 
                sustainable energy operations, guided by our commitment that every solution 
                must pass the CO-MBS test.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-green-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Build a Sustainable Future?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to implement CO-MBS principles in your energy operations. 
              Every project is an opportunity to restore our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-green-600 hover:bg-green-700">
                Schedule Sustainability Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Download CO-MBS Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;