import React from 'react';
import { AnalyzeResponse } from '../types';
import { exportAsJSON, exportAsPDF } from '../utils/download';

interface Props {
  result: AnalyzeResponse;
}

const ExportPanel: React.FC<Props> = ({ result }) => {
  return (
    <div className="d-flex gap-2 mb-4">
      <button className="btn btn-outline-success" onClick={() => exportAsJSON(result)}>
        📄 Export JSON
      </button>
      <button className="btn btn-outline-danger" onClick={() => exportAsPDF(result)}>
        🧾 Export PDF
      </button>
    </div>
  );
};

export default ExportPanel;
