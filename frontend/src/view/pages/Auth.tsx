import { useState } from "react";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const Auth: React.FC = () => {
  const [authState, setAuthState] = useState<"signup" | "signin">("signup");

  function toggleSignup() {
    setAuthState("signup");
  }

  function toggleSignin() {
    setAuthState("signin");
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black text-white gap-5">
      <div className="w-full max-w-md h-16 p-2 rounded-2xl bg-gray-800 flex gap-2">
        <button
          className={`w-1/2 rounded-xl font-semibold transition ${
            authState === "signup"
              ? "bg-blue-600 text-white"
              : "bg-gray-900 text-gray-400"
          }`}
          onClick={toggleSignup}
        >
          Sign Up
        </button>

        <button
          className={`w-1/2 rounded-xl font-semibold transition ${
            authState === "signin"
              ? "bg-blue-600 text-white"
              : "bg-gray-900 text-gray-400"
          }`}
          onClick={toggleSignin}
        >
          Sign In
        </button>
      </div>

      {authState === "signup" ? <Signup /> : <Signin />}
    </div>
  );
};

export default Auth;
