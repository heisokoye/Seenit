import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const MediaCard = ({ media }) => {
  return (
    <Link to={`/media/${media.id}`} className="group/card relative block overflow-hidden rounded-xl bg-gray-900 transition-all hover:scale-110 hover:z-50 hover:shadow-2xl hover:shadow-black/80 duration-500 ease-out">
      <div className="aspect-2/3 md:aspect-5/4 w-full">
        <img 
          src={media.posterImage} 
          alt={media.title} 
          className="h-full w-full object-cover transition-opacity duration-300 group-hover/card:opacity-50"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
        <div className="translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-2 py-1 text-xs font-semibold tracking-wider text-neutral-300 bg-neutral-500/20 rounded-md mb-2">
            {media.type}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{media.title}</h3>
          
          <div className="flex items-center gap-2 text-sm text-gray-300 font-medium">
            <Play className="w-4 h-4" />
            Watch Scene & Details
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
