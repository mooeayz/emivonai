import { Button } from "@/components/ui/button";
import { Target, Heart, Sparkles, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl mb-6 animate-fade-in">
              Our Vision
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Building AI that amplifies human creativity, not replaces it
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 card-hover">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create AI systems that understand context, express creativity, and genuinely help people achieve more. We're building technology that feels less like a tool and more like a creative partner.
                </p>
              </Card>

              <Card className="p-8 card-hover">
                <Heart className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe AI should be intuitive, ethical, and accessible. Every product we build prioritizes user experience, creative freedom, and responsible innovation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Sparkles className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl mb-6">Meet the Founder</h2>
            </div>

            <Card className="p-12 bg-muted">
              <div className="space-y-6 text-center md:text-left">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Emivon was born from a simple belief: AI can be more than just algorithms and automation. It can be creative, expressive, and truly intelligent in ways that complement human thinking.
                </p>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Our founder envisioned a future where AI doesn't just process data—it understands nuance, generates ideas, and helps people bring their visions to life. That's the future we're building, one intelligent system at a time.
                </p>
                <div className="pt-6">
                  <p className="text-lg font-medium">The Emivon Team</p>
                  <p className="text-muted-foreground">Where innovation meets soul</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl mb-6">Join Our Journey</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're just getting started. As we build the future of creative AI, we invite you to be part of the journey. Whether you're a developer, designer, or dreamer—there's a place for you in the Emivon community.
            </p>
            <Link to="/early-access">
              <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground px-10 py-6 text-lg rounded-2xl glow-button">
                Get Early Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
