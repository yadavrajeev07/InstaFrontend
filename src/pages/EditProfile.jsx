import { useState, useEffect } from "react";
import axios from "../api/axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const EditProfile = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bio: "",
  });

  const [avatar, setAvatar] = useState(null); // Selected file
  const [preview, setPreview] = useState(null); // Preview URL
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Initialize form values from user
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        bio: user.bio || "",
      });
      setPreview(user.avatar || "/default-avatar.png");
    }
  }, [user]);

  // Handle text input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle avatar selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file)); // Show preview
    }
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();
      data.append("username", formData.username);
      data.append("email", formData.email);
      data.append("bio", formData.bio);
      if (avatar) data.append("avatar", avatar);

      const res = await axios.put("/users/profile", data); // Axios automatically sets multipart headers

      // Update user in AuthContext and localStorage
      setUser(res.data.user || res.data);
      localStorage.setItem("user", JSON.stringify(res.data.user || res.data));

      navigate("/profile");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return null; // Prevent rendering if user is not loaded

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r">
        <Navbar />
      </div>

      {/* Main content */}
      <div className="flex-1 ml-[72px] md:ml-[244px] p-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Edit Profile</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Avatar */}
            <div className="flex items-center gap-6">
              <img
                src={preview || "/default-avatar.png"}
                alt="avatar"
                className="w-20 h-20 rounded-full object-cover border"
              />
              <label className="text-blue-500 font-semibold cursor-pointer">
                Change profile photo
                <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
              </label>
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-md"
                required
              />
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={4}
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
