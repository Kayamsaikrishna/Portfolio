import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Redirect to portfolio selector after splash screen
      navigate("/selector");
    }, 5000); // Show splash screen for 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      {/* Central animated logo with data flow */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Data center visualization */}
        <div className="relative w-48 h-48 mb-10">
          {/* Outer ring */}
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle ring */}
          <motion.div 
            className="absolute inset-4 rounded-full border border-blue-400 opacity-50"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner core */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
            <div className="w-16 h-16 rounded-lg bg-black/30 flex items-center justify-center border border-cyan-300">
              <div className="grid grid-cols-2 gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-cyan-300 rounded-full"
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Data flow particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                x: [0, Math.cos((i * 30 * Math.PI) / 180) * 80],
                y: [0, Math.sin((i * 30 * Math.PI) / 180) * 80],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white font-orbitron text-center mb-4 tracking-wider"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            KAYAM AI
          </span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 font-light tracking-widest mb-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          PORTFOLIO
        </motion.p>
        
        <motion.div 
          className="flex items-center text-cyan-300 text-sm mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>ENTERING THE FUTURE OF AI</span>
          <motion.div 
            className="ml-2 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }}
          />
        </motion.div>
      </motion.div>

      {/* Floating tech elements with realistic representations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cloud computing visualization */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex space-x-2">
                {[...Array(3)].map((_, j) => (
                  <div key={j} className="w-3 h-3 rounded-sm bg-white" />
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Neural network visualization */}
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-20"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {[...Array(8)].map((_, i) => (
              <circle
                key={i}
                cx={50 + 30 * Math.cos((i * 45 * Math.PI) / 180)}
                cy={50 + 30 * Math.sin((i * 45 * Math.PI) / 180)}
                r="4"
                fill="#22d3ee"
              />
            ))}
            {[...Array(8)].map((_, i) => (
              [...Array(8)].map((_, j) => (
                i !== j && Math.random() > 0.7 && (
                  <line
                    key={`${i}-${j}`}
                    x1={50 + 30 * Math.cos((i * 45 * Math.PI) / 180)}
                    y1={50 + 30 * Math.sin((i * 45 * Math.PI) / 180)}
                    x2={50 + 30 * Math.cos((j * 45 * Math.PI) / 180)}
                    y2={50 + 30 * Math.sin((j * 45 * Math.PI) / 180)}
                    stroke="#22d3ee"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                )
              ))
            ))}
          </svg>
        </motion.div>

        {/* Data flow visualization */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-32 h-1 bg-cyan-400 rounded-full opacity-30"
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
        />
      </div>

      {/* Progress bar with tech style */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80 h-1.5 bg-gray-800 rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "20rem" }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default SplashScreen;