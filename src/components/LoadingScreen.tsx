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

    // Check if all images are loaded
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('img');
      let loadedCount = 0;
      const totalCount = images.length;

      if (totalCount === 0) {
        setProgress(100);
        return;
      }

      const checkImageLoad = () => {
        loadedCount++;
        setProgress(Math.floor((loadedCount / totalCount) * 100));
        
        // If all images are loaded, we're done
        if (loadedCount === totalCount) {
          setProgress(100);
        }
      };

      images.forEach((img) => {
        if ((img as HTMLImageElement).complete) {
          checkImageLoad();
        } else {
          img.addEventListener('load', checkImageLoad);
          img.addEventListener('error', checkImageLoad);
        }
      });

      // Update progress based on already loaded images
      setProgress(Math.floor((loadedCount / totalCount) * 100));
    };

    // Wait for a short time to ensure all images are in the DOM
    const timer = setTimeout(() => {
      checkImagesLoaded();
    }, 100);

    return () => {
      clearTimeout(timer);
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
