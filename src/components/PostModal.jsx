import { useState } from "react";

const PostModal = ({ post, onClose }) => {
  const [liked, setLiked] = useState(post.liked || false);
  const [likes, setLikes] = useState(post.likes || 0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full flex rounded overflow-hidden">
        {/* Image */}
        <div className="w-1/2">
          <img src={post.image} alt="post" className="w-full h-full object-cover" />
        </div>

        {/* Right section */}
        <div className="w-1/2 p-4 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">{post.username}</span>
            <button onClick={onClose} className="text-gray-500 text-xl">&times;</button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <p>{post.caption}</p>
            {post.comments &&
              post.comments.map((c, i) => (
                <p key={i}>
                  <span className="font-semibold">{c.username}</span> {c.text}
                </p>
              ))}
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <button onClick={toggleLike} className="text-2xl">
              {liked ? "❤️" : "🤍"}
            </button>
            <span>{likes} {likes === 1 ? "like" : "likes"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
