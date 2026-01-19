import { useState } from "react";
import Navbar from "../components/Navbar";
import CropPost from "./CropPost";
import { usePosts } from "../context/PostContext";
import { useAuth } from "../context/AuthContext";

const CreatePost = () => {
  const { addPost } = usePosts();
  const { user } = useAuth();

  const [image, setImage] = useState(null);
  const [step, setStep] = useState("select");
  const [caption, setCaption] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
    setStep("crop");
  };

  const handleShare = () => {
    addPost({
      id: Date.now(),
      image,
      caption,
      username: user.username,
      likes: 0,
    });
    setStep("select");
    setImage(null);
    setCaption("");
  };

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />

      {step === "select" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[730px] rounded-xl overflow-hidden">
            <div className="text-center py-3 font-semibold border-b">
              Create new post
            </div>

            <label className="h-[520px] flex flex-col items-center justify-center gap-4 cursor-pointer">
              <h3 className="text-xl">Drag photos and videos here</h3>
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
              <span className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold">
                Select from computer
              </span>
            </label>
          </div>
        </div>
      )}

      {step === "crop" && (
        <CropPost
          image={image}
          onBack={() => setStep("select")}
          onNext={() => setStep("caption")}
        />
      )}

      {step === "caption" && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[730px] rounded-xl overflow-hidden flex">
            <img src={image} className="w-[430px] object-cover" />

            <div className="flex-1 p-4 flex flex-col">
              <span className="font-semibold mb-2">{user.username}</span>

              <textarea
                placeholder="Write a caption..."
                className="flex-1 outline-none resize-none"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />

              <button
                onClick={handleShare}
                className="text-blue-500 font-semibold mt-4"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
