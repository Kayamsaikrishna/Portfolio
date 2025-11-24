import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Monitor, Box, ArrowRight, Brain, Cpu } from "lucide-react";

const PortfolioSelector = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white font-orbitron mb-4">
            CHOOSE YOUR <span className="text-cyan-400">PORTFOLIO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select your preferred experience to explore my work and capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 2D Portfolio Card */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden hover:border-cyan-500 transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/2d" className="block h-full">
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">2D Portfolio</h2>
                <p className="text-gray-300 mb-6 flex-grow">
                  Traditional web-based portfolio with clean design and comprehensive project showcases. 
                  Perfect for detailed information and easy navigation.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm">Tailwind</span>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-center text-cyan-400 font-medium">
                    <span>Enter 2D Experience</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* 3D Portfolio Card */}
          <motion.div
            className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300"
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <div className="w-6 h-6 text-gray-400">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">3D Portfolio</h2>
              <p className="text-gray-300 mb-6 flex-grow">
                Immersive 3D experience with virtual environments and interactive visualizations. 
                Coming soon with cutting-edge web technologies.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">Three.js</span>
                <span className="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm">WebGL</span>
                <span className="px-3 py-1 bg-violet-900/50 text-violet-300 rounded-full text-sm">WebXR</span>
              </div>
              
              <div className="mt-auto">
                <div className="flex items-center text-purple-400 font-medium">
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-400 flex items-center justify-center">
            <Brain className="w-4 h-4 mr-2 text-cyan-400" />
            AI-powered portfolio experiences
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioSelector;