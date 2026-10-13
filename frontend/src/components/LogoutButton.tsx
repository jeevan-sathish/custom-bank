import React from "react";
import { Navigate } from "react-router-dom";
import { handleLogout } from "../utils/handleLogout";

const LogoutButton: React.FC = () => {
  const token = localStorage.getItem("cb_access_token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <button onClick={handleLogout} className="rounded-2xl bg-red-500 p-1">
      Logout
    </button>
  );
};

export default LogoutButton;
