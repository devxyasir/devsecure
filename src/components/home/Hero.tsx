import { useState, useEffect, useRef } from 'react';

// Define animation keyframes for new cosmic effects
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes twinkle {
      0%, 100% { opacity: 0.4; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1.2); }
    }
    
    @keyframes shooting-star {
      0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 0; }
      15% { opacity: 1; }
      60% { opacity: 1; }
      100% { transform: translateX(-1000px) translateY(1000px) rotate(-45deg); opacity: 0; }
    }
    
    @keyframes nebula-pulse {
      0%, 100% { opacity: 0.7; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.1); }
    }
  `;
  document.head.appendChild(style);
}
import { Shield, ArrowRight, ChevronDown, Hexagon, Atom, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Handle cursor tracking for quantum field effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  


  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const heroItems = heroRef.current.querySelectorAll('.parallax-item');
      
      heroItems.forEach((item) => {
        const element = item as HTMLElement;
        const speed = element.dataset.speed || '0.1';
        element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Cosmic universe background */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-[#030723] via-[#0e0b35] to-[#08031a]">
        {/* Star field layers */}
        <div className="absolute inset-0">
          {/* Generate animated stars - different sizes and animation speeds */}
          {[...Array(200)].map((_, i) => {
            const size = Math.random() * 2;
            const animDuration = 4 + Math.random() * 20;
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const delay = Math.random() * 10;
            const opacity = 0.1 + Math.random() * 0.9;
            
            return (
              <div
                key={i}
                className="absolute rounded-full animate-twinkle"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  backgroundColor: i % 5 === 0 ? '#a5f3fc' : i % 3 === 0 ? '#e0f2fe' : '#f1f5f9',
                  animationDuration: `${animDuration}s`,
                  animationDelay: `${delay}s`,
                  opacity
                }}
              />
            );
          })}
        </div>
        
        {/* Distant nebula and cosmic clouds */}
        <div className="absolute inset-0 opacity-60">
          {/* Purple nebula */}
          <div 
            className="absolute rounded-full blur-3xl animate-pulse-slow"
            style={{
              width: '30%',
              height: '30%',
              top: '15%',
              right: '10%',
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0) 70%)',
              animationDuration: '30s'
            }}
          ></div>
          
          {/* Blue nebula */}
          <div 
            className="absolute rounded-full blur-3xl animate-pulse-slow"
            style={{
              width: '40%',
              height: '40%',
              bottom: '5%',
              left: '10%',
              background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.2) 0%, rgba(56, 189, 248, 0) 70%)',
              animationDuration: '25s',
              animationDelay: '2s'
            }}
          ></div>
          
          {/* Teal cosmic cloud */}
          <div 
            className="absolute rounded-full blur-3xl animate-float"
            style={{
              width: '25%',
              height: '25%',
              top: '40%',
              left: '30%',
              background: 'radial-gradient(circle at center, rgba(45, 212, 191, 0.15) 0%, rgba(45, 212, 191, 0) 70%)',
              animationDuration: '40s'
            }}
          ></div>
        </div>
        
        {/* Shooting stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => {
            const top = 5 + Math.random() * 60;
            const left = Math.random() * 80;
            const size = 100 + Math.random() * 150;
            const delay = i * 5 + Math.random() * 10;
            
            return (
              <div
                key={i}
                className="absolute animate-shooting-star"
                style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  width: `${size}px`,
                  height: '1px',
                  backgroundColor: '#fff',
                  boxShadow: '0 0 20px 1px rgba(255, 255, 255, 0.7)',
                  animationDelay: `${delay}s`,
                  animationDuration: '6s',
                  transform: 'rotate(-45deg)',
                  opacity: 0
                }}
              />
            );
          })}
        </div>
        
        {/* Cosmic energy fields and dimensional rifts */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[200%] h-[200%] rounded-full animate-aurora opacity-10"
            style={{
              background: 'conic-gradient(from 0deg, #7d5aff00, #7d5aff40, #00b3ff50, #00ffaa30, #7d5aff00)',
              top: '-50%',
              left: '-50%',
              animationDuration: '40s'
            }}
          ></div>
        </div>
        
        {/* Dimensional wormhole effect - follows cursor */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-3000 ease-spring"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 255, 170, 0.01) 0%, transparent 70%)',
            boxShadow: 'inset 0 0 50px rgba(0, 255, 170, 0.1)',
            left: `${cursorPosition.x - 300}px`,
            top: `${cursorPosition.y - 300}px`,
            transform: 'translateZ(0)',
            opacity: 0.6,
          }}
        ></div>
      </div>
      
      {/* Multi-dimensional particle systems */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Quantum light particles */}
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = Math.random() * 10 + 5;
          const delay = Math.random() * 8;
          const hue = Math.floor(Math.random() * 60) + 180; // Blues to cyans
          
          return (
            <div 
              key={i}
              className={`absolute rounded-full ${Math.random() > 0.7 ? 'animate-pulse-slow' : 'animate-float-rapid'}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${y}%`,
                left: `${x}%`,
                boxShadow: `0 0 ${size * 3}px rgba(${hue}, ${hue + 50}, 255, 0.8)`,
                backgroundColor: `hsla(${hue}, 100%, 70%, 0.8)`,
                filter: 'blur(0.5px)',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: 'translateZ(0)',
              }}
            />
          );
        })}
        
        {/* Orbital quantum nodes */}
        {[...Array(10)].map((_, i) => {
          const size = Math.random() * 12 + 8;
          const coreSize = size / 3;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const orbitDuration = Math.random() * 25 + 15;
          const pulseDuration = Math.random() * 4 + 2;
          const delay = Math.random() * 10;
          const isReverse = Math.random() > 0.5;
          
          return (
            <div 
              key={`orbit-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${y}%`,
                left: `${x}%`,
                border: '1px solid rgba(0, 179, 255, 0.3)',
                animation: `${isReverse ? 'spin-reverse' : 'spin'} ${orbitDuration}s linear infinite`,
                animationDelay: `${delay}s`,
                opacity: 0.5,
                transform: 'translateZ(0)',
              }}
            >
              <div 
                className="absolute rounded-full animate-pulse-slow"
                style={{
                  width: `${coreSize}px`,
                  height: `${coreSize}px`,
                  backgroundColor: `rgba(0, 179, 255, 0.8)`,
                  boxShadow: '0 0 10px rgba(0, 179, 255, 0.8)',
                  top: '0px',
                  transform: 'translateY(-50%)',
                  left: '50%',
                  marginLeft: `-${coreSize/2}px`,
                  animationDuration: `${pulseDuration}s`,
                }}
              />
            </div>
          );
        })}
        
        {/* Dimensional energy nodes */}
        {[...Array(6)].map((_, i) => {
          const size = Math.random() * 80 + 100;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          return (
            <div 
              key={`node-${i}`}
              className="absolute animate-morph overflow-hidden opacity-10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${y}%`,
                left: `${x}%`,
                transform: 'translateZ(0)',
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            >
              <div 
                className="absolute inset-0 animate-dimensional-shift"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 179, 255, 0.1) 0%, rgba(125, 90, 255, 0.1) 50%, rgba(0, 255, 170, 0.1) 100%)',
                  animationDelay: `${i * 0.5}s`,
                  borderRadius: 'inherit',
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Quantum logo with dimensional effects */}
          <div className="inline-flex flex-col items-center mb-10 relative animate-slide-up">
            <div className="relative">
              {/* Dimensional portal effect */}
              <div className="absolute -inset-4 animate-portal opacity-60"></div>
              
              {/* Quantum core with orbiting elements */}
              <div className="relative z-10">
                {/* Orbiting elements */}
                <Hexagon className="absolute h-16 w-16 text-cyan-500/50 animate-spin-slower" style={{ animationDuration: '15s' }} />
                <Hexagon className="absolute h-16 w-16 text-blue-500/40 animate-spin-reverse" style={{ animationDuration: '20s', transform: 'rotate(30deg)' }} />
                <Hexagon className="absolute h-16 w-16 text-purple-500/30 animate-spin-slow" style={{ animationDuration: '25s', transform: 'rotate(60deg)' }} />
                
                {/* Core shield with holographic effects */}
                <div className="relative backdrop-blur-sm rounded-full border border-cyan-500/50 p-3">
                  <div className="absolute inset-0 rounded-full animate-pulse-slow shadow-neon-cyan opacity-70"></div>
                  <Shield className="h-16 w-16 text-future relative z-10 animate-hologram-flicker" />
                </div>
                
                {/* Energy particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = Math.cos(angle) * 30;
                  const y = Math.sin(angle) * 30;
                  return (
                    <Sparkles 
                      key={i} 
                      className="absolute text-cyan-400 animate-pulse-slow" 
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${i * 0.5}s`,
                      }}
                      size={16}
                    />
                  );
                })}
              </div>
            </div>
            
            {/* Holographic company name */}
            <h1 className="text-5xl md:text-6xl font-bold mt-6 text-hologram tracking-wide">
              <span className="text-future">DevSecure</span>
            </h1>
          </div>

          {/* Main headline container with proper spacing */}
          <div className="flex flex-col space-y-6 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Primary headline with dimensional effects */}
            <div className="relative overflow-hidden">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight parallax-item" data-speed="-0.05">
                <span className="relative z-10 inline-block">
                  <span className="text-quantum" data-text="Empowering Innovation">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient-xy">
                      Empowering Innovation
                    </span>
                  </span>
                  {/* Animated glow underline */}
                  <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-purple-400/0 animate-shimmer"></span>
                </span>
              </h2>
            </div>
            
            {/* Secondary headline with quantum styling */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-neon parallax-item" data-speed="-0.08">
                Securing the Future of Technology
              </p>
              <div className="absolute bottom-0 w-32 h-px left-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse-slow mt-4"></div>
            </div>
          </div>

          {/* Enhanced description with holographic keywords */}
          <div className="mt-8 relative animate-slide-up overflow-hidden quantum-panel backdrop-blur-lg p-8" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 -z-10 animate-data-stream opacity-30"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed parallax-item" data-speed="-0.12">
              We specialize in 
              <span className="text-quantum relative inline-block mx-1">
                <Atom className="inline-block mr-1 -mt-1 animate-spin-slow text-cyan-400" size={18} />
                <span className="text-future">AI</span>
              </span>, 
              <span className="text-quantum relative inline-block mx-1">
                <Zap className="inline-block mr-1 -mt-1 text-blue-400" size={18} />
                <span className="text-future">Machine Learning</span>
              </span>, 
              <span className="text-quantum relative inline-block mx-1">
                <Shield className="inline-block mr-1 -mt-1 text-purple-400" size={18} />
                <span className="text-future">Cybersecurity</span>
              </span>, and 
              <span className="text-quantum relative inline-block mx-1">
                <Sparkles className="inline-block mr-1 -mt-1 text-indigo-400" size={18} />
                <span className="text-future">Advanced Development</span>
              </span> 
              solutions that drive innovation and protect your digital assets.
            </p>
          </div>

          {/* Quantum call-to-action buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 parallax-item animate-slide-up" data-speed="-0.15" style={{ animationDelay: '0.5s' }}>
            <Link
              to="/contact"
              className="group relative px-8 py-4 hologram-panel rounded-xl text-white font-medium overflow-hidden transition-all duration-500 hover:scale-[1.03] shadow-neon-cyan hover:shadow-neon-cyan transform hover:-translate-y-1"
            >
              {/* Quantum energy field */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-0 animate-aurora opacity-20"></div>
              </div>
              
              {/* Button content with hover effects */}
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span className="text-hologram text-lg">Initialize Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </span>
              
              {/* Energy scan effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full ease-in-out transition-transform duration-3000"></span>
            </Link>
            <Link
              to="/contact"
              className="quantum-button-primary px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-glow transform transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center">
                Initiate Quantum Contact
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
          
          {/* Quantum space exploration button - centered in page */}
          <div className="flex justify-center mt-16 parallax-item" data-speed="0.05">
            <a 
              href="#services" 
              className="group flex flex-col items-center py-2 px-4 rounded-full glass-panel border border-cyan-500/30 hover:border-cyan-500/60 backdrop-blur-md transition-all duration-500 animate-pulse-slow scale-90 hover:scale-95"
            >
              <span className="text-xs text-future group-hover:text-hologram transition-colors duration-500">Explore Quantum Space</span>
              <ChevronDown className="w-4 h-4 text-cyan-500 group-hover:text-cyan-300 animate-float-reverse" />
              
              {/* Orbiting particles */}
              <div className="absolute h-full w-full rounded-full">
                {[...Array(2)].map((_, i) => {
                  return (
                    <div 
                      key={i}
                      className="absolute h-0.5 w-0.5 rounded-full bg-cyan-400 animate-orbit"
                      style={{
                        top: '50%',
                        left: '50%',
                        transformOrigin: 'center',
                        animationDelay: `${i * 0.5}s`,
                      }}
                    />
                  );
                })}
              </div>
            </a>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Hero;