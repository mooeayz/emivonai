import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Rocket, CheckCircle2 } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const EarlyAccess = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send to your backend/database
    console.log("Early access request:", formData);
    
    toast({
      title: "Welcome aboard!",
      description: "We'll reach out to you soon with early access details.",
    });
    
    setSubmitted(true);
    setFormData({ name: "", email: "", interest: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative container mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-primary hover:text-accent transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <Rocket className="w-20 h-20 text-primary mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl md:text-6xl mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Join the Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Be among the first to experience AI with soul
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <Card className="p-8 md:p-12 bg-muted">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium mb-2">
                      What interests you most? *
                    </label>
                    <Input
                      id="interest"
                      name="interest"
                      type="text"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      placeholder="AI chatbots, creative tools, automation..."
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Tell us more (optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What would you like to build with Emivon AI?"
                      className="w-full min-h-32"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-accent text-primary-foreground py-6 text-lg rounded-2xl glow-button"
                  >
                    Request Early Access
                  </Button>
                </form>
              </Card>
            ) : (
              <Card className="p-12 bg-muted text-center">
                <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6 animate-scale-in" />
                <h2 className="text-3xl mb-4">You're on the list!</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  We'll be in touch soon with exclusive early access to Emivon AI.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="lg"
                  className="rounded-xl"
                >
                  Submit Another Request
                </Button>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl text-center mb-12">What You'll Get</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center card-hover">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl mb-2">Priority Access</h3>
                <p className="text-muted-foreground">Be first to try our AI tools</p>
              </Card>

              <Card className="p-6 text-center card-hover">
                <div className="text-4xl mb-4">💎</div>
                <h3 className="text-xl mb-2">Exclusive Features</h3>
                <p className="text-muted-foreground">Access beta features early</p>
              </Card>

              <Card className="p-6 text-center card-hover">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl mb-2">Direct Support</h3>
                <p className="text-muted-foreground">Shape the future with us</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EarlyAccess;
