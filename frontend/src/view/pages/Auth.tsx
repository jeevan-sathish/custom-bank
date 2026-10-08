import React, { useState } from "react";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const Auth: React.FC = () => {
  const [authState, setAuthState] = useState<"signup" | "signin">("signup");
  return (
    <div>
      <div>
        <button onClick={() => setAuthState("signup")}>SignUP</button>
        <button onClick={() => setAuthState("signin")}>SignIN </button>
      </div>

      {authState === "signup" ? <Signup /> : <Signin />}
    </div>
  );
};

export default Auth;
