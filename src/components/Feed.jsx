// components/Feed.jsx
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

const posts = [
  {
    id: 1,
    user: "raj_dev",
    avatar: "https://via.placeholder.com/40",
    image: "https://via.placeholder.com/600x400",
    caption: "Hello Instagram!",
    likes: 120,
  },
  {
    id: 2,
    user: "devraj",
    avatar: "https://via.placeholder.com/40",
    image: "https://via.placeholder.com/600x400",
    caption: "Another post",
    likes: 75,
  },
];

const Feed = () => {
  return (
    <div className="space-y-6 mt-20">
      {posts.map((post) => (
        <div key={post.id} className="bg-white border rounded-md shadow-sm">
          {/* Post Header */}
          <div className="flex items-center p-3">
            <img src={post.avatar} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
            <span className="font-semibold">{post.user}</span>
          </div>

          {/* Post Image */}
          <img src={post.image} alt="post" className="w-full" />

          {/* Post Actions */}
          <div className="flex items-center space-x-4 p-3 text-xl">
            <FiHeart className="cursor-pointer" />
            <FiMessageCircle className="cursor-pointer" />
            <FiSend className="cursor-pointer" />
          </div>

          {/* Likes & Caption */}
          <div className="px-3 pb-3">
            <span className="font-semibold">{post.likes} likes</span>
            <p>
              <span className="font-semibold mr-1">{post.user}</span>
              {post.caption}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
