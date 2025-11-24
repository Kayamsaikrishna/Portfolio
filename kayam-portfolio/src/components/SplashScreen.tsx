import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Server, Cloud, Cpu, Database, Network, Zap, Atom } from "lucide-react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Redirect to portfolio selector after splash screen
      navigate("/selector");
    }, 4000); // Show splash screen for 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!isVisible) return null;

  const techElements = [
    { icon: Brain, label: "Neural Networks", delay: 0 },
    { icon: Server, label: "Data Centers", delay: 0.2 },
    { icon: Cloud, label: "Cloud Computing", delay: 0.4 },
    { icon: Cpu, label: "Virtualization", delay: 0.6 },
    { icon: Database, label: "Big Data", delay: 0.8 },
    { icon: Network, label: "LLMs", delay: 1.0 },
    { icon: Atom, label: "Quantum AI", delay: 1.2 },
    { icon: Zap, label: "Edge Computing", delay: 1.4 },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Central animated logo */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative w-32 h-32 mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-30" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white font-orbitron text-center mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          KAYAM AI PORTFOLIO
        </motion.h1>

        <motion.p
          className="text-lg text-cyan-200 font-light tracking-wider"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          ENTERING THE FUTURE OF AI
        </motion.p>
      </motion.div>

      {/* Tech elements floating around */}
      {techElements.map((item, index) => (
        <motion.div
          key={item.label}
          className="absolute text-cyan-300 opacity-70"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0
          }}
          animate={{ 
            y: [null, -20, 0],
            opacity: [0, 0.7, 0.7]
          }}
          transition={{ 
            duration: 2, 
            delay: item.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <item.icon className="w-8 h-8" />
        </motion.div>
      ))}

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-700 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "16rem" }}
        transition={{ duration: 4, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;