import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "../../components/LogoutButton";

const Nav: React.FC = () => {
  const access_token = localStorage.getItem("cb_access_token");

  return (
    <nav className="sticky top-0 z-50 flex h-14 w-full items-center justify-center gap-6 bg-gray-900 text-[15px] font-medium text-white">
      <Link to="/" className="hover:text-orange-300">
        Home
      </Link>

      <Link to="/dashboard" className="hover:text-orange-300">
        Dashboard
      </Link>

      {access_token ? (
        <LogoutButton />
      ) : (
        <Link to="/auth" className="hover:text-orange-300">
          Sign In / Sign Up
        </Link>
      )}
    </nav>
  );
};

export default Nav;
