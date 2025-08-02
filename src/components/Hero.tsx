import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
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
          backgroundImage: `linear-gradient(rgba(34, 48, 117, 0.8), rgba(34, 48, 117, 0.6)), url(${heroBg})`
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-glow/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-glow/20 border border-primary-glow/30 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-primary-foreground">
              Premium Energy Solutions Provider
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
              text="Transform your energy operations with our premium solutions. From drilling to corrosion management, we deliver excellence at every step."
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
              Get Quote Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/brochure.pdf';
                link.download = 'Shivi-Energy-Solutions-Brochure.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-primary-foreground/80">
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-glow mb-2">50+</div>
              <div className="text-sm">Global Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm">Support Available</div>
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