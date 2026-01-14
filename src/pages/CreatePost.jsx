import { useState } from "react";
import Navbar from "../components/Navbar";
import { usePosts } from "../context/PostContext"; // <-- import PostContext
import { useAuth } from "../context/AuthContext";

const CreatePost = () => {
  const { addPost } = usePosts(); // function to add post globally
  const { user } = useAuth(); // current logged in user

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image!");
      return;
    }

    // Add post to global state
    addPost({
      id: Date.now(),
      image: preview,
      caption,
      username: user.username,
      likes: 0,
    });

    // Reset form
    setCaption("");
    setImage(null);
    setPreview(null);

    alert("Post shared successfully!");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-md mx-auto bg-white mt-10 border rounded">
        <h2 className="text-center font-semibold border-b p-3">
          Create new post
        </h2>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Image Preview */}
          {preview ? (
            <img
              src={preview}
              alt="preview"
              className="w-full h-64 object-cover rounded"
            />
          ) : (
            <label className="flex flex-col items-center justify-center h-64 border-2 border-dashed rounded cursor-pointer text-gray-400">
              <span>Select image</span>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
            </label>
          )}

          {/* Caption */}
          <textarea
            placeholder="Write a caption..."
            className="w-full border p-2 rounded resize-none"
            rows="3"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
          >
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
