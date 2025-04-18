import React, { useState, useEffect } from 'react';
import { Entity } from '../types';

interface Props {
  entities: Entity[];
  onFilterChange: (types: string[]) => void;
}

const EntityFilter: React.FC<Props> = ({ entities, onFilterChange }) => {
  const [types, setTypes] = useState<string[]>([]);
  const [activeTypes, setActiveTypes] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTypes = Array.from(new Set(entities.map(e => e.label)));
    setTypes(uniqueTypes);
    setActiveTypes(uniqueTypes);
    onFilterChange(uniqueTypes);
  }, [entities, onFilterChange]); // <- add onFilterChange here
  
  const toggleType = (type: string) => {
    const updated = activeTypes.includes(type)
      ? activeTypes.filter(t => t !== type)
      : [...activeTypes, type];
    setActiveTypes(updated);
    onFilterChange(updated);
  };

  return (
    <div className="mb-3">
      <h6>Filter by Entity Type:</h6>
      <div className="d-flex flex-wrap gap-2">
        {types.map((type) => (
          <button
            key={type}
            className={`btn btn-sm ${activeTypes.includes(type) ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => toggleType(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EntityFilter;
