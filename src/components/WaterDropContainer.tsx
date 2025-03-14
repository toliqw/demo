import React from 'react';
import { WaterDrop } from './WaterDrop';
import './WaterDropContainer.css';

const WaterDropContainer: React.FC = () => {
  const drops = [
    { delay: 0, color: '#4facfe', size: 20 },
    { delay: 0.5, color: '#00f2fe', size: 15 },
    { delay: 1, color: '#0092ff', size: 25 },
    { delay: 1.5, color: '#00c6ff', size: 18 },
    { delay: 2, color: '#00a8ff', size: 22 }
  ];

  return (
    <div className="water-drop-container">
      {drops.map((drop, index) => (
        <div key={index} className="drop-wrapper">
          <WaterDrop
            delay={drop.delay}
            color={drop.color}
            size={drop.size}
          />
        </div>
      ))}
    </div>
  );
};

export default WaterDropContainer;