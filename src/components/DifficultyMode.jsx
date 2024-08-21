import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { albums } from '../data/gamedata';
import AudioPlayer from './AudioPlayer'; // Import the AudioPlayer component

function DifficultyMode({ difficulty }) {
  const navigate = useNavigate();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [choices, setChoices] = useState([]);
  const [score, setScore] = useState(0);
  const [usedTrackIndexes, setUsedTrackIndexes] = useState([]);
  
  const getTrackCount = useCallback(() => {
    switch (difficulty) {
      case 'easy': return 20;
      case 'medium': return 50;
      case 'hard': return 100;
      case 'brutal': return 242;
      default: return 20;
    }
  }, [difficulty]);

  const generateQuestion = useCallback(() => {
    if (currentTrackIndex >= getTrackCount()) {
      // Game Over
      navigate('/results', { state: { score, total: getTrackCount() } });
      return;
    }

    const albumIndex = Math.floor(Math.random() * albums.length);
    const album = albums[albumIndex];
    const track = album.tracks[Math.floor(Math.random() * album.tracks.length)];

    setCurrentAlbum(album);
    setCurrentTrack(track);

    // Generate 3 wrong choices
    const wrongChoices = albums
      .filter(a => a.title !== album.title)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    setChoices([album, ...wrongChoices].sort(() => 0.5 - Math.random()));
  }, [currentTrackIndex, getTrackCount, navigate, score]);

  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  const handleGuess = (album) => {
    if (album.title === currentAlbum.title) {
      setScore(prevScore => prevScore + 1);
    }
    setCurrentTrackIndex(prevIndex => prevIndex + 1);
    generateQuestion();
  };

  return (
    <div className="min-h-screen bg-gray-800 text-yellow-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode</h1>
      <p className="text-xl mb-2">Question {currentTrackIndex + 1}/{getTrackCount()}</p>
      <p className="text-lg mb-4">Which album is this track from?</p>
      <h2 className="text-2xl font-semibold mb-6">{currentTrack?.title}</h2>


      {currentTrack && <AudioPlayer track={currentTrack} />}

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl mt-6">
        {choices.map((album, index) => (
          <button
            key={index}
            onClick={() => handleGuess(album)}
            className="bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-lg p-4 flex flex-col items-center"
          >
            <img 
              src={album.imageUrl} 
              alt={album.title} 
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <p className="text-sm font-medium">{album.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default DifficultyMode;
