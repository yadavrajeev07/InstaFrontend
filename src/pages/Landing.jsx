import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // ✅ ADD
import landingImg from "../assets/images/landing-2x.png";

const Landing = () => {
  const navigate = useNavigate();           // ✅ ADD
  const { login } = useAuth();               // ✅ ADD

  // ✅ ADD state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ✅ ADD handler
  const handleLogin = (e) => {
    e.preventDefault();

    // simple frontend login
    login({ username });

    // redirect after login
    navigate("/home"); // or "/home"
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex gap-10 max-w-6xl w-full px-4">

        {/* Left Side - Instagram Mockup Image */}
        <div className="hidden md:flex w-1/2 justify-center">
          <img
            src={landingImg}
            alt="Instagram mockup"
            className="w-[550px] h-auto object-contain transform -rotate-2"
          />
        </div>

        {/* Right Side - Login / Signup Form */}
        <div className="flex flex-col items-center w-full md:w-96 space-y-4">

          {/* Login Card */}
          <div className="flex flex-col items-center w-full p-8 space-y-4">
            {/* Instagram Logo */}
            <div className="mb-4">
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
                  display: "inline-block",
                }}
              ></i>
            </div>

            {/* Form */}
            <form
              className="w-full flex flex-col space-y-3"
              onSubmit={handleLogin}        // ✅ ADD
            >
              <input
                type="text"
                placeholder="Phone number, username or email"
                value={username}            // ✅ ADD
                onChange={(e) => setUsername(e.target.value)} // ✅ ADD
                className="w-full p-2 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}            // ✅ ADD
                onChange={(e) => setPassword(e.target.value)} // ✅ ADD
                className="w-full p-2 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 hover:scale-105 transition-transform duration-150"
              >
                Log In
              </button>
            </form>

            {/* OR Separator */}
            <div className="flex items-center w-full my-2">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Facebook Login */}
            <button className="text-blue-700 font-semibold flex items-center justify-center gap-2 text-sm hover:underline">
              <svg
                aria-label="Log in with Facebook"
                fill="currentColor"
                height="20"
                width="20"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"></path>
              </svg>
              Log in with Facebook
            </button>

            {/* Forgot Password */}
            <a
              href="/accounts/password/reset/"
              className="text-xs text-blue-500 mt-1"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign Up Prompt */}
          <div className="p-4 w-full text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-500 font-semibold">
              Sign up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Landing;
