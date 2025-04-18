import React, { useEffect, useState } from 'react';
import { AnalyzeResponse } from '../types';

interface HistoryItem {
  id: string;
  timestamp: string;
  textPreview: string;
  result: AnalyzeResponse;
}

interface Props {
  onSelectHistory: (item: HistoryItem) => void;
}

const HistoryPanel: React.FC<Props> = ({ onSelectHistory }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('analyze_history');
    if (stored) setHistory(JSON.parse(stored));
  }, []);

  return (
    <div className="mb-4">
      <h5>📚 Analysis History</h5>
      {history.length === 0 && <p className="text-muted">No history yet.</p>}
      <ul className="list-group">
        {history.map((item) => (
          <li
            key={item.id}
            className="list-group-item d-flex justify-content-between align-items-center"
            role="button"
            onClick={() => onSelectHistory(item)}
          >
            <div>
              <strong>{item.timestamp}</strong>
              <div className="text-muted" style={{ fontSize: '0.85em' }}>
                {item.textPreview.slice(0, 40)}...
              </div>
            </div>
            <span className="badge bg-secondary">
              {item.result.sentiment.polarity > 0.4
                ? 'Positive'
                : item.result.sentiment.polarity < -0.4
                ? 'Negative'
                : 'Neutral'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
