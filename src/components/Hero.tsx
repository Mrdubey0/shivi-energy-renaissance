import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import TypewriterText from "./TypewriterText";
import ScrollReveal from "./ScrollReveal";

// Sample slideshow images for mobile
const slideshowImages = [
  heroBg,
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1920&h=1080&fit=crop",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop",
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Slideshow auto-advance for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background for Desktop/Tablet */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-oil-pump-at-sunset-44398-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Slideshow Background for Mobile */}
      <div className="absolute inset-0 md:hidden">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
        
        {/* Slideshow Indicators */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-secondary w-6' 
                  : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
              }`}
            />
          ))}
        </div>
      </div>
      
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
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-glow/20 border border-primary-glow/30 backdrop-blur-sm mb-6">
              <Shield className="h-4 w-4 mr-2 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">
                Operational Assurance Systems
              </span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              <span className="block">SHIVI ENERGY</span>
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                SOLUTIONS
              </span>
            </h1>
          </ScrollReveal>

          {/* Subheading with Typewriter Effect */}
          <ScrollReveal delay={200}>
            <div className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed min-h-[120px] flex items-center justify-center">
              <TypewriterText 
                text="Engineering-led execution systems designed to reduce operational risk. From integrity management to well intervention, we deliver audit-ready field execution."
                delay={500}
                speed={30}
              />
            </div>
          </ScrollReveal>

          {/* CTA Button */}
          <ScrollReveal delay={300}>
            <div className="flex justify-center items-center mb-12">
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => {
                  const section = document.getElementById('about');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Learn About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Operational Metrics - Hidden on mobile for lite version */}
          <ScrollReveal delay={400}>
            <div className="hidden md:grid grid-cols-4 gap-8 text-center text-primary-foreground/80">
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
            {/* Mobile: Only show 2 key stats */}
            <div className="grid grid-cols-2 gap-4 md:hidden text-center text-primary-foreground/80">
              <div>
                <span className="text-2xl font-bold text-secondary">2.4M+</span>
                <div className="text-xs">Incident-Free Hours</div>
              </div>
              <div>
                <span className="text-2xl font-bold text-accent">98.7%</span>
                <div className="text-xs">On-Time Delivery</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
