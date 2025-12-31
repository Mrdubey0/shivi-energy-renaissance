import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Activity, Shield, Clock } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import TypewriterText from "./TypewriterText";
import QuoteRequestForm from "./QuoteRequestForm";

const Hero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 48, 117, 0.85), rgba(34, 48, 117, 0.7)), url(${heroBg})`
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-glow/20 border border-primary-glow/30 backdrop-blur-sm mb-6">
            <Shield className="h-4 w-4 mr-2 text-secondary" />
            <span className="text-sm font-medium text-primary-foreground">
              Operational Assurance Systems
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="block">SHIVI ENERGY</span>
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              SOLUTIONS
            </span>
          </h1>

          {/* Subheading with Typewriter Effect */}
          <div className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed min-h-[120px] flex items-center justify-center">
            <TypewriterText 
              text="Engineering-led execution systems designed to reduce operational risk. From integrity management to well intervention, we deliver audit-ready field execution."
              delay={500}
              speed={30}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              className="group"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              Technical Inquiry
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/brochure.pdf';
                link.download = 'Shivi-Energy-Solutions-Technical-Overview.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Access Technical Overview
            </Button>
          </div>

          {/* Operational Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground/80">
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Activity className="h-5 w-5 mr-2 text-secondary" />
                <span className="text-3xl font-bold text-secondary">127</span>
              </div>
              <div className="text-sm">Active Executions</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-5 w-5 mr-2 text-accent" />
                <span className="text-3xl font-bold text-accent">2.4M+</span>
              </div>
              <div className="text-sm">Incident-Free Hours</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <Clock className="h-5 w-5 mr-2 text-primary-glow" />
                <span className="text-3xl font-bold text-primary-glow">98.7%</span>
              </div>
              <div className="text-sm">On-Time Delivery</div>
            </div>
            <div className="group">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl font-bold text-secondary">ISO</span>
              </div>
              <div className="text-sm">Audit-Ready Systems</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
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

export default Hero;
