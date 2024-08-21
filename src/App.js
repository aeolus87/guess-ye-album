// src\containers\games\GTA\src\App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lobby from './pages/Lobby';
import Difficulties from './pages/Difficulties';
import EasyMode from './pages/EasyMode';
import MediumMode from './pages/MediumMode';
import HardMode from './pages/HardMode';
import BrutalMode from './pages/BrutalMode';
import Results from './components/ResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Lobby />} />
          <Route path="/difficulties" element={<Difficulties />} />
          <Route path="/easy" element={<EasyMode />} />
          <Route path="/medium" element={<MediumMode />} />
          <Route path="/hard" element={<HardMode />} />
          <Route path="/brutal" element={<BrutalMode />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;