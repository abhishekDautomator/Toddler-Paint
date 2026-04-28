/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette } from './components/Palette';
import { ColoringCanvas } from './components/ColoringCanvas';
import { COLORING_PAGES, COLORS } from './constants';
import { Eraser, RotateCcw, ImageIcon, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [areaColors, setAreaColors] = useState<Record<string, Record<string, string>>>({});

  const currentPage = COLORING_PAGES[currentPageIndex];
  const currentPageColors = areaColors[currentPage.id] || {};

  const handleColorArea = useCallback((areaId: string) => {
    setAreaColors((prev) => ({
      ...prev,
      [currentPage.id]: {
        ...(prev[currentPage.id] || {}),
        [areaId]: selectedColor,
      },
    }));
  }, [currentPage.id, selectedColor]);

  const resetCurrentPage = () => {
    setAreaColors((prev) => ({
      ...prev,
      [currentPage.id]: {},
    }));
  };

  return (
    <div className="h-screen w-full bg-[#FDFBF7] flex flex-col overflow-hidden font-sans select-none text-[#5A5A40]">
      {/* Header */}
      <header className="h-20 px-8 flex flex-shrink-0 items-center justify-between border-b-4 border-[#E6E2D3] bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#FFD93D] rounded-2xl flex items-center justify-center border-b-4 border-[#D4B532]">
            <Heart className="text-white fill-current" size={24} />
          </div>
          <h1 className="text-3xl font-black tracking-tight uppercase">Toddler Paint</h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={resetCurrentPage}
            className="px-6 py-2 bg-white border-2 border-[#E6E2D3] rounded-full font-bold shadow-sm hover:bg-[#F5F2ED] transition-colors flex items-center gap-2"
          >
            <RotateCcw size={18} />
            Reset
          </button>
          <button
            onClick={() => setSelectedColor('#FFFFFF')}
            className={`px-6 py-2 border-b-4 rounded-full font-bold shadow-md transition-all flex items-center gap-2 ${
              selectedColor === '#FFFFFF'
                ? 'bg-[#FF6B6B] text-white border-[#D65A5A]'
                : 'bg-[#A8C69F] text-white border-[#89A381]'
            }`}
          >
            <Eraser size={18} />
            {selectedColor === '#FFFFFF' ? 'Using Eraser' : 'Eraser'}
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* Left Gallery Sidebar */}
        <aside className="w-48 bg-white border-r-4 border-[#E6E2D3] p-4 flex flex-col gap-4 overflow-y-auto scrollbar-hide">
          <h2 className="text-sm font-black uppercase text-center mb-2 tracking-widest text-[#B5B09D]">Drawings</h2>
          {COLORING_PAGES.map((page, index) => (
            <motion.button
              key={page.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPageIndex(index)}
              className={`w-full aspect-square rounded-2xl border-4 transition-all overflow-hidden flex flex-col items-center justify-center p-2 gap-1 group ${
                currentPageIndex === index
                  ? 'bg-[#FFFBEB] border-[#FFD93D] shadow-md'
                  : 'bg-white border-[#E6E2D3] hover:border-[#B5B09D]'
              }`}
            >
              <div className="w-full flex-1 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 500 500" className="w-full h-full">
                  {page.areas.map(area => (
                    <path
                      key={area.id}
                      d={area.d}
                      fill={currentPageIndex === index ? (areaColors[page.id]?.[area.id] || '#FFFFFF') : '#FFFFFF'}
                      stroke="#5A5A40"
                      strokeWidth="12"
                    />
                  ))}
                </svg>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-tighter truncate w-full ${
                currentPageIndex === index ? 'text-[#5A5A40]' : 'text-[#B5B09D]'
              }`}>
                {page.name}
              </span>
            </motion.button>
          ))}
        </aside>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 bg-[#F5F2ED] overflow-y-auto">
          <div className="w-full max-w-[900px] flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full"
              >
                <ColoringCanvas
                  page={currentPage}
                  areaColors={currentPageColors}
                  onColorArea={handleColorArea}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center">
              <div className="px-6 py-2 bg-white rounded-full border-2 border-dashed border-[#E6E2D3] flex items-center justify-center gap-2 text-[#B5B09D] font-bold italic text-xs">
                <Sparkles size={14} />
                Tap an area to fill it with color!
              </div>
            </div>
          </div>
        </div>

        {/* Right Palette Sidebar */}
        <aside className="w-64 bg-white border-l-4 border-[#E6E2D3] p-6 flex flex-col overflow-y-hidden">
          <h2 className="text-lg font-black uppercase text-center mb-4 tracking-wide">Color Box</h2>
          <Palette 
            selectedColor={selectedColor} 
            onSelectColor={setSelectedColor} 
          />
          <div className="mt-6 flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div 
                className="w-16 h-16 rounded-xl border-4 shadow-md flex items-center justify-center transition-all bg-white"
                style={{ borderColor: selectedColor === '#FFFFFF' ? '#E6E2D3' : selectedColor }}
              >
                <div 
                  className="w-8 h-8 rounded-full" 
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#B5B09D]">Selected</span>
            </div>
          </div>
        </aside>
      </main>

      <footer className="h-12 bg-[#5A5A40] text-white flex items-center justify-center gap-6 px-8 flex-shrink-0">
        <div className="text-[10px] uppercase font-bold tracking-[0.2em]">Toddler Kit • Interactive Coloring Book</div>
      </footer>
    </div>
  );
}
