import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

function Difficulties() {
  const navigate = useNavigate();
  const [showInstructions, setShowInstructions] = useState(false);

  const handleInstructionClick = () => {
    setShowInstructions(true);
  };

  const handleCloseInstructions = () => {
    setShowInstructions(false);
  };

  const handleDifficultyClick = (level) => {
    console.log(`Starting game on ${level} difficulty`);
    switch (level) {
      case 'Easy':
        navigate('/easy');
        break;
      case 'Medium':
        navigate('/medium');
        break;
      case 'Hard':
        navigate('/hard');
        break;
      case 'Brutal':
        navigate('/brutal');
        break;
      default:
        alert('Invalid difficulty level');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-800 text-yellow-400 flex flex-col items-center justify-center">
      {/* Instruction Button */}
      <button
        onClick={handleInstructionClick}
        className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-300 transition duration-200"
        aria-label="Instructions"
      >
        <FaQuestionCircle size={24} />
      </button>

      <h1 className="text-4xl font-bold mb-8">Choose Your Difficulty</h1>

      <div className="flex flex-col space-y-4">
        {['Easy', 'Medium', 'Hard', 'Brutal'].map((level, index) => (
          <button
            key={level}
            onClick={() => handleDifficultyClick(level)}
            className="bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-200 py-3 px-6 mx-4"
          >
            {level} ({[20, 50, 100, 242][index]} Tracks)
          </button>
        ))}
      </div>

      {/* Instructions Overlay */}
      {showInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-700 p-6 rounded-lg border-2 border-yellow-400 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <p className="mb-4">
              Select a difficulty level to start the game. Each level has a different number of tracks you need to guess. Good luck!
            </p>
            <button
              onClick={handleCloseInstructions}
              className="bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition duration-200 py-2 px-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Difficulties;
