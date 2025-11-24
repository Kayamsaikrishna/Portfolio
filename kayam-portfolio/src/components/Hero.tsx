import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroNeuralBg from "@/assets/hero-neural-bg.jpg";
import Profile from "@/assets/profile.png";
import ResumePDF from "@/assets/Kayam-Sai-Krishna-Aiml-Resume.pdf";
import Lottie from "lottie-react";
import RobotHello from "@/assets/Robot says hello.json";

// Adjust path if needed

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroNeuralBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Matrix Effect Overlay */}
      <div className="absolute inset-0 matrix-bg opacity-20" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="max-w-2xl flex-1 text-center lg:text-left space-y-8 animate-fade-in">

          {/* TOP CIRCUIT LINE — appears above the name */}
          <div
            className="flow-circuit flow-circuit-top w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto lg:mx-0"
            aria-hidden="true"
          />

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold font-orbitron">
              <span className="gradient-text">KAYAM SAI</span>
              <br />
              <span className="text-neural">KRISHNA</span>
            </h1>
            <div className="text-xl lg:text-2xl text-accent font-medium font-orbitron tracking-wider">
              AI/ML ENGINEER
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI/ML engineer specializing in <span className="text-secondary font-bold">Deep Learning</span>, <span className="text-accent font-bold">Computer Vision</span>, and <span className="text-primary font-bold">Generative AI</span>. I craft end-to-end intelligent solutions — from data preparation to deployment — delivering impact across automotive, manufacturing, energy, and engineering industries.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <a
              href="mailto:kayamsaikrishna@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:underline"
              aria-label="Send email to kayamsaikrishna"
            >
              <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>kayamsaikrishna@gmail.com</span>
            </a>

            <a
              href="tel:+918088993690"
              className="flex items-center gap-2 text-muted-foreground hover:underline"
              aria-label="Call +91 8088993690"
            >
              <Phone className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>+91 8088993690</span>
            </a>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Action Buttons (as links) */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {/* Resume download - uses file in assets */}
            <Button asChild variant="neural" size="lg" className="group">
              <a
                href={ResumePDF}
                download
                aria-label="Download resume"
                className="inline-flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>

            {/* GitHub - replace URL */}
            <Button asChild variant="glow" size="lg" className="group">
              <a
                href="https://github.com/kayamsaikrishna"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </a>
            </Button>

            {/* LinkedIn - replace URL */}
            <Button asChild variant="cyber" size="lg" className="group">
              <a
                href="https://www.linkedin.com/in/kayam-sai-krishna-675792326/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* BOTTOM CIRCUIT LINE — appears after the action buttons */}
          <div
            className="flow-circuit flow-circuit-bottom w-11/12 sm:w-10/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto lg:mx-0"
            aria-hidden="true"
          />
        </div>

        {/* Profile Flip Card */}
        <div className="flex-1 flex justify-center lg:justify-end mt-16 lg:mt-12 relative [perspective:1200px] group">
          <div
            className="
              relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] translate-y-5
              [transform-style:preserve-3d]
              transition-transform duration-700 ease-in-out
              group-hover:[transform:rotateY(180deg)]
            "
            style={{ willChange: "transform" }}
          >
            {/* Front */}
            <div
              className="
                absolute inset-0 rounded-full overflow-hidden shadow-lg
                border-[4px] border-transparent
                bg-gradient-to-tr from-blue-500 via-blue-400 to-cyan-400 p-[4px]
              "
              style={{
                transform: "rotateY(0deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              {/* Inner blue glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-blue-300 to-cyan-300 blur-2xl" />

              {/* Profile image */}
              <img
                src={Profile}
                alt="Profile"
                className="relative z-10 w-full h-full object-contain scale-110"
              />
            </div>

            {/* Back */}
            <div
              className="
                absolute inset-0 rounded-full overflow-hidden shadow-lg
                border-[4px] border-transparent
                bg-gradient-to-tr from-purple-500/70 via-blue-500/70 to-primary/70 p-[4px]
                flex items-center justify-center
              "
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <Lottie
                animationData={RobotHello}
                loop
                autoplay
                className="w-[90%] h-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
