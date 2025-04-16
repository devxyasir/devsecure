import React, { useRef, useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Atom, Shield, Sparkles, Zap, Hexagon, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isFormActive, setIsFormActive] = useState(false);
  
  // Track mouse position for quantum field effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Particle animation effect for focused fields
  useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    
    const handleFocus = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLTextAreaElement;
      setFocusedField(target.name);
      setIsFormActive(true);
    };
    
    const handleBlur = () => {
      setFocusedField(null);
    };
    
    inputs.forEach(input => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('blur', handleBlur);
    });
    
    return () => {
      inputs.forEach(input => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('blur', handleBlur);
      });
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_bxjr01s',
        'template_6i2m3gm',
        formRef.current,
        'D4XYWEA45ZRNzadl8'
      );
      setIsSuccess(true);
      formRef.current.reset();
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-black pt-20 relative overflow-hidden">
      {/* Quantum field background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,200,255,0.15),rgba(0,0,0,0)_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,85,212,0.1),rgba(0,0,0,0)_50%)]" />
      
      {/* Dimensional grid overlay */}
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>
      
      {/* Quantum energy nodes */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full blur-xl animate-pulse-slow opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            backgroundColor: `rgba(${Math.random() * 100 + 20}, ${Math.random() * 100 + 100}, ${Math.random() * 155 + 100}, 0.1)`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Interactive quantum cursor effect */}
      <div 
        className="absolute w-[40vw] h-[40vw] pointer-events-none mix-blend-screen opacity-10 animate-spin-very-slow"
        style={{
          background: 'radial-gradient(circle, rgba(0,200,255,0.3) 0%, rgba(0,0,0,0) 70%)',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Quantum field activation indicator - shows when form is active */}
      {isFormActive && (
        <div 
          className="absolute w-full h-96 pointer-events-none opacity-5 top-1/2 left-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,200,255,0.3) 50%, rgba(0,0,0,0) 100%)',
            transform: 'translateY(-50%)',
          }}
        />
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          {/* Dimensional glow separator */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse-slow"></div>
            <Globe className="mx-3 text-cyan-400 animate-spin-slow" size={24} />
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse-slow animation-delay-500"></div>
          </div>
          
          {/* Section title with quantum styling */}
          <h1 className="text-6xl md:text-7xl font-bold mb-8 relative">
            <span className="text-quantum" data-text="Dimensional Link">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 text-transparent bg-clip-text bg-[length:300%_auto] animate-gradient-xy">
                Dimensional Link
              </span>
            </span>
            {/* Orbital decoration */}
            <div className="absolute -right-4 -top-4 opacity-60 pointer-events-none hidden md:block">
              <Hexagon className="text-cyan-500/30 animate-spin-slower" size={40} />
            </div>
          </h1>
          
          {/* Enhanced description with holographic effect */}
          <div className="relative">
            <p className="text-hologram text-xl max-w-3xl mx-auto leading-relaxed mb-4">
              Establish a quantum connection with our advanced systems
            </p>
            <p className="text-gray-300/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Initialize a communication protocol to discuss your technological requirements
            </p>
          </div>
          
          {/* Dimensional energy beam */}
          <div className="absolute left-1/2 -translate-x-1/2 h-12 w-0.5 mt-4 bg-gradient-to-b from-cyan-400/80 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-300"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-cyan-500 text-gray-300"
                  placeholder="Your message..."
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">{error}</div>
              )}

              {isSuccess && (
                <div className="flex items-center space-x-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">devxsecure@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Phone</p>
                    <p className="text-white">+923238136352</p>
                    <p className="text-white">+923156808967</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                  <div>
                    <p className="text-gray-400">Address</p>
                    <p className="text-white">Multan, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-400">Monday - Friday</p>
                <p className="text-white">9:00 AM - 6:00 PM (PST)</p>
                <p className="text-gray-400 mt-4">Saturday - Sunday</p>
                <p className="text-white">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;