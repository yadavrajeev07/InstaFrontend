import { useState } from "react";
import ExploreCard from "./ExploreCard";

const posts = [
  { 
    id: 1, 
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&h=800&fit=crop", 
    large: true,
    likes: 1200,
    comments: 120,
    username: "traveler_john",
    caption: "Sunset over the mountains"
  },
  { 
    id: 2, 
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w-400&h=400&fit=crop",
    likes: 850,
    comments: 45,
    username: "beach_lover",
    caption: "Tropical paradise"
  },
  { 
    id: 3, 
    img: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop",
    likes: 920,
    comments: 67,
    username: "urban_explorer",
    caption: "City lights"
  },
  { 
    id: 4, 
    img: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=400&h=400&fit=crop",
    likes: 430,
    comments: 23,
    username: "nature_photographer",
    caption: "Forest path"
  },
  { 
    id: 5, 
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&h=800&fit=crop", 
    large: true,
    likes: 2100,
    comments: 189,
    username: "mountain_climber",
    caption: "Peak view"
  },
  { 
    id: 6, 
    img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&h=400&fit=crop",
    likes: 670,
    comments: 34,
    username: "foodie_queen",
    caption: "Delicious desserts"
  },
  { 
    id: 7, 
    img: "https://images.unsplash.com/photo-1503264116251-35a269479413?w=400&h=400&fit=crop",
    likes: 320,
    comments: 18,
    username: "street_artist",
    caption: "Urban art"
  },
  { 
    id: 8, 
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop",
    likes: 1560,
    comments: 112,
    username: "astronomy_nerd",
    caption: "Starry night"
  },
  { 
    id: 9, 
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop",
    likes: 890,
    comments: 56,
    username: "adventure_seeker",
    caption: "Mountain lake"
  },
  { 
    id: 10, 
    img: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop",
    likes: 540,
    comments: 29,
    username: "fashion_blogger",
    caption: "Style inspiration"
  },
  { 
    id: 11, 
    img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    likes: 720,
    comments: 41,
    username: "coffee_lover",
    caption: "Morning brew"
  },
  { 
    id: 12, 
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=800&fit=crop", 
    large: true,
    likes: 1850,
    comments: 134,
    username: "night_photographer",
    caption: "City skyline"
  },
];

const ExploreGrid = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`${post.large ? "lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <ExploreCard 
              post={post} 
              onClick={() => setSelectedPost(post)}
            />
          </div>
        ))}
      </div>

      {/* Modal for selected post */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row">
            {/* Image */}
            <div className="md:w-2/3 h-64 md:h-auto bg-gray-900">
              <img
                src={selectedPost.img}
                alt={selectedPost.caption}
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Details */}
            <div className="md:w-1/3 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                <div>
                  <div className="font-semibold">{selectedPost.username}</div>
                  <div className="text-gray-500 text-sm">{selectedPost.caption}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.5 0h-17A3.5 3.5 0 0 0 0 3.5v17A3.5 3.5 0 0 0 3.5 24h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 20.5 0Zm-8.5 17a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
                  </svg>
                  <span className="font-semibold">{selectedPost.likes.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                  <span className="font-semibold">{selectedPost.comments}</span>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {/* Comments would go here */}
                <div className="text-gray-500 text-center py-8">
                  No comments yet. Be the first to comment!
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <button className="w-full px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Follow {selectedPost.username}
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreGrid;