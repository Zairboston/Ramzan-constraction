import { useState, useRef, useEffect, MouseEvent, TouchEvent } from 'react';
import { translations, Language } from '../types';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  lang: Language;
}

export function BeforeAfterSlider({ beforeImage, afterImage, lang }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      id="before-after-slider-container"
      ref={containerRef}
      className="relative w-full h-80 sm:h-96 md:h-[400px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After image (background) */}
      <img 
        src={afterImage} 
        alt="After finished project" 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-gold-400 font-display text-xs tracking-wider uppercase px-3 py-1.5 rounded-full font-bold shadow-lg z-10 border border-gold-500/30">
        {t.afterLabel}
      </div>

      {/* Before image (clipped overlay) */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={beforeImage} 
          alt="Before construction project" 
          className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width || '100%', height: '100%' }}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-zinc-300 font-display text-xs tracking-wider uppercase px-3 py-1.5 rounded-full font-bold shadow-lg z-10 border border-zinc-500/30">
        {t.beforeLabel}
      </div>

      {/* Slide bar divider & handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gold-400 cursor-ew-resize shadow-2xl"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-gold-500 hover:bg-gold-600 rounded-full flex items-center justify-center border-2 border-white shadow-xl transition-transform active:scale-95 duration-150">
          <svg className="w-5 h-5 text-white animate-pulse" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.25 15 22.5 12l-4.25-3M5.75 9 1.5 12l4.25 3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
