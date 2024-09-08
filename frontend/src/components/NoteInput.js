import React, { useState, useEffect } from 'react';

const NoteInput = () => {
  const [note, setNote] = useState('');
  const [suggestedWord, setSuggestedWord] = useState('');
  const [expandedText, setExpandedText] = useState('');

  useEffect(() => {
    // Ici tu ajouteras la logique de complétion intelligente et abréviations
    // pour remplacer les abréviations ou suggérer des mots
  }, [note]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setNote(inputText);

    // Logique de suggestion de mot et abréviation ici
    // Par exemple, suggestion après avoir tapé un mot :
    const lastWord = inputText.split(' ').slice(-1)[0];
    
    // Détecter une abréviation (exemple basique)
    if (lastWord === 'btw') {
      setExpandedText('by the way');
    } else {
      setExpandedText('');
    }

    // Complétion automatique ici
  };

  return (
    <div className="note-input-container p-4">
      <textarea
        className="w-full p-2 border rounded-lg"
        placeholder="Commence à écrire ta note..."
        value={note}
        onChange={handleInputChange}
      />
      {suggestedWord && (
        <div className="suggested-word text-gray-400">
          {suggestedWord}
        </div>
      )}
      {expandedText && (
        <div className="expanded-text text-gray-600">
          Remplacement : {expandedText}
        </div>
      )}
    </div>
  );
};

export default NoteInput;
