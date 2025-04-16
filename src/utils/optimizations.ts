/**
 * Performance Optimization Utilities
 * 
 * This file contains functions and utilities to optimize the website's performance
 * and reduce lag during loading and interaction.
 */

/**
 * Optimizes image loading by applying loading strategy and image size optimization
 * @param src Image source URL
 * @param size Optional size constraint
 * @returns Optimized image source
 */
export const optimizeImageSrc = (src: string, size?: { width: number; height: number }): string => {
  // Check if already using a CDN
  if (src.includes('i.ibb.co')) {
    // Image hosting services usually offer resizing via URL parameters
    // This is a placeholder as each service has different parameters
    return src;
  }

  // For local images, ensure they're properly sized
  if (size) {
    // Add size parameters if it's a local image
    // This is a simplified example - actual implementation depends on your image loader
    if (src.startsWith('/')) {
      return `${src}?w=${size.width}&h=${size.height}&q=80`;
    }
  }
  
  return src;
};

/**
 * Prefetches critical assets to improve perceived loading speed
 * @param assets Array of critical asset URLs to prefetch
 */
export const prefetchCriticalAssets = (assets: string[]): void => {
  if (typeof document === 'undefined') return;
  
  assets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = asset;
    document.head.appendChild(link);
  });
};

/**
 * Creates an optimized background with reduced GPU usage
 * @param config Background configuration options
 * @returns CSS styles object for the background
 */
export const createOptimizedBackground = (config: {
  gradientColors?: string[];
  opacity?: number;
  useBlur?: boolean;
  blurAmount?: number;
}) => {
  const {
    gradientColors = ['rgba(0, 0, 0, 0.8)', 'rgba(30, 41, 59, 0.8)'],
    opacity = 0.8,
    useBlur = false,
    blurAmount = 8
  } = config;
  
  return {
    background: gradientColors.length > 1 
      ? `linear-gradient(to bottom right, ${gradientColors.join(', ')})`
      : gradientColors[0],
    opacity,
    backdropFilter: useBlur ? `blur(${blurAmount}px)` : 'none',
    WebkitBackdropFilter: useBlur ? `blur(${blurAmount}px)` : 'none',
    // Use hardware acceleration for better performance
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden' as 'hidden',
  };
};

/**
 * Debounces a function to improve performance for expensive operations
 * @param fn Function to debounce
 * @param delay Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, delay);
  };
};

/**
 * Throttles a function for performance-critical event handlers
 * @param fn Function to throttle
 * @param limit Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  
  return function(this: any, ...args: Parameters<T>) {
    const now = Date.now();
    
    if (now - lastCall >= limit) {
      fn.apply(this, args);
      lastCall = now;
    }
  };
};

/**
 * Applies optimized CSS properties for better rendering performance
 * @returns Object with optimized CSS properties
 */
export const getOptimizedCSSProps = () => ({
  willChange: 'transform',
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden' as 'hidden',
});

/**
 * Global performance monitor to track and optimize site performance
 */
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private heavyAnimationsEnabled = true;
  
  private constructor() {
    // Initialize performance monitoring
    this.checkDeviceCapabilities();
  }
  
  /**
   * Get the singleton instance
   */
  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    
    return PerformanceMonitor.instance;
  }
  
  /**
   * Check device capabilities to adjust performance settings
   */
  private checkDeviceCapabilities(): void {
    if (typeof window === 'undefined') return;
    
    // Check for low-end devices based on user agent and memory
    const isLowEndDevice = 
      // @ts-ignore - Some browsers support this API
      (navigator.deviceMemory && navigator.deviceMemory < 4) ||
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
    
    if (isLowEndDevice) {
      this.heavyAnimationsEnabled = false;
    }
  }
  
  /**
   * Check if heavy animations should be enabled
   */
  public areHeavyAnimationsEnabled(): boolean {
    return this.heavyAnimationsEnabled;
  }
  
  /**
   * Manually disable heavy animations (e.g., user preference)
   */
  public disableHeavyAnimations(): void {
    this.heavyAnimationsEnabled = false;
  }
}

export default {
  optimizeImageSrc,
  prefetchCriticalAssets,
  createOptimizedBackground,
  debounce,
  throttle,
  getOptimizedCSSProps,
  PerformanceMonitor: PerformanceMonitor.getInstance()
};
