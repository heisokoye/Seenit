import React from 'react';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import { mediaData } from '../data/media';

const Home = () => {
  // Select specific featured media for the hero carousel
  const featuredMediaList = mediaData.filter(m => 
    ["show-1", "show-3", "movie-1", "cartoon-4"].includes(m.id)
  );

  // Group media by type
  const movies = mediaData.filter(m => m.type === 'Movie');
  const shows = mediaData.filter(m => m.type === 'TV Show');
  const animes = mediaData.filter(m => m.type === 'Anime');
  const animatedShows = mediaData.filter(m => m.type === 'Animated Show');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      
      <main>
        <HeroSection mediaList={featuredMediaList} />
        
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-10 py-8 space-y-4">
          <Carousel id="shows" title="Top TV Shows" items={shows} />
          <Carousel id="movies" title="Top Movies" items={movies} />
          <Carousel id="anime" title="Top Anime" items={animes} />
          <Carousel id="animated-shows" title="Top Animated Shows" items={animatedShows} />
        </div>
      </main> 

      {/* Simple Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 text-center text-neutral-500">
        <p>List of Okoye's Favorites </p>
      </footer>
    </div>
  );
};

export default Home;