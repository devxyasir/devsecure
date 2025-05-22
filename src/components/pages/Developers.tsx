import React, { useState, useEffect, useRef, useMemo } from 'react';
import { X, Github, Linkedin, Mail, Globe, Code, Server, BrainCircuit, Database, Shield, Hexagon, Atom, Sparkles, Zap } from 'lucide-react';
import { throttle } from '../../utils/optimizations';
import { getAnimationSettings } from '../../utils/animationOptimizer';
import OptimizedImage from '../../components/common/OptimizedImage';

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
      // linkedin: 'https://linkedin.com/in/devxyasir',
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
    id: 2,
    name: 'Muhammad Mudasir',
    position: 'Senior Full Stack Developer',
    image: 'https://i.ibb.co/zT0w2gTZ/muji.webp',
    bio: 'Strategic market researcher and lead developer with expertise in identifying technological trends and translating market insights into innovative product solutions. Specializes in competitive analysis and user-centered development.',
    skills: [
      { name: 'AI & Automation', level: 95, color: 'blue' },
      { name: 'NExt JS', level: 90, color: 'cyan' },
      { name: 'Mern Stack', level: 88, color: 'violet' },
      { name: 'Angular Js', level: 85, color: 'green' },
      { name: 'Python', level: 92, color: 'orange' }
    ],
    social: {
      github:  'https://github.com/Mudasir345',
      // linkedin: 'https://linkedin.com/in/iacmujahid',
      email: 'mudasirchoudhry345@gmail.com'
    },
   projects: [
  'AI-Powered Technology Market Analyzer (Next.js + Python)',
  'Real-time Competitor Intelligence Dashboard (MERN + AI)',
  'E-commerce Strategy Optimizer with Predictive Analytics (AngularJS + Python)',
  'User Behavior & Research Insights Panel (MERN + AI)',
  'Product Strategy Planner using NLP Analysis (Next.js + Python)',
  'Growth Analytics System with Automation Triggers (AngularJS + AI)'
]
  },
  
  {
    id: 3,
    name: 'Muhammad Bilal',
    position: 'Senior Full Stack Developer',
    image: 'https://i.ibb.co/d4RnytpY/bilal-1.webp',
    bio: 'Systems architect specializing in identity platforms and cloud-native automation. Expert in React, Node.js, Docker, and PaaS-driven deployments.',
    skills: [
      { name: 'MERN Stack', level: 95, color: 'red' },
      { name: '.Net Framework', level: 90, color: 'blue' },
      { name: 'Databases', level: 90, color: 'purple' },
      { name: 'React Native', level: 85, color: 'orange' },
      { name: 'DevOps', level: 90, color: 'cyan' }
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
  },

  {
    id: 4,
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
    id: 5,
    name: 'Muhammad Mujahid',
    position: 'Lead Developer & Market Researcher',
    image: 'https://i.ibb.co/zT0w2gTZ/muji.webp',
    bio: 'Strategic market researcher and lead developer with expertise in identifying technological trends and translating market insights into innovative product solutions. Specializes in competitive analysis and user-centered development.',
    skills: [
      { name: 'Market Research', level: 95, color: 'blue' },
      { name: 'Full Stack Development', level: 90, color: 'cyan' },
      { name: 'Competitive Analysis', level: 88, color: 'violet' },
      { name: 'UX Research', level: 85, color: 'green' },
      { name: 'Product Strategy', level: 92, color: 'orange' }
    ],
    social: {
      github: 'https://github.com/iacmujahid',
      linkedin: 'https://linkedin.com/in/iacmujahid',
      email: 'mujimalik0324@gmail.com'
    },
    projects: [
      'Technology Market Analysis Platform', 
      'Competitor Intelligence System', 
      'E-commerce Market Positioning Tool',
      'User Research Dashboard',
      'Product Strategy Framework',
      'Growth Analytics Portal'
    ]
  },
   
  {
    id: 6,
    name: 'Muhammad Faraz',
    position: 'SEO Specialist & Digital Marketer',
    image: 'https://i.ibb.co/0RtPgZ5F/faraz.webp',
    bio: 'Expert SEO specialist with a proven track record in enhancing website visibility and search rankings. Skilled in comprehensive SEO strategies, technical optimization, and digital marketing campaigns.',
    skills: [
      { name: 'Search Engine Optimization', level: 95, color: 'green' },
      { name: 'Keyword Research', level: 92, color: 'blue' },
      { name: 'Content Strategy', level: 88, color: 'violet' },
      { name: 'Technical SEO', level: 90, color: 'cyan' },
      { name: 'Digital Marketing', level: 85, color: 'orange' }
    ],
    social: {
      github: 'https://github.com/iacfaraz',
      linkedin: 'https://linkedin.com/in/iacfaraz',
      email: 'farazbashir1122@gmail.com'
    },
    projects: [
      'E-commerce SEO Optimization', 
      'Local Business Ranking Strategy', 
      'SaaS Website Visibility Enhancement',
      'Technical SEO Audit Framework',
      'Content Strategy Development',
      'B2B SEO Campaign Management'
    ]
  }
   {
    id: 6,
    name: 'Muhammad Akbar',
    position: 'Social Media & Marketing Team',
    image: 'https://i.ibb.co/8g9cvQtK/M-Akbar-1.webp',
    bio: 'Expert in social media handling, marketing, and AI automation. Drives growth and engagement through innovative digital strategies and automation tools.',
    skills: [
      { name: 'Social Media Handling', level: 92, color: 'blue' },
      { name: 'Marketing', level: 89, color: 'green' },
      { name: 'AI Automation', level: 85, color: 'purple' }
    ],
    social: {
      github: 'https://github.com/makbar-56',
      linkedin: '',
      email: 'muhammadakbarfida56@gmail.com'
    },
    projects: [
      'AI-Driven Campaigns',
      'Brand Engagement Automation',
      'Social Analytics Platform'
    ]
  },
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
  const skillNameLower = skillName.toLowerCase();
  
  // Development skills
  if (skillNameLower.includes('react')) return Code;
  if (skillNameLower.includes('node')) return Server;
  if (skillNameLower.includes('python') || skillNameLower.includes('tensor') || skillNameLower.includes('torch')) return BrainCircuit;
  if (skillNameLower.includes('aws') || skillNameLower.includes('devops')) return Server;
  if (skillNameLower.includes('data') || skillNameLower.includes('sql')) return Database;
  if (skillNameLower.includes('cyber') || skillNameLower.includes('security')) return Shield;
  if (skillNameLower.includes('deep') || skillNameLower.includes('machine') || skillNameLower.includes('ml') || skillNameLower.includes('ai')) return BrainCircuit;
  if (skillNameLower.includes('full stack')) return Code;
  
  // Market research and strategy skills
  if (skillNameLower.includes('market') || skillNameLower.includes('research')) return Globe;
  if (skillNameLower.includes('strategy') || skillNameLower.includes('product strategy')) return Sparkles;
  if (skillNameLower.includes('competitive') || skillNameLower.includes('analysis')) return Hexagon;
  if (skillNameLower.includes('ux') || skillNameLower.includes('user')) return Atom;
  
  // Default icon
  return Code;
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const animationSettings = useMemo(() => getAnimationSettings(), []);
  const shouldAnimate = animationSettings.useParallax;
  
  // Track mouse position for quantum field effects - with performance optimization
  useEffect(() => {
    // Get animation settings based on device capabilities
    const section = document.getElementById('developers-section');
    if (section) {
      sectionRef.current = section;
    }

    // Create throttled handler to reduce the frequency of updates
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (sectionRef.current && shouldAnimate) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }, 50); // Only update every 50ms

    // Only add event listener if animations should run
    if (shouldAnimate) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    return undefined;
  }, [shouldAnimate]);

  return (
    <div id="developers-section" className="min-h-screen bg-black pt-20 relative overflow-hidden hardware-accelerated">
      {/* Quantum field background effects - with hardware acceleration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.15),rgba(0,0,0,0)_50%)] will-change-opacity" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)] will-change-opacity" />
      
      {/* Dimensional grid overlay */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Interactive quantum cursor effect - conditionally rendered based on device capability */}
      {shouldAnimate && (
        <div 
          className="absolute w-[30vw] h-[30vw] pointer-events-none mix-blend-screen opacity-10 animate-spin-optimized hardware-accelerated"
          style={{
            background: 'radial-gradient(circle, rgba(0,200,255,0.3) 0%, rgba(0,0,0,0) 70%)',
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%) translateZ(0)',
            willChange: 'left, top',
          }}
        />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="text-center mb-16 animate-slide-up hardware-accelerated">
          {/* Dimensional glow separator - optimized animations */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-optimized"></div>
            <Atom className="mx-3 text-cyan-400 animate-spin-optimized hardware-accelerated" size={24} />
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-optimized animation-delay-500"></div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-8 relative hardware-accelerated">
            <span className="text-quantum" data-text="Quantum Team">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient-x">
                Quantum Team
              </span>
            </span>
            {/* Static decoration instead of animated orbital */}
            <div className="absolute -right-4 -top-4 opacity-60 pointer-events-none hidden md:block">
              <Hexagon className="text-cyan-500/30" size={40} />
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
          {developers.map((developer) => {
            const topSkills = getDeveloperTopSkills(developer, 3);
            
            return (
              <div 
                key={developer.id} 
                className="mb-6 hardware-accelerated"
              >
                <div onClick={() => setSelectedDeveloper(developer)} className="bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-glow-optimized p-6 transition-all duration-300 quantum-panel group relative cursor-pointer hardware-accelerated">
                {/* Static decorations instead of animated orbs */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-lg"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-radial from-blue-500/10 to-transparent rounded-full blur-lg"></div>
                
                {/* Developer info container */}
                <div className="flex items-start space-x-5">
                  {/* Developer avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hardware-accelerated"></div>
                    <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-cyan-500/30 relative">
                      <OptimizedImage 
                        src={developer.image} 
                        alt={developer.name}
                        width={64}
                        height={64}
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
                    
                    {/* Energy beam divider - hardware accelerated */}
                    <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transition-all duration-300 my-3 hardware-accelerated"></div>
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
                              className={`h-full bg-${skill.color}-500/60 transition-all duration-300 group-hover:animate-pulse-optimized hardware-accelerated`}
                              style={{ width: `${skill.level}%`, transform: 'translateZ(0)' }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* View profile button - simplified animation */}
                <div className="mt-6 text-center">
                  <button className="inline-flex items-center justify-center text-sm text-future hover:text-cyan-300 transition-colors group relative hardware-accelerated">
                    <span>Access Developer Matrix</span>
                    <Zap className="ml-2 h-3.5 w-3.5" />
                    
                    {/* Simplified underline animation */}
                    <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-cyan-400 transition-all duration-300 absolute -bottom-1"></div>
                  </button>
                </div>
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
