import React from 'react';
import { Brain, Cpu, Database, Code, Shield, Cloud } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Quantum background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900/20 opacity-80"></div>
      
      {/* Particle animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Pioneering Digital Evolution
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl">
            At Devsecure, we transcend traditional development paradigms, crafting dimensional solutions that exist at the intersection of innovation and security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="quantum-panel p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-blue-900/20 border border-gray-700/50">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">Our Quantum Approach</h3>
            <p className="text-gray-300 mb-4">
              Founded in 2023, Devsecure emerged from a vision to redefine technological boundaries. We operate at the bleeding edge of digital innovation, where security and functionality exist in perfect quantum harmony.
            </p>
            <p className="text-gray-300 mb-6">
              Our multidimensional team brings together expertise across the full technological spectrum, enabling us to tackle the most complex challenges with elegant, future-proof solutions.
            </p>
            
            {/* Core values */}
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Core Principles</h4>
            <ul className="space-y-4">
              {[
                { icon: Brain, title: "Cognitive Innovation", desc: "Pushing beyond conventional thinking" },
                { icon: Shield, title: "Quantum Security", desc: "Protection across all dimensions" },
                { icon: Code, title: "Elegant Architecture", desc: "Beautiful solutions to complex problems" }
              ].map((value, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 p-2 rounded-lg bg-blue-900/30 text-cyan-400">
                    <value.icon size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">{value.title}</h5>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Stats and highlights */}
          <div className="space-y-8">
            {/* Illuminated stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5+", label: "Years Comned Experience" },
                { value: "50+", label: "Enterprise Projects" },
                { value: "99%", label: "Client Satisfaction" },
                { value: "24/7", label: "Quantum Support" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-xl quantum-panel text-center transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
                >
                  <div className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Technology expertise */}
            <div className="quantum-panel p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-4 text-center text-purple-400">Technological Dimensions</h4>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Cpu, label: "Quantum Computing" },
                  { icon: Cloud, label: "Cloud Architecture" },
                  { icon: Shield, label: "Cyber Protection" },
                  { icon: Database, label: "Data Engineering" },
                  { icon: Code, label: "Advanced Algorithms" },
                  { icon: Brain, label: "Neural Networks" }
                ].map((tech, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 mb-2 text-blue-400">
                      <tech.icon size={20} />
                    </div>
                    <div className="text-gray-300 text-xs text-center">{tech.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex justify-center">
              
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-glow transform transition-all duration-300 hover:scale-105">
              <a href='/contact'>  Join Our Quantum Journey</a>
              </button>
            
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default AboutUs;
