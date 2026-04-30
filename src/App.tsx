/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Instagram, 
  Facebook,
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  ChevronRight,
  Download,
  Briefcase,
  User,
  Cpu,
  Layers,
  ArrowDownCircle,
  MessageCircle
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// --- Types ---

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

interface Education {
  level: string;
  school: string;
}

// --- Data ---

const PROJECTS: Project[] = [
  {
    title: "Tabanog POS System",
    description: "A modern Point of Sale system built for speed and efficiency, allowing users to turn their phone into a POS system for in-store and online sales.",
    tags: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"],
    image: "/project1.png",
    link: "https://project-tabanog-njul.vercel.app"
  },
  {
    title: "IUS System Monitor",
    description: "A comprehensive real-time system monitoring dashboard providing deep insights into CPU, memory, storage, and network performance with live data visualization.",
    tags: ["React", "Tailwind CSS", "Lucide React", "Vite"],
    image: "/project2.png",
    link: "#"
  },
  {
    title: "AI Detector Platform",
    description: "An advanced detection system for AI-generated images and videos, utilizing neural networks and deep learning for rapid, high-accuracy analysis.",
    tags: ["React", "AI/ML", "Tailwind CSS"],
    image: "/project3.png",
    link: "#"
  }
];

const EDUCATION: Education[] = [
  { level: "College", school: "Benedicto College Mandaue" },
  { level: "Senior High School", school: "University of Cebu Banilad" },
  { level: "Secondary", school: "Tabok National High School" },
  { level: "Elementary", school: "Tabok Elementary School" }
];

const SKILLS = {
  Frontend: ["HTML5", "CSS3", "React", "Next.js", "Tailwind CSS"],
  Backend: ["Node.js", "RESTful APIs", "JavaScript", "Supabase", "MySQL"],
  Tools: ["Git", "GitHub", "Canva", "Figma (Basic)"]
};

// --- Components ---

const Typewriter = ({ strings }: { strings: string[] }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const fullString = strings[currentStringIndex];
      
      if (!isDeleting) {
        setCurrentText(fullString.substring(0, currentText.length + 1));
        if (currentText.length === fullString.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setCurrentText(fullString.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentStringIndex((prev) => (prev + 1) % strings.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <span className="text-orange-600 font-bold relative">
      {currentText}
      <span className="w-[2px] h-[80%] bg-blue-900 absolute -right-1 top-[10%] animate-pulse" />
    </span>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-yellow-400 rounded flex items-center justify-center font-bold text-black group-hover:scale-110 transition-transform">
            JS
          </div>
          <span className="text-2xl font-bold tracking-tighter text-slate-800">Jigar</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 text-sm font-semibold text-gray-800 uppercase tracking-wider">
          {["Home", "About", "Skills", "Education", "Work", "Contact"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`hover:text-blue-600 transition-colors relative group py-2 ${item === "Home" ? "text-blue-600" : ""}`}
            >
              {item}
              {item === "Home" && (
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue-600 rounded-full" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 text-gray-400 mb-2 uppercase tracking-widest text-[10px] font-bold">
      <div className="w-8 h-[1px] bg-gray-300" />
      {subtitle || "Section"}
    </div>
    <h2 className="text-4xl font-bold text-gray-900 tracking-tight">{title}</h2>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("Frontend");

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-black selection:text-white font-sans">
      <Navbar />
      <main className="relative">
        <div className="particle-bg" />
        
        {/* --- Hero Section --- */}
        <section id="home" className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start text-left z-10"
              >
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-black text-gray-800 mb-4 tracking-tight"
                >
                  Hi There,
                </motion.span>
                <h1 className="text-6xl md:text-8xl font-black text-slate-800 leading-tight tracking-tight mb-6">
                  I'm Jade Steve <br />
                  <span className="text-orange-600">Molejon</span>
                </h1>
                
                <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-10 h-12 flex items-center gap-3">
                  I Am Into <Typewriter strings={["Web Development", "UI/UX Design", "Backend Systems", "Full-Stack Apps"]} />
                </div>

                <motion.a 
                  href="#about"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#1a0a5a] text-white rounded-full font-bold flex items-center gap-3 shadow-2xl shadow-blue-900/40 group mb-12"
                >
                  About Me <ArrowDownCircle size={24} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex gap-4">
                  {[
                    { icon: <Facebook size={20} />, href: "https://www.facebook.com/Oreo051202", color: "hover:bg-blue-600" },
                    { icon: <Github size={20} />, href: "https://github.com/Stevjade051202", color: "hover:bg-slate-800" },
                    { icon: <Instagram size={20} />, href: "https://www.instagram.com/stevemolejon/", color: "hover:bg-pink-600" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className={`w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center transition-all ${social.color}`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative flex justify-center lg:justify-end"
              >
                <div className="relative w-72 h-72 md:w-[500px] md:h-[500px]">
                  {/* Yellow background circle */}
                  <div className="absolute inset-4 bg-yellow-400 rounded-full shadow-2xl" />
                  
                  {/* Image container */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                    <img 
                      src="/steve.jpg" 
                      alt="Jade Steve Molejon" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Floating Bubble */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-6 left-6 z-50 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg bg-yellow-400">
              <img src="/steve.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-600 border-4 border-white rounded-full flex items-center justify-center text-[10px] text-white font-bold">
              1
            </div>
            <div className="absolute left-20 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <p className="text-xs font-bold text-gray-800">Hi! How can I help you?</p>
            </div>
          </div>
        </motion.div>

        {/* --- About Section --- */}
        <section id="about" className="py-24 bg-[#fafafa] px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="A Little Bit About Me" subtitle="About" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                  <img 
                    src="/steve.jpg" 
                    alt="About Jade Steve" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-orange-600/10 mix-blend-overlay" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  I’m a web developer focused on building responsive and user-friendly websites. I enjoy working with modern web technologies and continuously improving my skills through hands-on projects.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed font-light">
                  I’m passionate about creating clean code and intuitive user experiences, and I’m always looking for new challenges to grow as a developer.
                </p>
                
                <div className="pt-6 grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-gray-900 font-medium tracking-tight">Philippines</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email</h4>
                    <p className="text-gray-900 font-medium tracking-tight underline">itsmesteve2002@gmail.com</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Education Section --- */}
        <section id="education" className="py-24 bg-[#fafafa] px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Education" subtitle="Academic Foundation" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {EDUCATION.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                    {edu.level}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {edu.school}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="work" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionTitle title="Work" subtitle="Portfolio" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="h-48 overflow-hidden relative group">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ExternalLink className="text-white" size={32} />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex gap-2 mb-4 overflow-x-auto pb-1 no-scrollbar">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 text-[10px] font-bold text-gray-500 uppercase tracking-wider rounded-md border border-gray-100 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-black border-b-2 border-black/10 hover:border-black transition-all pb-1 group">
                      View Case Study <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            

          </div>
        </section>

        {/* --- Skills Section --- */}
        <section id="skills" className="py-24 bg-black text-white px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-2 text-gray-500 mb-2 uppercase tracking-widest text-[10px] font-bold">
                <div className="w-8 h-[1px] bg-gray-800" />
                Capabilities
              </div>
              <h2 className="text-4xl font-bold tracking-tight">Tech Stack</h2>
            </div>

            <div className="flex gap-4 mb-12 border-b border-gray-800">
              {Object.keys(SKILLS).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`pb-4 px-2 text-sm font-bold tracking-wider uppercase transition-all relative ${
                    activeTab === category ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {category}
                  {activeTab === category && (
                    <motion.div 
                      layoutId="tab" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" 
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="grid grid-cols-2 gap-4">
                <AnimatePresence mode="wait">
                  {SKILLS[activeTab as keyof typeof SKILLS].map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-gray-500 transition-colors group"
                    >
                      <div className="text-gray-500 group-hover:text-white transition-colors mb-4">
                        {activeTab === "Frontend" ? <Palette size={20} /> : activeTab === "Backend" ? <Terminal size={20} /> : <Layers size={20} />}
                      </div>
                      <span className="font-bold text-lg">{skill}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 italic text-gray-400">"Tools are only as good as the user who wields them."</h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  I believe in choosing the right tool for the job. My approach is centered around clean code, maintainability, and providing the best user experience possible through modern technology.
                </p>
                
                <div className="mt-10 grid grid-cols-3 gap-8 grayscale opacity-30">
                  <Cpu />
                  <Code2 />
                  <Layers />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-32 px-6 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title="Contact" subtitle="Get In Touch" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h3 className="text-3xl font-bold tracking-tight text-slate-800">
                  Ready to start a <span className="text-orange-600">project?</span>
                </h3>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  I’m always open to discussing new projects, opportunities, or collaborations. Let's build something great together.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Email Me</h4>
                      <a href="mailto:itsmesteve2002@gmail.com" className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors">itsmesteve2002@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Phone</h4>
                      <p className="text-lg font-bold text-slate-800">+63 9498068290</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Location</h4>
                      <p className="text-lg font-bold text-slate-800">Tabok Mandaue Cebu City, Philippines</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col justify-between shadow-2xl"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6 italic text-gray-400">Social Connections</h3>
                  <div className="flex flex-col gap-4">
                    {[
                      { name: 'GitHub', href: 'https://github.com/Stevjade051202', handle: '@Stevjade051202' },
                      { name: 'Facebook', href: 'https://www.facebook.com/Oreo051202', handle: 'Steve Molejon' },
                      { name: 'Instagram', href: 'https://www.instagram.com/stevemolejon/', handle: '@stevemolejon' }
                    ].map((platform) => (
                      <a 
                        key={platform.name}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <span className="font-bold">{platform.name}</span>
                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{platform.handle}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-gray-500 text-xs tracking-widest uppercase font-bold text-center">
                  Always Online
                </div>
              </motion.div>
            </div>
            
            <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>© 2026 Professional Portfolio. All rights reserved.</p>
              <p>Built with React & Motion</p>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .text-outline-black {
          -webkit-text-stroke: 1px black;
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
