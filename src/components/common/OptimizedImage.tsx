import React, { useState, useEffect, useRef } from 'react';
import { optimizeImageSrc } from '../../utils/optimizations';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  priority?: boolean;
  onLoad?: () => void;
}

/**
 * OptimizedImage component with progressive loading, lazy loading, and blur-up effect
 * 
 * @param src - Image source URL
 * @param alt - Alt text for accessibility
 * @param width - Optional width of the image
 * @param height - Optional height of the image
 * @param className - Optional CSS classes
 * @param placeholderColor - Optional placeholder background color
 * @param priority - If true, the image will be eagerly loaded
 * @param onLoad - Optional callback when image loads
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#0f172a', // Dark slate color matching Devsecure theme
  priority = false,
  onLoad
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Optimize the image src
  const optimizedSrc = optimizeImageSrc(src, width && height ? { width, height } : undefined);

  useEffect(() => {
    // Reset state when src changes
    setIsLoaded(false);
    setIsError(false);
    
    // Simplified and more reliable approach - we'll always load the image directly
    // but still maintain the loading indicators until the image is fully loaded
    // This eliminates potential issues with Intersection Observer implementation
    return () => {
      // Clean up function - nothing to clean up since we're not using observers anymore
    };
  }, [optimizedSrc]);
  
  // Preload important developer images to ensure they load quickly
  useEffect(() => {
    // Preload developer images if they're from i.ibb.co
    if (src.includes('i.ibb.co')) {
      const preloadImg = new Image();
      preloadImg.src = optimizedSrc;
    }
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad();
    }
  };

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        display: 'inline-block',
      }}
    >
      <img
        ref={imgRef}
        // Fix: Always set the src directly to ensure images load properly
        src={optimizedSrc}
        data-src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`
          transition-opacity duration-500 ease-in-out
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${width && height ? 'w-full h-full object-cover' : ''}
        `}
        loading={priority ? 'eager' : 'lazy'}
        style={{
          width: width ? '100%' : undefined,
          height: height ? '100%' : undefined,
        }}
      />
      
      {!isLoaded && !isError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black animate-pulse"
          aria-hidden="true"
        >
          <div className="h-8 w-8 border-t-2 border-b-2 border-cyan-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {isError && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-900"
          aria-hidden="true"
        >
          <div className="text-cyan-500 text-sm">Image failed to load</div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
