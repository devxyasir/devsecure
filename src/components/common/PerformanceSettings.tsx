import React, { useState, useEffect } from 'react';
import { 
  Sliders, 
  Cpu, 
  Zap, 
  ZapOff, 
  Sparkles, 
  Settings
} from 'lucide-react';
import { 
  AnimationIntensity, 
  setUserAnimationPreference, 
  getUserAnimationPreference 
} from '../../utils/animationOptimizer';
import { PerformanceMonitor } from '../../utils/optimizations';

/**
 * Performance Settings component that allows users to control animation intensity
 * for better performance on different devices
 */
const PerformanceSettings: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIntensity, setSelectedIntensity] = useState<AnimationIntensity | 'auto'>('auto');
  
  // Get initial animation settings
  useEffect(() => {
    const storedPreference = getUserAnimationPreference();
    setSelectedIntensity(storedPreference);
  }, []);
  
  // Handle animation intensity change
  const handleIntensityChange = (intensity: AnimationIntensity | 'auto') => {
    setSelectedIntensity(intensity);
    setUserAnimationPreference(intensity);
    
    // If set to none, explicitly disable heavy animations in the performance monitor
    if (intensity === 'none') {
      PerformanceMonitor.getInstance().disableHeavyAnimations();
    }
    
    // Trigger a page refresh to apply changes site-wide
    // This is optional and can be removed if you want to avoid the refresh
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };
  
  const renderAnimationIntensityOption = (
    intensity: AnimationIntensity | 'auto',
    label: string,
    icon: React.ReactNode,
    description: string
  ) => (
    <button
      onClick={() => handleIntensityChange(intensity)}
      className={`p-3 rounded-lg transition-all duration-300 w-full text-left ${
        selectedIntensity === intensity
          ? 'bg-cyan-900/30 shadow-neon-optimized'
          : 'bg-gray-900/50 hover:bg-gray-800/50'
      }`}
    >
      <div className="flex items-center">
        <div className={`p-2 rounded-full ${
          selectedIntensity === intensity
            ? 'bg-cyan-900/50 text-cyan-400'
            : 'bg-gray-800/50 text-gray-400'
        }`}>
          {icon}
        </div>
        <div className="ml-3">
          <h3 className={`font-medium ${
            selectedIntensity === intensity
              ? 'text-cyan-400'
              : 'text-gray-300'
          }`}>
            {label}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        </div>
      </div>
    </button>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-gray-900/80 backdrop-blur-sm shadow-glow-optimized hardware-accelerated hover:bg-gray-800/80 transition-all duration-300 text-cyan-400"
        aria-label="Performance Settings"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 p-4 rounded-xl bg-gray-900/90 backdrop-blur-md shadow-lg border border-gray-800 animate-slide-up hardware-accelerated">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-white flex items-center">
              <Cpu size={18} className="mr-2 text-cyan-400" />
              Performance
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          
          <div className="mb-3">
            <p className="text-sm text-gray-400 mb-2">
              Adjust animation intensity to optimize performance on your device
            </p>
          </div>
          
          <div className="space-y-2">
            {renderAnimationIntensityOption(
              'auto',
              'Automatic',
              <Cpu size={16} />,
              'Detect your device capabilities automatically'
            )}
            
            {renderAnimationIntensityOption(
              'high',
              'High',
              <Sparkles size={16} />,
              'Full visual effects (best on desktop)'
            )}
            
            {renderAnimationIntensityOption(
              'medium',
              'Medium',
              <Zap size={16} />,
              'Balanced performance and visuals'
            )}
            
            {renderAnimationIntensityOption(
              'low',
              'Low',
              <ZapOff size={16} />,
              'Limited animations for better performance'
            )}
            
            {renderAnimationIntensityOption(
              'none',
              'None',
              <Sliders size={16} />,
              'Minimal animations for best performance'
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-800">
            <p className="text-xs text-gray-500">
              Lower settings improve performance on mobile devices
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceSettings;
