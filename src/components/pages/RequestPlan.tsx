import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Send, Check, Zap, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SEOHead from '../shared/SEOHead';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  planId: string;
  message: string;
}

const RequestPlan = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const preselectedPlanId = queryParams.get('plan') || '';
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    planId: preselectedPlanId,
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Plan options for dropdown
  const planOptions = [
    { value: '', label: 'Select a plan', category: '' },
    { value: 'custom-basic', label: 'Basic Coded Plan - PKR 115,500 (One-time Payment)', category: 'Custom Coded Website' },
    { value: 'custom-premium', label: 'Premium Coded Plan - PKR 230,700 (One-time Payment)', category: 'Custom Coded Website' },
    { value: 'custom-advanced', label: 'Advanced Coded Plan - PKR 419,700+ (One-time Payment)', category: 'Custom Coded Website' },
    { value: 'wordpress-basic', label: 'Basic WordPress Plan - PKR 62,700 (One-time Payment)', category: 'WordPress Website' },
    { value: 'wordpress-premium', label: 'Premium WordPress Plan - PKR 146,700 (One-time Payment)', category: 'WordPress Website' },
    { value: 'wordpress-advanced', label: 'Advanced WordPress Plan - PKR 314,700+ (One-time Payment)', category: 'WordPress Website' },
    { value: 'app-basic', label: 'Basic App Plan - PKR 174,900 (One-time Payment)', category: 'Mobile App Development' },
    { value: 'app-premium', label: 'Premium App Plan - PKR 335,900 (One-time Payment)', category: 'Mobile App Development' },
    { value: 'app-advanced', label: 'Advanced App Plan - PKR 629,900+ (One-time Payment)', category: 'Mobile App Development' },
    { value: 'seo-basic', label: 'Basic SEO Plan - PKR 41,700 Per Month', category: 'SEO Services' },
    { value: 'seo-premium', label: 'Premium SEO Plan - PKR 104,700 Per Month', category: 'SEO Services' },
    { value: 'seo-advanced', label: 'Advanced SEO Plan - PKR 146,700 Per Month', category: 'SEO Services' },
    { value: 'maintenance-basic', label: 'Basic Maintenance Plan - PKR 12,300 Per Month', category: 'Maintenance' },
    { value: 'maintenance-premium', label: 'Premium Maintenance Plan - PKR 22,800 Per Month', category: 'Maintenance' },
    { value: 'maintenance-advanced', label: 'Advanced Maintenance Plan - PKR 41,700 Per Month', category: 'Maintenance' },
  ];
  
  // Group options by category
  const groupedOptions: { [key: string]: typeof planOptions } = {};
  planOptions.forEach(option => {
    if (!option.category) return;
    if (!groupedOptions[option.category]) {
      groupedOptions[option.category] = [];
    }
    groupedOptions[option.category].push(option);
  });
  
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers
    if (name === 'phone') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    } else {
      // Map form field names to formData properties
      const fieldMapping: {[key: string]: string} = {
        'from_name': 'name',
        'plan_type': 'planId',
        'user_message': 'message' // Map user_message to message in our state
      };
      
      // Use the mapping or the original name
      const dataField = fieldMapping[name] || name;
      setFormData(prev => ({ ...prev, [dataField]: value }));
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Get the selected plan details for the email body
      const selectedPlanInfo = planOptions.find(option => option.value === formData.planId);
      
      // Get the message textarea and subject input
      const messageTextarea = document.getElementById('message') as HTMLTextAreaElement;
      const subjectInput = document.getElementById('subject') as HTMLInputElement;
      
      if (messageTextarea) {
        // Create a formatted message that includes all form details
        const formattedMessage = `
=== PLAN REQUEST DETAILS ===

Selected Plan: ${selectedPlanInfo?.label || formData.planId}
Plan Category: ${selectedPlanInfo?.category || 'Not specified'}

--- Customer Information ---
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company: ${formData.company || 'Not provided'}

--- Additional Information ---
${formData.message || 'No additional information provided.'}
`;
        
        // Replace the message content with our formatted message
        messageTextarea.value = formattedMessage;
      }
      
      if (subjectInput) {
        subjectInput.value = `Plan Request: ${selectedPlanInfo?.label || 'Selected Plan'}`;
      }
      
      // Using the same emailjs service as the Contact form
      await emailjs.sendForm(
        'service_bxjr01s',
        'template_6i2m3gm',
        formRef.current,
        'D4XYWEA45ZRNzadl8'
      );
      
      setSubmitted(true);
      
      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        planId: '',
        message: '',
      });
      
    } catch (err) {
      setError('Failed to send request. Please try again later.');
      console.error('Error sending plan request:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Selected plan details
  const selectedPlan = planOptions.find(option => option.value === formData.planId);
  
  // SEO structured data for plan request form
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".form-title"]
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Devsecure Plan Request",
      "description": "Request a custom technology plan from Devsecure tailored to your business needs. Our innovative solutions help transform your digital presence.",
      "provider": {
        "@type": "Organization",
        "name": "Devsecure Technology Solutions"
      },
      "serviceType": "Technology Development Services"
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Request a Devsecure Innovation Plan"
        description="Ready to innovate? Request a custom technology plan from Devsecure. Our development experts will create a tailored solution that meets your unique business requirements and technological challenges."
        keywords="Devsecure plan request, Devsecure innovation solutions, custom technology plan, secure development services, request development quote, Devsecure technology consultation, custom digital solutions"
        currentPage="/request-plan"
        structuredData={structuredData}
        ogType="website"
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
      
      <div className="container mx-auto relative z-10 max-w-3xl">
        {/* Back to plans button */}
        <button 
          onClick={() => navigate('/plans')}
          className="mb-6 flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          <span>Back to Plans</span>
        </button>
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="section-title text-4xl md:text-5xl mb-4 animate-gradient-x">
            Request a Plan
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Fill out the form below to request your selected plan. Our team will contact you shortly to discuss the next steps.
          </p>
        </div>
        
        {/* Success message */}
        {submitted ? (
          <div className="glass-panel rounded-xl p-8 text-center border border-cyan-500/30 shadow-glow animate-fade-in">
            <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Request Submitted Successfully!</h2>
            <p className="text-gray-300 mb-8">
              Thank you for your interest. Our team will review your request and get back to you within 24 hours.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Back to Home
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-glow transition-all"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        ) : (
          <div className="glass-panel rounded-xl overflow-hidden border border-gray-800/50 shadow-lg mb-16">
            <div className="p-8">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-8">
                  <label className="block text-cyan-400 font-medium mb-2" htmlFor="plan_type">
                    Select Plan <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="plan_type"
                    name="plan_type"
                    value={formData.planId}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                  >
                    <option value="">Select a plan</option>
                    {Object.entries(groupedOptions).map(([category, options]) => (
                      <optgroup key={category} label={category}>
                        {options.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </div>
                
                {/* Selected plan details */}
                {selectedPlan && selectedPlan.value && (
                  <div className="mb-8 p-4 rounded-lg bg-cyan-900/20 border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-lg font-medium text-white">Selected Plan: {selectedPlan.label}</h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Category: {selectedPlan.category}
                    </p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2" htmlFor="from_name">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2" htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Your phone number (numbers only)"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      autoComplete="tel"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-cyan-400 font-medium mb-2" htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label className="block text-cyan-400 font-medium mb-2" htmlFor="user_message">
                    Additional Information
                  </label>
                  <textarea
                    id="user_message"
                    name="user_message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-900/60 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                    placeholder="Tell us more about your project requirements..."
                  ></textarea>
                </div>
                
                {/* Hidden fields for EmailJS */}
                <input type="hidden" id="subject" name="subject" value="" />
                <textarea 
                  id="message" 
                  name="message" 
                  className="hidden" 
                  style={{ display: 'none' }}
                  rows={1}
                ></textarea>
                
                {error && (
                  <div className="mb-6 text-red-500 text-sm">{error}</div>
                )}
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-glow disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Submit Request
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestPlan;
