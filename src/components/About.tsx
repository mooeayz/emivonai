const About = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
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
          
          {/* Abstract Illustration */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="absolute w-64 h-64 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute w-48 h-48 bg-accent/30 rounded-full blur-xl floating"></div>
            <div className="absolute w-32 h-32 bg-secondary/40 rounded-full blur-lg floating" style={{ animationDelay: '1s' }}></div>
            
            {/* Neural Network-like connections */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute w-4 h-4 bg-primary rounded-full top-1/4 left-1/4 pulse-slow"></div>
              <div className="absolute w-4 h-4 bg-accent rounded-full top-1/3 right-1/4 pulse-slow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-4 h-4 bg-secondary rounded-full bottom-1/3 left-1/3 pulse-slow" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-6 h-6 bg-primary rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pulse-slow" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute w-4 h-4 bg-accent rounded-full bottom-1/4 right-1/3 pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
