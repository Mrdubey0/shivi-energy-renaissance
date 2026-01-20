import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import ScrollReveal from "./ScrollReveal";

// Import AI-generated slideshow images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

// Slideshow images for both mobile and desktop
const slideshowImages = [
  { src: heroSlide1, alt: "Offshore drilling platform at sunset" },
  { src: heroSlide2, alt: "Modern oil refinery at twilight" },
  { src: heroSlide3, alt: "Engineers inspecting pipeline infrastructure" },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background for Both Desktop and Mobile */}
      <div className="absolute inset-0">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image.src})`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Carousel Navigation Arrows - Desktop */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slideshowImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-secondary w-8' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/70 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
                onClick={() => navigate('/solutions')}
              >
                Explore Our Solutions
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
