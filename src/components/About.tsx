const About = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Emivon is an AI-driven brand reimagining creativity and intelligence. 
              We build chatbots and creative tools that think, learn, and express — 
              blending human imagination with artificial brilliance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to create AI that feels alive, creative, and helpful — 
              technology that enhances human potential rather than replacing it.
            </p>
          </div>
          
          {/* Motion Gradient Element */}
          <div className="relative h-96 flex items-center justify-center overflow-hidden rounded-2xl">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 gradient-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-primary/10 to-transparent gradient-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Floating orbs */}
            <div className="absolute w-64 h-64 bg-primary/30 rounded-full blur-3xl floating"></div>
            <div className="absolute w-48 h-48 bg-accent/40 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-32 h-32 bg-primary/50 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
            
            {/* Pulsing particles */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-3 h-3 bg-primary rounded-full top-1/4 left-1/4 pulse-slow shadow-[0_0_15px_rgba(233,100,247,0.6)]"></div>
              <div className="absolute w-3 h-3 bg-accent rounded-full top-1/3 right-1/4 pulse-slow shadow-[0_0_15px_rgba(255,138,61,0.6)]" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-4 h-4 bg-primary rounded-full bottom-1/3 left-1/3 pulse-slow shadow-[0_0_20px_rgba(233,100,247,0.6)]" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-5 h-5 bg-accent rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-slow shadow-[0_0_25px_rgba(255,138,61,0.6)]" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute w-3 h-3 bg-primary rounded-full bottom-1/4 right-1/3 pulse-slow shadow-[0_0_15px_rgba(233,100,247,0.6)]" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
