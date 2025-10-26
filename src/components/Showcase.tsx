import { Card } from "@/components/ui/card";
import { Bot, Brain, Code, Palette } from "lucide-react";

const projects = [
  {
    icon: Bot,
    title: "Enterprise Chatbot Platform",
    description: "Scalable AI chat system for customer support with natural language understanding",
    color: "primary"
  },
  {
    icon: Brain,
    title: "Creative Writing Assistant",
    description: "AI-powered tool that helps writers brainstorm, draft, and refine their content",
    color: "accent"
  },
  {
    icon: Code,
    title: "Developer Copilot",
    description: "Intelligent coding assistant that understands context and suggests solutions",
    color: "secondary"
  },
  {
    icon: Palette,
    title: "Design Intelligence",
    description: "AI that generates design concepts and provides creative direction",
    color: "primary"
  }
];

const Showcase = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Innovations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the intelligent systems we're building to shape the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colorClass = project.color === 'primary' 
              ? 'text-primary' 
              : project.color === 'accent' 
                ? 'text-accent' 
                : 'text-secondary';
            
            return (
              <Card 
                key={index}
                className="p-8 bg-background border-2 border-transparent hover:border-primary/20 rounded-2xl transition-all duration-300 group cursor-pointer glow-hover"
              >
                <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
