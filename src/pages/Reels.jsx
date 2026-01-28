// pages/Reels.tsx
import { useState, useEffect, useRef } from 'react';
import ReelCard from "../components/ReelCard";
import { Link } from "react-router-dom";
import { 
  FiHome, 
  FiSearch, 
  FiPlusSquare, 
  FiUser, 
  FiMessageCircle,
  FiCompass,
  FiHeart
} from "react-icons/fi";
import { BsInstagram } from 'react-icons/bs';

const reels = [
  {
    id: 1,
    user: "virat.kohli",
    avatar: "https://i.pravatar.cc/150?img=12",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    caption: "Focus. Fire. Finish 🔥 #cricket #motivation #goat",
    likes: "1.2M",
    comments: "8,432",
  },
  {
    id: 2,
    user: "cricketworld",
    avatar: "https://i.pravatar.cc/150?img=32",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    caption: "That shot 😮‍💨 Pure class! This is why we love cricket!",
    likes: "542K",
    comments: "2,112",
  },
  {
    id: 3,
    user: "fitness.guru",
    avatar: "https://i.pravatar.cc/150?img=45",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    caption: "Morning workout routine 💪 Start your day right! #fitness #workout",
    likes: "890K",
    comments: "15.4K",
  },
  {
    id: 4,
    user: "travel.diary",
    avatar: "https://i.pravatar.cc/150?img=8",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    caption: "Sunset views from Bali 🌅 Best travel destination! #travel #bali",
    likes: "1.5M",
    comments: "28.7K",
  },
  {
    id: 5,
    user: "foodie.girl",
    avatar: "https://i.pravatar.cc/150?img=60",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    caption: "Homemade pizza night 🍕 Perfect crust every time! #food #cooking",
    likes: "720K",
    comments: "9.8K",
  },
];

const Reels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const reelRefs = useRef([]);

  // Handle mouse wheel scroll
  const handleWheel = (e) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (e.deltaY > 0 && activeIndex < reels.length - 1) {
      // Scroll down - next reel
      setActiveIndex(prev => prev + 1);
    } else if (e.deltaY < 0 && activeIndex > 0) {
      // Scroll up - previous reel
      setActiveIndex(prev => prev - 1);
    }
    
    setTimeout(() => setIsScrolling(false), 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' && activeIndex < reels.length - 1) {
        setActiveIndex(prev => prev + 1);
      } else if (e.key === 'ArrowUp' && activeIndex > 0) {
        setActiveIndex(prev => prev - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Scroll to active reel
  useEffect(() => {
    if (reelRefs.current[activeIndex]) {
      reelRefs.current[activeIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeIndex]);

  return (
    <div className="bg-white min-h-screen text-black">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 px-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <BsInstagram size={28} className="text-black" />
            <h1 className="text-xl font-bold tracking-tight text-black">Reels</h1>
          </div>

          {/* Search Bar */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search reels"
              className="w-full bg-gray-100 border border-gray-300 rounded-full px-4 py-2 text-sm text-black focus:outline-none focus:border-gray-400 focus:bg-white"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
          </div>

          {/* Top Right Actions */}
          <div className="flex items-center gap-4">
            <Link to="/create" className="p-2">
              <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:opacity-90 transition">
                Create
              </button> 
            </Link>
            <Link to="/messages" className="p-2">
              <button className="relative p-2">
                <FiMessageCircle size={22} className="text-black" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-xs text-white rounded-full flex items-center justify-center">3</span>
              </button>
            </Link>
            <Link to="/notifications" className="p-2">
              <button className="p-2">
                <FiHeart size={22} className="text-black" />
              </button>
            </Link>
            <Link to="/profile" className="p-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/150?img=1" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div 
        ref={containerRef}
        onWheel={handleWheel}
        className="pt-20 pb-20 flex flex-col items-center overflow-y-auto h-screen snap-y snap-mandatory scrollbar-hide"
      >
        {reels.map((reel, index) => (
          <div 
            key={reel.id}
            ref={el => reelRefs.current[index] = el}
            className="snap-start snap-always"
          >
            <ReelCard 
              reel={reel} 
              isActive={index === activeIndex}
            />
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="max-w-2xl mx-auto px-4 py-1">
          <div className="flex items-center justify-around">
            <Link to="/home" className="flex flex-col items-center gap-1 hover:text-pink-600 transition">
              <FiHome size={24} className="text-gray-700" />
              <span className="text-xs text-gray-600">Home</span>
            </Link>
            
            <Link to="/search" className="flex flex-col items-center gap-1 hover:text-pink-600 transition">
              <FiSearch size={24} className="text-gray-700" />
              <span className="text-xs text-gray-600">Search</span>
            </Link>
            
            <div className="flex flex-col items-center gap-1 text-pink-600">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-3">
                <BsInstagram size={20} className="text-white" />
              </div>
              <span className="text-xs">Reels</span>
            </div>
            
            <Link to="/explore" className="flex flex-col items-center gap-1 hover:text-pink-600 transition">
              <FiCompass size={24} className="text-gray-700" />
              <span className="text-xs text-gray-600">Explore</span>
            </Link>
            
            <Link to="/profile" className="flex flex-col items-center gap-1 hover:text-pink-600 transition">
              <FiUser size={24} className="text-gray-700" />
              <span className="text-xs text-gray-600">Profile</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
     {/* Compact version */}
<div className="fixed right-2 top-1/2 -translate-y-1/2 z-40 ">
  <div className="flex flex-col items-center gap-1">
    {reels.map((_, index) => (
      <button
        key={index}
        onClick={() => handleReelNavigation(index)}
        className="group"
      >
        <div
          className={`w-1.5 rounded-full transition-all duration-300 ${
            index === activeIndex
              ? 'h-8 bg-gray-800'
              : 'h-4 bg-gray-300 hover:h-6'
          }`}
        />
      </button>
    ))}
  </div>
</div>
      {/* Instructions */}
      
    </div>
  );  
};

export default Reels;