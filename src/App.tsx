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
      <header className="h-12 md:h-16 px-4 md:px-8 flex flex-shrink-0 items-center justify-between border-b-4 border-[#E6E2D3] bg-white z-50">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex w-8 h-8 md:w-10 md:h-10 bg-[#FFD93D] rounded-lg md:rounded-xl items-center justify-center border-b-4 border-[#D4B532]">
            <Heart className="text-white fill-current" size={16} />
          </div>
          <h1 className="text-lg md:text-2xl font-black tracking-tight uppercase">Toddler Paint</h1>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <button
            onClick={() => setShowGallery(true)}
            className="hidden md:flex px-4 py-1.5 bg-white border-2 border-[#E6E2D3] rounded-full font-bold shadow-sm hover:bg-[#F5F2ED] transition-colors items-center gap-2 text-sm"
          >
            <ImageIcon size={16} />
            Library
          </button>
          <button
            onClick={resetCurrentPage}
            className="p-1 px-3 md:px-4 md:py-1.5 bg-white border-2 border-[#E6E2D3] rounded-full font-bold shadow-sm hover:bg-[#F5F2ED] transition-colors flex items-center gap-2 text-sm"
          >
            <RotateCcw size={16} />
            <span className="hidden md:inline">Reset</span>
          </button>
          <button
            onClick={() => setSelectedColor('#FFFFFF')}
            className={`p-1 px-3 md:px-4 md:py-1.5 border-b-4 rounded-full font-bold shadow-md transition-all flex items-center gap-2 text-sm ${
              selectedColor === '#FFFFFF'
                ? 'bg-[#FF6B6B] text-white border-[#D65A5A]'
                : 'bg-[#A8C69F] text-white border-[#89A381]'
            }`}
          >
            <Eraser size={16} />
            <span className="hidden md:inline">{selectedColor === '#FFFFFF' ? 'Using Eraser' : 'Eraser'}</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden relative">
        {/* Mobile Gallery Toggle Tab - Glued to Left */}
        <AnimatePresence>
          {!showGallery && (
            <motion.button
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 400 }}
              onClick={() => setShowGallery(true)}
              className="md:hidden fixed left-0 top-16 z-[45] w-10 h-10 bg-[#FFD93D] border-y-2 border-r-2 border-[#D4B532] rounded-r-xl flex items-center justify-center shadow-[2px_2px_0px_#D4B532] active:scale-90 transition-transform pr-1"
              title="Open Gallery"
            >
              <div className="animate-pulse">
                <ImageIcon size={24} className="text-[#5A5A40]" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

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
          className={`fixed inset-y-0 left-0 z-60 w-56 bg-white border-r-4 border-[#E6E2D3] p-3 flex flex-col gap-3 overflow-y-auto transform transition-transform duration-300 md:static md:translate-x-0 md:z-0 ${
            showGallery ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between md:mb-1 pb-1 border-b-2 border-dashed border-[#E6E2D3]">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-[#B5B09D]">Drawings</h2>
            <button onClick={() => setShowGallery(false)} className="md:hidden p-1.5 hover:bg-gray-100 rounded-full">
              <RotateCcw className="rotate-45 text-[#B5B09D]" size={18} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 pb-24 md:pb-4">
            {COLORING_PAGES.map((page, index) => (
              <motion.button
                key={page.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentPageIndex(index);
                  if (window.innerWidth < 768) setShowGallery(false);
                }}
                className={`w-full h-24 rounded-xl border-4 transition-all overflow-hidden flex flex-col items-center justify-between p-1.5 gap-1 group ${
                  currentPageIndex === index
                    ? 'bg-[#FFFBEB] border-[#FFD93D] shadow-md'
                    : 'bg-white border-[#E6E2D3] hover:border-[#B5B09D]'
                }`}
              >
                <div className="w-full flex-1 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity min-h-0">
                  <svg viewBox="0 0 500 500" className="max-w-[75%] max-h-[75%]">
                    {page.areas.map(area => (
                      <path
                        key={area.id}
                        d={area.d}
                        fill={currentPageIndex === index ? (areaColors[page.id]?.[area.id] || '#FFFFFF') : '#FFFFFF'}
                        stroke="#5A5A40"
                        strokeWidth="14"
                      />
                    ))}
                  </svg>
                </div>
                <span className={`text-[7px] font-black uppercase tracking-tighter truncate w-full px-1 ${
                  currentPageIndex === index ? 'text-[#5A5A40]' : 'text-[#B5B09D]'
                }`}>
                  {page.name}
                </span>
              </motion.button>
            ))}
          </div>
        </aside>

        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-2 md:p-4 bg-[#F5F2ED] overflow-y-auto mb-24 md:mb-0">
          <div className="w-full h-full max-w-[1000px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="w-full h-full"
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
        <aside className="fixed bottom-6 md:bottom-0 left-0 right-0 h-24 md:h-auto md:static md:w-56 bg-white border-t-4 md:border-t-0 md:border-l-4 border-[#E6E2D3] p-2 md:p-4 flex flex-col z-[40]">
          <h2 className="hidden md:block text-sm font-black uppercase text-center mb-3 tracking-wide">Palette</h2>
          <div className="flex-1 overflow-x-auto md:overflow-y-hidden scrollbar-hide py-1">
            <Palette 
              selectedColor={selectedColor} 
              onSelectColor={setSelectedColor} 
            />
          </div>
          
          <div className="hidden md:flex mt-4 justify-center">
            <div className="flex flex-col items-center gap-1">
              <div 
                className="w-10 h-10 rounded-lg border-4 shadow-sm flex items-center justify-center transition-all bg-white"
                style={{ borderColor: selectedColor === '#FFFFFF' ? '#E6E2D3' : selectedColor }}
              >
                <div 
                  className="w-5 h-5 rounded-full" 
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
              <span className="text-[8px] font-black uppercase tracking-widest text-[#B5B09D]">Selected</span>
            </div>
          </div>
        </aside>
      </main>

      <footer className="h-6 py-0.5 bg-[#5A5A40] text-white flex flex-row items-center justify-center gap-4 px-4 flex-shrink-0 z-[70] overflow-hidden">
        <div className="text-[7px] uppercase font-bold tracking-[0.2em] whitespace-nowrap">© Toddler Paint</div>
        <div className="hidden sm:flex gap-3 text-[7px] font-medium opacity-60 whitespace-nowrap">
          <span>narayan.abhishek.28@gmail.com</span>
          <span>8884081917</span>
        </div>
      </footer>
    </div>

  );
}
