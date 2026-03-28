import { useEffect, useRef, useState, useCallback } from "react";
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
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import hpclLogo from "@/assets/logos/hpcl.png";
import bpclLogo from "@/assets/logos/bpcl.png";
import ioclLogo from "@/assets/logos/iocl.png";
import mnglLogo from "@/assets/logos/mngl.png";
import navyLogo from "@/assets/logos/indian-navy.png";
import avantikaLogo from "@/assets/logos/avantika.png";


const Clients = () => {
  const clients = [
    {
      logo: hpclLogo,
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
      logo: bpclLogo,
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
      logo: ioclLogo,
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
      logo: mnglLogo,
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
      logo: navyLogo,
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
      logo: avantikaLogo,
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

  const clientLogos = [
    { name: "HPCL", logo: hpclLogo },
    { name: "BPCL", logo: bpclLogo },
    { name: "IOCL", logo: ioclLogo },
    { name: "MNGL", logo: mnglLogo },
    { name: "Indian Navy", logo: navyLogo },
    { name: "Avantika Gas", logo: avantikaLogo },
  ];

  const paramBarWidth = (score: number) => `${(score / 6) * 100}%`;

  const clientsScrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);
  const [clientIdx, setClientIdx] = useState(0);
  const [reviewIdx, setReviewIdx] = useState(0);
  const clientsPaused = useRef(false);
  const reviewsPaused = useRef(false);

  const scrollTo = useCallback((ref: React.RefObject<HTMLDivElement>, idx: number) => {
    const el = ref.current;
    if (!el || !el.children[idx]) return;
    (el.children[idx] as HTMLElement).scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, []);

  useEffect(() => {
    const t1 = setInterval(() => {
      if (clientsPaused.current) return;
      setClientIdx(prev => {
        const next = (prev + 1) % clients.length;
        scrollTo(clientsScrollRef, next);
        return next;
      });
    }, 3000);
    const t2 = setInterval(() => {
      if (reviewsPaused.current) return;
      setReviewIdx(prev => {
        const next = (prev + 1) % testimonials.length;
        scrollTo(reviewsScrollRef, next);
        return next;
      });
    }, 4000);
    const pauseClients = () => { clientsPaused.current = true; };
    const pauseReviews = () => { reviewsPaused.current = true; };
    clientsScrollRef.current?.addEventListener('touchstart', pauseClients, { once: true });
    reviewsScrollRef.current?.addEventListener('touchstart', pauseReviews, { once: true });
    return () => {
      clearInterval(t1);
      clearInterval(t2);
      clientsScrollRef.current?.removeEventListener('touchstart', pauseClients);
      reviewsScrollRef.current?.removeEventListener('touchstart', pauseReviews);
    };
  }, [clients.length, testimonials.length, scrollTo]);

  return (
    <section id="clients" className="py-8 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-3 md:mb-4">
              <span className="text-xs md:text-sm font-medium text-secondary">Verified Client Evaluations</span>
            </div>

            <h2 className="text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
              Trusted by India's <span className="text-primary">Leading Energy Majors</span>
            </h2>

            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto mb-4 md:mb-8 hidden md:block">
              Every service visit is independently evaluated by our clients through a formal
              Operations Performance Evaluation (OPE). Our scores speak for themselves.
            </p>

            {/* KPI Strip */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mb-6 md:mb-10 max-w-4xl mx-auto">
              {[
                { value: "4.8/5", label: "Overall Rating" },
                { value: "79", label: "Verified Evaluations" },
                { value: "8", label: "Major Organisations" },
                { value: "30+", label: "Sites Covered", hideOnMobile: true },
                { value: "100%", label: "OPE Compliance", hideOnMobile: true },
              ].map((kpi, i) => (
                <div key={i} className={`text-center p-2 md:p-4 rounded-xl bg-card border border-border ${(kpi as any).hideOnMobile ? 'hidden md:block' : ''}`}>
                  <div className="text-lg md:text-3xl font-bold text-primary">{kpi.value}</div>
                  <div className="text-[9px] md:text-xs text-muted-foreground mt-0.5">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Performance Benchmarks */}
        <ScrollReveal>
          <div className="bg-gradient-hero rounded-2xl p-4 md:p-8 mb-6 md:mb-10">
            <h3 className="text-base md:text-2xl font-bold text-primary-foreground text-center mb-1 md:mb-2">
              Rated Across 5 Critical Service Dimensions
            </h3>
            <p className="text-[10px] md:text-sm text-primary-foreground/70 text-center mb-4 md:mb-6 max-w-xl mx-auto">
              Verified aggregate scores across all 79 evaluations on the OPE 6-point scale.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-5">
              {benchmarks.map((b, i) => {
                const Icon = b.icon;
                const isLast = i === benchmarks.length - 1;
                return (
                  <div key={i} className={`text-center bg-primary-foreground/10 border border-primary-foreground/15 rounded-lg md:rounded-xl p-3 md:p-6 ${isLast ? 'col-span-2 md:col-span-1' : ''}`}>
                    <Icon className="h-4 w-4 md:h-7 md:w-7 text-primary-foreground/80 mx-auto mb-1 md:mb-2" />
                    <div className="text-base md:text-3xl font-extrabold text-primary-foreground">
                      {b.score}<span className="text-[8px] md:text-base font-normal text-primary-foreground/50">/6</span>
                    </div>
                    <div className="text-[7px] md:text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider mt-0.5">
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
          <div className="mb-3 md:mb-6">
            <h3 className="text-base md:text-2xl font-bold text-foreground mb-1">
              Aggregate OPE Ratings by Organisation
            </h3>
            <p className="text-[10px] md:text-sm text-muted-foreground mb-4">
              Averaged across all formal OPE forms submitted by each organisation's authorised representatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: compact horizontal scroll */}
        <div ref={clientsScrollRef} className="flex gap-2.5 overflow-x-auto pb-3 md:hidden snap-x snap-mandatory -mx-4 px-4 mb-5 scrollbar-hide">
          {clients.map((client, index) => (
            <Card key={index} className={`flex-shrink-0 w-44 snap-center ${client.featured ? 'border-secondary' : ''}`}>
              <CardContent className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  <img src={client.logo} alt={client.abbreviation} className="w-8 h-8 rounded-md object-contain bg-white p-0.5" loading="lazy" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">{client.abbreviation}</div>
                    <div className="text-[9px] text-muted-foreground">{client.visits} Visits</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-primary">{client.rating.toFixed(2)}<span className="text-[9px] text-muted-foreground font-normal">/5</span></div>
                  <div className="flex justify-center mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {clients.map((client, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Card className={`group hover:shadow-card transition-all duration-300 hover:-translate-y-2 h-full relative overflow-hidden ${client.featured ? 'border-secondary' : ''}`}>
                <div className={`absolute top-0 left-0 right-0 h-1 ${client.featured ? 'bg-gradient-to-r from-secondary to-primary' : 'bg-gradient-hero'}`} />

                <CardContent className="p-5 pt-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src={client.logo} alt={client.abbreviation} className="w-11 h-11 rounded-xl object-contain bg-white p-1 border border-border" loading="lazy" />
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
                  <div className="text-center py-3 border-y border-border mb-4">
                    <div className="text-3xl font-extrabold text-primary leading-none">
                      {client.rating.toFixed(2)}<span className="text-base text-muted-foreground font-normal">/5</span>
                    </div>
                    <div className="flex justify-center mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1.5">
                      Grand Average — All Parameters
                    </div>
                  </div>

                  {/* Parameter Bars */}
                  <div className="space-y-2">
                    {Object.entries(client.params).map(([key, val]) => (
                      <div key={key} className="grid grid-cols-[80px_1fr_36px] gap-2 items-center">
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">
                          {key}
                        </span>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-hero transition-all duration-700"
                            style={{ width: paramBarWidth(val) }}
                          />
                        </div>
                        <span className="text-xs font-bold text-primary text-right">{val.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 mt-3 text-[10px] text-green-600 font-semibold">
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
          <div className="mb-3 md:mb-6">
            <h3 className="text-base md:text-2xl font-bold text-foreground mb-1">
              Directly From the Field
            </h3>
            <p className="text-[10px] md:text-sm text-muted-foreground mb-4">
              Comments recorded verbatim on formal OPE evaluation forms by our clients' authorised representatives.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile: carousel testimonials */}
        <div ref={reviewsScrollRef} className="flex gap-2.5 overflow-x-auto pb-3 md:hidden snap-x snap-mandatory -mx-4 px-4 mb-5 scrollbar-hide">
          {testimonials.map((t, index) => (
            <Card key={index} className="flex-shrink-0 w-72 snap-center relative">
              <CardContent className="p-4">
                <Quote className="h-4 w-4 text-primary/15 absolute top-3 right-3" />
                <div className="flex mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2.5 w-2.5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-[11px] text-muted-foreground italic leading-relaxed mb-2 line-clamp-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex-1">
                    <div className="text-[10px] font-bold text-foreground">Authorised Representative</div>
                    <div className="text-[9px] text-muted-foreground">{t.org}</div>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] text-green-600 font-semibold">
                    <CheckCircle className="h-2.5 w-2.5" />
                    {t.date}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop: grid testimonials */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {testimonials.map((t, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <Card className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1 relative">
                <CardContent className="p-5">
                  <Quote className="h-5 w-5 text-primary/15 absolute top-3 right-3" />
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1">
                      <div className="text-xs font-bold text-foreground">Authorised Representative</div>
                      <div className="text-[10px] text-muted-foreground">{t.org}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-green-600 font-semibold">
                      <CheckCircle className="h-2.5 w-2.5" />
                      {t.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Logo Strip */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-5 md:mb-8">
            {clientLogos.map((c, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-2 md:p-3 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
                <img src={c.logo} alt={c.name} className="w-full h-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Clients;
