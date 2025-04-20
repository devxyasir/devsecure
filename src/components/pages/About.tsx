import { useState } from 'react';
import { Shield, Users, Target, Zap, ChevronRight, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the security and privacy of our clients in everything we do.',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We build long-term relationships based on trust and mutual success.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge solutions and technologies.',
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We deliver exceptional quality and results in every project.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.15),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-60 -left-32 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 -right-32 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl animate-pulse-slow animation-delay-2000" />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-3">
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
            </div>
            <h1 className="section-title text-5xl md:text-7xl mb-8 animate-gradient-x">
              About DevSecure
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists dedicated to securing and advancing
              the digital future through innovative solutions and expert services.
            </p>
            
            {/* Added hero CTA button */}
            <div className="mt-8">
              <a href="#values" className="inline-flex items-center px-6 py-3 glass-panel gradient-border-hover glow-on-hover text-white font-medium rounded-lg transition-all duration-300 group">
                <span>Discover Our Values</span>
                <ChevronRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20" />
        <div className="absolute inset-0 animate-shimmer opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-3 gap-2">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <Award className="text-cyan-400 w-5 h-5" />
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 animate-gradient-x">Our Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {values.map((value, index) => {
              const delay = index * 150;
              return (
                <div
                  key={index}
                  className="glass-panel p-8 gradient-border-hover rounded-xl relative group transform transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <div className="relative mb-6 inline-block">
                    <div className="absolute -inset-3 bg-cyan-500 rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-900/50 p-3 rounded-xl border border-gray-800 group-hover:border-cyan-500/30 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-3">
              <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto"></div>
            </div>
            <h2 className="text-4xl font-bold mb-4 animate-gradient-x">Our Leadership Team</h2>
            <p className="text-gray-300 text-lg">Meet the experts behind DevSecure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Muhammad Bilal',
                role: 'Executive Director & Co-Founder',
                image: 'https://i.ibb.co/d4RnytpY/bilal-1.webp',
                quote: "Innovation isn't just an outcome — it's our directive, where technology and trust align.",
              },
              {
                name: 'Muhammad Yasir',
                role: 'Chairman, CEO & Founder',
                image: 'https://i.ibb.co/t7gjkPP/yasir.webp',
                quote: 'We build not just for today, but for the secure digital future.',
              },
              {
                name: 'Muhammad Arslan',
                role: 'Co-Founder & Head of Development',
                image: 'https://i.ibb.co/Mxqds843/ars.webp',
                quote: 'We don’t just develop — we architect digital experiences that perform, scale, and evolve.',
              },
            ].map((member, index) => {
              const [isHovered, setIsHovered] = useState(false);
              
              return (
                <div
                  key={index}
                  className="group relative glass-panel rounded-xl overflow-hidden gradient-border-hover transform transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent z-10"></div>
                  </div>
                  
                  <div className="p-6 relative transition-all duration-500">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{member.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="inline-block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                      <p className="text-cyan-400 font-medium">{member.role}</p>
                    </div>
                    
                    <div className={`mt-4 text-gray-400 italic text-sm opacity-0 transform translate-y-4 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : ''}`}>
                      "{member.quote}"
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
