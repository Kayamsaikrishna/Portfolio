import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kayamsaikrishna@gmail.com",
    href: "mailto:kayamsaikrishna@gmail.com",
    color: "primary"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8088993690",
    href: "tel:+918088993690",
    color: "secondary"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: "https://www.google.com/maps/place/Bangalore,+Karnataka", // Google Maps link
    color: "accent"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kayamsaikrishna", // Replace with actual GitHub link
    color: "primary"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kayam-sai-krishna-675792326", // ✅ Added https://
    color: "secondary"
  }
];

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = async (data: any) => {
    try {
      // EmailJS service configuration - REPLACE THE PLACEHOLDERS BELOW WITH YOUR ACTUAL EMAILJS CREDENTIALS
      // Service ID: service_5d1ij2k (already connected to your Gmail)
      // Template ID: Replace with your actual EmailJS template ID
      // User ID: Replace with your actual EmailJS user ID
      
      const serviceID = 'service_5d1ij2k'; // Your Gmail service ID
      const templateID = 'template_k6sm6fi'; // Your EmailJS template ID
      const userID = 'imhdlehfW-DXAyJW7'; // Your EmailJS user ID

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      // Show success message
      toast.success('Message sent successfully!', {
        description: 'I will get back to you soon.',
      });
      
      // Reset form
      reset();
    } catch (error: any) {
      // Show error message with more details
      let errorMessage = 'Please try again later or contact me directly via email.';
      if (error.text) {
        errorMessage += ` Error: ${error.text}`;
      }
      
      toast.error('Failed to send message', {
        description: errorMessage,
      });
      
      // Log detailed error information
      console.error('EmailJS error:', error);
      if (error.text) {
        console.error('Error details:', error.text);
      }
      if (error.status) {
        console.error('Error status:', error.status);
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-orbitron mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative AI/ML projects? Let's build the future together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card variant="neural" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-orbitron text-neural flex items-center gap-3">
                  <MessageSquare className="w-7 h-7" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, innovative projects,
                  or collaborate on cutting-edge AI/ML solutions. Whether you're looking
                  for a passionate developer or want to explore ideas, I'd love to hear from you.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-4 rounded-lg border border-${contact.color}/20 bg-${contact.color}/5 hover:bg-${contact.color}/10 hover:border-${contact.color}/40 transition-neural group`}
                      >
                        <div
                          className={`w-12 h-12 bg-${contact.color}/20 rounded-lg flex items-center justify-center border border-${contact.color}/30 group-hover:scale-110 transition-transform`}
                        >
                          <IconComponent className={`w-6 h-6 text-${contact.color}`} />
                        </div>
                        <div>
                          <p className="font-semibold font-orbitron">{contact.label}</p>
                          <p className={`text-${contact.color} font-medium`}>{contact.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-${social.color}/20 rounded-lg flex items-center justify-center border border-${social.color}/30 hover:bg-${social.color}/30 hover:scale-110 transition-neural group`}
                      >
                        <IconComponent className={`w-6 h-6 text-${social.color} group-hover:animate-pulse`} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card variant="glass" className="p-4 text-center">
                <div className="text-2xl font-bold font-orbitron text-primary">24h</div>
                <div className="text-xs text-muted-foreground">Response Time</div>
              </Card>
              <Card variant="glass" className="p-4 text-center">
                <div className="text-2xl font-bold font-orbitron text-secondary">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </Card>
              <Card variant="glass" className="p-4 text-center">
                <div className="text-2xl font-bold font-orbitron text-accent">100%</div>
                <div className="text-xs text-muted-foreground">Dedication</div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card variant="cyber" className="p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-secondary flex items-center gap-3">
                <Send className="w-7 h-7" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-orbitron">Name</label>
                    <Input
                      placeholder="Your Name"
                      className="bg-background/50 border-border focus:border-primary"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{String(errors.name.message)}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium font-orbitron">Email</label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border focus:border-primary"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{String(errors.email.message)}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-orbitron">Subject</label>
                  <Input
                    placeholder="Project Collaboration"
                    className="bg-background/50 border-border focus:border-secondary"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <span className="text-red-500 text-sm">{String(errors.subject.message)}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium font-orbitron">Message</label>
                  <Textarea
                    placeholder="Tell me about your project or how we can collaborate..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-accent resize-none"
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && <span className="text-red-500 text-sm">{String(errors.message.message)}</span>}
                </div>

                <Button 
                  variant="ai" 
                  size="lg" 
                  className="w-full group" 
                  type="submit" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card variant="ai" className="inline-block p-8 max-w-2xl">
            <CardContent className="space-y-4">
              <h3 className="text-2xl font-bold font-orbitron gradient-ai">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground">
                I'm currently open to new opportunities and exciting projects.
                Let's discuss how we can push the boundaries of AI/ML together.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button
                  variant="neural"
                  size="lg"
                  asChild
                >
                  <a href="mailto:kayamsaikrishna@gmail.com">
                    <Mail className="w-5 h-5" />
                    Email Me
                  </a>
                </Button>
                <Button
                  variant="cyber"
                  size="lg"
                  asChild
                >
                  <a href="tel:+918088993690">
                    <Phone className="w-5 h-5" />
                    Call Me
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
