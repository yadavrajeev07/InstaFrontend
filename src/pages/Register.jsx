import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          email: formData.email,
          fullName: formData.fullName,
          username: formData.username,
          password: formData.password,
        }
      );

      // ✅ Save token
      localStorage.setItem("token", res.data.token);

      // ✅ Redirect (home / login / feed)
      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">

      {/* Register Card */}
      <div className="flex flex-col items-center w-full max-w-sm p-8 bg-white space-y-4 shadow-md rounded">

        {/* Instagram Logo */}
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

        <h4 className="text-center text-sm text-gray-500">
          Sign up to see photos and videos from your friends.
        </h4>

        {/* Facebook Login */}
        <button className="w-full py-2 rounded bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 flex items-center justify-center gap-2">
          Log in with Facebook
        </button>

        {/* OR */}
        <div className="flex items-center w-full">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-xs text-center">{error}</p>
        )}

        {/* Form */}
        <form
          className="w-full flex flex-col space-y-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Mobile Number or Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition disabled:opacity-50"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-400 text-center">
          By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
        </p>
      </div>

      {/* Login Redirect */}
      <div className="w-full max-w-sm p-4 text-center mt-3 bg-white shadow rounded">
        <p className="text-sm">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
