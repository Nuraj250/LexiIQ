import React from 'react';
import { Stage, Layer, Rect, Text, Group, Line } from 'react-konva';
import { Sentiment } from '../types';

interface Props {
  sentiment: Sentiment;
}

const SentimentChart: React.FC<Props> = ({ sentiment }) => {
  const chartWidth = 300;
  const chartHeight = 100;

  const polarityValue = sentiment.polarity;
  const polarityBarWidth = Math.abs(polarityValue * (chartWidth / 2));
  const polarityBarX = polarityValue >= 0 ? chartWidth / 2 : chartWidth / 2 - polarityBarWidth;

  const subjectivityBarWidth = sentiment.subjectivity * chartWidth;

  return (
    <div className="mb-4">
      <h5>📈 Sentiment Overview</h5>
      <Stage width={chartWidth + 60} height={chartHeight + 60}>
        <Layer>
          {/* Axes and scale indicators */}
          <Line points={[30, 30, 30, chartHeight + 30]} stroke="#aaa" />
          <Text text="-1" x={0} y={chartHeight + 35} fontSize={12} />
          <Text text="0" x={chartWidth / 2 + 20} y={chartHeight + 35} fontSize={12} />
          <Text text="1" x={chartWidth + 10} y={chartHeight + 35} fontSize={12} />

          {/* Polarity bar */}
          <Group x={30} y={20}>
            <Text text="Polarity" fontSize={14} y={-15} fill="#333" />
            <Rect
              x={polarityBarX}
              y={0}
              width={polarityBarWidth}
              height={20}
              fill={polarityValue >= 0 ? 'green' : 'red'}
              cornerRadius={4}
            />
          </Group>

          {/* Subjectivity bar */}
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
