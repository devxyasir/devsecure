import { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Shield, 
  Database, 
  Globe, 
  Smartphone, 
  Server,
  Settings,
  Search,
  BarChart,
  BrainCircuit,
  UserCheck,
  FileCode,
  Workflow
} from 'lucide-react';
import SEOHead from '../shared/SEOHead';
import { throttle } from '../../utils/optimizations';

// Helper function to get colors based on service color name
const getColorForService = (colorName: string, shade: string, opacity: number): string => {
  const colorMap: Record<string, Record<string, string>> = {
    cyan: {
      '400': 'rgba(34, 211, 238, ' + opacity + ')',
      '500': 'rgba(6, 182, 212, ' + opacity + ')'
    },
    green: {
      '400': 'rgba(74, 222, 128, ' + opacity + ')',
      '500': 'rgba(34, 197, 94, ' + opacity + ')'
    },
    red: {
      '400': 'rgba(248, 113, 113, ' + opacity + ')',
      '500': 'rgba(239, 68, 68, ' + opacity + ')'
    },
    blue: {
      '400': 'rgba(96, 165, 250, ' + opacity + ')',
      '500': 'rgba(59, 130, 246, ' + opacity + ')'
    },
    purple: {
      '400': 'rgba(192, 132, 252, ' + opacity + ')',
      '500': 'rgba(168, 85, 247, ' + opacity + ')'
    },
    yellow: {
      '400': 'rgba(250, 204, 21, ' + opacity + ')',
      '500': 'rgba(234, 179, 8, ' + opacity + ')'
    },
    indigo: {
      '400': 'rgba(129, 140, 248, ' + opacity + ')',
      '500': 'rgba(99, 102, 241, ' + opacity + ')'
    },
    orange: {
      '400': 'rgba(251, 146, 60, ' + opacity + ')',
      '500': 'rgba(249, 115, 22, ' + opacity + ')'
    },
    pink: {
      '400': 'rgba(244, 114, 182, ' + opacity + ')',
      '500': 'rgba(236, 72, 153, ' + opacity + ')'
    },
    violet: {
      '400': 'rgba(167, 139, 250, ' + opacity + ')',
      '500': 'rgba(139, 92, 246, ' + opacity + ')'
    },
    emerald: {
      '400': 'rgba(52, 211, 153, ' + opacity + ')',
      '500': 'rgba(16, 185, 129, ' + opacity + ')'
    },
    amber: {
      '400': 'rgba(251, 191, 36, ' + opacity + ')',
      '500': 'rgba(245, 158, 11, ' + opacity + ')'
    }
  };

  return colorMap[colorName]?.[shade] || 'rgba(34, 211, 238, ' + opacity + ')';
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
      'Ruby on Rails',
      'WordPress Development',
      'Progressive Web Apps',
      'Responsive Design',
      'WebGL & Three.js',
      'Web Component Architecture'
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
      'E-commerce SEO',
      'Mobile SEO',
      'Schema Markup',
      'Analytics & Tracking',
      'Conversion Rate Optimization',
      'International SEO'
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
      'Compliance (GDPR, HIPAA)',
      'Security Training',
      'DDoS Protection',
      'Zero Trust Architecture',
      'Cloud Security',
      'API Security'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Quantum-powered mobile applications for next-generation experiences.',
    color: 'blue',
    subSkills: [
      'React Native',
      'Flutter & Dart',
      'iOS Development (Swift)',
      'Android Development (Kotlin)',
      'Cross-Platform Development',
      'Progressive Web Apps',
      'Mobile UI/UX Design',
      'App Performance Optimization',
      'Push Notifications',
      'Mobile Analytics',
      'App Store Optimization',
      'Mobile Security'
    ]
  },
  {
    icon: BrainCircuit,
    title: 'AI & Machine Learning',
    description: 'Advanced neural systems that transcend conventional computational boundaries.',
    color: 'purple',
    subSkills: [
      'Deep Learning Systems',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'Recommendation Systems',
      'Sentiment Analysis',
      'ChatGPT Integration',
      'AI-Driven Automation',
      'Neural Networks',
      'Transfer Learning',
      'Reinforcement Learning',
      'AI Ethics & Governance'
    ]
  },
  {
    icon: Database,
    title: 'Database & Data Engineering',
    description: 'Quantum data architectures for optimal storage, retrieval, and processing.',
    color: 'yellow',
    subSkills: [
      'Database Design',
      'SQL & NoSQL Solutions',
      'Data Warehousing',
      'ETL Pipelines',
      'Big Data Processing',
      'Real-time Data Systems',
      'Database Optimization',
      'Data Migration',
      'Database Security',
      'Distributed Systems',
      'Data Governance',
      'Database Administration'
    ]
  },
  {
    icon: Server,
    title: 'DevOps & Cloud',
    description: 'Dimensional infrastructure orchestration for seamless development and deployment.',
    color: 'indigo',
    subSkills: [
      'CI/CD Pipelines',
      'Infrastructure as Code',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'AWS/Azure/GCP Solutions',
      'Microservice Architecture',
      'Serverless Computing',
      'Cloud Migration',
      'Performance Monitoring',
      'Auto-scaling Systems',
      'SRE Practices',
      'Configuration Management'
    ]
  },
  {
    icon: BarChart,
    title: 'Data Analytics & BI',
    description: 'Transform quantum data flows into actionable intelligence and insights.',
    color: 'orange',
    subSkills: [
      'Business Intelligence',
      'Data Visualization',
      'Dashboard Development',
      'Statistical Analysis',
      'Predictive Modeling',
      'Customer Analytics',
      'Marketing Analytics',
      'Real-time Analytics',
      'A/B Testing',
      'Data Mining',
      'Excel & Advanced Analytics',
      'Power BI & Tableau'
    ]
  },
  {
    icon: Workflow,
    title: 'E-commerce Solutions',
    description: 'Quantum-powered digital commerce platforms that transcend conventional shopping.',
    color: 'pink',
    subSkills: [
      'Custom E-commerce Development',
      'Shopify Development',
      'WooCommerce Solutions',
      'Magento Implementation',
      'Payment Gateway Integration',
      'Shopping Cart Development',
      'Inventory Management',
      'Order Processing Systems',
      'E-commerce SEO',
      'Conversion Optimization',
      'Mobile E-commerce',
      'Headless Commerce'
    ]
  },
  {
    icon: FileCode,
    title: 'Custom Software',
    description: 'Bespoke quantum software solutions tailored to your dimensional requirements.',
    color: 'violet',
    subSkills: [
      'Enterprise Software',
      'SaaS Development',
      'Desktop Applications',
      'Legacy System Integration',
      'Custom CRM Solutions',
      'ERP Systems',
      'Healthcare Software',
      'Fintech Solutions',
      'Educational Software',
      'Real Estate Systems',
      'Logistics Software',
      'Industry-Specific Solutions'
    ]
  },
  {
    icon: UserCheck,
    title: 'UX & UI Design',
    description: 'Crafting dimensional interfaces that transcend conventional user experiences.',
    color: 'emerald',
    subSkills: [
      'User Research',
      'Wireframing & Prototyping',
      'Interface Design',
      'Interaction Design',
      'Design Systems',
      'Usability Testing',
      'Accessibility (WCAG)',
      'Responsive Design',
      'Mobile App Design',
      'Dark Mode Design',
      'Motion UI',
      'Micro-interactions'
    ]
  },
  {
    icon: Settings,
    title: 'API & Integration',
    description: 'Seamless quantum connections between systems, services, and data flows.',
    color: 'amber',
    subSkills: [
      'RESTful API Development',
      'GraphQL Implementation',
      'API Gateway Solutions',
      'Third-party Integrations',
      'Payment API Integration',
      'Social Media APIs',
      'CRM Integration',
      'ERP Integration',
      'Webhook Implementation',
      'Microservice APIs',
      'API Documentation',
      'API Security'
    ]
  }
];

const Services = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simplified scroll handler with increased throttle time
  const handleScroll = useMemo(
    () =>
      throttle(() => {
        if (!sectionRef.current) return;

        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        
        setIsVisible(isInView);
      }, 250), // Increased throttle time from 100ms to 250ms
    []
  );

  useEffect(() => {
    // Only add scroll listener if IntersectionObserver is not available
    if (!('IntersectionObserver' in window)) {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial visibility
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      // Use IntersectionObserver for better performance
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0.1 }
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
        observer.disconnect();
      };
    }
  }, [handleScroll]);

  // Simplified rendering of service cards without animated hover effects for better performance
  const renderServiceCards = () => {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{transition: 'opacity 0.5s ease-in-out'}}>
        {services.map((service, index) => {
          const isHovered = hoverIndex === index;

          return (
            <div 
              key={index}
              className="service-card group relative"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="relative p-6 h-full quantum-panel transform will-change-transform">
                <div className="flex items-start">
                  {/* Simplified icon container */}
                  <div className="relative mr-4">
                    {/* Static icon background */}
                    <div className="relative z-10 hologram-panel p-3 rounded-xl">
                      <service.icon 
                        className="h-8 w-8"
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
                    <p className="text-gray-400 text-sm mb-4">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Simplified skills showcase */}
                <div className="mt-6">
                  <div className="text-gray-400 text-xs mb-2 flex justify-between items-center">
                    <span>Core Competencies</span>
                    <span className="text-gray-500">{service.subSkills.length} skills</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {/* Limited number of skills shown for performance */}
                    {service.subSkills.slice(0, isHovered ? 8 : 4).map((skill, idx) => (
                      <div 
                        key={idx} 
                        className="text-xs py-1.5 px-2 glass-panel rounded-md flex items-center text-white"
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
    );
  };

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden hardware-accelerated">
      <SEOHead
        title="DevSecure Innovative Technology Services"  
        description="Explore DevSecure's comprehensive technology service offerings including web development, mobile apps, cybersecurity, AI integration, cloud solutions, and digital marketing. Our quantum-inspired approach ensures cutting-edge innovation for your business."
        keywords="DevSecure services, DevSecure technology, DevSecure web development, DevSecure mobile apps, DevSecure cybersecurity, DevSecure AI solutions, DevSecure innovation, quantum-inspired development, secure technology solutions, advanced digital services"
        currentPage="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": services.map((service, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": `DevSecure ${service.title}`,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "DevSecure",
                "url": "https://devsecure.com/"
              },
              "serviceType": service.title
            }
          }))
        }}
      />
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-4 mt-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">Quantum Solutions Matrix</h2>
          <p className="section-description text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive suite of advanced technological services designed to transform your digital ecosystem.
          </p>
        </div>

        {renderServiceCards()}
      </div>
    </section>
  );
};

export default Services;
