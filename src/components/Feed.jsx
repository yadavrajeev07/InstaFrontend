import { useState } from "react";

const posts = [
  {
    id: 1,
    user: "starsportsindia",
    avatar: "https://i.pravatar.cc/150?img=10",
    image: "https://images.unsplash.com/photo-1547347298-4074fc3086f0",
    likes: 133400,
    caption: "Sights set on the win 🏏 #KingKohli",
    time: "3h",
    verified: true,
  },
  {
    id: 2,
    user: "espncricinfo",
    avatar: "https://i.pravatar.cc/150?img=22",
    image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",
    likes: 92100,
    caption: "Match day vibes 🔥",
    time: "6h",
    verified: false,
  },
];

const Feed = () => {
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-md ">
          {/* Header */}
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <img
                src={post.avatar}
                className="w-8 h-8 rounded-full"
                alt="avatar"
              />
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">{post.user}</span>
                {post.verified && (
                  <svg
                    aria-label="Verified"
                    className="ml-1"
                    fill="rgb(0, 149, 246)"
                    height="12"
                    viewBox="0 0 40 40"
                    width="12"
                  >
                    <path
                      d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                      fillRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            <button className="text-xl">⋯</button>
          </div>

          {/* Image */}
          <img
            src={post.image}
            alt="post"
            className="w-full object-cover max-h-[600px] rounded-md"
          />

          {/* Actions */}
          <div className="flex justify-between items-center p-3">
            <div className="flex gap-4 text-xl">
              {/* Like */}
              <button
                onClick={() => toggleLike(post.id)}
                className={`transition-colors ${
                  likedPosts[post.id] ? "text-red-500" : "text-gray-800"
                }`}
              >
                <svg
                  aria-label="Like"
                  fill={likedPosts[post.id] ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                </svg>
              </button>

              {/* Comment */}
              <button className="hover:text-blue-500 transition-colors">
                <svg
                  aria-label="Comment"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"></path>
                </svg>
              </button>

              {/* Share */}
              <button className="hover:text-blue-400 transition-colors">
                <svg
                  aria-label="Share"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"></path>
                </svg>
              </button>
            </div>

            {/* Save */}
            <button className="hover:text-gray-700 transition-colors">
              <svg
                aria-label="Save"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
                height="24"
                width="24"
                viewBox="0 0 24 24"
              >
                <path d="M13.973 20.046 21.77 6.928C22.8 5.195 21.55 3 19.535 3H4.466C2.138 3 .984 5.825 2.646 7.456l4.842 4.752 1.723 7.121c.548 2.266 3.571 2.721 4.762.717Z"></path>
              </svg>
            </button>
          </div>

          {/* Likes */}
          <div className="px-3 text-sm font-semibold">
            {likedPosts[post.id]
              ? post.likes + 1
              : post.likes}{" "}
            likes
          </div>

          {/* Caption */}
          <div className="px-3 py-1 text-sm">
            <span className="font-semibold mr-1">{post.user}</span>
            {post.caption}
          </div>

          {/* Time */}
          <div className="px-3 pb-3 text-xs text-gray-400">{post.time} ago</div>
        </article>
      ))}
    </div>
  );
};

export default Feed;
