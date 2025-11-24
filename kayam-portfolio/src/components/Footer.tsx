import { Github, Linkedin, Mail, ArrowUp, Code, Sparkles, Zap, User } from "lucide-react";
import { useState, useEffect } from "react";
import LOGO from "@/assets/LOGO.png";

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const AnimatedIcon: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
    <div className="relative group" style={{ animationDelay: `${delay}ms` }}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse" />
      <div className="relative bg-gradient-neural p-3 rounded-full border border-primary/20 group-hover:border-primary/40 transition-all duration-300 hover:scale-110">
        {children}
      </div>
    </div>
  );

  const FloatingParticle: React.FC<{ delay?: number; size?: string }> = ({ delay = 0, size = "w-2 h-2" }) => {
    const [pos] = useState({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    });

    return (
      <div
        className={`absolute ${size} bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 animate-float`}
        style={{
          animationDelay: `${delay}s`,
          left: pos.left,
          top: pos.top
        }}
      />
    );
  };

  return (
    <footer className="relative overflow-hidden neural-bg border-t border-primary/20">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-4 group cursor-pointer">
              <AnimatedIcon>
                <img
                  src={LOGO}
                  alt="Kayam Logo"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </AnimatedIcon>

              <div>
                <h2 className="text-2xl font-bold font-orbitron gradient-text">KAYAM AI</h2>
                <p className="text-xs text-muted-foreground font-mono">&lt;building_the_future /&gt;</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Crafting intelligent solutions with passion and precision. Transforming complex problems into elegant AI-powered experiences.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="w-4 h-4 animate-pulse text-accent" />
              <span className="font-mono">Currently available for new projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-6" aria-label="Quick links">
            <h4 className="font-bold text-foreground flex items-center gap-2 font-orbitron">
              <Sparkles className="w-4 h-4 text-primary" />
              Explore
            </h4>
            <div className="space-y-3">
              {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 bg-primary/10 rounded transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
            </div>
          </nav>

          {/* Technologies */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground flex items-center gap-2 font-orbitron">
              <Code className="w-4 h-4 text-secondary" />
              Tech Stack
            </h4>
            <div className="space-y-3">
              {["Python & AI/ML", "React & TypeScript", "Computer Vision", "Deep Learning", "Cloud & DevOps"].map(
                (tech, index) => (
                  <div
                    key={tech}
                    className="text-muted-foreground text-sm hover:text-secondary transition-colors cursor-default"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <span className="font-mono text-xs text-primary">&gt;</span> {tech}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-6">
            <a href="mailto:kayamsaikrishna@gmail.com" className="group relative" aria-label="Email" rel="noopener noreferrer">
              <AnimatedIcon delay={0}>
                <Mail className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
              </AnimatedIcon>
            </a>

            <a
              href="https://github.com/kayamsaikrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="GitHub"
            >
              <AnimatedIcon delay={200}>
                <Github className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
              </AnimatedIcon>
            </a>

            <a
              href="https://www.linkedin.com/in/kayam-sai-krishna-675792326"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="LinkedIn"
            >
              <AnimatedIcon delay={400}>
                <Linkedin className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
              </AnimatedIcon>
            </a>

            {/* Gravatar / avatar link */}
            <a
              href="https://en.gravatar.com/krishna20132004"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label="Gravatar Profile"
              title="View Gravatar Profile"
            >
              <AnimatedIcon delay={600}>
                <User className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
              </AnimatedIcon>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">© 2025 Kayam Sai Krishna.</p>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-neural hover:shadow-lg"
                aria-label="Scroll to top"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
                  Back to Top
                </span>
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(120deg);
          }
          66% {
            transform: translateY(5px) rotate(240deg);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }

        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(var(--primary), 0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
