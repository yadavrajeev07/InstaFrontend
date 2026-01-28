import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import landingImg from "../assets/images/landing-2x.png";
import api from "../api/axios"; // ✅ axios instance

const Landing = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ❌ prevent empty login
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const { data } = await api.post("/auth/login", {
        username: username,
        password,
      });

      // ✅ save user + token
      login(data.user, data.token);
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid username or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex gap-10 max-w-6xl w-full px-4">

        {/* Left Side Image */}
        <div className="hidden md:flex w-1/2 justify-center">
          <img
            src={landingImg}
            alt="Instagram mockup"
            className="w-[550px] h-auto object-contain transform -rotate-2"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-center w-full md:w-96 space-y-4">

          <div className="flex flex-col items-center w-full p-8 space-y-4">

            {/* Logo */}
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
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            {/* Form */}
            <form
              className="w-full flex flex-col space-y-3"
              onSubmit={handleLogin}
            >
              <input
                type="text"
                placeholder="Phone number, username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-gray-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition disabled:opacity-50"
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </form>

            {/* OR */}
            <div className="flex items-center w-full my-2">
              <hr className="flex-1 border-gray-300" />
              <span className="px-2 text-gray-400 text-sm">OR</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Facebook */}
            <button className="text-blue-700 font-semibold text-sm hover:underline">
              Log in with Facebook
            </button>

            <Link
              to="/forgot-password"
              className="text-xs text-blue-500 mt-1"
            >
              Forgot password?
            </Link>
          </div>

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
