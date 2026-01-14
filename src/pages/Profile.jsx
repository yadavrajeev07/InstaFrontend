import { useAuth } from "../context/AuthContext";
import { usePosts } from "../context/PostContext";
import { useState } from "react";
import PostModal from "../components/PostModal";

const Profile = () => {
  const { user } = useAuth();
  const { posts } = usePosts();
  const [selectedPost, setSelectedPost] = useState(null);

  const userPosts = posts.filter((post) => post.username === user?.username);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white mt-6 rounded border">
        <div className="flex items-center gap-10">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-32 h-32 rounded-full"
          />
          <div>
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold">{user?.username}</h2>
              <button className="border px-4 py-1 rounded text-sm font-semibold hover:bg-gray-100">
                Edit Profile
              </button>
            </div>

            <div className="flex gap-6 mt-4 text-sm">
              <span><b>{userPosts.length}</b> posts</span>
              <span><b>340</b> followers</span>
              <span><b>180</b> following</span>
            </div>

            <p className="mt-4 text-sm">
              <b>{user?.username}</b> <br />
              Web Developer | React 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <div className="max-w-4xl mx-auto mt-6 grid grid-cols-3 gap-1">
        {userPosts.length === 0 ? (
          <p className="col-span-3 text-center text-gray-400">
            No posts yet. Create one!
          </p>
        ) : (
          userPosts.map((post) => (
            <div
              key={post.id}
              className="relative group w-full h-48 overflow-hidden cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <img
                src={post.image}
                alt="post"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 text-white text-sm font-semibold transition-opacity duration-300">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments?.length || 0}</span>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedPost && (
        <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
};

export default Profile;
