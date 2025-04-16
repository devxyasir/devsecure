import { Users, Shield, BrainCircuit, Atom, Code, Database, Server, Hexagon, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';



const developerExpertise = [
  {
    title: 'Full Stack Development',
    icon: Code,
    color: 'cyan',
    description: 'Advanced quantum-powered frontend and backend development'
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    color: 'blue',
    description: 'Neural networks and dimensional learning algorithms'
  },
  {
    title: 'Cloud Architecture',
    icon: Server,
    color: 'purple',
    description: 'Scalable quantum cloud infrastructure solutions'
  },
  {
    title: 'Database Solutions',
    icon: Database,
    color: 'indigo',
    description: 'Advanced data storage and processing systems'
  },
  {
    title: 'Cybersecurity',
    icon: Shield,
    color: 'red',
    description: 'Quantum-level protection and security protocols'
  }
];

const DevelopersScroll = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Quantum field background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.1),rgba(0,0,0,0)_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      
      {/* Dimensional grid overlay */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Energy nodes */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full blur-xl animate-pulse-slow opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            backgroundColor: `rgba(${Math.random() * 100 + 20}, ${Math.random() * 100 + 100}, ${Math.random() * 155 + 100}, 0.1)`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-6 animate-slide-up">
            {/* Section header */}
            <div className="inline-flex items-center mb-2">
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-slow"></div>
              <Atom className="mx-3 text-cyan-400 animate-spin-slow" size={18} />
              <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-slow animation-delay-500"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
              <span className="text-quantum" data-text="Dimensional Team">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient-xy">
                  Dimensional Team
                </span>
              </span>
              {/* Orbital decoration */}
              <div className="absolute -right-6 -top-6 opacity-60 pointer-events-none hidden md:block">
                <Hexagon className="text-cyan-500/30 animate-spin-slower" size={30} />
              </div>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Our <span className="text-future">quantum engineers</span> and <span className="text-future">dimensional architects</span> harness advanced technological capabilities to manifest solutions beyond conventional boundaries.
            </p>
            
            <div className="pt-6">
              <Link 
                to="/developers" 
                className="hologram-panel px-6 py-3 rounded-lg text-future font-medium group relative overflow-hidden inline-flex items-center shadow-neon-cyan/30 hover:shadow-neon-cyan/50 transition-all duration-500 transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  <span>Access Team Matrix</span>
                  <Zap className="ml-2 animate-pulse-slow" size={18} />
                </span>
                
                {/* Energy scan effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full ease-in-out transition-transform duration-1500"></span>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="quantum-panel p-8 rounded-xl relative animate-float">
              {/* Holographic energy field */}
              <div className="absolute inset-0 rounded-xl overflow-hidden -z-10">
                <div className="absolute inset-0 animate-aurora opacity-20"></div>
              </div>
              
              {/* Orbital decoration */}
              <div className="absolute -top-6 -right-6 z-10">
                <div className="relative hologram-panel p-3 rounded-full shadow-neon-cyan">
                  <Users className="w-6 h-6 text-future animate-hologram-flicker" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-hologram mb-6">Quantum Expertise</h3>
              
              <div className="space-y-5">
                {developerExpertise.map((expertise, index) => {
                  const ExpertiseIcon = expertise.icon;
                  
                  return (
                    <div 
                      key={index} 
                      className="group glass-panel p-4 rounded-lg hover:shadow-neon-cyan/20 transition-all duration-500 transform hover:-translate-y-1 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="hologram-panel p-2.5 rounded-lg">
                          <ExpertiseIcon className={`w-5 h-5 text-${expertise.color}-400 group-hover:animate-pulse-slow`} />
                        </div>
                        
                        <div>
                          <h4 className="text-future font-semibold">{expertise.title}</h4>
                          <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                            {expertise.description}
                          </p>
                          
                          {/* Energy beam divider */}
                          <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent transition-all duration-500 mt-2"></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-800/30 text-center">
                <p className="text-gray-300/80 text-sm animate-pulse-slow">
                  <span className="text-future">Access the full dimensional matrix</span> to explore our complete technological capabilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersScroll;