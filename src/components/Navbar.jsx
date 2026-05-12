import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Tv, PlaySquare, Home, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="w-[90%] mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors">
              <PlaySquare className="w-5 h-5 text-white" />
              <span className="font-bold text-[1.1rem] tracking-tight">Seenit</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Home className="w-4 h-4" /> Home
              </Link>
              <a href="#movies" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Film className="w-4 h-4" /> Movies
              </a>
              <a href="#shows" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
                <Tv className="w-4 h-4" /> TV Shows
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
