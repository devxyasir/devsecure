import React from 'react';
import { 
  Code, 
  Globe, 
  Server, 
  Search, 
  Smartphone, 
  ShieldCheck, 
  BrainCircuit, 
  Database, 
  BarChart, 
  Network,
  Layers
} from 'lucide-react';

// Define the skill category interface
interface SkillCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  color: string;
  skills: Array<{
    name: string;
    level: number;
    subSkills?: string[];
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'development',
    title: 'Development',
    icon: Code,
    description: 'Full-stack development expertise across multiple platforms and frameworks',
    color: 'cyan',
    skills: [
      { 
        name: 'Web Development', 
        level: 98,
        subSkills: ['React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express', 'PHP', 'Laravel', 'Django', 'Flask', 'Ruby on Rails']
      },
      { 
        name: 'Mobile Development', 
        level: 95,
        subSkills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java for Android']
      },
      { 
        name: 'Desktop Development', 
        level: 90,
        subSkills: ['Electron', 'PyQt', 'WPF', 'Windows Forms', '.NET', 'Java Swing']
      },
      { 
        name: 'API Development', 
        level: 97,
        subSkills: ['RESTful APIs', 'GraphQL', 'WebSockets', 'gRPC', 'Swagger/OpenAPI']
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    description: 'Cutting-edge artificial intelligence and machine learning solutions',
    color: 'blue',
    skills: [
      { 
        name: 'Deep Learning', 
        level: 92,
        subSkills: ['Neural Networks', 'CNN', 'RNN', 'LSTM', 'Transformers', 'GANs']
      },
      { 
        name: 'Natural Language Processing', 
        level: 90,
        subSkills: ['BERT', 'GPT', 'NER', 'Sentiment Analysis', 'Text Classification', 'Language Translation']
      },
      { 
        name: 'Computer Vision', 
        level: 88,
        subSkills: ['Object Detection', 'Image Recognition', 'Face Recognition', 'Image Segmentation']
      },
      { 
        name: 'Predictive Analytics', 
        level: 93,
        subSkills: ['Regression', 'Classification', 'Clustering', 'Time Series', 'Anomaly Detection']
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: Server,
    description: 'End-to-end infrastructure management and deployment automation',
    color: 'purple',
    skills: [
      { 
        name: 'Cloud Infrastructure', 
        level: 95,
        subSkills: ['AWS', 'Azure', 'Google Cloud', 'Digital Ocean', 'Heroku', 'Firebase']
      },
      { 
        name: 'CI/CD Pipelines', 
        level: 92,
        subSkills: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Travis CI', 'Azure DevOps']
      },
      { 
        name: 'Containerization', 
        level: 94,
        subSkills: ['Docker', 'Kubernetes', 'Docker Compose', 'Docker Swarm', 'Helm']
      },
      { 
        name: 'Infrastructure as Code', 
        level: 90,
        subSkills: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi', 'Chef', 'Puppet']
      }
    ]
  },
  {
    id: 'seo',
    title: 'SEO & Digital Marketing',
    icon: Search,
    description: 'Comprehensive search engine optimization and digital marketing strategies',
    color: 'green',
    skills: [
      { 
        name: 'Technical SEO', 
        level: 96,
        subSkills: ['Site Speed Optimization', 'Mobile Optimization', 'Structured Data', 'XML Sitemaps', 'Robots.txt', 'Canonical Tags', 'URL Structure']
      },
      { 
        name: 'On-Page SEO', 
        level: 97,
        subSkills: ['Keyword Research', 'Content Optimization', 'Meta Tags', 'Internal Linking', 'Schema Markup', 'Featured Snippets Optimization']
      },
      { 
        name: 'Off-Page SEO', 
        level: 93,
        subSkills: ['Link Building', 'Social Signals', 'Brand Building', 'Guest Posting', 'Local SEO', 'Google Business Profile']
      },
      { 
        name: 'SEO Analytics', 
        level: 94,
        subSkills: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Rank Tracking', 'Conversion Tracking']
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: ShieldCheck,
    description: 'Comprehensive security assessments and defensive solutions',
    color: 'red',
    skills: [
      { 
        name: 'Application Security', 
        level: 94,
        subSkills: ['OWASP Top 10', 'Secure Coding', 'Penetration Testing', 'Code Reviews', 'Vulnerability Assessment']
      },
      { 
        name: 'Network Security', 
        level: 92,
        subSkills: ['Firewalls', 'IDS/IPS', 'VPN', 'Network Monitoring', 'DDoS Protection', 'Zero Trust Networks']
      },
      { 
        name: 'Identity & Access', 
        level: 95,
        subSkills: ['OAuth', 'OpenID Connect', 'JWT', 'SAML', 'MFA', 'SSO', 'Privileged Access Management']
      },
      { 
        name: 'Compliance & Governance', 
        level: 90,
        subSkills: ['GDPR', 'CCPA', 'HIPAA', 'PCI DSS', 'SOC 2', 'ISO 27001', 'Security Policies']
      }
    ]
  },
  {
    id: 'data',
    title: 'Data Engineering',
    icon: Database,
    description: 'Robust data storage, processing, and analytics solutions',
    color: 'yellow',
    skills: [
      { 
        name: 'Database Management', 
        level: 96,
        subSkills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Cassandra', 'DynamoDB', 'Oracle', 'MS SQL Server']
      },
      { 
        name: 'Data Processing', 
        level: 92,
        subSkills: ['ETL Pipelines', 'Apache Spark', 'Hadoop', 'Apache Kafka', 'Apache Airflow', 'Data Lakes']
      },
      { 
        name: 'Big Data', 
        level: 89,
        subSkills: ['Data Warehousing', 'Data Modeling', 'Snowflake', 'BigQuery', 'Redshift', 'Elasticsearch']
      },
      { 
        name: 'BI & Visualization', 
        level: 93,
        subSkills: ['Tableau', 'Power BI', 'Looker', 'Grafana', 'D3.js', 'Dashboard Design']
      }
    ]
  },
];

const CoreSkills = () => {
  // Set a default static category to display
  const currentCategory = skillCategories[0]; // Default to first category

  return (
    <section id="core-skills" className="py-32 bg-black relative overflow-hidden">
      {/* Cosmic particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Technological Matrix
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our diverse spectrum of technical expertise spans across multiple dimensions of modern technology
          </p>
        </div>
        
        {/* Static category display */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-300 glass-panel text-gray-400"
            >
              <category.icon size={18} />
              <span>{category.title}</span>
            </div>
          ))}
        </div>
        
        {/* Skills display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentCategory.skills.map((skill, index) => (
            <div key={index} className="glass-panel p-6 rounded-xl transition-all duration-300">
              <h4 className="text-xl font-bold text-hologram mb-4">
                {skill.name}
              </h4>
              
              {/* Skill level */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Proficiency</span>
                  <span className="text-future">{skill.level}%</span>
                </div>
                <div className="h-1.5 glass-panel rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500/80 transition-all duration-1000 animate-pulse-slow"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
              
              {/* Display a subset of subskills */}
              {skill.subSkills && (
                <div className="mt-4">
                  <h5 className="text-sm text-gray-300 mb-2 font-medium">Specialized In:</h5>
                  <div className="flex flex-wrap gap-2">
                    {skill.subSkills.slice(0, 4).map((subSkill, idx) => (
                      <span 
                        key={idx} 
                        className="inline-flex text-xs py-1 px-2 glass-panel rounded-md text-white"
                      >
                        {subSkill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Quantum call-to-action */}
        <div className="relative text-center mt-16">
          <div className="h-px w-32 mx-auto mb-10 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-slow"></div>
          
          <div className="relative inline-block group glass-panel p-6 rounded-xl animate-float shadow-neon-cyan/30">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute inset-0 animate-data-stream opacity-20"></div>
            </div>
            
            <h3 className="text-2xl font-bold text-hologram mb-2">Need a Custom Solution?</h3>
            <p className="text-gray-300/90 mb-6 max-w-2xl">
              Explore our full technological capabilities to find the perfect quantum-powered solution for your business
            </p>
            
            <a href="/services" className="hologram-panel px-6 py-3 rounded-lg text-white font-medium group relative overflow-hidden inline-flex items-center">
              <span className="relative z-10 flex items-center">
                <span>Explore All Services</span>
                <Layers className="ml-2 animate-pulse-slow" size={18} />
              </span>
              
              {/* Energy scan effect */}
              <span className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full ease-in-out transition-transform duration-1500"></span>
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CoreSkills;
