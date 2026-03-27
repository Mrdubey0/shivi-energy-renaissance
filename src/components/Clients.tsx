import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Quote,
  Shield,
  Users,
  Radio,
  HardHat,
  Award,
  CheckCircle,
  MapPin
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Clients = () => {
  const clients = [
    {
      abbreviation: "HPCL",
      name: "Hindustan Petroleum Corporation Limited",
      sector: "Oil & Gas PSU | Pan-India",
      visits: 55,
      rating: 4.78,
      featured: false,
      params: {
        personnel: 5.78,
        equipment: 5.67,
        communication: 5.80,
        hsse: 5.73,
        overall: 5.71,
      },
    },
    {
      abbreviation: "BPCL",
      name: "Bharat Petroleum Corporation Limited",
      sector: "Oil & Gas PSU | Pan-India",
      visits: 6,
      rating: 4.94,
      featured: true,
      params: {
        personnel: 6.00,
        equipment: 5.83,
        communication: 6.00,
        hsse: 5.83,
        overall: 5.83,
      },
    },
    {
      abbreviation: "IOCL",
      name: "Indian Oil Corporation Limited",
      sector: "Oil & Gas PSU | Refineries & Pipelines",
      visits: 10,
      rating: 4.86,
      featured: false,
      params: {
        personnel: 6.00,
        equipment: 5.80,
        communication: 5.70,
        hsse: 5.70,
        overall: 5.60,
      },
    },
    {
      abbreviation: "MNGL",
      name: "MNGL",
      sector: "City Gas Distribution | Bangalore Region",
      visits: 2,
      rating: 5.00,
      featured: false,
      params: {
        personnel: 6.00,
        equipment: 6.00,
        communication: 6.00,
        hsse: 6.00,
        overall: 6.00,
      },
    },
    {
      abbreviation: "NAVY",
      name: "Indian Navy",
      sector: "Ministry of Defence, Government of India",
      visits: 2,
      rating: 4.75,
      featured: false,
      params: {
        personnel: 6.00,
        equipment: 5.50,
        communication: 6.00,
        hsse: 5.00,
        overall: 6.00,
      },
    },
    {
      abbreviation: "AVNT",
      name: "Avantika Gas Distribution",
      sector: "City Gas Distribution | Madhya Pradesh",
      visits: 1,
      rating: 4.80,
      featured: false,
      params: {
        personnel: 6.00,
        equipment: 5.00,
        communication: 6.00,
        hsse: 6.00,
        overall: 6.00,
      },
    },
  ];

  const testimonials = [
    {
      text: "Performance is exceptional. Staff deliver outstanding service consistently across every cathodic protection AMC visit.",
      org: "HPCL — Karnataka",
      date: "Jul 2025",
    },
    {
      text: "All equipment checked — completely satisfactory. Professional team, well-prepared for the CP-AMC visit. Excellent HSSE discipline throughout.",
      org: "HPCL — Bihar",
      date: "Feb 2025",
    },
    {
      text: "Good. Consistent quality on every AMC visit. The team is well-prepared, follows all safety protocols, and communicates proactively throughout the service cycle.",
      org: "HPCL — Uttar Pradesh",
      date: "Jan 2025",
    },
    {
      text: "Good service. Shivi Energy's team demonstrates exceptional knowledge of cathodic protection systems. Every parameter — Personnel, Equipment, Communication, and HSSE — consistently at the highest level.",
      org: "BPCL — Punjab",
      date: "Apr 2025",
    },
    {
      text: "Overall good. The Shivi Energy team maintains excellent HSSE standards and provides clear, effective communication during all CP system maintenance activities.",
      org: "HPCL — Maharashtra",
      date: "Jan 2026",
    },
    {
      text: "Good. Reliable and professional across all five evaluation parameters. The CP AMC visits are executed with precision — minimal disruption, maximum output.",
      org: "HPCL — Goa",
      date: "Dec 2024",
    },
  ];

  const benchmarks = [
    { icon: Users, score: "5.78", label: "Personnel", sub: "Expertise & Readiness" },
    { icon: HardHat, score: "5.68", label: "Equipment", sub: "Condition & Reliability" },
    { icon: Radio, score: "5.77", label: "Communication", sub: "Clarity & Responsiveness" },
    { icon: Shield, score: "5.73", label: "HSSE", sub: "Safety & Compliance" },
    { icon: Award, score: "5.71", label: "Overall", sub: "Service Excellence" },
  ];

  const paramBarWidth = (score: number) => `${(score / 6) * 100}%`;

  return (
    <section id="clients" className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-medium text-secondary">Verified Client Evaluations</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-3 md:mb-6">
              Trusted by India's <span className="text-primary">Leading Energy Majors</span>
            </h2>

            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-12 hidden md:block">
              Every service visit is independently evaluated by our clients through a formal
              Operations Performance Evaluation (OPE). Our scores speak for themselves.
            </p>

            {/* KPI Strip */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-16 max-w-4xl mx-auto">
              {[
                { value: "4.8/5", label: "Overall Rating" },
                { value: "79", label: "Verified Evaluations" },
                { value: "8", label: "Major Organisations" },
                { value: "30+", label: "Sites Covered" },
                { value: "100%", label: "OPE Compliance" },
              ].map((kpi, i) => (
                <div key={i} className="text-center p-3 md:p-4 rounded-xl bg-card border border-border">
                  <div className="text-xl md:text-3xl font-bold text-primary">{kpi.value}</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground mt-1">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Performance Benchmarks */}
        <ScrollReveal>
          <div className="bg-gradient-hero rounded-2xl p-6 md:p-10 mb-10 md:mb-16">
            <h3 className="text-lg md:text-2xl font-bold text-primary-foreground text-center mb-2">
              Rated Across 5 Critical Service Dimensions
            </h3>
            <p className="text-xs md:text-sm text-primary-foreground/70 text-center mb-6 md:mb-8 max-w-xl mx-auto">
              Verified aggregate scores across all 79 evaluations on the OPE 6-point scale.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
              {benchmarks.map((b, i) => {
                const Icon = b.icon;
                return (
                  <div key={i} className="text-center bg-primary-foreground/10 border border-primary-foreground/15 rounded-xl p-4 md:p-6">
                    <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground/80 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-extrabold text-primary-foreground">
                      {b.score}<span className="text-sm md:text-base font-normal text-primary-foreground/50">/6</span>
                    </div>
                    <div className="text-[10px] md:text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider mt-1">
                      {b.label}
                    </div>
                    <div className="text-[9px] md:text-[10px] text-primary-foreground/50 mt-0.5 hidden md:block">
                      {b.sub}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Organisation Rating Cards */}
        <ScrollReveal>
          <div className="mb-4 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1">
              Aggregate OPE Ratings by Organisation
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-6">
              Averaged across all formal OPE forms submitted by each organisation's authorised representatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: horizontal scroll */}
        <div className="flex gap-3 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory -mx-4 px-4 mb-8">
          {clients.map((client, index) => (
            <Card key={index} className={`flex-shrink-0 w-56 snap-center ${client.featured ? 'border-secondary' : ''}`}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center text-primary-foreground text-xs font-bold">
                    {client.abbreviation}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold truncate">{client.abbreviation}</div>
                    <div className="text-[10px] text-muted-foreground">{client.visits} Visits</div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <div className="text-2xl font-extrabold text-primary">{client.rating.toFixed(2)}<span className="text-xs text-muted-foreground font-normal">/5</span></div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-green-600 font-semibold">
                  <CheckCircle className="h-3 w-3" />
                  Verified OPE
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {clients.map((client, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden ${client.featured ? 'border-secondary' : ''}`}>
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${client.featured ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-gradient-hero'}`} />

                <CardContent className="p-6 pt-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center text-primary-foreground text-sm font-bold">
                        {client.abbreviation}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {client.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{client.sector}</div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-[10px] shrink-0">
                      {client.visits} Visits
                    </Badge>
                  </div>

                  {/* Grand Score */}
                  <div className="text-center py-4 border-y border-border mb-5">
                    <div className="text-4xl font-extrabold text-primary leading-none">
                      {client.rating.toFixed(2)}<span className="text-lg text-muted-foreground font-normal">/5</span>
                    </div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2">
                      Grand Average — All Parameters
                    </div>
                  </div>

                  {/* Parameter Bars */}
                  <div className="space-y-2.5">
                    {Object.entries(client.params).map(([key, val]) => (
                      <div key={key} className="grid grid-cols-[80px_1fr_36px] gap-2 items-center">
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {key}
                        </span>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-hero transition-all duration-700"
                            style={{ width: paramBarWidth(val) }}
                          />
                        </div>
                        <span className="text-xs font-bold text-primary text-right">{val.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 mt-4 text-[10px] text-green-600 font-semibold">
                    <CheckCircle className="h-3 w-3" />
                    Verified via Formal OPE Documentation
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <div className="mb-4 md:mb-8">
            <h3 className="text-lg md:text-2xl font-bold text-foreground mb-1">
              Directly From the Field
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mb-6">
              Comments recorded verbatim on formal OPE evaluation forms by our clients' authorised representatives.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-16">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative">
                <CardContent className="p-5 md:p-6">
                  <Quote className="h-6 w-6 text-primary/15 absolute top-4 right-4" />
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-xs font-bold">
                      AR
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-bold text-foreground">Authorised Representative</div>
                      <div className="text-[10px] text-muted-foreground">{t.org}</div>
                      <div className="flex items-center gap-1 text-[10px] text-green-600 font-semibold mt-0.5">
                        <CheckCircle className="h-2.5 w-2.5" />
                        Verified OPE Form
                      </div>
                    </div>
                    <div className="text-[10px] text-muted-foreground">{t.date}</div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Strip */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
            {[
              "Hindustan Petroleum Corporation Limited",
              "Bharat Petroleum Corporation Limited",
              "Indian Oil Corporation Limited",
              "MNGL",
              "Indian Navy",
              "IOCL Aviation",
              "Avantika Gas Distribution",
              "ISPRL Mangalore",
            ].map((name, i) => (
              <div key={i} className="bg-card border border-border rounded-lg px-3 py-2 text-xs md:text-sm font-semibold text-foreground">
                {name}
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Trust Strip */}
        <ScrollReveal>
          <div className="bg-gradient-hero rounded-xl p-4 md:p-6">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {[
                { icon: "📋", text: "Formal OPE Evaluation Process" },
                { icon: "🏭", text: "Approved Vendor — Major PSUs" },
                { icon: "🛡️", text: "HSSE-Certified Field Teams" },
                { icon: "🔬", text: "NACE-Aware CP Specialists" },
                { icon: "📍", text: "30+ Sites | Pan-India Coverage" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-primary-foreground text-xs md:text-sm font-semibold">
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Data Transparency Note */}
        <p className="text-[10px] md:text-xs text-muted-foreground text-center mt-6 max-w-3xl mx-auto">
          <strong>Data Transparency:</strong> All ratings are derived from formal Operations Performance Evaluation (OPE) forms — Document No. OPE-G3-QA-1, Service Quality, Issue Date January 2020 — submitted by authorised representatives. Scores range 1–6 on the OPE scale, normalised to 5-star equivalent. 79 evaluations collected between May 2024 and January 2026.
        </p>
      </div>
    </section>
  );
};

export default Clients;
