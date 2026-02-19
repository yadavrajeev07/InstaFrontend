import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { useState } from "react";
import PostModal from "../components/PostModal";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const { posts } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  // Filter posts by current user
  const userPosts = posts.filter((post) => post.username === user?.username);
  const postCount = userPosts.length;

  // ✅ Use counts from backend or fallback to array length
  const followerCount = user?.followerCount ?? user?.followers?.length ?? 0;
  const followingCount = user?.followingCount ?? user?.following?.length ?? 0;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleEditProfile = () => navigate("/edit-profile");
  const handleViewArchive = () => console.log("View archive clicked");
  const handleShareFirstPhoto = () => console.log("Share first photo clicked");

  return (
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar Navbar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[72px] md:ml-[244px]">
        <div className="max-w-[935px] mx-auto px-4 py-8">
          
          {/* Profile Header */}
          <header className="py-6">
            <div className="flex items-start gap-8 md:gap-20 flex-col md:flex-row">
              {/* Profile Picture */}
              <div className="relative self-center md:self-start">
                <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={user?.avatar || "/default-avatar.png"}
                    alt={`${user?.username}'s profile`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/default-avatar.png";
                    }}
                  />
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer rounded-full">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <span className="text-white text-sm font-medium">
                    Change photo
                  </span>
                </label>
              </div>

              {/* User Info */}
              <div className="flex-1 w-full">
                {/* Username and Actions */}
                <div className="flex flex-wrap items-center gap-4 mb-5">
                  <h2 className="text-2xl md:text-3xl font-light">{user?.username || "Rajeev"}</h2>
                  <button 
                    className="px-4 py-1.5 bg-gray-50 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
                    onClick={handleEditProfile}
                  >
                    Edit profile
                  </button>
                  <button 
                    className="px-4 py-1.5 bg-gray-50 border border-gray-300 rounded-md text-sm font-semibold hover:bg-gray-100 transition-colors"
                    onClick={handleViewArchive}
                  >
                    View archive
                  </button>
                </div>

                {/* Stats */}
                <div className="flex gap-10 mb-5">
                  <div className="text-center md:text-left">
                    <span className="font-semibold text-lg">{postCount}</span>
                    <span className="ml-1 text-gray-600">posts</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="font-semibold text-lg">{followerCount}</span>
                    <span className="ml-1 text-gray-600">followers</span>
                  </div>
                  <div className="text-center md:text-left">
                    <span className="font-semibold text-lg">{followingCount}</span>
                    <span className="ml-1 text-gray-600">following</span>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-1">
                  <div className="font-semibold text-lg">{user?.fullName || "Artist"}</div>
                  <div className="text-gray-600">{user?.bio || "Give me a fu*king cigarette 🚬"}</div>
                </div>
              </div>
            </div>
          </header>

          {/* Posts Grid or Empty State */}
          <div className="py-12">
            {postCount > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {userPosts.map((post) => (
                  <div
                    key={post.id}
                    className="aspect-square cursor-pointer relative group overflow-hidden rounded-lg"
                    onClick={() => setSelectedPost(post)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        setSelectedPost(post);
                      }
                    }}
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.caption || "Post image"}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/default-post.png";
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-3xl font-light mb-4">Share Photos</h3>
                <button 
                  className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-colors text-base"
                  onClick={handleShareFirstPhoto}
                >
                  Share your first photo
                </button>
              </div>
            )}
          </div>

          {/* Post Modal */}
          {selectedPost && (
            <PostModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
