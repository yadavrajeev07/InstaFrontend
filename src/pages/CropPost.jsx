// CropPost.jsx
const CropPost = ({ image, onBack, onNext, onClose }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-full max-w-[730px]">
      <div className="relative">
        {/* Header with back button and title */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <button
            onClick={onBack}
            className="text-blue-500 font-medium hover:text-blue-600"
          >
            Back
          </button>
          <h2 className="font-semibold">Crop</h2>
          {/* If you want a close button in the header too */}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Your crop content here */}
        <div className="p-4">
          {/* Image cropping area */}
          <img src={image} alt="Crop preview" className="max-h-[400px] mx-auto" />
          
          {/* Crop controls */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={onBack}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={onNext}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropPost;