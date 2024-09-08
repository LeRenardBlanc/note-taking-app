import React, { useState } from 'react';

const Abbreviations = () => {
  const [abbrs, setAbbrs] = useState([{ abbr: 'btw', full: 'by the way' }]);
  const [newAbbr, setNewAbbr] = useState('');
  const [newFull, setNewFull] = useState('');

  const handleAdd = () => {
    setAbbrs([...abbrs, { abbr: newAbbr, full: newFull }]);
    setNewAbbr('');
    setNewFull('');
  };

  return (
    <div className="abbreviation-container p-4">
      <h2 className="text-xl font-bold mb-4">Gestion des Abréviations</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Abréviation</label>
        <input
          className="border p-2 rounded w-full"
          value={newAbbr}
          onChange={(e) => setNewAbbr(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Mot complet</label>
        <input
          className="border p-2 rounded w-full"
          value={newFull}
          onChange={(e) => setNewFull(e.target.value)}
        />
      </div>

      <button onClick={handleAdd} className="bg-blue-500 text-white p-2 rounded">
        Ajouter
      </button>

      <ul className="mt-4">
        {abbrs.map((abbr, index) => (
          <li key={index} className="mb-2">
            <strong>{abbr.abbr}:</strong> {abbr.full}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Abbreviations;
