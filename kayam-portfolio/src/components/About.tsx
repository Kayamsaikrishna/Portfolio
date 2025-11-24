import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aiBrain from "@/assets/ai-brain.jpg";

// Skills Data with Real CDN Icons and Official Website Links
const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", website: "https://www.python.org/" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", website: "https://en.wikipedia.org/wiki/C_(programming_language)" },
      { name: "SQL", logo: "https://logodix.com/logo/542135.jpg", website: "https://www.w3schools.com/sql/" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", website: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", website: "https://www.typescriptlang.org/" },
    ],
    color: "primary"
  },
  {
    category: "AI/ML Frameworks",
    items: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", website: "https://www.tensorflow.org/" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", website: "https://pytorch.org/" },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg", website: "https://keras.io/" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", website: "https://scikit-learn.org/" },
      { name: "OpenCV", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", website: "https://opencv.org/" },
    ],
    color: "secondary"
  },
  {
    category: "Data Science",
    items: [
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", website: "https://pandas.pydata.org/" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", website: "https://numpy.org/" },
      { name: "Matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg", website: "https://matplotlib.org/" },
      { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", website: "https://seaborn.pydata.org/" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg", website: "https://jupyter.org/" },
    ],
    color: "accent"
  },
  {
    category: "Specializations",
    items: [
      { name: "Computer Vision", logo: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg", website: "https://opencv.org/" },
      { name: "NLP", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", website: "https://huggingface.co/" },
      { name: "Deep Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", website: "https://pytorch.org/" },
      { name: "Neural Networks", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", website: "https://www.tensorflow.org/" },
    ],
    color: "primary"
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git/GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", website: "https://github.com/" },
      { name: "Google Colab", logo: "https://colab.research.google.com/img/colab_favicon_256px.png", website: "https://colab.research.google.com/" },
      { name: "Streamlit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg", website: "https://streamlit.io/" },
      { name: "Flask", logo: "https://www.skillmentors.in/assets/img/courses/flask.png", website: "https://flask.palletsprojects.com/" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", website: "https://www.docker.com/" },
    ],
    color: "secondary"
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", website: "https://www.mysql.com/" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", website: "https://www.postgresql.org/" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", website: "https://www.mongodb.com/" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", website: "https://www.sqlite.org/" },
      { name: "Qdrant", logo: "https://qdrant.tech/images/logo_with_text.png", website: "https://qdrant.tech/" },
    ],
    color: "accent"
  }
];

const About = () => {
  const handleSkillClick = (website) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by code, I'm shaping the future of AI
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
            {/* Professional Summary */}
            <div className="space-y-6">
              <Card variant="neural" className="p-8">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-neural">Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    I am an AI/ML engineering student with hands-on experience in both academic and real-world projects. 
                    Over the past year, I have worked as a freelancer on engineering projects, focusing on manufacturing, 
                    design, and quality improvement. My work has included creating AI-powered applications and tools, such as 
                    a personalized AI assistant using Large Language Models (LLMs), and developing solutions to streamline 
                    processes and enhance decision-making.
                  </p>
                  <br />
                  <p className="text-muted-foreground leading-relaxed">
                    My technical skills cover Python, TensorFlow, PyTorch, Keras, and other modern AI and data science 
                    frameworks. I enjoy combining AI with engineering to create practical solutions that save time, 
                    reduce errors, and improve efficiency. I am eager to contribute to innovative projects, learn from 
                    industry experts, and collaborate with teams that share a vision for pushing technology forward.
                  </p>
                </CardContent>
              </Card>
            
            {/* Education */}
            <Card variant="glow" className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-secondary">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold font-orbitron text-lg">B.Tech in CSE - AI & ML</h4>
                  <p className="text-accent font-medium">CMR University, Bangalore</p>
                  <p className="text-sm text-muted-foreground">2022 - 2026 | CGPA: 9.32/10</p>
                </div>
                <div className="border-l-2 border-secondary pl-4">
                  <h4 className="font-semibold font-orbitron">Higher Secondary Education</h4>
                  <p className="text-accent font-medium">Vidya Soudha PU College</p>
                  <p className="text-sm text-muted-foreground">2020 - 2022 | 92%</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* AI Brain Visual */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border border-primary/30 shadow-neural hover:shadow-glow transition-neural">
                <img 
                  src={aiBrain} 
                  alt="AI Neural Brain" 
                  className="w-full h-full object-cover hover:scale-110 transition-slow"
                />
                
                {/* Data Streams */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-circuit-flow" />
                  <div className="absolute bottom-1/4 right-0 w-full h-px bg-gradient-to-l from-transparent via-secondary to-transparent animate-circuit-flow" style={{ animationDelay: '1s' }} />
                  <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent to-transparent animate-circuit-flow" style={{ animationDelay: '2s' }} />
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-3 border border-primary">
                <div className="text-primary-foreground font-orbitron font-bold">9.32</div>
                <div className="text-xs text-primary-foreground/80">CGPA</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-secondary/90 backdrop-blur-sm rounded-lg p-3 border border-secondary">
                <div className="text-secondary-foreground font-orbitron font-bold">10+</div>
                <div className="text-xs text-secondary-foreground/80">Projects</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold font-orbitron text-center gradient-cyber">
            Technical Arsenal
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Click on any technology to visit its official website
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillSet, index) => (
              <Card 
                key={skillSet.category} 
                variant="glass" 
                className={`p-6 hover:scale-105 transition-neural animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <img 
                      src={skillSet.items[0].logo} 
                      alt={skillSet.category} 
                      className="w-6 h-6"
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M9.88 9.88a3 3 0 1 0 4.24 4.24'%3E%3C/path%3E%3Cpath d='m2 2 20 20'%3E%3C/path%3E%3Cpath d='M8.5 8.5c-.84-.84-2.15-.84-2.99 0a2.12 2.12 0 0 0 0 3c.84.84 2.15.84 2.99 0L12 8.01'%3E%3C/path%3E%3Cpath d='M12 8.01 8.5 4.5c-.84-.84-2.15-.84-2.99 0a2.12 2.12 0 0 0 0 3c.84.84 2.15.84 2.99 0l3.51-3.51A3 3 0 0 1 12 8.01Z'%3E%3C/path%3E%3C/svg%3E";
                      }}
                    />
                    <span className="font-orbitron">{skillSet.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill) => (
                      <Badge 
                        key={skill.name} 
                        variant="secondary" 
                        className={`flex items-center gap-2 bg-${skillSet.color}/10 text-${skillSet.color} border-${skillSet.color}/30 hover:bg-${skillSet.color}/20 transition-colors cursor-pointer hover:scale-105 transform duration-200`}
                        onClick={() => handleSkillClick(skill.website)}
                        title={`Visit ${skill.name} official website`}
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name} 
                          className="w-4 h-4"
                          onError={(e) => {
                            e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='13 2 3 14 12 14 11 22 21 10 12 10 13 2'%3E%3C/polygon%3E%3C/svg%3E";
                          }}
                        />
                        {skill.name}
                        <svg 
                          className="w-3 h-3 opacity-70" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;