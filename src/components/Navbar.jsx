import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiFilm,
  FiSend,
  FiHeart,
  FiPlusSquare,
  FiUser,
  FiMenu,
} from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const itemClass = (active) =>
    `flex items-center gap-4 px-3 py-3 rounded-lg cursor-pointer
     ${active ? "font-semibold" : "font-normal"}
     hover:bg-gray-100`;

  return (
    <nav className="fixed left-0 top-8 h-screen w-[240px] bg-white border-r border-gray-200 flex flex-col z-50">
      
      {/* Logo */}
      
        <Link to="/home">
          <div>
          <i
            role="img"
            aria-label="Instagram"
            style={{
              backgroundImage:
                "url('https://static.cdninstagram.com/rsrc.php/v4/yz/r/H_-3Vh0lHeK.png')",
              backgroundPosition: "0px -2959px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "auto",
              width: "175px",
              height: "51px",
               transform: "scale(0.6)",   
              display: "inline-block",
            }}
          ></i>
        </div>
        </Link>
      

      {/* Menu */}
      <div className="flex flex-col gap-1 px-4 text-[16px] pt-4">

        <Link to="/home" className={itemClass(isActive("/home"))}>
          <FiHome size={24} />
          <span>Home</span>
        </Link>

        <div className={itemClass(false)}>
          <FiSearch size={24} />
          <span>Search</span>
        </div>

        <div className={itemClass(false)}>
          <FiCompass size={24} />
          <span>Explore</span>
        </div>

        <div className={itemClass(false)}>
          <FiFilm size={24} />
          <span>Reels</span>
        </div>

        <div className={itemClass(false)}>
          <FiSend size={24} />
          <span>Messages</span>
        </div>

        <div className={itemClass(false)}>
          <FiHeart size={24} />
          <span>Notifications</span>
        </div>

        <Link to="/post" className={itemClass(isActive("/post"))}>
          <FiPlusSquare size={24} />
          <span>Create</span>
        </Link>

        <Link to="/profile" className={itemClass(isActive("/profile"))}>
          <FiUser size={24} />
          <span>Profile</span>
        </Link>
      </div>

      {/* Bottom */}
      <div className="mt-auto px-4 py-4 space-y-2">
        <div className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <FiMenu size={22} />
          <span>More</span>
        </div>

        <div className="flex items-center gap-4 px-3 py-3 rounded-lg hover:bg-gray-100 cursor-pointer">
          <img
            src="https://via.placeholder.com/28"
            alt="Profile"
            className="rounded-full"
          />
          <span className="text-sm font-medium">Your Profile</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
