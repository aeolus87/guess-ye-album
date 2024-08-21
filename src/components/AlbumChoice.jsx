import React from 'react';

function AlbumChoice({ album, onGuess }) {
  return (
    <button
      onClick={() => onGuess(album)}
      className="bg-gray-700 hover:bg-gray-600 transition duration-300 rounded-lg p-4 flex flex-col items-center"
    >
      <img
        src={album.imageUrl}
        alt={album.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <p className="text-sm font-medium">{album.title}</p>
    </button>
  );
}

export default AlbumChoice;