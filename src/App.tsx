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
  const [currentPageIndex, setCurrentPageIndex] = useState(() => {
    const houseIndex = COLORING_PAGES.findIndex(p => p.id === 'house');
    return houseIndex !== -1 ? houseIndex : 0;
  });
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [areaColors, setAreaColors] = useState<Record<string, Record<string, string>>>({});
  const [showGallery, setShowGallery] = useState(false);

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
      <header className="h-16 md:h-20 px-4 md:px-8 flex flex-shrink-0 items-center justify-between border-b-4 border-[#E6E2D3] bg-white z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => setShowGallery(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg active:scale-90 transition-transform"
          >
            <ImageIcon className="text-[#5A5A40]" size={24} />
          </button>
          <div className="hidden sm:flex w-10 h-10 md:w-12 md:h-12 bg-[#FFD93D] rounded-xl md:rounded-2xl items-center justify-center border-b-4 border-[#D4B532]">
            <Heart className="text-white fill-current" size={20} />
          </div>
          <h1 className="text-xl md:text-3xl font-black tracking-tight uppercase">Toddler Paint</h1>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setShowGallery(true)}
            className="hidden md:flex px-6 py-2 bg-white border-2 border-[#E6E2D3] rounded-full font-bold shadow-sm hover:bg-[#F5F2ED] transition-colors items-center gap-2"
          >
            <ImageIcon size={18} />
            Library
          </button>
          <button
            onClick={resetCurrentPage}
            className="p-2 md:px-6 md:py-2 bg-white border-2 border-[#E6E2D3] rounded-full font-bold shadow-sm hover:bg-[#F5F2ED] transition-colors flex items-center gap-2"
          >
            <RotateCcw size={18} />
            <span className="hidden md:inline">Reset</span>
          </button>
          <button
            onClick={() => setSelectedColor('#FFFFFF')}
            className={`p-2 md:px-6 md:py-2 border-b-4 rounded-full font-bold shadow-md transition-all flex items-center gap-2 ${
              selectedColor === '#FFFFFF'
                ? 'bg-[#FF6B6B] text-white border-[#D65A5A]'
                : 'bg-[#A8C69F] text-white border-[#89A381]'
            }`}
          >
            <Eraser size={18} />
            <span className="hidden md:inline">{selectedColor === '#FFFFFF' ? 'Using Eraser' : 'Eraser'}</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative">
        {/* Gallery Sidebar - Visible on Desktop, Toggleable on Mobile */}
        <AnimatePresence>
          {showGallery && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setShowGallery(false)}
            />
          )}
        </AnimatePresence>

        <aside 
          className={`fixed inset-y-0 left-0 z-60 w-64 bg-white border-r-4 border-[#E6E2D3] p-4 flex flex-col gap-4 overflow-y-auto transform transition-transform duration-300 md:static md:translate-x-0 md:z-0 ${
            showGallery ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between md:mb-2 pb-2 border-b-2 border-dashed border-[#E6E2D3]">
            <h2 className="text-sm font-black uppercase tracking-widest text-[#B5B09D]">Drawings</h2>
            <button onClick={() => setShowGallery(false)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <RotateCcw className="rotate-45" size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 pb-20 md:pb-4">
            {COLORING_PAGES.map((page, index) => (
              <motion.button
                key={page.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentPageIndex(index);
                  if (window.innerWidth < 768) setShowGallery(false);
                }}
                className={`w-full aspect-square rounded-xl border-4 transition-all overflow-hidden flex flex-col items-center justify-center p-1 gap-1 group ${
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
                <span className={`text-[8px] font-black uppercase tracking-tighter truncate w-full ${
                  currentPageIndex === index ? 'text-[#5A5A40]' : 'text-[#B5B09D]'
                }`}>
                  {page.name}
                </span>
              </motion.button>
            ))}
          </div>
        </aside>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-[#F5F2ED] overflow-y-auto mb-28 md:mb-0">
          <div className="w-full h-full max-w-[900px] flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="w-full flex-1 min-h-0"
              >
                <ColoringCanvas
                  page={currentPage}
                  areaColors={currentPageColors}
                  onColorArea={handleColorArea}
                />
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

        {/* Desktop Sidebar Palette / Mobile Bottom Palette */}
        <aside className="fixed bottom-10 md:bottom-0 left-0 right-0 h-28 md:h-auto md:static md:w-64 bg-white border-t-4 md:border-t-0 md:border-l-4 border-[#E6E2D3] p-4 md:p-6 flex flex-col z-[40]">
          <h2 className="hidden md:block text-lg font-black uppercase text-center mb-4 tracking-wide">Color Box</h2>
          <div className="flex-1 overflow-x-auto md:overflow-y-hidden scrollbar-hide">
            <Palette 
              selectedColor={selectedColor} 
              onSelectColor={setSelectedColor} 
            />
          </div>
          
          <div className="hidden md:flex mt-6 justify-center">
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

      <footer className="h-auto py-2 bg-[#5A5A40] text-white flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 px-4 md:px-8 flex-shrink-0 z-[70]">
        <div className="text-[8px] md:text-[10px] uppercase font-bold tracking-[0.2em]">© Toddler Paint</div>
        <div className="flex gap-4 text-[8px] md:text-[10px] font-medium opacity-80">
          <span>Email: narayan.abhishek.28@gmail.com</span>
          <span>Mob: 8884081917</span>
        </div>
      </footer>
    </div>
  );
}
