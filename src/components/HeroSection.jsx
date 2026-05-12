import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, Play, X } from 'lucide-react';

const HeroSection = ({ mediaList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Only auto-switch if video is not playing
    if (isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [mediaList.length, isPlaying]);

  if (!mediaList || mediaList.length === 0) return null;

  const currentMedia = mediaList[currentIndex];

  return (
    <div className="relative h-[80vh] w-full flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        {!isPlaying ? (
          <div key={currentMedia.id} className="relative w-full h-full animate-in fade-in duration-1000">
            <img 
              src={currentMedia.coverImage} 
              alt={currentMedia.title} 
              className="w-full h-full object-cover transition-all duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        ) : (
          <div className="w-full h-full relative bg-black transition-all duration-1000 overflow-hidden">
            {(() => {
              const videoId = currentMedia.topSceneVideoUrl.split('/').pop().split('?')[0];
              return (
                <iframe 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(177.77vh,100vw)] h-[max(100vh,56.25vw)] pointer-events-none brightness-110 scale-[1.35] md:scale-[1.25]"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0&playsinline=1&disablekb=1&loop=1&iv_load_policy=3&vq=hd1080&playlist=${videoId}`}
                  title={`${currentMedia.title} Top Scene`}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              );
            })()}
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            
            {/* Seamless Exit Button */}
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-8 right-8 z-50 flex items-center gap-2 px-2 py-2 bg-black/30 hover:bg-black/60 rounded-full text-white/70 hover:text-white backdrop-blur-md transition-all border border-white/10 group pointer-events-auto"
            >
              <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Content - Moves to bottom instantly when playing */}
      <div className={`relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-10 ${isPlaying ? 'translate-y-[20vh] md:translate-y-[25vh]' : 'translate-y-0'}`}>
        <div key={currentMedia.id} className="max-w-3xl animate-in slide-in-from-left-8 duration-700">
          {!isPlaying && (
            <span className="inline-block px-3 py-1 text-sm font-semibold tracking-wider text-white bg-neutral-500/20 border border-neutral-500/30 rounded-full backdrop-blur-sm mb-4">
              Featured {currentMedia.type}
            </span>
          )}
          
          <h1 className={`font-extrabold text-white tracking-tight drop-shadow-2xl ${isPlaying ? 'text-3xl md:text-5xl mb-4' : 'text-4xl md:text-6xl mb-6'}`}>
            {currentMedia.title}
          </h1>
          
          {!isPlaying && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed drop-shadow-md mb-8 max-h-32 overflow-hidden">
              {currentMedia.description}
            </p>
          )}
          
          <div className={`flex flex-wrap gap-4 ${isPlaying ? 'scale-90 origin-left' : 'scale-100'}`}>
            {/* Play Button - Desktop: Play in place, Mobile: Navigate to details */}
            <button 
              onClick={() => setIsPlaying(true)}
              className={`hidden md:flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg ${isPlaying ? 'bg-white/20 text-white backdrop-blur-md border border-white/20 hover:bg-white/30' : 'bg-white text-black hover:bg-gray-200 shadow-white/10'}`}
            >
              <Play className="w-5 h-5 fill-current" />
              {isPlaying ? 'Playing' : 'Play'}
            </button>
            <Link 
              to={`/media/${currentMedia.id}`}
              className="flex md:hidden items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg shadow-white/10"
            >
              <Play className="w-5 h-5 fill-current" />
              Play
            </Link>
            <Link 
              to={`/media/${currentMedia.id}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 text-white font-semibold rounded-lg hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20 transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
        {mediaList.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
