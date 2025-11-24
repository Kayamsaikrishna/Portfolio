import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Building, BookOpen, Trophy, Eye } from "lucide-react";

// Import certificate assets
import aimlWorkshop from "@/assets/Certificates/aiml 2 days workshop.jpg";
import llmNptel from "@/assets/Certificates/Large language model nptel.pdf";
import halHackathon from "@/assets/Certificates/hal hackathon.jpg";
import tenneco from "@/assets/Certificates/Tenneco.pdf";
import mitHackverse from "@/assets/Certificates/mit hackverse.jpg";
import figma from "@/assets/Certificates/FIGMA.pdf";
import fullStack from "@/assets/Certificates/FULL STACK CERTIFICATE.pdf";
import genAi from "@/assets/Certificates/GEN AI.pdf";
import dataScience from "@/assets/Certificates/data science.pdf";
import kashivInternship from "@/assets/Certificates/kashiv internship.jpg";
import mlPython from "@/assets/Certificates/ml with python.pdf";

// Map certificates to their assets
const certificateAssets = {
  "AI with Machine Learning Certification": aimlWorkshop,
  "Introduction to Large Language Models": llmNptel,
  "HAL AEROTHON'25 – Certificate of Participation": halHackathon,
  "Tenneco – AI & Engineering Systems Training": tenneco,
  "HackVerse’25 – Certificate of Participation": mitHackverse,
  "User Experience Design - Learn UI UX App Design with Figma": figma,
  "Full Stack Web Development With MERN STACK & GenAl 2025": fullStack,
  "Master in Generative Al (Artificial Intelligence) (Gen AI)": genAi,
  "Python 101 for Data Science": dataScience,
  "Kashiv Internship Completion": kashivInternship,
  "Machine Learning with Python": mlPython
};

const experiences = [
  {
    type: "freelance",
    title: "Freelance AI/Engineering Solutions Developer",
    company: "Self-Employed",
    period: "2024 - Present",
    description:
      "Worked on multiple freelancing projects in the engineering domain focusing on manufacturing, design, and quality. Delivered AI-powered applications including personalized AI assistants, industrial inspection systems, and data-driven decision-making tools.",
    skills: ["AI/ML", "Python", "Computer Vision", "Product Design", "Quality Engineering"],
    icon: Building,
    color: "accent"
  },
  {
    type: "internship",
    title: "AI-powered Systems Development",
    company: "Tenneco - Federal-Mogul Goetze (India)",
    period: "July 2025",
    description:
      "Worked on AI-powered systems for metallurgical microstructure analysis and coating thickness measurement using advanced image processing techniques.",
    skills: ["Computer Vision", "Image Processing", "Python", "AI Systems", "Manufacturing"],
    icon: Building,
    color: "primary"
  },
  {
    type: "internship",
    title: "Artificial Intelligence Internship",
    company: "Kaashiv Technologies",
    period: "September 2023",
    description:
      "Gained hands-on experience in AI/ML development, project implementation, and real-world application of machine learning algorithms.",
    skills: ["Machine Learning", "Deep Learning", "Python", "AI Development", "Project Management"],
    icon: Building,
    color: "secondary"
  }
];

const certifications = [
  {
    title: "AI with Machine Learning Certification",
    issuer: "Ethical Edufabrica & IISc Bangalore",
    date: "November 2023",
    color: "primary",
    description: "Completed intensive 2-day workshop on AI and Machine Learning fundamentals"
  },
  {
    title: "Introduction to Large Language Models",
    issuer: "NPTEL",
    date: "April 2025",
    color: "secondary",
    description: "NPTEL course on Large Language Models covering foundational concepts and applications"
  },
  {
    title: "HAL AEROTHON'25 – Certificate of Participation",
    issuer: "HAL & PES University",
    date: "July 2025",
    color: "accent",
    description:
      "Developed an AI-powered EO/IR video classification system for multi-domain surveillance (Ground, Air, Maritime). Focused on real-time threat detection using computer vision and deep learning (YOLO)."
  },
  {
    title: "Tenneco – AI & Engineering Systems Training",
    issuer: "Tenneco",
    date: "July 2025",
    color: "primary",
    description:
      "Specialized training in AI-powered systems for metallurgical microstructure analysis and coating thickness measurement using advanced image processing techniques."
  },
  {
    title: "HackVerse’25 – Certificate of Participation",
    issuer: "Manipal Academy of Higher Education (in collaboration with IBM SkillsBuild, AWS, MIT Bengaluru, ICICI Bank)",
    date: "August 2025",
    color: "accent",
    description:
      "Recognized for exceptional performance in HackVerse’25, demonstrating skills in technology problem-solving, innovation, and teamwork during a competitive event organized by Manipal Institute of Technology."
  },
  {
    title: "User Experience Design - Learn UI UX App Design with Figma",
    issuer: "Udemy - Instructor: Gihan Akalanka",
    date: "March 18, 2025",
    color: "primary",
    description: "Certificate of completion for User Experience Design course covering UI/UX app design with Figma. Course length: 7 total hours."
  },
  {
    title: "Full Stack Web Development With MERN STACK & GenAl 2025",
    issuer: "Udemy - Instructor: Masynctech Coding School",
    date: "Oct. 21, 2025",
    color: "secondary",
    description: "Certificate of completion for Full Stack Web Development course covering MERN STACK and Generative AI. Course length: 90 total hours."
  },
  {
    title: "Master in Generative Al (Artificial Intelligence) (Gen AI)",
    issuer: "Udemy - Instructor: Arun Singhal B-Tech, MBA (IIM-B), Unilever, J&J, Danone, IIMU, Cello",
    date: "Oct. 8, 2025",
    color: "accent",
    description: "Certificate of completion for Master in Generative AI course. Course length: 9 total hours."
  },
  {
    title: "Python 101 for Data Science",
    issuer: "Cognitive Class - IBM",
    date: "April 13, 2023",
    color: "primary",
    description: "Successfully completed and received a passing grade in Python 101 for Data Science (PY0101EN, provided by IBM) on cognitiveclass.ai. Powered by IBM Developer Skills Network."
  },
  {
    title: "Kashiv Internship Completion",
    issuer: "Kaashiv Technologies",
    date: "September 2023",
    color: "secondary",
    description: "Successfully completed internship program focusing on practical AI/ML implementation and project development."
  },
  {
    title: "Machine Learning with Python",
    issuer: "Cognitive Class - IBM",
    date: "September 9, 2023",
    color: "accent",
    description: "Successfully completed and received a passing grade in Machine Learning with Python (ML0101EN, provided by IBM) on cognitiveclass.ai. Powered by IBM Developer Skills Network."
  }
];

const achievements = [
  {
    title: "High Academic Performance",
    description: "CGPA 9.32/10 in AI/ML Specialization",
    icon: Trophy,
    color: "accent"
  },
  {
    title: "Self-Learning Initiative",
    description: "Completed 10+ online courses independently",
    icon: BookOpen,
    color: "primary"
  },
  {
    title: "Project Excellence",
    description: "Outstanding performance in AI/ML coursework",
    icon: Award,
    color: "secondary"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-4">
            <span className="gradient-text">Experience & Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and recognitions in AI/ML development
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-orbitron text-center mb-8 text-neural">
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <Card
                  key={index}
                  variant="neural"
                  className={`relative overflow-hidden animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline connector */}
                  {index < experiences.length - 1 && (
                    <div
                      className={`absolute left-8 bottom-0 w-px h-8 bg-${exp.color} translate-y-full`}
                    />
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 bg-${exp.color}/20 rounded-lg flex items-center justify-center border border-${exp.color}/30`}
                      >
                        <IconComponent className={`w-6 h-6 text-${exp.color}`} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl font-orbitron">{exp.title}</CardTitle>
                          <Badge
                            variant="outline"
                            className={`border-${exp.color}/30 text-${exp.color}`}
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                        <CardDescription
                          className={`text-${exp.color} font-medium text-base`}
                        >
                          {exp.company}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/30`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold font-orbitron text-center mb-8 text-secondary">
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  variant="cyber"
                  className={`p-6 hover:scale-105 transition-neural animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 bg-${cert.color}/20 rounded-lg flex items-center justify-center border border-${cert.color}/30 mt-1`}
                    >
                      <Award className={`w-5 h-5 text-${cert.color}`} />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold font-orbitron text-lg mb-1">{cert.title}</h4>
                      <p className={`text-${cert.color} font-medium mb-1`}>{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                      {cert.description && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {cert.description}
                        </p>
                      )}
                      {certificateAssets[cert.title] && (
                        <div className="mt-3">
                          <a 
                            href={certificateAssets[cert.title]} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:underline"
                          >
                            <Eye className="w-4 h-4 mr-1" />
                            View Certificate
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold font-orbitron text-center mb-8 text-accent">
              Key Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card
                    key={index}
                    variant="glass"
                    className={`p-6 hover:scale-105 transition-neural animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 bg-${achievement.color}/20 rounded-lg flex items-center justify-center border border-${achievement.color}/30 mt-1`}
                      >
                        <IconComponent className={`w-5 h-5 text-${achievement.color}`} />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-semibold font-orbitron text-lg mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
