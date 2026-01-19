import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Navbar from "../components/Navbar";

const CropPost = ({ image, onNext, onBack }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[730px] rounded-xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <button onClick={onBack} className="font-semibold">
            ←
          </button>
          <span className="font-semibold">Crop</span>
          <button
            onClick={() => onNext({ crop, zoom })}
            className="text-blue-500 font-semibold"
          >
            Next
          </button>
        </div>

        {/* Crop Area */}
        <div className="relative h-[520px] bg-black">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
          />
        </div>

        {/* Controls */}
        <div className="p-4 flex items-center gap-4">
          <span className="text-sm">Zoom</span>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CropPost;
