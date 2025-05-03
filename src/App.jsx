import React, { useState } from 'react';
import './App.css';

// Reusable Dropdown Component
function AttributeDropdown({ label, value, onChange }) {
  const rangeOptions = Array.from({ length: 9 }, (_, i) => i + 10); // Generates [10, 11, ..., 18]

  return (
    <div>
      <h2>{label}</h2>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {rangeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function App() {
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  return (
    <div>
      <h1>Character Attributes</h1>
      <AttributeDropdown label="Strength" value={strength} onChange={setStrength} />
      <AttributeDropdown label="Dexterity" value={dexterity} onChange={setDexterity} />
      <AttributeDropdown label="Constitution" value={constitution} onChange={setConstitution} />
      <AttributeDropdown label="Intelligence" value={intelligence} onChange={setIntelligence} />
      <AttributeDropdown label="Wisdom" value={wisdom} onChange={setWisdom} />
      <AttributeDropdown label="Charisma" value={charisma} onChange={setCharisma} />
    </div>
  );
}

export default App;
