import { Button } from "@/components/ui/button";
import emivonLogo from "@/assets/emivon-logo.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl pulse-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-12 animate-fade-in">
          <img 
            src={emivonLogo} 
            alt="Emivon AI" 
            className="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Intelligence with Soul.
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Where human creativity meets artificial brilliance
        </p>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-6 text-lg rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
