import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Download, Code, Database, FileCode, GitBranch, Lightbulb, Menu, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "Python", icon: Code, level: 85 },
    { name: "C Programming", icon: FileCode, level: 80 },
    { name: "HTML & CSS", icon: FileCode, level: 90 },
    { name: "Git", icon: GitBranch, level: 75 },
    { name: "Problem Solving", icon: Lightbulb, level: 88 },
    { name: "Data Structures", icon: Database, level: 70 },
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description: "A responsive e-commerce platform built with HTML, CSS, and JavaScript featuring product catalog and shopping cart.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description: "Real-time weather application using API integration to display current weather conditions and forecasts.",
      tech: ["Python", "API Integration"],
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      description: "A clean and intuitive task management application with CRUD operations and local storage.",
      tech: ["JavaScript", "LocalStorage"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Template",
      description: "Modern and responsive portfolio template for developers with smooth animations and mobile-first design.",
      tech: ["HTML", "CSS", "Tailwind"],
      github: "#",
      demo: "#",
    },
  ];

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-soft">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-xl font-bold text-primary">RP</a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-foreground hover:text-primary transition-smooth"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 animate-fade-in">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-foreground hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-hero pt-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
          <div className="inline-block mb-4 animate-float">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto flex items-center justify-center text-4xl font-bold text-primary-foreground shadow-hover">
              RP
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
            Hi, I'm Ramya Pulugurtha 👋
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Aspiring Software Developer | Tech Enthusiast | Learner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="transition-smooth hover:scale-105">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" className="transition-smooth hover:scale-105">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-on-scroll">
            <h2 className="text-4xl font-bold mb-8 text-center text-foreground">About Me</h2>
            <Card className="p-8 shadow-soft gradient-card">
              <p className="text-lg text-foreground leading-relaxed mb-4">
                Hello! I'm Ramya Pulugurtha, a passionate B.Tech Computer Science student currently in my 2nd year. 
                I have a deep interest in software development, problem-solving, and exploring new technologies.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-4">
                My journey in tech has been driven by curiosity and a desire to create meaningful solutions. 
                I enjoy working on projects that challenge me to learn and grow, whether it's building web applications, 
                exploring algorithms, or diving into new programming languages.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                I'm constantly seeking opportunities to expand my skill set and contribute to innovative projects. 
                I believe in the power of technology to solve real-world problems and am excited about the possibilities ahead.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground animate-on-scroll">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card
                  key={skill.name}
                  className="p-6 shadow-soft hover:shadow-hover transition-smooth animate-on-scroll gradient-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                    </div>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-smooth"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground animate-on-scroll">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden shadow-soft hover:shadow-hover transition-smooth animate-on-scroll gradient-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground animate-on-scroll">Education</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 shadow-soft hover:shadow-hover transition-smooth animate-on-scroll gradient-card">
              <div className="flex items-start">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mr-6 flex-shrink-0">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Bachelor of Technology</h3>
                  <p className="text-lg text-muted-foreground mb-2">Computer Science and Engineering</p>
                  <p className="text-primary font-semibold mb-2">Year 2 - Currently Pursuing</p>
                  <p className="text-foreground">
                    Focused on core computer science subjects including Data Structures, Algorithms, 
                    Database Management Systems, and Object-Oriented Programming. Actively participating 
                    in coding competitions and technical workshops.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground animate-on-scroll">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 shadow-soft gradient-card animate-on-scroll">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                <Button type="submit" className="w-full transition-smooth hover:scale-105">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Ramya Pulugurtha. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-smooth"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:ramyapulugurtha@example.com"
                className="text-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
