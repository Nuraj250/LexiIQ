import React, { useState, useEffect } from 'react';
import { analyzeText } from '../api/analyze';
import { AnalyzeResponse } from '../types';
import { useDebounce } from '../hooks/useDebounce';

import ResultCard from './ResultCard';
import FileUpload from './FileUpload';
import AnalysisDashboard from './AnalysisDashboard';
import LanguageSelector from './LanguageSelector';
import HistoryPanel from './HistoryPanel';

interface HistoryItem {
  id: string;
  timestamp: string;
  textPreview: string;
  result: AnalyzeResponse;
}

const TextInputForm: React.FC = () => {
  const [text, setText] = useState('');
  const [model, setModel] = useState('en_core_web_sm');
  const [result, setResult] = useState<AnalyzeResponse | null>(null);

  const debouncedText = useDebounce(text, 600); // Feature 9

  // 🔁 Save every result to localStorage
  const saveToHistory = (text: string, result: AnalyzeResponse) => {
    const stored = localStorage.getItem('analyze_history');
    const history: HistoryItem[] = stored ? JSON.parse(stored) : [];

    const newItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      textPreview: text,
      result,
    };

    const updatedHistory = [newItem, ...history].slice(0, 10); // Keep last 10
    localStorage.setItem('analyze_history', JSON.stringify(updatedHistory));
  };

  // ⏱ Analyze on debounce
  useEffect(() => {
    const analyze = async () => {
      if (debouncedText.trim().length < 5) return;
      const res = await analyzeText({ text: debouncedText }, model);
      setResult(res);
      saveToHistory(debouncedText, res);
    };
    analyze();
  }, [debouncedText, model]);

  // 📂 From uploaded .txt file
  const handleLoadTextFromFile = (fileText: string) => {
    setText(fileText);
  };

  // 🔄 Restore from past history
  const handleRestoreFromHistory = (item: HistoryItem) => {
    setText(item.textPreview);
    setResult(item.result);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🧠 Smart Text Analyzer</h2>

      {/* 🌐 Language Selector */}
      <LanguageSelector selected={model} onChange={setModel} />

      {/* 📂 Upload .txt File */}
      <FileUpload onLoadText={handleLoadTextFromFile} />

      {/* 📝 Input TextArea */}
      <div className="mb-3">
        <label htmlFor="textInput" className="form-label">Start Typing</label>
        <textarea
          className="form-control"
          id="textInput"
          rows={5}
          placeholder="Live analysis will begin after you stop typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* 📚 View Past Analyses */}
      <HistoryPanel onSelectHistory={handleRestoreFromHistory} />

      {/* 📊 Show Results */}
      {result && (
        <>
          <AnalysisDashboard result={result} />
          <ResultCard result={result} />
        </>
      )}
    </div>
  );
};

export default TextInputForm;
