import React from 'react';

interface Props {
  selected: string;
  onChange: (model: string) => void;
}

const models = [
  { name: 'English (Default)', value: 'en_core_web_sm' },
  { name: 'Multilingual (xx_ent_wiki_sm)', value: 'xx_ent_wiki_sm' },
  // You can add more spaCy-supported models here
];

const LanguageSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">🌐 Select Language Model</label>
      <select
        className="form-select"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {models.map((model) => (
          <option key={model.value} value={model.value}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
