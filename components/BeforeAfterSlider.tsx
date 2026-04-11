"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  return (
    <div 
      className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-ew-resize bg-dark-800"
      ref={containerRef}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* Before Image (Background) */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt="Before Smile Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-lg pointer-events-none">
          Before
        </div>
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={afterImage}
          alt="After Smile Design"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute top-4 right-4 bg-accent text-dark-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-lg pointer-events-none">
          After
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-primary cursor-ew-resize flex items-center justify-center group-hover:bg-accent transition-colors shadow-[0_0_10px_rgba(87,91,163,0.5)]"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="absolute w-8 h-8 bg-primary group-hover:bg-accent rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 -ml-4">
          <ChevronLeft className="w-4 h-4 text-white -mr-1" />
          <ChevronRight className="w-4 h-4 text-white -ml-1" />
        </div>
      </div>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 z-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none" 
      />
    </div>
  );
}
