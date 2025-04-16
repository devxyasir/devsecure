import React, { useState, useEffect } from 'react';
import { X, Github, Linkedin, Mail, Globe, Code, Server, BrainCircuit, Database, Shield, Hexagon, Atom, Sparkles, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Developer {
  id: number;
  name: string;
  position: string;
  image: string;
  bio: string;
  skills: Skill[];
  social: {
    github?: string;
    linkedin?: string;
    website?: string;
    email?: string;
  };
  projects: string[];
}

const developers: Developer[] = [
  {
    id: 1,
    name: 'Muhammad Arslan',
    position: 'Senior Full Stack Developer',
    image: 'https://i.ibb.co/Mxqds843/ars.webp',
    bio: 'Full stack developer with 3+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud architecture.',
    skills: [
      { name: 'React', level: 95, color: 'cyan' },
      { name: 'Node.js', level: 90, color: 'green' },
      { name: 'TypeScript', level: 85, color: 'blue' },
      { name: 'AWS', level: 80, color: 'yellow' },
      { name: 'Python', level: 75, color: 'purple' }
    ],
    social: {
      github: 'https://github.com/arslanejaz61',
      linkedin: 'https://linkedin.com/in/arlsanejaz',
      // website: 'https://example.com',
      email: 'arlsanejaz61@gmail.com'
    },
    projects: [
      'Gaming Web Solutions', 
      'E-commerce Solution', 
      'Dunkin Donuts Desktop Application',
      'Blockchain Data Vault',
      'Chat App',
      'Job Finder Portal'
    ]
  },
  {
    id: 2,
    name: 'Muhammad Yasir',
    position: 'AI/ML Engineer',
    image: 'https://i.ibb.co/t7gjkPP/yasir.webp',
    bio: 'AI/ML engineer focused on developing cutting-edge machine learning solutions. Expert in TensorFlow and PyTorch.',
    skills: [
      { name: 'Python', level: 95, color: 'purple' },
      { name: 'TensorFlow', level: 90, color: 'orange' },
      { name: 'PyTorch', level: 85, color: 'red' },
      { name: 'Data Science', level: 88, color: 'blue' },
      { name: 'Deep Learning', level: 85, color: 'green' }
    ],
    social: {
      github: 'https://github.com/devxyasir',
      linkedin: 'https://linkedin.com/in/devxyasir',
      email: 'jamyasir0534@gmail.com'
    },
    projects: [
      'Neural Network Framework', 
      'Sentiment Analysis', 
      'Sports Betting ODS Prediction',
      'Job Finder Portal',
      'Blockchain Data Vault',
      'Sleepy Furniture E-commerce'
    ]
  },
  {
    id: 3,
    name: 'Muhammad Bilal',
    position: 'Senior Full Stack Developer',
    image: 'https://i.ibb.co/JFwdPKM0/bilal.png',
    bio: 'Systems architect specializing in identity platforms and cloud-native automation. Expert in React, Node.js, Docker, and PaaS-driven deployments.',
    skills: [
      { name: 'MERN Stack', level: 80, color: 'red' },
      { name: '.Net Framework', level: 85, color: 'blue' },
      { name: 'Databases', level: 80, color: 'purple' },
      { name: 'React Native', level: 75, color: 'orange' },
      { name: 'DevOps', level: 85, color: 'cyan' }
    ],
    social: {
      github: 'https://github.com/mbilal8136',
      linkedin: 'https://linkedin.com/in/devxbilal',
      email: 'mbilal75362@gmail.com'
    },
    projects: [
      'Furniture E-commerce Store', 
      'Restaurant Desktop Application', 
      'Live Streaming Mobile App',
      'Sleepy Furniture E-commerce',
      'Chat App', 
      'Blockchain Data Vault'
    ]
  }
];

const DeveloperModal: React.FC<{
  developer: Developer;
  onClose: () => void;
}> = ({ developer, onClose }) => {
  // Animation effect for skill bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress-bar');
      skillBars.forEach((bar) => {
        bar.classList.add('skill-animated');
      });
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      {/* Particle animation in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Quantum field simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.1),rgba(0,0,0,0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      
      <div 
        className="relative quantum-panel max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-cyan-900/30 rounded-2xl animate-slide-up shadow-neon"
        style={{ animationDelay: '0.1s' }}
      >
        {/* Energy field on hover */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Geometric decoration */}
        <div className="absolute -top-12 -right-12 w-48 h-48 opacity-30">
          <Hexagon 
            className="w-full h-full text-cyan-500/20 animate-spin-slow"
            style={{ animationDuration: '30s' }}
          />
        </div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 opacity-30 rotate-45">
          <Hexagon 
            className="w-full h-full text-blue-500/20 animate-spin-slow"
            style={{ animationDuration: '20s', animationDirection: 'reverse' }}
          />
        </div>
        
        <div className="p-8 relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-cyan-400 hover:bg-gray-800 transition-all z-10 group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 transition-all duration-300"></div>
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col md:flex-row gap-12">
            {/* Left column */}
            <div className="md:w-1/3">
              {/* Developer image with quantum effect */}
              <div className="relative group mb-6">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative overflow-hidden rounded-xl border border-cyan-500/30">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/20 to-blue-900/40"></div>
                  <img
                    src={developer.image}
                    alt={developer.name}
                    className="w-full aspect-square object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* Holographic scan effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyan-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 w-full transform -translate-y-full group-hover:translate-y-full transition-transform duration-2000 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Developer name on small screens */}
              <div className="md:hidden mb-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">{developer.name}</h2>
                <p className="text-lg text-cyan-400 mb-2">{developer.position}</p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-3"></div>
              </div>
              
              {/* Social links with quantum styling */}
              <div className="space-y-4 glass-panel p-4 rounded-xl">
                <h3 className="text-gray-400 text-sm uppercase tracking-wider mb-2 flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
                  Quantum Network
                </h3>
                
                {developer.social.github && (
                  <a
                    href={developer.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-lg glass-panel text-gray-300 hover:text-white hover:shadow-neon-subtle transition-all duration-300 group"
                  >
                    <div className="mr-3 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Github className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span>GitHub Profile</span>
                  </a>
                )}
                
                {developer.social.linkedin && (
                  <a
                    href={developer.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-lg glass-panel text-gray-300 hover:text-white hover:shadow-neon-subtle transition-all duration-300 group"
                  >
                    <div className="mr-3 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                    </div>
                    <span>LinkedIn</span>
                  </a>
                )}
                
                {developer.social.website && (
                  <a
                    href={developer.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3 py-2 rounded-lg glass-panel text-gray-300 hover:text-white hover:shadow-neon-subtle transition-all duration-300 group"
                  >
                    <div className="mr-3 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Globe className="w-4 h-4 text-purple-400" />
                    </div>
                    <span>Personal Domain</span>
                  </a>
                )}
                
                {developer.social.email && (
                  <a
                    href={`mailto:${developer.social.email}`}
                    className="flex items-center px-3 py-2 rounded-lg glass-panel text-gray-300 hover:text-white hover:shadow-neon-subtle transition-all duration-300 group"
                  >
                    <div className="mr-3 p-2 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                      <Mail className="w-4 h-4 text-green-400" />
                    </div>
                    <span>Quantum Mail</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="md:w-2/3">
              {/* Developer name - hidden on small screens */}
              <div className="hidden md:block mb-6">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                  {developer.name}
                </h2>
                <p className="text-lg text-cyan-400 mb-3">{developer.position}</p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent my-3"></div>
              </div>
              
              {/* Bio with quantum styling */}
              <div className="mb-8 quantum-panel p-5 rounded-xl">
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3 flex items-center">
                  <Atom className="w-4 h-4 mr-2 text-cyan-400 animate-spin-slow" />
                  <span>Quantum Profile</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{developer.bio}</p>
              </div>

              {/* Enhanced skills section */}
              <div className="glass-panel p-5 rounded-xl mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-6 flex items-center">
                  <BrainCircuit className="w-4 h-4 mr-2 text-purple-400" />
                  <span>Skill Matrix</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {developer.skills.map((skill, index) => {
                    const SkillIcon = getSkillIcon(skill.name);
                    const delay = index * 0.15;
                    
                    return (
                      <div key={index} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <div className="p-1.5 rounded-md bg-gray-800/80 mr-2">
                              <SkillIcon className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-white font-medium">{skill.name}</span>
                          </div>
                          <span className="text-cyan-400 font-mono">{skill.level}%</span>
                        </div>
                        
                        <div className="h-1.5 glass-panel rounded-full overflow-hidden">
                          <div
                            className="skill-progress-bar h-full rounded-full"
                            style={{ 
                              transitionDelay: `${delay}s`,
                              '--width': `${skill.level}%`
                            } as React.CSSProperties}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Projects section */}
              <div className="glass-panel p-5 rounded-xl animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 flex items-center">
                  <Code className="w-4 h-4 mr-2 text-orange-400" />
                  <span>Quantum Projects</span>
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {developer.projects.map((project, index) => (
                    <div key={index} className="glass-panel p-3 px-4 rounded-lg group hover:shadow-neon-subtle transition-all duration-300">
                      <div className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        <span className="text-white group-hover:text-cyan-300 transition-colors">{project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Function to get the icon for each skill category
const getSkillIcon = (skillName: string) => {
  const lowercaseName = skillName.toLowerCase();
  
  if (lowercaseName.includes('react') || lowercaseName.includes('javascript') || lowercaseName.includes('web') || lowercaseName.includes('node')) {
    return Code;
  } else if (lowercaseName.includes('python') || lowercaseName.includes('tensorflow') || lowercaseName.includes('ai') || lowercaseName.includes('ml')) {
    return BrainCircuit;
  } else if (lowercaseName.includes('aws') || lowercaseName.includes('cloud') || lowercaseName.includes('devops')) {
    return Server;
  } else if (lowercaseName.includes('data') || lowercaseName.includes('sql')) {
    return Database;
  } else if (lowercaseName.includes('security') || lowercaseName.includes('network')) {
    return Shield;
  } else {
    return Sparkles;
  }
};

// Find top skills for each developer
const getDeveloperTopSkills = (developer: Developer, count: number = 3) => {
  return [...developer.skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, count);
};

const Developers = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sectionRef, setSectionRef] = useState<HTMLElement | null>(null);

  // Track mouse position for quantum field effects
  useEffect(() => {
    const section = document.getElementById('developers-section');
    if (section) {
      setSectionRef(section);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef) {
        const rect = sectionRef.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sectionRef]);

  return (
    <div id="developers-section" className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Quantum field background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.15),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      
      {/* Dimensional grid overlay */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Interactive quantum cursor effect */}
      <div 
        className="absolute w-[40vw] h-[40vw] pointer-events-none mix-blend-screen opacity-10 animate-spin-very-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,200,255,0.3) 0%, rgba(0,0,0,0) 70%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          {/* Dimensional glow separator */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-slow"></div>
            <Atom className="mx-3 text-cyan-400 animate-spin-slow" size={24} />
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-slow animation-delay-500"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative">
            <span className="text-quantum" data-text="Quantum Team">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient-xy">
                Quantum Team
              </span>
            </span>
            {/* Orbital decoration */}
            <div className="absolute -right-4 -top-4 opacity-60 pointer-events-none hidden md:block">
              <Hexagon className="text-cyan-500/30 animate-spin-slower" size={40} />
            </div>
          </h1>
          
          <p className="text-hologram text-xl max-w-3xl mx-auto leading-relaxed mb-4">
            Meet our dimensional engineers and technological architects
          </p>
          <p className="text-gray-300/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Experts who manifest quantum solutions through advanced technological domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {developers.map((developer, index) => {
            const topSkills = getDeveloperTopSkills(developer);
            
            return (
              <div
                key={developer.id}
                onClick={() => setSelectedDeveloper(developer)}
                className={`group cursor-pointer quantum-panel p-8 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] ${index % 2 === 0 ? 'animate-float' : 'animate-float-reverse'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quantum energy field */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-xl">
                  <div className="absolute inset-0 animate-aurora opacity-20 -z-10"></div>
                </div>
                
                {/* Developer info container */}
                <div className="flex items-start space-x-5">
                  {/* Developer avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full animate-pulse-slow bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-cyan-500/30 relative">
                      <img 
                        src={developer.image} 
                        alt={developer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Developer info */}
                  <div className="flex-1">
                    <h3 className="text-hologram text-xl font-bold group-hover:tracking-wide transition-all duration-300">
                      {developer.name}
                    </h3>
                    <p className="text-future text-sm my-1">{developer.position}</p>
                    
                    {/* Energy beam divider */}
                    <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-all duration-500 my-3"></div>
                  </div>
                </div>
                
                {/* Skills section */}
                <div className="mt-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3">Core Specializations</h4>
                  <div className="space-y-3">
                    {topSkills.map((skill, idx) => {
                      const SkillIcon = getSkillIcon(skill.name);
                      
                      return (
                        <div key={idx} className="group relative">
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center">
                              <SkillIcon className="h-3.5 w-3.5 text-cyan-400 mr-2" />
                              <span className="text-sm text-gray-300">{skill.name}</span>
                            </div>
                            <span className="text-xs text-future">{skill.level}%</span>
                          </div>
                          <div className="h-1 glass-panel rounded-full overflow-hidden">
                            <div 
                              className={`h-full bg-${skill.color}-500/60 transition-all duration-500 group-hover:animate-pulse-slow`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* View profile button */}
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center justify-center text-sm text-future hover:text-cyan-300 transition-colors group relative">
                    <span>Access Developer Matrix</span>
                    <Zap className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    
                    {/* Animated underline */}
                    <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 absolute -bottom-1"></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedDeveloper && (
        <DeveloperModal
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloper(null)}
        />
      )}
    </div>
  );
};

export default Developers;