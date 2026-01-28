// components/ReelCard.tsx
import { useState, useRef, useEffect } from 'react';
import { FiHeart, FiMessageCircle, FiSend, FiMoreVertical, FiMusic, FiVolume2, FiVolumeX } from "react-icons/fi";
import { AiFillHeart } from 'react-icons/ai';
import { IoIosPause, IoIosPlay } from 'react-icons/io';

const ReelCard = ({ reel, isActive = false }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
    } else if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isActive]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative h-screen w-[420px] flex items-center justify-center snap-start bg-white">
      
      {/* Video Container */}
      <div className="relative h-full w-full overflow-hidden rounded-xl shadow-lg">
        {/* Video */}
        <video
          ref={videoRef}
          src={reel.video}
          className="h-full w-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={handlePlayPause}
        />

        {/* Top Gradient Overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Play/Pause Overlay */}
        {!isPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
            onClick={handlePlayPause}
          >
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <IoIosPlay size={40} className="text-white ml-1" />
            </div>
          </div>
        )}

        {/* Volume Button */}
        <button 
          onClick={toggleMute}
          className="absolute top-20 right-4 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/40 transition"
        >
          {isMuted ? <FiVolumeX size={20} /> : <FiVolume2 size={20} />}
        </button>

        {/* Right Actions */}
        <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6 text-white">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex flex-col items-center gap-1 hover:scale-105 transition-transform"
          >
            <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
              {isLiked ? (
                <AiFillHeart size={28} className="text-red-500" />
              ) : (
                <FiHeart size={28} className="text-white" />
              )}
            </div>
            <span className="text-xs font-medium">{reel.likes}</span>
          </button>

          <button className="flex flex-col items-center gap-1 hover:scale-105 transition-transform">
            <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
              <FiMessageCircle size={28} />
            </div>
            <span className="text-xs font-medium">{reel.comments}</span>
          </button>

          <button className="flex flex-col items-center gap-1 hover:scale-105 transition-transform">
            <div className="p-2 rounded-full bg-black/30 backdrop-blur-sm">
              <FiSend size={26} />
            </div>
            <span className="text-xs font-medium">Share</span>
          </button>

          <button className="p-2 rounded-full bg-black/30 backdrop-blur-sm hover:scale-105 transition-transform">
            <FiMoreVertical size={26} />
          </button>

          {/* Music Album Art */}
          <div className="mt-4 p-1.5 rounded-md bg-black/30 backdrop-blur-sm border border-white/20">
            <img 
              src={reel.avatar} 
              alt="Music" 
              className="w-10 h-10 rounded-md object-cover"
            />
          </div>
        </div>

        {/* User Info Top */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={reel.avatar}
                alt=""
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="font-semibold text-white text-sm">
              {reel.user}
            </span>
            <button className="border border-white px-3 py-1 text-xs rounded-lg font-medium text-white hover:bg-white/10 transition">
              Follow
            </button>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-4 right-20 text-white">
          <p className="text-sm mb-2 leading-relaxed">
            {reel.caption}
            {reel.caption.length > 80 && (
              <span className="text-gray-300 ml-1 cursor-pointer font-medium">more</span>
            )}
          </p>

          {/* Music Info */}
          <div className="flex items-center gap-2 text-sm">
            <FiMusic size={14} />
            <span className="font-medium">Original sound</span>
            <div className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelCard;