import { MessageSquare, Sparkles, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: MessageSquare,
    title: "AI Chat Systems",
    description: "Smart, personalized AI chatbots that understand context and deliver meaningful conversations.",
    color: "primary"
  },
  {
    icon: Sparkles,
    title: "Creative AI Tools",
    description: "AI-powered solutions for design, writing, and ideation that amplify human creativity.",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Automation & Innovation",
    description: "Intelligent systems that simplify life and enhance productivity through seamless automation.",
    color: "secondary"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Build</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI solutions designed to transform how you work, create, and innovate
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClass = service.color === 'primary' 
              ? 'text-primary' 
              : service.color === 'accent' 
                ? 'text-accent' 
                : 'text-secondary';
            
            return (
              <Card 
                key={index}
                className="p-8 bg-muted border-none rounded-2xl hover:shadow-lg transition-all duration-300 glow-hover group"
              >
                <div className={`w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
