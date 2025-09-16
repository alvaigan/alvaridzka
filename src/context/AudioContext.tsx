"use client";

import { createContext, useContext, useRef, useState, ReactNode } from "react";

type AudioContextType = {
  isPlaying: boolean;
  togglePlayPause: () => void;
  playAudio: () => void;
  pauseAudio: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio play failed:", error);
      });
      setIsPlaying(true);
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlayPause, playAudio, pauseAudio }}>
      {/* Hidden audio element */}
      <audio ref={audioRef} loop>
        <source src="/our_dream.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
