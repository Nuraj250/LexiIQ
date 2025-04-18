import { saveAs } from 'file-saver';
import { AnalyzeResponse } from '../types';
import jsPDF from 'jspdf';

export const exportAsJSON = (data: AnalyzeResponse) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: 'application/json',
  });
  saveAs(blob, 'analysis.json');
};

export const exportAsPDF = (data: AnalyzeResponse) => {
  const doc = new jsPDF();
  doc.setFontSize(14);
  doc.text('Smart Text Analyzer Report', 10, 15);
  doc.setFontSize(10);

  const yOffset = 30;
  doc.text(`Sentiment`, 10, yOffset);
  doc.text(`Polarity: ${data.sentiment.polarity}`, 10, yOffset + 6);
  doc.text(`Subjectivity: ${data.sentiment.subjectivity}`, 10, yOffset + 12);

  doc.text(`Entities`, 10, yOffset + 24);
  data.entities.slice(0, 10).forEach((ent, i) => {
    doc.text(`- ${ent.text} (${ent.label})`, 10, yOffset + 30 + i * 6);
  });

  doc.text(`Tokens`, 10, yOffset + 100);
  data.tokens.slice(0, 10).forEach((tok, i) => {
    doc.text(`- ${tok.text} [${tok.pos}] → ${tok.lemma}`, 10, yOffset + 106 + i * 6);
  });

  doc.save('analysis.pdf');
};
