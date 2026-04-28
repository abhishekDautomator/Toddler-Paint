import React from 'react';
import { motion } from 'motion/react';
import { ColoringPageData } from '../constants';

interface ColoringCanvasProps {
  page: ColoringPageData;
  areaColors: Record<string, string>;
  onColorArea: (areaId: string) => void;
}

export const ColoringCanvas: React.FC<ColoringCanvasProps> = ({ page, areaColors, onColorArea }) => {
  return (
    <div id="canvas-wrapper" className="relative w-full aspect-[4/3] bg-white rounded-3xl border-8 border-[#E6E2D3] shadow-inner flex items-center justify-center p-8 overflow-hidden">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full max-w-[500px] max-h-[500px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {page.areas.map((area) => (
          <motion.path
            key={area.id}
            id={`area-${area.id}`}
            d={area.d}
            fill={areaColors[area.id] || '#FFFFFF'}
            stroke="#5A5A40"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
            whileHover={{ strokeWidth: 6, filter: 'brightness(1.02)' }}
            onClick={() => onColorArea(area.id)}
            className="cursor-pointer transition-colors duration-200"
            animate={{ fill: areaColors[area.id] || '#FFFFFF' }}
          />
        ))}
      </svg>
      
      <div className="absolute bottom-6 left-6 pointer-events-none">
        <h2 className="text-sm font-bold uppercase tracking-widest text-[#B5B09D] select-none">
          {page.name}
        </h2>
      </div>
    </div>
  );
};
