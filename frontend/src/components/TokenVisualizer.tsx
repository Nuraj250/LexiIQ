import React, { useRef, useState } from 'react';
import { Stage, Layer, Rect, Text, Group, Label, Tag } from 'react-konva';
import { Token } from '../types';

interface Props {
  tokens: Token[];
}

const TokenVisualizer: React.FC<Props> = ({ tokens }) => {
  const stageRef = useRef<any>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  const handleMouseEnter = (token: Token, evt: any) => {
    const stage = stageRef.current.getStage();
    const mousePos = stage.getPointerPosition();
    setTooltip({
      x: mousePos.x,
      y: mousePos.y - 10,
      text: `POS: ${token.pos}\nLemma: ${token.lemma}`,
    });
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <div className="mt-4 mb-5">
      <h5>🧠 Token Visualization</h5>
      <Stage width={800} height={120} ref={stageRef}>
        <Layer>
          {tokens.map((token, index) => (
            <Group
              key={index}
              x={20 + index * 80}
              y={40}
              onMouseEnter={(e) => handleMouseEnter(token, e)}
              onMouseLeave={handleMouseLeave}
              cursor="pointer"
            >
              <Rect
                width={60}
                height={30}
                fill="#0d6efd"
                cornerRadius={5}
                shadowBlur={4}
              />
              <Text
                text={token.text}
                fontSize={14}
                fill="white"
                align="center"
                verticalAlign="middle"
                width={60}
                height={30}
              />
            </Group>
          ))}

          {tooltip && (
            <Label x={tooltip.x} y={tooltip.y}>
              <Tag fill="black" opacity={0.8} cornerRadius={4} />
              <Text
                text={tooltip.text}
                fontSize={12}
                padding={6}
                fill="white"
              />
            </Label>
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default TokenVisualizer;
