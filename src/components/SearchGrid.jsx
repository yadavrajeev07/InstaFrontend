import { useState, useEffect } from "react";
import { usePosts } from "../context/PostContext";

const SearchGrid = ({ searchQuery, activeTab }) => {
  const { posts } = usePosts();
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Mock users data
  const mockUsers = [
    { id: 1, username: "john_doe", fullName: "John Doe", followers: 120, isFollowing: false },
    { id: 2, username: "jane_smith", fullName: "Jane Smith", followers: 450, isFollowing: true },
    { id: 3, username: "alex_wilson", fullName: "Alex Wilson", followers: 890, isFollowing: false },
    { id: 4, username: "sarah_j", fullName: "Sarah Johnson", followers: 320, isFollowing: true },
  ];

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Filter posts based on query and active tab
    let filtered = [];
    
    if (activeTab === "top" || activeTab === "tags") {
      filtered = posts.filter(post => 
        post.caption?.toLowerCase().includes(query) ||
        post.username.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchQuery, posts, activeTab]);

  // Filter users based on query and active tab
  const filteredUsers = searchQuery 
    ? mockUsers.filter(user => 
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  // Handle follow action
  const handleFollow = (userId) => {
    console.log(`Follow user ${userId}`);
    // In real app, this would update backend
  };

  // Show accounts tab content
  if (activeTab === "accounts" && searchQuery) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Accounts</h2>
        {filteredUsers.length > 0 ? (
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <div className="ml-4 flex-1">
                  <div className="font-semibold">{user.username}</div>
                  <div className="text-gray-500">{user.fullName}</div>
                  <div className="text-gray-500 text-sm">{user.followers.toLocaleString()} followers</div>
                </div>
                <button
                  onClick={() => handleFollow(user.id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold ${user.isFollowing ? "bg-gray-100 text-black hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"}`}
                >
                  {user.isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-2">No accounts found for "{searchQuery}"</div>
            <div className="text-gray-500 text-sm">Try searching for something else</div>
          </div>
        )}
      </div>
    );
  }

  // Show posts/top tab content
  if ((activeTab === "top" || activeTab === "tags") && searchQuery) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Posts</h2>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square cursor-pointer relative group overflow-hidden rounded-lg bg-gray-100"
              >
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 0h-17A3.5 3.5 0 0 0 0 3.5v17A3.5 3.5 0 0 0 3.5 24h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 20.5 0Zm-8.5 17a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
                    </svg>
                    <span>{post.likes || 0}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    <span>{post.comments || 0}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-gray-500">Try searching for something else</p>
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default SearchGrid;