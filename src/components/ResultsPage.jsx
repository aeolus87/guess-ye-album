// src/components/ResultsPage.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ResultsPage() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const percentage = (score / total) * 100;

  return (
    <div className="min-h-screen bg-gray-800 text-yellow-400 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Game Results</h1>
      <p className="text-2xl mb-4">Your Score: {score} / {total}</p>
      <p className="text-xl mb-8">Percentage: {percentage.toFixed(2)}%</p>
      {percentage < 50 ? (
        <p className="text-xl mb-8 text-red-500">Go listen to ye music more!</p>
      ) : (
        <p className="text-xl mb-8 text-green-500">You really love ye!</p>
      )}
      <Link to="/difficulties" className="bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition duration-200 py-3 px-6">
        Play Again
      </Link>
    </div>
  );
}

export default ResultsPage;