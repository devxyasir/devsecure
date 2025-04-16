import { PerformanceMonitor } from './optimizations';

/**
 * Animation Optimizer Utility
 * 
 * This utility provides adaptable animation settings based on device capabilities and user preferences.
 * It automatically reduces animation complexity on lower-end devices to maintain smooth performance.
 */

/**
 * Animation settings types for different animation complexities
 */
export type AnimationIntensity = 'high' | 'medium' | 'low' | 'none';

/**
 * Helper interface to specify both values and durations for animations
 */
export interface AnimationSettings {
  intensity: AnimationIntensity;
  parallaxMultiplier: number;
  particleCount: number;
  transitionDuration: number;
  useBlur: boolean;
  useParallax: boolean;
  useParticles: boolean;
}

/**
 * Default animation settings for different performance levels
 */
const animationPresets: Record<AnimationIntensity, AnimationSettings> = {
  high: {
    intensity: 'high',
    parallaxMultiplier: 0.08,
    particleCount: 30,
    transitionDuration: 400,
    useBlur: true,
    useParallax: true,
    useParticles: true
  },
  medium: {
    intensity: 'medium',
    parallaxMultiplier: 0.04,
    particleCount: 15,
    transitionDuration: 300,
    useBlur: true,
    useParallax: true,
    useParticles: true
  },
  low: {
    intensity: 'low',
    parallaxMultiplier: 0.02,
    particleCount: 8,
    transitionDuration: 200,
    useBlur: false,
    useParallax: false,
    useParticles: false
  },
  none: {
    intensity: 'none',
    parallaxMultiplier: 0,
    particleCount: 0,
    transitionDuration: 150,
    useBlur: false,
    useParallax: false,
    useParticles: false
  }
};

/**
 * Get animation settings based on device capabilities and user preferences
 */
export const getAnimationSettings = (): AnimationSettings => {
  // Get current device capabilities from the performance monitor
  const performanceMonitor = PerformanceMonitor.getInstance();
  const heavyAnimationsEnabled = performanceMonitor.areHeavyAnimationsEnabled();
  
  // Check user preferences (could be stored in localStorage)
  const userPreference = getUserAnimationPreference();

  // If user has explicitly set a preference, honor that
  if (userPreference !== 'auto') {
    return animationPresets[userPreference];
  }
  
  // Otherwise, determine based on device capabilities
  if (!heavyAnimationsEnabled) {
    return animationPresets.low;
  }
  
  // Auto-detect for mobile devices
  if (typeof window !== 'undefined') {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    if (isMobile) {
      return animationPresets.medium;
    }
  }
  
  // Default to high for desktop devices
  return animationPresets.high;
};

/**
 * Get user animation preference from local storage
 */
export const getUserAnimationPreference = (): AnimationIntensity | 'auto' => {
  if (typeof window === 'undefined') {
    return 'auto';
  }
  
  const storedPreference = localStorage.getItem('animationPreference');
  
  if (
    storedPreference === 'high' ||
    storedPreference === 'medium' ||
    storedPreference === 'low' ||
    storedPreference === 'none'
  ) {
    return storedPreference;
  }
  
  return 'auto';
};

/**
 * Set user animation preference in local storage
 */
export const setUserAnimationPreference = (intensity: AnimationIntensity | 'auto'): void => {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem('animationPreference', intensity);
};

/**
 * CSS styles for optimized animations based on intensity
 */
export const getOptimizedAnimationStyles = (intensity?: AnimationIntensity): React.CSSProperties => {
  const settings = intensity 
    ? animationPresets[intensity] 
    : getAnimationSettings();
  
  return {
    // Hardware acceleration for all animation intensities
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as 'hidden',
    
    // Adjust transition speed based on intensity
    transition: `all ${settings.transitionDuration}ms ease-out`,
    
    // Disable animation for the lowest setting
    animationPlayState: settings.intensity === 'none' ? 'paused' : 'running',
  };
};

/**
 * Get CSS classes based on animation intensity
 */
export const getAnimationClasses = (intensity?: AnimationIntensity): string => {
  const settings = intensity 
    ? animationPresets[intensity] 
    : getAnimationSettings();
  
  const baseClasses = 'transition-all';
  
  // Build animation classes based on intensity
  switch (settings.intensity) {
    case 'high':
      return `${baseClasses} animate-gpu`;
    case 'medium':
      return `${baseClasses} animate-gpu`;
    case 'low':
      return baseClasses;
    case 'none':
      return '';
    default:
      return baseClasses;
  }
};

export default {
  getAnimationSettings,
  getUserAnimationPreference,
  setUserAnimationPreference,
  getOptimizedAnimationStyles,
  getAnimationClasses
};
