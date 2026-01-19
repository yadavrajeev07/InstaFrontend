import { Link } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiVideo,
  FiSend,
  FiHeart,
  FiUser,
} from "react-icons/fi";

const menu = [
  { name: "Home", icon: <FiHome />, path: "/" },
  { name: "Search", icon: <FiSearch />, path: "/search" },
  { name: "Explore", icon: <FiCompass />, path: "/explore" },
  { name: "Reels", icon: <FiVideo />, path: "/reels" },
  { name: "Messages", icon: <FiSend />, path: "/messages" },
  { name: "Notifications", icon: <FiHeart />, path: "/notifications" },
  { name: "Profile", icon: <FiUser />, path: "/profile" },
];

const LeftSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white pt-20 px-4 hidden md:block">
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 rounded-lg text-gray-800 hover:bg-gray-100 transition"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-base font-medium">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
