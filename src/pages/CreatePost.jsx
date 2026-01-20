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
    // Reset everything
    setStep("select");
    setImage(null);
    setCaption("");
  };

  const handleCloseAll = () => {
    setStep("select");
    setImage(null);
    setCaption("");
  };
  

  const handleBackToSelect = () => {
    setStep("select");
    setImage(null);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Fixed Sidebar Navbar */}
      <div className="fixed top-0 left-0 h-screen w-[72px] md:w-[244px] border-r border-gray-200 bg-white">
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-[72px] md:ml-[244px] p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-semibold mb-6">Create Post</h1>
          
          {/* This is where you could add any additional content */}
          <div className="text-gray-500 text-center py-20">
            <p className="text-lg mb-4">Click the button below to create a new post</p>
            <button 
              onClick={() => setStep("select")}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Create New Post
            </button>
          </div>
        </div>

        {/* Step 1: Select Image Modal */}
        {step === "select" && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-[730px] rounded-xl overflow-hidden mx-4 relative">
              {/* Close Button */}
              <button
                onClick={handleCloseAll}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 p-2"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="text-center py-4 font-semibold text-lg border-b">
                Create new post
              </div>

              <label className="h-[520px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3 4V8h-3V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8h-3zM5 19l3-4 2 3 3-4 4 5H5z"/>
                  </svg>
                  <h3 className="text-2xl font-light mb-2">Drag photos and videos here</h3>
                  <p className="text-gray-500 mb-6">Choose from your computer</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
                <span className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                  Select from computer
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Step 2: Crop Image */}
        {step === "crop" && image && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="relative">
              <button
                onClick={handleCloseAll}
                className="absolute -top-10 -right-10 text-white hover:text-gray-300 z-10 p-2"
                aria-label="Close"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <CropPost
                image={image}
                onBack={handleBackToSelect}
                onNext={() => setStep("caption")}
                onClose={handleCloseAll}
              />
            </div>
          </div>
        )}

        {/* Step 3: Add Caption */}
        {step === "caption" && image && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-[730px] rounded-xl overflow-hidden mx-4 flex flex-col md:flex-row relative">
              {/* Close Button */}
              <button
                onClick={handleCloseAll}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 p-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="md:w-[430px] h-[400px] md:h-[520px] bg-gray-100">
                <img 
                  src={image} 
                  alt="Preview" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col min-h-[400px] md:min-h-[520px]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                    {user?.avatar && (
                      <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <span className="font-semibold">{user?.username || "User"}</span>
                </div>

                <textarea
                  placeholder="Write a caption..."
                  className="flex-1 outline-none resize-none text-lg placeholder-gray-400"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  autoFocus
                />

                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <button
                    onClick={() => setStep("crop")}
                    className="text-gray-600 hover:text-gray-900 font-medium"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleShare}
                    className={`px-6 py-2 rounded-lg font-semibold ${caption.trim() ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed'} transition-colors`}
                    disabled={!caption.trim()}
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;