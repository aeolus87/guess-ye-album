import React from 'react';

function QuestionHeader({ difficulty, currentTrackIndex, getTrackCount, currentTrack }) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Mode</h1>
      <p className="text-xl mb-2">Question {currentTrackIndex + 1}/{getTrackCount()}</p>
      <p className="text-lg mb-4">Which album is this track from?</p>
      <h2 className="text-2xl font-semibold mb-6">{currentTrack?.title}</h2>
    </>
  );
}

export default QuestionHeader;