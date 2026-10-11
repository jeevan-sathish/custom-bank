import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-center gap-6 bg-gray-900 text-[15px] font-medium text-white">
      <Link to="/" className="hover:text-orange-300">
        Home
      </Link>

      <Link to="/dashboard" className="hover:text-orange-300">
        Dashboard
      </Link>

      <Link to="/auth" className="hover:text-orange-300">
        Sign In / Sign Up
      </Link>
    </nav>
  );
};

export default Nav;
