import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ id: 1, username: "raj_dev" }); // set user in context
    navigate("/home");                       // go to Home
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Login Card */}
      <div className="flex flex-col items-center w-full max-w-sm p-8 bg-white space-y-4 shadow-md rounded">
        {/* Instagram Logo */}
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
          ></i>
        </div>

        {/* Login Form */}
        <form className="w-full flex flex-col space-y-2" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Phone number, username, or email"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Forgot password */}
        <div className="text-center w-full mt-2">
          <Link
            to="/forgot-password"
            className="text-xs text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* OR Separator */}
        <div className="flex items-center w-full my-2">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Facebook login */}
        <button className="w-full py-2 rounded bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 flex items-center justify-center gap-2 transition">
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
      </div>

      {/* Signup Redirect */}
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
