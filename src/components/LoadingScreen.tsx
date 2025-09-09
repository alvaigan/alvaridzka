'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      return;
    }
    
    // Track loading progress
    let currentProgress = 0;
    const increment = () => {
      if (!isVisible || currentProgress >= 100) {
        return;
      }
      
      // Increment by a random amount to simulate variable loading
      const incrementValue = Math.random() * 15 + 5;
      currentProgress = Math.min(currentProgress + incrementValue, 100);
      setProgress(Math.floor(currentProgress));
      
      // Continue incrementing
      setTimeout(increment, Math.random() * 200 + 50);
    };
    
    increment();
    
    // Reset progress when component becomes visible
    return () => {
      setProgress(0);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center">
      <div className="relative mb-8">
        <Image 
          src="/heart-loading.gif" 
          alt="Loading..." 
          width={100} 
          height={100}
          unoptimized // Important for GIFs
        />
      </div>
      
      <div className="w-64 h-4 bg-brown-light rounded-full overflow-hidden">
        <div 
          className="h-full bg-brown transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 text-brown font-semibold">
        {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;