import React from 'react';
import { motion } from 'motion/react';
import { COLORS } from '../constants';
import { Check } from 'lucide-react';

interface PaletteProps {
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

export const Palette: React.FC<PaletteProps> = ({ selectedColor, onSelectColor }) => {
  return (
    <div id="palette-grid" className="grid grid-cols-3 gap-2">
      {COLORS.map((color) => {
        // Darken the border color slightly for the "chunky" effect
        const borderBottomColor = color.value === '#FFFFFF' ? '#E6E2D3' : 'rgba(0,0,0,0.1)';
        
        return (
          <motion.button
            key={color.value}
            id={`color-btn-${color.name.toLowerCase()}`}
            whileHover={{ y: 1 }}
            whileTap={{ y: 2 }}
            onClick={() => onSelectColor(color.value)}
            className={`aspect-square rounded-xl cursor-pointer transition-all border-b-4 relative flex items-center justify-center ${
              selectedColor === color.value ? 'ring-2 ring-black ring-inset' : ''
            }`}
            style={{ 
              backgroundColor: color.value,
              borderBottomColor: borderBottomColor
            }}
            title={color.name}
          >
            {selectedColor === color.value && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-white/30 rounded-full p-0.5"
              >
                <Check className={color.value === '#FFFFFF' || color.value === '#FFDC00' ? 'text-black' : 'text-white'} size={16} />
              </motion.div>
            )}
          </motion.button>
        );
      })}
    </div>
  );
};
