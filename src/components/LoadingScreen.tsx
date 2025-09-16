"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isVisible) {
      // Smoothly finish to 100% before hiding
      setProgress(100);
      return;
    }

    let current = 0;

    const animate = () => {
      if (current < 95) {
        // Increment gradually with easing
        const increment = Math.max(0.5, (100 - current) * 0.03);
        current = Math.min(current + increment, 95);
        setProgress(Math.floor(current));
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  if (!isVisible && progress >= 100) return null;

  return (
    <div className="fixed inset-0 bg-cream z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative mb-8 animate-fadeIn">
        <Image
          src="/heart-loading.gif"
          alt="Loading..."
          width={100}
          height={100}
          unoptimized // Important for GIFs
          priority
        />
      </div>

      <div className="w-64 h-4 bg-brown-light rounded-full overflow-hidden">
        <div
          className="h-full bg-brown transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-4 text-brown font-semibold">{progress}%</div>
    </div>
  );
};

export default LoadingScreen;
