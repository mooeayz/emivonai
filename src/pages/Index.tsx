import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
