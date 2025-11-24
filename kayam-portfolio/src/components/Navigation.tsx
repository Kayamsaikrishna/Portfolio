import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Sparkles, Zap } from "lucide-react";
import LOGO from "@/assets/LOGO.png"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute("href");
        if (targetId) {
          const element = document.querySelector(targetId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleNavClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  const AnimatedLogo = () => (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        {/* Outer glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Main logo container with Gravatar */}
        <div className="relative w-12 h-12 rounded-xl border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 overflow-hidden">
          {/* Animated particles overlay */}
          <div className="absolute inset-0 z-10">
            <div className="absolute top-1 left-1 w-1 h-1 bg-primary rounded-full animate-ping opacity-60" 
                 style={{ animationDelay: '0s', animationDuration: '2s' }} />
            <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-secondary rounded-full animate-ping opacity-60" 
                 style={{ animationDelay: '1s', animationDuration: '2s' }} />
            <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-accent rounded-full animate-ping opacity-60" 
                 style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
          </div>
          
          {/* Gravatar Image */}
          <img 
            src={LOGO}
            alt="Krishna Avatar"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Scan line effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12 z-20" />
          
          {/* Neural network overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-15">
            <Brain className="w-full h-full text-primary" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <span className="text-xl font-bold font-orbitron gradient-text">
          KAYAM AI
        </span>
        <div className="flex items-center gap-1 text-xs">
          <Zap className="w-3 h-3 text-accent animate-pulse" />
          <span className="text-muted-foreground font-mono">&lt;/&gt;</span>
        </div>
      </div>
    </div>
  );

  const FloatingParticle = ({ delay = 0 }) => (
    <div
      className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-neural border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-18">
          {/* Animated Logo */}
          <AnimatedLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-medium transition-all duration-300 group py-2 px-3 rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Active indicator */}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute inset-0 bg-primary/10 rounded-lg border border-primary/20" />
                )}
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10 flex items-center gap-2">
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                  )}
                </span>
                
                {/* Underline effect */}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full group-hover:left-0" />
              </a>
            ))}
            
            <Button
              className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 border-0 text-primary-foreground font-medium px-6 py-2 transition-all duration-300 hover:scale-105 shadow-neural group"
              asChild
            >
              <a href="mailto:kayamsaikrishna@gmail.com">
                <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  <Zap className="w-4 h-4 group-hover:animate-pulse" />
                  Hire Me
                </span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative overflow-hidden hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative z-10">
              {isOpen ? (
                <X className="w-6 h-6 text-primary rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-primary hover:rotate-180 transition-transform duration-300" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="py-6 border-t border-primary/20 bg-background/50 backdrop-blur-xl rounded-b-2xl mt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative font-medium px-6 py-3 transition-all duration-300 hover:bg-primary/10 hover:translate-x-2 rounded-lg mx-2 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center gap-3">
                    {activeSection === item.href.slice(1) && (
                      <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                    )}
                    {item.label}
                  </span>
                </a>
              ))}
              <div className="px-6 pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-medium py-3 transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <a href="mailto:kayamsaikrishna@gmail.com">
                    <Zap className="w-4 h-4 mr-2" />
                    Hire Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg); 
            opacity: 0.7;
          }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;