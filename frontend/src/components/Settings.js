import React, { useState } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [theme, setTheme] = useState('light');
  const [font, setFont] = useState('sans-serif');

  const handleSave = () => {
    // Sauvegarder les paramètres (localStorage, backend, etc.)
    console.log({ username, email, theme, font });
  };

  return (
    <div className="settings-container p-4">
      <h2 className="text-xl font-bold mb-4">Paramètres Utilisateur</h2>
      
      <div className="mb-4">
        <label className="block mb-2">Nom d'utilisateur</label>
        <input
          className="border p-2 rounded w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Email</label>
        <input
          className="border p-2 rounded w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Thème</label>
        <select
          className="border p-2 rounded w-full"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Police</label>
        <select
          className="border p-2 rounded w-full"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        >
          <option value="sans-serif">Sans-serif</option>
          <option value="serif">Serif</option>
        </select>
      </div>

      <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">
        Sauvegarder
      </button>
    </div>
  );
};

export default Settings;
