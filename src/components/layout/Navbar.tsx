import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, ExternalLink, Hexagon, Atom } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const location = useLocation();



  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveSection(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Random floating particles for navbar
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/services' },
    { title: 'Projects', href: '/projects' },
    { title: 'Plans', href: '/plans' },
    { title: 'Developers', href: '/developers' },
    { title: 'About', href: '/about' },
  ];

  return (
    <nav 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 backdrop-blur-xl shadow-glow' 
          : 'py-4 backdrop-blur-sm'
      }`}
    >
      {/* Holographic grid effect */}
      <div className="absolute inset-0 bg-black/60 bg-hologram-grid animate-grid-pulse"></div>
      
      {/* Quantum energy field */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[200%] h-[200%] animate-energy-field-1 opacity-10"
          style={{
            background: 'radial-gradient(circle at center, rgba(0, 179, 255, 0.2) 0%, transparent 70%)',
            top: '-50%', 
            left: '-50%'
          }}
        ></div>
        <div 
          className="absolute w-[200%] h-[200%] animate-energy-field-2 opacity-10"
          style={{
            background: 'radial-gradient(circle at center, rgba(125, 90, 255, 0.2) 0%, transparent 70%)',
            top: '-50%', 
            left: '-50%'
          }}
        ></div>
      </div>
      
      {/* Floating particles */}
      {particles.map(particle => (
        <div 
          key={particle.id}
          className="absolute rounded-full bg-cyan-500/30 animate-float-slow"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
            top: particle.top,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            opacity: 0.4,
          }}
        />
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group relative"
              aria-label="DevSecure Home"
            >
              {/* Quantum logo container */}
              <div className="relative">
                <div className="absolute inset-0 animate-portal opacity-40"></div>
                <div className="relative z-10 animate-dimensional-shift">
                  <Hexagon className="absolute h-8 w-8 text-cyan-400/50 animate-spin-slower" />
                  <Shield className="h-8 w-8 text-cyan-400 relative z-10 group-hover:text-cyan-300 transition-colors duration-300 animate-hologram-flicker" />
                </div>
              </div>
              <div className="relative overflow-hidden">
                <span className="text-2xl font-bold text-quantum relative" data-text="DevSecure">
                  <span className="text-future">DevSecure</span>
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-blue-500/0 group-hover:w-full transition-all duration-1000 ease-expo-out"></span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium overflow-hidden group transition-all duration-500 ${                  
                    activeSection === link.href
                      ? 'text-quantum'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Quantum active indicator */}
                  {activeSection === link.href && (
                    <>
                      <span className="absolute inset-0 bg-cyan-500/10 backdrop-blur-sm rounded-md -z-10"></span>
                      <span className="absolute inset-0 rounded-md border border-cyan-500/30 animate-pulse-slow -z-10"></span>
                      <div className="absolute -bottom-1 left-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-neon-cyan -translate-x-1/2"></div>
                    </>
                  )}
                  
                  {/* Hover effect */}
                  {hoveredIndex === index && activeSection !== link.href && (
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-md -z-10 animate-shimmer"></span>
                  )}
                  
                  {/* Text with quantum effect */}
                  <span className="relative z-10 group-hover:text-hologram transition-all duration-500">{link.title}</span>
                  
                  {/* Advanced underline effect for inactive links */}
                  {activeSection !== link.href && (
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-full transition-all duration-500 ease-spring"></span>
                  )}
                </Link>
              ))}
              <Link
                to="/contact"
                className="group relative ml-3 hologram-button overflow-hidden transition-all duration-500 flex items-center"
              >
                <span className="relative z-10">Contact</span>
                <ExternalLink className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <div className="absolute -inset-1 bg-cyan-500/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative text-cyan-400 hover:text-white p-2 rounded-full focus:outline-none group transition-all duration-500 overflow-hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="absolute inset-0 rounded-full animate-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-500/10"></span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10 animate-hologram-flicker" />
              ) : (
                <Menu className="h-6 w-6 relative z-10 animate-hologram-flicker" />
              )}
              <span className="absolute inset-0 rounded-full border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-screen animate-blur-in' : 'max-h-0'}`}
      >
        <div className="quantum-panel backdrop-blur-xl border-t border-violet-500/20 shadow-neon-cyan">
          <div className="absolute inset-0 animate-data-stream opacity-20"></div>
          <div className="px-4 pt-2 pb-4 space-y-2 divide-y divide-gray-800/20 relative z-10">
            {navLinks.map((link, idx) => (
              <Link
                key={link.title}
                to={link.href}
                className={`block px-4 py-3 text-base font-medium rounded-md transition-all duration-500 animate-slide-up ${
                  activeSection === link.href
                    ? 'text-quantum bg-cyan-900/20'
                    : 'text-gray-300 hover:bg-violet-900/10 hover:text-white'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center space-x-2">
                  <Atom className={`w-4 h-4 ${activeSection === link.href ? 'text-cyan-300 animate-spin-slow' : 'text-cyan-700'}`} />
                  <span className={`${activeSection === link.href ? 'text-hologram' : ''}`}>{link.title}</span>
                </div>
                {activeSection === link.href && (
                  <div className="mt-1 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-shimmer"></div>
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                className="relative flex items-center justify-center w-full hologram-button px-4 py-3 rounded-md mt-2 overflow-hidden group animate-slide-up"
                style={{ animationDelay: '0.5s' }}
              >
                <span className="relative z-10">Contact Us</span>
                <ExternalLink className="ml-1.5 w-4 h-4 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
                <div className="absolute -inset-1 animate-cosmic-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 group-hover:opacity-100 opacity-0 transition-opacity duration-500"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;