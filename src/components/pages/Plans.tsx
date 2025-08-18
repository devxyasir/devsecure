import { useState, useEffect } from 'react';
import { Check, ChevronRight, X, Shield, Zap, Code, Laptop, Clock, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEOHead from '../shared/SEOHead';

// Define plan types
type PlanCategory = 'custom' | 'wordpress' | 'app' | 'seo' | 'maintenance';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  title: string;
  price: {
    pkr: string;
    usd: string;
  };
  subtitle?: string;
  features: PlanFeature[];
  category: PlanCategory;
  featured?: boolean;
  deliveryTime?: string;
  discountPercent?: number;
}

// Currency conversion rate - 300 PKR = 1 USD
const PKR_TO_USD_RATE = 0.00333;

interface PriceData {
  pkr: string;
  usd: string;
}

const Plans = () => {
  const [activeCategory, setActiveCategory] = useState<PlanCategory>('custom');
  //const [showPromotion, setShowPromotion] = useState(true);
  const [currency, setCurrency] = useState<'pkr' | 'usd'>('pkr');
  const [discountEnds, setDiscountEnds] = useState<string>('');
  const navigate = useNavigate();
  
  // Set a countdown for the discount offer (7 days from now)
  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const formattedDate = endDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    setDiscountEnds(formattedDate);
  }, []);
  
  // Helper function to convert PKR string to USD string
  const pkrToUsd = (pkrString: string): string => {
    // Handle price ranges with '+' symbol
    if (pkrString.includes('+')) {
      const pkrValue = parseFloat(pkrString.replace('PKR ', '').replace(',', '').replace('+', ''));
      return `USD ${(pkrValue * PKR_TO_USD_RATE).toFixed(2)}+`;
    }
    
    const pkrValue = parseFloat(pkrString.replace('PKR ', '').replace(',', ''));
    return `USD ${(pkrValue * PKR_TO_USD_RATE).toFixed(2)}`;
  };

  // All plans from plans.txt, organized by category
  const plans: Plan[] = [
    // CUSTOM CODED WEBSITE PLANS
    {
      id: 'custom-basic',
      title: 'BASIC CODED PLAN',
      discountPercent: 10,
      price: {
        pkr: 'PKR 115,500',
        usd: 'USD 385.00',
      },
      subtitle: 'One-time Payment',
      category: 'custom',
      deliveryTime: '5-7 Days',
      features: [
        { text: 'One-Page Modern Website', included: true },
        { text: 'Mobile Responsive', included: true },
        { text: 'Custom Design (No templates)', included: true },
        { text: 'Basic On-Page SEO', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Fast Load Speed', included: true },
        { text: 'Basic Security Implementation', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Google Analytics Setup', included: true },
        { text: '30 Days Technical Support', included: true },
        { text: 'Custom Domain Setup (domain not included)', included: true },
        { text: 'Monthly Maintenance Plan', included: false },
      ],
    },
    {
      id: 'custom-premium',
      title: 'PREMIUM CODED PLAN',
      discountPercent: 15,
      price: {
        pkr: 'PKR 230,700',
        usd: 'USD 769.00',
      },
      subtitle: 'One-time Payment',
      category: 'custom',
      featured: true,
      deliveryTime: '10-12 Days',
      features: [
        { text: 'Up to 5 Custom Pages (Home, About, Services, Contact, Gallery etc.)', included: true },
        { text: 'Fully Responsive & Interactive Design', included: true },
        { text: 'SEO-Ready Structure', included: true },
        { text: 'Animation + Light Effects', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Custom Admin Panel (Optional)', included: true },
        { text: 'Hosting Support', included: true },
        { text: 'Advanced UI/UX Elements', included: true },
        { text: 'Content Management System', included: true },
        { text: 'Email Newsletter Integration', included: true },
        { text: 'Google Maps Integration', included: true },
        { text: 'Live Chat Widget', included: true },
        { text: '60 Days Technical Support', included: true },
        { text: 'Monthly Maintenance (1 Month Free)', included: true },
      ],
    },
    {
      id: 'custom-advanced',
      title: 'ADVANCED CODED PLAN',
      discountPercent: 20,
      price: {
        pkr: 'PKR 419,700+',
        usd: 'USD 1,399.00+',
      },
      subtitle: 'One-time Payment',
      category: 'custom',
      deliveryTime: '15-20 Days',
      features: [
        { text: 'Unlimited Pages', included: true },
        { text: 'Full Custom Backend (Optional: Dashboard, CRM, API Integration)', included: true },
        { text: 'Booking or Service Request System', included: true },
        { text: 'AI Chat Integration (Optional)', included: true },
        { text: 'High-End Security Setup', included: true },
        { text: 'Blog/News Module', included: true },
        { text: 'Monthly Maintenance (2 Months Free)', included: true },
        { text: 'Multi-language Support', included: true },
        { text: 'Custom User Authentication System', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: 'Custom API Development', included: true },
        { text: 'Unlimited Revisions During Development', included: true },
        { text: '90 Days Technical Support', included: true },
        { text: 'SEO Strategy Consultation', included: true },
      ],
    },
    
    // WORDPRESS WEBSITE PLANS
    {
      id: 'wordpress-basic',
      title: 'BASIC WORDPRESS PLAN',
      discountPercent: 10,
      price: {
        pkr: 'PKR 62,700',
        usd: 'USD 209.00',
      },
      subtitle: 'One-time Payment',
      category: 'wordpress',
      deliveryTime: '3-5 Days',
      features: [
        { text: '1–2 Pages using Free Theme', included: true },
        { text: 'Mobile Responsive', included: true },
        { text: 'Basic SEO Setup', included: true },
        { text: 'Contact Form', included: true },
        { text: 'Speed Optimization', included: true },
        { text: 'Limited Design Flexibility', included: false },
        { text: 'Google Analytics Integration', included: true },
        { text: 'Basic Security Setup', included: true },
        { text: 'Social Media Icons', included: true },
        { text: 'Email Contact Form Setup', included: true },
        { text: '14 Days Technical Support', included: true },
        { text: 'Monthly Maintenance', included: false },
      ],
    },
    {
      id: 'wordpress-premium',
      title: 'PREMIUM WORDPRESS PLAN',
      discountPercent: 15,
      price: {
        pkr: 'PKR 146,700',
        usd: 'USD 489.00',
      },
      subtitle: 'One-time Payment',
      category: 'wordpress',
      featured: true,
      deliveryTime: '7-10 Days',
      features: [
        { text: '4–6 Pages using Premium Theme', included: true },
        { text: 'Pro Plugins (Elementor/SEO/Speed)', included: true },
        { text: 'Booking or Quote Form', included: true },
        { text: 'WhatsApp Integration', included: true },
        { text: 'Blog Setup', included: true },
        { text: 'Custom Page Layouts', included: true },
        { text: 'Premium Security Plugin', included: true },
        { text: 'Image Optimization', included: true },
        { text: 'Contact Form with Auto-responder', included: true },
        { text: 'Social Media Feeds Integration', included: true },
        { text: 'Google Maps Integration', included: true },
        { text: '30 Days Technical Support', included: true },
        { text: 'Monthly Maintenance (2 Weeks Free)', included: true },
      ],
    },
    {
      id: 'wordpress-advanced',
      title: 'ADVANCED WORDPRESS PLAN',
      discountPercent: 20,
      price: {
        pkr: 'PKR 314,700+',
        usd: 'USD 1,049.00+',
      },
      subtitle: 'One-time Payment',
      category: 'wordpress',
      deliveryTime: '12-15 Days',
      features: [
        { text: 'E-commerce / Service Booking', included: true },
        { text: 'Multilingual Support (Arabic/English)', included: true },
        { text: 'Custom Plugin Configurations', included: true },
        { text: 'Security Enhancements', included: true },
        { text: 'Monthly Backup & Updates (1 Month Free)', included: true },
        { text: 'Product/Service Management System', included: true },
        { text: 'Payment Gateway Integration', included: true },
        { text: 'Membership/Subscription Options', included: true },
        { text: 'Custom Database Setup', included: true },
        { text: 'Advanced SEO Features', included: true },
        { text: 'User Role Management', included: true },
        { text: 'Automated Email Marketing', included: true },
        { text: '60 Days Technical Support', included: true },
        { text: 'Analytics & Reporting Dashboard', included: true },
      ],
    },
    
    // SEO Service Plans
    {
      id: 'seo-basic',
      title: 'BASIC SEO PLAN',
      discountPercent: 8,
      price: {
        pkr: 'PKR 41,700',
        usd: 'USD 139.00',
      },
      subtitle: 'Per Month',
      category: 'seo',
      features: [
        { text: 'SEO Audit, Research and Strategy', included: true },
        { text: 'Core Services/Pages Optimization (Up to 5)', included: true },
        { text: 'Keywords Optimized (Up to 15)', included: true },
        { text: 'Monthly Blog Articles (1 per month)', included: true },
        { text: 'Pages Content Update (Up to 3)', included: true },
        { text: 'Monthly Backlinks (Up to 5)', included: true },
        { text: 'On-Page & Technical SEO', included: true },
        { text: 'Keywords Research (Up to 20)', included: true },
        { text: 'Local SEO Setup', included: true },
        { text: 'Monthly Report + Rank Tracking', included: true },
        { text: 'Guest Blog Submissions', included: false },
        { text: 'Off-Page SEO', included: false },
        { text: 'Google Business Optimization', included: false },
        { text: 'Speed Optimization', included: false },
        { text: 'Optimization for AI', included: false },
        { text: 'Local Schema Implementation', included: false },
        { text: 'International Rankings Support', included: false },
      ],
    },
    {
      id: 'seo-premium',
      title: 'PREMIUM SEO PLAN',
      discountPercent: 12,
      price: {
        pkr: 'PKR 104,700',
        usd: 'USD 349.00',
      },
      subtitle: 'Per Month',
      category: 'seo',
      featured: true,
      features: [
        { text: 'SEO Audit, Research and Strategy', included: true },
        { text: 'Core Services/Pages Optimization (Up to 10)', included: true },
        { text: 'Keywords Optimized (Up to 30)', included: true },
        { text: 'Guest Blog Submissions (2 per month)', included: true },
        { text: 'Monthly Blog Articles (3 per month)', included: true },
        { text: 'Pages Content Update (Up to 6)', included: true },
        { text: 'Monthly Backlinks (Up to 15)', included: true },
        { text: 'On-Page, Off-Page & Technical SEO', included: true },
        { text: 'Keywords Research (Up to 50)', included: true },
        { text: 'Local SEO + Google Business Optimization', included: true },
        { text: 'Monthly Report + Rank Tracking', included: true },
        { text: 'Speed Optimization', included: true },
        { text: 'Website Maintenance', included: true },
        { text: 'Local Schema Implementation', included: true },
        { text: 'Optimization for AI', included: false },
        { text: 'International Rankings Support', included: false },
      ],
    },
    {
      id: 'seo-advanced',
      title: 'ADVANCED SEO PLAN',
      discountPercent: 18,
      price: {
        pkr: 'PKR 146,700',
        usd: 'USD 489.00',
      },
      subtitle: 'Per Month',
      category: 'seo',
      features: [
        { text: 'SEO Audit, Research and Strategy', included: true },
        { text: 'Core Services/Pages Optimization (Unlimited)', included: true },
        { text: 'Keywords Optimized (Unlimited)', included: true },
        { text: 'Guest Blog Submissions (5 per month)', included: true },
        { text: 'Monthly Blog Articles (6 per month)', included: true },
        { text: 'Pages Content Update (Unlimited)', included: true },
        { text: 'Monthly Backlinks (Up to 30)', included: true },
        { text: 'On-Page, Off-Page & Technical SEO', included: true },
        { text: 'Keywords Research (Unlimited)', included: true },
        { text: 'Local SEO + Google Business Optimization', included: true },
        { text: 'Monthly Report + Rank Tracking', included: true },
        { text: 'Speed Optimization', included: true },
        { text: 'Optimization for AI', included: true },
        { text: 'Website Maintenance', included: true },
        { text: 'Local Schema Implementation', included: true },
        { text: 'International Rankings Support', included: true },
        { text: 'Conversion Rate Optimization', included: true },
      ],
    },
    
    // Monthly Website Maintenance Plans
    {
      id: 'maintenance-basic',
      title: 'BASIC MAINTENANCE PLAN',
      discountPercent: 8,
      price: {
        pkr: 'PKR 12,300',
        usd: 'USD 41.00',
      },
      subtitle: 'Per Month',
      category: 'maintenance',
      features: [
        { text: 'Monthly Website Health Check', included: true },
        { text: 'Plugin & Theme Updates (WordPress)', included: true },
        { text: 'Speed Optimization', included: true },
        { text: 'Backup (Monthly)', included: true },
        { text: 'Uptime Monitoring', included: true },
        { text: 'Basic Security Scan', included: true },
        { text: 'Monthly Report', included: true },
      ],
    },
    {
      id: 'maintenance-premium',
      title: 'PREMIUM MAINTENANCE PLAN',
      discountPercent: 12,
      price: {
        pkr: 'PKR 22,800',
        usd: 'USD 76.00',
      },
      subtitle: 'Per Month',
      category: 'maintenance',
      featured: true,
      features: [
        { text: 'All Basic Features', included: true },
        { text: 'Weekly Backup', included: true },
        { text: 'Broken Link & 404 Error Fixes', included: true },
        { text: 'On-page SEO Monitoring', included: true },
        { text: 'Malware Scanning & Removal', included: true },
        { text: 'Content & Image Updates (2 revisions/month)', included: true },
        { text: 'Performance Report', included: true },
      ],
    },
    {
      id: 'maintenance-advanced',
      title: 'ADVANCED MAINTENANCE PLAN',
      discountPercent: 16,
      price: {
        pkr: 'PKR 41,700',
        usd: 'USD 139.00',
      },
      subtitle: 'Per Month',
      category: 'maintenance',
      features: [
        { text: 'All Premium Features', included: true },
        { text: 'Daily Backups', included: true },
        { text: 'Real-Time Uptime Alerts', included: true },
        { text: 'Advanced Security Firewall', included: true },
        { text: 'Form Testing + Fixes', included: true },
        { text: 'Unlimited Small Updates (text/images)', included: true },
        { text: 'Priority Support (within 4 hrs)', included: true },
        { text: 'SEO Ranking Report', included: true },
        { text: 'Technical Audit & Recommendations', included: true },
      ],
    },
  ];

  // App development plans
  const appPlans: Plan[] = [
    {
      id: 'app-basic',
      title: 'BASIC APP PLAN',
      discountPercent: 10,
      price: {
        pkr: 'PKR 174,900',
        usd: 'USD 583.00',
      },
      subtitle: 'One-time Payment',
      category: 'app',
      deliveryTime: '8-10 Weeks',
      features: [
        { text: 'Native Android OR iOS App', included: true },
        { text: 'Basic UI/UX Design', included: true },
        { text: '4-5 Essential Screens', included: true },
        { text: 'User Authentication', included: true },
        { text: 'Basic API Integration', included: true },
        { text: 'Push Notifications', included: true },
        { text: 'Analytics Integration', included: true },
        { text: 'Bug Fixes (60 Days)', included: true },
        { text: 'App Store Submission', included: true },
        { text: 'Both Android AND iOS', included: false },
        { text: 'Admin Dashboard', included: false },
        { text: 'Monthly Maintenance', included: false },
      ],
    },
    {
      id: 'app-premium',
      title: 'PREMIUM APP PLAN',
      discountPercent: 18,
      price: {
        pkr: 'PKR 335,900',
        usd: 'USD 1,119.67',
      },
      subtitle: 'One-time Payment',
      category: 'app',
      featured: true,
      deliveryTime: '10-14 Weeks',
      features: [
        { text: 'Native Android AND iOS Apps', included: true },
        { text: 'Premium UI/UX Design', included: true },
        { text: 'Up to 12 Custom Screens', included: true },
        { text: 'User Authentication & Profiles', included: true },
        { text: 'Advanced API Integration', included: true },
        { text: 'Push Notifications', included: true },
        { text: 'In-App Messaging', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Analytics & User Tracking', included: true },
        { text: 'Payment Gateway (1 Provider)', included: true },
        { text: 'Custom Admin Dashboard', included: true },
        { text: 'Bug Fixes (90 Days)', included: true },
        { text: 'App Store Submission', included: true },
        { text: 'Monthly Maintenance (1 Month Free)', included: true },
      ],
    },
    {
      id: 'app-advanced',
      title: 'ADVANCED APP PLAN',
      discountPercent: 25,
      price: {
        pkr: 'PKR 629,900+',
        usd: 'USD 2,099.67+',
      },
      subtitle: 'One-time Payment',
      category: 'app',
      deliveryTime: '16-20 Weeks',
      features: [
        { text: 'Native Android AND iOS Apps', included: true },
        { text: 'Custom UI/UX Design', included: true },
        { text: 'Unlimited Screens', included: true },
        { text: 'Advanced User Authentication', included: true },
        { text: 'Complex API Integration', included: true },
        { text: 'Real-time Database', included: true },
        { text: 'Offline Mode Support', included: true },
        { text: 'Push Notifications', included: true },
        { text: 'In-App Messaging & Chat', included: true },
        { text: 'Social Media Integration', included: true },
        { text: 'Advanced Analytics Dashboard', included: true },
        { text: 'Multiple Payment Gateways', included: true },
        { text: 'Custom Admin Panel', included: true },
        { text: 'Bug Fixes (6 Months)', included: true },
        { text: 'App Store Submission', included: true },
        { text: 'Monthly Maintenance (3 Months Free)', included: true },
      ],
    },
  ];

  // Add app plans to the main plans array
  const allPlans = [...plans, ...appPlans];

  // Category details
  const categories = [
    {
      id: 'custom' as PlanCategory,
      title: 'CUSTOM CODED WEBSITES',
      description: 'Ideal for businesses that need top-tier performance, unique design, and future scalability.',
      icon: Code,
    },
    {
      id: 'wordpress' as PlanCategory,
      title: 'WORDPRESS WEBSITES',
      description: 'For businesses looking for cost-effective, editable websites with plugin support.',
      icon: Laptop,
    },
    {
      id: 'app' as PlanCategory,
      title: 'MOBILE APP DEVELOPMENT',
      description: 'Custom mobile applications for Android and iOS with cutting-edge features and sleek designs.',
      icon: Smartphone,
    },
    {
      id: 'seo' as PlanCategory,
      title: 'SEO SERVICES',
      description: 'Give your business the visibility it deserves — increase leads, dominate Google, and convert clicks into customers.',
      icon: Zap,
    },
    {
      id: 'maintenance' as PlanCategory,
      title: 'MAINTENANCE PLANS',
      description: 'Ongoing support to keep your site running fast, secure, updated & optimized.',
      icon: Shield,
    },
  ];

  // Filter plans by category
  const filteredPlans = allPlans.filter(plan => plan.category === activeCategory);
  
  // Handle plan selection
  const handleSelectPlan = (planId: string) => {
    navigate(`/request-plan?plan=${planId}`);
  };
  
  // SEO structured data for pricing plans
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": allPlans.map((plan, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `Devsecure ${plan.title}`,
        "description": `${plan.features.slice(0, 3).map(f => f.text).join(', ')}...`,
        "offers": {
          "@type": "Offer",
          "price": plan.price[currency].replace(/[^0-9.]/g, '').replace(/\+/, ''),
          "priceCurrency": currency.toUpperCase(),
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
        }
      }
    }))
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <SEOHead
        title="Devsecure Technology Plans & Pricing"
        description="Explore Devsecure's range of technology service plans including custom development, WordPress websites, mobile app development, SEO services, and maintenance packages. Find the perfect plan for your innovation needs."
        keywords="Devsecure plans, Devsecure pricing, technology service packages, custom development plans, app development pricing, website development services, Devsecure innovation packages, secure technology solutions pricing"
        currentPage="/plans"
        structuredData={structuredData}
        ogType="product"
      />
      
      {/* Background effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
        
        {/* Particle overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full bg-black/30"></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 max-w-6xl py-16 px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h1 className="section-title text-5xl md:text-6xl mt-16 mb-6 pb-3 animate-gradient-x">
            Our Plans & Pricing
          </h1>
          
          {/* Currency Selector */}
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="bg-gray-800/70 rounded-lg p-1 flex shadow-inner">
              <button 
                onClick={() => setCurrency('pkr')} 
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${currency === 'pkr' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
              >
                PKR
              </button>
              <button 
                onClick={() => setCurrency('usd')} 
                className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${currency === 'usd' ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
              >
                USD
              </button>
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Select the perfect plan that matches your business requirements and technology needs
          </p>
        </div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-5 py-3 rounded-lg transition-all duration-500 ${
                activeCategory === category.id 
                  ? 'bg-gradient-to-r from-cyan-600/80 to-blue-600/80 text-white shadow-glow' 
                  : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/40'
              }`}
            >
              <category.icon className={`h-5 w-5 mr-2 ${activeCategory === category.id ? 'text-cyan-300' : 'text-gray-400'}`} />
              <span className="text-sm font-medium">{category.title}</span>
            </button>
          ))}
        </div>
        
        {/* Category description */}
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-2xl font-bold text-white mb-2">
              {categories.find(c => c.id === activeCategory)?.title}
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-3"></div>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            {categories.find(c => c.id === activeCategory)?.description}
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`glass-panel rounded-xl overflow-hidden border transition-all duration-500 transform hover:-translate-y-2 ${
                plan.featured 
                  ? 'border-cyan-500/30 shadow-glow' 
                  : 'border-gray-800/50 hover:border-gray-700/50'
              }`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold py-1 px-4 absolute top-4 right-0 rounded-l-full shadow-lg">
                  RECOMMENDED
                </div>
              )}
              
              {/* Discount tag - Now shown on all plans with dynamic percent */}
              <div className="absolute -right-10 top-8 bg-gradient-to-r from-purple-600 via-cyan-500 to-blue-600 text-white font-bold py-1.5 px-12 text-xs shadow-[0_0_10px_rgba(59,130,246,0.6)] transform rotate-45 z-10 flex items-center justify-center overflow-hidden border-t border-b border-cyan-300/40">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 animate-pulse"></div>
                <div className="absolute -left-10 -top-10 w-16 h-16 bg-cyan-400/30 rounded-full blur-xl animate-blob"></div>
                <div className="absolute -right-10 -bottom-10 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-blob animation-delay-2000"></div>
                <span className="relative z-20 tracking-wider animate-pulse">{plan.discountPercent || 10}% OFF</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{plan.title}</h3>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-cyan-400">{plan.price[currency]}</span>
                  {plan.subtitle && (
                    <span className="text-gray-400 ml-2 text-sm font-medium">{plan.subtitle}</span>
                  )}
                </div>
                
                {plan.deliveryTime && (
                  <div className="mb-4 inline-block px-3 py-1 bg-gray-800/60 rounded-full text-sm text-gray-300">
                    <Clock className="w-4 h-4 inline-block mr-1.5 text-cyan-400" />
                    Delivery: {plan.deliveryTime}
                  </div>
                )}
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start ${feature.included ? 'text-gray-300' : 'text-gray-500 line-through'}`}
                    >
                      {feature.included ? (
                        <Check className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    plan.featured 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:shadow-glow' 
                      : 'bg-gray-800 text-cyan-400 hover:bg-gray-700 border border-gray-700'
                  }`}
                >
                  <span>Select Plan</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="glass-panel rounded-xl p-8 border border-gray-800/50">
            <h3 className="text-xl font-bold text-white mb-4">Need a custom solution?</h3>
            <p className="text-gray-300 mb-6">
              Contact us for customized packages tailored to your specific business requirements.
            </p>
            <button 
              onClick={() => navigate('/contact')}
              className="px-6 py-3 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 text-white font-medium rounded-lg hover:shadow-glow transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
