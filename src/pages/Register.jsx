import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      
      {/* Register Card */}
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

        <h4 className="text-center text-sm text-gray-500">
          Sign up to see photos and videos from your friends.
        </h4>

        {/* Facebook Login */}
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

        {/* OR Separator */}
        <div className="flex items-center w-full my-2">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Sign Up Form */}
        <form className="w-full flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Mobile Number or Email"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold text-sm hover:bg-blue-600 mt-2 transition"
          >
            Sign up
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-gray-400 text-center mt-2">
          By signing up, you agree to our{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Terms
          </a>
          ,{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Cookies Policy
          </a>
          .
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
