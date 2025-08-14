import React, { useState } from 'react';

interface AutoCompleteProps {
  suggestions: string[];
  onSelect: (value: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions, onSelect }) => {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    setFiltered(suggestions.filter((item) => item.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div className="relative">
      <input
        value={input}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder="Type to search..."
      />
      {filtered.length > 0 && (
        <ul className="absolute z-10 bg-white border w-full rounded shadow">
          {filtered.map((item, idx) => (
            <li
              key={idx}
              onClick={() => {
                setInput(item);
                onSelect(item);
                setFiltered([]);
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default {AutoComplete};
export type { AutoCompleteProps }
