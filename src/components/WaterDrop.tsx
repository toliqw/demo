import React from 'react';
import './WaterDrop.css';

interface WaterDropProps {
  delay?: number;
  size?: number;
  color?: string;
}

export const WaterDrop: React.FC<WaterDropProps> = ({ 
  delay = 0, 
  size = 20, 
  color = '#4facfe' 
}) => {
  return (
    <div 
      className="water-drop"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        backgroundColor: color
      }}
    >
      <div className="ripple"></div>
      <div className="ripple"></div>
      <div className="ripple"></div>
    </div>
  );
};

export default WaterDrop;