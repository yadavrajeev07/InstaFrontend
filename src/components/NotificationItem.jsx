import { useState } from "react";

const NotificationItem = ({ data, onMarkAsRead, onFollow }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return (
          <div className="w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.5 0h-17A3.5 3.5 0 0 0 0 3.5v17A3.5 3.5 0 0 0 3.5 24h17a3.5 3.5 0 0 0 3.5-3.5v-17A3.5 3.5 0 0 0 20.5 0Zm-8.5 17a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5Z" />
            </svg>
          </div>
        );
      case "comment":
        return (
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </div>
        );
      case "follow":
        return (
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        );
      case "share":
        return (
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
            </svg>
          </div>
        );
    }
  };

  const handleFollowClick = (e) => {
    e.stopPropagation();
    setIsFollowing(!isFollowing);
    onFollow?.();
  };

  return (
    <div
      className={`p-4 flex items-start gap-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors relative ${
        !data.read ? "bg-blue-50 hover:bg-blue-100" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onMarkAsRead}
    >
      {/* Unread indicator */}
      {!data.read && (
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
      )}

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <img
          src={data.avatar}
          alt={data.user}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="absolute -bottom-1 -right-1">
          {getIcon(data.type)}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="font-semibold truncate">{data.user}</span>
          {data.fullName && (
            <span className="text-gray-500 truncate">{data.fullName}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mt-1">
          {data.action}
          <span className="text-gray-400 ml-2">{data.time}</span>
        </p>

        {/* Action buttons */}
        {data.type === "follow" && (
          <div className="mt-3">
            <button
              onClick={handleFollowClick}
              className={`px-4 py-1.5 text-sm font-semibold rounded-lg ${
                isFollowing
                  ? "bg-gray-100 text-black hover:bg-gray-200"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              } transition-colors`}
            >
              {isFollowing ? "Following" : "Follow back"}
            </button>
          </div>
        )}
      </div>

      {/* Post preview image (if applicable) */}
      {data.postImg && (
        <div className="flex-shrink-0 ml-3">
          <img
            src={data.postImg}
            alt="Post"
            className="w-14 h-14 rounded-md object-cover"
          />
        </div>
      )}

      {/* Options button */}
      {isHovered && (
        <button
          className="text-gray-400 hover:text-gray-600 p-1"
          onClick={(e) => {
            e.stopPropagation();
            console.log("Options clicked for:", data.id);
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default NotificationItem;