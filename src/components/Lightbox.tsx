import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryItem, Language } from '../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  lang: Language;
}

export function Lightbox({ isOpen, onClose, items, currentIndex, setCurrentIndex, lang }: LightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-xl p-4 md:p-8 select-none">
        {/* Backdrop clickable areas */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

        {/* Top Control Bar */}
        <div className="relative z-10 flex justify-between items-center bg-black/40 backdrop-blur-md px-4 py-3 rounded-xl border border-zinc-900 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-gold-400 font-mono text-xs">
            <ImageIcon className="w-4 h-4" />
            <span>{currentIndex + 1} / {items.length}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400 uppercase tracking-widest">{currentItem.category}</span>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-all cursor-pointer hover:scale-105"
            title="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Stage */}
        <div className="relative flex items-center justify-center max-w-7xl mx-auto w-full flex-1 my-4">
          {/* Navigation - Left Arrow */}
          <button 
            onClick={handlePrev}
            className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-black/50 text-zinc-400 hover:text-white hover:bg-black/80 border border-zinc-800 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Centered Image */}
          <motion.div 
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="max-w-full max-h-[70vh] flex items-center justify-center pointer-events-none"
          >
            <img 
              src={currentItem.src} 
              alt={currentItem.alt[lang]} 
              className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-zinc-800"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Navigation - Right Arrow */}
          <button 
            onClick={handleNext}
            className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-black/50 text-zinc-400 hover:text-white hover:bg-black/80 border border-zinc-800 transition-all hover:scale-110 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Title Bar */}
        <div className="relative z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-xl border border-zinc-900 max-w-3xl mx-auto w-full text-center">
          <p className="font-display font-medium text-sm md:text-base text-zinc-100">
            {currentItem.alt[lang]}
          </p>
        </div>
      </div>
    </AnimatePresence>
  );
}
