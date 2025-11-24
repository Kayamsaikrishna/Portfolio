import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react"; // keep for the documentation button icon

// Helper to create tech objects
const techItem = (name: string, logo: string, link: string) => ({ name, logo, link });

// Projects data (all original projects restored)
const projects = [
  {
    title: "NeuroGenius",
    subtitle: "Personalized AI Assistant",
    description:
      "Custom chatbot using Ollama models with personalized response generation, prompt engineering techniques, and advanced context management.",
    image: "https://techreport.com/wp-content/uploads/2024/02/Cool-Chatbot-Statistics-2024-scaled.jpg",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("Ollama API", "https://storage.googleapis.com/zenn-user-upload/topics/9d57e07ee9.png", "https://ollama.com/"),
      techItem("Flask", "https://www.skillmentors.in/assets/img/courses/flask.png", "https://flask.palletsprojects.com/"),
      techItem("SQLite", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", "https://www.sqlite.org/"),
      techItem("Tkinter", "https://tse4.mm.bing.net/th/id/OIP.3YibWVqYp29pyRIwfZjOaAHaIL?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", "https://docs.python.org/3/library/tkinter.html")
    ],
    iconUrl: "https://freesvg.org/img/1538298822.png",
    colorCode: "#8B5CF6",
    date: "Jul 2023",
    features: ["Custom response generation", "Context management", "Desktop & web interface", "Session management"],
    status: "Completed"
  },
  {
    title: "NexaBot",
    subtitle: "Multi-Functional Humanoid Robot",
    description:
      "Versatile humanoid robot with advanced movement control using ESP32, featuring WiFi/Bluetooth connectivity and mobile app control.",
    image: "https://techinspection.net/wp-content/uploads/2023/05/Artificial-Intelligence-1-1024x576.jpg",
    tech: [
      techItem("ESP32", "https://tse4.mm.bing.net/th/id/OIP.JYC7p0wmFvztSOuemRD7gQHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", "https://www.espressif.com/en/products/socs/esp32"),
      techItem("MIT App Inventor", "https://appinventor.mit.edu/images/logo.png", "https://appinventor.mit.edu/"),
      techItem("Arduino IDE", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg", "https://www.arduino.cc/en/software"),
      techItem("C++", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", "https://isocpp.org/"),
      techItem("Wi-Fi", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/WiFi_Logo.svg/500px-WiFi_Logo.svg.png", "https://en.wikipedia.org/wiki/Wi-Fi")
    ],
    iconUrl: "https://img.freepik.com/premium-photo/cute-robot_1046684-473.jpg",
    colorCode: "#3B82F6",
    date: "Mar 2023",
    features: ["Wireless control", "Mobile app interface", "Servo motor control", "Sensor integration"],
    status: "Completed"
  },
  {
    title: "Plant Disease Detection",
    subtitle: "Computer Vision ML System",
    description:
      "Machine learning system using image processing to detect plant diseases, helping farmers identify problems early with high accuracy.",
    image: "https://www.letsnurture.com/wp-content/uploads/2021/02/Plant-disease-classifier-with-ai-blog-banner.jpg",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", "https://www.tensorflow.org/"),
      techItem("OpenCV", "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", "https://opencv.org/"),
      techItem("CNN", "https://cdn-icons-png.flaticon.com/512/2103/2103626.png", "https://en.wikipedia.org/wiki/Convolutional_neural_network"),
      techItem("Image Processing", "https://thf.bing.com/th/id/OIP.SxCXUznwD-tbBp-6hpsPSAHaHa?w=174&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3", "https://en.wikipedia.org/wiki/Digital_image_processing")
    ],
    iconUrl: "https://thumbnail.imgbin.com/25/9/9/imgbin-biology-ecology-school-lesson-class-school-axLTMTNv5gJ4uSmkcchTZtHWj_t.jpg",
    colorCode: "#22C55E",
    date: "2023",
    features: ["Real-time detection", "High accuracy classification", "Multiple plant species", "Early disease identification"],
    status: "Completed"
  },
  {
    title: "InfoMind",
    subtitle: "Private AI Document Search & Q&A",
    description:
      "Modern RAG system for secure document search with advanced chunking, embedding, vector search, and PyQt6 interface using Qdrant.",
    image: "https://assets-global.website-files.com/64be86eaa29fa71f24b00685/6627961053c159e9c390ffef_What%20is%20Document%20Analysis_.png",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("PyQt6", "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg", "https://www.riverbankcomputing.com/software/pyqt/"),
      techItem("Qdrant", "https://images.seeklogo.com/logo-png/49/1/qdrant-icon-logo-png_seeklogo-497960.png", "https://qdrant.tech/"),
      techItem("RAG", "https://tse1.mm.bing.net/th/id/OIP.dIiAlq1gr59JEXq0qq8sjgHaHa?cb=thfc1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3", "https://www.pinecone.io/learn/retrieval-augmented-generation/"),
      techItem("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "https://www.docker.com/")
    ],
    iconUrl: "https://tse2.mm.bing.net/th/id/OIP.GuSstbGOtPyx7iNWXL8gEAHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    colorCode: "#06B6D4",
    date: "2024",
    features: ["Private & secure", "Vector search", "Streaming responses", "Docker deployment"],
    status: "Completed"
  },
  {
    title: "FinAnalytics",
    subtitle: "Financial Data Analysis Dashboard",
    description:
      "Full-stack financial analysis platform with FastAPI backend, PostgreSQL database, and React frontend for comprehensive data insights.",
    image: "https://user-images.githubusercontent.com/97405158/192713680-0066f3a3-43ca-4b96-aeff-b5c753a4282c.jpg",
    tech: [
      techItem("FastAPI", "https://avatars.githubusercontent.com/u/70982553?s=200&v=4", "https://fastapi.tiangolo.com/"),
      techItem("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "https://www.postgresql.org/"),
      techItem("React", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", "https://react.dev/"),
      techItem("Docker", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", "https://www.docker.com/"),
      techItem("Vite", "https://vitejs.dev/logo.svg", "https://vitejs.dev/")
    ],
    iconUrl: "https://static.vecteezy.com/system/resources/previews/026/513/630/non_2x/data-analytics-logo-design-growth-arrow-logo-design-for-data-finance-investment-vector.jpg",
    colorCode: "#2563EB",
    date: "2024 - Present",
    features: ["User authentication", "Company data integration", "AI-based insights", "Real-time analytics"],
    status: "Completed"
  },
  {
    title: "EO IR Sensor Video Image Classification & Identification System",
    subtitle: "Advanced Defense AI System",
    description:
      "AI-powered EO/IR video and image processing system for real-time classification and identification of targets in defense applications.",
    image: "https://www.unmannedsystemstechnology.com/wp-content/uploads/2020/05/Octopus-ISR-Systems-Epsilon-180-payload.jpg",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("YOLOv8", "https://github.com/ultralytics/assets/raw/main/logo/Ultralytics_Logotype_Original.svg", "https://docs.ultralytics.com/"),
      techItem("TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", "https://www.tensorflow.org/"),
      techItem("OpenCV", "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", "https://opencv.org/"),
      techItem("PyQt6", "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg", "https://riverbankcomputing.com/software/pyqt/")
    ],
    iconUrl: "https://thf.bing.com/th/id/OIP.kgs-Jk4R5mID_CsSxWqN1wHaHa?w=174&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3",
    colorCode: "#F97316",
    date: "2025",
    features: ["Real-time video analysis", "Target classification", "High accuracy object detection", "Infrared & optical integration"],
    status: "Completed"
  },
  {
    title: "StockyMob",
    subtitle: "Stock Market Analysis App (iOS & Android)",
    description:
      "Cross-platform mobile app for stock market analysis with live market data, price alerts, and AI-powered stock recommendations.",
    image: "https://tse1.mm.bing.net/th/id/OIP.VfJDUFRoKffSJ8-lfS-8cgHaEK?cb=thfc1&w=4074&h=2292&rs=1&pid=ImgDetMain&o=7&rm=3",
    tech: [
      techItem("Flutter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", "https://flutter.dev/"),
      techItem("Firebase", "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png", "https://firebase.google.com/"),
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("REST API", "https://tse4.mm.bing.net/th/id/OIP.L7QG86M28o5y1MmDDjTyCQHaHa?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3", "https://restfulapi.net/")
    ],
    iconUrl: "https://health-infobase.canada.ca/src/img/trends1.png",
    colorCode: "#14B8A6",
    date: "2025",
    features: ["iOS & Android support", "Real-time stock data", "Custom alerts", "AI-based predictions"],
    status: "In Development"
  },
  {
    title: "Sustainable Shopping Assistant",
    subtitle: "Eco-Friendly Product Recommendation System",
    description:
      "Cross-platform recommendation system that searches Amazon, Flipkart, Myntra, and Zepto for sustainable products with real-time price comparison and sustainability metrics.",
    image: "https://tse3.mm.bing.net/th/id/OIP.Y_7oj6LH2wssKa9J_ovM_gHaDt?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("React Native", "https://reactnative.dev/img/header_logo.svg", "https://reactnative.dev/"),
      techItem("Web Scraping", "https://thf.bing.com/th/id/OIP.wVslUmtUZlthM_d8T8vpKgHaHa?w=161&h=180&c=7&r=0&o=7&cb=thfc1&pid=1.7&rm=3", "https://scrapy.org/"),
      techItem("NLP", "https://cdn-icons-png.flaticon.com/512/152/152843.png", "https://en.wikipedia.org/wiki/Natural_language_processing")
    ],
    iconUrl: "https://static.vecteezy.com/system/resources/thumbnails/032/497/135/small_2x/3d-render-illustration-love-mother-earth-day-icon-plant-free-png.png",
    colorCode: "#84CC16",
    date: "May 2025 - Present",
    features: ["Multi-site product search", "Sustainability metrics", "Real-time price comparison", "Customer review analysis"],
    status: "Completed"
  },
  {
    title: "AI-Powered Metallurgical Microstructure Analysis System",
    subtitle: "Industrial AI Quality Control",
    description:
      "Automated metallurgical analysis tool for microstructure classification and defect detection in metal samples.",
    image: "https://static.wixstatic.com/media/2bdd1b_4b45dc63d464492fbecedd91f891418c~mv2.jpg/v1/fill/w_920,h_340,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2bdd1b_4b45dc63d464492fbecedd91f891418c~mv2.jpg",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("OpenCV", "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", "https://opencv.org/"),
      techItem("TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", "https://www.tensorflow.org/"),
      techItem("CNN", "https://cdn-icons-png.flaticon.com/512/2103/2103626.png", "https://en.wikipedia.org/wiki/Convolutional_neural_network"),
      techItem("Microscopy", "https://cdn-icons-png.flaticon.com/512/1720/1720786.png", "https://en.wikipedia.org/wiki/Microscopy")
    ],
    iconUrl: "https://cdn.vectorstock.com/i/500p/70/99/metallurgy-logo-steel-furnace-symbol-melting-vector-15097099.jpg",
    colorCode: "#6366F1",
    date: "2025",
    features: ["Automated microstructure classification", "Defect detection", "High-resolution image processing", "Industrial integration"],
    status: "Completed"
  },
  {
    title: "AI-Powered Coating Layer Thickness Measurement System",
    subtitle: "Industrial AI Measurement Tool",
    description:
      "AI-driven system for precise measurement of coating layer thickness using image analysis.",
    image: "https://ai2-s2-public.s3.amazonaws.com/figures/2017-08-08/8496856ca9ca23e1ea4daa0969eac5cf49c5ad24/5-Figure1-1.png",
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("OpenCV", "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", "https://opencv.org/"),
      techItem("Deep Learning", "https://cdn-icons-png.flaticon.com/512/1808/1808260.png", "https://en.wikipedia.org/wiki/Deep_learning"),
      techItem("Industrial Cameras", "https://cdn-icons-png.flaticon.com/512/1048/1048943.png", "https://en.wikipedia.org/wiki/Machine_vision")
    ],
    iconUrl: "https://static.vecteezy.com/system/resources/previews/014/889/986/large_2x/microscope-logo-microscope-logo-design-illustration-vector.jpg",
    colorCode: "#F59E0B",
    date: "2025",
    features: ["Non-contact measurement", "High precision", "Multiple coating materials", "Real-time processing"],
    status: "Completed"
  },
  {
    title: "AI Story Generator",
    subtitle: "LangChain + Django Creative Storytelling",
    description:
      "Django web application that uses LangChain to convert text or audio prompts into a short story, detailed character & background descriptions, and two generated images (character + background) which are combined into a single scene using Stable Diffusion (open-source) and PIL/OpenCV for composition.",
    image: "https://theaipedia.io/wp-content/uploads/2023/06/Best-AI-Story-Generators.jpg", // add a screenshot in your assets folder
    tech: [
      techItem("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", "https://www.python.org/"),
      techItem("Django", "https://tse2.mm.bing.net/th/id/OIP.e6_fw-AVgzPZiUzNcGo2fwHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", "https://www.djangoproject.com/"),
      techItem("LangChain", "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/langchain3.png", "https://python.langchain.com/"),
      techItem("Hugging Face", "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png", "https://huggingface.co/"),
      techItem("PyTorch", "https://www.clipartmax.com/png/middle/476-4769276_blow-torch-clip-art.png", "https://pytorch.org/"),
      techItem("diffusers", "https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png", "https://github.com/huggingface/diffusers"),
      techItem("Stable Diffusion", "https://th.bing.com/th/id/OIP.rM89krdxGGglRyWGF53FDQAAAA?w=175&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3", "https://github.com/CompVis/stable-diffusion"),
      techItem("PIL / OpenCV", "https://codersdaily.in/media/courses/OpenCV_logo.png", "https://pillow.readthedocs.io/"),
      techItem("SpeechRecognition", "https://tse4.mm.bing.net/th/id/OIP.aVCfDA5ZY2ofeFc-47ev-AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", "https://pypi.org/project/SpeechRecognition/")
    ],
    iconUrl: "https://tse3.mm.bing.net/th/id/OIP.h-FFB7A9jXYwq3WsfmaQagHaEw?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", // small project icon
    colorCode: "#EF4444",
    date: "Aug 2025",
    features: [
      "Text or audio input (transcription)",
      "Multi-chain LangChain orchestration (story, character, background)",
      "Local Stable Diffusion image generation (character + background)",
      "Image composition with gradient blending (PIL/OpenCV)",
      "Admin interface to review generations + metadata",
      "Fallbacks, logging and robust error handling"
    ],
    status: "Completed"
  },
  {
    title: "LinkedIn AI Agent",
    subtitle: "Autonomous Personal Branding Agent for LinkedIn",
    description:
      "An end-to-end AI agent that analyzes a user’s LinkedIn profile, researches industry trends, generates multi-format content (posts, articles, carousels), schedules & publishes automatically via the LinkedIn API, and provides performance analytics with optimization suggestions.",
    image: "https://aigptjournal.com/wp-content/uploads/2024/05/Designer-60.png", // optional: add an image to public/assets or replace with remote URL
    tech: [
      techItem("React + Vite", "https://vitejs.dev/logo.svg", "https://vitejs.dev/"),
      techItem("Node.js / Express", "https://nodejs.org/static/images/logo.svg", "https://nodejs.org/"),
      techItem("Supabase", "https://tse2.mm.bing.net/th/id/OIP.wiWMLZ1gAGJiE-7QvueH0gHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", "https://supabase.com/"),
      techItem("OpenAI / Gemini", "https://tse3.mm.bing.net/th/id/OIP.vavoc8cDEEF29H7bX8kxjQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3", "https://platform.openai.com/"),
      techItem("LangChain", "https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/langchain3.png", "https://python.langchain.com/"),
      techItem("PostgreSQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", "https://www.postgresql.org/"),
      techItem("Redis", "https://www.ivaylopavlov.com/wp-content/uploads/2020/04/1Hires_redis_logo.png", "https://redis.io/"),
      techItem("Tailwind CSS", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png", "https://tailwindcss.com/"),
      techItem("Docker", "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png", "https://www.docker.com/")
    ],
    iconUrl: "https://img.freepik.com/premium-photo/modern-sleek-linkedin-icon-illustration-with-gradient-sharp-lines_1320055-2930.jpg", // optional small icon in public/assets
    colorCode: "#0EA5A4",
    date: "Aug 2025 - Present",
    features: [
      "LinkedIn OAuth & profile analysis",
      "Automated industry trend research",
      "Multi-format AI content generation (text, article, carousel)",
      "Content calendar + scheduling and auto-posting via LinkedIn API",
      "Engagement analytics, A/B testing, and optimization suggestions",
      "Hashtag research and brand-voice consistency",
      "AI-powered image generation for posts",
      "Competitor analysis and multi-language support"
    ],
    status: "In Development"
  }
];

const Projects: React.FC = () => {
  const handleDocsClick = async (title: string) => {
    // Convert title to match actual file names in documentation folder
    let fileName = title;
    
    // Handle special cases for projects with specific file naming
    if (title.includes("EO/IR")) {
      fileName = "EO_IR_Sensor_Video_Image_Classification_&_Identification_System.pdf";
    } else if (title === "AI-Powered Metallurgical Microstructure Analysis System") {
      fileName = "AI-Powered_Metallurgical_Microstructure_Analysis_System.pdf";
    } else if (title === "AI-Powered Coating Layer Thickness Measurement System") {
      fileName = "AI-Powered_Coating_Layer_Thickness_Measurement_System.pdf";
    } else {
      // For other projects, replace spaces with underscores and keep other characters as is
      fileName = `${fileName.replace(/\s+/g, "_")}.pdf`;
    }
    
    // Use the correct path for production
    const filePath = `/assets/projects-documentation-pdf/${fileName}`;
    
    try {
      const res = await fetch(filePath, { method: "HEAD" });
      if (res.ok) {
        // Open the documentation in a new tab
        window.open(filePath, '_blank');
      } else {
        throw new Error("Documentation not found");
      }
    } catch {
      // Provide a more informative message
      alert(`📄 Documentation for "${title}" is currently unavailable. Please check back later or contact me directly for more information.`);
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions built with cutting-edge AI and machine learning technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <Card
              key={p.title}
              variant="neural"
              className="group hover:scale-105 transition-neural animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <Badge style={{ backgroundColor: p.colorCode, color: "#fff", border: `1px solid ${p.colorCode}` }}>
                    {p.status}
                  </Badge>
                </div>
                {/* Icon */}
                <div
                  className="absolute bottom-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center backdrop-blur-sm border"
                  style={{ backgroundColor: p.colorCode, borderColor: p.colorCode }}
                >
                  <img src={p.iconUrl} alt={`${p.title} icon`} className="w-6 h-6" />
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-orbitron">{p.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{p.date}</span>
                </div>
                <CardDescription style={{ color: p.colorCode }}>{p.subtitle}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold font-orbitron">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {p.features && p.features.map((f: string, idx: number) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ backgroundColor: p.colorCode }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tech && p.tech.map((tech) => (
                    <a
                      key={tech.name}
                      href={tech.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 border rounded-md hover:opacity-80 transition"
                      style={{ borderColor: p.colorCode }}
                    >
                      <img src={tech.logo} alt={tech.name} className="w-4 h-4" />
                      <span className="text-xs">{tech.name}</span>
                    </a>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="glow" className="flex-1" onClick={() => handleDocsClick(p.title)}>
                    <FileText className="w-4 h-4" />
                    Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
