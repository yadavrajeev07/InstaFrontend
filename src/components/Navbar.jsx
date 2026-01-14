// components/Navbar.jsx
import { Link } from "react-router-dom";
import { FiHome, FiSend, FiSearch, FiHeart, FiPlusSquare ,FiUser} from "react-icons/fi";


const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Left Logo */}
        <Link to="/home" className="text-2xl font-bold text-black">Instagram</Link>

        {/* Center Search */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-1 px-3 w-64 focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-xl">
           
       
          <FiSearch className="cursor-pointer" />
      
          <FiHome className="cursor-pointer" />
          <FiSend className="cursor-pointer" />
          <Link to="/post"><FiPlusSquare className="cursor-pointer" /></Link>
        
          <FiHeart className="cursor-pointer" />
           <Link to="/profile"><FiUser className="cursor-pointer" /></Link>
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
