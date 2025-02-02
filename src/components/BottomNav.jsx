import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, PlaySquareIcon, UserIcon,Mail } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray text-white flex justify-around items-center rounded-full shadow-xl border border-gray-700">
      <Link to="/home" className="group flex flex-col items-center gap-1 p-3 rounded-full hover:bg-gray-700 transition duration-300">
        <HomeIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300" />
        <span className="text-xs text-gray-400 group-hover:text-white">Home</span>
      </Link>

      <Link to="/reels" className="group flex flex-col items-center gap-1 p-3 rounded-full hover:bg-gray-700 transition duration-300">
        <PlaySquareIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300" />
        <span className="text-xs text-gray-400 group-hover:text-white">Reels</span>
      </Link>

      <Link to="/profile" className="group flex flex-col items-center gap-1 p-3 rounded-full hover:bg-gray-700 transition duration-300">
        <UserIcon className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300" />
        <span className="text-xs text-gray-400 group-hover:text-white">Profile</span>
      </Link>

      <Link to="/inbox" className="group flex flex-col items-center gap-1 p-3 rounded-full hover:bg-gray-700 transition duration-300">
        <Mail className="w-6 h-6 text-gray-400 group-hover:text-white transition duration-300" />
        <span className="text-xs text-gray-400 group-hover:text-white">Inbox</span>
      </Link>
    </div>
  );
};

export default BottomNav;
