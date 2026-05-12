import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Carousel from '../components/Carousel';
import { mediaData } from '../data/media';

const Home = () => {
  // Use the first item as the featured media (The Office)
  const featuredMedia = mediaData[0];

  // Group media by type
  const movies = mediaData.filter(m => m.type === 'Movie');
  const shows = mediaData.filter(m => m.type === 'TV Show');
  const animes = mediaData.filter(m => m.type === 'Anime');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main>
        <HeroSection featuredMedia={featuredMedia} />
        
        <div className="w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          <Carousel id="shows" title="Top TV Shows" items={shows} />
          <Carousel id="movies" title="Top Movies" items={movies} />
          <Carousel id="anime" title="Top Anime" items={animes} />
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 text-center text-neutral-500">
        <p>SeenIt © 2026. Showcase of favorites.</p>
      </footer>
    </div>
  );
};

export default Home;