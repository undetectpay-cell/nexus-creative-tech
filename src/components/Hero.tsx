import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary/40 via-primary/30 to-primary/40 backdrop-blur-[2px]"
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center text-foreground drop-shadow-2xl">
          <div className="mb-8">
            <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight drop-shadow-2xl">
              Velarix<span className="text-accent">.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide text-foreground/90 drop-shadow-lg">
              Digital Studio
            </p>
          </div>
          
          <p className="mb-12 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-md">
            Crafting modern digital experiences for small businesses and creators across the Netherlands and United States
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-7 text-base font-medium text-foreground bg-gradient-to-r from-accent/80 via-accent/70 to-accent/80 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 btn-modern"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/90 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-7 text-base font-medium text-foreground bg-white/5 backdrop-blur-xl border-2 border-accent/30 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-accent/50 btn-modern"
            >
              <span className="relative z-10">Explore Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
