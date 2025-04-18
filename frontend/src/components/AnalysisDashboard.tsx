import React from 'react';
import { AnalyzeResponse } from '../types';
import { Stage, Layer, Rect, Text, Group } from 'react-konva';

interface Props {
  result: AnalyzeResponse;
}

const getSentimentEmoji = (polarity: number) => {
  if (polarity > 0.4) return '😄';
  if (polarity < -0.4) return '😡';
  return '😐';
};

const AnalysisDashboard: React.FC<Props> = ({ result }) => {
  const tokenCount = result.tokens.length;
  const entityCount = result.entities.length;
  const { polarity, subjectivity } = result.sentiment;

  return (
    <div className="mb-4 p-3 bg-light border rounded">
      <h4 className="mb-3">📊 Summary</h4>

      <div className="row mb-3">
        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Tokens</h5>
              <p className="card-text display-6">{tokenCount}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Entities</h5>
              <p className="card-text display-6">{entityCount}</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Sentiment</h5>
              <p className="card-text display-6">{getSentimentEmoji(polarity)}</p>
              <small>
                Polarity: {polarity.toFixed(2)} | Subjectivity: {subjectivity.toFixed(2)}
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Konva canvas for visual cue */}
      <div style={{ border: '1px solid #ddd', padding: '10px' }}>
        <Stage width={350} height={60}>
          <Layer>
            <Group x={20} y={10}>
              <Rect width={300} height={20} fill="#eee" cornerRadius={10} />
              <Rect
                width={150 + polarity * 100}
                height={20}
                fill={polarity > 0 ? 'green' : 'red'}
                cornerRadius={10}
              />
              <Text
                text={`Polarity: ${polarity.toFixed(2)}`}
                fontSize={14}
                x={0}
                y={30}
                fill="#333"
              />
            </Group>
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default AnalysisDashboard;
