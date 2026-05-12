import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Heart, MessageCircle } from 'lucide-react';
import { mediaData } from '../data/media';

const MediaDetail = () => {
  const { id } = useParams();
  const media = mediaData.find(m => m.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!media) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white flex-col gap-4">
        <h1 className="text-3xl font-bold">Media not found</h1>
        <Link to="/" className="text-gray-400 hover:text-gray-300 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-linear-to-b from-black/80 to-transparent p-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-200 hover:text-white transition-colors bg-black/30 backdrop-blur-md px-2 py-2 rounded-full border border-white/10 hover:bg-black/50"
        >
          <ArrowLeft className="w-5 h-5" />

        </Link>
      </nav>

      {/* Hero Backdrop */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0">
          <img 
            src={media.coverImage} 
            alt={media.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <img 
              src={media.posterImage} 
              alt={media.title} 
              className="w-48 h-72 object-cover rounded-xl shadow-2xl shadow-black/50 border border-white/10 hidden md:block"
            />
            <div className="flex-1">
              <span className="inline-block px-3 py-1 mb-4 text-sm font-semibold tracking-wider text-neutral-300 bg-neutral-500/20 border border-neutral-500/30 rounded-full">
                {media.type}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">{media.title}</h1>
              <p className="text-[1rem] md:text-lg text-gray-300 max-w-3xl leading-relaxed">
                {media.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            {/* Detailed Review Section */}
            {(media.detailedReview || media.topScene) && (
              <section className="space-y-6">
                {media.detailedReview && (
                  <div className="bg-neutral-900/40 p-8 rounded-2xl border border-white/5 shadow-xl">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-4">Deep Dive Review</h2>
                    <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-wrap text-sm md:text-lg">
                      {media.detailedReview}
                    </div>
                  </div>
                )}
                
                {media.topScene && (
                  <div className="bg-linear-to-br from-rose-950/30 to-black/40 px-1 md:p-6 rounded-2xl border border-rose-500/10 shadow-xl overflow-hidden">
                    <h2 className="text-xl font-bold tracking-tight text-rose-100 flex items-center gap-3 mb-6">
                      <Star className="w-5 h-5 text-rose-500 fill-rose-500" />
                      Favorite Scene
                    </h2>
                    
                    {media.topSceneVideoUrl && (
                      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl shadow-black/80 mb-6 border border-white/10 bg-black relative">
                        <iframe 
                          className="w-[140%] h-[300%] absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 brightness-110"
                          src={`${media.topSceneVideoUrl}?autoplay=0&controls=1&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&vq=hd720&playlist=${media.topSceneVideoUrl.split('/').pop()}`}
                          title="Favorite Scene"
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen
                        ></iframe>
                        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/20 pointer-events-none" />
                      </div>
                    )}

                    <p className="text-rose-200/90 leading-relaxed italic border-l-4 border-rose-500/50 pl-5 py-2 text-sm">
                      "{media.topScene}"
                    </p>
                  </div>
                )}
              </section>
            )}

           
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Why I like it */}
            <div className="bg-neutral-950 backdrop-blur-sm rounded-2xl p-8 border border-white/5 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />
                <h3 className="text-xl font-bold">Why I Love It</h3>
              </div>
              <ul className="space-y-4">
                {media.reasonsToLike.map((reason, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <MessageCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MediaDetail;
