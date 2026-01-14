// components/Sidebar.jsx
const suggestions = [
  { id: 1, user: "john_doe", avatar: "https://via.placeholder.com/30" },
  { id: 2, user: "jane_smith", avatar: "https://via.placeholder.com/30" },
  { id: 3, user: "alex_91", avatar: "https://via.placeholder.com/30" },
];

const Sidebar = () => {
  return (
    <div className="bg-white border rounded-md p-4">
      <h2 className="text-gray-500 text-sm mb-2">Suggestions For You</h2>
      <div className="space-y-3">
        {suggestions.map((s) => (
          <div key={s.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={s.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium">{s.user}</span>
            </div>
            <button className="text-blue-500 text-sm font-semibold">Follow</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
