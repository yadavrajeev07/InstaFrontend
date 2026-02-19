import { useState, useEffect } from "react";
import { usePosts } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const SearchGrid = ({ searchQuery, activeTab }) => {
  const { posts } = usePosts();
  const { token, user: currentUser } = useAuth();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [users, setUsers] = useState([]);

  // 1️⃣ Filter posts locally for top/tags tab
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredPosts([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    let filtered = [];

    if (activeTab === "top" || activeTab === "tags") {
      filtered = posts.filter(
        (post) =>
          post.caption?.toLowerCase().includes(query) ||
          post.username.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, posts, activeTab]);

  // 2️⃣ Fetch users for accounts tab (works with or without login)
  useEffect(() => {
    if (activeTab !== "accounts" || !searchQuery.trim()) return;

    const fetchUsers = async () => {
      try {
        const headers = token
          ? { Authorization: `Bearer ${token}` }
          : {};

        const { data } = await axios.get(
          `/api/users/search?query=${searchQuery}`,
          { headers }
        );

        // Safely handle undefined data.users
        const updatedUsers = data?.users?.map((u) => ({
          _id: u._id,
          username: u.username,
          avatar: u.avatar || "/default-avatar.png",
          bio: u.bio || "",
          followerCount: u.followerCount || 0,
          followingCount: u.followingCount || 0,
          isFollowing: currentUser
            ? u.followers?.includes(currentUser._id)
            : false,
        })) || [];

        setUsers(updatedUsers);
      } catch (err) {
        console.error("Fetch users error:", err);
        setUsers([]);
      }
    };

    fetchUsers();
  }, [searchQuery, activeTab, currentUser, token]);

  // 3️⃣ Follow/unfollow a user (requires login)
  const handleFollow = async (userId) => {
    if (!token) {
      alert("You must be logged in to follow users");
      return;
    }

    try {
      const { data } = await axios.put(
        `/api/users/${userId}/follow`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUsers((prev) =>
        prev.map((u) =>
          u._id === userId
            ? { ...u, isFollowing: data.isFollowing, followers: data.followers }
            : u
        )
      );
    } catch (err) {
      console.error("Follow/unfollow error:", err);
    }
  };

  // 4️⃣ Render accounts tab
  if (activeTab === "accounts" && searchQuery) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Accounts</h2>
        {users.length > 0 ? (
          <div className="space-y-3">
            {users.map((user) => (
              <div
                key={user._id}
                className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-14 h-14 rounded-full object-cover"
                  onError={(e) => (e.target.src = "/default-avatar.png")}
                />
                <div className="ml-4 flex-1">
                  <div className="font-semibold">{user.username}</div>
                  <div className="text-gray-500">{user.bio}</div>
                  <div className="text-gray-500 text-sm">
                    {user.followerCount} followers • {user.followingCount} following
                  </div>
                </div>
                <button
                  onClick={() => handleFollow(user._id)}
                  className={`px-4 py-1.5 rounded-lg text-sm font-semibold ${
                    user.isFollowing
                      ? "bg-gray-100 text-black hover:bg-gray-200"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {user.isFollowing ? "Following" : "Follow"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No accounts found for "{searchQuery}"
          </div>
        )}
      </div>
    );
  }

  // 5️⃣ Render posts tab
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
                    onError={(e) => (e.target.src = "/default-avatar.png")}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L13.5 12l4.5 6H5l3.5-4.5z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-500">
            No posts found for "{searchQuery}"
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default SearchGrid;
