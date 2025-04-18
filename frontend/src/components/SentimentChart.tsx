import React from 'react';
import { Stage, Layer, Rect, Text, Group, Line } from 'react-konva';
import { Sentiment } from '../types';

interface Props {
  sentiment: Sentiment;
}

const SentimentChart: React.FC<Props> = ({ sentiment }) => {
  const chartWidth = 300;
  const chartHeight = 100;

  const polarityBarWidth = (sentiment.polarity + 1) * (chartWidth / 2);
  const subjectivityBarWidth = sentiment.subjectivity * chartWidth;

  return (
    <div className="mb-4">
      <h5>📈 Sentiment Overview</h5>
      <Stage width={chartWidth + 60} height={chartHeight + 60}>
        <Layer>
          {/* Axes */}
          <Line points={[30, 30, 30, chartHeight + 30]} stroke="#aaa" />
          <Text text="-1" x={0} y={chartHeight + 35} fontSize={12} />
          <Text text="0" x={chartWidth / 2 + 20} y={chartHeight + 35} fontSize={12} />
          <Text text="1" x={chartWidth + 10} y={chartHeight + 35} fontSize={12} />

          {/* Polarity Bar */}
          <Group x={30} y={20}>
            <Text text="Polarity" fontSize={14} y={-15} fill="#333" />
            <Rect
              x={chartWidth / 2}
              y={0}
              width={polarityBarWidth - chartWidth / 2}
              height={20}
              fill={sentiment.polarity >= 0 ? 'green' : 'red'}
              cornerRadius={4}
            />
          </Group>

          {/* Subjectivity Bar */}
          <Group x={30} y={60}>
            <Text text="Subjectivity" fontSize={14} y={-15} fill="#333" />
            <Rect
              x={0}
              y={0}
              width={subjectivityBarWidth}
              height={20}
              fill="#0d6efd"
              cornerRadius={4}
            />
          </Group>
        </Layer>
      </Stage>
    </div>
  );
};

export default SentimentChart;
