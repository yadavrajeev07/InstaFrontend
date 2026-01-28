import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ❌ Stop if empty
    if (!identifier || !password) {
      setError("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: identifier,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Save user & token in context
      login(data.user, data.token);

      // ✅ Optional: store token
      localStorage.setItem("token", data.token);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center w-full max-w-sm p-8 bg-white space-y-4 shadow-md rounded">
        {/* Logo */}
        <div>
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

        {/* Login Form */}
        <form className="w-full flex flex-col space-y-2" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="text-center w-full mt-2">
          <Link
            to="/forgot-password"
            className="text-xs text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </div>

      <div className="w-full max-w-sm p-4 text-center mt-3 bg-white shadow rounded">
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
