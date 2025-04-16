import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PerformanceSettings from '../components/common/PerformanceSettings';
import { prefetchCriticalAssets } from '../utils/optimizations';

interface PublicLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  // Prefetch critical assets when the layout mounts
  useEffect(() => {
    // Prefetch logo, hero images, and critical resources
    prefetchCriticalAssets([
      '/logo.png',
      '/og-image.jpg',
      // Add other critical assets here
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white hardware-accelerated">
      <Navbar />
      <main className="optimize-legibility">
        {children}
      </main>
      <Footer />
      <PerformanceSettings />
    </div>
  );
};

export default PublicLayout;