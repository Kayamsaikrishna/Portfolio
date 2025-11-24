import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen = () => {
  const nav = useNavigate();
  const [progress, setProgress] = useState(0);

  /* 1. Progressive loader 0→100 in 5 s */
  useEffect(() => {
    const id = setInterval(() => setProgress(p => (p >= 100 ? 100 : p + 2)), 100);
    return () => clearInterval(id);
  }, []);

  /* 2. Auto-route when complete */
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => nav('/selector'), 700);
    }
  }, [progress, nav]);

  // AI/ML themed SVG icons
  const AIIcons = () => (
    <>
      {/* Neural Network */}
      <svg className="absolute top-1/4 left-1/4 w-16 h-16 opacity-20" viewBox="0 0 100 100">
        {[...Array(6)].map((_, i) => (
          <circle
            key={`node-${i}`}
            cx={30 + (i % 3) * 20}
            cy={30 + Math.floor(i / 3) * 40}
            r="6"
            fill="#22d3ee"
          />
        ))}
        {[...Array(6)].map((_, i) => (
          [...Array(6)].map((_, j) => (
            i !== j && Math.abs(i - j) <= 2 && (
              <line
                key={`conn-${i}-${j}`}
                x1={30 + (i % 3) * 20}
                y1={30 + Math.floor(i / 3) * 40}
                x2={30 + (j % 3) * 20}
                y2={30 + Math.floor(j / 3) * 40}
                stroke="#22d3ee"
                strokeWidth="1"
                opacity="0.4"
              />
            )
          ))
        ))}
      </svg>

      {/* Data Flow */}
      <svg className="absolute bottom-1/3 right-1/4 w-20 h-20 opacity-20" viewBox="0 0 100 100">
        <path
          d="M20,50 Q40,30 60,50 T100,50"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="3"
          strokeDasharray="5,5"
        />
        <circle cx="20" cy="50" r="5" fill="#a78bfa" />
        <circle cx="60" cy="50" r="5" fill="#a78bfa" />
        <circle cx="100" cy="50" r="5" fill="#a78bfa" />
        <motion.circle
          cx="20"
          cy="50"
          r="3"
          fill="#fff"
          animate={{
            cx: [20, 60, 100],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* CPU/GPU Chips */}
      <svg className="absolute top-1/3 right-1/3 w-12 h-12 opacity-20" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="5" fill="none" stroke="#60a5fa" strokeWidth="2" />
        <rect x="20" y="20" width="60" height="60" rx="3" fill="none" stroke="#60a5fa" strokeWidth="1" />
        {[...Array(4)].map((_, i) => (
          [...Array(4)].map((_, j) => (
            <rect
              key={`core-${i}-${j}`}
              x={25 + j * 15}
              y={25 + i * 15}
              width="8"
              height="8"
              rx="1"
              fill="#60a5fa"
              opacity="0.7"
            />
          ))
        ))}
      </svg>

      {/* Cloud Computing */}
      <svg className="absolute top-1/5 right-1/5 w-24 h-16 opacity-20" viewBox="0 0 100 60">
        <path d="M20,40 Q30,20 50,30 Q70,10 80,30 Q90,35 85,45 Q75,55 50,50 Q30,55 20,40" fill="#c084fc" />
        <motion.circle
          cx="30"
          cy="35"
          r="2"
          fill="#fff"
          animate={{
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.circle
          cx="50"
          cy="30"
          r="2"
          fill="#fff"
          animate={{
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.circle
          cx="70"
          cy="35"
          r="2"
          fill="#fff"
          animate={{
            opacity: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 1
          }}
        />
      </svg>

      {/* Quantum Particles */}
      <svg className="absolute bottom-1/4 left-1/5 w-16 h-16 opacity-20" viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2"
          animate={{
            r: [8, 12, 8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="1"
          animate={{
            r: [15, 25, 15],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <circle cx="30" cy="30" r="3" fill="#fbbf24" opacity="0.7" />
        <circle cx="70" cy="30" r="3" fill="#fbbf24" opacity="0.7" />
        <circle cx="30" cy="70" r="3" fill="#fbbf24" opacity="0.7" />
        <circle cx="70" cy="70" r="3" fill="#fbbf24" opacity="0.7" />
      </svg>
    </>
  );

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -30, 0],
              opacity: [0, 0.7, 0],
              x: [null, (Math.random() - 0.5) * 100]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}

        {/* AI/ML themed SVG visuals */}
        <AIIcons />

        {/* --------------  CENTER PIECE  -------------- */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          {/* Central glowing core */}
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            {/* Outer glow */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-30"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            
            {/* Main core */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center border-2 border-cyan-300/50">
                {/* Inner pulsating circle */}
                <motion.div 
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                />
              </div>
            </div>
            
            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-cyan-300"
                animate={{
                  x: Math.cos((i * 45 * Math.PI) / 180) * 80,
                  y: Math.sin((i * 45 * Math.PI) / 180) * 80,
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </motion.div>

          {/* Kinetic title */}
          <motion.h1
            className="mt-6 font-black text-5xl md:text-7xl tracking-tighter"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
              KAYAM AI
            </span>
          </motion.h1>

          {/* Subtitle with glitch caret */}
          <motion.div
            className="mt-2 text-gray-300 text-xl md:text-2xl font-light tracking-widest flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>PORTFOLIO</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.9 }}
            >
              _
            </motion.span>
          </motion.div>

          {/* Positive vibe message */}
          <motion.div 
            className="mt-8 text-cyan-200 text-sm tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <span>TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS</span>
          </motion.div>
        </div>

        {/* --------------  PROGRESS  -------------- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-xl z-10">
          <div className="h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            />
          </div>
          <motion.p
            className="text-center text-xs text-white/60 mt-2 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress < 100 ? 'INITIALISING QUANTUM CORE' : 'WELCOME TO THE FUTURE'}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default SplashScreen;