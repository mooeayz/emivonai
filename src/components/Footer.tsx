import emivonLogo from "@/assets/emivon-logo-white.png";
import { Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={emivonLogo} alt="Emivon AI" className="w-10 h-10" />
            <span className="text-sm">© 2025 Emivon AI. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="hover:text-secondary transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-secondary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="#" 
              className="hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
