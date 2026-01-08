import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star,
  Quote,
  ArrowRight,
  Handshake,
  Globe,
  TrendingUp
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Clients = () => {
  const majorClients = [
    {
      name: "Oil & Natural Gas Corporation",
      abbreviation: "ONGC",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      industry: "Oil & Gas",
      partnership: "2018 - Present",
      projects: "25+",
      satisfaction: "98%",
      description: "Leading oil and gas exploration company in India, partnering for offshore platform integrity solutions.",
      testimonial: "Shivi Energy's innovative corrosion management solutions have significantly improved our offshore operations efficiency."
    },
    {
      name: "Reliance Industries Limited",
      abbreviation: "RIL",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=center",
      industry: "Petrochemicals",
      partnership: "2019 - Present",
      projects: "18+",
      satisfaction: "99%",
      description: "India's largest private sector corporation, collaborating on advanced well intervention programs.",
      testimonial: "Their well intervention expertise and CO-MBS approach perfectly align with our sustainability goals."
    },
    {
      name: "Gas Authority of India Limited",
      abbreviation: "GAIL",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
      industry: "Natural Gas",
      partnership: "2020 - Present",
      projects: "12+",
      satisfaction: "97%",
      description: "India's flagship natural gas company, working together on pipeline integrity and P&A operations.",
      testimonial: "Professional execution and environmental compliance exceeded our expectations in every project."
    },
    {
      name: "Indian Oil Corporation",
      abbreviation: "IOC",
      logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=100&h=100&fit=crop&crop=center",
      industry: "Refining",
      partnership: "2017 - Present",
      projects: "20+",
      satisfaction: "96%",
      description: "India's largest commercial enterprise, partnering for refinery corrosion management solutions.",
      testimonial: "Consistent quality delivery and innovative solutions make Shivi Energy our preferred partner."
    },
    {
      name: "Hindustan Petroleum",
      abbreviation: "HPCL",
      logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=100&h=100&fit=crop&crop=center",
      industry: "Oil Marketing",
      partnership: "2019 - Present",
      projects: "15+",
      satisfaction: "98%",
      description: "Major oil marketing company, implementing AI-powered digital twin systems for optimization.",
      testimonial: "Their AI solutions have revolutionized our operational efficiency and predictive maintenance."
    },
    {
      name: "Bharat Petroleum Corporation",
      abbreviation: "BPCL",
      logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=100&h=100&fit=crop&crop=center",
      industry: "Petroleum",
      partnership: "2018 - Present",
      projects: "16+",
      satisfaction: "97%",
      description: "Fortune 500 oil and gas company, collaborating on advanced drilling fluids solutions.",
      testimonial: "Outstanding technical expertise and commitment to sustainable solutions in every engagement."
    }
  ];

  const partnerLogos = [
    { name: "Baker Hughes", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop" },
    { name: "Synergia Energy", logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=120&h=60&fit=crop" },
    { name: "Indian Navy", logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=120&h=60&fit=crop" },
    { name: "Cairn Oil & Gas", logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=120&h=60&fit=crop" },
    { name: "Vedanta Limited", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=120&h=60&fit=crop" },
    { name: "Essar Oil", logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=120&h=60&fit=crop" },
  ];

  const clientStats = [
    { icon: Handshake, label: "Active Partnerships", value: "50+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: TrendingUp, label: "Client Retention Rate", value: "95%" },
    { icon: Star, label: "Average Satisfaction", value: "97%" }
  ];

  return (
    <section id="clients" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-secondary">Our Clients</span>
            </div>
            
            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Trusted <span className="text-primary">Partners</span>
            </h2>
            
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-12 hidden md:block">
              We're proud to partner with leading organizations across the energy sector, 
              delivering sustainable solutions that drive their success and environmental goals.
            </p>

            {/* Client Stats - Desktop */}
            <div className="hidden md:grid grid-cols-4 gap-6 mb-16">
              {clientStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            
            {/* Client Stats - Mobile: Compact */}
            <div className="flex justify-center gap-8 mb-6 md:hidden">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground">Partners</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-primary">97%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile: Horizontal scroll compact cards */}
        <div className="flex gap-3 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory -mx-4 px-4 mb-8">
          {majorClients.map((client, index) => (
            <Card key={index} className="flex-shrink-0 w-40 snap-center">
              <CardHeader className="p-3 pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-muted">
                    <img 
                      src={client.logo} 
                      alt={client.abbreviation}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-bold">{client.abbreviation}</CardTitle>
                    <p className="text-[10px] text-muted-foreground">{client.industry}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <div className="flex justify-between text-center">
                  <div>
                    <div className="text-sm font-bold text-primary">{client.projects}</div>
                    <div className="text-[10px] text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="flex">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    </div>
                    <div className="text-[10px] text-muted-foreground">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {majorClients.map((client, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {client.abbreviation}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{client.industry}</p>
                  </div>
                </div>
                
                <h3 className="text-sm font-medium text-foreground mb-2">{client.name}</h3>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{client.projects}</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-secondary">{client.satisfaction}</div>
                    <div className="text-xs text-muted-foreground">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {client.description}
                </p>

                <div className="bg-muted/50 p-4 rounded-lg mb-4">
                  <Quote className="h-4 w-4 text-primary mb-2" />
                  <p className="text-sm italic text-muted-foreground">
                    "{client.testimonial}"
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Partnership: {client.partnership}</span>
                  <Badge variant="secondary" className="text-xs">
                    Active
                  </Badge>
                </div>
              </CardContent>
            </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Partner Logos */}
        <ScrollReveal>
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Our Strategic Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
              {partnerLogos.map((partner, index) => (
                <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="h-12 w-24 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Clients;