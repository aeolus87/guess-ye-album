// src\containers\games\GTA\src\components\Lobby.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Lobby() {
const navigate = useNavigate();

  const handleClick = () => {
    navigate('/difficulties');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <header className="text-center mb-8">
        <h1 className="font-bold text-5xl text-yellow-400 mb-4">Ye's Tune Test</h1>
        <h2 className="font-semibold text-2xl text-yellow-200">Can you guess the Album?</h2>
      </header>
      <button onClick={handleClick}
        className="bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-200 py-3 px-6"
      >
        Play
      </button>
    </div>
  );
}

export default Lobby;
