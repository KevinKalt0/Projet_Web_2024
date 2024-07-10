import React, { useState } from "react";
import { TbMessageCirclePause } from "react-icons/tb";

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Email:", email);
    console.log("Password:", password);
    if (isSignUp) {
      // Handle sign up
      console.log("Sign Up");
    } else {
      // Handle sign in
      console.log("Sign In");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#211A44]">
      <div className="bg-[#5C5792] p-8 rounded-lg shadow-lg w-96">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <TbMessageCirclePause className="text-black text-6xl" />
        </div>

        {/* Title */}
        <h1 className="text-white text-2xl font-medium mb-4">
          {isSignUp ? "Create Account" : "Sign In"}
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-dark text-gray-900 p-2 rounded-lg mb-4 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-dark text-gray-900 p-2 rounded-lg mb-4 outline-none"
          />
          <button
            type="submit"
            className="bg-[#E3BAD5] text-white p-2 rounded-lg hover:bg-[#24D26D] transition"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        {/* Switch mode */}
        <div className="mt-4 text-center">
          <p className="text-white">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              onClick={handleSwitchMode}
              className="text-[#E3BAD5] ml-2 hover:underline"
            >
              {isSignUp ? "Sign In" : "Create Account"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
