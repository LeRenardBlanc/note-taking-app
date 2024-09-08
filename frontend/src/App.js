import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NoteInput from './components/NoteInput';
import Settings from './components/Settings';
import Abbreviations from './components/Abbreviations';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoteInput />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/abbreviations" element={<Abbreviations />} />
      </Routes>
    </Router>
  );
}

export default App;
