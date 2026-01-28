import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { useState } from "react";
import PostModal from "../components/PostModal";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user } = useAuth();
  const { posts } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);

  const userPosts = posts.filter((post) => post.username === user?.username);
  const postCount = userPosts.length;
  const followerCount = user?.followers || 0;
  const followingCount = user?.following || 0;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  const handleEditProfile = () => {
    console.log("Edit profile clicked");
  };

  const handleViewArchive = () => {
    console.log("View archive clicked");
  };

  const handleShareFirstPhoto = () => {
    console.log("Share first photo clicked");
  };

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
                  <button className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        fill="none"
                        r="8.635"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                        fill="none"
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
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

          {/* Tabs */}
          <div className="border-t border-gray-300 mt-8">
            <div className="flex justify-center md:justify-start">
              <div className="flex gap-12">
                <button className="flex items-center gap-1.5 py-4 border-t border-black text-xs font-semibold uppercase tracking-wider">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3H21V21H3z"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.01486 3 9.01486 21"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.98514 3 14.98514 21"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 9.01486 3 9.01486"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 14.98514 3 14.98514"
                    />
                  </svg>
                  <span>Posts</span>
                </button>
                
                <button className="flex items-center gap-1.5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 21 12 13.44 4 21 4 3 20 3 20 21z"
                    />
                  </svg>
                  <span>Saved</span>
                </button>
                
                <button className="flex items-center gap-1.5 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M21 7.48a2 2 0 0 0-2-2h-3.046a2.002 2.002 0 0 1-1.506-.683l-1.695-1.939a1 1 0 0 0-1.506 0L9.552 4.797c-.38.434-.93.682-1.506.682H5a2 2 0 0 0-2 2V19l.01.206A2 2 0 0 0 5 21h14a2 2 0 0 0 2-2V7.48ZM23 19a4 4 0 0 1-4 4H5a4 4 0 0 1-3.995-3.794L1 19V7.48a4 4 0 0 1 4-4h3.046l1.696-1.94a3 3 0 0 1 4.516 0l1.696 1.94H19a4 4 0 0 1 4 4V19Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.5 10.419a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM12 16.003c3.511 0 6.555 1.99 8.13 4.906a1 1 0 0 1-1.76.95c-1.248-2.31-3.64-3.857-6.37-3.857S6.878 19.55 5.63 21.86a1 1 0 0 1-1.76-.951c1.575-2.915 4.618-4.906 8.13-4.906Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Tagged</span>
                </button>
              </div>
            </div>
          </div>

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
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-8">
                      <div className="flex items-center gap-2 text-white font-semibold text-lg">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.5 0h-17A3.5 3.5 0 0 0 0 3.5v17A3.5 3.5 0 0 0 3.5 24h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 20.5 0Zm-8.5 17a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
                        </svg>
                        <span>{post.likes || 0}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white font-semibold text-lg">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                        <span>{post.comments || 0}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="mx-auto w-20 h-20 mb-6 border-2 border-black rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 11h-8V3a1 1 0 1 0-2 0v8H3a1 1 0 1 0 0 2h8v8a1 1 0 1 0 2 0v-8h8a1 1 0 1 0 0-2Z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-light mb-4">Share Photos</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">
                  When you share photos, they will appear on your profile.
                </p>
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