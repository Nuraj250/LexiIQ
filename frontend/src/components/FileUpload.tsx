import React, { useRef } from 'react';

interface Props {
  onLoadText: (text: string) => void;
}

const FileUpload: React.FC<Props> = ({ onLoadText }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !file.name.endsWith('.txt')) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      if (content) onLoadText(content);
    };
    reader.readAsText(file);
  };

  return (
    <div className="mb-3">
      <label className="form-label">📄 Upload .txt File</label>
      <div className="input-group">
        <input
          type="file"
          className="form-control"
          accept=".txt"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => fileInputRef.current?.click()}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
