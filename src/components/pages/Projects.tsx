import { useState, useEffect } from 'react';
import { Calendar, Building2, Code2, X, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    company: "TechCorp Solutions",
    duration: "6 months",
    description: "Developed a comprehensive analytics platform using machine learning algorithms to process and analyze large datasets, providing actionable insights for business decision-making.",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Secure Banking Application",
    company: "FinTech Innovations",
    duration: "8 months",
    description: "Built a secure banking application with advanced encryption and authentication systems, ensuring safe transactions and data protection for users.",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Blockchain"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "E-commerce Platform",
    company: "Global Retail Solutions",
    duration: "4 months",
    description: "Created a scalable e-commerce platform with real-time inventory management, payment processing, and customer analytics.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Blockchain Data Vault",
    company: "CryptoSecure",
    duration: "7 months",
    description: "Developed a secure data storage solution using blockchain technology, allowing users to store and encrypt sensitive information with Metamask authentication and decentralized verification.",
    technologies: ["React", "Node.js", "MongoDB", "Web3.js", "Solana", "Metamask"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Job Finder Portal",
    company: "CareerConnect",
    duration: "5 months",
    description: "Built a comprehensive job search platform where companies can post openings and job seekers can search, filter, and apply to positions. Features include user profiles, application tracking, and company dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Sleepy Furniture",
    company: "Home Essentials",
    duration: "3 months",
    description: "Created a modern e-commerce platform for a furniture retailer, featuring 3D product previews, customization options, and streamlined checkout. The platform includes inventory management and sales analytics.",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "Three.js"],
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Quantum Chat",
    company: "ConnectSphere",
    duration: "4 months",
    description: "Developed a real-time messaging application with features similar to WhatsApp, including end-to-end encryption, multimedia sharing, group chats, and status updates. Implemented with WebSocket for instant communication.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "WebRTC"],
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&h=600&fit=crop"
  }
];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close modal on escape key press
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-panel rounded-2xl max-w-4xl w-full overflow-hidden border border-gray-800/50 gradient-border-hover shadow-glow animate-modal-entry relative">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 mix-blend-overlay z-10"></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover transition-transform duration-1000 hover:scale-105 hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent z-10"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-cyan-900/50 hover:shadow-glow transition-all duration-300 z-20"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-3xl font-bold mb-3 animate-gradient-x">{project.title}</h3>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-300 bg-gray-800/40 rounded-full px-3 py-1.5 shadow-sm">
              <Building2 className="w-5 h-5 mr-2" />
              {project.company}
            </div>
            <div className="flex items-center text-gray-300 bg-gray-800/40 rounded-full px-3 py-1.5 shadow-sm">
              <Calendar className="w-5 h-5 mr-2" />
              {project.duration}
            </div>
          </div>
          
          <p className="text-gray-300 mb-8 leading-relaxed">{project.description}</p>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-cyan-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 bg-cyan-900/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-cyan-900/40 transition-all duration-300 hover:shadow-glow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.15),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 -left-32 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 -right-32 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
          </div>
          <h1 className="section-title text-5xl md:text-6xl mb-6 animate-gradient-x">
            Our Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of innovative solutions and successful implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
            >
              <div className="glass-panel rounded-xl overflow-hidden border border-gray-800/50 gradient-border-hover shadow-lg hover:shadow-glow transition-all duration-500">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10" />
                  
                  {/* View Details Button that appears on hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full flex items-center text-cyan-300 border border-cyan-500/30 hover:bg-black/70 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="mr-2">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6 relative">
                  {/* Tech pills preview */}
                  <div className="absolute -top-5 right-5 flex space-x-1">
                    {project.technologies.slice(0, 3).map((_, index) => (
                      <span key={index} className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse-slow" style={{ animationDelay: `${index * 200}ms` }}></span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="w-2 h-2 rounded-full bg-gray-500 animate-pulse-slow" style={{ animationDelay: '600ms' }}></span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium flex items-center">
                      <Building2 className="w-4 h-4 mr-1 opacity-70" />
                      {project.company}
                    </span>
                    <span className="text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1 opacity-70" />
                      {project.duration}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;