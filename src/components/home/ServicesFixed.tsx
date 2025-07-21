import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Shield, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Hexagon,
  Search,
  BarChart,
  Server,
  Settings,
  BrainCircuit,
  Code,
  Layers
} from 'lucide-react';
import SEOHead from '../shared/SEOHead';
import { throttle } from '../../utils/optimizations';
import { getAnimationSettings } from '../../utils/animationOptimizer';

// Helper function to get colors based on service color name
const getColorForService = (colorName: string, shade: string, opacity: number): string => {
  const colorMap: Record<string, Record<string, string>> = {
    cyan: {
      '400': `rgba(34, 211, 238, ${opacity})`,
      '500': `rgba(6, 182, 212, ${opacity})`
    },
    green: {
      '400': `rgba(74, 222, 128, ${opacity})`,
      '500': `rgba(34, 197, 94, ${opacity})`
    },
    red: {
      '400': `rgba(248, 113, 113, ${opacity})`,
      '500': `rgba(239, 68, 68, ${opacity})`
    },
    blue: {
      '400': `rgba(96, 165, 250, ${opacity})`,
      '500': `rgba(59, 130, 246, ${opacity})`
    },
    purple: {
      '400': `rgba(192, 132, 252, ${opacity})`,
      '500': `rgba(168, 85, 247, ${opacity})`
    },
    yellow: {
      '400': `rgba(250, 204, 21, ${opacity})`,
      '500': `rgba(234, 179, 8, ${opacity})`
    },
    indigo: {
      '400': `rgba(129, 140, 248, ${opacity})`,
      '500': `rgba(99, 102, 241, ${opacity})`
    },
    orange: {
      '400': `rgba(251, 146, 60, ${opacity})`,
      '500': `rgba(249, 115, 22, ${opacity})`
    }
  };

  return colorMap[colorName]?.[shade] || `rgba(34, 211, 238, ${opacity})`;
};

// Service interface with sub-skills
interface ServiceType {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  subSkills: string[];
}

const services: ServiceType[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Crafting advanced, dimensional web experiences with cutting-edge technologies.',
    color: 'cyan',
    subSkills: [
      'React.js & Next.js',
      'Vue.js & Nuxt.js',
      'Angular & TypeScript',
      'Node.js & Express',
      'PHP & Laravel',
      'Python & Django',
      'Progressive Web Apps',
      'Responsive Design'
    ]
  },
  {
  icon: Brain,
  title: 'AI Agents & Automation',
  description: 'Autonomous systems designed to streamline operations, improve efficiency, and reduce manual workloads.',
  color: 'blue',
  subSkills: [
    'Autonomous AI Agents',
    'Workflow Automation',
    'Prompt Engineering',
    'NLP-based Task Handling',
    'API Integration',
    'Data Extraction & Processing',
    'AI Chatbots',
    'Email & CRM Automation',
    'Custom Webhooks',
    'Scripted Logic Flows',
    'Scheduled Automation',
    'Cross-Platform Orchestration'
  ]
},
  {
    icon: Search,
    title: 'SEO & Digital Marketing',
    description: 'Quantum optimization strategies to enhance visibility and drive targeted traffic.',
    color: 'green',
    subSkills: [
      'Technical SEO Audits',
      'On-Page Optimization',
      'Off-Page Strategy',
      'Keyword Research',
      'Content Strategy',
      'Local SEO',
      'Analytics & Tracking'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Dimensional protection systems safeguarding your digital infrastructure.',
    color: 'red',
    subSkills: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Security Architecture',
      'OWASP Top 10 Protection',
      'Secure Code Review',
      'Incident Response',
      'API Security'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Quantum-powered mobile applications for next-generation experiences.',
    color: 'blue',
    subSkills: [
      'iOS Development',
      'Android Development',
      'React Native',
      'Flutter',
      'Mobile UI/UX',
      'App Store Optimization',
      'Push Notifications'
    ]
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Sentient algorithmic solutions that evolve with your business needs.',
    color: 'purple',
    subSkills: [
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Neural Networks',
      'ML Ops',
      'Deep Learning',
      'AI Integration'
    ]
  },
  {
    icon: Server,
    title: 'Cloud Solutions',
    description: 'Interdimensional infrastructure design for scalable, resilient operations.',
    color: 'yellow',
    subSkills: [
      'AWS Architecture',
      'Microsoft Azure',
      'Google Cloud Platform',
      'Kubernetes',
      'Serverless Computing',
      'Cloud Migration',
      'DevOps'
    ]
  }
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  // Get animation settings based on device capabilities
  const animationSettings = useMemo(() => getAnimationSettings(), []);
  const shouldAnimate = animationSettings.useParallax;
  
  // Create structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": `Intelliphic ${service.title}`,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Intelliphic",
          "url": "https://Intelliphic.com/"
        }
      }
    }))
  };

  // Track mouse position for quantum field effects - with throttling
  useEffect(() => {
    if (!containerRef.current || !shouldAnimate) return;
    
    const handleMouseMove = throttle((e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    }, 50);
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldAnimate]);
  
  // Reset hover state on mobile
  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth < 768) {
        setHoverIndex(null);
      }
    }, 100);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" ref={containerRef} className="py-20 relative overflow-hidden hardware-accelerated">
      <SEOHead
        title="Intelliphic Innovative Technology Services"  
        description="Explore Intelliphic's comprehensive technology service offerings including web development, mobile apps, cybersecurity, AI integration, cloud solutions, and digital marketing. Our quantum-inspired approach ensures cutting-edge innovation for your business."
        keywords="Intelliphic services, Intelliphic technology, Intelliphic web development, Intelliphic mobile apps, Intelliphic cybersecurity, Intelliphic AI solutions, Intelliphic innovation, quantum-inspired development, secure technology solutions, advanced digital services"
        currentPage="/services"
        structuredData={structuredData}
      />
      
      {/* Static background layers for better performance */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(16,65,232,0.15),transparent_80%)]" />
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]" />
      </div>

      {/* Interactive cursor effect - only render if device supports it */}
      {shouldAnimate && (
        <div 
          className="absolute pointer-events-none opacity-10 mix-blend-screen hardware-accelerated" 
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(14,165,233,0.15), transparent 80%)`,
            height: '200%',
            width: '200%',
            left: '-50%',
            top: '-50%',
            transform: 'translate(0%, 0%) translateZ(0)',
            willChange: 'background',
          }}
        />
      )}

      <div className="container mx-auto px-4">
        <div className="mb-16 text-center hardware-accelerated">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Quantum Solutions Matrix</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of advanced technological services designed to transform your digital ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isHovered = hoverIndex === index;
            
            return (
              <div 
                key={index}
                className="mb-6 hardware-accelerated"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className="relative p-6 h-full bg-gray-900/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-glow-optimized transform transition-all duration-300 hover:scale-[1.02] hardware-accelerated">
                  {/* Static decoration */}
                  {shouldAnimate && (
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-0 group-hover:opacity-40 transition-opacity duration-300 hidden lg:block">
                      <Hexagon 
                        style={{ 
                          color: getColorForService(service.color, '500', 0.2)
                        }}
                        size={60} 
                      />
                    </div>
                  )}

                  <div className="flex items-start">
                    {/* Icon container */}
                    <div className="relative mr-4 hardware-accelerated">
                      {/* Energy field around icon */}
                      <div className={`absolute -inset-4 rounded-full blur-sm opacity-0 ${isHovered ? 'opacity-40' : ''} transition-opacity duration-300 hardware-accelerated`}
                        style={{
                          background: getColorForService(service.color, '500', 0.1)
                        }}
                      ></div>
                      
                      {/* Icon wrapper */}
                      <div className="relative z-10 p-3 rounded-xl bg-gray-800/70">
                        <service.icon 
                          className="h-8 w-8 transition-all duration-300 hardware-accelerated"
                          style={{
                            color: getColorForService(service.color, '400', 1)
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Service title and description */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Skills showcase */}
                  <div className="mt-6">
                    <div className="text-gray-400 text-xs mb-2 flex justify-between items-center">
                      <span>Core Competencies</span>
                      <span className="text-gray-500">{service.subSkills.length} skills</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.subSkills.slice(0, isHovered ? service.subSkills.length : 6).map((skill, idx) => (
                        <div 
                          key={idx} 
                          className="text-xs py-1.5 px-2 bg-gray-800/70 rounded-md flex items-center text-white hardware-accelerated"
                        >
                          <div className="h-1 w-1 rounded-full mr-1.5 bg-white"></div>
                          <span className="line-clamp-1">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
