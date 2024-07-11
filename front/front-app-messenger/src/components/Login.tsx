import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { TbMessageCirclePause } from "react-icons/tb";

// GraphQL Mutations
const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      access_token
    }
  }
`;

const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      access_token
    }
  }
`;

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [signUp] = useMutation(SIGNUP_MUTATION);
  const [signIn] = useMutation(SIGNIN_MUTATION);

  const handleSwitchMode = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isSignUp) {
        const { data } = await signUp({ variables: { email, password } });
        console.log("Sign Up Success:", data);
        // Store token in local storage or context
        localStorage.setItem("token", data.register.access_token);
      } else {
        const { data } = await signIn({ variables: { email, password } });
        console.log("Sign In Success:", data);
        // Store token in local storage or context
        localStorage.setItem("token", data.login.access_token);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
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
