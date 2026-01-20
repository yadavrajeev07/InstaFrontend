const users = [
  { id: 1, username: "Rishabh", avatar: "https://via.placeholder.com/56" },
  { id: 2, username: "Piyush", avatar: "https://via.placeholder.com/56" },
  { id: 3, username: "Alisha", avatar: "https://via.placeholder.com/56" },
];

const ChatSidebar = ({ onSelectUser, activeUser }) => {
  return (
    <div className="w-[360px] h-screen border-r bg-white flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-2 cursor-pointer">
          <h2 className="font-semibold text-lg">Rajeev</h2>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.5a1 1 0 0 1-.7-.29l-9-9a1 1 0 1 1 1.4-1.42L12 15.1l8.3-8.3a1 1 0 1 1 1.4 1.42l-9 9a1 1 0 0 1-.7.29Z" />
          </svg>
        </div>

        <button>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 3v18M3 12h18" />
          </svg>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b">
        <button className="flex-1 py-2 text-sm font-semibold border-b-2 border-black">
          Primary
        </button>
        <button className="flex-1 py-2 text-sm text-gray-400">
          General
        </button>
        <button className="flex-1 py-2 text-sm text-gray-400">
          Requests
        </button>
      </div>

      {/* Search */}
      <div className="p-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded-lg bg-gray-100 outline-none text-sm"
        />
      </div>

      {/* Users list */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectUser(user)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer
              ${
                activeUser?.id === user.id
                  ? "bg-gray-100"
                  : "hover:bg-gray-50"
              }`}
          >
            <img
              src={user.avatar}
              alt=""
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-sm">{user.username}</p>
              <p className="text-xs text-gray-400">
                Your thoughts go here...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
