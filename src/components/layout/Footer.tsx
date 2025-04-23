
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden border-t border-gray-900/50 mt-16">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-blue-950/20" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>
        
        {/* Animated shimmer effect */}
        <div className="absolute inset-0 animate-shimmer opacity-30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-500/5 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-40 right-1/4 w-40 h-40 bg-indigo-500/5 rounded-full filter blur-2xl opacity-20 animate-pulse-slow animation-delay-3000" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="group inline-flex items-center space-x-2">
              <div className="relative">
                <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <Shield className="relative h-6 w-6 text-cyan-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
                DevSecure
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering innovation and securing the future of technology through cutting-edge solutions .
            </p>
            <div className="pt-3">
              <Link 
                to="/about" 
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1 font-medium text-sm group relative overflow-hidden"
              >
                <span className="relative z-10">Learn about us</span>
                <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 relative z-10">→</span>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
              <span>Quick Links</span>
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {[
                { title: 'About', path: '/about' },
                { title: 'Services', path: '/services' },
                { title: 'Projects', path: '/projects' },
                { title: 'Contact', path: '/contact' },
                { title: 'Privacy Policy', path: '/privacy' },
                { title: 'Terms of Service', path: '/terms' }
              ].map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block group"
                  >
                    <span className="inline-flex items-center">
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300 opacity-0 group-hover:opacity-100">•</span>
                      <span className="ml-1">{link.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              <li className="group">
                <a href="mailto:devxsecure@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>devxsecure@gmail.com</span>
                </a>
              </li>
              <li className="group">
                <a href="tel:+923238136352" className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+92323 8136 352</span>
                </a>
              </li>
              <li className="group">
                <div className="flex items-center space-x-3 text-gray-400">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                    <MapPin className="h-4 w-4" />
                  </div>
                  <span>Multan, Punjab, Pakistan</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg relative inline-block">
              <span>Stay Updated</span>
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Stay in the loop — subscribe to our newsletter for the latest updates and news.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-900/80 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-gray-300 pr-12"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Mail className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow hover:shadow-glow font-medium overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_100%] animate-shimmer"></span>
                  <span className="relative z-10">Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/30 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} DevSecure. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a
                href="https://www.facebook.com/jamyasir0010"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                  <Facebook className="relative h-5 w-5" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/devxyasir"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                  <Linkedin className="relative h-5 w-5" />
                </div>
              </a>
              <a
                href="https://github.com/devsecure"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110 group"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <div className="relative">
                  <div className="absolute -inset-2 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-full transition-colors duration-300"></div>
                  <Github className="relative h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
