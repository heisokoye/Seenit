import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, Play, X } from 'lucide-react';

const HeroSection = ({ featuredMedia }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!featuredMedia) return null;

  return (
    <div className="relative h-[80vh] w-full flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPlaying ? (
          <>
            <img 
              src={featuredMedia.coverImage} 
              alt={featuredMedia.title} 
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </>
        ) : (
          <div className="w-full h-full relative">
            <iframe 
              className="w-full h-full object-cover scale-[1.3] pointer-events-none"
              src={`${featuredMedia.trailerUrl}&controls=0&modestbranding=1&showinfo=0`}
              title={`${featuredMedia.title} Trailer`}
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-24 right-8 z-50 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white backdrop-blur-md transition-all pointer-events-auto"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>

      {/* Content - Slides left and fades out when playing */}
      <div className={`relative z-10 w-[90%] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-in-out ${isPlaying ? '-translate-x-full opacity-0 pointer-events-none' : 'translate-x-0 opacity-100'}`}>
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-white bg-neutral-500/20 border border-neutral-500/30 rounded-full backdrop-blur-sm">
            Featured {featuredMedia.type}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            {featuredMedia.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 line-clamp-3 leading-relaxed drop-shadow-md">
            {featuredMedia.description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setIsPlaying(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              <Play className="w-5 h-5 fill-current" />
              Play
            </button>
            <Link 
              to={`/media/${featuredMedia.id}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 text-white font-semibold rounded-lg hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700 transition-colors duration-200"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
