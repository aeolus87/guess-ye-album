// src/components/AudioPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';

function AudioPlayer({ track }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);
  const [canPlay, setCanPlay] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const togglePlay = () => {
    if (!canPlay) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (playCount < 5) {
        audioRef.current.play().catch(e => console.error("Play error:", e));
        setIsPlaying(true);
        setPlayCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount >= 5) setCanPlay(false);
          return newCount;
        });
      }
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 rounded-lg shadow-md">
      <audio ref={audioRef} src={track.audioSnippet} />

      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={togglePlay} 
          disabled={!canPlay}
          className={`w-16 h-16 flex items-center justify-center rounded-full focus:outline-none ${canPlay ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <polygon points="5,3 19,12 5,21 5,3" fill="currentColor" />
            </svg>
          )}
        </button>

        <div className="text-sm text-gray-500">
          Plays: {playCount}/5
        </div>
      </div>

      <div className="mb-4">
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
          className="w-full h-2 bg-yellow-400 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {!canPlay && (
        <p className="mt-2 text-center text-red-500 font-semibold">
          Maximum plays reached
        </p>
      )}
    </div>
  );
}

export default AudioPlayer;
