"use client";

import { useAudio } from "@/context/AudioContext";
import { PlayIcon, PauseIcon } from "@phosphor-icons/react/ssr";

const FloatingMusicController = () => {
  const { isPlaying, togglePlayPause } = useAudio();

  return (
    <button
      onClick={togglePlayPause}
      className="fixed bottom-6 right-6 z-50 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <PauseIcon size={24} weight="fill" className="text-gray-800" />
      ) : (
        <PlayIcon size={24} weight="fill" className="text-gray-800" />
      )}
    </button>
  );
};

export default FloatingMusicController;