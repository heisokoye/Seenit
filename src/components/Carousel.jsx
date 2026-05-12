import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MediaCard from './MediaCard';

const Carousel = ({ title, items, id }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800; // Scroll roughly 3-4 cards
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (items.length === 0) return null;

  return (
    <section id={id} className="py-6 relative group/row">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
        
        {/* Desktop Controls */}
        <div className="hidden md:flex gap-2 opacity-0 group-hover/row:opacity-100 transition-opacity duration-300">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 transition-colors border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-neutral-800/80 text-white hover:bg-neutral-700 transition-colors border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="relative -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-2 md:gap-4 snap-x snap-mandatory py-12 scrollbar-hide -my-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map(media => (
            <div key={media.id} className="snap-start shrink-0 w-[47%] sm:w-[45%] md:w-[30%] lg:w-[22%]">
              <MediaCard media={media} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
