const suggestions = [
  {
    id: 1,
    user: "john_doe",
    name: "John",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    user: "jane_smith",
    name: "Jane",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    user: "alex_91",
    name: "Alex",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-full">
      {/* Logged in user */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=8"
            className="w-11 h-11 rounded-full"
            alt="me"
          />
          <div>
            <p className="text-sm font-semibold">your_username</p>
            <p className="text-xs text-gray-500">Your Name</p>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-semibold">
          Switch
        </button>
      </div>

      {/* Suggestions header */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-semibold text-gray-500">
          Suggestions For You
        </p>
        <button className="text-xs font-semibold">See All</button>
      </div>

      {/* Suggestions list */}
      <div className="space-y-4">
        {suggestions.map((s) => (
          <div
            key={s.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={s.avatar}
                className="w-8 h-8 rounded-full"
                alt={s.user}
              />
              <div>
                <p className="text-sm font-semibold">{s.user}</p>
                <p className="text-xs text-gray-400">
                  Suggested for you
                </p>
              </div>
            </div>

            <button className="text-blue-500 text-xs font-semibold hover:text-blue-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 text-xs text-gray-400 space-x-2 leading-relaxed">
        <span>About</span>·<span>Help</span>·<span>Press</span>·
        <span>API</span>·<span>Jobs</span>·<span>Privacy</span>·
        <span>Terms</span>
        <p className="mt-3">© 2026 INSTAGRAM CLONE</p>
      </div>
    </aside>
  );
};

export default Sidebar;
