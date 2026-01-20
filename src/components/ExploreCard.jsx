import { FiHeart, FiMessageCircle } from "react-icons/fi";

const ExploreCard = ({ post, onClick }) => {
  return (
    <div
      className={`relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 hover:scale-[1.02] ${
        post.large ? "h-[400px]" : "h-[300px]"
      }`}
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={post.img}
        alt={post.caption}
        className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <div className="text-white">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-xs font-bold">{post.username.charAt(0)}</span>
            </div>
            <span className="font-semibold">{post.username}</span>
          </div>
          <p className="text-sm text-white/90 line-clamp-2">{post.caption}</p>
        </div>
        
        <div className="flex items-center gap-6 mt-4 text-white">
          <div className="flex items-center gap-2 font-semibold">
            <FiHeart className="w-5 h-5" />
            {post.likes >= 1000 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <FiMessageCircle className="w-5 h-5" />
            {post.comments}
          </div>
        </div>
      </div>

      {/* Quick stats (visible on hover) */}
      <div className="absolute top-4 right-4 flex items-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.5 0h-17A3.5 3.5 0 0 0 0 3.5v17A3.5 3.5 0 0 0 3.5 24h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 20.5 0Zm-8.5 17a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
          </svg>
          <span>{post.likes >= 1000 ? `${(post.likes / 1000).toFixed(1)}k` : post.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;