import React, { useState } from 'react';
import { AnalyzeResponse, Entity } from '../types';
import EntityFilter from './EntityFilter';
import SentimentChart from './SentimentChart';
import TokenVisualizer from './TokenVisualizer';
import ExportPanel from './ExportPanel';

const ResultCard: React.FC<{ result: AnalyzeResponse }> = ({ result }) => {
  const [filteredTypes, setFilteredTypes] = useState<string[]>([]);

  const filteredEntities = result.entities.filter((e: Entity) =>
    filteredTypes.includes(e.label)
  );

  return (
    <div className="mt-4">
      {/* 📤 Export as JSON / PDF */}
      <ExportPanel result={result} />

      {/* 🎯 Entity Filter + Display */}
      <EntityFilter
        entities={result.entities}
        onFilterChange={setFilteredTypes}
      />

      <h5>Named Entities</h5>
      <ul className="list-group mb-3">
        {filteredEntities.map((ent, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{ent.text}</strong> — {ent.label}
          </li>
        ))}
      </ul>

      {/* 🧠 Token List */}
      <h5>Tokens</h5>
      <ul className="list-group mb-3">
        {result.tokens.map((t, idx) => (
          <li key={idx} className="list-group-item">
            {t.text} ({t.lemma}) — {t.pos}
          </li>
        ))}
      </ul>

      {/* 🧠 Token Canvas (Tooltips) */}
      <TokenVisualizer tokens={result.tokens} />

      {/* 📊 Sentiment Chart */}
      <SentimentChart sentiment={result.sentiment} />
    </div>
  );
};

export default ResultCard;
